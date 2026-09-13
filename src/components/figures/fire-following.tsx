import type { ReactNode } from "react";
import {
  FIG_COLOR,
  FIG_TYPE,
  FigHeading,
  FigText,
  FigureCanvas,
} from "./figure-kit";
import { MapViewer } from "./map-viewer";
import boundaryFile from "@/data/vancouver-boundary.json";
import hallsFile from "@/data/fire-halls.json";
import mainsFile from "@/data/fire-protection-mains.json";
import waterFile from "@/data/vancouver-water.json";
import { dataSource } from "@/data/sources";

/**
 * The two maps on `/shaking/fire-following/`: the Dedicated Fire Protection
 * System mains, and Vancouver's fire halls by what the City has published
 * about the standard each one is built to.
 *
 * Read `README.md` beside this file, then `map-viewer.tsx`, for why a map is
 * the one figure here with a `viewBox` and the one a reader can touch. The
 * decisions that belong to these two drawings rather than to maps in general:
 *
 * - **One window, one projection, two drawings.** Both maps are the same
 *   ground at the same scale, so a reader who has learned the shape of the
 *   city on the first one keeps it on the second, and can see without being
 *   told how few of the halls stand inside the network the first map draws.
 * - **The water is drawn because the City boundary is not a shoreline.** The
 *   boundary layer is a jurisdictional line: it runs straight out across
 *   Burrard Inlet and English Bay and says nothing about where the land stops.
 *   Without the Freshwater Atlas under it there is no False Creek and no
 *   peninsula, and neither map can be located at all.
 * - **The mains map is the network, not a service area.** The dataset is 241
 *   runs of pipe. Any coverage boundary around them would be a hull this
 *   project invented and published in the City's name, and the argument is
 *   stronger as fact than as a line somebody drew: the whole system fits in a
 *   corner of the city about four kilometres by three. See
 *   `docs/research/maps.md`.
 * - **The hall classes are this site's reading of cited City documents, not a
 *   City rating.** No published document classifies the nineteen halls. What
 *   exists is a capital plan naming six of them and saying nothing about the
 *   rest, so the third class is the absence itself, and it is drawn as a gap
 *   in the ink rather than as a colour on a severity ramp: the ramp on this
 *   site means impact on a system, and how a building was built is not that.
 *   The licence on the underlying layer forbids any use suggesting official
 *   status, which is the same conclusion arrived at from the other direction.
 */

/* ------------------------------------------------------------------ */
/* The data                                                            */
/* ------------------------------------------------------------------ */

interface Bbox {
  bbox: number[];
}

interface WaterFile {
  coast: number[][][];
  river: number[][][];
}

interface MainsFile extends Bbox {
  runs: { mm: number | null; c: number[][] }[];
}

interface HallsFile extends Bbox {
  accuracy: string;
  halls: { no: number; address: string; area: string | null; c: number[] }[];
}

const WATER: WaterFile = waterFile;
const BOUNDARY: { lines: number[][][] } & Bbox = boundaryFile;
const MAINS: MainsFile = mainsFile;
const HALLS: HallsFile = hallsFile;

/** The City's own records, so an attribution is never retyped into a caption. */
export const DFPS_SOURCE = dataSource("cov-dfps-mains");
export const BOUNDARY_SOURCE = dataSource("cov-city-boundary");
export const HALLS_SOURCE = dataSource("cov-fire-halls");
/** The water under both maps is a second body's layer under a second licence. */
export const FIRE_BASE_SOURCE = dataSource("bc-fwa-coastlines");

/** The City's own accuracy caveat, carried out of the file rather than retyped. */
export const HALLS_ACCURACY = HALLS.accuracy;

/* ------------------------------------------------------------------ */
/* The window                                                          */
/* ------------------------------------------------------------------ */

const KM_PER_DEGREE = 111.32;
const WINDOW_LATITUDE = 49.26;
const KM_PER_DEGREE_LON =
  KM_PER_DEGREE * Math.cos((WINDOW_LATITUDE * Math.PI) / 180);

/**
 * The frame, derived rather than written down: the city boundary and every
 * fire hall, with a margin. Hall No. 10 sits in the University Endowment
 * Lands, west of the city, so the boundary alone would crop it off the edge.
 * Deriving the window means a rebuilt dataset cannot silently fall outside it.
 */
const PAD_LON = 0.006;
const PAD_LAT = 0.004;

function union(a: number[], b: number[]): number[] {
  return [
    Math.min(a[0], b[0]),
    Math.min(a[1], b[1]),
    Math.max(a[2], b[2]),
    Math.max(a[3], b[3]),
  ];
}

const FRAME = union(BOUNDARY.bbox, HALLS.bbox);
const WEST = FRAME[0] - PAD_LON;
const SOUTH = FRAME[1] - PAD_LAT;
const EAST = FRAME[2] + PAD_LON;
const NORTH = FRAME[3] + PAD_LAT;

/**
 * The map's own coordinate space. Width is a round 2,000 units, which at this
 * window puts one unit at about 8 m of ground and one decimal place at under a
 * metre, matching the five decimal places the mains are vendored at. Height
 * comes from the ground ratio, not from the degree ratio, or the city is the
 * wrong shape.
 */
const MAP_W = 2000;
const KM_WIDE = (EAST - WEST) * KM_PER_DEGREE_LON;
const KM_DEEP = (NORTH - SOUTH) * KM_PER_DEGREE;
const MAP_H = Math.round((MAP_W * KM_DEEP) / KM_WIDE);

function project(lon: number, lat: number): [number, number] {
  return [
    Math.round(((lon - WEST) / (EAST - WEST)) * MAP_W * 10) / 10,
    Math.round(((NORTH - lat) / (NORTH - SOUTH)) * MAP_H * 10) / 10,
  ];
}

function linesToPath(lines: number[][][]): string {
  let d = "";
  for (const line of lines) {
    let first = true;
    for (const [lon, lat] of line) {
      const [x, y] = project(lon, lat);
      d += `${first ? "M" : "L"}${x} ${y}`;
      first = false;
    }
  }
  return d;
}

/* ------------------------------------------------------------------ */
/* What the drawings claim, counted                                    */
/* ------------------------------------------------------------------ */

/**
 * Whole kilometres. A tenth would be a real measurement of the bounding box
 * and a misleading one on the page: the box is not the ground the system
 * covers, and a figure like "4.1 km by 3.2 km" invites a reader to treat it as
 * an area. Round numbers say what they are, which is the size of the corner
 * the network sits in.
 */
function km(degrees: number, perDegree: number): string {
  return `${Math.round(degrees * perDegree)} km`;
}

/**
 * The mains map's finding, measured off the two vendored layers rather than
 * asserted: how much ground the network covers, against how much ground the
 * city covers. Neither number is in any document, and neither needs to be.
 * Both are the extent of a published geometry.
 */
export const MAINS_FACTS = {
  runs: MAINS.runs.length,
  width: km(MAINS.bbox[2] - MAINS.bbox[0], KM_PER_DEGREE_LON),
  depth: km(MAINS.bbox[3] - MAINS.bbox[1], KM_PER_DEGREE),
  cityWidth: km(BOUNDARY.bbox[2] - BOUNDARY.bbox[0], KM_PER_DEGREE_LON),
  cityDepth: km(BOUNDARY.bbox[3] - BOUNDARY.bbox[1], KM_PER_DEGREE),
} as const;

/* ------------------------------------------------------------------ */
/* The hall classes                                                    */
/* ------------------------------------------------------------------ */

/**
 * What this project established about each hall, and nothing more.
 *
 * Every entry here is a hall a cited document names individually. `built` is
 * the one hall the City says is finished to a post-disaster standard;
 * `planned` is a hall named in a capital plan for replacement or seismic
 * upgrade, which is a commitment rather than a standard met. Every hall not
 * listed falls to `unestablished`.
 *
 * **That third class is about this project's knowledge, not about the City's
 * record, and the difference is the whole reason it is worded the way it is.**
 * "Nothing has been published" would be a claim over the entire City
 * publication record, and what was actually searched is two capital plans and
 * the pages around them. So the class says more information is needed, which
 * is what `docs/research/buildings.md` already records as a verification item:
 * how many of the nineteen are rated post-disaster is **not established**, and
 * the City's own phrase for what it is doing is "the upgrade and replacement
 * of several fire halls", which the same file forbids turning into a number.
 *
 * It reads the same way round for a reader, and it is defensible against the
 * one person who knows of a document we did not find.
 *
 * The keys are the City's own hall numbers, which is what the open data layer
 * names each record with, so the two cannot drift apart.
 *
 *   1   seismic upgrade                      [COV-CAP-2730]
 *   2   built 1974, no longer meets current
 *       seismic standards, being replaced    [COV-CAP-2730] [COV-CAP-2326]
 *   8   rebuild to post-disaster, 2029       [COV-CAP-2730]
 *   9   rebuild to post-disaster, 2029       [COV-CAP-2730]
 *   12  selected for seismic upgrade in the
 *       2019 to 2022 capital plan; no
 *       completion published                 [COV-CAP-1922]
 *   17  opened September 2023 as a
 *       post-disaster communications hub     [COV-CAP-2730]
 */
const NAMED: Record<number, "built" | "planned"> = {
  1: "planned",
  2: "planned",
  8: "planned",
  9: "planned",
  12: "planned",
  17: "built",
};

type StatusKey = "built" | "planned" | "unestablished";

/**
 * The three marks, and the four channels that keep them apart.
 *
 * **Shape** is the one that does the work: a disc, a ring, a square. Three
 * different shapes rather than three sizes of dot, because the classes have to
 * survive greyscale, a colour-blind reader and a 390 px phone, and two discs
 * of different diameters survive none of those as well as a square does. The
 * ring is the middle class because a commitment is a thing with an open
 * centre: the money is named and the standard is not yet met.
 *
 * **Colour** is the band ramp, and it is redundant on purpose. Take every hue
 * out and the drawing says exactly what it said before, which is the site's
 * rule: never meaning in colour alone. The ramp is used rather than a new
 * palette because a fourth set of hues on a site with one accent and one ramp
 * is how a reference work starts looking like a dashboard. `bandUnknown` is
 * not borrowed at all: it is already the site's colour for a gap, and the gap
 * is what the third class is.
 *
 * **Size** and **a written label with its count** are the other two, and the
 * label is the one a screen reader gets.
 *
 * **Nothing here is a thin hairline.** The marks are drawn in map units, so
 * they shrink with the column, and a 390 px phone gives them a little over
 * half the diameter a laptop does. A ring fine enough to look right on a
 * laptop disappears there, so the two solid classes are solid and the ring is
 * heavy. Sizes below were set at phone width and checked at the wider one,
 * which is the order that works.
 *
 * **The ring's centre is open rather than filled with paper**, and no mark
 * carries a paper halo. Paper on paper is a mark at 1:1 against its own
 * ground, which is what a mark is never allowed to be; the halls sit far
 * enough apart that nothing needs separating from its neighbour anyway.
 */
const CLASSES: {
  key: StatusKey;
  label: string;
  shape: "disc" | "ring" | "square";
  fill: string;
  stroke: string;
  strokeWidth: number;
  /** Half the mark's width, so one number sizes a disc and a square alike. */
  r: number;
}[] = [
  {
    key: "built",
    label: "Built to a post-disaster standard",
    shape: "disc",
    fill: FIG_COLOR.bandLow,
    stroke: "none",
    strokeWidth: 0,
    r: 17,
  },
  {
    key: "planned",
    label: "Replacement or upgrade in a capital plan",
    shape: "ring",
    fill: "none",
    stroke: FIG_COLOR.bandMedium,
    strokeWidth: 7,
    r: 16,
  },
  {
    key: "unestablished",
    label: "More information needed",
    shape: "square",
    fill: FIG_COLOR.bandUnknown,
    stroke: "none",
    strokeWidth: 0,
    r: 11,
  },
];

/**
 * One mark, at a point. Drawn here rather than inline because the map and the
 * legend have to draw the same three shapes, and two copies of a switch is how
 * a legend ends up lying about the drawing beside it.
 */
function HallMark({
  klass,
  cx,
  cy,
  scale = 1,
}: {
  klass: (typeof CLASSES)[number];
  cx: number;
  cy: number;
  /** The legend draws the marks in proportion but at a readable size. */
  scale?: number;
}) {
  const r = klass.r * scale;
  const common = {
    fill: klass.fill,
    stroke: klass.stroke,
    strokeWidth: klass.strokeWidth * scale,
  };
  if (klass.shape === "square") {
    return <rect x={cx - r} y={cy - r} width={r * 2} height={r * 2} {...common} />;
  }
  return <circle cx={cx} cy={cy} r={r} {...common} />;
}

function statusOf(no: number): StatusKey {
  return NAMED[no] ?? "unestablished";
}

/**
 * The counts the caption and the alt text state, counted here rather than
 * typed out, so a rebuilt hall layer cannot leave a sentence behind.
 *
 * A hall with no local area is the one in the University Endowment Lands,
 * which the layer covers and the City does not count among its nineteen. The
 * emptiness of that field is the City's own attribution, not a guess: the UEL
 * is not one of Vancouver's twenty-two local areas.
 */
const inCity = HALLS.halls.filter((hall) => hall.area !== null);

export const HALL_FACTS = {
  total: HALLS.halls.length,
  inCity: inCity.length,
  outside: HALLS.halls.length - inCity.length,
  built: inCity.filter((hall) => statusOf(hall.no) === "built").length,
  planned: inCity.filter((hall) => statusOf(hall.no) === "planned").length,
  unestablished: inCity.filter((hall) => statusOf(hall.no) === "unestablished")
    .length,
} as const;

/* ------------------------------------------------------------------ */
/* The ground both maps are drawn on                                   */
/* ------------------------------------------------------------------ */

const ID = "fire-following";

const COAST_PATH = linesToPath(WATER.coast);
const RIVER_PATH = linesToPath(WATER.river);
const BOUNDARY_PATH = linesToPath(BOUNDARY.lines);

/**
 * Water, then the city limits over it.
 *
 * The shoreline is load-bearing by the style guide's own test: cover it and
 * neither map says where anything is. So it is `water`, which is held to the
 * same 3:1 as `mark` and is the site's one colour that names a thing rather
 * than scoring it. Drawn grey it was a line with land on an unstated side of
 * it; drawn blue it is a coast. The city boundary is
 * reference, which is all a municipal outline is ever allowed to be here, and
 * it is drawn quiet and dashed so it cannot be mistaken for a shoreline where
 * it strikes out across the water on a line the land does not follow.
 *
 * `non-scaling-stroke` keeps all three at a hairline through the zoom instead
 * of letting them swell into bands.
 *
 * **The sea is a stroke and not a fill**, because the vendored coastline is
 * open lines rather than closed land polygons: the layer is linear and the
 * mainland runs off every edge of the window, so there is no ring to fill
 * without inventing one along the frame. `docs/research/maps.md` settled that,
 * and a styling request does not reopen it.
 *
 * **The paths are written out in both maps rather than defined once and
 * referenced twice.** The ShakeMap figure does the opposite, and the reason it
 * has to is distance: its two copies sit about 85 kB apart, well outside the
 * 32 kB window a gzip stream looks back through, so the duplicate really did
 * cost a second copy. These two sit a few kilobytes apart in one page and the
 * base layer is 19 kB, so the second copy is inside the window and compresses
 * to almost nothing. What a shared `defs` would buy instead is a hidden
 * dependency between two figures in two different sections, where moving
 * either one silently empties the other.
 */
function FireGeography() {
  return (
    <g fill="none" strokeLinejoin="round" strokeLinecap="round">
      <path
        d={COAST_PATH}
        stroke={FIG_COLOR.water}
        strokeWidth="1.25"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d={RIVER_PATH}
        stroke={FIG_COLOR.water}
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d={BOUNDARY_PATH}
        stroke={FIG_COLOR.track}
        strokeWidth="1.5"
        strokeDasharray="6 5"
        vectorEffect="non-scaling-stroke"
      />
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* One map, with its finding above it                                  */
/* ------------------------------------------------------------------ */

/**
 * A single pane and the words that introduce it, laid out exactly as
 * `LinkedMapPanes` lays out one of a set. Two maps on this page need it; a
 * third elsewhere would be the moment to move it into `map-viewer.tsx`.
 */
function MapPanel({
  label,
  heading,
  value,
  subnote,
  maxZoom,
  children,
}: {
  label: string;
  heading: ReactNode;
  value: ReactNode;
  subnote: ReactNode;
  maxZoom?: number;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 px-4 pt-5 sm:px-6">
      <div>
        <p className="text-sm font-semibold text-ink">{heading}</p>
        <p className="mt-1 text-lg font-bold text-ink">{value}</p>
        <p className="text-xs text-ink-faint">{subnote}</p>
      </div>
      <MapViewer
        label={label}
        width={MAP_W}
        height={MAP_H}
        kmWide={KM_WIDE}
        maxZoom={maxZoom}
      >
        {children}
      </MapViewer>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* The mains                                                           */
/* ------------------------------------------------------------------ */

const MAINS_PATH = linesToPath(MAINS.runs.map((run) => run.c));

const MAINS_LEGEND_H = 112;

/**
 * The mains are drawn heavier than the shoreline and in full ink, because they
 * are the subject and the coastline is the ground. They keep a non-scaling
 * stroke for the same reason the coast does: a pipe is a line, and a line that
 * thickened sixteen times would start to read as a corridor of served
 * ground, which is the one thing this drawing must not say.
 */
function MainsBody() {
  return (
    <g>
      <FireGeography />
      <path
        d={MAINS_PATH}
        fill="none"
        stroke={FIG_COLOR.ink}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </g>
  );
}

function MainsLegend() {
  return (
    <FigureCanvas id={`${ID}-mains-legend`} height={MAINS_LEGEND_H}>
      <FigHeading y={14}>What is drawn</FigHeading>
      <g transform="translate(0,26)">
        <rect x="0" y="4.5" width="26" height="2" fill={FIG_COLOR.ink} />
        <FigText x={38} y={11} size={FIG_TYPE.tick} fill={FIG_COLOR.muted}>
          Dedicated fire protection main
        </FigText>
        <rect x="0" y="24.5" width="26" height="1.25" fill={FIG_COLOR.water} />
        <FigText x={38} y={31} size={FIG_TYPE.tick} fill={FIG_COLOR.muted}>
          Shoreline and river water
        </FigText>
        <rect x="0" y="44" width="26" height="1.5" fill={FIG_COLOR.track} />
        <FigText x={38} y={51} size={FIG_TYPE.tick} fill={FIG_COLOR.muted}>
          City limits, for reference only
        </FigText>
      </g>
      <FigText y={104} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
        The pipe, not a service area. No boundary is published.
      </FigText>
    </FigureCanvas>
  );
}

/**
 * The dedicated fire mains on the city they serve a corner of.
 *
 * The finding is the proportion, and it is written out above the drawing as
 * well as drawn, because a reader who cannot resolve the geometry still has
 * it. The guard the figure carries is that the line is pipe: everywhere the
 * line is not, a fire is fought with water from the ordinary mains, and the
 * drawing says nothing about how far from a main a hydrant reaches.
 */
export function DedicatedFireMains() {
  return (
    <div className="flex flex-col">
      <MapPanel
        label="The Dedicated Fire Protection System mains across the City of Vancouver"
        heading="The dedicated fire protection network"
        value={`About ${MAINS_FACTS.width} by ${MAINS_FACTS.depth} of a city ${MAINS_FACTS.cityWidth} across`}
        subnote={`${MAINS_FACTS.runs} runs of main, and no others anywhere in the region`}
      >
        <MainsBody />
      </MapPanel>
      <MainsLegend />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* The halls                                                           */
/* ------------------------------------------------------------------ */

/**
 * A symbol map is worth zooming only until its marks separate, which here is
 * well before the sixteen times the pane offers by default. The marks scale
 * with the drawing rather than staying a fixed number of pixels, which is the
 * honest way round given the City states its hall locations are approximate:
 * the mark covers ground rather than claiming a point.
 */
const HALL_MAX_ZOOM = 4;

function HallsBody() {
  return (
    <g>
      <FireGeography />
      {CLASSES.map((klass) => (
        <g key={klass.key}>
          {HALLS.halls
            .filter((hall) => statusOf(hall.no) === klass.key)
            .map((hall) => {
              const [x, y] = project(hall.c[0], hall.c[1]);
              return <HallMark key={hall.no} klass={klass} cx={x} cy={y} />;
            })}
        </g>
      ))}
    </g>
  );
}

/**
 * The legend's marks are the map's marks in proportion to one another, set to
 * an absolute size that reads rather than to the size the map happens to be
 * drawn at. The map's own scale is whatever the reader has zoomed to, so a
 * swatch cannot be "the mark at its real size" and stay true; what it can be,
 * and is, is the ratio between the three.
 */
const HALL_LEG_SCALE = 0.42;

const HALL_LEG_ROW_H = 26;
const HALL_LEG_TOP = 30;
const HALL_LEG_NOTE_Y = HALL_LEG_TOP + CLASSES.length * HALL_LEG_ROW_H + 14;
const HALL_LEGEND_H = HALL_LEG_NOTE_Y + 26;

/**
 * The key, with the count in each class beside its label, because the counts
 * are the finding and a reader should not have to add the marks up.
 */
function HallsLegend() {
  const counts: Record<StatusKey, number> = {
    built: HALL_FACTS.built,
    planned: HALL_FACTS.planned,
    unestablished: HALL_FACTS.unestablished,
  };
  return (
    <FigureCanvas id={`${ID}-halls-legend`} height={HALL_LEGEND_H}>
      <FigHeading y={14}>What the capital plans say, hall by hall</FigHeading>
      {CLASSES.map((klass, i) => {
        const top = HALL_LEG_TOP + i * HALL_LEG_ROW_H;
        return (
          <g key={klass.key}>
            <HallMark
              klass={klass}
              cx={13}
              cy={top + 6}
              scale={HALL_LEG_SCALE}
            />
            <FigText
              x={38}
              y={top + 11}
              size={FIG_TYPE.tick}
              fill={FIG_COLOR.muted}
            >
              {`${counts[klass.key]} of ${HALL_FACTS.inCity}. ${klass.label}`}
            </FigText>
          </g>
        );
      })}
      <FigText y={HALL_LEG_NOTE_Y} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
        {`A ${HALL_FACTS.outside + HALL_FACTS.inCity}th hall serves the University Endowment Lands.`}
      </FigText>
      <FigText
        y={HALL_LEG_NOTE_Y + 18}
        size={FIG_TYPE.tick}
        fill={FIG_COLOR.faint}
      >
        Our reading of City documents, not a City rating.
      </FigText>
    </FigureCanvas>
  );
}

/**
 * Where Vancouver's fire halls are, and what could be established about each.
 *
 * The finding is the third class, and the figure exists to make a gap
 * countable. Two readings it is drawn to prevent, in order of how easily a
 * reader falls into them. "Most of the halls are old and will fail" is an
 * argument the page is not making and no document supports. And "the City has
 * published nothing about thirteen halls" is a claim about the whole public
 * record, which this project did not search; what it searched is the capital
 * plans, and what it found there is six halls named. The class is the
 * difference between those two sets and says so.
 */
export function VancouverFireHalls() {
  return (
    <div className="flex flex-col">
      <MapPanel
        label="Vancouver's fire halls, marked by what could be established about the seismic standard each one is built to"
        heading="Vancouver's fire halls"
        value={`${HALL_FACTS.unestablished} of ${HALL_FACTS.inCity} need more information`}
        subnote="One is finished to a post-disaster standard. Five more are named in a plan"
        maxZoom={HALL_MAX_ZOOM}
      >
        <HallsBody />
      </MapPanel>
      <HallsLegend />
    </div>
  );
}
