/**
 * Coastline, river water and highway crossings for the getting-around map.
 *
 * The three sentences this supports carry no source key because they claim
 * nothing about earthquakes: Vancouver is a peninsula with its land route
 * running east through Burnaby and New Westminster; Richmond and Delta are
 * reached only by bridges and a tunnel; the North Shore has two vehicle
 * crossings with mountains behind. What the map needs is water, land and
 * crossing points, and no hazard layer at all.
 *
 * Sources, each confirmed on its own BC Data Catalogue record rather than
 * inferred from the domain:
 *   Freshwater Atlas - Coastlines   WHSE_BASEMAPPING.FWA_COASTLINES_SP
 *     Open Government Licence - British Columbia
 *   Freshwater Atlas - Rivers       WHSE_BASEMAPPING.FWA_RIVERS_POLY
 *     Open Government Licence - British Columbia
 *   Ministry of Transportation (MOT) Road Structures
 *     WHSE_IMAGERY_AND_BASE_MAPS.MOT_ROAD_STRUCTURE_SP
 *     Open Government Licence - British Columbia
 *
 * The crossings layer is provincial structures only. It does not contain the
 * City of Vancouver's own bridges, and a map that drew it as "the crossings"
 * would overstate how isolated Richmond and the peninsula are. See
 * docs/research/maps.md.
 *
 * Run: node scripts/data/build-region-geography.mjs
 */

import { download, isMain, readJson, writeVendored } from "./lib/io.mjs";
import { geometryLines, maxDeviation, reduceLine } from "./lib/geo.mjs";

/**
 * Four windows, because four maps need this water at four scales and a
 * reduction is only honest at the size it was cut for.
 *
 * `getting-around` is the tight window: 51 km across, drawn at about 700 px,
 * so 60 m of deviation is under a pixel. `scenario` is the whole ShakeMap
 * window at 160 km, drawn at about 620 px, where one pixel is 258 m of ground;
 * cutting that one at 60 m would ship four times the vertices to draw the same
 * line. `vancouver` is tighter again, 22 km across at about 700 px, or 31 m of
 * ground per pixel, so it is cut at 25 m. Each window states the tolerance its
 * own drawing can carry.
 *
 * The Vancouver window exists because the City boundary is a jurisdictional
 * line, not a shoreline: it runs straight out across Burrard Inlet and English
 * Bay and says nothing about where the land stops. The two fire maps are read
 * by finding False Creek and the peninsula, so they need the water drawn.
 *
 * `dams` is the widest, running 46 km further north than the scenario window so
 * that Cheakamus and the Whistler reservoir are inside it; it is drawn at about
 * the same width, so a pixel is about the same 270 m of ground and it carries
 * the same tolerance.
 *
 * The scenario window's south edge is the catalogue's, and the Freshwater
 * Atlas stops at the international boundary, so the shoreline below 49 degrees
 * is simply absent rather than wrong. Fifteen of 3,910 model cells sit in that
 * strip. See docs/research/maps.md.
 */
const WINDOWS = [
  {
    file: "region-water.json",
    label: "Getting around",
    bbox: "-123.40,49.00,-122.70,49.40",
    refLat: 49.2,
    tolerance: 60,
  },
  {
    file: "vancouver-water.json",
    label: "Vancouver",
    bbox: "-123.30,49.18,-123.00,49.34",
    refLat: 49.26,
    tolerance: 25,
  },
  {
    file: "region-coast.json",
    label: "Scenario window",
    bbox: "-123.60,48.95,-121.39,49.66",
    refLat: 49.3,
    tolerance: 150,
    extraNote:
      "The Freshwater Atlas is a British Columbia layer, so there is no shoreline " +
      "south of the international boundary. Fifteen of the window's 3,910 model " +
      "cells sit in that strip.",
  },
  {
    file: "dams-coast.json",
    label: "Dams window",
    bbox: "-123.75,49.10,-121.45,50.12",
    refLat: 49.6,
    tolerance: 150,
    extraNote:
      "This window runs 46 km further north than the scenario window because " +
      "Cheakamus and the Whistler reservoir are in the register's Lower " +
      "Mainland. It is drawn at about the same width, so a pixel is about the " +
      "same 270 m of ground and the same tolerance holds.",
  },
];

const DIGITS = 4;

const WFS = (layer, bbox) =>
  `https://openmaps.gov.bc.ca/geo/pub/${layer}/ows?service=WFS&version=2.0.0` +
  `&request=GetFeature&typeName=pub:${layer}&outputFormat=application/json` +
  `&srsName=urn:ogc:def:crs:EPSG::4326&bbox=${encodeURIComponent(`${bbox},EPSG:4326`)}`;

/**
 * River polygons worth drawing. The layer returns every slough and creek in the
 * window; the figure needs the water that severs a land connection, not every
 * ditch. Anything under 20 hectares is dropped, which keeps the Fraser, its
 * named channels, the Pitt and the larger sloughs.
 */
const MIN_RIVER_HA = 20;

/**
 * The crossings the map can name. `AGGREGATE MAJOR BRIDGE` is the province's
 * own roll-up record for a named major bridge, so the filter is theirs, not
 * ours; the George Massey Tunnel is added because it is the tunnel the copy
 * refers to and it is not a bridge.
 */
function isCrossing(properties) {
  const status = properties.BMIS_STRUCT_STATUS_TYPE_DESC;
  const name = properties.BMIS_STRUCTURE_NAME ?? "";
  if (status === "AGGREGATE MAJOR BRIDGE") return true;
  return properties.BMIS_STRUCTURE_TYPE === "TUNNEL" && /GEORGE MASSEY/i.test(name);
}

/**
 * Where to put the marker: the centre of the bounding box of every part the
 * province files under one structure name. A major bridge here is recorded in
 * several pieces - a suspension span and its viaducts, or two carriageways -
 * and picking one piece puts the marker off the end of the crossing.
 */
function centre(parts) {
  let west = Infinity;
  let south = Infinity;
  let east = -Infinity;
  let north = -Infinity;
  for (const [lon, lat] of parts) {
    if (lon < west) west = lon;
    if (lon > east) east = lon;
    if (lat < south) south = lat;
    if (lat > north) north = lat;
  }
  return [(west + east) / 2, (south + north) / 2];
}

/** Metres between two lon/lat points, near enough at this latitude. */
function metres([aLon, aLat], [bLon, bLat]) {
  return Math.hypot((aLon - bLon) * 72_900, (aLat - bLat) * 110_574);
}

/**
 * Short names for the reader. The province's strings are abbreviated for a
 * bridge-management system, not for a page; these are ours, and the record's
 * own string is kept alongside so the substitution is visible.
 */
const SHORT_NAMES = {
  "IRONWORKERS MEMORIAL 2ND NAR": "Ironworkers Memorial Second Narrows",
  "GEORGE MASSEY TUNNEL": "George Massey Tunnel",
  "ALEX FRASER": "Alex Fraser",
  "LIONS GATE": "Lions Gate",
  "OAK ST": "Oak Street",
  "PORT MANN": "Port Mann",
  "QUEENSBOROUGH": "Queensborough",
  "PITT RIVER": "Pitt River",
  "CANOE PASS": "Canoe Pass",
};

function reduceAll(features, { tolerance, refLat, keep }) {
  const out = [];
  let before = 0;
  let worst = 0;
  for (const feature of features) {
    if (keep && !keep(feature.properties)) continue;
    for (const line of geometryLines(feature.geometry)) {
      before += line.length;
      const reduced = reduceLine(line, { tolerance, digits: DIGITS, refLat });
      if (!reduced) continue;
      const deviation = maxDeviation(line, reduced, refLat);
      if (deviation > worst) worst = deviation;
      out.push(reduced);
    }
  }
  const after = out.reduce((n, l) => n + l.length, 0);
  return { lines: out, before, after, worst };
}

/** Coastline and river water for one window, at the tolerance it can carry. */
async function buildWater({ file, label, bbox, refLat, tolerance, extraNote }) {
  process.stdout.write(`${label}: coastline and water
`);

  const coast = readJson(
    await download(
      WFS("WHSE_BASEMAPPING.FWA_COASTLINES_SP", bbox),
      `bc-fwa-coastlines-${file}.geojson`,
    ),
  );
  const coastline = reduceAll(coast.features, { tolerance, refLat });
  process.stdout.write(
    `  coast   ${coastline.lines.length} lines, ${coastline.before} -> ${coastline.after}` +
      ` vertices, worst deviation ${coastline.worst.toFixed(0)} m
`,
  );

  const rivers = readJson(
    await download(
      WFS("WHSE_BASEMAPPING.FWA_RIVERS_POLY", bbox),
      `bc-fwa-rivers-${file}.geojson`,
    ),
  );
  const water = reduceAll(rivers.features, {
    tolerance,
    refLat,
    keep: (p) => (p.AREA_HA ?? 0) >= MIN_RIVER_HA,
  });
  process.stdout.write(
    `  rivers  ${water.lines.length} rings, ${water.before} -> ${water.after}` +
      ` vertices, worst deviation ${water.worst.toFixed(0)} m
`,
  );

  writeVendored(file, {
    source: ["bc-fwa-coastlines", "bc-fwa-rivers"],
    geometry: "lines",
    crs: "EPSG:4326",
    precision: "4 decimal places (about 7 m of longitude at 49 degrees N)",
    simplified: `Douglas-Peucker, ${tolerance} m tolerance`,
    bbox: bbox.split(",").map(Number),
    note:
      "coast is the shoreline as open lines, not closed land polygons: the layer " +
      "is linear and the mainland runs off every edge of the window. river is the " +
      "outline of river polygons over 20 hectares, which closes." +
      (extraNote ? ` ${extraNote}` : ""),
    coast: coastline.lines,
    river: water.lines,
  });
}

export async function buildRegionGeography() {
  for (const window of WINDOWS) await buildWater(window);

  process.stdout.write("Highway crossings\n");
  const structures = readJson(
    await download(
      WFS("WHSE_IMAGERY_AND_BASE_MAPS.MOT_ROAD_STRUCTURE_SP", WINDOWS[0].bbox),
      "bc-mot-road-structures.geojson",
    ),
  );
  // The province's own roll-up record selects which names are major crossings;
  // every bridge or tunnel record filed under one of those names then supplies
  // the geometry, because a roll-up often covers only one portion of a
  // multi-part structure and a marker placed from it alone lands off the end.
  const names = new Set(
    structures.features.filter((f) => isCrossing(f.properties)).map((f) => f.properties.BMIS_STRUCTURE_NAME),
  );
  const grouped = new Map();
  for (const feature of structures.features) {
    const p = feature.properties;
    if (!names.has(p.BMIS_STRUCTURE_NAME)) continue;
    if (p.BMIS_STRUCTURE_TYPE !== "BRIDGE" && p.BMIS_STRUCTURE_TYPE !== "TUNNEL") continue;
    const key = p.BMIS_STRUCTURE_NAME;
    const group = grouped.get(key) ?? { key, kind: p.BMIS_STRUCTURE_TYPE, points: [] };
    group.points.push(...geometryLines(feature.geometry).flat());
    grouped.set(key, group);
  }

  // One record is demonstrably wrong rather than merely coarse, and is dropped
  // by name rather than by a threshold that would also drop good ones. The
  // layer's PATTULLO record is a 100 m stub near the international boundary,
  // about 20 km from the bridge; the only correctly placed Pattullo geometry in
  // the layer is filed under a name flagged for deletion.
  const MISPLACED = new Set(["PATTULLO"]);

  const crossings = [];
  for (const group of grouped.values()) {
    if (MISPLACED.has(group.key)) continue;
    const at = centre(group.points);
    const span = Math.round(Math.max(...group.points.map((p) => metres(p, at))) * 2);
    crossings.push({
      name: SHORT_NAMES[group.key] ?? group.key,
      sourceName: group.key,
      kind: group.kind === "TUNNEL" ? "tunnel" : "bridge",
      at: at.map((n) => Math.round(n * 1e4) / 1e4),
      spanMetres: span,
    });
  }
  crossings.sort((a, b) => a.name.localeCompare(b.name));
  process.stdout.write(`  named   ${crossings.length} provincial crossings\n`);

  writeVendored("region-crossings.json", {
    source: "bc-mot-road-structures",
    crs: "EPSG:4326",
    scope:
      "Provincial highway structures only, and not a complete set of crossings. " +
      "City-owned and TransLink crossings are absent, including the Burrard, " +
      "Granville, Cambie, Arthur Laing, Knight Street, Moray, Dinsmore and " +
      "No. 2 Road bridges; no openly licensed layer holding them has been found. " +
      "The Pattullo is absent too: the province's own major-bridge record for it " +
      "sits about 20 km away near the international boundary, and the only " +
      "correctly placed Pattullo geometry in the layer is flagged for deletion. " +
      "A map that presented this as the crossings would overstate isolation.",
    crossings,
  });
}

if (isMain(import.meta.url)) {
  await buildRegionGeography();
}
