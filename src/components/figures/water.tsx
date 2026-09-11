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
  tickGridHeight,
} from "./figure-kit";

/**
 * The two figures on `/after/water/`.
 *
 * Both are drawn from numbers already in `docs/copy/water.md`, and neither
 * adds a claim the prose does not make. The sentence-level caption, the
 * finding in the alt text and the citation markers live beside the prose in
 * `src/content/pages/water.tsx`; what is here is the drawing and the few short
 * labels the geometry cannot do without. Those labels are copy too, and they
 * obey the style guide like any other words a reader sees.
 */

/* ------------------------------------------------------------------ */
/* The two clocks                                                      */
/* ------------------------------------------------------------------ */

const CLOCKS_ID = "water-clocks";

/** Panel A. Five days, because that is the domain the province's figure gives. */
const DAYS = 5;

/** Panel A local geometry. Panel B repeats it from `PANEL_B`. */
const HEADING_Y = 14;
const VALUE_Y = 41;
const TRACK_Y = 74;
const TRACK_H = 16;
const AXIS_LABEL_Y = 108;
const NOTE_Y = 128;

const CLOCKS_RULE_Y = 152;
const PANEL_B = 176;
const CLOCKS_HEIGHT = 320;

/**
 * Two durations, drawn side by side and never joined up.
 *
 * The copy warns about exactly one misreading: that four to five days and many
 * months are two ends of one restoration curve, which would suggest water
 * comes back in a week. So the figure is built to make that reading
 * impossible. The panels are separated by a rule, each states what it
 * measures, and only the first carries an axis, because only the first has a
 * domain a source published. There is no shared scale for the eye to run
 * along.
 */
export function WaterTwoClocks() {
  const hatch = `url(#${hatchId(CLOCKS_ID)})`;

  return (
    <FigureCanvas id={CLOCKS_ID} height={CLOCKS_HEIGHT}>
      {/* Panel A: getting water to people. */}
      <FigHeading y={HEADING_Y}>Trucking bulk water to people</FigHeading>
      <FigValue y={VALUE_Y}>Four to five days</FigValue>

      <FigText x="20%" y={60} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
        Thirsty within 24 hours
      </FigText>
      <rect
        x="20%"
        y={66}
        width="1"
        height={8}
        fill={FIG_COLOR.mark}
        transform="translate(-0.5,0)"
      />

      <TrackBase y={TRACK_Y} height={TRACK_H} />
      {/* Solid to four days, hatched across the fifth: the hatch is the range. */}
      <Bar to={4} domain={DAYS} y={TRACK_Y} height={TRACK_H} />
      <Bar
        from={4}
        to={5}
        domain={DAYS}
        y={TRACK_Y}
        height={TRACK_H}
        fill={hatch}
      />
      <Axis
        y={TRACK_Y + TRACK_H}
        domain={DAYS}
        values={[0, 1, 2, 3, 4, 5]}
        labelY={AXIS_LABEL_Y}
      />
      <FigText y={NOTE_Y}>Days after the earthquake</FigText>

      <FigRule y={CLOCKS_RULE_Y} />

      {/* Panel B: getting the network back. No axis, because nobody has
          published a duration to put on one. */}
      <FigHeading y={PANEL_B + HEADING_Y}>Repairing the network</FigHeading>
      <FigValue y={PANEL_B + VALUE_Y}>Many months</FigValue>

      <TrackBase y={PANEL_B + TRACK_Y} height={TRACK_H} />
      <Bar
        to={100}
        domain={100}
        y={PANEL_B + TRACK_Y}
        height={TRACK_H}
        fill={hatch}
      />
      <At x="100%" y={PANEL_B + TRACK_Y}>
        <path d="M-16 0 L0 8 L-16 16 Z" fill={FIG_COLOR.muted} />
      </At>

      <FigText y={PANEL_B + AXIS_LABEL_Y} size={FIG_TYPE.tick}>
        Months. No published end date.
      </FigText>
      <FigText y={PANEL_B + NOTE_Y}>
        Not the same scale as the clock above.
      </FigText>
    </FigureCanvas>
  );
}

/* ------------------------------------------------------------------ */
/* Where the failures fall                                             */
/* ------------------------------------------------------------------ */

const COUNTS_ID = "water-failures";

const COLUMNS = 24;
const REGION_COUNT = 267;
const CROSSING_COUNT = 60;

const COUNT_HEADING_Y = 14;
const COUNT_VALUE_Y = 41;
const GRID_Y = 56;

const REGION_GRID_H = tickGridHeight({ count: REGION_COUNT, columns: COLUMNS });
const CROSSING_GRID_H = tickGridHeight({
  count: CROSSING_COUNT,
  columns: COLUMNS,
});

const SCOPE_Y = GRID_Y + REGION_GRID_H + 18;
const COUNTS_RULE_Y = SCOPE_Y + 24;
const COUNTS_PANEL_B = COUNTS_RULE_Y + 24;
const COUNTS_HEIGHT =
  COUNTS_PANEL_B + GRID_Y + CROSSING_GRID_H + 18 + FIG_TYPE.label + 8;

/**
 * Two counts of different things, drawn as two counts of different things.
 *
 * 267 is failures anywhere in the network; about 60 is breaks at the river and
 * inlet crossings, the part of that total falling on the assets that are
 * hardest to reach. They are not added, so they are never stacked and never
 * share a bar. One mark is one failure in both panels and the columns line up,
 * which lets the reader compare the two by area while the rule between them
 * keeps them separate.
 */
export function WaterFailureCounts() {
  return (
    <FigureCanvas id={COUNTS_ID} height={COUNTS_HEIGHT}>
      <FigHeading y={COUNT_HEADING_Y}>
        Failures anywhere in the network
      </FigHeading>
      <FigValue y={COUNT_VALUE_Y}>267 main failures</FigValue>
      <TickGrid count={REGION_COUNT} columns={COLUMNS} y={GRID_Y} />
      <FigText y={SCOPE_Y} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
        Across the region and its 21 municipalities
      </FigText>

      <FigRule y={COUNTS_RULE_Y} />

      <FigHeading y={COUNTS_PANEL_B + COUNT_HEADING_Y}>
        Breaks at the river and inlet crossings
      </FigHeading>
      <FigValue y={COUNTS_PANEL_B + COUNT_VALUE_Y}>About 60 breaks</FigValue>
      <TickGrid
        count={CROSSING_COUNT}
        columns={COLUMNS}
        y={COUNTS_PANEL_B + GRID_Y}
      />
      <FigText
        y={COUNTS_PANEL_B + GRID_Y + CROSSING_GRID_H + 18}
        size={FIG_TYPE.tick}
        fill={FIG_COLOR.faint}
      >
        Across the 71 crossings
      </FigText>
    </FigureCanvas>
  );
}
