/**
 * Coastline, river water and the region's crossings, for the crossings map on
 * `/after/transportation/` and `/getting-around/`.
 *
 * Sources, each confirmed on its own record rather than inferred from a domain:
 *   Freshwater Atlas - Coastlines   WHSE_BASEMAPPING.FWA_COASTLINES_SP
 *     Open Government Licence - British Columbia
 *   Freshwater Atlas - Rivers       WHSE_BASEMAPPING.FWA_RIVERS_POLY
 *     Open Government Licence - British Columbia
 *   Ministry of Transportation (MOT) Road Structures
 *     WHSE_IMAGERY_AND_BASE_MAPS.MOT_ROAD_STRUCTURE_SP
 *     Open Government Licence - British Columbia
 *   City of Vancouver, Public streets   public-streets
 *     Open Government Licence - Vancouver
 *   Wikidata, coordinate location (P625)
 *     CC0 1.0, stated by the API's own rightsinfo
 *
 * It takes three sources to draw this map once, and that is the finding rather
 * than an inconvenience. The provincial layer is highway structures only: it
 * has no Knight Street, Pattullo, Golden Ears or North Arm Bridge, and all four
 * are crossings `/after/transportation/` discusses by name. A map drawn from it
 * alone would contradict the table printed beside it and would overstate how
 * isolated Richmond and the peninsula are, which is why this file used to say
 * the layer must not be drawn as the crossings.
 *
 * The City layer supplies the three False Creek bridges it owns. Wikidata
 * supplies the seven nobody publishes an open layer for, under CC0. The
 * provincial layer holds two Pattullos, a live record 23 km away near the
 * international boundary and a correctly placed 837 m geometry filed under a
 * name flagged for deletion; the Wikidata point falls on the second, 31 m from
 * its nearest vertex, which is what settles that it is the bridge. See
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
 * `crossings` is the tight window: 58 km across, drawn at about 700 px, so 60 m
 * of deviation is under a pixel. Its east edge is at -122.60 rather than the
 * -122.70 it carried while this window fed nothing, because the Golden Ears
 * Bridge is at -122.666 and a crossings map that cropped a crossing out would
 * be making the same omission this script exists to stop. `scenario` is the
 * whole ShakeMap window at 160 km, drawn at about 620 px, where one pixel is
 * 258 m of ground; cutting that one at 60 m would ship four times the vertices
 * to draw the same line. `vancouver` is tighter again, 22 km across at about
 * 700 px, or 31 m of ground per pixel, so it is cut at 25 m. Each window states
 * the tolerance its own drawing can carry.
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
    label: "Crossings",
    bbox: "-123.40,49.00,-122.60,49.40",
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

/**
 * The three crossings the City of Vancouver owns, named as its own street layer
 * names them. That layer is street centrelines rather than a structures
 * inventory, so a bridge is found by its block name; "800 OLD BRIDGE COURT" is
 * a residential street that also matches "BRIDGE", and is why this is an
 * allowlist rather than a pattern.
 */
const CITY_BRIDGES = {
  "BURRARD BRIDGE": "Burrard",
  "GRANVILLE BRIDGE": "Granville",
  "CAMBIE BRIDGE": "Cambie",
};

const CITY_STREETS =
  "https://opendata.vancouver.ca/api/explore/v2.1/catalog/datasets/public-streets/exports/geojson?" +
  new URLSearchParams({ where: 'hblock like "BRIDGE"', select: "hblock,geom" });

/**
 * The crossings no openly licensed layer holds, by Wikidata item. Four of the
 * seven - Knight Street, Pattullo, Golden Ears and the North Arm Bridge - are
 * crossings `/after/transportation/` discusses by name, so a map without them
 * would contradict the table beside it. The other three complete Richmond's
 * island crossings, which is the fact `/getting-around/` turns on.
 *
 * Wikidata's structured data is CC0 by the statement its own API returns from
 * `action=query&meta=siteinfo&siprop=rightsinfo`, which is the record stating
 * its own licence that docs/licensing.md asks for.
 */
const WIKIDATA_CROSSINGS = {
  Q6422284: "Knight Street",
  Q710283: "Arthur Laing",
  Q7148677: "Pattullo",
  Q1056455: "Golden Ears",
  Q5278725: "Dinsmore",
  Q14629008: "No. 2 Road",
  Q7053967: "North Arm",
};

const WIKIDATA =
  "https://www.wikidata.org/w/api.php?" +
  new URLSearchParams({
    action: "wbgetentities",
    ids: Object.keys(WIKIDATA_CROSSINGS).join("|"),
    props: "claims",
    format: "json",
  });

/**
 * Every crossing the map is supposed to carry. Checked after the three sources
 * are merged, so a layer that changes shape fails the build rather than
 * silently shipping a map with a crossing missing.
 */
const EXPECTED = [
  "Alex Fraser", "Arthur Laing", "Burrard", "Cambie", "Canoe Pass", "Dinsmore",
  "George Massey Tunnel", "Golden Ears", "Granville", "Ironworkers Memorial Second Narrows",
  "Knight Street", "Lions Gate", "No. 2 Road", "North Arm", "Oak Street",
  "Pattullo", "Pitt River", "Port Mann", "Queensborough",
];

/** A stable key the content layer joins its per-crossing notes to. */
function slug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Every coordinate pair in a GeoJSON geometry, at any nesting depth. */
function everyPoint(coordinates) {
  if (typeof coordinates[0] === "number") return [coordinates];
  return coordinates.flatMap(everyPoint);
}

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

  process.stdout.write("Crossings\n");
  const crossings = [
    ...(await provincialCrossings()),
    ...(await cityCrossings()),
    ...(await wikidataCrossings()),
  ];
  crossings.sort((a, b) => a.name.localeCompare(b.name));

  // Every source is checked for the full set it is supposed to supply. A layer
  // that quietly changes shape would otherwise ship a shorter map, and a map is
  // the one graphic whose omissions are invisible: a crossing that is not drawn
  // does not leave a gap a reader can see.
  const missing = EXPECTED.filter((name) => !crossings.some((c) => c.name === name));
  if (missing.length) {
    throw new Error(
      `Crossings missing from the build: ${missing.join(", ")}. ` +
        "A source has changed shape. Do not ship a short map; fix the source first.",
    );
  }

  process.stdout.write(`  named   ${crossings.length} crossings from three sources\n`);

  writeVendored("region-crossings.json", {
    source: ["bc-mot-road-structures", "cov-public-streets", "wikidata"],
    crs: "EPSG:4326",
    scope:
      "The region's road, rail and transit crossings of the Fraser River, its " +
      "North and Middle Arms, False Creek and Burrard Inlet, drawn from three " +
      "sources because no single openly licensed layer holds them. Provincial " +
      "highway structures come from the Ministry layer, the three False Creek " +
      "bridges from the City of Vancouver, and the seven neither publishes from " +
      "Wikidata under CC0. The Moray Channel Bridge is absent: it has no " +
      "Wikidata item and appears in no cleared layer, and a hand-placed " +
      "coordinate would be a position this project invented.",
    crossings,
  });
}

/**
 * The province's own roll-up record selects which names are major crossings;
 * every bridge or tunnel record filed under one of those names then supplies
 * the geometry, because a roll-up often covers only one portion of a multi-part
 * structure and a marker placed from it alone lands off the end.
 */
async function provincialCrossings() {
  const structures = readJson(
    await download(
      WFS("WHSE_IMAGERY_AND_BASE_MAPS.MOT_ROAD_STRUCTURE_SP", WINDOWS[0].bbox),
      "bc-mot-road-structures.geojson",
    ),
  );
  const names = new Set(
    structures.features
      .filter((f) => isCrossing(f.properties))
      .map((f) => f.properties.BMIS_STRUCTURE_NAME),
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
  // about 20 km from the bridge, and the only correctly placed Pattullo
  // geometry in the layer is filed under a name flagged for deletion. The
  // Pattullo on this map comes from Wikidata instead, and those deleted records
  // are what its position was checked against.
  const MISPLACED = new Set(["PATTULLO"]);

  const out = [];
  for (const group of grouped.values()) {
    if (MISPLACED.has(group.key)) continue;
    const at = centre(group.points);
    const span = Math.round(Math.max(...group.points.map((p) => metres(p, at))) * 2);
    const name = SHORT_NAMES[group.key] ?? group.key;
    out.push({
      id: slug(name),
      name,
      kind: group.kind === "TUNNEL" ? "tunnel" : "bridge",
      at: at.map((n) => Math.round(n * 1e4) / 1e4),
      spanMetres: span,
      source: "bc-mot-road-structures",
      sourceName: group.key,
    });
  }
  process.stdout.write(`  province ${out.length} structures\n`);
  return out;
}

/** The three False Creek bridges, from the City's own street centrelines. */
async function cityCrossings() {
  const streets = readJson(
    await download(CITY_STREETS, "cov-public-streets-bridges.geojson"),
  );
  const grouped = new Map();
  for (const feature of streets.features) {
    const block = feature.properties.hblock;
    if (!(block in CITY_BRIDGES)) continue;
    const points = grouped.get(block) ?? [];
    points.push(...everyPoint(feature.geometry.coordinates));
    grouped.set(block, points);
  }
  const out = [];
  for (const [block, points] of grouped) {
    const at = centre(points);
    out.push({
      id: slug(CITY_BRIDGES[block]),
      name: CITY_BRIDGES[block],
      kind: "bridge",
      at: at.map((n) => Math.round(n * 1e4) / 1e4),
      spanMetres: Math.round(Math.max(...points.map((p) => metres(p, at))) * 2),
      source: "cov-public-streets",
      sourceName: block,
    });
  }
  process.stdout.write(`  city     ${out.length} bridges\n`);
  return out;
}

/**
 * The seven neither government layer holds, as single points. Wikidata gives a
 * coordinate rather than a geometry, so these carry no span: the file says what
 * each source gave it and nothing more.
 */
async function wikidataCrossings() {
  const { entities } = readJson(await download(WIKIDATA, "wikidata-crossings.json"));
  const out = [];
  for (const [qid, name] of Object.entries(WIKIDATA_CROSSINGS)) {
    const claim = entities?.[qid]?.claims?.P625?.[0]?.mainsnak?.datavalue?.value;
    if (!claim) throw new Error(`Wikidata ${qid} (${name}) has no P625 coordinate`);
    out.push({
      id: slug(name),
      name,
      kind: "bridge",
      at: [claim.longitude, claim.latitude].map((n) => Math.round(n * 1e4) / 1e4),
      source: "wikidata",
      sourceName: qid,
    });
  }
  process.stdout.write(`  wikidata ${out.length} crossings\n`);
  return out;
}

if (isMain(import.meta.url)) {
  await buildRegionGeography();
}
