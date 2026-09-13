/**
 * Dedicated Fire Protection System mains, the fire halls, and the City of
 * Vancouver boundary all three sit inside.
 *
 * Source:  City of Vancouver Open Data Portal
 *          dedicated-fire-protection-systems-dfps-water-mains
 *          city-boundary
 *          fire-halls
 * Licence: Open Government Licence - Vancouver, stated on each dataset record
 *          (`metas.default.license`), not inferred from the portal.
 *
 * What the reduction does: drops every attribute except the main's diameter,
 * rounds coordinates to five decimal places (about 0.7 m of longitude at this
 * latitude) and removes vertices that move the drawn line by less than a metre.
 * The mains are short, nearly straight runs, so almost nothing is removed; the
 * saving is in the attributes and the coordinate precision.
 *
 * Run: node scripts/data/build-fire-protection.mjs
 */

import { download, isMain, readJson, writeVendored } from "./lib/io.mjs";
import { geometryLines, reduceLine } from "./lib/geo.mjs";

const REF_LAT = 49.27;
const DIGITS = 5;
const TOLERANCE_M = 1;

const MAINS_URL =
  "https://opendata.vancouver.ca/api/explore/v2.1/catalog/datasets/" +
  "dedicated-fire-protection-systems-dfps-water-mains/exports/geojson";
const BOUNDARY_URL =
  "https://opendata.vancouver.ca/api/explore/v2.1/catalog/datasets/" +
  "city-boundary/exports/geojson";
const HALLS_URL =
  "https://opendata.vancouver.ca/api/explore/v2.1/catalog/datasets/" +
  "fire-halls/exports/geojson";

/**
 * The hall's number, out of the City's own name for it. The layer names every
 * record "No 7", so the number is in the data rather than assigned here; a
 * record that did not parse would be dropped silently, so it throws instead.
 */
function hallNumber(name) {
  const match = /^No\s+(\d+)$/.exec(String(name).trim());
  if (!match) throw new Error(`Unexpected fire hall name: ${JSON.stringify(name)}`);
  return Number(match[1]);
}

function round(value, digits) {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function boundsOf(lines) {
  let west = Infinity;
  let south = Infinity;
  let east = -Infinity;
  let north = -Infinity;
  for (const line of lines) {
    for (const [lon, lat] of line) {
      if (lon < west) west = lon;
      if (lon > east) east = lon;
      if (lat < south) south = lat;
      if (lat > north) north = lat;
    }
  }
  return [west, south, east, north].map((n) => Math.round(n * 1e4) / 1e4);
}

export async function buildFireProtection() {
  process.stdout.write("Dedicated Fire Protection System mains\n");

  const mains = readJson(await download(MAINS_URL, "cov-dfps-mains.geojson"));
  const runs = [];
  let before = 0;
  let after = 0;
  for (const feature of mains.features) {
    for (const line of geometryLines(feature.geometry)) {
      before += line.length;
      const reduced = reduceLine(line, {
        tolerance: TOLERANCE_M,
        digits: DIGITS,
        refLat: REF_LAT,
      });
      if (!reduced) continue;
      after += reduced.length;
      runs.push({ mm: feature.properties.diameter_mm ?? null, c: reduced });
    }
  }
  process.stdout.write(`  mains   ${runs.length} runs, ${before} -> ${after} vertices\n`);

  const boundary = readJson(await download(BOUNDARY_URL, "cov-city-boundary.geojson"));
  const outline = [];
  let boundaryBefore = 0;
  for (const feature of boundary.features) {
    for (const line of geometryLines(feature.geometry)) {
      boundaryBefore += line.length;
      const reduced = reduceLine(line, {
        tolerance: 25,
        digits: 4,
        refLat: REF_LAT,
      });
      if (reduced) outline.push(reduced);
    }
  }
  const boundaryAfter = outline.reduce((n, l) => n + l.length, 0);
  process.stdout.write(
    `  bound.  ${outline.length} lines, ${boundaryBefore} -> ${boundaryAfter} vertices\n`,
  );

  const halls = readJson(await download(HALLS_URL, "cov-fire-halls.geojson"));
  const points = halls.features
    .map((feature) => {
      const [lon, lat] = feature.geometry.coordinates;
      return {
        no: hallNumber(feature.properties.name),
        address: feature.properties.address,
        area: feature.properties.geo_local_area || null,
        c: [round(lon, DIGITS), round(lat, DIGITS)],
      };
    })
    .sort((a, b) => a.no - b.no);
  process.stdout.write(`  halls   ${points.length} points\n`);

  writeVendored("fire-protection-mains.json", {
    source: "cov-dfps-mains",
    geometry: "lines",
    crs: "EPSG:4326",
    precision: "5 decimal places (about 0.7 m of longitude at 49 degrees N)",
    bbox: boundsOf(runs.map((r) => r.c)),
    runs,
  });
  writeVendored("vancouver-boundary.json", {
    source: "cov-city-boundary",
    geometry: "lines",
    crs: "EPSG:4326",
    precision: "4 decimal places (about 7 m of longitude at 49 degrees N)",
    bbox: boundsOf(outline),
    lines: outline,
  });
  writeVendored("fire-halls.json", {
    source: "cov-fire-halls",
    geometry: "points",
    crs: "EPSG:4326",
    precision: "5 decimal places (about 0.7 m of longitude at 49 degrees N)",
    /**
     * The City's own caveat, carried out of the record rather than retyped on
     * the page: "Locations are approximate." The drawing is of where a hall is
     * in the city, never of which side of a street corner it stands on.
     */
    accuracy: "Locations are approximate.",
    bbox: boundsOf([points.map((p) => p.c)]),
    halls: points,
  });
}

if (isMain(import.meta.url)) {
  await buildFireProtection();
}
