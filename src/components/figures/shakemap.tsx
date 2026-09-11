import {
  At,
  FIG_COLOR,
  FIG_TYPE,
  FigHeading,
  FigRule,
  FigText,
  FigValue,
  FigureCanvas,
} from "./figure-kit";
import cascadiaFile from "@/data/shakemap-cascadia-m9.json";
import georgiaFile from "@/data/shakemap-georgia-strait-m7.json";
import { dataSource } from "@/data/sources";

/**
 * The site's first real map: the two Geological Survey of Canada scenario
 * ShakeMaps, drawn from the vendored files in `src/data`.
 *
 * Read `README.md` beside this file first. Everything here follows it, and the
 * two places it bends are both forced by the fact that this is a map:
 *
 * - **The drawing is in pixels, not percentages.** A map's proportions are a
 *   measurement. Stretching one horizontally into whatever column it is given
 *   would misstate distances, so the whole grid sits inside a single `At`
 *   anchored at the middle of the canvas, the same escape hatch the crustal
 *   fault cross-section uses for the same reason. The map is therefore the
 *   same physical size at 390 px and at 672 px, which is also what keeps it
 *   legible on a phone.
 * - **The two maps are stacked, not side by side.** The modelled window is
 *   about 160 km across and 70 km deep, so a pair set side by side would be
 *   half as wide each and unreadable on a phone. Stacked, both are full width,
 *   both are drawn to one scale, and a given position is the same position in
 *   both, which is the comparison the page is making.
 *
 * What the drawing is careful not to claim:
 *
 * - **It is not a raster.** The catalogue's ShakeMap is an irregular set of
 *   model sites, and what is vendored is those sites averaged into cells of
 *   about 730 m by 665 m. Each cell is drawn as a discrete mark with space
 *   around it rather than as a tile in a continuous surface, because a smooth
 *   surface would assert detail the model does not have.
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
  grid: { cellLon: number; cellLat: number };
  caveats: { resolution: string; scope: string };
}

const GEORGIA: ShakeMapFile = georgiaFile;
const CASCADIA: ShakeMapFile = cascadiaFile;

/** The catalogue's own record, so the attribution is never retyped. */
export const SHAKEMAP_SOURCE = dataSource("gsc-earthquake-scenario-catalogue");

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
  GEORGIA.grid.cellLon * KM_PER_DEGREE * Math.cos((WINDOW_LATITUDE * Math.PI) / 180);
const CELL_KM_Y = GEORGIA.grid.cellLat * KM_PER_DEGREE;

/**
 * The map is 300 px wide at every viewport, and drawn from the left edge of the
 * canvas so that it lines up with the legend below it rather than floating in
 * the middle of a wide column.
 *
 * The width is fixed because a map's proportions are a measurement. The drawing
 * area on a 390 px phone is about 300 px, and a map that grew on a laptop would
 * either stretch, which is a lie about distance, or reflow its type, which the
 * figure convention exists to prevent.
 */
const MAP_W = 300;
const CELL_W = MAP_W / COLS;
const CELL_H = CELL_W * (CELL_KM_Y / CELL_KM_X);
const MAP_H = ROWS * CELL_H;
const PX_PER_KM = CELL_W / CELL_KM_X;

/**
 * Lattice units per cell. Every coordinate in the path data is an integer
 * number of these, which is what keeps two maps of 3,910 cells each down to a
 * size worth shipping; the fractional scale is applied once, on the group.
 */
const U = 12;
const SX = round(CELL_W / U);
const SY = round(CELL_H / U);

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
 * Each cell is a subpath written relative to the last, and closed with `z`
 * rather than with a fourth explicit side, which is what makes 3,910 cells
 * about 40 kB of markup instead of three times that. `y` counts north from the
 * south-west corner of the window and SVG counts down, so it is flipped here.
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
      d += `m${dx}${dy < 0 ? "" : " "}${dy}h${size}v${size}z`;
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
function markTransform(size: number): string {
  const inset = (U - size) / 2;
  return `scale(${SX},${SY}) translate(${inset},${inset})`;
}

/** The grid of one scenario, drawn in pixels from the top left of the window. */
function MapBody({ layers }: { layers: Layer[] }) {
  return (
    <g>
      <rect
        x="0"
        y="0"
        width={MAP_W}
        height={round(MAP_H)}
        fill="none"
        stroke={FIG_COLOR.track}
        strokeWidth="1"
      />
      {layers.map((layer) => (
        <g key={layer.key} transform={markTransform(layer.size)}>
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
/* Layout                                                              */
/* ------------------------------------------------------------------ */

const PANEL_HEADING_Y = 14;
const PANEL_VALUE_Y = 41;
const PANEL_SUBNOTE_Y = 58;
const PANEL_MAP_Y = 70;
const PANEL_NOTE_Y = PANEL_MAP_Y + MAP_H + 18;
const PANEL_H = PANEL_NOTE_Y + 10;

const RULE_Y = PANEL_H + 12;
const PANEL_B_Y = RULE_Y + 24;

const LEGEND_Y = PANEL_B_Y + PANEL_H + 22;

/** Legend rows, laid out from `LEGEND_Y`. */
const LEG_HEADING_Y = 14;
const LEG_SUB_Y = 31;
const LEG_ROW_TOP = 40;
const LEG_ROW_H = 17;
const LEG_LABEL_X = 26;

const LEG_EVIDENCE_Y = LEG_ROW_TOP + CLASSES.length * LEG_ROW_H + 20;
const LEG_EVIDENCE_TOP = LEG_EVIDENCE_Y + 8;
const LEG_SCALE_Y = LEG_EVIDENCE_TOP + 2 * LEG_ROW_H + 22;
const LEG_SCALE_LABEL_Y = LEG_SCALE_Y + 16;
const LEG_GUARD_Y = LEG_SCALE_LABEL_Y + 24;
const LEG_GUARD_2_Y = LEG_GUARD_Y + 18;

const HEIGHT = LEGEND_Y + LEG_GUARD_2_Y + 10;

/** A patch of the real grid, at the real scale, so the legend is the map. */
const SWATCH_COLS = 10;
const SWATCH_ROWS = 7;

function swatchPath(size: number): string {
  let d = "";
  for (let row = 0; row < SWATCH_ROWS; row += 1) {
    for (let col = 0; col < SWATCH_COLS; col += 1) {
      const dx = col === 0 ? (row === 0 ? 0 : -(SWATCH_COLS - 1) * U) : U;
      const dy = col === 0 && row > 0 ? U : 0;
      d += `m${dx}${dy < 0 ? "" : " "}${dy}h${size}v${size}z`;
    }
  }
  return d;
}

function Swatch({
  x,
  y,
  size,
  thin = false,
}: {
  x: number;
  y: number;
  size: number;
  thin?: boolean;
}) {
  return (
    <g transform={`translate(${x},${y})`}>
      <g transform={markTransform(size)}>
        <path
          d={swatchPath(size)}
          fill={thin ? FIG_COLOR.muted : FIG_COLOR.ink}
        />
      </g>
    </g>
  );
}

/** The scale bar's length, from the cell size the grid itself states. */
const SCALE_KM = 50;
const SCALE_PX = round(SCALE_KM * PX_PER_KM);

/* ------------------------------------------------------------------ */
/* The figure                                                          */
/* ------------------------------------------------------------------ */

function Panel({
  top,
  heading,
  value,
  subnote,
  note,
  layers,
}: {
  top: number;
  heading: string;
  value: string;
  subnote: string;
  note: string;
  layers: Layer[];
}) {
  return (
    <g>
      <FigHeading y={top + PANEL_HEADING_Y}>{heading}</FigHeading>
      <FigValue y={top + PANEL_VALUE_Y}>{value}</FigValue>
      <FigText
        y={top + PANEL_SUBNOTE_Y}
        size={FIG_TYPE.tick}
        fill={FIG_COLOR.faint}
      >
        {subnote}
      </FigText>
      <At x="0" y={top + PANEL_MAP_Y}>
        <MapBody layers={layers} />
      </At>
      <FigText y={top + PANEL_NOTE_Y} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
        {note}
      </FigText>
    </g>
  );
}

/**
 * The two scenario ShakeMaps, one above the other, on one scale.
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
    <FigureCanvas id={ID} height={Math.round(HEIGHT)}>
      <Panel
        top={0}
        heading="Georgia Strait magnitude 7.0"
        value={`${SHAKEMAP_FACTS.georgiaPeak} per cent of gravity`}
        subnote="The strongest cell in the map"
        note="The catalogue also gives Mercalli intensity"
        layers={GEORGIA_LAYERS}
      />

      <FigRule y={RULE_Y} />

      <Panel
        top={PANEL_B_Y}
        heading="Cascadia magnitude 9.0"
        value={`${SHAKEMAP_FACTS.cascadiaPeak} per cent of gravity`}
        subnote="The strongest cell in the map"
        note="No Mercalli intensity published for this one"
        layers={CASCADIA_LAYERS}
      />

      <g transform={`translate(0,${LEGEND_Y})`}>
        <FigHeading y={LEG_HEADING_Y}>Peak ground acceleration</FigHeading>
        <FigText y={LEG_SUB_Y} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
          Per cent of gravity. Both maps on one scale.
        </FigText>

        {CLASSES.map((band, i) => {
          const top = LEG_ROW_TOP + i * LEG_ROW_H;
          return (
            <g key={band.label}>
              <Swatch x={0} y={top} size={band.size} />
              <FigText
                x={LEG_LABEL_X}
                y={top + 10}
                size={FIG_TYPE.tick}
                fill={FIG_COLOR.muted}
              >
                {band.label}
              </FigText>
            </g>
          );
        })}

        <FigHeading y={LEG_EVIDENCE_Y}>What stands behind a cell</FigHeading>
        <Swatch x={0} y={LEG_EVIDENCE_TOP} size={9} />
        <FigText
          x={LEG_LABEL_X}
          y={LEG_EVIDENCE_TOP + 10}
          size={FIG_TYPE.tick}
          fill={FIG_COLOR.muted}
        >
          Two or more model sites
        </FigText>
        <Swatch x={0} y={LEG_EVIDENCE_TOP + LEG_ROW_H} size={9} thin />
        <FigText
          x={LEG_LABEL_X}
          y={LEG_EVIDENCE_TOP + LEG_ROW_H + 10}
          size={FIG_TYPE.tick}
          fill={FIG_COLOR.muted}
        >
          One model site, in most cells
        </FigText>

        <rect
          x="0"
          y={LEG_SCALE_Y}
          width={SCALE_PX}
          height="1"
          fill={FIG_COLOR.mark}
        />
        <rect x="0" y={LEG_SCALE_Y - 3} width="1" height="7" fill={FIG_COLOR.mark} />
        <rect
          x={SCALE_PX - 1}
          y={LEG_SCALE_Y - 3}
          width="1"
          height="7"
          fill={FIG_COLOR.mark}
        />
        <FigText y={LEG_SCALE_LABEL_Y} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
          {SCALE_KM} km. North is up.
        </FigText>

        <FigText y={LEG_GUARD_Y} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
          One mark is a cell of about 730 m by 665 m.
        </FigText>
        <FigText y={LEG_GUARD_2_Y} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
          Shaking damage to buildings only.
        </FigText>
      </g>
    </FigureCanvas>
  );
}
