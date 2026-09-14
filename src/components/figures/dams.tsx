import { FIG_COLOR } from "./figure-kit";
import { MapViewer } from "./map-viewer";
import coastFile from "@/data/dams-coast.json";
import damsFile from "@/data/region-dams.json";
import { dataSource } from "@/data/sources";

/**
 * Where the region's highest-consequence dams are, and which of them their
 * owner has said anything about earthquakes.
 *
 * Read `README.md` beside this file, and `map-viewer.tsx` for why a map is the
 * one figure with a `viewBox` and the one a reader can touch. What belongs to
 * this drawing rather than to maps in general:
 *
 * - **The register picks the dams, not the page.** Every dam the province
 *   classes Extreme or Very High failure consequence inside the window is
 *   here, including four the page's prose never names. Choosing dams to draw
 *   would have made the map an illustration of the argument instead of a
 *   record of what is out there.
 * - **Failure consequence is not a seismic rating and is not drawn as one.**
 *   It classifies what is downstream of a dam, so it is a statement about
 *   people and property rather than about the structure or about shaking. The
 *   legend says so in those words, because a large mark on a hazard page will
 *   otherwise be read as a prediction.
 * - **The second channel is evidence, not severity.** A solid mark is a dam
 *   whose owner has published what an earthquake is expected to do to it. A
 *   hollow mark is a dam where nothing of the kind was found. Eleven of the
 *   seventeen are hollow, and that emptiness is the map's actual finding.
 * - **No hue at all.** Neither channel is a band on the site's own low, medium
 *   and high scale, and `README.md` reserves colour for that. Size and fill
 *   both survive in greyscale.
 *
 * The map holds no type, which is the rule for a pane that zooms. Four of the
 * seventeen sit in two pairs a few hundred metres apart, closer than a mark is
 * wide at full extent; they separate as a reader zooms, and the table beside
 * the map is what names every dam.
 */

/* ------------------------------------------------------------------ */
/* The data                                                            */
/* ------------------------------------------------------------------ */

export interface DamRecord {
  name: string;
  nameRecord: string;
  owner: string;
  ownerRecord: string;
  at: number[];
  consequence: string;
  risk: string | null;
  type: string;
  height: number | null;
  commissioned: number | null;
  operation: string;
  region: string | null;
}

interface DamsFile {
  bbox: number[];
  accessed: string;
  dams: DamRecord[];
}

interface CoastFile {
  coast: number[][][];
  river: number[][][];
}

const FILE: DamsFile = damsFile;
const COAST: CoastFile = coastFile;

/** Every dam in the drawing, in the register's order of consequence then name. */
export const DAMS: DamRecord[] = FILE.dams;

/** The register's own record, so the attribution is never retyped. */
export const DAMS_SOURCE = dataSource("bc-dams-register");

/**
 * The shoreline under the marks is a second dataset under a second licence, and
 * an attribution has to travel with the graphic it produced. The page carries
 * both.
 */
export const DAMS_BASE_SOURCE = dataSource("bc-fwa-coastlines");

/**
 * The attribution the figure owes, once per distinct sentence.
 *
 * Both datasets under this drawing are the province's and both are OGL-BC, so
 * both ask for the same sentence word for word. Printed once per dataset, the
 * credit said the same thing twice and read as a defect rather than as
 * compliance; the licence asks that the sentence appear, not that it appear
 * per file. Which datasets it covers is in the caption, which names them.
 */
export const DAMS_ATTRIBUTIONS = [
  ...new Map(
    [DAMS_SOURCE, DAMS_BASE_SOURCE].map((source) => [source.attribution, source]),
  ).values(),
];

/* ------------------------------------------------------------------ */
/* Geometry                                                            */
/* ------------------------------------------------------------------ */

const ID = "region-dams";

const [WEST, SOUTH, EAST, NORTH] = FILE.bbox;

/**
 * Units per degree of longitude. The lattice is arbitrary; this one keeps
 * every coordinate in the path data to a whole number at four decimal places
 * of source precision, which is what the vendored file carries.
 */
const SCALE = 1000;

const KM_PER_DEGREE = 111.32;

/**
 * The latitude the window's shape is corrected at. A degree of longitude is
 * shorter than a degree of latitude everywhere but the equator, so drawing
 * both at one unit would make the region too wide. Correcting at the middle of
 * a window a degree deep leaves under a per cent of error at either edge,
 * which is a tenth of the shoreline's own 150 m tolerance.
 */
const REF_LAT = (SOUTH + NORTH) / 2;
const ASPECT_Y = 1 / Math.cos((REF_LAT * Math.PI) / 180);

const MAP_W = round((EAST - WEST) * SCALE);
const MAP_H = round((NORTH - SOUTH) * SCALE * ASPECT_Y);

/** How much ground the map's full width covers. The pane's scale bar wants it. */
const KM_WIDE = (EAST - WEST) * KM_PER_DEGREE * Math.cos((REF_LAT * Math.PI) / 180);

function round(value: number): number {
  return Math.round(value * 100) / 100;
}

/**
 * Longitude and latitude into the map's own space, with the ground aspect
 * already applied.
 *
 * The shakemap applies its correction once on a group and leaves its paths in
 * a square lattice, which it can do because every mark it draws is a rectangle
 * it means to be non-square. Here the marks are circles, and a group scaled in
 * one axis would turn every one of them into an ellipse. So the correction is
 * in the projection instead, and nothing downstream has to know about it.
 */
function toMap(lon: number, lat: number): [number, number] {
  return [
    round((lon - WEST) * SCALE),
    round((NORTH - lat) * SCALE * ASPECT_Y),
  ];
}

function linesToPath(lines: number[][][]): string {
  let d = "";
  for (const line of lines) {
    let first = true;
    for (const [lon, lat] of line) {
      const [x, y] = toMap(lon, lat);
      d += `${first ? "M" : "L"}${x} ${y}`;
      first = false;
    }
  }
  return d;
}

const COAST_PATH = linesToPath(COAST.coast);
const RIVER_PATH = linesToPath(COAST.river);

/* ------------------------------------------------------------------ */
/* The encoding                                                        */
/* ------------------------------------------------------------------ */

/**
 * Mark radius by the register's failure consequence class, in map units. At
 * full extent the pane is about 620 px wide in the reading column, which puts
 * an Extreme mark at about 4 px of radius and a Very High one at about 3.
 * Below that a mark stops being a shape and becomes a speck.
 */
const RADIUS: Record<string, number> = { Extreme: 16, "Very High": 11 };

/** What a reader who cannot see the map is told each mark is. */
export const DAM_FACTS = {
  total: DAMS.length,
  extreme: DAMS.filter((d) => d.consequence === "Extreme").length,
  veryHigh: DAMS.filter((d) => d.consequence === "Very High").length,
  accessed: FILE.accessed,
} as const;

/* ------------------------------------------------------------------ */
/* The drawing                                                         */
/* ------------------------------------------------------------------ */

/**
 * The shoreline and river water the marks sit on.
 *
 * It is load-bearing by the style guide's own test: cover it and the drawing
 * stops saying where anything is. So it is `mark` rather than the furniture
 * grey, and the stroke is `non-scaling-stroke` so a coastline stays a hairline
 * at sixteen times rather than swelling into a band.
 */
function Geography() {
  return (
    <g
      fill="none"
      stroke={FIG_COLOR.mark}
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      {/* `vector-effect` does not inherit, so it goes on each path. */}
      <path d={COAST_PATH} strokeWidth="1" vectorEffect="non-scaling-stroke" />
      <path d={RIVER_PATH} strokeWidth="0.75" vectorEffect="non-scaling-stroke" />
    </g>
  );
}

/**
 * One mark per dam.
 *
 * A hollow mark is drawn under the solid ones so that where a pair overlaps at
 * full extent, the dam something is known about is the one on top. Both are
 * stroked at a non-scaling weight, so the ring around a hollow mark stays a
 * hairline and the two stay distinguishable at every magnification.
 */
function Marks({ published }: { published: ReadonlySet<string> }) {
  const ordered = [...DAMS].sort(
    (a, b) => Number(published.has(a.name)) - Number(published.has(b.name)),
  );

  return (
    <g stroke={FIG_COLOR.mark} strokeWidth="1.5" vectorEffect="non-scaling-stroke">
      {ordered.map((dam) => {
        const [cx, cy] = toMap(dam.at[0], dam.at[1]);
        return (
          <circle
            key={dam.nameRecord}
            cx={cx}
            cy={cy}
            r={RADIUS[dam.consequence] ?? RADIUS["Very High"]}
            fill={published.has(dam.name) ? FIG_COLOR.mark : FIG_COLOR.paper}
            vectorEffect="non-scaling-stroke"
          />
        );
      })}
    </g>
  );
}

/**
 * The map.
 *
 * `published` is the set of dam names whose owner has said in writing what an
 * earthquake is expected to do to the structure. It is passed in rather than
 * held here because every one of those statements is a sourced sentence, and
 * sourced sentences live in the page module beside the prose they belong to.
 */
export function DamsMap({ published }: { published: readonly string[] }) {
  const set = new Set(published);
  return (
    <div className="p-4">
      <MapViewer
        label={`The ${DAM_FACTS.total} dams the provincial register classes Extreme or Very High failure consequence in the Lower Mainland, drawn on the region's shoreline and rivers.`}
        width={MAP_W}
        height={MAP_H}
        kmWide={KM_WIDE}
      >
        <g id={ID}>
          <Geography />
          <Marks published={set} />
        </g>
      </MapViewer>
      <Legend published={set} />
    </div>
  );
}

/**
 * The legend, in HTML outside the pane, which is where every word on a map
 * lives. The swatches are the marks themselves at the size they are drawn at
 * full extent, so a reader matches a shape rather than a description of one.
 */
function Legend({ published }: { published: ReadonlySet<string> }) {
  const hollow = DAM_FACTS.total - published.size;
  return (
    <dl className="mt-4 grid gap-3 text-xs text-ink-muted sm:grid-cols-2">
      <div>
        <dt className="font-semibold text-ink">Size: what a failure would reach</dt>
        <dd className="mt-1 flex flex-col gap-1">
          <span className="flex items-center gap-2">
            <Swatch r={8} filled />
            Extreme, {DAM_FACTS.extreme} dams
          </span>
          <span className="flex items-center gap-2">
            <Swatch r={5.5} filled />
            Very High, {DAM_FACTS.veryHigh} dams
          </span>
          <span className="mt-1 block">
            The province’s classification of what is downstream. It is not a
            seismic rating and not a statement that a dam is expected to fail.
          </span>
        </dd>
      </div>
      <div>
        <dt className="font-semibold text-ink">
          Fill: whether the owner has said what an earthquake would do
        </dt>
        <dd className="mt-1 flex flex-col gap-1">
          <span className="flex items-center gap-2">
            <Swatch r={8} filled />
            Published, {published.size} dams
          </span>
          <span className="flex items-center gap-2">
            <Swatch r={8} />
            Nothing found, {hollow} dams
          </span>
          <span className="mt-1 block">
            The table below names every dam and gives each statement in the
            owner’s own words.
          </span>
        </dd>
      </div>
    </dl>
  );
}

function Swatch({ r, filled = false }: { r: number; filled?: boolean }) {
  const size = 18;
  return (
    <svg
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      className="shrink-0"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill={filled ? FIG_COLOR.mark : FIG_COLOR.paper}
        stroke={FIG_COLOR.mark}
        strokeWidth="1.5"
      />
    </svg>
  );
}
