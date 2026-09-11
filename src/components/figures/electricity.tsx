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
  pct,
  TrackBase,
  hatchId,
  tickGridHeight,
} from "./figure-kit";

/**
 * The figures on `/after/electricity/`.
 *
 * Every number here is one BC Hydro or a cited source already states in
 * `docs/copy/electricity.md`, and nothing is drawn that the copy does not say.
 * The captions, the alt text and the citation markers live beside the prose in
 * `src/content/pages/electricity.tsx`; what is here is the drawing and the few
 * short labels the geometry cannot do without.
 *
 * The page's discipline is that it does not generalise: BC Hydro's finding is
 * about downtown Vancouver and nothing equivalent is published for the rest of
 * the region. So a figure that shows a downtown number says downtown on the
 * drawing, not only in the caption.
 */

/* ------------------------------------------------------------------ */
/* The two clocks                                                      */
/* ------------------------------------------------------------------ */

const CLOCKS_ID = "electricity-clocks";

/** Panel A geometry. Panel B repeats it from `CLOCKS_PANEL_B`. */
const HEADING_Y = 14;
const VALUE_Y = 41;
const TRACK_Y = 74;
const TRACK_H = 16;
const UNIT_Y = 108;
const NOTE_Y = 128;

const CLOCKS_RULE_Y = 152;
const CLOCKS_PANEL_B = 176;
const CLOCKS_HEIGHT = 320;

/**
 * BC Hydro's two durations, drawn side by side and never joined up.
 *
 * "Several weeks to restore power to customers and years to completely restore
 * the system" are two clocks, not two ends of one. Neither carries a published
 * number, so neither panel carries an axis: there is nothing on the drawing to
 * run an eye along, and no way to read a date off it. The second is open, so it
 * is drawn open.
 */
export function ElectricityTwoClocks() {
  const hatch = `url(#${hatchId(CLOCKS_ID)})`;

  return (
    <FigureCanvas id={CLOCKS_ID} height={CLOCKS_HEIGHT}>
      {/* Panel A: power back to customers. */}
      <FigHeading y={HEADING_Y}>Power back to downtown customers</FigHeading>
      <FigValue y={VALUE_Y}>Several weeks</FigValue>

      <TrackBase y={TRACK_Y} height={TRACK_H} />
      <Bar to={1} domain={1} y={TRACK_Y} height={TRACK_H} fill={hatch} />

      <FigText y={UNIT_Y} size={FIG_TYPE.tick}>
        Weeks. BC Hydro publishes no number.
      </FigText>
      <FigText y={NOTE_Y}>Downtown customers, in a large earthquake.</FigText>

      <FigRule y={CLOCKS_RULE_Y} />

      {/* Panel B: the system whole again. No end, so no end is drawn. */}
      <FigHeading y={CLOCKS_PANEL_B + HEADING_Y}>
        The system completely restored
      </FigHeading>
      <FigValue y={CLOCKS_PANEL_B + VALUE_Y}>Years</FigValue>

      <TrackBase y={CLOCKS_PANEL_B + TRACK_Y} height={TRACK_H} />
      <Bar
        to={1}
        domain={1}
        y={CLOCKS_PANEL_B + TRACK_Y}
        height={TRACK_H}
        fill={hatch}
      />
      <At x="100%" y={CLOCKS_PANEL_B + TRACK_Y}>
        <path d="M-16 0 L0 8 L-16 16 Z" fill={FIG_COLOR.muted} />
      </At>

      <FigText y={CLOCKS_PANEL_B + UNIT_Y} size={FIG_TYPE.tick}>
        Years. No published end date.
      </FigText>
      <FigText y={CLOCKS_PANEL_B + NOTE_Y}>
        Not the same scale as the clock above.
      </FigText>
    </FigureCanvas>
  );
}

/* ------------------------------------------------------------------ */
/* The Murrin shortfall                                                */
/* ------------------------------------------------------------------ */

const SHORTFALL_ID = "electricity-shortfall";

/** The two return periods the footnote names, and the axis they sit on. */
const FOUND = 1000;
const REQUIRED = 2475;

const SHORTFALL_TRACK_Y = 92;
const SHORTFALL_HEIGHT = 196;

/**
 * Two return periods and a threshold the substation does not meet.
 *
 * The axis is return period in years, which is a domain the footnote states
 * twice over, and the only marked values on it are the two it states. The
 * stretch below 1 in 1,000 is left as empty track: the assessment found Murrin
 * not operable at that motion, and said nothing about what it withstands below
 * it, so nothing is filled in there. The hatched band between the two marks is
 * the subject of the figure.
 */
export function MurrinShortfall() {
  const hatch = `url(#${hatchId(SHORTFALL_ID)})`;
  const marker = (value: number) => (
    <rect
      x={pct(value, REQUIRED)}
      y={72}
      width="1"
      height={SHORTFALL_TRACK_Y - 72}
      fill={FIG_COLOR.ruleStrong}
      transform={value === REQUIRED ? "translate(-1,0)" : "translate(-0.5,0)"}
    />
  );

  return (
    <FigureCanvas id={SHORTFALL_ID} height={SHORTFALL_HEIGHT}>
      <FigHeading y={14}>Murrin Substation, downtown Vancouver</FigHeading>
      <FigValue y={41}>Not operable at 1 in 1,000</FigValue>

      <FigText y={66} size={FIG_TYPE.tick}>
        Not operable
      </FigText>
      <FigText y={66} x="100%" anchor="end" size={FIG_TYPE.tick}>
        Must be operable
      </FigText>
      {marker(FOUND)}
      {marker(REQUIRED)}

      <TrackBase y={SHORTFALL_TRACK_Y} height={TRACK_H} />
      <Bar
        from={FOUND}
        to={REQUIRED}
        domain={REQUIRED}
        y={SHORTFALL_TRACK_Y}
        height={TRACK_H}
        fill={hatch}
      />
      <Axis
        y={SHORTFALL_TRACK_Y + TRACK_H}
        domain={REQUIRED}
        values={[0, FOUND, REQUIRED]}
        labelY={126}
        format={(value) => value.toLocaleString("en-CA")}
      />
      <FigText y={148}>Earthquake return period, in years</FigText>
      <FigText y={170} size={FIG_TYPE.tick}>
        The hatched band is the shortfall.
      </FigText>
    </FigureCanvas>
  );
}

/* ------------------------------------------------------------------ */
/* Ten spares against a fleet of 672                                   */
/* ------------------------------------------------------------------ */

const SPARES_ID = "electricity-spares";

const SPARE_COUNT = 10;
const FLEET_COUNT = 672;

const SPARES_COLUMNS = 48;
const MARK_H = 7;
const ROW_GAP = 3;

const SPARE_GRID_H = tickGridHeight({
  count: SPARE_COUNT,
  columns: SPARES_COLUMNS,
  markHeight: MARK_H,
  rowGap: ROW_GAP,
});
const FLEET_GRID_H = tickGridHeight({
  count: FLEET_COUNT,
  columns: SPARES_COLUMNS,
  markHeight: MARK_H,
  rowGap: ROW_GAP,
});

const GRID_Y = 56;
const SPARES_NOTE_Y = GRID_Y + SPARE_GRID_H + 20;
const SPARES_RULE_Y = SPARES_NOTE_Y + 20;
const SPARES_PANEL_B = SPARES_RULE_Y + 24;
const SPARES_HEIGHT = SPARES_PANEL_B + GRID_Y + FLEET_GRID_H + 20 + 12;

/**
 * One mark is one transformer, in both panels, on the same columns.
 *
 * The ratio is the finding, and a bar would ask the reader to take it on
 * trust. Drawn as units on a shared grid the ten spares are one short row
 * against fourteen full ones. The two counts are never stacked and never
 * added: the spares are part of no total drawn here.
 */
export function TransformerSpares() {
  return (
    <FigureCanvas id={SPARES_ID} height={SPARES_HEIGHT}>
      <FigHeading y={14}>Spare power transformers held</FigHeading>
      <FigValue y={41}>10 spares</FigValue>
      <TickGrid
        count={SPARE_COUNT}
        columns={SPARES_COLUMNS}
        markHeight={MARK_H}
        rowGap={ROW_GAP}
        y={GRID_Y}
      />
      <FigText y={SPARES_NOTE_Y} size={FIG_TYPE.tick}>
        Held for a failure, in the singular.
      </FigText>

      <FigRule y={SPARES_RULE_Y} />

      <FigHeading y={SPARES_PANEL_B + 14}>
        The fleet at 60 kV and above
      </FigHeading>
      <FigValue y={SPARES_PANEL_B + 41}>672 transformers</FigValue>
      <TickGrid
        count={FLEET_COUNT}
        columns={SPARES_COLUMNS}
        markHeight={MARK_H}
        rowGap={ROW_GAP}
        y={SPARES_PANEL_B + GRID_Y}
      />
      <FigText
        y={SPARES_PANEL_B + GRID_Y + FLEET_GRID_H + 20}
        size={FIG_TYPE.tick}
      >
        One mark is one transformer, in both panels.
      </FigText>
    </FigureCanvas>
  );
}

/* ------------------------------------------------------------------ */
/* Transformer lead times                                              */
/* ------------------------------------------------------------------ */

const LEAD_ID = "electricity-lead-times";

/** Weeks. The domain is the later of the two figures the sources give. */
const LEAD_DOMAIN = 120;
const LEAD_HEIGHT = 214;

/**
 * The guard is the heading, not the caption.
 *
 * These are United States market figures, and a reader who meets the drawing
 * without the prose around it has to meet that fact first. So it is the panel
 * heading, it is repeated under the axis, and it is in the alt text. The axis
 * is marked only at the two values the sources give, so there is nothing to
 * interpolate a third year off.
 */
export function TransformerLeadTimes() {
  return (
    <FigureCanvas id={LEAD_ID} height={LEAD_HEIGHT}>
      <FigHeading y={14}>US market figures, not British Columbia</FigHeading>
      <FigValue y={41}>Roughly 120 weeks by 2024</FigValue>

      <FigText y={68} size={FIG_TYPE.tick}>
        2021, around 50 weeks
      </FigText>
      <TrackBase y={74} height={TRACK_H} />
      <Bar to={50} domain={LEAD_DOMAIN} y={74} height={TRACK_H} />

      <FigText y={112} size={FIG_TYPE.tick}>
        2024, roughly 120 weeks
      </FigText>
      <TrackBase y={118} height={TRACK_H} />
      <Bar to={120} domain={LEAD_DOMAIN} y={118} height={TRACK_H} />

      <Axis y={134} domain={LEAD_DOMAIN} values={[0, 50, 120]} labelY={152} />
      <FigText y={174}>Average lead time, in weeks</FigText>
      <FigText y={196} size={FIG_TYPE.tick}>
        Not a forecast for British Columbia.
      </FigText>
    </FigureCanvas>
  );
}

/* ------------------------------------------------------------------ */
/* The chronology                                                      */
/* ------------------------------------------------------------------ */

const CHRONO_ID = "electricity-chronology";

/** Years, counted from 2011, which is the first thing on the record. */
const CHRONO_START = 2011;
const CHRONO_DOMAIN = 2032 - CHRONO_START;
const KNOWN = 2019 - CHRONO_START;
const ASSESSED = 2025 - CHRONO_START;

const CHRONO_TRACK_Y = 146;
const CHRONO_HEIGHT = 238;

/**
 * Four dates the copy states, and the distance between two of them.
 *
 * The band runs from the filing that already stated the problem to the
 * earliest date the replacement can be in service. July 2032 is the earliest
 * and the regulator has not ruled, so the band is hatched and carries an
 * arrowhead rather than stopping square on the last tick.
 */
export function ElectricityChronology() {
  const hatch = `url(#${hatchId(CHRONO_ID)})`;

  return (
    <FigureCanvas id={CHRONO_ID} height={CHRONO_HEIGHT}>
      <FigHeading y={14}>Downtown Vancouver, on the record</FigHeading>
      <FigValue y={41}>2019 to 2032 at the earliest</FigValue>

      <FigText y={70} size={FIG_TYPE.tick}>
        2011, said to withstand 1 in 2,475
      </FigText>
      <FigText y={90} size={FIG_TYPE.tick}>
        2019, filing states a prolonged outage
      </FigText>
      <FigText y={110} size={FIG_TYPE.tick}>
        2025, assessed not operable at 1 in 1,000
      </FigText>
      <FigText y={130} size={FIG_TYPE.tick}>
        2032, new substation at the earliest
      </FigText>

      <TrackBase y={CHRONO_TRACK_Y} height={TRACK_H} />
      <Bar
        from={KNOWN}
        to={CHRONO_DOMAIN}
        domain={CHRONO_DOMAIN}
        y={CHRONO_TRACK_Y}
        height={TRACK_H}
        fill={hatch}
      />
      <At x="100%" y={CHRONO_TRACK_Y}>
        <path d="M-16 0 L0 8 L-16 16 Z" fill={FIG_COLOR.muted} />
      </At>
      <Axis
        y={CHRONO_TRACK_Y + TRACK_H}
        domain={CHRONO_DOMAIN}
        values={[0, KNOWN, ASSESSED, CHRONO_DOMAIN]}
        labelY={180}
        format={(value) => String(CHRONO_START + value)}
      />
      <FigText y={202}>The gap between knowing and fixing</FigText>
      <FigText y={224} size={FIG_TYPE.tick}>
        One substation. The regulator has not yet ruled.
      </FigText>
    </FigureCanvas>
  );
}
