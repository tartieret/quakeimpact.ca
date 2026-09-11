import {
  At,
  Axis,
  Bar,
  FIG_COLOR,
  FIG_STROKE,
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

/** Gridlines sit only where a document states a number. */
const DAYS_GRID = [3, 7];

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
const DAYS_BARS_BOTTOM = DAYS_LAST_LABEL_Y + DAYS_BAR_OFFSET + DAYS_BAR_H;

const DAYS_AXIS_Y = DAYS_BARS_BOTTOM + 6;
const DAYS_AXIS_LABEL_Y = DAYS_AXIS_Y + 18;
const DAYS_NOTE_Y = DAYS_AXIS_LABEL_Y + 22;
const DAYS_KEY_Y = DAYS_NOTE_Y + 20;
const DAYS_HEIGHT = DAYS_KEY_Y + 12;

/**
 * The pixel width of the slot a crossing mark clears for itself, and of the
 * open end that sits in one.
 *
 * SVG paints in document order, so a mark drawn over a bar is drawn in that
 * bar's own colour unless something clears a ground for it first. That is not
 * a contrast nicety: an arrowhead in `muted` over a solid bar in `muted`
 * measures 1:1 against its ground and does not render at all, which left an
 * open end looking exactly like a closed one. Every mark below that crosses a
 * filled mark clears its own slot of paper before it draws.
 */
const DAYS_SLOT_W = 4;
/** The whole open end: the gap of paper, then the arrowhead that follows it. */
const DAYS_OPEN_W = 14;
const DAYS_OPEN_GAP = 5;

/** A hairline that crosses bars, drawn on the paper it clears for itself. */
function SlottedRule({
  value,
  y,
  height,
  fill,
}: {
  value: number;
  y: number;
  height: number;
  fill: string;
}) {
  const x = pct(value, DAYS_DOMAIN);
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={DAYS_SLOT_W}
        height={height}
        fill={FIG_COLOR.paper}
        transform={`translate(${-DAYS_SLOT_W / 2},0)`}
      />
      <rect
        x={x}
        y={y}
        width="1"
        height={height}
        fill={fill}
        transform="translate(-0.5,0)"
      />
    </g>
  );
}

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
 * The end of a bar a document leaves open: the bar is cut back, and an
 * arrowhead points past it across a gap of paper.
 *
 * The gap is what makes the mark legible over a solid bar, a hatch or an empty
 * track alike, and it is what keeps a floor from drawing the same as a
 * ceiling. A closed end is flush and stops against an upright; an open end
 * detaches and carries on.
 */
function DayOpenEnd({ y }: { y: number }) {
  const nose = DAYS_OPEN_GAP - DAYS_OPEN_W;
  return (
    <g>
      {/* The slot: cut back out of the bar, so the arrowhead has a ground. It
          is drawn here rather than inside `At` because a nested `<svg>` is its
          own stacking context for anything measuring what a mark sits on. */}
      <rect
        x="100%"
        y={y}
        width={DAYS_OPEN_W}
        height={DAYS_BAR_H}
        fill={FIG_COLOR.paper}
        transform={`translate(${-DAYS_OPEN_W},0)`}
      />
      <At x="100%" y={y}>
        <path
          d={`M${nose} 0 L0 ${DAYS_BAR_H / 2} L${nose} ${DAYS_BAR_H} Z`}
          fill={FIG_COLOR.muted}
        />
      </At>
    </g>
  );
}

/** Where row `i` puts its label, and where it puts its bar. */
const dayLabelY = (i: number) => DAYS_ROW_TOP + i * DAYS_ROW_H;
const dayBarY = (i: number) => dayLabelY(i) + DAYS_BAR_OFFSET;

/**
 * Six documents, six answers, and no seventh answer offered.
 *
 * The figure is deliberately built so that it cannot be read as resolving to a
 * recommended number. There is no summary bar, no average and no highlighted
 * row: the finding written at the top is a spread, and the reader is left with
 * the spread. The distinction the copy is careful about survives in the
 * geometry as well as in the words, because a bar that ends in a point is open
 * above its number and a bar that ends against an upright is closed at it.
 *
 * Drawing order matters and is the reason the rows are laid down in two
 * passes. Bars first, then the gridlines over them, then the end marks over
 * both: an end mark is the thing the figure cannot afford to lose, so nothing
 * is drawn on top of one.
 */
export function PrepareDaysByDocument() {
  const hatch = `url(#${hatchId(DAYS_ID)})`;

  return (
    <FigureCanvas id={DAYS_ID} height={DAYS_HEIGHT}>
      <FigHeading y={DAYS_HEADING_Y}>
        Six published answers, all current
      </FigHeading>
      <FigValue y={DAYS_VALUE_Y}>Three days to two weeks</FigValue>

      {DAY_ROWS.map((row, i) => (
        <g key={row.label}>
          <FigText y={dayLabelY(i)}>{row.label}</FigText>
          <FigText
            x="100%"
            y={dayLabelY(i)}
            size={FIG_TYPE.tick}
            fill={FIG_COLOR.faint}
            anchor="end"
          >
            {row.kind}
          </FigText>

          <TrackBase y={dayBarY(i)} height={DAYS_BAR_H} />
          <Bar
            to={row.solid}
            domain={DAYS_DOMAIN}
            y={dayBarY(i)}
            height={DAYS_BAR_H}
          />
          {row.range ? (
            <Bar
              from={row.solid}
              to={row.range}
              domain={DAYS_DOMAIN}
              y={dayBarY(i)}
              height={DAYS_BAR_H}
              fill={hatch}
            />
          ) : null}
        </g>
      ))}

      {/* Gridlines only at values the documents themselves state, and only
          across the bars. A gridline carrying its own slot of paper has to
          stop where the bar stops, or it erases the row label it passes
          through. Where a document's own end already falls on the value, that
          end is the mark and the gridline stands down. */}
      {DAY_ROWS.map((row, i) =>
        DAYS_GRID.filter(
          (value) => row.open || (row.range ?? row.solid) !== value,
        ).map((value) => (
          <SlottedRule
            key={`${row.label}-${value}`}
            value={value}
            y={dayBarY(i)}
            height={DAYS_BAR_H}
            fill={FIG_COLOR.faint}
          />
        )),
      )}

      {DAY_ROWS.map((row, i) =>
        row.open ? (
          <DayOpenEnd key={row.label} y={dayBarY(i)} />
        ) : (
          <DayStop
            key={row.label}
            value={row.range ?? row.solid}
            y={dayBarY(i)}
          />
        ),
      )}

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

/**
 * The midpoint upright, and the paper it clears to be seen on. The slot is the
 * height of the track and no more: past the track there is nothing to clear,
 * and a paper rectangle on paper is a mark with no ground of its own.
 */
const SCHOOL_SLOT_W = 5;
const SCHOOL_HALF_SLOT_Y = SCHOOL_TRACK_Y - 5;
const SCHOOL_HALF_H = SCHOOL_TRACK_H + 10;

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
      {/* The midpoint clears its own slot, for the same reason the open end on
          the first figure does: one panel's bar passes the midpoint and the
          other's does not, so the upright has to read over a filled bar and
          over an empty track alike, and a hairline in `ruleStrong` over a
          track in `rule` measures 1.3:1 and is not there. */}
      <rect
        x="50%"
        y={offset + SCHOOL_TRACK_Y}
        width={SCHOOL_SLOT_W}
        height={SCHOOL_TRACK_H}
        fill={FIG_COLOR.paper}
        transform={`translate(${-SCHOOL_SLOT_W / 2},0)`}
      />
      <rect
        x="50%"
        y={offset + SCHOOL_HALF_SLOT_Y}
        width={FIG_STROKE}
        height={SCHOOL_HALF_H}
        fill={FIG_COLOR.muted}
        transform={`translate(${-FIG_STROKE / 2},0)`}
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
