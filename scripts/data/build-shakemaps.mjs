/**
 * The two Geological Survey of Canada scenario ShakeMaps the site uses.
 *
 * Source:  National Earthquake Scenario Catalogue, OpenDRR/earthquake-scenarios
 *          SIM9p0_CascadiaInterfaceBestFault  - "Magnitude 9.0 scenario based on
 *            complete rupture of the CanSHM6 Hazard Model implementation of the
 *            Cascadia Interface Best Fault"; this is the full-rupture Cascadia
 *            scenario, under the catalogue's own name for it.
 *          ACM7p0_GeorgiaStraitFault          - the crustal M7.0 on the Georgia
 *            Strait fault.
 * Licence: Open Government Licence - Canada. See docs/research/maps.md for where
 *          that is stated and what remains unstated.
 *
 * Two conditions travel with anything drawn from these files, and they are
 * repeated in the output so they cannot be separated from the numbers:
 *   - resolution: the information is provided at approximately the scale of
 *     Census dissemination areas;
 *   - scope: the modelling covers damage to buildings and their inhabitants
 *     from shaking. It excludes infrastructure and vehicles, and excludes
 *     losses from aftershocks, liquefaction, landslides and fire following.
 *
 * What the reduction does. The catalogue's ShakeMap is not a raster. It is an
 * irregular cloud of model sites, dense where people live and sparse where they
 * do not. Drawing it as a smooth surface would mean interpolating, which would
 * invent detail the model does not have. Instead the sites inside the Lower
 * Mainland window are averaged into cells of about 700 m, which is the scale
 * the catalogue itself claims, and each cell records how many sites it holds so
 * a thin cell can be drawn as the thin evidence it is.
 *
 * Run: node scripts/data/build-shakemaps.mjs
 */

import { readFileSync } from "node:fs";
import { download, isMain, writeVendored } from "./lib/io.mjs";

/** Lower Mainland, Howe Sound to beyond Chilliwack. */
const WINDOW = { west: -123.6, south: 48.95, east: -121.4, north: 49.65 };
/** About 730 m by 665 m at 49 degrees north: near enough square. */
const CELL_LON = 0.01;
const CELL_LAT = 0.006;

const LFS = "https://media.githubusercontent.com/media/OpenDRR/earthquake-scenarios/master/FINISHED/";

const SCENARIOS = [
  {
    out: "shakemap-cascadia-m9.json",
    id: "SIM9p0_CascadiaInterfaceBestFault",
    label: "M9.0 Cascadia interface, full rupture",
    magnitude: 9.0,
    epicentre: [-125.217, 48.25],
    files: { pga: "s_shakemap_SIM9p0_CascadiaInterfaceBestFault_11.csv" },
  },
  {
    out: "shakemap-georgia-strait-m7.json",
    id: "ACM7p0_GeorgiaStraitFault",
    label: "M7.0 Georgia Strait fault",
    magnitude: 7.0,
    epicentre: [-123.627, 49.243],
    files: {
      pga: "s_shakemap_ACM7p0_GeorgiaStraitFault_124.csv",
      mmi: "s_shakemap_ACM7p0_GeorgiaStraitFault_124_MMI.csv",
    },
  },
];

const CAVEATS = {
  resolution:
    "The information is provided at approximately the scale of Census dissemination areas.",
  scope:
    "The modelling covers damage to buildings and their inhabitants from earthquake shaking. " +
    "It excludes damage to critical infrastructure and vehicles, and excludes losses from " +
    "aftershocks, liquefaction, landslides and fire following.",
};

/** Read one catalogue ShakeMap CSV into { lon, lat, pga, mmi } rows. */
function readShakemap(path) {
  const text = readFileSync(path, "utf8");
  const lines = text.split("\n");
  const header = lines[0].trim().split(",");
  const iLon = header.indexOf("lon");
  const iLat = header.indexOf("lat");
  const iPga = header.indexOf("gmv_PGA");
  const iMmi = header.indexOf("MMI");
  if (iLon < 0 || iLat < 0 || iPga < 0) {
    throw new Error(`unexpected columns in ${path}: ${header.join(",")}`);
  }
  const rows = [];
  for (let i = 1; i < lines.length; i += 1) {
    const cells = lines[i].split(",");
    if (cells.length < header.length) continue;
    rows.push({
      lon: Number(cells[iLon]),
      lat: Number(cells[iLat]),
      pga: Number(cells[iPga]),
      mmi: iMmi >= 0 ? Number(cells[iMmi]) : null,
    });
  }
  return rows;
}

function aggregate(rows) {
  const cells = new Map();
  let kept = 0;
  for (const row of rows) {
    if (row.lon < WINDOW.west || row.lon > WINDOW.east) continue;
    if (row.lat < WINDOW.south || row.lat > WINDOW.north) continue;
    kept += 1;
    const cx = Math.floor((row.lon - WINDOW.west) / CELL_LON);
    const cy = Math.floor((row.lat - WINDOW.south) / CELL_LAT);
    const key = `${cx},${cy}`;
    const cell = cells.get(key) ?? { cx, cy, n: 0, pga: 0, mmi: 0, mmiN: 0 };
    cell.n += 1;
    cell.pga += row.pga;
    if (Number.isFinite(row.mmi)) {
      cell.mmi += row.mmi;
      cell.mmiN += 1;
    }
    cells.set(key, cell);
  }
  return { kept, cells: [...cells.values()] };
}

export async function buildShakemaps() {
  for (const scenario of SCENARIOS) {
    process.stdout.write(`${scenario.label}\n`);

    const pgaPath = await download(
      LFS + scenario.files.pga,
      `gsc-${scenario.files.pga}`,
    );
    const rows = readShakemap(pgaPath);

    if (scenario.files.mmi) {
      const mmiPath = await download(
        LFS + scenario.files.mmi,
        `gsc-${scenario.files.mmi}`,
      );
      const byKey = new Map(
        readShakemap(mmiPath).map((r) => [`${r.lon},${r.lat}`, r.mmi]),
      );
      for (const row of rows) row.mmi = byKey.get(`${row.lon},${row.lat}`) ?? null;
    }

    const { kept, cells } = aggregate(rows);
    cells.sort((a, b) => a.cy - b.cy || a.cx - b.cx);
    process.stdout.write(
      `  sites   ${rows.length} modelled, ${kept} in window, ${cells.length} cells\n`,
    );

    const hasMmi = cells.some((c) => c.mmiN > 0);
    writeVendored(scenario.out, {
      source: "gsc-earthquake-scenario-catalogue",
      scenario: scenario.id,
      label: scenario.label,
      magnitude: scenario.magnitude,
      epicentre: scenario.epicentre,
      caveats: CAVEATS,
      grid: {
        west: WINDOW.west,
        south: WINDOW.south,
        cellLon: CELL_LON,
        cellLat: CELL_LAT,
        note:
          "x, y are cell indices from the south-west corner of the window. pga is the " +
          "mean of the model sites in the cell, in g; mmi likewise, where the " +
          "catalogue publishes it. n is how many sites the cell holds.",
      },
      measures: hasMmi ? ["pga", "mmi"] : ["pga"],
      count: cells.length,
      // Columnar, because one object per cell spends more bytes on the word
      // "pga" than on the value. Index i of each array is one cell.
      x: cells.map((c) => c.cx),
      y: cells.map((c) => c.cy),
      n: cells.map((c) => c.n),
      pga: cells.map((c) => Number((c.pga / c.n).toFixed(3))),
      ...(hasMmi
        ? { mmi: cells.map((c) => (c.mmiN > 0 ? Number((c.mmi / c.mmiN).toFixed(1)) : null)) }
        : {}),
    });
  }
}

if (isMain(import.meta.url)) {
  await buildShakemaps();
}
