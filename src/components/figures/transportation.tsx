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
  TrackBase,
  hatchId,
  pct,
} from "./figure-kit";

/**
 * The three figures on `/after/transportation/`.
 *
 * Every number in them is already in `docs/copy/transportation.md`, and none
 * of them adds a claim the prose does not make. The caption, the alt text and
 * the citation markers live beside the prose in
 * `src/content/pages/transportation.tsx`; what is here is the drawing and the
 * short labels the geometry cannot do without. Those labels are copy too and
 * obey the style guide like any other words a reader sees.
 *
 * Two figures the brief asked for are deliberately not here, and the reasons
 * are worth keeping next to the ones that are built:
 *
 * - **What has been assessed against what has been published.** The crossings
 *   table already does this, row by row, in the only form that survives: every
 *   row says a different thing about a different kind of gap. A count of rows
 *   with a figure against rows without would need a count of crossings that
 *   have been assessed, and nobody publishes one. The copy says "mostly", which
 *   is a word, not a number.
 * - **Approach movements compared.** Queensborough's 150 mm, Golden Ears' 0.5 m
 *   and 0.3 m, Oak Street's 100 mm and Mission's 200 mm are not comparable, and
 *   the copy says so in the sentence that introduces them. Each belongs to one
 *   return period, one place on one bridge and one state of the ground beneath
 *   it. Two of those three vary between every pair of values, so no shared
 *   scale can hold them without asserting the comparison the copy denies. They
 *   stay in the prose and in the table, where each number keeps its own
 *   conditions attached to it.
 */

/* ------------------------------------------------------------------ */
/* Approach against span                                               */
/* ------------------------------------------------------------------ */

const APPROACH_ID = "transport-approach";

/**
 * Shared geometry. Both panels use the same vertical layout, and that is the
 * whole mechanism of the figure: the deck sits at the same height in both, so
 * the only thing that moves between them is the ground under the road.
 */
const A_HEAD_Y = 14;
const A_VALUE_Y = 41;
const A_ANNOT_Y = 62;
const ROAD_Y = 76;
const ROAD_H = 7;
const GROUND_Y = 118;
const GROUND_H = 4;
const EMBANK_H = GROUND_Y - (ROAD_Y + ROAD_H);
const A_LABEL_Y = 138;

/** How far the approach drops in the second panel. Schematic, not measured. */
const SETTLE = 13;

const A_PANEL_H = 146;
const A_RULE_Y = 158;
const A_PANEL_B = 182;
const APPROACH_HEIGHT = A_PANEL_B + A_PANEL_H;

/** Where the approach ends and the span begins, as a share of the drawing. */
const ABUTMENT = "32%";
const APPROACH_W = "32%";
const SPAN_W = "56%";
const FAR_X = "88%";
const FAR_W = "12%";

/** A pier, drawn in pixels so it stays a pier rather than stretching. */
function Pier({ x, offset }: { x: string; offset: number }) {
  return (
    <At x={x} y={offset + ROAD_Y + ROAD_H}>
      <rect x={-3} y={0} width={6} height={EMBANK_H} fill={FIG_COLOR.ink} />
    </At>
  );
}

/**
 * The span, the piers, the far side and the ground, which are identical in
 * both panels. Structure is drawn in ink and ground in the strong rule
 * colour, so the two materials read apart with no colour at all.
 */
function SpanAndGround({ offset }: { offset: number }) {
  return (
    <g>
      <rect
        x="0"
        y={offset + GROUND_Y}
        width="100%"
        height={GROUND_H}
        fill={FIG_COLOR.mark}
      />
      <rect
        x={ABUTMENT}
        y={offset + ROAD_Y}
        width={SPAN_W}
        height={ROAD_H}
        fill={FIG_COLOR.ink}
      />
      <Pier x="48%" offset={offset} />
      <Pier x="72%" offset={offset} />
      <rect
        x={FAR_X}
        y={offset + ROAD_Y}
        width={FAR_W}
        height={ROAD_H}
        fill={FIG_COLOR.ink}
      />
      <rect
        x={FAR_X}
        y={offset + ROAD_Y + ROAD_H}
        width={FAR_W}
        height={EMBANK_H}
        fill={FIG_COLOR.mark}
      />
    </g>
  );
}

/**
 * The approach against the span, which the overview calls the most important
 * and least understood point in this section.
 *
 * It is a diagram of a mechanism and nothing else. It is not a named crossing,
 * it carries no measurement, and it is not drawn to scale, because no source
 * gives a settlement for a generic approach and a shape that looked measured
 * would be an invented number. The two panels share one vertical layout so the
 * span can be seen holding its height while the ground under the road drops
 * away from it.
 */
export function ApproachAgainstSpan() {
  return (
    <FigureCanvas id={APPROACH_ID} height={APPROACH_HEIGHT}>
      {/* Panel A: the road, the approach and the span, in line. */}
      <FigHeading y={A_HEAD_Y}>Before the earthquake</FigHeading>
      <FigValue y={A_VALUE_Y}>One continuous surface</FigValue>

      <SpanAndGround offset={0} />
      <rect
        x="0"
        y={ROAD_Y}
        width={APPROACH_W}
        height={ROAD_H}
        fill={FIG_COLOR.ink}
      />
      <rect
        x="0"
        y={ROAD_Y + ROAD_H}
        width={APPROACH_W}
        height={EMBANK_H}
        fill={FIG_COLOR.mark}
      />

      <FigText y={A_LABEL_Y}>Approach</FigText>
      <FigText x="60%" y={A_LABEL_Y} anchor="middle">
        Span
      </FigText>

      <FigRule y={A_RULE_Y} />

      {/* Panel B: the same span at the same height, and the ground gone down
          from under the road. */}
      <FigHeading y={A_PANEL_B + A_HEAD_Y}>After the earthquake</FigHeading>
      <FigValue y={A_PANEL_B + A_VALUE_Y}>Intact, and carrying nobody</FigValue>

      <FigText y={A_PANEL_B + A_ANNOT_Y} size={FIG_TYPE.tick}>
        Step where the road meets the bridge
      </FigText>
      <rect
        x={ABUTMENT}
        y={A_PANEL_B + A_ANNOT_Y + 4}
        width="1"
        height={ROAD_Y - A_ANNOT_Y - 4}
        fill={FIG_COLOR.mark}
      />

      <SpanAndGround offset={A_PANEL_B} />
      <rect
        x="0"
        y={A_PANEL_B + ROAD_Y + SETTLE}
        width={APPROACH_W}
        height={ROAD_H}
        fill={FIG_COLOR.ink}
      />
      <rect
        x="0"
        y={A_PANEL_B + ROAD_Y + SETTLE + ROAD_H}
        width={APPROACH_W}
        height={EMBANK_H - SETTLE}
        fill={FIG_COLOR.mark}
      />
      {/* The face of the step, at the point where the approach meets the deck. */}
      <rect
        x={ABUTMENT}
        y={A_PANEL_B + ROAD_Y}
        width="3"
        height={SETTLE + ROAD_H}
        fill={FIG_COLOR.ink}
        transform="translate(-3,0)"
      />

      <FigText
        y={A_PANEL_B + A_LABEL_Y}
        size={FIG_TYPE.tick}
        fill={FIG_COLOR.faint}
      >
        Schematic. Not drawn to scale.
      </FigText>
    </FigureCanvas>
  );
}

/* ------------------------------------------------------------------ */
/* The Massey Tunnel's three numbers                                   */
/* ------------------------------------------------------------------ */

const MASSEY_ID = "transport-massey";

/** Return periods in years. The domain is the largest of the three. */
const MASSEY_DOMAIN = 2475;
const ASSESSED_LOW = 150;
const ASSESSED_HIGH = 240;
const DESIGNED = 475;

const M_HEAD_Y = 14;

const M_ROW_A = 44;
const M_LINE_A = 64;

const M_ROW_B = 96;
const M_VALUE_B = 122;
const M_TRACK_B = 132;
const M_TRACK_H = 16;

const M_ROW_C = 178;
const M_LINE_C = 200;

const M_AXIS_Y = 218;
const M_AXIS_LABEL_Y = 236;
const M_NOTE_Y = 256;
const MASSEY_HEIGHT = 266;

/**
 * The scale line a point or a threshold sits on. Not a track: nothing fills
 * it, and the three values are read off it, so it is `mark`.
 */
function ScaleLine({ y }: { y: number }) {
  return <rect x="0" y={y} width="100%" height="1" fill={FIG_COLOR.mark} />;
}

/** The axis labels, written the way the copy writes them. */
function formatYears(value: number): string {
  return value === MASSEY_DOMAIN ? "2,475" : String(value);
}

/**
 * The three numbers the Massey Tunnel section turns on, drawn three ways
 * because they are three different kinds of thing.
 *
 * A design intent is a point somebody aimed at. An assessed capacity is a
 * range somebody measured, and it is hatched and outlined because it is a
 * range. A standard is a line a new crossing has to reach. Drawing them as
 * three bars of the same kind would say they are comparable quantities, and
 * they are not: only the middle one is a statement about what the tunnel can
 * take today.
 */
export function MasseyThreeNumbers() {
  const hatch = `url(#${hatchId(MASSEY_ID)})`;

  return (
    <FigureCanvas id={MASSEY_ID} height={MASSEY_HEIGHT}>
      <FigHeading y={M_HEAD_Y}>Three numbers, three different kinds</FigHeading>

      {/* A design intent: a point on the scale. */}
      <FigHeading y={M_ROW_A}>Designed against</FigHeading>
      <FigText
        x="100%"
        y={M_ROW_A}
        anchor="end"
        size={FIG_TYPE.heading}
        weight={700}
        fill={FIG_COLOR.ink}
      >
        475 years
      </FigText>
      <ScaleLine y={M_LINE_A} />
      <At x={pct(DESIGNED, MASSEY_DOMAIN)} y={M_LINE_A}>
        <path d="M-7 -13 L7 -13 L0 0 Z" fill={FIG_COLOR.ink} />
      </At>

      {/* An assessed capacity: a range, so a hatched band on a track. */}
      <FigHeading y={M_ROW_B}>Assessed capacity today</FigHeading>
      <FigValue y={M_VALUE_B}>Approximately 150 to 240 years</FigValue>
      <TrackBase y={M_TRACK_B} height={M_TRACK_H} />
      <Bar
        from={ASSESSED_LOW}
        to={ASSESSED_HIGH}
        domain={MASSEY_DOMAIN}
        y={M_TRACK_B}
        height={M_TRACK_H}
        fill={hatch}
        stroke={FIG_COLOR.ink}
      />

      {/* A standard: a line a new crossing has to reach. */}
      <FigHeading y={M_ROW_C}>Lifeline standard</FigHeading>
      <FigText
        x="100%"
        y={M_ROW_C}
        anchor="end"
        size={FIG_TYPE.heading}
        weight={700}
        fill={FIG_COLOR.ink}
      >
        2,475 years
      </FigText>
      <ScaleLine y={M_LINE_C} />
      <At x="100%" y={M_LINE_C}>
        <rect x={-3} y={-16} width={3} height={16} fill={FIG_COLOR.ink} />
        <rect x={-14} y={-16} width={14} height={3} fill={FIG_COLOR.ink} />
      </At>

      <Axis
        y={M_AXIS_Y}
        domain={MASSEY_DOMAIN}
        values={[0, DESIGNED, MASSEY_DOMAIN]}
        labelY={M_AXIS_LABEL_Y}
        format={formatYears}
      />
      <FigText y={M_NOTE_Y}>Return period in years</FigText>
    </FigureCanvas>
  );
}

/* ------------------------------------------------------------------ */
/* The service level ladder                                            */
/* ------------------------------------------------------------------ */

const LADDER_ID = "transport-service-levels";

const L_HEAD_Y = 14;
const L_VALUE_Y = 41;
const L_NOTE_Y = 62;
const L_RULE_Y = 78;

const L_ROW_TOP = 96;
const L_ROW_H = 66;

/** The meter. Three segments, filled by how little the level allows. */
const SEG_COUNT = 3;
const SEG_W = 10;
const SEG_H = 12;
const SEG_GAP = 4;
const TEXT_X = SEG_COUNT * (SEG_W + SEG_GAP) + 8;

/** The last rung carries one line rather than two, so it needs less room. */
const LADDER_HEIGHT = L_ROW_TOP + 2 * L_ROW_H + 42;

/**
 * One rung. The meter fills the same way the band meter does everywhere else
 * on the site: more segments filled is worse, so the ordinal survives in
 * greyscale and does not rest on position alone.
 */
function ServiceLevel({
  y,
  name,
  filled,
  lines,
}: {
  y: number;
  name: string;
  /** How many of the three segments are filled. More filled is less access.
      The unfilled ones are the denominator, so they are `mark` as well. */
  filled: number;
  lines: string[];
}) {
  return (
    <g>
      {Array.from({ length: SEG_COUNT }, (_, i) => (
        <rect
          key={i}
          x={i * (SEG_W + SEG_GAP)}
          y={y}
          width={SEG_W}
          height={SEG_H}
          rx="1"
          fill={i < filled ? FIG_COLOR.ink : FIG_COLOR.mark}
        />
      ))}
      <FigText
        x={TEXT_X}
        y={y + 11}
        size={FIG_TYPE.heading}
        weight={600}
        fill={FIG_COLOR.ink}
      >
        {name}
      </FigText>
      {lines.map((line, i) => (
        <FigText key={line} x={TEXT_X} y={y + 31 + i * 18}>
          {line}
        </FigText>
      ))}
    </g>
  );
}

/**
 * The Ministry's three retrofit service levels, in its own order, with the
 * gate that sits in front of all three.
 *
 * The figure exists for the sentence under the definitions rather than for the
 * definitions themselves: restoration is gated on inspection before it is
 * gated on repair. Nothing here is on a time scale, because two of the three
 * levels are described with range words ("within days", "a prolonged period")
 * and an axis would invite a reader to measure a date off them.
 */
export function ServiceLevelLadder() {
  return (
    <FigureCanvas id={LADDER_ID} height={LADDER_HEIGHT}>
      <FigHeading y={L_HEAD_Y}>What a retrofit is bought to deliver</FigHeading>
      <FigValue y={L_VALUE_Y}>Inspection comes first</FigValue>
      <FigText y={L_NOTE_Y} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
        Before any of the three levels below
      </FigText>

      <FigRule y={L_RULE_Y} />

      <ServiceLevel
        y={L_ROW_TOP}
        name="Safety 2"
        filled={1}
        lines={["Limited access, reduced lanes", "About 24 hours to inspect"]}
      />
      <ServiceLevel
        y={L_ROW_TOP + L_ROW_H}
        name="Safety 1"
        filled={2}
        lines={["Emergency traffic within days", "Public access after repairs"]}
      />
      <ServiceLevel
        y={L_ROW_TOP + 2 * L_ROW_H}
        name="Superstructure"
        filled={3}
        lines={["No traffic for a prolonged period"]}
      />
    </FigureCanvas>
  );
}
