/**
 * The region's highest-consequence dams, from the provincial dam register.
 *
 * `docs/knowledge.md` settled the licence question before any of this was
 * drawn: the register [BC-DAMS-REG] is OGL-BC and carries each dam's location,
 * owner, failure consequence class and risk level. That is the drawable layer.
 * Dam-breach inundation, the layer a reader actually wants, is not routed to
 * the public and is not here.
 *
 * Source, confirmed on its own BC Data Catalogue record:
 *   BC Dams   WHSE_WATER_MANAGEMENT.WRIS_DAMS_PUBLIC_SVW
 *     Open Government Licence - British Columbia
 *
 * What this script is careful about:
 *
 * - **It drops the dam safety officer.** The layer names the individual
 *   engineer assigned to each dam, and one owner string carries a person's
 *   name and job title. Neither is needed to say what a dam is, and a static
 *   site is a poor place to republish a named public servant's workload. The
 *   officer field is never written; owner strings are normalised against the
 *   table below, which is ours, with the register's own string kept beside it.
 * - **The region is the register's, not ours.** Fifteen of the seventeen
 *   records carry `REGION = "Lower Mainland"`. The two that do not are Metro
 *   Vancouver's Rice Lake dams, which sit on the North Shore above Lynn Valley
 *   and are plainly in it; their blank region is a gap in the register rather
 *   than a judgement it has made, so the window catches them and the vendored
 *   file records that it did.
 * - **A marker is the middle of the crest, not a corner of it.** The geometry
 *   is the dam crest as a line, tens of metres long. At the window's scale
 *   either end would do, but the midpoint is the one choice that needs no
 *   argument.
 *
 * Run: node scripts/data/build-dams.mjs
 */

import { download, isMain, readJson, today, writeVendored } from "./lib/io.mjs";
import { geometryLines, inBox } from "./lib/geo.mjs";

/**
 * The window the dams map is drawn in, and the catchment for records the
 * register left unregioned. It runs further north than the scenario window
 * because Cheakamus and the Whistler reservoir are in the register's Lower
 * Mainland and a map of the region's dams that quietly omitted two of them
 * would be worse than no map.
 */
const WINDOW = [-123.75, 49.1, -121.45, 50.12];

/**
 * The two classes where the register says a failure reaches people. The line
 * is the province's, drawn on its own five-tier scale, which is the whole
 * reason to use its word rather than pick dams that suit the page.
 */
const CLASSES = ["Extreme", "Very High"];

const LAYER = "WHSE_WATER_MANAGEMENT.WRIS_DAMS_PUBLIC_SVW";

const WFS =
  `https://openmaps.gov.bc.ca/geo/pub/${LAYER}/ows?service=WFS&version=2.0.0` +
  `&request=GetFeature&typeName=${LAYER}&outputFormat=application/json` +
  `&srsName=EPSG:4326&count=2000&CQL_FILTER=` +
  encodeURIComponent(`BBOX(GEOMETRY,${WINDOW.join(",")},'EPSG:4326')`);

/**
 * Owner names for a reader. The register's strings are account records: they
 * carry a customer number, and in one case the name and job title of the
 * person who holds the file. These are ours, and `ownerRecord` keeps the
 * register's own string on every dam so the substitution stays visible.
 */
const OWNERS = {
  "BC Hydro & Power Authority (64404)": "BC Hydro",
  "Greater Vancouver Water District (20661)": "Metro Vancouver",
  "Metro Vancouver": "Metro Vancouver",
  "District of West Vancouver (21654)": "District of West Vancouver",
  "City of Abbotsford - Jamie Austin (Director, Utility Operations)":
    "City of Abbotsford",
  "Howe Sound Pulp & Paper Ltd Partnership (64467)": "Howe Sound Pulp and Paper",
  "Whistler Mountain Resort Limited Partnership (24638)":
    "Whistler Mountain Resort",
  "WOODFIBRE LNG LIMITED": "Woodfibre LNG",
};

/**
 * Construction types, spelled out. The register writes these with an en dash,
 * which `docs/style-guide.md` §5 does not use, and abbreviates where a reader
 * would not. What the dam is made of is the one register field that bears on
 * shaking at all: BC Hydro's own filing about Coquitlam is about the material
 * in an earthfill dam liquefying.
 */
const TYPES = {
  Earthfill: "Earthfill",
  Rockfill: "Rockfill",
  Combination: "Combination",
  "Concrete–gravity": "Concrete gravity",
  "Concrete–slab/buttress": "Concrete slab and buttress",
  "Embankment–homogenous": "Embankment",
  "Embankment–unknown": "Embankment",
};

/**
 * Dam names in sentence case. The register shouts every name and appends "DAM"
 * to most but not all of them, so a column drawn straight from it reads as a
 * shipping manifest and is inconsistent besides.
 */
function damName(raw) {
  const words = raw
    .replace(/\s+DAM$/i, "")
    .toLowerCase()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return words.join(" ").replace(/\bLng\b/, "LNG");
}

/** The middle of the crest line, which is where the marker goes. */
function crestMidpoint(geometry) {
  const points = geometryLines(geometry).flat();
  const lon = points.reduce((n, p) => n + p[0], 0) / points.length;
  const lat = points.reduce((n, p) => n + p[1], 0) / points.length;
  return [Math.round(lon * 1e4) / 1e4, Math.round(lat * 1e4) / 1e4];
}

export async function buildDams() {
  process.stdout.write("Dams: provincial register\n");

  const file = readJson(await download(WFS, "bc-dams-register.geojson"));

  const dams = [];
  for (const feature of file.features) {
    const p = feature.properties;
    if (!CLASSES.includes(p.FAILURE_CONSEQUENCE)) continue;

    const at = crestMidpoint(feature.geometry);
    if (!inBox(at, WINDOW)) continue;

    const owner = OWNERS[p.DAM_OWNER_NAME];
    if (!owner) {
      throw new Error(
        `Unknown owner string ${JSON.stringify(p.DAM_OWNER_NAME)} on ` +
          `${p.DAM_NAME}. Add it to OWNERS rather than shipping the record's ` +
          `own string: it may name a person.`,
      );
    }

    dams.push({
      name: damName(p.DAM_NAME),
      nameRecord: p.DAM_NAME,
      owner,
      ownerRecord: p.DAM_OWNER_NAME.replace(/\s*-\s*[^-(]+\([^)]*\)\s*$/, ""),
      at,
      consequence: p.FAILURE_CONSEQUENCE,
      risk: p.DAM_RISK_LEVEL ?? null,
      type: TYPES[p.DAM_TYPE] ?? p.DAM_TYPE,
      height: p.DAM_HEIGHT ?? null,
      commissioned: p.COMMISSIONED_YEAR ?? null,
      operation: p.DAM_OPERATION_CODE,
      region: p.REGION === "N/A" ? null : p.REGION,
    });
  }

  dams.sort((a, b) => {
    const byClass = CLASSES.indexOf(a.consequence) - CLASSES.indexOf(b.consequence);
    return byClass !== 0 ? byClass : a.name.localeCompare(b.name);
  });

  const unregioned = dams.filter((d) => d.region === null).map((d) => d.name);
  process.stdout.write(
    `  dams    ${dams.length} at ${CLASSES.join(" or ")} consequence, ` +
      `${dams.length - unregioned.length} of them regioned\n`,
  );

  writeVendored("region-dams.json", {
    source: ["bc-dams-register"],
    geometry: "points",
    crs: "EPSG:4326",
    precision: "4 decimal places (about 7 m of longitude at 49 degrees N)",
    accessed: today(),
    bbox: WINDOW,
    filter: `FAILURE_CONSEQUENCE in (${CLASSES.join(", ")})`,
    note:
      "Every regulated dam the register classes Extreme or Very High failure " +
      "consequence inside the window. A point is the midpoint of the crest " +
      "line the register holds, not a corner of it. The dam safety officer " +
      "field is not vendored, and owner strings are normalised: the " +
      "register's own string is on each record as ownerRecord, minus a " +
      "named individual where it carried one. " +
      (unregioned.length
        ? `The register leaves ${unregioned.join(" and ")} without a region; ` +
          "both are Metro Vancouver dams on the North Shore and the window " +
          "catches them."
        : "Every record carries the register's own region."),
    dams,
  });

  return dams.length;
}

if (isMain(import.meta.url)) await buildDams();
