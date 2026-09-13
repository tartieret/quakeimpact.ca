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
  type CrossingEvent,
  type EventBand,
} from "@/content/crossings";

/**
 * Where the region's crossings are, and which of them anyone has published a
 * figure about.
 *
 * Read `README.md` beside this file, and `map-viewer.tsx` for why a map is the
 * one figure with a `viewBox` and the one a reader can touch. The decisions
 * that belong to this drawing rather than to maps in general:
 *
 - **It draws the earthquake, and it has to say what the earthquake bought.**
 *   The ramp is the return period each crossing has a published figure for.
 *   Left at that it would teach the exact inversion `/method/` warns about: a
 *   design intent is not a prediction, and the Ministry states plainly that it
 *   is not retrofitting these bridges to remain in service, only to not
 *   collapse. So the guard is not in the caption, where it could be skipped and
 *   where it would not travel between the two pages that carry this figure. It
 *   is in the key, directly under the ramp, and in the alt text.
 * - **A bigger mark is a bigger earthquake, and the sizes are an order rather
 *   than a scale.** Area carries the ordinal, which is the grammar the
 *   ShakeMaps already use, so it survives in greyscale and needs no hue. It is
 *   deliberately not proportional: 2,475 is five times 475 as a number and
 *   nothing like five times as a mark, because none of these figures is a
 *   measurement of strength that could be divided.
 * - **A design intent and an assessed capacity are not drawn alike.** Only the
 *   George Massey Tunnel is an assessment, and it is why the distinction
 *   exists: the tunnel was designed for a 475-year earthquake and now meets its
 *   criteria for 150 to 240 years, so drawing it at its design intent would put
 *   the wrong number on the map. It is hatched, which is the site's existing
 *   mark for a range rather than a figure.
 * - **A hollow mark says no return period was found, never that a crossing is
 *   unassessed.** Most of these have been assessed and most assessments are not
 *   public. Hollow marks sit off the ramp at one size, so they cannot be read
 *   as the weakest rung.
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
 * The ramp, in map units of radius. The smallest published class is about the
 * size a crossing actually is on this window; the rest step up from it.
 *
 * `none` is not the bottom of the ramp. It is drawn hollow at a size between
 * the rungs, because a crossing with nothing published is not a crossing with a
 * low number and must not be read as one.
 */
const RADIUS: Record<EventBand | "none", number> = {
  "150-240": 7,
  "475": 9.5,
  "1000": 12,
  "2475": 15,
  none: 8,
};

/** A tunnel is a square of about the same visual weight as its circle. */
const side = (r: number) => Math.round(r * 1.8);

/**
 * The hatch for an assessed range, filled with paper behind the lines so it
 * reads against water as well as land, exactly as the figure kit's does.
 *
 * Each use defines its own pattern under its own id. An SVG id is scoped to the
 * document rather than to the `<svg>` it sits in, so one shared id across the
 * map, the ramp, the key and the table rows meant twenty-five definitions of
 * the same pattern competing for six references, and every reference silently
 * resolving to whichever happened to come first. That works until something
 * reorders or hides the first one.
 *
 * The period is deliberately fine. The one mark that carries it is a tunnel
 * square about nine pixels across at full zoom-out, and a six-unit period put
 * two stripes in it, which reads as a glyph rather than as a texture. At four
 * it reads as "not solid" at the smallest size and resolves into the site's
 * usual hatch as soon as a reader zooms, which is when the distinction between
 * a range and a figure actually matters.
 */
function HatchDef({ id }: { id: string }) {
  return (
    <defs>
      <pattern
        id={id}
        width={4}
        height={4}
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(45)"
      >
        <rect width={4} height={4} fill={FIG_COLOR.paper} />
        <rect width={1.8} height={4} fill={FIG_COLOR.ink} />
      </pattern>
    </defs>
  );
}

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
  const r = RADIUS[crossing.event?.band ?? "none"];
  const shape = shapeOf(crossing.kind, r);
  const assessed = crossing.event?.kind === "assessed";
  const hatch = `crossings-hatch-map-${crossing.id}`;
  const fill = !crossing.event
    ? FIG_COLOR.paper
    : assessed
      ? `url(#${hatch})`
      : FIG_COLOR.ink;

  return (
    <g transform={`translate(${x},${y})`}>
      {assessed ? <HatchDef id={hatch} /> : null}
      {/* Paper under every mark, so a hollow one reads as hollow rather than
          letting the shoreline run through it. */}
      <g fill={FIG_COLOR.paper}>{shape}</g>
      <g fill={fill}>{shape}</g>
      <g
        fill="none"
        stroke={FIG_COLOR.ink}
        strokeWidth={FIG_STROKE}
        vectorEffect="non-scaling-stroke"
      >
        {shape}
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
 * the same physical size at every width and every zoom. The swatch box is one
 * size for every class and the mark inside it grows, which is what makes the
 * ramp readable as a ramp in a list.
 */
export function Swatch({
  band,
  kind = "bridge",
  assessed = false,
  uid,
}: {
  band: EventBand | "none";
  kind?: Crossing["kind"];
  assessed?: boolean;
  /** Unique within the page: a swatch that hatches defines its own pattern. */
  uid: string;
}) {
  const r = RADIUS[band];
  const shape = shapeOf(kind, r);
  const hatch = `crossings-hatch-${uid}`;
  const fill =
    band === "none"
      ? FIG_COLOR.paper
      : assessed
        ? `url(#${hatch})`
        : FIG_COLOR.ink;
  return (
    <svg
      width={34}
      height={34}
      viewBox="-17 -17 34 34"
      aria-hidden="true"
      className="shrink-0"
    >
      {assessed ? <HatchDef id={hatch} /> : null}
      <g fill={FIG_COLOR.paper}>{shape}</g>
      <g fill={fill}>{shape}</g>
      <g fill="none" stroke={FIG_COLOR.ink} strokeWidth={1.4}>
        {shape}
      </g>
    </svg>
  );
}

/**
 * The swatch a crossing gets, wherever one is shown beside its name. `where`
 * separates the key's copy of a crossing from the table's, because both appear
 * on `/after/transportation/` and a hatched swatch defines a pattern id.
 */
function CrossingSwatch({
  crossing,
  where,
}: {
  crossing: Crossing;
  where: string;
}) {
  return (
    <Swatch
      band={crossing.event?.band ?? "none"}
      kind={crossing.kind}
      assessed={crossing.event?.kind === "assessed"}
      uid={`${where}-${crossing.id}`}
    />
  );
}

/**
 * The ramp, in the order the map draws it. Each rung says what that earthquake
 * bought, because the number on its own says the opposite of what a reader
 * will take from it.
 */
const RAMP: {
  band: EventBand | "none";
  label: string;
  assessed?: boolean;
  gloss: string;
}[] = [
  {
    band: "2475",
    // The Port Mann's own source says 1 in 2,500 rather than 2,475. They are
    // the same design level and the rung names both, because quietly rounding
    // one source's figure onto another's is how a number stops being checkable.
    label: "2,475 years, or 1 in 2,500",
    gloss:
      "The level a new lifeline crossing is designed to. Two crossings reach it, and they are the two newest.",
  },
  {
    band: "1000",
    label: "1,000 years",
    gloss: "Above this event, the one crossing marked at it need not be passable.",
  },
  {
    band: "475",
    label: "475 years",
    gloss: "What a provincial retrofit is carried out against. Three crossings here.",
  },
  {
    band: "150-240",
    label: "150 to 240 years",
    assessed: true,
    gloss:
      "Hatched because it is an assessed range rather than a figure aimed at. The George Massey Tunnel, which was designed for 475 years and no longer meets it.",
  },
  {
    band: "none",
    label: "No return period published",
    gloss:
      "Nothing found in the public record. Most of these crossings have been assessed; most assessments are not published.",
  },
];

function Key() {
  return (
    <div className="flex flex-col gap-5 text-sm">
      <div>
        <p className="font-semibold text-ink">
          The earthquake each crossing has a published figure for
        </p>
        <p className="mt-1 text-ink-muted">
          A bigger mark is a bigger earthquake. The sizes are an order, not a
          scale.
        </p>
      </div>

      <ul className="flex flex-col gap-2">
        {RAMP.map((rung) => (
          <li key={rung.band} className="flex items-center gap-2">
            <Swatch
              band={rung.band}
              assessed={rung.assessed}
              uid={`ramp-${rung.band}`}
            />
            <span>
              <span className="font-semibold text-ink">{rung.label}.</span>{" "}
              <span className="text-ink-muted">{rung.gloss}</span>
            </span>
          </li>
        ))}
      </ul>

      {/* The guard, under the ramp rather than in the caption: it has to travel
          with the marks to both pages, and a reader who reads only the legend
          must still get it. */}
      <div className="border-l-2 border-accent pl-4">
        <p className="font-semibold text-ink">
          A return period is not a promise that the crossing still works.
        </p>
        <p className="mt-1 text-ink-muted">
          These figures are what each structure was aimed at, not a forecast of
          what it will do. A provincial retrofit is carried out to stop a bridge
          collapsing, and the Ministry states that it is not retrofitting these
          bridges to remain in service. A crossing marked here can stand up and
          still carry nobody, and none of these numbers says how long an
          inspection or a repair would take.
        </p>
      </div>

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
                <li key={crossing.id} className="flex items-center gap-1">
                  <CrossingSwatch crossing={crossing} where="key" />
                  <span className="text-ink">{crossing.name}</span>
                  {crossing.event ? (
                    <span className="text-ink-faint">
                      {crossing.event.label}
                    </span>
                  ) : null}
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
        label="Map of the region's nineteen road, rail and transit crossings, each sized by the earthquake it has a published figure for."
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
    <span className="flex items-center gap-1">
      <CrossingSwatch crossing={record} where="row" />
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
