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
} from "./figure-kit";
/**
 * The figure on `/method/`.
 *
 * Every word and every relationship drawn here is already in
 * `docs/copy/method.md`. None of them carries a quantity, because the page
 * carries almost none: its subject is where a figure came from and what kind
 * of thing is missing, not how big anything is. So there is no bar and no axis
 * in this file. The marks are the site's own grammar used at its smallest:
 * a solid swatch is something a document states, and a rule separates two
 * things that must not be read as one.
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

      {/* The model itself.

          Every box on this figure is `fill="none"` rather than paper. Nothing
          passes under one, so a paper rectangle here would be paper drawn on
          paper: a mark measuring 1:1 against its own ground, which is the same
          defect as an arrowhead in the colour of the bar it sits on. A knockout
          is only a knockout where there is something under it to clear, and the
          outline is what the reader sees either way. */}
      <rect
        x="0"
        y={58}
        width="100%"
        height={48}
        rx="3"
        fill="none"
        stroke={FIG_COLOR.mark}
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
        fill={FIG_COLOR.mark}
      />
      <rect
        x={SPINE_X}
        y={147}
        width="5%"
        height="1"
        fill={FIG_COLOR.mark}
      />
      <rect
        x={SPINE_X}
        y={213}
        width="5%"
        height="1"
        fill={FIG_COLOR.mark}
      />

      <rect
        x={BRANCH_X}
        y={120}
        width="90%"
        height={54}
        rx="3"
        fill="none"
        stroke={FIG_COLOR.mark}
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
        fill="none"
        stroke={FIG_COLOR.mark}
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
      <FigText y={282}>The province adopted the federal model.</FigText>

      <FigRule y={302} />

      <FigHeading y={330}>Where an independent estimate exists</FigHeading>
      <FigValue y={357}>The insurance industry</FigValue>
      <FigText y={380}>Not drawn from the federal catalogue.</FigText>
    </FigureCanvas>
  );
}
