import Link from "next/link";
import { Cite } from "@/components/citation";
import { Figure, Prose } from "@/components/page-parts";
import { MethodOneModel } from "@/components/figures/method";
import type { PageModule } from "./index";

/**
 * How the site reads its evidence. The body of `/method/`, ported from
 * `docs/copy/method.md`. The words are the copy's, verbatim.
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
 * without a lever, and this page states no doom. Writing one here would be
 * writing copy.
 */
export const method: PageModule = {
  meta: {
    route: "/method/",
    title: "How this site works",
    description:
      "Every statement on this site comes from a published document. How the evidence is read, and where it stops.",
    nav: "Method",
    standfirst:
      "Every statement on this site comes from a published document. This page explains how that evidence is read, and where it stops.",
    /**
     * First-cited order, which is the order the markers are numbered in. It is
     * also the order of "Sources on this page" at the foot of the copy file.
     */
    references: [
      "BCH-WESTEND-25",
      "NRCAN-SCEN",
      "DCRRA-2025",
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
      title: "Every statement reaches its document",
      body: (
        <Prose>
          <p>
            Each system page gives one sentence saying how the system fails,
            how long the disruption is expected to last where a document
            states it, and a link to that document. Durations stay in the
            source’s own words, such as “days to weeks” or “many months”, and
            are never sharpened into a number the source does not give.
          </p>
          <p>
            Most published work assesses one design earthquake, so one sentence
            usually stands for both scenarios. Where the two earthquakes
            genuinely differ, as they do for where help comes from, the page
            shows each.
          </p>
          <p>
            Where no document states how long a system would be out, the page
            says so. That is a statement about the public record, not about the
            infrastructure: a missing estimate says nothing about whether a
            system would hold up.
          </p>
          <p>
            A sentence with a number in it and nothing to click is a mistake.
          </p>
        </Prose>
      ),
    },

    {
      title: "Some evidence covers only part of the region",
      body: (
        <Prose>
          <p>
            The site covers the whole region. A lot of the evidence covers one
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
            It is the only measured evidence available, so the site uses it,
            and keeps the sentence narrow: downtown, and then the gap.
          </p>
        </Prose>
      ),
    },

    {
      title: "Governments use the same public loss model",
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
            The provincial figures come directly from the federal model. A
            federal document and a provincial document giving the same number
            are one model quoted twice. Where a genuinely independent estimate
            exists, it
            comes from the insurance industry, and it is named as such wherever
            it appears.
          </p>
          <Figure
            alt="Both scenarios come from one Geological Survey of Canada catalogue, which the province asked for and then adopted for its own Cascadia casualty figures and crustal figures. Matching federal and provincial figures are one model quoted twice. The insurance-industry estimate is independent and appears separately."
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
            Every one of those modelled figures covers “only damage to
            buildings, and their inhabitants, from earthquake shaking”. Fire
            following, landslides, liquefaction and aftershocks are “not
            currently included”. <Cite id="NRCAN-SCEN" /> Natural Resources
            Canada draws the conclusion itself: with those hazards left out,
            “the estimates herein are likely to represent a minimum estimate on
            impacts.”{" "}
            <Cite id="GSC-OF-8853" />
          </p>
        </Prose>
      ),
    },

    {
      title: "What past earthquakes can show us",
      body: (
        <Prose>
          <p>
            Past earthquakes elsewhere explain a mechanism, and nothing more.
            The 2011 earthquake in Christchurch, New Zealand, shows what months
            without sewer service does to a city. The 1995 earthquake in Kobe,
            Japan, shows what happens to a port. Neither tells anyone how long a
            pipe in Richmond would be broken.
          </p>
          <p>
            No figure from another earthquake is used as a number for the Lower
            Mainland anywhere here. Where a past earthquake elsewhere is
            mentioned, it is labelled with where and when it happened.
          </p>
        </Prose>
      ),
    },

    {
      title: "Similar figures may measure different things",
      body: (
        <Prose>
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
      title: "What is here will change as evidence improves",
      body: (
        <Prose>
          <p>
            The documents this site reads are still being written. Four pieces
            of work are outstanding, and each of them could change what a page
            says.
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
