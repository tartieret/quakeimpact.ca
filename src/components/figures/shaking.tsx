import {
  At,
  FIG_COLOR,
  FIG_STROKE,
  FIG_TYPE,
  FigText,
  FigureCanvas,
  pct,
} from "./figure-kit";

/**
 * The figure on `/shaking/`.
 *
 * The first pictogram on this site, and the grammar in `README.md` beside this
 * file does not reach it: solid fill, hatch, axis and tick all encode
 * quantities, and there is no quantity here. A pictogram states a body
 * position, so it carries no axis, no scale and no fill grammar. If one ever
 * seems to need an axis, it is the wrong drawing.
 *
 * What it does inherit is everything else. No `viewBox`: the three panels are
 * placed as percentages and the bodies are drawn in pixels inside `At`, so a
 * person is the same physical size on a phone and on a laptop. A bar should
 * stretch when the column widens; a person should not.
 *
 * The drawing is made from the written instruction in PreparedBC's guide, not
 * traced from anybody's artwork. The Earthquake Country Alliance graphic the
 * province credits for its own wheelchair panel carries a bare copyright
 * notice and states no licence, and the rule in `docs/licensing.md` is that an
 * unconfirmed licence means link out rather than reproduce.
 *
 * The caption, the alt text and the citation markers live beside the prose in
 * `src/content/pages/shaking.tsx`. The caption carries the two things one body
 * cannot draw: what to do where there is no sturdy furniture, and the same
 * three steps for a wheelchair, a walker or a cane.
 */

const ID = "drop-cover-hold-on";

/** Three panels, read left to right as one sequence. */
const PANELS = 3;

/* ------------------------------------------------------------------ */
/* Vertical layout, in pixels                                          */
/* ------------------------------------------------------------------ */

/**
 * The top of the drawing band. Bodies are drawn in pixels below this.
 *
 * No `FigHeading` and no `FigValue` above it. Every other figure here writes
 * its finding out in words at `FigValue` size because a reader who cannot
 * resolve the geometry still needs the number. This one has no number, and its
 * finding is three words that are already under the three panels and already
 * in the sentence the figure sits beneath. Stating them a third time was
 * repetition, not a fallback.
 */
const DRAW_TOP = 8;
/** The drawing band's own height. The floor line sits on its last pixel. */
const DRAW_H = 76;

const STEP_Y = DRAW_TOP + DRAW_H + 24;
const DESC_Y = STEP_Y + 18;
const DESC2_Y = DESC_Y + 16;

const GUARD_Y = DESC2_Y + 22;
const GUARD2_Y = GUARD_Y + 18;

const HEIGHT = GUARD2_Y + 14;

/* ------------------------------------------------------------------ */
/* The body, in pixels                                                 */
/* ------------------------------------------------------------------ */

/**
 * Pictogram weights, which are not `FIG_STROKE`.
 *
 * `FIG_STROKE` is the weight of a rule or an outline, and a body here is about
 * seventy pixels end to end: a limb drawn at 1.5 px reads as a scratch rather
 * than an arm. So the floor, which is a rule, keeps `FIG_STROKE`, and the body
 * and the table are drawn at the weights below. Naming them once is what keeps
 * the figure looking like one hand.
 */
const TORSO_W = 13;
const LIMB_W = 7;
const THIGH_W = 8;
const HEAD_R = 8;
/** The closed hand on the table leg, which a round cap alone does not say. */
const FIST_R = 5.5;

/** The floor every body kneels on, and the height the table legs reach. */
const FLOOR = DRAW_H;

/**
 * The drawing's own half-width, in pixels.
 *
 * A panel is about 106 px on a 390 px phone, so 44 either side of the anchor
 * is the whole of the room there is. The body is drawn small enough to clear
 * the table legs inside it: a head touching a leg merges into it at this size
 * and the pose stops reading.
 */
const HALF_W = 44;

/** A limb or a torso: a round-capped capsule in the load-bearing grey. */
function Limb({ d, width = LIMB_W }: { d: string; width?: number }) {
  return (
    <path
      d={d}
      fill="none"
      stroke={FIG_COLOR.mark}
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

/**
 * The floor. Furniture under the thumb test: cover it and the pose still
 * reads, so it stays on the quiet grey rather than the load-bearing one.
 */
function Floor() {
  return (
    <line
      x1={-HALF_W - 2}
      y1={FLOOR}
      x2={HALF_W + 2}
      y2={FLOOR}
      stroke={FIG_COLOR.track}
      strokeWidth={FIG_STROKE}
    />
  );
}

const TOP_Y = 18;
const TOP_H = 5;
const LEG_W = 4;

/**
 * A sturdy table, seen from the side.
 *
 * Load-bearing: it is the whole of what "cover" means, and covering it leaves
 * a person crouching in an empty room. Drawn solid because at four pixels a
 * leg is line work, and because a table outlined at `FIG_STROKE` looks like
 * something that would not hold.
 */
function Table() {
  return (
    <g fill={FIG_COLOR.mark}>
      <rect x={-HALF_W} y={TOP_Y} width={HALF_W * 2} height={TOP_H} rx={1} />
      <rect
        x={-HALF_W + 2}
        y={TOP_Y + TOP_H}
        width={LEG_W}
        height={FLOOR - TOP_Y - TOP_H}
      />
      <rect
        x={HALF_W - 2 - LEG_W}
        y={TOP_Y + TOP_H}
        width={LEG_W}
        height={FLOOR - TOP_Y - TOP_H}
      />
    </g>
  );
}

/**
 * Shin, thigh and torso, ending at the shoulder, which is at 12,47 and is
 * where every arm and neck below starts.
 *
 * All three panels are the same body in the same place. Only the arms and the
 * head change, so the eye reads a sequence rather than three different people.
 */
function LowerBody() {
  return (
    <>
      <Limb d="M -10 70 L -28 73" />
      <Limb d="M -8 50 L -10 70" width={THIGH_W} />
      <Limb d="M -8 50 L 12 47" width={TORSO_W} />
    </>
  );
}

/**
 * Drop. Hands and knees, before the shaking does it for you.
 *
 * No table in this panel on purpose. The instruction is to get down first
 * rather than to cross a room looking for cover, and the copy above the figure
 * is that nobody crosses a room.
 */
function PoseDrop() {
  return (
    <>
      <Floor />
      <LowerBody />
      <Limb d="M 12 47 L 13 59 L 15 72" />
      <Limb d="M 12 47 L 19 44" />
      <circle cx={24} cy={40} r={HEAD_R} fill={FIG_COLOR.mark} />
    </>
  );
}

/**
 * The head tucked down and forward of the shoulder, with the neck bridging the
 * gap. Both sheltered poses share it, and the tuck is what separates them from
 * the crawl in the first panel.
 */
function TuckedHead() {
  return (
    <>
      <Limb d="M 12 47 L 20 53" />
      <circle cx={26} cy={59} r={HEAD_R} fill={FIG_COLOR.mark} />
    </>
  );
}

/**
 * The forearm over the head and neck.
 *
 * The elbow goes up and back over the spine rather than forward, which is the
 * only route with room for it: there are twenty-eight pixels between the
 * underside of the table and the top of the head, and an arm folded forward
 * into that gap merges with both and reads as a hunched back.
 */
function CoveringArm() {
  return <Limb d="M 12 47 L 1 33 L 26 42" />;
}

/** Cover. Under the table, head tucked, a forearm across the head and neck. */
function PoseCover() {
  return (
    <>
      <Floor />
      <Table />
      <LowerBody />
      <Limb d="M 12 47 L 12 59 L 14 72" />
      <TuckedHead />
      <CoveringArm />
    </>
  );
}

/**
 * Hold on. The same pose, with the supporting hand closed on the table leg.
 *
 * Panels two and three differ by one arm, which is the point: you are already
 * under the table by the time holding on is the instruction. The fist is drawn
 * because a capsule ending on a leg reads as a hand resting against it, and
 * the guide's word is hold.
 */
function PoseHold() {
  return (
    <>
      <Floor />
      <Table />
      <LowerBody />
      <Limb d="M 12 47 L 25 46 L 37 44" />
      <circle cx={39} cy={43.5} r={FIST_R} fill={FIG_COLOR.mark} />
      <TuckedHead />
      <CoveringArm />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* The figure                                                          */
/* ------------------------------------------------------------------ */

/**
 * One step. The pose is anchored at the panel's centre and drawn in pixels;
 * the words under it are placed at the same percentage so they travel with it.
 *
 * `desc` is broken by hand because SVG text does not wrap, and each line has
 * to fit the roughly 106 px a panel gets on a 390 px phone.
 */
const STEPS = [
  { step: "Drop", desc: ["Hands and knees"], pose: <PoseDrop /> },
  { step: "Cover", desc: ["Head and neck", "under a table"], pose: <PoseCover /> },
  { step: "Hold on", desc: ["Until the", "shaking stops"], pose: <PoseHold /> },
] as const;

/**
 * The three steps the province publishes for the first seconds.
 *
 * There is no number in this drawing and nothing to measure off it. It exists
 * because an instruction about where to put your body is one of the few things
 * on this site a picture says faster than a sentence, and because the people
 * the province counts as badly hurt are the ones who ran.
 */
export function DropCoverHoldOn() {
  return (
    <FigureCanvas id={ID} height={HEIGHT}>
      {STEPS.map(({ step, desc, pose }, i) => {
        const x = pct(i + 0.5, PANELS);
        return (
          <g key={step}>
            <At x={x} y={DRAW_TOP}>
              {pose}
            </At>
            <FigText
              x={x}
              y={STEP_Y}
              anchor="middle"
              weight={600}
              fill={FIG_COLOR.ink}
            >
              {step}
            </FigText>
            {desc.map((line, j) => (
              <FigText
                key={line}
                x={x}
                y={j === 0 ? DESC_Y : DESC2_Y}
                anchor="middle"
                size={FIG_TYPE.tick}
                fill={FIG_COLOR.faint}
              >
                {line}
              </FigText>
            ))}
          </g>
        );
      })}

      <FigText y={GUARD_Y}>Then count to 60 before getting up.</FigText>
      <FigText y={GUARD2_Y}>Do not run outside.</FigText>
    </FigureCanvas>
  );
}
