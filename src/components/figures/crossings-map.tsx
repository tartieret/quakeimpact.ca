import { FIG_COLOR, FIG_STROKE } from "./figure-kit";
import { MapViewer } from "./map-viewer";
import waterFile from "@/data/region-water.json";
import { dataSource } from "@/data/sources";
import {
  CROSSINGS,
  CROSSINGS_BY_WATER,
  CROSSINGS_FACTS,
  type Crossing,
} from "@/content/crossings";

/**
 * Where the region's crossings are.
 *
 * Read `README.md` beside this file, and `map-viewer.tsx` for why a map is the
 * one figure with a `viewBox` and the one a reader can touch. The decisions
 * that belong to this drawing rather than to maps in general:
 *
 * - **It is geography, not a grade.** Every crossing gets the same mark, a
 *   circle for a bridge and a square for a tunnel. An earlier version filled
 *   each mark by the design earthquake in the crossing's design paper. A bridge
 *   engineer's review was that those figures say little about how a structure
 *   would perform without its current assessment, which is rarely public, and a
 *   ramp on a map reads as a ranking whatever the key says. See
 *   `docs/knowledge/research.md`.
 * - **Works under way are words in the key, never a mark.** A replacement or an
 *   upgrade an owner has published is a fact about the works. Drawing it would
 *   turn it back into a grade.
 * - **There are no response routes on it.** `docs/style-guide.md` §6 forbids
 *   drawing emergency-responder infrastructure as public infrastructure,
 *   `docs/licensing.md` makes the City's route map link-only, and since June
 *   2018 the routes are not designated in advance at all. See the note in
 *   `getting-around.tsx`, which has carried this reasoning since the page was
 *   built.
 *
 * The pane holds no type, so every word is in the HTML under it. A marker is
 * unlabelled; the key names every crossing, grouped by the water it crosses,
 * which is the order a reader meets them coming off the peninsula.
 */

/* ------------------------------------------------------------------ */
/* The ground                                                          */
/* ------------------------------------------------------------------ */

interface WaterFile {
  bbox: number[];
  coast: number[][][];
  river: number[][][];
}

const WATER: WaterFile = waterFile;

/** The attribution each source owes, so neither is ever retyped. */
export const CROSSINGS_SOURCES = [
  dataSource("bc-fwa-coastlines"),
  dataSource("bc-mot-road-structures"),
  dataSource("cov-public-streets"),
] as const;

const [WEST, SOUTH, EAST, NORTH] = WATER.bbox;

const KM_PER_DEGREE = 111.32;
const WINDOW_LATITUDE = 49.2;

/** Ground size of the window. The map has to be in ground distance or the
 * region is the wrong shape, and the pane's scale bar wants the width. */
const KM_WIDE =
  (EAST - WEST) *
  KM_PER_DEGREE *
  Math.cos((WINDOW_LATITUDE * Math.PI) / 180);
const KM_TALL = (NORTH - SOUTH) * KM_PER_DEGREE;

/**
 * The map's own coordinate space, which the pane's `viewBox` reads. A thousand
 * units across is a round number to write path data in; the height is whatever
 * the ground aspect makes it.
 */
const MAP_W = 1000;
const MAP_H = Math.round((MAP_W * KM_TALL) / KM_WIDE);

function toMap(lon: number, lat: number): [number, number] {
  const x = ((lon - WEST) / (EAST - WEST)) * MAP_W;
  const y = ((NORTH - lat) / (NORTH - SOUTH)) * MAP_H;
  return [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
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

const COAST_PATH = linesToPath(WATER.coast);
const RIVER_PATH = linesToPath(WATER.river);

/* ------------------------------------------------------------------ */
/* The marks                                                           */
/* ------------------------------------------------------------------ */

/** Every crossing has this radius: the map says where, not how strong. */
const RADIUS = 7;

/** A tunnel is a square of about the same visual weight as its circle. */
const side = (r: number) => Math.round(r * 1.8);

/** The outline of one mark, at a radius, for either kind of crossing. */
function shapeOf(kind: Crossing["kind"], r: number) {
  if (kind === "tunnel") {
    const a = side(r);
    return <rect x={-a / 2} y={-a / 2} width={a} height={a} />;
  }
  return <circle r={r} />;
}

function Mark({ crossing }: { crossing: Crossing }) {
  const [x, y] = toMap(crossing.at[0], crossing.at[1]);
  return (
    <g transform={`translate(${x},${y})`}>
      {/* A paper halo keeps the shoreline from running through the mark. */}
      <g fill={FIG_COLOR.paper}>{shapeOf(crossing.kind, RADIUS + 3)}</g>
      <g fill={FIG_COLOR.ink}>{shapeOf(crossing.kind, RADIUS)}</g>
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* The drawing                                                         */
/* ------------------------------------------------------------------ */

/** The geometry, built on the server and handed to the pane as children. */
function Geometry() {
  return (
    <g fill="none">
      <path
        d={COAST_PATH}
        stroke={FIG_COLOR.mark}
        strokeWidth={FIG_STROKE}
        vectorEffect="non-scaling-stroke"
      />
      <path
        d={RIVER_PATH}
        stroke={FIG_COLOR.track}
        strokeWidth={FIG_STROKE}
        vectorEffect="non-scaling-stroke"
      />
      {CROSSINGS.map((crossing) => (
        <Mark key={crossing.id} crossing={crossing} />
      ))}
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* The key                                                             */
/* ------------------------------------------------------------------ */

/**
 * A swatch at a fixed pixel size, in HTML rather than in the pane, so it stays
 * the same physical size at every width and every zoom.
 */
function Swatch({ kind }: { kind: Crossing["kind"] }) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="-8 -8 16 16"
      aria-hidden="true"
      className="shrink-0"
    >
      <g fill={FIG_COLOR.ink}>{shapeOf(kind, 6)}</g>
    </svg>
  );
}

function Key() {
  return (
    <div className="flex flex-col gap-4 text-sm">
      <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-ink-muted">
        <span className="flex items-center gap-1">
          <Swatch kind="bridge" /> Bridge
        </span>
        <span className="flex items-center gap-1">
          <Swatch kind="tunnel" /> Tunnel
        </span>
      </p>

      <div className="flex flex-col gap-3">
        {CROSSINGS_BY_WATER.map(({ water, crossings }) => (
          <div key={water}>
            <p className="text-xs font-semibold tracking-[0.12em] text-ink-faint uppercase">
              {water}
            </p>
            <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
              {crossings.map((crossing) => (
                <li key={crossing.id} className="flex items-center gap-1">
                  <Swatch kind={crossing.kind} />
                  <span className="text-ink">{crossing.name}</span>
                  {crossing.works ? (
                    <span className="text-ink-faint">({crossing.works})</span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* The figure                                                          */
/* ------------------------------------------------------------------ */

export function CrossingsMap() {
  return (
    <div className="flex flex-col gap-5">
      <MapViewer
        label={`Map of the region's ${CROSSINGS_FACTS.total} road, rail and transit crossings. A circle is a bridge and a square is a tunnel.`}
        width={MAP_W}
        height={MAP_H}
        kmWide={KM_WIDE}
      >
        <Geometry />
      </MapViewer>
      <Key />
    </div>
  );
}

/**
 * The attribution the licensed sources require, rendered once and used by both
 * pages that carry the map. An attribution has to travel with the graphic
 * rather than sit on a page of its own, and these are the exact strings from
 * `src/data/sources.ts`.
 *
 * Deduplicated by the string itself. Three datasets are drawn here and two of
 * them are provincial, so the Open Government Licence - British Columbia
 * sentence would otherwise appear twice under one figure. The licence asks for
 * the acknowledgement once; printing it twice reads as a fault rather than as
 * extra credit.
 */
const LICENCE_LINES = CROSSINGS_SOURCES.filter(
  (source, index, all) =>
    all.findIndex((other) => other.attribution === source.attribution) === index,
);

export function CrossingsLicence() {
  return (
    <>
      {LICENCE_LINES.map((source, index) => (
        <span key={source.id}>
          {index > 0 ? " " : null}
          {source.attribution}{" "}
          <a
            href={source.licenceUrl}
            className="text-accent underline underline-offset-2"
          >
            Read the licence
          </a>
          .
        </span>
      ))}
    </>
  );
}
