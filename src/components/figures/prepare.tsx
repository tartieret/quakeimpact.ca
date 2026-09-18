import {
  FIG_COLOR,
  FIG_TYPE,
  FigHeading,
  FigText,
  FigValue,
  FigureCanvas,
  TickGrid,
  tickGridHeight,
} from "./figure-kit";

/**
 * The figure on `/prepare/`.
 *
 * Every other page on this site describes a consequence and then points here,
 * so this is the page where efficacy has to survive. A figure here earns its
 * place by making an action look possible. It does not dramatise, it does not
 * count down, and it adds no number the copy does not already give: every
 * value below is in `docs/copy/prepare.md`.
 *
 * The caption, the alt text and the citation marker live beside the prose in
 * `src/content/pages/prepare.tsx`. What is here is the drawing and the short
 * labels the geometry cannot do without, which are copy too and obey the style
 * guide like any other words a reader sees.
 */

/* ------------------------------------------------------------------ */
/* The household water arithmetic                                      */
/* ------------------------------------------------------------------ */

const WATER_ID = "prepare-water";

/**
 * One mark is four litres, which is the province's published rate for one
 * person for one day. The unit is a rate a document prints rather than a
 * container size nobody publishes, so the grid stays inside its evidence and
 * a reader can still picture it: one day, one person, one jug.
 */
const WATER_COLUMNS = 14;
const TWO_WEEK_MARKS = 56;

const WATER_HEADING_Y = 14;
const WATER_VALUE_Y = 41;
const WATER_GRID_Y = 56;

const TWO_WEEK_GRID_H = tickGridHeight({
  count: TWO_WEEK_MARKS,
  columns: WATER_COLUMNS,
});

const WATER_KEY_Y = WATER_GRID_Y + TWO_WEEK_GRID_H + 18;
const WATER_FLOOR_Y = WATER_KEY_Y + 20;
const WATER_GUARD_Y = WATER_FLOOR_Y + 20;
const WATER_HEIGHT = WATER_GUARD_Y + 12;

/**
 * The household water total, in units of the rate it is worked from.
 *
 * The number is arithmetic: four litres per person per day, times fourteen,
 * for a household of four. Neither the province nor the City prints the total,
 * and the copy says so in the same breath as it gives it, so the guard travels
 * with the drawing too rather than only in the caption. Drawing it as
 * fifty-six countable marks is the point of the figure: 224 litres is the most
 * actionable number on this site and a bar makes it abstract.
 */
export function PrepareWaterArithmetic() {
  return (
    <FigureCanvas id={WATER_ID} height={WATER_HEIGHT}>
      <FigHeading y={WATER_HEADING_Y}>
        Two weeks for a household of four
      </FigHeading>
      <FigValue y={WATER_VALUE_Y}>At least 224 litres</FigValue>
      <TickGrid
        count={TWO_WEEK_MARKS}
        columns={WATER_COLUMNS}
        y={WATER_GRID_Y}
      />
      <FigText y={WATER_KEY_Y} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
        One mark is four litres: one person for one day.
      </FigText>
      <FigText y={WATER_FLOOR_Y} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
        For drinking and sanitation together.
      </FigText>
      <FigText y={WATER_GUARD_Y} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
        Four people × fourteen days.
      </FigText>
    </FigureCanvas>
  );
}
