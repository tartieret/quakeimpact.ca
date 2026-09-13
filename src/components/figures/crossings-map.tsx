import type { ReactNode } from "react";
import { FIG_COLOR, FIG_STROKE } from "./figure-kit";
import { MapViewer } from "./map-viewer";
import waterFile from "@/data/region-water.json";
import { dataSource } from "@/data/sources";
import {
  CROSSINGS,
  CROSSINGS_BY_WATER,
  crossing as crossingById,
  type Crossing,
  type PublishedState,
} from "@/content/crossings";

/**
 * Where the region's crossings are, and which of them anyone has published a
 * figure about.
 *
 * Read `README.md` beside this file, and `map-viewer.tsx` for why a map is the
 * one figure with a `viewBox` and the one a reader can touch. The decisions
 * that belong to this drawing rather than to maps in general:
 *
 * - **It does not encode how well a crossing would do.** Nobody publishes that
 *   per crossing. `/after/transportation/` exists to say so: the figures that
 *   are public each belong to one earthquake at one place on one structure,
 *   and Queensborough's 150 mm and Golden Ears' 0.3 m are not points on a
 *   shared scale. Ramping them against each other would assert a comparability
 *   every source on that page denies. What is drawn instead is the state of the
 *   public record, which the sources do give.
 * - **The finding is where the empty marks fall, not how many there are.** They
 *   cluster on the crossings between Vancouver and everywhere else, which is a
 *   thing a table of the same nineteen rows cannot show. That is the whole
 *   reason this is a map.
 * - **An empty mark says nothing was found, never that nothing exists.** Most
 *   of these crossings have been assessed and most assessments are not public.
 *   The key says so in those words, and the alt text carries the guard too.
 * - **There are no response routes on it.** `docs/style-guide.md` §8 forbids
 *   drawing emergency-responder infrastructure as public infrastructure,
 *   `docs/licensing.md` makes the City's route map link-only, and since June
 *   2018 the routes are not designated in advance at all. See the note in
 *   `getting-around.tsx`, which has carried this reasoning since the page was
 *   built.
 *
 * The pane holds no type, so every word is in the HTML under it. A marker is
 * unlabelled; the key names all nineteen, grouped by the water they cross,
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

/** One map unit, in metres. Used to size a marker against real ground. */
const METRES_PER_UNIT = (KM_WIDE * 1000) / MAP_W;

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

/**
 * A marker is about 900 m of ground across, which is roughly the length of the
 * crossings it stands on. That is deliberate: the marks scale with the map, so
 * zooming in walks a mark down onto the structure it marks rather than leaving
 * a symbol floating over it. It is a locator and not a measure, though, and the
 * key says so: Canoe Pass is 154 m and the Massey tunnel 1,299 m, and both get
 * the same mark.
 */
const R = Math.round(450 / METRES_PER_UNIT);
const SIDE = Math.round(R * 1.8);

/**
 * Fill carries the state and shape carries the kind, so neither channel is
 * hue and both survive in greyscale. Full, half and empty is the same ordinal
 * the band meter uses, and it reads at the size a marker actually gets, which
 * a hatch at fifteen pixels does not.
 */
function Mark({ crossing }: { crossing: Crossing }) {
  const [x, y] = toMap(crossing.at[0], crossing.at[1]);
  const line = {
    stroke: FIG_COLOR.ink,
    strokeWidth: FIG_STROKE,
    vectorEffect: "non-scaling-stroke" as const,
  };
  const outline = crossing.kind === "tunnel" ? (
    <rect x={-SIDE / 2} y={-SIDE / 2} width={SIDE} height={SIDE} />
  ) : (
    <circle r={R} />
  );
  /** The filled half of a `qualitative` mark: the east half of either shape. */
  const half = crossing.kind === "tunnel" ? (
    <rect x={0} y={-SIDE / 2} width={SIDE / 2} height={SIDE} />
  ) : (
    <path d={`M0 ${-R}A${R} ${R} 0 0 1 0 ${R}Z`} />
  );

  return (
    <g transform={`translate(${x},${y})`}>
      {/* Paper under every mark, so an empty one reads as empty rather than
          letting the shoreline run through it. */}
      <g fill={FIG_COLOR.paper}>{outline}</g>
      {crossing.state === "quantitative" ? (
        <g fill={FIG_COLOR.ink}>{outline}</g>
      ) : null}
      {crossing.state === "qualitative" ? (
        <g fill={FIG_COLOR.ink}>{half}</g>
      ) : null}
      <g fill="none" {...line}>
        {outline}
      </g>
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
export function Swatch({ state }: { state: PublishedState }) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="-9 -9 18 18"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle r={8} fill={FIG_COLOR.paper} />
      {state === "quantitative" ? <circle r={8} fill={FIG_COLOR.ink} /> : null}
      {state === "qualitative" ? (
        <path d="M0 -8A8 8 0 0 1 0 8Z" fill={FIG_COLOR.ink} />
      ) : null}
      <circle r={8} fill="none" stroke={FIG_COLOR.ink} strokeWidth={1.5} />
    </svg>
  );
}

const STATES: { state: PublishedState; label: string; gloss: string }[] = [
  {
    state: "quantitative",
    label: "A figure is published",
    gloss: "A return period, a displacement or an assessed capacity.",
  },
  {
    state: "qualitative",
    label: "Published in words only",
    gloss: "Described, with no return period and no figure.",
  },
  {
    state: "none",
    label: "Nothing found",
    gloss:
      "Nothing located in the public record. Most of these crossings have been assessed; most assessments are not published.",
  },
];

function Key() {
  return (
    <div className="flex flex-col gap-5 text-sm">
      <ul className="flex flex-col gap-2">
        {STATES.map(({ state, label, gloss }) => (
          <li key={state} className="flex gap-3">
            <span className="mt-0.5">
              <Swatch state={state} />
            </span>
            <span>
              <span className="font-semibold text-ink">{label}.</span>{" "}
              <span className="text-ink-muted">{gloss}</span>
            </span>
          </li>
        ))}
      </ul>

      <p className="text-ink-muted">
        A circle is a bridge and a square is a tunnel. The George Massey Tunnel
        is the only square.
      </p>

      <div className="flex flex-col gap-3">
        {CROSSINGS_BY_WATER.map(({ water, crossings }) => (
          <div key={water}>
            <p className="text-xs font-semibold tracking-[0.12em] text-ink-faint uppercase">
              {water}
            </p>
            <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
              {crossings.map((crossing) => (
                <li key={crossing.id} className="flex items-center gap-1.5">
                  <Swatch state={crossing.state} />
                  <span className="text-ink">{crossing.name}</span>
                  {crossing.replacement ? (
                    <span className="text-ink-faint">
                      ({crossing.replacement})
                    </span>
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
        label="Map of the region's nineteen road, rail and transit crossings, each marked with whether anything has been published about the earthquake it was designed or assessed against."
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
 * A crossing's name with its mark, for prose and for the table on
 * `/after/transportation/`. The mark comes from the same list the map draws
 * from, so a row and its marker cannot disagree about what has been published.
 * `children` overrides the label where a page has a fuller name for it; the
 * state is never overridable, because that is the thing being kept in step.
 */
export function CrossingName({
  id,
  children,
}: {
  id: string;
  children?: ReactNode;
}) {
  const record = crossingById(id);
  return (
    <span className="flex items-center gap-2">
      <Swatch state={record.state} />
      <span>{children ?? record.name}</span>
    </span>
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
