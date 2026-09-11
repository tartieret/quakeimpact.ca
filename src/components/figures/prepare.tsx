import {
  At,
  Axis,
  Bar,
  FIG_COLOR,
  FIG_TYPE,
  FigHeading,
  FigRule,
  FigText,
  FigValue,
  FigureCanvas,
  TickGrid,
  TrackBase,
  hatchId,
  pct,
  tickGridHeight,
} from "./figure-kit";

/**
 * The figures on `/prepare/`.
 *
 * Every other page on this site describes a consequence and then points here,
 * so this is the page where efficacy has to survive. A figure here earns its
 * place by making an action look possible. None of them dramatises, none
 * counts down, and none of them adds a number the copy does not already give:
 * every value below is in `docs/copy/prepare.md`.
 *
 * The captions, the alt text and the citation markers live beside the prose in
 * `src/content/pages/prepare.tsx`. What is here is the drawing and the short
 * labels the geometry cannot do without, which are copy too and obey the style
 * guide like any other words a reader sees.
 */

/* ------------------------------------------------------------------ */
/* How many days, by document                                          */
/* ------------------------------------------------------------------ */

const DAYS_ID = "prepare-days";

/**
 * Fourteen days, because two weeks is the largest figure any of the six
 * documents states. Nothing is drawn past it on a scale: a document that is
 * open above its number gets an arrowhead at the edge, which is the site's
 * mark for an end nobody has published, rather than a longer bar.
 */
const DAYS_DOMAIN = 14;

/**
 * One row per document, in the order the copy's table gives them.
 *
 * `solid` is the number the document states. `range` is the further span the
 * same document names, drawn hatched because it is a range rather than a
 * figure. `open` is a document whose upper end is left open, and `kind` is the
 * distinction the whole figure exists to preserve: the same fourteen days is a
 * floor in one document and a ceiling in another.
 */
const DAY_ROWS: {
  label: string;
  solid: number;
  range?: number;
  open: boolean;
  kind: "Floor" | "Ceiling";
}[] = [
  {
    label: "PreparedBC earthquake guide, 2024",
    solid: 14,
    open: true,
    kind: "Floor",
  },
  {
    label: "PreparedBC emergency kit page",
    solid: 3,
    range: 7,
    open: false,
    kind: "Floor",
  },
  {
    label: "PreparedBC earthquake hazard page",
    solid: 3,
    range: 14,
    open: false,
    kind: "Floor",
  },
  {
    label: "Provincial All-Hazard Plan, 2012",
    solid: 3,
    range: 14,
    open: true,
    kind: "Floor",
  },
  {
    label: "Provincial earthquake response plan",
    solid: 14,
    open: false,
    kind: "Ceiling",
  },
  {
    label: "City of Vancouver",
    solid: 3,
    range: 14,
    open: false,
    kind: "Floor",
  },
];

const DAYS_HEADING_Y = 14;
const DAYS_VALUE_Y = 41;
const DAYS_ROW_TOP = 72;
const DAYS_ROW_H = 42;
const DAYS_BAR_OFFSET = 8;
const DAYS_BAR_H = 14;

const DAYS_LAST_LABEL_Y = DAYS_ROW_TOP + (DAY_ROWS.length - 1) * DAYS_ROW_H;
const DAYS_BARS_TOP = DAYS_ROW_TOP + DAYS_BAR_OFFSET;
const DAYS_BARS_BOTTOM = DAYS_LAST_LABEL_Y + DAYS_BAR_OFFSET + DAYS_BAR_H;

const DAYS_AXIS_Y = DAYS_BARS_BOTTOM + 6;
const DAYS_AXIS_LABEL_Y = DAYS_AXIS_Y + 18;
const DAYS_NOTE_Y = DAYS_AXIS_LABEL_Y + 22;
const DAYS_KEY_Y = DAYS_NOTE_Y + 20;
const DAYS_HEIGHT = DAYS_KEY_Y + 12;

/** The end of a bar a document closes: a short upright, so the end is a stop. */
function DayStop({ value, y }: { value: number; y: number }) {
  return (
    <rect
      x={pct(value, DAYS_DOMAIN)}
      y={y - 4}
      width="1"
      height={DAYS_BAR_H + 8}
      fill={FIG_COLOR.ruleStrong}
      transform={
        value === DAYS_DOMAIN ? "translate(-1,0)" : "translate(-0.5,0)"
      }
    />
  );
}

/**
 * Six documents, six answers, and no seventh answer offered.
 *
 * The figure is deliberately built so that it cannot be read as resolving to a
 * recommended number. There is no summary bar, no average and no highlighted
 * row: the finding written at the top is a spread, and the reader is left with
 * the spread. The distinction the copy is careful about survives in the
 * geometry as well as in the words, because a bar that ends in a point is open
 * above its number and a bar that ends against an upright is closed at it.
 */
export function PrepareDaysByDocument() {
  const hatch = `url(#${hatchId(DAYS_ID)})`;

  return (
    <FigureCanvas id={DAYS_ID} height={DAYS_HEIGHT}>
      <FigHeading y={DAYS_HEADING_Y}>
        Six published answers, all current
      </FigHeading>
      <FigValue y={DAYS_VALUE_Y}>Three days to two weeks</FigValue>

      {/* Gridlines only at values the documents themselves state. */}
      {[3, 7].map((value) => (
        <rect
          key={value}
          x={pct(value, DAYS_DOMAIN)}
          y={DAYS_BARS_TOP}
          width="1"
          height={DAYS_BARS_BOTTOM - DAYS_BARS_TOP}
          fill={FIG_COLOR.rule}
          transform="translate(-0.5,0)"
        />
      ))}

      {DAY_ROWS.map((row, i) => {
        const labelY = DAYS_ROW_TOP + i * DAYS_ROW_H;
        const barY = labelY + DAYS_BAR_OFFSET;
        const end = row.range ?? row.solid;
        return (
          <g key={row.label}>
            <FigText y={labelY}>{row.label}</FigText>
            <FigText
              x="100%"
              y={labelY}
              size={FIG_TYPE.tick}
              fill={FIG_COLOR.faint}
              anchor="end"
            >
              {row.kind}
            </FigText>

            <TrackBase y={barY} height={DAYS_BAR_H} />
            <Bar
              to={row.solid}
              domain={DAYS_DOMAIN}
              y={barY}
              height={DAYS_BAR_H}
            />
            {row.range ? (
              <Bar
                from={row.solid}
                to={row.range}
                domain={DAYS_DOMAIN}
                y={barY}
                height={DAYS_BAR_H}
                fill={hatch}
              />
            ) : null}

            {row.open ? (
              <At x="100%" y={barY}>
                <path d="M-12 0 L0 7 L-12 14 Z" fill={FIG_COLOR.muted} />
              </At>
            ) : (
              <DayStop value={end} y={barY} />
            )}
          </g>
        );
      })}

      <Axis
        y={DAYS_AXIS_Y}
        domain={DAYS_DOMAIN}
        values={[0, 3, 7, 14]}
        labelY={DAYS_AXIS_LABEL_Y}
      />
      <FigText y={DAYS_NOTE_Y}>Days of supplies</FigText>
      <FigText y={DAYS_KEY_Y} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
        Floor means at least. Ceiling means up to.
      </FigText>
    </FigureCanvas>
  );
}

/* ------------------------------------------------------------------ */
/* Asked of a household, provided for it                               */
/* ------------------------------------------------------------------ */

const ESS_ID = "prepare-ess";

/** Each panel carries its own domain. There is no shared scale, on purpose. */
const ASKED_DOMAIN = 14;
const PROVIDED_DOMAIN = 3;

const ESS_HEADING_Y = 14;
const ESS_VALUE_Y = 41;
const ESS_TRACK_Y = 74;
const ESS_TRACK_H = 16;
const ESS_AXIS_LABEL_Y = 108;
const ESS_NOTE_Y = 128;

const ESS_RULE_Y = 152;
const ESS_PANEL_B = 176;
const ESS_HEIGHT = ESS_PANEL_B + ESS_NOTE_Y + 44;

/**
 * Two weeks asked of a household, and 72 hours of support behind it.
 *
 * These are not two measurements of one quantity, so they are not two bars on
 * one scale. One measures how long a household covers itself; the other
 * measures how long a program that houses and feeds people is designed to run.
 * Each panel is given its own domain, which leaves both bars the full width of
 * the drawing: there is no length for the eye to compare, and the numbers are
 * written out instead. The rule between the panels is the site's mark for two
 * things that must not be read as one.
 */
export function PrepareAskedAndProvided() {
  return (
    <FigureCanvas id={ESS_ID} height={ESS_HEIGHT}>
      <FigHeading y={ESS_HEADING_Y}>
        What a household is asked to cover
      </FigHeading>
      <FigValue y={ESS_VALUE_Y}>Two weeks</FigValue>

      <TrackBase y={ESS_TRACK_Y} height={ESS_TRACK_H} />
      <Bar
        to={ASKED_DOMAIN}
        domain={ASKED_DOMAIN}
        y={ESS_TRACK_Y}
        height={ESS_TRACK_H}
      />
      <Axis
        y={ESS_TRACK_Y + ESS_TRACK_H}
        domain={ASKED_DOMAIN}
        values={[0, 3, 7, 14]}
        labelY={ESS_AXIS_LABEL_Y}
      />
      <FigText y={ESS_NOTE_Y}>Days a household covers on its own</FigText>

      <FigRule y={ESS_RULE_Y} />

      <FigHeading y={ESS_PANEL_B + ESS_HEADING_Y}>
        What the support system is designed for
      </FigHeading>
      <FigValue y={ESS_PANEL_B + ESS_VALUE_Y}>72 hours</FigValue>

      <TrackBase y={ESS_PANEL_B + ESS_TRACK_Y} height={ESS_TRACK_H} />
      <Bar
        to={PROVIDED_DOMAIN}
        domain={PROVIDED_DOMAIN}
        y={ESS_PANEL_B + ESS_TRACK_Y}
        height={ESS_TRACK_H}
      />
      <Axis
        y={ESS_PANEL_B + ESS_TRACK_Y + ESS_TRACK_H}
        domain={PROVIDED_DOMAIN}
        values={[0, 1, 2, 3]}
        labelY={ESS_PANEL_B + ESS_AXIS_LABEL_Y}
      />
      <FigText y={ESS_PANEL_B + ESS_NOTE_Y}>
        Days of Emergency Support Services
      </FigText>
      <FigText
        y={ESS_PANEL_B + ESS_NOTE_Y + 22}
        size={FIG_TYPE.tick}
        fill={FIG_COLOR.faint}
      >
        Not the same scale as the panel above.
      </FigText>
      <FigText
        y={ESS_PANEL_B + ESS_NOTE_Y + 40}
        size={FIG_TYPE.tick}
        fill={FIG_COLOR.faint}
      >
        The province says it is not sized for this.
      </FigText>
    </FigureCanvas>
  );
}

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
const THREE_DAY_MARKS = 12;
const TWO_WEEK_MARKS = 56;

const WATER_HEADING_Y = 14;
const WATER_VALUE_Y = 41;
const WATER_GRID_Y = 56;

const THREE_DAY_GRID_H = tickGridHeight({
  count: THREE_DAY_MARKS,
  columns: WATER_COLUMNS,
});
const TWO_WEEK_GRID_H = tickGridHeight({
  count: TWO_WEEK_MARKS,
  columns: WATER_COLUMNS,
});

const WATER_KEY_Y = WATER_GRID_Y + THREE_DAY_GRID_H + 18;
const WATER_RULE_Y = WATER_KEY_Y + 20;
const WATER_PANEL_B = WATER_RULE_Y + 24;
const WATER_FLOOR_Y = WATER_GRID_Y + TWO_WEEK_GRID_H + 18;
const WATER_GUARD_Y = WATER_FLOOR_Y + 20;
const WATER_HEIGHT = WATER_PANEL_B + WATER_GUARD_Y + 12;

/**
 * The two household totals, in units of the rate they are worked from.
 *
 * Both numbers are arithmetic: four litres per person per day, times three
 * days or times fourteen, for a household of four. Neither the City nor the
 * province prints either total, and the copy says so in the same breath as it
 * gives them, so the guard travels with the drawing too rather than only in
 * the caption. Drawing the larger total as fifty-six countable marks is the
 * point of the figure: 224 litres is the most actionable number on this site
 * and a bar makes it abstract.
 */
export function PrepareWaterArithmetic() {
  return (
    <FigureCanvas id={WATER_ID} height={WATER_HEIGHT}>
      <FigHeading y={WATER_HEADING_Y}>
        Three days for a household of four
      </FigHeading>
      <FigValue y={WATER_VALUE_Y}>48 litres</FigValue>
      <TickGrid
        count={THREE_DAY_MARKS}
        columns={WATER_COLUMNS}
        y={WATER_GRID_Y}
      />
      <FigText y={WATER_KEY_Y} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
        One mark is four litres: one person for one day.
      </FigText>

      <FigRule y={WATER_RULE_Y} />

      <FigHeading y={WATER_PANEL_B + WATER_HEADING_Y}>
        Two weeks for a household of four
      </FigHeading>
      <FigValue y={WATER_PANEL_B + WATER_VALUE_Y}>At least 224 litres</FigValue>
      <TickGrid
        count={TWO_WEEK_MARKS}
        columns={WATER_COLUMNS}
        y={WATER_PANEL_B + WATER_GRID_Y}
      />
      <FigText
        y={WATER_PANEL_B + WATER_FLOOR_Y}
        size={FIG_TYPE.tick}
        fill={FIG_COLOR.faint}
      >
        At least. The guide gives no upper figure.
      </FigText>
      <FigText
        y={WATER_PANEL_B + WATER_GUARD_Y}
        size={FIG_TYPE.tick}
        fill={FIG_COLOR.faint}
      >
        Both totals are arithmetic, not printed figures.
      </FigText>
    </FigureCanvas>
  );
}

/* ------------------------------------------------------------------ */
/* School seismic upgrading                                            */
/* ------------------------------------------------------------------ */

const SCHOOLS_ID = "prepare-schools";

const SCHOOL_HEADING_Y = 14;
const SCHOOL_VALUE_Y = 41;
const SCHOOL_HALF_Y = 62;
const SCHOOL_TRACK_Y = 70;
const SCHOOL_TRACK_H = 18;
const SCHOOL_LABEL_Y = 106;

const SCHOOLS_RULE_Y = 130;
const SCHOOLS_PANEL_B = 154;
const SCHOOLS_HEIGHT = SCHOOLS_PANEL_B + SCHOOL_LABEL_Y + 12;

/** One proportion: the complete share solid, the remainder left as empty track. */
function SchoolProportion({
  offset,
  heading,
  complete,
  remaining,
  total,
}: {
  offset: number;
  heading: string;
  complete: number;
  /**
   * Only where the report's own remaining count is in the copy. The
   * province-wide remainder is not, and subtracting one number from another to
   * fill the label would be inventing it, so that panel says what is left
   * without counting it.
   */
  remaining?: number;
  total: number;
}) {
  return (
    <g>
      <FigHeading y={offset + SCHOOL_HEADING_Y}>{heading}</FigHeading>
      <FigValue y={offset + SCHOOL_VALUE_Y}>
        {complete} of {total} complete
      </FigValue>

      <FigText
        x="50%"
        y={offset + SCHOOL_HALF_Y}
        size={FIG_TYPE.tick}
        fill={FIG_COLOR.faint}
        anchor="middle"
      >
        Half
      </FigText>
      <TrackBase y={offset + SCHOOL_TRACK_Y} height={SCHOOL_TRACK_H} />
      <Bar
        to={complete}
        domain={total}
        y={offset + SCHOOL_TRACK_Y}
        height={SCHOOL_TRACK_H}
      />
      <rect
        x="50%"
        y={offset + SCHOOL_TRACK_Y - 5}
        width="1"
        height={SCHOOL_TRACK_H + 10}
        fill={FIG_COLOR.ruleStrong}
        transform="translate(-0.5,0)"
      />

      <FigText
        y={offset + SCHOOL_LABEL_Y}
        size={FIG_TYPE.tick}
        fill={FIG_COLOR.faint}
      >
        {complete} complete
      </FigText>
      <FigText
        x="100%"
        y={offset + SCHOOL_LABEL_Y}
        size={FIG_TYPE.tick}
        fill={FIG_COLOR.faint}
        anchor="end"
      >
        {remaining === undefined ? "The rest outstanding" : `${remaining} remaining`}
      </FigText>
    </g>
  );
}

/**
 * Two proportions from one progress report, each on its own total.
 *
 * Each track is the whole programme it belongs to, so both bars are read as a
 * share rather than as a count, and the upright at the midpoint is what makes
 * "past halfway in the region and not province-wide" visible without either
 * number being subtracted for the reader. The remainder is left as empty
 * track: it is work outstanding, not a range, so it is not hatched.
 */
export function PrepareSchoolUpgrading() {
  return (
    <FigureCanvas id={SCHOOLS_ID} height={SCHOOLS_HEIGHT}>
      <SchoolProportion
        offset={0}
        heading="Metro Vancouver school projects"
        complete={159}
        remaining={101}
        total={260}
      />
      <FigRule y={SCHOOLS_RULE_Y} />
      <SchoolProportion
        offset={SCHOOLS_PANEL_B}
        heading="Province-wide school projects"
        complete={233}
        total={498}
      />
    </FigureCanvas>
  );
}
