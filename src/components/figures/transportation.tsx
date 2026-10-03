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
 * The figure on `/after/transportation/`.
 *
 * It adds no claim the prose does not make. The caption, the alt text and the
 * citation markers live beside the prose in
 * `src/content/pages/transportation.tsx`; what is here is the drawing and the
 * short labels the geometry cannot do without. Those labels are copy too and
 * obey the style guide like any other words a reader sees.
 *
 * Two figures stood here beside it, a ladder of the Ministry's 2005 retrofit
 * service levels and the George Massey Tunnel's three return periods. Both
 * went with the design-criteria material after a bridge engineer's review in
 * September 2026; see `docs/knowledge/research.md`.
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
