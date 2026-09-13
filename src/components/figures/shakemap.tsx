import {
  FIG_COLOR,
  FIG_TYPE,
  FigHeading,
  FigText,
  FigureCanvas,
} from "./figure-kit";
import { LinkedMapPanes } from "./map-viewer";
import coastFile from "@/data/region-coast.json";
import cascadiaFile from "@/data/shakemap-cascadia-m9.json";
import georgiaFile from "@/data/shakemap-georgia-strait-m7.json";
import { dataSource } from "@/data/sources";

/**
 * The site's first real map: the two Geological Survey of Canada scenario
 * ShakeMaps, drawn from the vendored files in `src/data`.
 *
 * Read `README.md` beside this file first, and `map-viewer.tsx` next to it for
 * why a map is the one figure with a `viewBox` and the one figure a reader can
 * touch. The decisions that belong to this drawing rather than to maps in
 * general:
 *
 * - **The geometry is in map units, and the words are in HTML.** The window is
 *   about 160 km across and 78 km deep. Fitting that into a column and stopping
 *   is what made the first version of this figure unreadable: 220 cells across
 *   300 px put a cell at 1.4 px and a mark in the lowest class at half of one.
 *   The pane now takes the column's full width and carries a zoom, so the cells
 *   can be resolved; the headings and findings sit outside it as text, which is
 *   what keeps the type the same physical size at every width.
 * - **The two maps are stacked, and they move together.** Side by side they
 *   would be half as wide each and unreadable on a phone. Stacked, both are
 *   full width and both are drawn to one scale, and because the panes share a
 *   view, a position in one is the same position in the other at every
 *   magnification. That correspondence is the comparison the page is making.
 *
 * What the drawing is careful not to claim:
 *
 * - **It is not a raster.** The catalogue's ShakeMap is an irregular set of
 *   model sites, and what is vendored is those sites averaged into cells of
 *   about 730 m by 665 m. Each cell is drawn as a discrete mark with space
 *   around it rather than as a tile in a continuous surface, because a smooth
 *   surface would assert detail the model does not have. Zooming in shows the
 *   sampling more plainly, which is the honest direction for it to fail in.
 * - **It is not a severity judgement.** The marks carry no hue at all. The
 *   band ramp would have meant mapping the site's own low, medium and high
 *   onto a physical measure, and the catalogue publishes no such grouping.
 *   Intensity is the area of the mark, evidence is its ink, and both are
 *   written out in the legend.
 * - **It is not two measures pretending to be one.** The catalogue publishes a
 *   converted Modified Mercalli file for the Georgia Strait scenario and not
 *   for Cascadia. Deriving the missing one needs a cited conversion equation
 *   and none has been chosen, so both maps are drawn on peak ground
 *   acceleration, which is the measure both actually publish, and each map
 *   says on its face what the catalogue does and does not give for it.
 */

/* ------------------------------------------------------------------ */
/* The data                                                            */
/* ------------------------------------------------------------------ */

interface ShakeMapFile {
  label: string;
  /** Cell indices from the south-west corner of the window. */
  x: number[];
  y: number[];
  /** How many model sites the cell holds. */
  n: number[];
  /** The mean peak ground acceleration of those sites, in g. */
  pga: number[];
  grid: { west: number; south: number; cellLon: number; cellLat: number };
  caveats: { resolution: string; scope: string };
}

const GEORGIA: ShakeMapFile = georgiaFile;
const CASCADIA: ShakeMapFile = cascadiaFile;

/** The catalogue's own record, so the attribution is never retyped. */
export const SHAKEMAP_SOURCE = dataSource("gsc-earthquake-scenario-catalogue");

/**
 * The shoreline under the marks is a second dataset under a second licence, and
 * an attribution has to travel with the graphic it produced. The page carries
 * both.
 */
export const SHAKEMAP_BASE_SOURCE = dataSource("bc-fwa-coastlines");

/**
 * The two caveats the catalogue embeds in every file, carried out of the data
 * rather than transcribed, so they cannot drift from what was vendored. They
 * belong beside the map: the second one governs how every mark should be read.
 */
export const SHAKEMAP_CAVEATS = GEORGIA.caveats;

function maxOf(values: number[]): number {
  return values.reduce((a, b) => (b > a ? b : a), values[0]);
}

/**
 * Per cent of gravity, which is how the copy on the page states this measure,
 * at the one decimal place the file's three decimals in g actually carry. A
 * value is never rounded to a whole number here: 0.575 g is 57.5 per cent, and
 * writing 58 would round the catalogue's figure up for no reason.
 */
function percentG(pga: number): string {
  return (Math.round(pga * 1000) / 10).toFixed(1);
}

/** Thousands separators, without asking the runtime what locale it is in. */
function grouped(value: number): string {
  return value >= 1000
    ? `${Math.floor(value / 1000)},${String(value % 1000).padStart(3, "0")}`
    : String(value);
}

/** Facts about the grid the caption states in words. Counted, never estimated. */
export const SHAKEMAP_FACTS = {
  cells: grouped(GEORGIA.x.length),
  sites: grouped(GEORGIA.n.reduce((a, b) => a + b, 0)),
  singleSiteCells: grouped(GEORGIA.n.filter((n) => n === 1).length),
  georgiaPeak: percentG(maxOf(GEORGIA.pga)),
  cascadiaPeak: percentG(maxOf(CASCADIA.pga)),
} as const;

/* ------------------------------------------------------------------ */
/* Geometry                                                            */
/* ------------------------------------------------------------------ */

const ID = "scenario-shakemaps";

/** The window, in cells. Read off the grid rather than written down twice. */
const COLS = GEORGIA.x.reduce((a, b) => (b > a ? b : a), 0) + 1;
const ROWS = GEORGIA.y.reduce((a, b) => (b > a ? b : a), 0) + 1;

/**
 * Ground size of one cell, in kilometres, at the latitude of the window. The
 * catalogue's grid is in degrees; the map has to be in ground distance, or the
 * shape of the region is wrong.
 */
const KM_PER_DEGREE = 111.32;
const WINDOW_LATITUDE = 49.3;
const CELL_KM_X =
  GEORGIA.grid.cellLon *
  KM_PER_DEGREE *
  Math.cos((WINDOW_LATITUDE * Math.PI) / 180);
const CELL_KM_Y = GEORGIA.grid.cellLat * KM_PER_DEGREE;

/**
 * Lattice units per cell. Every coordinate in the path data is an integer
 * number of these, which is what keeps two maps of 3,910 cells each down to a
 * size worth shipping; the one fractional scale is applied on the group.
 */
const U = 12;

/**
 * The map's own coordinate space, which the pane's `viewBox` reads. It is in
 * lattice units across and in lattice units corrected for ground aspect down,
 * because a cell is 726 m wide and 668 m deep and drawing it square would make
 * the region the wrong shape.
 */
const ASPECT_Y = round(CELL_KM_Y / CELL_KM_X);
const MAP_W = COLS * U;
const MAP_H = round(ROWS * U * ASPECT_Y);

/** How much ground the map's full width covers. The pane's scale bar wants it. */
const KM_WIDE = COLS * CELL_KM_X;

function round(value: number): number {
  return Math.round(value * 100000) / 100000;
}

/* ------------------------------------------------------------------ */
/* The encoding                                                        */
/* ------------------------------------------------------------------ */

/**
 * Class edges in g, and the label each class carries in the legend.
 *
 * The steps widen as the measure rises, because ground motion does. Equal
 * steps would have put almost every Cascadia cell in one class and thrown away
 * the structure the file does have. These are the drawing's classes, not the
 * catalogue's: it publishes a value per cell and no grouping at all, which is
 * why the legend names each class in the measure's own units rather than
 * calling any of them low, moderate or severe.
 */
const CLASSES = [
  { below: 0.05, label: "Under 5", size: 5 },
  { below: 0.1, label: "5 to 10", size: 7 },
  { below: 0.2, label: "10 to 20", size: 9 },
  { below: 0.4, label: "20 to 40", size: 11 },
  { below: Infinity, label: "40 and over", size: 12 },
] as const;

/**
 * Two channels, neither of them hue.
 *
 * **Area** carries the measure: a cell in the top class fills its whole cell
 * and its neighbours touch, a cell in the bottom class is a mark with space
 * around it. The ordinal survives in greyscale, in print and for a
 * colour-blind reader, which is the site's rule, and the space between marks
 * is also the honest statement that these are sampled sites rather than a
 * continuous surface.
 *
 * **Ink** carries the evidence: a cell holding one model site is drawn muted
 * and a cell holding two or more is drawn in full ink. Nearly two cells in
 * three rest on a single site, so a map that hid this would be claiming an
 * even weight of evidence it does not have.
 */
function classOf(pga: number): number {
  let index = 0;
  while (index < CLASSES.length - 1 && pga >= CLASSES[index].below) index += 1;
  return index;
}

interface Layer {
  key: string;
  size: number;
  thin: boolean;
  d: string;
}

/**
 * One `<path>` per class and evidence level, ten in all for a map.
 *
 * Each cell is a subpath written relative to the last, which is what keeps
 * 3,910 cells to a size worth shipping: no absolute coordinate is ever
 * written out. `y` counts north from the south-west corner of the window and
 * SVG counts down, so it is flipped here.
 *
 * A mark is three sides and a `z`, not two. An earlier version wrote `h v z`,
 * which closes a right triangle rather than a square, and at the 1.4 px cell
 * that version drew at, nobody could see that half the area was missing. Area
 * is this drawing's whole measure, so the fourth corner is not optional.
 */
function layersOf(map: ShakeMapFile): Layer[] {
  const buckets = new Map<string, number[]>();
  for (let i = 0; i < map.x.length; i += 1) {
    const key = `${classOf(map.pga[i])}-${map.n[i] > 1 ? "n" : "1"}`;
    const bucket = buckets.get(key);
    if (bucket) bucket.push(i);
    else buckets.set(key, [i]);
  }

  const layers: Layer[] = [];
  for (const [key, indices] of buckets) {
    const size = CLASSES[Number(key.split("-")[0])].size;
    indices.sort((a, b) => map.y[b] - map.y[a] || map.x[a] - map.x[b]);
    let cursorX = 0;
    let cursorY = 0;
    let d = "";
    for (const i of indices) {
      const x = map.x[i] * U;
      const y = (ROWS - 1 - map.y[i]) * U;
      const dx = x - cursorX;
      const dy = y - cursorY;
      d += `m${dx}${dy < 0 ? "" : " "}${dy}h${size}v${size}h-${size}z`;
      cursorX = x;
      cursorY = y;
    }
    layers.push({ key, size, thin: key.endsWith("-1"), d });
  }
  return layers;
}

const GEORGIA_LAYERS = layersOf(GEORGIA);
const CASCADIA_LAYERS = layersOf(CASCADIA);

/** Marks are centred in their cell, which the group carries so the path need not. */
function markInset(size: number): string {
  const inset = (U - size) / 2;
  return `translate(${inset},${inset})`;
}

/* ------------------------------------------------------------------ */
/* The ground the marks sit on                                         */
/* ------------------------------------------------------------------ */

/**
 * Shoreline and river water, under the cells.
 *
 * Without it the marks float in white paper and a reader has nothing to locate
 * the dark patch against, which is the one thing a map is for. It is the
 * Freshwater Atlas, vendored for this window at 150 m, which is well under a
 * pixel at the width these are drawn.
 *
 * It is load-bearing by the style guide's own test: cover it and the drawing
 * stops saying where anything is. So it is `water`, which is held to the same
 * 3:1 as `mark` and is the one colour on this site that names a thing rather
 * than scoring it; the furniture grey would not do, and the mark grey left a
 * reader working out which side of the line the land was on. The stroke is
 * `non-scaling-stroke` so a coastline stays a hairline at sixteen times rather
 * than swelling into a band.
 *
 * **The layer is British Columbia's, so it stops at the international
 * boundary.** Fifteen of 3,910 cells sit in the strip below it, and they are
 * drawn without a shoreline rather than against a line the province's data
 * does not have.
 */
interface CoastFile {
  coast: number[][][];
  river: number[][][];
}

const COAST: CoastFile = coastFile;

/** Longitude and latitude into the grid's own lattice units. */
function toLattice(lon: number, lat: number): [number, number] {
  const x = ((lon - GEORGIA.grid.west) / GEORGIA.grid.cellLon) * U;
  const y = (ROWS - (lat - GEORGIA.grid.south) / GEORGIA.grid.cellLat) * U;
  return [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
}

function linesToPath(lines: number[][][]): string {
  let d = "";
  for (const line of lines) {
    let first = true;
    for (const [lon, lat] of line) {
      const [x, y] = toLattice(lon, lat);
      d += `${first ? "M" : "L"}${x} ${y}`;
      first = false;
    }
  }
  return d;
}

const COAST_PATH = linesToPath(COAST.coast);
const RIVER_PATH = linesToPath(COAST.river);

const COAST_ID = `${ID}-coast`;
const RIVER_ID = `${ID}-river`;

/**
 * The water, written into the page once.
 *
 * Both maps draw the same shoreline, and the two copies sit about 85 kB apart
 * in the markup, which is well outside the 32 kB window a gzip stream looks
 * back through. The duplicate therefore compressed to nothing like nothing: it
 * cost 18 kB over the wire, or an eighth of the page. Defined once here and
 * referenced twice, it costs one copy.
 *
 * This is the ordinary inline-sprite pattern — a hidden `svg` holding `defs`,
 * referenced by `use` elsewhere in the same document — and stroke and colour
 * are set at the `use`, not here, so each map still styles its own ground.
 */
function GeographyDefs() {
  return (
    <svg
      width="0"
      height="0"
      aria-hidden="true"
      focusable="false"
      className="absolute overflow-hidden"
    >
      <defs>
        <path id={COAST_ID} d={COAST_PATH} />
        <path id={RIVER_ID} d={RIVER_PATH} />
      </defs>
    </svg>
  );
}

/**
 * The shoreline is drawn at 150 m, which is about a fifth of a cell. Cutting it
 * finer would draw a coast more precise than the 730 m grid it sits under,
 * which is false precision even at the deepest zoom.
 */
function Geography() {
  return (
    <g
      fill="none"
      stroke={FIG_COLOR.water}
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      {/* `vector-effect` does not inherit, so it goes on each reference. */}
      <use
        href={`#${COAST_ID}`}
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      <use
        href={`#${RIVER_ID}`}
        strokeWidth="0.75"
        vectorEffect="non-scaling-stroke"
      />
    </g>
  );
}

/**
 * The grid of one scenario over the region's water, in the map's own
 * coordinate space.
 *
 * The ground-aspect correction is applied once here, on the outer group, so
 * every path underneath stays in lattice units. There is no frame: the pane
 * draws its own border, and a frame inside the zoom would slide off the edge
 * the moment a reader moved.
 */
function MapBody({ layers }: { layers: Layer[] }) {
  return (
    <g transform={`scale(1,${ASPECT_Y})`}>
      <Geography />
      {layers.map((layer) => (
        <g key={layer.key} transform={markInset(layer.size)}>
          <path
            d={layer.d}
            fill={layer.thin ? FIG_COLOR.muted : FIG_COLOR.ink}
          />
        </g>
      ))}
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* The legend                                                          */
/* ------------------------------------------------------------------ */

/**
 * A patch of the grid, drawn at a legible cell size rather than at the map's.
 *
 * The map's cell size is now whatever the reader has zoomed to, so a swatch
 * cannot be "the map at its real scale" and stay true. What it can be, and is,
 * is the *proportions* of the encoding: the five marks stand in the same ratio
 * to their cell as they do in the drawing, which is the whole of what the area
 * channel says. The absolute size is set for reading.
 */
const SWATCH_CELL = 8;
const SWATCH_COLS = 5;
const SWATCH_ROWS = 2;
const SWATCH_W = SWATCH_COLS * SWATCH_CELL;
const SWATCH_H = SWATCH_ROWS * SWATCH_CELL;

function swatchPath(size: number): string {
  let d = "";
  for (let row = 0; row < SWATCH_ROWS; row += 1) {
    for (let col = 0; col < SWATCH_COLS; col += 1) {
      const dx = col === 0 ? (row === 0 ? 0 : -(SWATCH_COLS - 1) * U) : U;
      const dy = col === 0 && row > 0 ? U : 0;
      d += `m${dx}${dy < 0 ? "" : " "}${dy}h${size}v${size}h-${size}z`;
    }
  }
  return d;
}

function Swatch({
  y,
  size,
  thin = false,
}: {
  y: number;
  size: number;
  thin?: boolean;
}) {
  return (
    <g
      transform={`translate(0,${y}) scale(${round(SWATCH_CELL / U)}) ${markInset(size)}`}
    >
      <path
        d={swatchPath(size)}
        fill={thin ? FIG_COLOR.muted : FIG_COLOR.ink}
      />
    </g>
  );
}

const LEG_HEADING_Y = 14;
const LEG_SUB_Y = 31;
const LEG_ROW_TOP = 42;
const LEG_ROW_H = SWATCH_H + 6;
const LEG_LABEL_X = SWATCH_W + 12;
const LEG_LABEL_BASELINE = SWATCH_H / 2 + 4;

const LEG_EVIDENCE_Y = LEG_ROW_TOP + CLASSES.length * LEG_ROW_H + 20;
const LEG_EVIDENCE_TOP = LEG_EVIDENCE_Y + 10;
const LEG_GUARD_Y = LEG_EVIDENCE_TOP + 2 * LEG_ROW_H + 20;
const LEG_GUARD_2_Y = LEG_GUARD_Y + 18;
const LEGEND_H = LEG_GUARD_2_Y + 10;

/** The key to both maps. One legend, because both are on one scale. */
function Legend() {
  return (
    <FigureCanvas id={ID} height={LEGEND_H}>
      <FigHeading y={LEG_HEADING_Y}>Peak ground acceleration</FigHeading>
      <FigText y={LEG_SUB_Y} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
        Per cent of gravity. Both maps on one scale.
      </FigText>

      {CLASSES.map((band, i) => {
        const top = LEG_ROW_TOP + i * LEG_ROW_H;
        return (
          <g key={band.label}>
            <Swatch y={top} size={band.size} />
            <FigText
              x={LEG_LABEL_X}
              y={top + LEG_LABEL_BASELINE}
              size={FIG_TYPE.tick}
              fill={FIG_COLOR.muted}
            >
              {band.label}
            </FigText>
          </g>
        );
      })}

      <FigHeading y={LEG_EVIDENCE_Y}>What stands behind a cell</FigHeading>
      <Swatch y={LEG_EVIDENCE_TOP} size={9} />
      <FigText
        x={LEG_LABEL_X}
        y={LEG_EVIDENCE_TOP + LEG_LABEL_BASELINE}
        size={FIG_TYPE.tick}
        fill={FIG_COLOR.muted}
      >
        Two or more model sites
      </FigText>
      <Swatch y={LEG_EVIDENCE_TOP + LEG_ROW_H} size={9} thin />
      <FigText
        x={LEG_LABEL_X}
        y={LEG_EVIDENCE_TOP + LEG_ROW_H + LEG_LABEL_BASELINE}
        size={FIG_TYPE.tick}
        fill={FIG_COLOR.muted}
      >
        One model site, in most cells
      </FigText>

      <FigText y={LEG_GUARD_Y} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
        One mark is a cell of about 730 m by 665 m.
      </FigText>
      <FigText y={LEG_GUARD_2_Y} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
        Shaking damage to buildings only.
      </FigText>
    </FigureCanvas>
  );
}

/* ------------------------------------------------------------------ */
/* The figure                                                          */
/* ------------------------------------------------------------------ */

/**
 * The two scenario ShakeMaps, one above the other, on one scale and on one
 * view.
 *
 * The finding is the contrast, and it is written out as well as drawn: the
 * strongest cell in the crustal map is about four times the strongest cell in
 * the Cascadia map. The guard the figure has to carry is that this is peak
 * acceleration and nothing else. The Cascadia scenario shakes this region less
 * hard and for very much longer, over a far wider area, and the page says so
 * on both sides of the drawing.
 */
export function ScenarioShakeMaps() {
  return (
    <div className="flex flex-col">
      <GeographyDefs />
      <div className="px-4 pt-5 sm:px-6">
        <LinkedMapPanes
          width={MAP_W}
          height={MAP_H}
          kmWide={KM_WIDE}
          panes={[
            {
              key: "georgia",
              label:
                "Modelled peak ground acceleration across the Lower Mainland in the Georgia Strait magnitude 7.0 scenario",
              heading: "Georgia Strait magnitude 7.0",
              value: `${SHAKEMAP_FACTS.georgiaPeak} per cent of gravity`,
              subnote: "The strongest cell in the map",
              note: "The catalogue also gives Mercalli intensity",
              geometry: <MapBody layers={GEORGIA_LAYERS} />,
            },
            {
              key: "cascadia",
              label:
                "Modelled peak ground acceleration across the Lower Mainland in the Cascadia magnitude 9.0 scenario",
              heading: "Cascadia magnitude 9.0",
              value: `${SHAKEMAP_FACTS.cascadiaPeak} per cent of gravity`,
              subnote: "The strongest cell in the map",
              note: "No Mercalli intensity published for this one",
              geometry: <MapBody layers={CASCADIA_LAYERS} />,
            },
          ]}
        />
      </div>
      <Legend />
    </div>
  );
}
