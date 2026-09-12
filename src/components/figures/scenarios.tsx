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
  TrackBase,
  hatchId,
} from "./figure-kit";

/**
 * The four figures on `/scenarios/`.
 *
 * Every number drawn here is already in `docs/copy/scenarios.md`, and no
 * figure adds a claim the prose does not make. The captions, the findings in
 * the alt text and the citation markers live beside the prose in
 * `src/content/pages/scenarios.tsx`; what is here is the drawing and the short
 * labels the geometry cannot do without. Those labels are copy too, and they
 * obey the style guide like any other words a reader sees.
 *
 * Three of the four exist to stop a misreading, and each is built so the
 * misreading is hard to make rather than merely warned against:
 *
 * - the durations share one axis but are labelled by scenario, and a third
 *   scenario breaks the pattern that magnitude sets duration;
 * - the response schematic has no scale at all, because none is published,
 *   and it draws buildings responding rather than buildings damaged;
 * - the recurrence panel draws four sources identically, on an axis of years
 *   between ruptures, with nothing on it that could be read as a date.
 */

/* ------------------------------------------------------------------ */
/* Duration, by named scenario                                         */
/* ------------------------------------------------------------------ */

const DUR_ID = "scenario-durations";

/**
 * Three minutes, in seconds. The domain is the longest duration any of the
 * three scenarios states, so every bar is drawn against a published length
 * rather than against a round number chosen to make the comparison look good.
 */
const DUR_DOMAIN = 180;

/** Row geometry, repeated at each `DUR_ROW` offset. */
const DUR_HEADING_Y = 14;
const DUR_VALUE_Y = 41;
const DUR_NOTE_Y = 58;
const DUR_TRACK_Y = 68;
const DUR_TRACK_H = 16;
const DUR_ROW = 100;

const DUR_ROWS = 3;
const DUR_AXIS_Y = (DUR_ROWS - 1) * DUR_ROW + DUR_TRACK_Y + DUR_TRACK_H;
const DUR_LABEL_Y = DUR_AXIS_Y + 18;
const DUR_UNIT_Y = DUR_LABEL_Y + 22;
const DUR_GUARD_Y = DUR_UNIT_Y + 20;
const DUR_HEIGHT = DUR_GUARD_Y + 12;

/**
 * A faint vertical at each labelled second, so three rows can be compared.
 *
 * `track`, not `mark`: the gridline is dropped from an axis that already
 * states the domain and labels every value on it, so it helps the eye rather
 * than carrying anything of its own.
 */
function DurationGrid({ at }: { at: number }) {
  return (
    <rect
      x={`${(at / DUR_DOMAIN) * 100}%`}
      y={DUR_TRACK_Y}
      width="1"
      height={DUR_AXIS_Y - DUR_TRACK_Y}
      fill={FIG_COLOR.track}
      transform="translate(-0.5,0)"
    />
  );
}

/**
 * How long the shaking lasts, in three named scenarios, on one scale.
 *
 * The page's central teaching point is that the two earthquakes are different
 * problems rather than a larger and a smaller version of one, and the two
 * durations carry most of that on their own. They are drawn against a single
 * axis because that is the comparison; the guard is that each length belongs
 * to the scenario named beside it and to nothing else.
 *
 * The third row is the guard made visible. Exercise Coastal Response 2023 is a
 * smaller crustal earthquake with a longer stated duration, so a reader who
 * has just learned "bigger means longer" from the first two rows meets the
 * counterexample in the same drawing. Its bar is solid to one minute, which is
 * what the exercise states, and hatched past it under an arrow, because the
 * exercise gives no end.
 */
export function ScenarioDurations() {
  const hatch = `url(#${hatchId(DUR_ID)})`;
  const rowB = DUR_ROW;
  const rowC = DUR_ROW * 2;

  return (
    <FigureCanvas id={DUR_ID} height={DUR_HEIGHT}>
      <DurationGrid at={60} />
      <DurationGrid at={120} />

      {/* The province's crustal planning scenario. */}
      <FigHeading y={DUR_HEADING_Y}>
        The province’s crustal magnitude 7.0
      </FigHeading>
      <FigValue y={DUR_VALUE_Y}>10 to 20 seconds</FigValue>
      <FigText y={DUR_NOTE_Y} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
        Violent shaking
      </FigText>
      <TrackBase y={DUR_TRACK_Y} height={DUR_TRACK_H} />
      <Bar to={10} domain={DUR_DOMAIN} y={DUR_TRACK_Y} height={DUR_TRACK_H} />
      <Bar
        from={10}
        to={20}
        domain={DUR_DOMAIN}
        y={DUR_TRACK_Y}
        height={DUR_TRACK_H}
        fill={hatch}
      />

      {/* The province's Cascadia scenario. */}
      <FigHeading y={rowB + DUR_HEADING_Y}>
        The province’s Cascadia magnitude 9.0
      </FigHeading>
      <FigValue y={rowB + DUR_VALUE_Y}>Three minutes</FigValue>
      <FigText
        y={rowB + DUR_NOTE_Y}
        size={FIG_TYPE.tick}
        fill={FIG_COLOR.faint}
      >
        The mainshock
      </FigText>
      <TrackBase y={rowB + DUR_TRACK_Y} height={DUR_TRACK_H} />
      <Bar
        to={180}
        domain={DUR_DOMAIN}
        y={rowB + DUR_TRACK_Y}
        height={DUR_TRACK_H}
      />

      {/* A federal exercise scenario, smaller and longer than the first row. */}
      <FigHeading y={rowC + DUR_HEADING_Y}>
        Exercise Coastal Response 2023
      </FigHeading>
      <FigValue y={rowC + DUR_VALUE_Y}>Over one minute</FigValue>
      <FigText
        y={rowC + DUR_NOTE_Y}
        size={FIG_TYPE.tick}
        fill={FIG_COLOR.faint}
      >
        Magnitude 6.8 near Tsawwassen. No stated end.
      </FigText>
      <TrackBase y={rowC + DUR_TRACK_Y} height={DUR_TRACK_H} />
      <Bar
        to={60}
        domain={DUR_DOMAIN}
        y={rowC + DUR_TRACK_Y}
        height={DUR_TRACK_H}
      />
      <Bar
        from={60}
        to={180}
        domain={DUR_DOMAIN}
        y={rowC + DUR_TRACK_Y}
        height={DUR_TRACK_H}
        fill={hatch}
      />
      <At x="100%" y={rowC + DUR_TRACK_Y}>
        <path d="M-16 0 L0 8 L-16 16 Z" fill={FIG_COLOR.muted} />
      </At>

      <Axis
        y={DUR_AXIS_Y}
        domain={DUR_DOMAIN}
        values={[0, 60, 120, 180]}
        labelY={DUR_LABEL_Y}
      />
      <FigText y={DUR_UNIT_Y}>Seconds of shaking</FigText>
      <FigText y={DUR_GUARD_Y} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
        Each duration belongs to its own scenario.
      </FigText>
    </FigureCanvas>
  );
}

/* ------------------------------------------------------------------ */
/* Which shaking finds which building                                  */
/* ------------------------------------------------------------------ */

const RESP_ID = "scenario-response";

/** Panel geometry, repeated at `RESP_PANEL_B`. */
const RESP_HEADING_Y = 14;
const RESP_VALUE_Y = 41;
const RESP_WAVE_Y = 66;
const RESP_WAVE_LABEL_Y = 92;
const RESP_GROUND_Y = 170;
const RESP_SHORT_TOP = 140;
const RESP_TALL_TOP = 100;
const RESP_BUILDING_LABEL_Y = 190;
const RESP_PANEL_H = 198;

const RESP_RULE_Y = RESP_PANEL_H + 12;
const RESP_PANEL_B = RESP_RULE_Y + 24;
const RESP_GUARD_Y = RESP_PANEL_B + RESP_PANEL_H + 22;
const RESP_HEIGHT = RESP_GUARD_Y + 12;

/** Where each building stands. Both panels use the same two positions. */
const RESP_SHORT_X = "22%";
const RESP_TALL_X = "70%";

/**
 * A sine drawn as a polyline, in pixels, so its shape is the same at every
 * width. Amplitude is identical in both panels on purpose: the two scenarios
 * differ in how fast the ground moves, and nothing published here compares how
 * far it moves.
 */
function wavePoints(period: number, step: number): string {
  const halfWidth = 140;
  const amplitude = 10;
  const points: string[] = [];
  for (let x = -halfWidth; x <= halfWidth; x += step) {
    const y = -amplitude * Math.sin((2 * Math.PI * x) / period);
    points.push(`${x},${y.toFixed(2)}`);
  }
  return points.join(" ");
}

const FAST_WAVE = wavePoints(24, 2);
const SLOW_WAVE = wavePoints(140, 4);

/** One building. Solid where the shaking in this panel finds it. */
function Building({
  x,
  base = 0,
  top,
  width,
  responds,
}: {
  x: string;
  /** The panel's vertical offset. Panel geometry is written panel-local. */
  base?: number;
  top: number;
  width: number;
  responds: boolean;
}) {
  return (
    <At x={x} y={base}>
      <rect
        x={-width / 2}
        y={top}
        width={width}
        height={RESP_GROUND_Y - top}
        fill={responds ? FIG_COLOR.muted : "none"}
        stroke={responds ? undefined : FIG_COLOR.faint}
        strokeWidth={responds ? undefined : FIG_STROKE}
      />
    </At>
  );
}

/**
 * Why the same region has two earthquake problems.
 *
 * A schematic of response, never a picture of damage: the style guide rules
 * out disaster imagery outright, so nothing here is broken, cracked or
 * falling. Two buildings stand in both panels, in the same places, and the
 * only thing that changes between the panels is how fast the ground moves and
 * which building that motion finds.
 *
 * There is no axis and no scale, because neither source gives a frequency, a
 * period or a displacement. The waveforms carry a ratio the prose states in
 * words, high frequency against long period, and the labels beside each
 * building are the province's own descriptions of the damage in each case.
 */
export function ScenarioBuildingResponse() {
  return (
    <FigureCanvas id={RESP_ID} height={RESP_HEIGHT}>
      {/* Panel A: the crustal earthquake. */}
      <FigHeading y={RESP_HEADING_Y}>Fast, sharp shaking</FigHeading>
      <FigValue y={RESP_VALUE_Y}>Short, stiff, older buildings</FigValue>

      <At x="50%" y={RESP_WAVE_Y}>
        <polyline
          points={FAST_WAVE}
          fill="none"
          stroke={FIG_COLOR.muted}
          strokeWidth={FIG_STROKE}
        />
      </At>
      <FigText y={RESP_WAVE_LABEL_Y} size={FIG_TYPE.tick}>
        High frequency shaking
      </FigText>

      <FigText
        x={RESP_SHORT_X}
        y={RESP_SHORT_TOP - 10}
        size={FIG_TYPE.tick}
        fill={FIG_COLOR.ink}
        anchor="middle"
      >
        Greatest damage
      </FigText>
      <Building x={RESP_SHORT_X} top={RESP_SHORT_TOP} width={56} responds />
      <Building
        x={RESP_TALL_X}
        top={RESP_TALL_TOP}
        width={34}
        responds={false}
      />
      <rect
        x="0"
        y={RESP_GROUND_Y}
        width="100%"
        height="1"
        fill={FIG_COLOR.mark}
      />
      <FigText y={RESP_BUILDING_LABEL_Y} size={FIG_TYPE.tick}>
        Short, stiff, older
      </FigText>
      <FigText
        x="100%"
        y={RESP_BUILDING_LABEL_Y}
        size={FIG_TYPE.tick}
        anchor="end"
      >
        Tall, on soft ground
      </FigText>

      <FigRule y={RESP_RULE_Y} />

      {/* Panel B: the megathrust. */}
      <FigHeading y={RESP_PANEL_B + RESP_HEADING_Y}>
        Slow, long shaking
      </FigHeading>
      <FigValue y={RESP_PANEL_B + RESP_VALUE_Y}>
        Tall buildings on soft ground
      </FigValue>

      <At x="50%" y={RESP_PANEL_B + RESP_WAVE_Y}>
        <polyline
          points={SLOW_WAVE}
          fill="none"
          stroke={FIG_COLOR.muted}
          strokeWidth={FIG_STROKE}
        />
      </At>
      <FigText y={RESP_PANEL_B + RESP_WAVE_LABEL_Y} size={FIG_TYPE.tick}>
        Long period shaking
      </FigText>

      <FigText
        x={RESP_TALL_X}
        y={RESP_PANEL_B + RESP_TALL_TOP - 10}
        size={FIG_TYPE.tick}
        fill={FIG_COLOR.ink}
        anchor="middle"
      >
        Significant damage
      </FigText>
      <Building
        x={RESP_SHORT_X}
        base={RESP_PANEL_B}
        top={RESP_SHORT_TOP}
        width={56}
        responds={false}
      />
      <Building
        x={RESP_TALL_X}
        base={RESP_PANEL_B}
        top={RESP_TALL_TOP}
        width={34}
        responds
      />
      <rect
        x="0"
        y={RESP_PANEL_B + RESP_GROUND_Y}
        width="100%"
        height="1"
        fill={FIG_COLOR.mark}
      />
      <FigText
        y={RESP_PANEL_B + RESP_BUILDING_LABEL_Y}
        size={FIG_TYPE.tick}
      >
        Short, stiff, older
      </FigText>
      <FigText
        x="100%"
        y={RESP_PANEL_B + RESP_BUILDING_LABEL_Y}
        size={FIG_TYPE.tick}
        anchor="end"
      >
        Tall, on soft ground
      </FigText>

      <FigText y={RESP_GUARD_Y} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
        Neither earthquake is the other’s smaller version.
      </FigText>
    </FigureCanvas>
  );
}

/* ------------------------------------------------------------------ */
/* Four published recurrence intervals                                 */
/* ------------------------------------------------------------------ */

const RECUR_ID = "cascadia-recurrence";

/**
 * 1,500 years, which is the far end of the widest range any of the four
 * sources states. The domain is a published number rather than a round one,
 * so no part of the axis is the drawing's own invention.
 */
const RECUR_DOMAIN = 1500;

type RecurrenceRow = {
  source: string;
  /** The average interval, which every source gives as a range of its own. */
  average: [number, number];
  /** The range the same source states around that average. */
  range: [number, number];
};

/**
 * The four rows of the table above the figure, in the table's order. They are
 * drawn identically because the finding is that they disagree and all four are
 * current: a drawing that singled one out would be answering a question the
 * sources have not answered.
 */
const RECURRENCE: RecurrenceRow[] = [
  { source: "Natural Resources Canada", average: [500, 600], range: [200, 800] },
  {
    source: "Geological Survey of Canada, 2004",
    average: [570, 630],
    range: [215, 1500],
  },
  {
    source: "BC’s risk and resilience assessment, 2025",
    average: [400, 500],
    range: [200, 1000],
  },
  {
    source: "BC’s earthquake response strategy",
    average: [400, 500],
    range: [100, 1100],
  },
];

const RECUR_HEADING_Y = 14;
const RECUR_VALUE_Y = 41;
const RECUR_FIRST_ROW = 62;
const RECUR_LABEL_Y = 13;
const RECUR_TRACK_Y = 20;
const RECUR_TRACK_H = 14;
const RECUR_ROW = 44;

const RECUR_AXIS_Y =
  RECUR_FIRST_ROW +
  (RECURRENCE.length - 1) * RECUR_ROW +
  RECUR_TRACK_Y +
  RECUR_TRACK_H;
const RECUR_TICK_Y = RECUR_AXIS_Y + 18;
const RECUR_UNIT_Y = RECUR_TICK_Y + 22;
const RECUR_KEY_Y = RECUR_UNIT_Y + 20;
const RECUR_GUARD_Y = RECUR_KEY_Y + 18;
const RECUR_HEIGHT = RECUR_GUARD_Y + 12;

/** Thousands separators, without asking the runtime what locale it is in. */
function recurTick(value: number): string {
  return value >= 1000
    ? `${Math.floor(value / 1000)},${String(value % 1000).padStart(3, "0")}`
    : String(value);
}

/**
 * Four sources on how often Cascadia ruptures, side by side.
 *
 * Two things the style guide forbids govern the drawing. It must not read as a
 * countdown or a due date, so the axis is years between ruptures rather than
 * years on a calendar, and nothing marks 1700 or today. And it must not
 * present one source as the right one, so all four rows are drawn with the
 * same marks at the same weight, in the order the table above gives them.
 *
 * Each source states an average and a wider range around it, and both are
 * drawn: the hatch is the stated range, the solid block inside it the average.
 * The average is itself a range in every one of the four, so it is drawn as
 * one and never as a point.
 */
export function CascadiaRecurrence() {
  const hatch = `url(#${hatchId(RECUR_ID)})`;

  return (
    <FigureCanvas id={RECUR_ID} height={RECUR_HEIGHT}>
      <FigHeading y={RECUR_HEADING_Y}>How often Cascadia ruptures</FigHeading>
      <FigValue y={RECUR_VALUE_Y}>Four sources, four answers</FigValue>

      {RECURRENCE.map((row, i) => {
        const top = RECUR_FIRST_ROW + i * RECUR_ROW;
        return (
          <g key={row.source}>
            <FigText y={top + RECUR_LABEL_Y} size={FIG_TYPE.tick}>
              {row.source}
            </FigText>
            <TrackBase y={top + RECUR_TRACK_Y} height={RECUR_TRACK_H} />
            <Bar
              from={row.range[0]}
              to={row.range[1]}
              domain={RECUR_DOMAIN}
              y={top + RECUR_TRACK_Y}
              height={RECUR_TRACK_H}
              fill={hatch}
            />
            <Bar
              from={row.average[0]}
              to={row.average[1]}
              domain={RECUR_DOMAIN}
              y={top + RECUR_TRACK_Y}
              height={RECUR_TRACK_H}
            />
          </g>
        );
      })}

      <Axis
        y={RECUR_AXIS_Y}
        domain={RECUR_DOMAIN}
        values={[0, 500, 1000, 1500]}
        labelY={RECUR_TICK_Y}
        format={recurTick}
      />
      <FigText y={RECUR_UNIT_Y}>Years between ruptures</FigText>
      <FigText y={RECUR_KEY_Y} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
        Solid: the average. Hatch: the stated range.
      </FigText>
      <FigText y={RECUR_GUARD_Y} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
        All four are current and official.
      </FigText>
    </FigureCanvas>
  );
}

/* ------------------------------------------------------------------ */
/* The modelled crustal fault, in cross-section                        */
/* ------------------------------------------------------------------ */

const FAULT_ID = "crustal-fault";

/**
 * Ten pixels to the kilometre, the same in both directions.
 *
 * The cross-section is the one drawing on the page that has to be geometrically
 * true: a dip is an angle, and an angle is only right when the horizontal and
 * vertical scales match. Percentages move with the viewport, so the whole
 * drawing is in pixels inside a single `At`, anchored at the middle of the
 * canvas.
 */
const KM = 10;

const FAULT_DIP_DEGREES = 47;
const FAULT_BOTTOM_KM = 13;
const FAULT_TOP_KM = 0;
const FAULT_HYPO_KM = 3;

/** Horizontal run per kilometre of depth, from the stated dip. */
const FAULT_RUN_PER_KM = KM / Math.tan((FAULT_DIP_DEGREES * Math.PI) / 180);

const FAULT_BOTTOM_X = -60;
/** Up-dip from the bottom edge: the shallower the point, the further along. */
const faultX = (km: number) =>
  FAULT_BOTTOM_X + (FAULT_BOTTOM_KM - km) * FAULT_RUN_PER_KM;

const FAULT_TOP_X = faultX(FAULT_TOP_KM);
const FAULT_HYPO_X = faultX(FAULT_HYPO_KM);
const FAULT_BOTTOM_Y = FAULT_BOTTOM_KM * KM;
const FAULT_TOP_Y = FAULT_TOP_KM * KM;
const FAULT_HYPO_Y = FAULT_HYPO_KM * KM;

const FAULT_HEADING_Y = 14;
const FAULT_VALUE_Y = 41;
/** Where the ground surface sits on the canvas. Depth zero. */
const FAULT_SURFACE_Y = 76;
const FAULT_UNIT_Y = FAULT_SURFACE_Y + FAULT_BOTTOM_Y + 46;
const FAULT_GUARD_Y = FAULT_UNIT_Y + 20;
const FAULT_HEIGHT = FAULT_GUARD_Y + 12;

/**
 * The fault plane the federal rupture file models, drawn from its own numbers.
 *
 * Four things are stated and four things are drawn: the plane dips at 47
 * degrees, its top edge is at the ground surface, its bottom edge is about
 * 13 km down, and the earthquake starts 3 km down. The rupture file gives all
 * four, so the whole plane is drawn rather than a segment of it.
 *
 * The top edge reaching the surface is the model's geometry and not a forecast
 * that the ground breaks open, which is the misreading the guard line and the
 * alt text both exist to stop. An earlier version of this drawing took the
 * hypocentre for the top of the plane and told the reader no top edge was
 * stated; `docs/research/scenarios.md` warns against exactly that conflation.
 *
 * The depth scale is a domain the source states. There is no horizontal scale,
 * because the file gives the footprint as a map rather than as a distance, and
 * a distance read off this drawing would be the drawing's invention.
 */
export function CrustalFaultSection() {
  return (
    <FigureCanvas id={FAULT_ID} height={FAULT_HEIGHT}>
      <FigHeading y={FAULT_HEADING_Y}>The modelled crustal fault</FigHeading>
      <FigValue y={FAULT_VALUE_Y}>The earthquake starts 3 km down</FigValue>

      <At x="50%" y={FAULT_SURFACE_Y}>
        {/* Depth scale. */}
        <rect
          x={-112}
          y={0}
          width="1"
          height={FAULT_BOTTOM_Y}
          fill={FIG_COLOR.mark}
        />
        {[
          { km: 0, label: "0" },
          { km: FAULT_HYPO_KM, label: "3 km" },
          { km: FAULT_BOTTOM_KM, label: "13 km" },
        ].map((tick) => (
          <g key={tick.km}>
            <rect
              x={-117}
              y={tick.km * KM}
              width="5"
              height="1"
              fill={FIG_COLOR.mark}
            />
            <FigText
              x={-122}
              y={tick.km * KM + 4}
              size={FIG_TYPE.tick}
              fill={FIG_COLOR.faint}
              anchor="end"
            >
              {tick.label}
            </FigText>
          </g>
        ))}

        {/* The ground surface. */}
        <rect
          x={-112}
          y={0}
          width={224}
          height="1"
          fill={FIG_COLOR.mark}
        />
        <FigText
          x={112}
          y={-8}
          size={FIG_TYPE.tick}
          fill={FIG_COLOR.faint}
          anchor="end"
        >
          Ground surface
        </FigText>

        {/* The horizontal the dip is measured from. */}
        <line
          x1={FAULT_BOTTOM_X}
          y1={FAULT_BOTTOM_Y}
          x2={FAULT_BOTTOM_X + 52}
          y2={FAULT_BOTTOM_Y}
          stroke={FIG_COLOR.faint}
          strokeWidth={FIG_STROKE}
          strokeDasharray="3 3"
        />
        <FigText
          x={FAULT_BOTTOM_X + 26}
          y={FAULT_BOTTOM_Y - 7}
          size={FIG_TYPE.tick}
          fill={FIG_COLOR.muted}
          anchor="middle"
        >
          47°
        </FigText>

        {/* The whole plane the rupture file states, top edge to bottom edge. */}
        <line
          x1={FAULT_BOTTOM_X}
          y1={FAULT_BOTTOM_Y}
          x2={FAULT_TOP_X}
          y2={FAULT_TOP_Y}
          stroke={FIG_COLOR.ink}
          strokeWidth={FIG_STROKE * 2}
        />
        <FigText
          x={FAULT_BOTTOM_X}
          y={FAULT_BOTTOM_Y + 18}
          size={FIG_TYPE.tick}
          fill={FIG_COLOR.muted}
          anchor="middle"
        >
          Bottom edge
        </FigText>

        {/* Where the rupture begins. */}
        <circle cx={FAULT_HYPO_X} cy={FAULT_HYPO_Y} r={4.5} fill={FIG_COLOR.ink} />
        <FigText
          x={FAULT_HYPO_X + 9}
          y={FAULT_HYPO_Y + 4}
          size={FIG_TYPE.tick}
          fill={FIG_COLOR.ink}
        >
          Starts here
        </FigText>
      </At>

      <FigText y={FAULT_UNIT_Y}>Depth below the ground surface</FigText>
      <FigText y={FAULT_GUARD_Y} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
        Model geometry, not a crack at the surface.
      </FigText>
    </FigureCanvas>
  );
}
