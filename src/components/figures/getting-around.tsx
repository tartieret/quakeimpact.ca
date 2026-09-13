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
} from "./figure-kit";

/**
 * The two figures on `/getting-around/`.
 *
 * Every word and every number here is already in `docs/copy/getting-around.md`,
 * and neither adds a claim the prose does not make. The captions, the
 * alt text and the citation markers live beside the prose in
 * `src/content/pages/getting-around.tsx`; what is here is the drawing and the
 * short labels the geometry cannot do without. Those labels are copy too, and
 * they obey the style guide like any other words a reader sees.
 *
 * A third figure stood here, `LandConnections`, a schematic of which ways out
 * of Vancouver exist and what each one crosses. The crossings map now on the
 * page is the same three facts drawn as real geography, and keeping a
 * connections diagram one click from a map of the same crossings invited
 * reading the diagram as geography, which is the misreading its own caption was
 * written to prevent. The callout above it still states all three facts in
 * words. See `crossings-map.tsx`.
 *
 * There is deliberately no Disaster Response Route network map. The public
 * instruction is to get off those routes rather than to follow them, drawing
 * responder infrastructure as though it were public infrastructure is the one
 * thing the style guide forbids outright here, and since June 2018 the routes
 * are not designated in advance at all, so a fixed network would be stale as
 * well as misleading.
 */

/* ------------------------------------------------------------------ */
/* The clearing order                                                  */
/* ------------------------------------------------------------------ */

const ORDER_ID = "clearing-order";

/**
 * The six steps, in the order Metro Vancouver's regional debris management
 * plan publishes them. The plan is quoted in full in the prose beside the
 * figure; these are the short forms the geometry can carry.
 */
const CLEARING_STEPS = [
  "Lifelines and evacuation routes",
  "Critical infrastructure",
  "Major freeways and arterial routes",
  "Goods, services and economic restoration",
  "Minor arterial routes",
  "Local routes",
] as const;

const ORDER_HEADING_Y = 14;
const ORDER_VALUE_Y = 41;
const ORDER_ROW_ONE_Y = 78;
const ORDER_ROW_STEP = 30;
const ORDER_RAIL_X = 10;
const ORDER_RANK_X = 26;
const ORDER_LABEL_X = 44;

const ORDER_LAST_Y =
  ORDER_ROW_ONE_Y + (CLEARING_STEPS.length - 1) * ORDER_ROW_STEP;
const ORDER_RAIL_TOP = ORDER_ROW_ONE_Y - 20;
const ORDER_RAIL_BOTTOM = ORDER_LAST_Y + 4;
const ORDER_NOTE_Y = ORDER_LAST_Y + 38;
const ORDER_HEIGHT = ORDER_NOTE_Y + 18;

/**
 * A ladder, because the finding is a position rather than a quantity.
 *
 * Nothing here is drawn to a scale. The plan publishes an order of work and no
 * durations at all, so a bar length or an axis would be a number the source
 * does not give. What the drawing does is put the reader's own street at the
 * bottom of six rungs, which is the whole of the finding. The note at the foot
 * says inside the figure what the caption says beside it, because a ladder read
 * as a timeline is the one misreading on offer.
 */
export function ClearingOrder() {
  return (
    <FigureCanvas id={ORDER_ID} height={ORDER_HEIGHT}>
      <FigHeading y={ORDER_HEADING_Y}>The published clearing order</FigHeading>
      <FigValue y={ORDER_VALUE_Y}>Local routes are last</FigValue>

      {/* The rail and its arrowhead carry the direction of the order. The
          rail is `mark`, the same weight as `Spine` on the third figure: it is
          a connector rather than an empty track, and the order it carries is
          the finding, so it is one of the marks held to 3:1. */}
      <rect
        x={ORDER_RAIL_X}
        y={ORDER_RAIL_TOP}
        width="1"
        height={ORDER_RAIL_BOTTOM - ORDER_RAIL_TOP}
        fill={FIG_COLOR.mark}
      />
      <At x={ORDER_RAIL_X} y={ORDER_RAIL_BOTTOM}>
        <path d="M-4 0 L5 0 L0.5 8 Z" fill={FIG_COLOR.muted} />
      </At>

      {CLEARING_STEPS.map((step, i) => {
        const y = ORDER_ROW_ONE_Y + i * ORDER_ROW_STEP;
        return (
          <g key={step}>
            <FigText
              x={ORDER_RANK_X}
              y={y}
              size={FIG_TYPE.tick}
              fill={FIG_COLOR.faint}
            >
              {i + 1}
            </FigText>
            <FigText x={ORDER_LABEL_X} y={y}>
              {step}
            </FigText>
          </g>
        );
      })}

      <FigText
        x="100%"
        y={ORDER_ROW_ONE_Y}
        size={FIG_TYPE.tick}
        fill={FIG_COLOR.faint}
        anchor="end"
      >
        First
      </FigText>
      <FigText
        x="100%"
        y={ORDER_LAST_Y}
        size={FIG_TYPE.tick}
        fill={FIG_COLOR.faint}
        anchor="end"
      >
        Last
      </FigText>

      <FigText y={ORDER_NOTE_Y}>
        An order, not a timetable. No durations given.
      </FigText>
    </FigureCanvas>
  );
}

/* ------------------------------------------------------------------ */
/* The 2021 reopening durations                                        */
/* ------------------------------------------------------------------ */

const REOPEN_ID = "reopening-2021";

/** Panel A is in days, panel B in months. The two never share a scale. */
const REOPEN_DAYS = 80;
const REOPEN_MONTHS = 24;

const REOPEN_HEADING_Y = 14;
const REOPEN_VALUE_Y = 41;
const REOPEN_NOTE_Y = 62;
const REOPEN_RULE_ONE_Y = 78;

const ROW_TRACK_OFFSET = 6;
const ROW_TRACK_H = 14;

const DAYS_HEADING_Y = 100;
const DAYS_ROW_ONE_Y = 126;
const DAYS_ROW_TWO_Y = 168;
const DAYS_ROW_THREE_Y = 210;
const DAYS_AXIS_Y = DAYS_ROW_THREE_Y + ROW_TRACK_OFFSET + ROW_TRACK_H;
const DAYS_AXIS_LABEL_Y = 248;
const DAYS_UNIT_Y = 268;
const REOPEN_RULE_TWO_Y = 286;

const MONTHS_HEADING_Y = 308;
const MONTHS_ROW_ONE_Y = 334;
const MONTHS_ROW_TWO_Y = 376;
const MONTHS_AXIS_Y = MONTHS_ROW_TWO_Y + ROW_TRACK_OFFSET + ROW_TRACK_H;
const MONTHS_AXIS_LABEL_Y = 414;
const MONTHS_UNIT_Y = 434;
const MONTHS_EXTRA_Y = 456;
const REOPEN_GUARD_Y = 482;
const REOPEN_HEIGHT = 498;

/**
 * How long it took to reopen three highways cut by rainfall in November 2021.
 *
 * The guard is the figure. Every duration drawn here is repair of storm damage,
 * and a chart of reopening times floating free of that sentence reads as an
 * earthquake forecast, which is exactly the misreading the copy is built to
 * prevent. So the guard is the heading, it is repeated at the foot, and it is
 * in the alt text. It does not depend on the caption staying beside the
 * drawing.
 *
 * Days and months are separated by a rule, each panel carries its own axis and
 * its own unit line, and the one range in the figure, the two Highway 1
 * segments, is hatched between its two published dates rather than averaged
 * into a point. The December 2025 restoration of Highway 8 is written rather
 * than drawn, because the source gives that as a date and no elapsed figure to
 * put on an axis.
 */
export function Reopening2021() {
  const hatch = `url(#${hatchId(REOPEN_ID)})`;

  return (
    <FigureCanvas id={REOPEN_ID} height={REOPEN_HEIGHT}>
      <FigHeading y={REOPEN_HEADING_Y}>
        November 2021 rainfall, not an earthquake
      </FigHeading>
      <FigValue y={REOPEN_VALUE_Y}>Reopening took months</FigValue>
      <FigText y={REOPEN_NOTE_Y} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
        Every duration here is rainfall damage.
      </FigText>

      <FigRule y={REOPEN_RULE_ONE_Y} />

      {/* Panel A: the reopenings the sources give in days. */}
      <FigHeading y={DAYS_HEADING_Y}>Reopened to traffic, in days</FigHeading>

      <FigText y={DAYS_ROW_ONE_Y}>
        Highway 5 to commercial traffic: 35 days
      </FigText>
      <TrackBase y={DAYS_ROW_ONE_Y + ROW_TRACK_OFFSET} height={ROW_TRACK_H} />
      <Bar
        to={35}
        domain={REOPEN_DAYS}
        y={DAYS_ROW_ONE_Y + ROW_TRACK_OFFSET}
        height={ROW_TRACK_H}
      />

      <FigText y={DAYS_ROW_TWO_Y}>
        Highway 5 to all traffic: about 66 days
      </FigText>
      <TrackBase y={DAYS_ROW_TWO_Y + ROW_TRACK_OFFSET} height={ROW_TRACK_H} />
      <Bar
        to={66}
        domain={REOPEN_DAYS}
        y={DAYS_ROW_TWO_Y + ROW_TRACK_OFFSET}
        height={ROW_TRACK_H}
      />

      <FigText y={DAYS_ROW_THREE_Y}>
        Highway 1, two segments: 61 and 71 days
      </FigText>
      <TrackBase y={DAYS_ROW_THREE_Y + ROW_TRACK_OFFSET} height={ROW_TRACK_H} />
      <Bar
        to={61}
        domain={REOPEN_DAYS}
        y={DAYS_ROW_THREE_Y + ROW_TRACK_OFFSET}
        height={ROW_TRACK_H}
      />
      {/* Hatched between the two segment dates: a range, not a point. */}
      <Bar
        from={61}
        to={71}
        domain={REOPEN_DAYS}
        y={DAYS_ROW_THREE_Y + ROW_TRACK_OFFSET}
        height={ROW_TRACK_H}
        fill={hatch}
      />

      <Axis
        y={DAYS_AXIS_Y}
        domain={REOPEN_DAYS}
        values={[0, 20, 40, 60, 80]}
        labelY={DAYS_AXIS_LABEL_Y}
      />
      <FigText y={DAYS_UNIT_Y}>Days after the November 2021 rainfall</FigText>

      <FigRule y={REOPEN_RULE_TWO_Y} />

      {/* Panel B: the repairs the sources give in months. Not the scale above. */}
      <FigHeading y={MONTHS_HEADING_Y}>
        The longer repairs, in months
      </FigHeading>

      <FigText y={MONTHS_ROW_ONE_Y}>
        Highway 8 reopened: about 12 months
      </FigText>
      <TrackBase y={MONTHS_ROW_ONE_Y + ROW_TRACK_OFFSET} height={ROW_TRACK_H} />
      <Bar
        to={12}
        domain={REOPEN_MONTHS}
        y={MONTHS_ROW_ONE_Y + ROW_TRACK_OFFSET}
        height={ROW_TRACK_H}
      />

      <FigText y={MONTHS_ROW_TWO_Y}>
        Last Highway 5 bridge: about 23 months
      </FigText>
      <TrackBase y={MONTHS_ROW_TWO_Y + ROW_TRACK_OFFSET} height={ROW_TRACK_H} />
      <Bar
        to={23}
        domain={REOPEN_MONTHS}
        y={MONTHS_ROW_TWO_Y + ROW_TRACK_OFFSET}
        height={ROW_TRACK_H}
      />

      <Axis
        y={MONTHS_AXIS_Y}
        domain={REOPEN_MONTHS}
        values={[0, 6, 12, 18, 24]}
        labelY={MONTHS_AXIS_LABEL_Y}
      />
      <FigText y={MONTHS_UNIT_Y}>
        Months after the November 2021 rainfall
      </FigText>
      <FigText y={MONTHS_EXTRA_Y} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
        Highway 8 regained two lanes in December 2025
      </FigText>

      <FigText y={REOPEN_GUARD_Y} weight={600} fill={FIG_COLOR.ink}>
        None of this was caused by an earthquake.
      </FigText>
    </FigureCanvas>
  );
}
