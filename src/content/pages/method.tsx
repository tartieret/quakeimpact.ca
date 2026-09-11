import Link from "next/link";
import { Cite } from "@/components/citation";
import { Figure, Prose } from "@/components/page-parts";
import {
  MethodHatchedReasons,
  MethodOneModel,
  MethodTwoMediums,
} from "@/components/figures/method";
import { BandMeter } from "@/components/band";
import { BANDS } from "@/content/site";
import type { Band } from "@/content/types";
import type { PageModule } from "./index";

/**
 * Method and bands. The body of `/method/`, ported from `docs/copy/method.md`.
 *
 * The words are the copy's, verbatim. Two things a reader sees are not in the
 * copy file, and both are furniture rather than claims:
 *
 * - The rubric under the first heading is drawn from `BANDS` in
 *   `@/content/site` rather than transcribed from the copy's table, so the
 *   definitions the reader is shown are the definitions the grid is banded
 *   against and the two cannot drift. The copy's table supplies the three
 *   questions; each row supplies its own answers.
 * - The hatched sample beside the fourth-state sentence, so that "drawn
 *   hatched" is something the reader can see rather than take on trust.
 *
 * There is no table of return periods, and no figure of them either. The
 * copy's point is that a dam's 1-in-10,000-year earthquake and a building's
 * 1-in-2,475-year one are not points on one scale; drawing them on one axis
 * would assert the comparability the sentence denies, and drawing them on two
 * axes side by side reads as one axis broken in half. The reasoning is written
 * out at the head of `@/components/figures/method`.
 *
 * The copy has no `## What you can do`, so this module has no `lever`. The
 * field is optional for this page and this page alone: the principle is no doom
 * without a lever, and the rubric states no doom. Writing one here would be
 * writing copy.
 */

/** The three coloured bands, in the order the copy's table gives them. */
const COLOURED: Band[] = ["low", "medium", "high"];

const TERM = "text-xs tracking-wide text-ink-faint uppercase";

/**
 * A band's name, with its meter. The meter carries the ordinal as filled
 * segments and the label carries the word, so neither rests on hue. It is not
 * a heading: the rubric is a list of definitions inside a section, and a run
 * of `<h3>` reading "Low", "Medium", "High" would fill the contents rail with
 * words that say nothing about the world.
 */
function BandName({ band }: { band: Band }) {
  return (
    <div className="flex items-center gap-3">
      <BandMeter band={band} />
      <span className="font-display text-xl tracking-tight">
        {BANDS[band].label}
      </span>
    </div>
  );
}

export const method: PageModule = {
  meta: {
    route: "/method/",
    title: "How the impact bands work",
    nav: "Method & bands",
    standfirst:
      "Every system carries a band for each scenario, a sentence saying how it fails, and a link to the document that says so. This page explains what the bands mean and where they come from.",
    /**
     * First-cited order, which is the order the markers are numbered in. It is
     * also the order of "Sources on this page" at the foot of the copy file.
     */
    references: [
      "MV-DSP-2026",
      "MV-CAPITAL-2027",
      "AIR-2013",
      "DCRRA-2025",
      "CRTC-2025-226",
      "DCRRA-APPC",
      "BCH-WESTEND-25",
      "NRCAN-SCEN",
      "PEIRS",
      "GSC-OF-8853",
      "EGBC-DSR-GL",
      "MVSMMP",
      "MV-DWMP-26",
      "BCH-DAMFAQ",
    ],
  },

  sections: [
    {
      title: "A band answers three questions, not one",
      body: (
        <Prose>
          <p>
            Impacts here are given as Low, Medium or High rather than as a
            number of days. Most published work assesses one design earthquake,
            so inventing a figure in between would be modelling rather than
            reporting.
          </p>
          <p>A band is assigned on three things together.</p>
          <ul className="flex list-none flex-col gap-px overflow-hidden rounded-xl border border-rule bg-rule p-0">
            {COLOURED.map((band) => (
              <li key={band} className="mt-0 bg-paper-raised p-5">
                <BandName band={band} />
                <dl className="mt-4 grid gap-x-4 gap-y-2 text-sm sm:grid-cols-[9rem_1fr]">
                  <dt className={TERM}>How long</dt>
                  <dd>{BANDS[band].duration}</dd>
                  <dt className={TERM}>How widely</dt>
                  <dd>{BANDS[band].extent}</dd>
                  <dt className={TERM}>What it is waiting on</dt>
                  <dd>{BANDS[band].dependency}</dd>
                </dl>
              </li>
            ))}
          </ul>
          <p>
            The same three questions are asked of every system, so that High for
            sewer service and High for roads mean comparable things.
          </p>
          <div className="rounded-xl border border-rule bg-paper-raised p-5">
            <BandName band="unknown" />
            <p className="mt-3 leading-relaxed">
              A fourth state, <strong>not yet assessed</strong>, is drawn
              hatched rather than coloured. It is a real answer, not a blank
              waiting to be filled.
            </p>
          </div>
        </Prose>
      ),
    },

    {
      title:
        "A band is a reading of the public record, not a verdict on the equipment",
      body: (
        <Prose>
          <p>
            A system banded High is a system somebody has assessed and found
            slow to restore. A system marked not yet assessed is a system nobody
            has published an assessment of, and that says nothing at all about
            whether it would hold up.
          </p>
          <p>
            Three cells on the grid are hatched today, and they are hatched for
            two different reasons.
          </p>
          <p>
            Dams and reservoirs are hatched in both scenarios. Cleveland and
            Seymour Falls dams were each reviewed by an engineer in 2024, as the
            law requires every seven years for dams in the top consequence
            class. Neither review identified an unsafe condition, and neither
            published conclusion mentions earthquakes. <Cite id="MV-DSP-2026" />{" "}
            Metro Vancouver is still paying for seismic evaluations of both
            dams, and the upgrade work at Cleveland has not started.{" "}
            <Cite id="MV-CAPITAL-2027" /> So the dams have been assessed, but
            not for this, which is a different thing from never having been
            looked at.
          </p>
          <p>
            Port, airport and ferry terminals carry a band in one scenario and a
            hatch in the other. The megathrust column is banded Medium because a
            study modelled that earthquake. <Cite id="AIR-2013" /> The crustal
            column is hatched because the same study modelled no crustal
            earthquake. Nobody is saying the terminals do better or worse in the
            nearer earthquake. Nobody has looked.
          </p>
          <p>
            That is worth separating from the other row on the grid that changes
            between the two scenarios. Where help comes from is High for the
            megathrust and Low for the crustal earthquake because the two
            earthquakes genuinely differ: one shakes the whole coast at once,
            and the other does not. Port, airport and ferry terminals differ
            only in how much has been written down. One asymmetry is about the
            earthquakes. The other is about which documents happen to exist.
          </p>
          <Figure
            alt="Three cells on the grid are hatched. Dams and reservoirs are hatched in both scenarios, and port, airport and ferry terminals only in the crustal one, because of which documents happen to exist; where help comes from changes between High and Low because the two earthquakes genuinely differ. A hatch means nobody has published an assessment, never that the system would do badly."
            caption={
              <>
                The two rows above the rule differ because of which documents
                exist. <Cite id="MV-DSP-2026" /> <Cite id="AIR-2013" /> The row
                below it differs because the two earthquakes do. The meter
                carries the band as filled segments, so the ordinal reads
                without colour.
              </>
            }
          >
            <MethodHatchedReasons />
          </Figure>
          <p>Bands move when a document appears, in either direction.</p>
        </Prose>
      ),
    },

    {
      title: "Every coloured cell comes with a sentence and a source",
      body: (
        <Prose>
          <p>
            A colour on its own is an assertion. Each cell on the grid carries
            the band, one sentence saying how the system fails, and a link to
            the document the sentence comes from. A cell that cannot carry all
            three is not coloured.
          </p>
          <p>
            The same rule applies to the writing around the grid. A sentence
            with a number in it and nothing to click is a mistake, and worth
            telling us about.
          </p>
        </Prose>
      ),
    },

    {
      title: "Two systems can share a band for different reasons",
      body: (
        <Prose>
          <p>
            Medium is the label most likely to mislead, because uncertainty
            comes in kinds.
          </p>
          <p>
            Communications is Medium because the province’s megathrust
            assessment says disruption continues for days to weeks, with what
            capacity survives prioritised for emergency personnel.{" "}
            <Cite id="DCRRA-2025" /> The uncertainty is about everything around
            that sentence: nothing requires a mobile phone site to hold any
            backup power at all, the regulator opened a proceeding to decide
            what the requirement should be and has not decided,{" "}
            <Cite id="CRTC-2025-226" /> and no carrier has published what it
            holds or how long it would take.
          </p>
          <p>
            Health care is Medium because about 65 per cent of one health
            authority’s buildings would likely be completely damaged at the
            shaking level the current building code designs for, and no
            published document compares the expected casualties to the number of
            beds the region has. <Cite id="DCRRA-APPC" /> The damage is known.
            The comparison is missing.
          </p>
          <p>
            Both are Medium. They are not the same situation, and each system
            page says which one it is in.
          </p>
          <Figure
            alt="Communications and health care are both banded Medium for different reasons: communications because nothing requires a mobile phone site to hold backup power and the regulator has not decided, and health care because about 65 per cent of one health authority's buildings would likely be completely damaged at the shaking level the code designs for and nobody has compared expected casualties to the beds the region has. The shared band does not mean the two situations are the same."
            caption={
              <>
                The same band, and a different kind of thing missing behind it.
                Communications is waiting on a rule the regulator has not
                written. <Cite id="CRTC-2025-226" /> Health care has the damage
                figure and not the comparison. <Cite id="DCRRA-APPC" /> A solid
                swatch is what a document states, a hatched one is the gap.
              </>
            }
          >
            <MethodTwoMediums />
          </Figure>
        </Prose>
      ),
    },

    {
      title: "Some bands are wider than the evidence behind them",
      body: (
        <Prose>
          <p>
            The grid covers the whole region. A lot of the evidence covers one
            neighbourhood.
          </p>
          <p>
            Electricity is the clearest case. BC Hydro told its regulator in
            November 2025 that a large earthquake could leave up to two thirds
            of <strong>downtown</strong> customers without power, that it “could
            take several weeks to restore power to customers”, and years to
            fully restore the system. <Cite id="BCH-WESTEND-25" /> Nothing
            equivalent has been published for Surrey, Richmond or the North
            Shore.
          </p>
          <p>
            The row is banded High because the grid is regional and that is the
            only measured evidence available. The sentence beside it stays
            narrow: downtown, and then the gap. A reader downtown learns
            something true about where they live. A reader in Surrey learns that
            nobody has published an answer, which is also true and also worth
            knowing.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Canada has one public earthquake loss model, and both governments use it",
      body: (
        <Prose>
          <p>
            Both scenarios come from the Geological Survey of
            Canada’s scenario catalogue: a magnitude 9.0 full rupture of the
            Cascadia fault, and a magnitude 7.0 in the Strait of Georgia.{" "}
            <Cite id="NRCAN-SCEN" />
          </p>
          <p>
            British Columbia’s own planning documents use the same runs. The
            province’s Cascadia casualty figures are attributed to the federal
            scenario. <Cite id="DCRRA-2025" /> Its crustal figures were
            developed by Natural Resources Canada. <Cite id="PEIRS" /> The
            province asked for those scenarios in the first place.{" "}
            <Cite id="GSC-OF-8853" />
          </p>
          <p>
            The province is not independently confirming the federal figures. It
            is adopting them. So when a federal document and a provincial
            document give the same number, that is one model quoted twice, and
            not two studies agreeing. Two figures that look like a range are one
            figure seen twice. Where a genuinely independent estimate exists at
            all, it comes from the insurance industry, and it is named as such
            wherever it appears.
          </p>
          <Figure
            alt="Both scenarios come from one Geological Survey of Canada catalogue, which the province asked for and then adopted for its own Cascadia casualty figures and crustal figures, so a federal figure and a provincial figure that agree are one model quoted twice rather than two studies agreeing. The one genuinely independent estimate comes from the insurance industry and is drawn apart from the catalogue rather than inside it."
            caption={
              <>
                One catalogue, and the provincial documents that draw on it.{" "}
                <Cite id="NRCAN-SCEN" /> The province asked for the runs,{" "}
                <Cite id="GSC-OF-8853" /> and its Cascadia casualty figures{" "}
                <Cite id="DCRRA-2025" /> and crustal figures <Cite id="PEIRS" />{" "}
                come back from them. The catalogue&rsquo;s modelling covers
                damage to buildings and their inhabitants from shaking only.
              </>
            }
          >
            <MethodOneModel />
          </Figure>
          <p>
            All of these modelled figures share one boundary, which the
            catalogue states plainly. They cover “only damage to buildings, and
            their inhabitants, from earthquake shaking”. Fire following,
            landslides, liquefaction and aftershocks are “not currently
            included”. <Cite id="NRCAN-SCEN" /> Natural Resources Canada draws
            the conclusion itself: with those hazards left out, “the estimates
            herein are likely to represent a minimum estimate on impacts.”{" "}
            <Cite id="GSC-OF-8853" />
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Christchurch and Kobe show how something fails, and never how long it takes here",
      body: (
        <Prose>
          <p>
            Past earthquakes elsewhere explain a mechanism, and nothing more. Christchurch shows what months without sewer service does
            to a city. Kobe shows what happens to a port. Neither tells anyone
            how long a pipe in Richmond would be broken.
          </p>
          <p>
            No figure from another earthquake is used as a number for the Lower
            Mainland anywhere here. Where an analogue appears, it is labelled with where and when it happened.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Numbers that look comparable are often measuring different things",
      body: (
        <Prose>
          <p>Three cases come up often enough to be worth naming.</p>
          <p>
            <strong>Return periods do not carry across subjects.</strong> A dam
            in the top consequence class is assessed against a 1-in-10,000-year
            earthquake, and a building against a 1-in-2,475-year one. The
            professional guideline for dam safety reviews in British Columbia
            states that building-code ground motions should not be used for
            them, so the two figures are not points on one scale.{" "}
            <Cite id="EGBC-DSR-GL" />
          </p>
          <p>
            <strong>Insured loss is not economic loss.</strong> Both are given
            in billions and both appear in the same reports. One is what
            insurers pay.
          </p>
          <p>
            <strong>A design intent is not a prediction.</strong> “Built to
            withstand a 475-year earthquake” is a statement about what a
            structure was aimed at, not a forecast of what it will do. A figure given here for a bridge or a tunnel says which of the two it is.
          </p>
        </Prose>
      ),
    },

    {
      title: "Several of these bands are expected to change",
      body: (
        <Prose>
          <p>
            The documents the bands read are still being written. Four pieces of
            work are outstanding, and each of them could move a band.
          </p>
          <p>
            The second phase of the regional microzonation mapping, covering
            Pitt Meadows, Maple Ridge and Langley, is due in late 2026.{" "}
            <Cite id="MVSMMP" /> Metro Vancouver’s governing drinking water plan
            lists the analysis that would identify its seismic weak points as
            work still to do. <Cite id="MV-DWMP-26" /> BC Hydro describes its
            assessment of the transmission and distribution network as still
            being completed. <Cite id="BCH-DAMFAQ" /> The federal scenario
            catalogue says its excluded hazards are not <em>currently</em>{" "}
            included. <Cite id="NRCAN-SCEN" />
          </p>
          <p>
            Corrections are welcome and the{" "}
            <Link
              href="/contribute/"
              className="text-accent underline underline-offset-2"
            >
              contribute
            </Link>{" "}
            page says what is useful: a published document, a correction with a
            source behind it, or a pointer to a report.
          </p>
        </Prose>
      ),
    },
  ],
};
