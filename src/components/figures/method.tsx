import type { ReactNode } from "react";
import {
  At,
  FIG_COLOR,
  FIG_STROKE,
  FIG_TYPE,
  FigHeading,
  FigRule,
  FigText,
  FigValue,
  FigureCanvas,
  hatchId,
} from "./figure-kit";
import type { Band } from "@/content/types";

/**
 * The three figures on `/method/`.
 *
 * Every word and every relationship drawn here is already in
 * `docs/copy/method.md`. None of them carries a quantity, because the page
 * carries almost none: its subject is where a figure came from and what kind
 * of thing is missing, not how big anything is. So there is no bar and no axis
 * in this file. The marks are the site's own grammar used at its smallest:
 * a solid swatch is something a document states, a hatched swatch is a gap,
 * and a rule separates two things that must not be read as one.
 *
 * **There is no return-period figure, and there is not going to be one.** The
 * copy's point is that a dam's 1-in-10,000-year earthquake and a building's
 * 1-in-2,475-year one are not points on one scale, and the professional
 * guideline says so in as many words. Any drawing that put both on a page
 * would invite the eye to travel between them, which is the comparison the
 * sentence exists to deny. Two separate scales drawn side by side read as one
 * scale broken in half. A figure that asserts what the prose refuses is worse
 * than no figure, so this one stays unbuilt.
 *
 * The captions, the alt text and the citation markers live beside the prose in
 * `src/content/pages/method.tsx`. What is here is the drawing and the short
 * labels the geometry cannot do without, and those are copy too.
 */

/* ------------------------------------------------------------------ */
/* Shared local pieces                                                 */
/* ------------------------------------------------------------------ */

/** How many of the three segments a band fills. The live rubric's numbers. */
const FILL: Record<Band, number> = { low: 1, medium: 2, high: 3, unknown: 0 };

const BAND_COLOR: Record<Band, string> = {
  low: FIG_COLOR.bandLow,
  medium: FIG_COLOR.bandMedium,
  high: FIG_COLOR.bandHigh,
  unknown: FIG_COLOR.bandUnknown,
};

const SEG_W = 6;
const SEG_GAP = 3;
const SEG_H = 14;
/** Left edge of a label sitting after a meter. */
const METER_W = SEG_W * 3 + SEG_GAP * 2;

/**
 * The band meter, redrawn in SVG.
 *
 * It is deliberately the same mark as `BandMeter` on the rest of the page:
 * three segments filled one, two or three, so the ordinal survives with no
 * colour at all, and the written label beside it carries the word. Not yet
 * assessed fills none of them and hatches all three, which is the fourth
 * state's mark everywhere else on the site.
 */
function Meter({
  x,
  y,
  band,
  hatch,
}: {
  x: string | number;
  y: number;
  band: Band;
  hatch: string;
}) {
  const filled = FILL[band];
  return (
    <At x={x} y={y}>
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x={i * (SEG_W + SEG_GAP)}
          y={0}
          width={SEG_W}
          height={SEG_H}
          rx="1"
          fill={
            band === "unknown"
              ? hatch
              : i < filled
                ? BAND_COLOR[band]
                : FIG_COLOR.rule
          }
          stroke={band === "unknown" ? FIG_COLOR.ruleStrong : undefined}
          strokeWidth={band === "unknown" ? 1 : undefined}
        />
      ))}
    </At>
  );
}

/* ------------------------------------------------------------------ */
/* One model, quoted twice                                             */
/* ------------------------------------------------------------------ */

const PROVENANCE_ID = "method-provenance";

/** The spine the derived documents hang off, and the inset they sit at. */
const SPINE_X = "5%";
const BRANCH_X = "10%";

const PROVENANCE_HEIGHT = 392;

/**
 * Where both scenarios come from, drawn as one source and its descendants.
 *
 * The misreading the page is built to stop is that a federal number and a
 * provincial number that match are two studies agreeing. They are not: the
 * province asked for the runs, and then adopted the results. So the drawing
 * gives the catalogue one box and hangs the provincial documents off it, which
 * makes the direction of the borrowing visible in a way three paragraphs
 * cannot.
 *
 * The insurance industry sits below a rule, unconnected to the spine, because
 * it is the one place an independent estimate comes from and folding it into
 * the tree would lose exactly the distinction the section draws.
 */
export function MethodOneModel() {
  return (
    <FigureCanvas id={PROVENANCE_ID} height={PROVENANCE_HEIGHT}>
      <FigHeading y={14}>Both scenarios come from one catalogue</FigHeading>
      <FigValue y={41}>One model, quoted twice</FigValue>

      {/* The model itself. */}
      <rect
        x="0"
        y={58}
        width="100%"
        height={48}
        rx="3"
        fill={FIG_COLOR.paper}
        stroke={FIG_COLOR.ruleStrong}
        strokeWidth={FIG_STROKE}
      />
      <FigText x={12} y={80} weight={600} fill={FIG_COLOR.ink}>
        Geological Survey of Canada
      </FigText>
      <FigText x={12} y={98} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
        Scenario catalogue: magnitude 9.0 and 7.0
      </FigText>

      {/* The spine, and an elbow into each document that draws on it. */}
      <rect
        x={SPINE_X}
        y={106}
        width="1"
        height={107}
        fill={FIG_COLOR.ruleStrong}
      />
      <rect
        x={SPINE_X}
        y={147}
        width="5%"
        height="1"
        fill={FIG_COLOR.ruleStrong}
      />
      <rect
        x={SPINE_X}
        y={213}
        width="5%"
        height="1"
        fill={FIG_COLOR.ruleStrong}
      />

      <rect
        x={BRANCH_X}
        y={120}
        width="90%"
        height={54}
        rx="3"
        fill={FIG_COLOR.paper}
        stroke={FIG_COLOR.ruleStrong}
        strokeWidth={FIG_STROKE}
      />
      <At x={BRANCH_X}>
        <FigText x={12} y={141} weight={600} fill={FIG_COLOR.ink}>
          Provincial Cascadia casualty figures
        </FigText>
        <FigText x={12} y={160} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
          Attributed to the federal scenario
        </FigText>
      </At>

      <rect
        x={BRANCH_X}
        y={186}
        width="90%"
        height={54}
        rx="3"
        fill={FIG_COLOR.paper}
        stroke={FIG_COLOR.ruleStrong}
        strokeWidth={FIG_STROKE}
      />
      <At x={BRANCH_X}>
        <FigText x={12} y={207} weight={600} fill={FIG_COLOR.ink}>
          Provincial crustal figures
        </FigText>
        <FigText x={12} y={226} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
          Developed by Natural Resources Canada
        </FigText>
      </At>

      <FigText y={262}>The province asked for these scenarios.</FigText>
      <FigText y={282}>Adopted rather than independently confirmed.</FigText>

      <FigRule y={302} />

      <FigHeading y={330}>Where an independent estimate exists</FigHeading>
      <FigValue y={357}>The insurance industry</FigValue>
      <FigText y={380}>Not drawn from the federal catalogue.</FigText>
    </FigureCanvas>
  );
}

/* ------------------------------------------------------------------ */
/* Two systems, one band, two kinds of uncertainty                     */
/* ------------------------------------------------------------------ */

const MEDIUM_ID = "method-medium";

const MEDIUM_HEIGHT = 348;

/** A solid swatch for what a document states, a hatched one for the gap. */
function KeyRow({
  y,
  hatched,
  hatch,
  children,
}: {
  /** Baseline of the label. The swatch sits on it. */
  y: number;
  hatched?: boolean;
  hatch: string;
  children: ReactNode;
}) {
  return (
    <>
      <rect
        x="0"
        y={y - 10}
        width={12}
        height={12}
        rx="1"
        fill={hatched ? hatch : FIG_COLOR.muted}
        stroke={hatched ? FIG_COLOR.ruleStrong : undefined}
        strokeWidth={hatched ? 1 : undefined}
      />
      <FigText x={22} y={y} fill={FIG_COLOR.ink}>
        {children}
      </FigText>
    </>
  );
}

/**
 * Two systems banded Medium, and the two different things Medium is hiding.
 *
 * Both panels carry the same meter and the same word, because the band really
 * is the same. What differs is the shape of what is missing, so each panel
 * pairs one solid swatch with one hatched one: communications has a rule that
 * has not been written, health care has a comparison nobody has made. Drawing
 * the 65 per cent as a bar would have made the panels look like a comparison
 * of magnitudes, which is not what separates them.
 */
export function MethodTwoMediums() {
  const hatch = `url(#${hatchId(MEDIUM_ID)})`;
  const PANEL_B = 170;

  return (
    <FigureCanvas id={MEDIUM_ID} height={MEDIUM_HEIGHT}>
      <FigHeading y={14}>Communications</FigHeading>
      <Meter x={0} y={28} band="medium" hatch={hatch} />
      <FigText
        x={METER_W + 12}
        y={41}
        size={FIG_TYPE.value}
        weight={700}
        fill={FIG_COLOR.ink}
      >
        Medium
      </FigText>

      <KeyRow y={66} hatch={hatch}>
        No backup power is required today
      </KeyRow>
      <FigText x={22} y={84} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
        At a mobile phone site
      </FigText>
      <KeyRow y={108} hatched hatch={hatch}>
        The regulator has not decided
      </KeyRow>
      <FigText y={134}>The uncertainty is about the rules.</FigText>

      <FigRule y={PANEL_B - 20} />

      <FigHeading y={PANEL_B + 14}>Health care</FigHeading>
      <Meter x={0} y={PANEL_B + 28} band="medium" hatch={hatch} />
      <FigText
        x={METER_W + 12}
        y={PANEL_B + 41}
        size={FIG_TYPE.value}
        weight={700}
        fill={FIG_COLOR.ink}
      >
        Medium
      </FigText>

      <KeyRow y={PANEL_B + 66} hatch={hatch}>
        About 65 per cent completely damaged
      </KeyRow>
      <FigText
        x={22}
        y={PANEL_B + 84}
        size={FIG_TYPE.tick}
        fill={FIG_COLOR.faint}
      >
        One health authority&rsquo;s buildings
      </FigText>
      <FigText
        x={22}
        y={PANEL_B + 100}
        size={FIG_TYPE.tick}
        fill={FIG_COLOR.faint}
      >
        At the shaking level the code designs for
      </FigText>
      <KeyRow y={PANEL_B + 124} hatched hatch={hatch}>
        Casualties never compared to beds
      </KeyRow>
      <FigText y={PANEL_B + 150}>The damage is known.</FigText>
      <FigText y={PANEL_B + 168}>The comparison is missing.</FigText>
    </FigureCanvas>
  );
}

/* ------------------------------------------------------------------ */
/* Three hatched cells, two reasons                                    */
/* ------------------------------------------------------------------ */

const HATCHED_ID = "method-hatched";

const COL_A = "0%";
const COL_B = "54%";
const COL_A_MID = "23%";
const COL_B_MID = "77%";

const HATCHED_HEIGHT = 378;

/** One row of the grid: a system, and its band under each scenario. */
function GridRow({
  y,
  label,
  cascadia,
  crustal,
  cascadiaLabel,
  crustalLabel,
  reason,
  hatch,
}: {
  /** Baseline of the row label. */
  y: number;
  label: string;
  cascadia: Band;
  crustal: Band;
  cascadiaLabel: string;
  crustalLabel: string;
  reason: string;
  hatch: string;
}) {
  return (
    <>
      <FigText y={y} weight={600} fill={FIG_COLOR.ink}>
        {label}
      </FigText>
      <Meter x={COL_A} y={y + 8} band={cascadia} hatch={hatch} />
      <At x={COL_A}>
        <FigText x={METER_W + 8} y={y + 19} size={FIG_TYPE.tick}>
          {cascadiaLabel}
        </FigText>
      </At>
      <Meter x={COL_B} y={y + 8} band={crustal} hatch={hatch} />
      <At x={COL_B}>
        <FigText x={METER_W + 8} y={y + 19} size={FIG_TYPE.tick}>
          {crustalLabel}
        </FigText>
      </At>
      <FigText y={y + 44} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
        {reason}
      </FigText>
    </>
  );
}

/** The two scenario columns, repeated above each group so neither is orphaned. */
function ColumnHeads({ y }: { y: number }) {
  return (
    <>
      <FigText
        x={COL_A_MID}
        y={y}
        size={FIG_TYPE.tick}
        fill={FIG_COLOR.faint}
        anchor="middle"
      >
        Cascadia M9
      </FigText>
      <FigText
        x={COL_B_MID}
        y={y}
        size={FIG_TYPE.tick}
        fill={FIG_COLOR.faint}
        anchor="middle"
      >
        Crustal M7
      </FigText>
    </>
  );
}

/**
 * The three hatched cells, sorted by why they are hatched.
 *
 * The rule across the middle is doing the work. Above it are two rows whose
 * asymmetry is about which documents happen to exist; below it is the one row
 * whose asymmetry is about the earthquakes themselves. Put on one grid with no
 * rule they would read as the same kind of difference, which is the confusion
 * the section was written to clear up.
 */
export function MethodHatchedReasons() {
  const hatch = `url(#${hatchId(HATCHED_ID)})`;

  return (
    <FigureCanvas id={HATCHED_ID} height={HATCHED_HEIGHT}>
      <FigHeading y={14}>Why three cells are hatched</FigHeading>
      <FigValue y={41}>Two different reasons</FigValue>

      <FigText y={72} weight={600} fill={FIG_COLOR.ink}>
        What the documents happen to cover
      </FigText>
      <ColumnHeads y={94} />

      <GridRow
        y={118}
        label="Dams and reservoirs"
        cascadia="unknown"
        crustal="unknown"
        cascadiaLabel="Not yet assessed"
        crustalLabel="Not yet assessed"
        reason="Assessed, but not for earthquakes"
        hatch={hatch}
      />
      <GridRow
        y={186}
        label="Port, airport and ferry terminals"
        cascadia="medium"
        crustal="unknown"
        cascadiaLabel="Medium"
        crustalLabel="Not yet assessed"
        reason="The same study modelled no crustal earthquake"
        hatch={hatch}
      />

      <FigRule y={248} />

      <FigText y={276} weight={600} fill={FIG_COLOR.ink}>
        How the earthquakes genuinely differ
      </FigText>
      <ColumnHeads y={298} />

      <GridRow
        y={322}
        label="Where help comes from"
        cascadia="high"
        crustal="low"
        cascadiaLabel="High"
        crustalLabel="Low"
        reason="One shakes the whole coast at once"
        hatch={hatch}
      />
    </FigureCanvas>
  );
}
