import Link from "next/link";
import { Cite } from "@/components/citation";
import { Prose, Quote, VerificationNote } from "@/components/page-parts";
import type { PageModule } from "./index";

/**
 * Sanitation. The body of `/after/sanitation/`, ported from
 * `docs/copy/sanitation.md`. The words are the copy's, verbatim.
 */
export const sanitation: PageModule = {
  meta: {
    route: "/after/sanitation/",
    title: "Sanitation",
    nav: "Sanitation",
    kicker: "Life afterwards",
    standfirst: (
      <>
        A toilet needs water to flush. The province expects disruption to water
        and wastewater systems to last many months, and it names wastewater
        rather than leaving it implied. <Cite id="PEIRS" />
      </>
    ),
    /**
     * First-cited order, which is the order the markers are numbered in. It is
     * also the order of "Sources on this page" at the foot of the copy file.
     */
    references: [
      "PEIRS",
      "PREPAREDBC",
      "COV-RAINCITY-19",
      "CHCH-SEWER-STUFF",
      "CHCH-SEWER-NZH",
      "CHCH-RNZ",
      "MV-LWMP-BIENNIAL-19",
      "MV-ANNACIS",
      "MV-IONA",
      "MV-CH2M-18",
      "COV-EDM-26",
      "COV-HWP-25",
    ],
  },

  sections: [
    {
      title:
        "A toilet needs water to flush, and in an apartment tower there is nothing else to use",
      body: (
        <Prose>
          <p>
            The water goes first. What happens to the toilet follows: flushing
            takes water somebody has to spare, and after a major earthquake
            nobody has water to spare. Why the{" "}
            <Link
              href="/after/water/"
              className="text-accent underline underline-offset-2"
            >
              water
            </Link>{" "}
            stops, and for how long, is set out there.
          </p>
          <p>
            A house has a garden, a bucket, and somewhere to dig. A unit on the
            twentieth floor has a bathroom, and when the water stops the
            bathroom stops with it.
          </p>
          <p>
            The stored water a household is told to keep does not cover it, and
            the City of Vancouver has done that arithmetic in public. PreparedBC
            tells residents to store four litres per person per day, for
            drinking and sanitation. <Cite id="PREPAREDBC" /> Vancouver’s Rain
            City Strategy sets that against ordinary use: it “falls short of
            normal daily water use by more than 300 L per day, and provides the
            bare minimum for drinking and hygiene”.{" "}
            <Cite id="COV-RAINCITY-19" />
          </p>
          <p>
            Four litres covers drinking and washing. There is nothing in it for
            the toilet, and it is the City that says so.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "The only duration anyone has published for wastewater is many months",
      body: (
        <Prose>
          <p>
            “Disruption to water and wastewater systems are expected for many
            months following the event.” <Cite id="PEIRS" /> That is the
            Provincial Earthquake Immediate Response Strategy, the province’s
            own plan, and wastewater is named in it.
          </p>
          <p>
            It covers the whole affected region rather than any one
            municipality, and it merges water and wastewater into one sentence,
            so it does not say whether one returns before the other. It also
            does not separate the treatment plants from the pipes, which is the
            distinction the rest of this page turns on.
          </p>
          <p>
            The province publishes shorter intervals for drinking water. They
            measure how long it takes to truck bulk water to people, which is a
            different question from when a sewer works again, and they sit
            with{" "}
            <Link
              href="/after/water/"
              className="text-accent underline underline-offset-2"
            >
              water
            </Link>
            .
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Waste with nowhere to go is a health problem, and the province says so in its own words",
      body: (
        <Prose>
          <Quote
            speaker="The Provincial Earthquake Immediate Response Strategy, on what a disrupted waste collection service does to people"
            cite={<Cite id="PEIRS" />}
          >
            <p>
              “Disruptions to waste collection may result in biological hazards.
              Due to mass congregation in shelter spaces and possible inadequate
              disposal of garbage and biological waste, disease outbreaks are
              possible.”
            </p>
          </Quote>
          <p>
            <em>Possible</em> is the province’s word and it is carrying weight.
            Not likely, not expected.
          </p>
          <p>
            The sentence names its own condition: inadequate disposal. That is
            the step between a collection service that has stopped and a risk to
            health, and it is the one link in the chain a household can act on.
          </p>
          <p>
            It names waste collection, the garbage as well as the sewage, and a
            garbage truck needs roads and fuel like everything else on a road.
            And it puts the risk in shelters, where people are gathered
            together.
          </p>
          <p>
            Christchurch shows what a failed collection system does to ordinary
            life, and it shows nothing else. Chemical toilets were provided for
            about 30,000 residents and 1,141 portaloos were delivered.{" "}
            <Cite id="CHCH-SEWER-STUFF" /> Temporary toilets stayed in use for
            weeks. <Cite id="CHCH-SEWER-NZH" /> Sewer repairs were projected to
            take more than a couple of years, <Cite id="CHCH-SEWER-STUFF" /> and
            a later council estimate put full network restoration at up to 30
            years. <Cite id="CHCH-RNZ" /> The last two figures are about
            rebuilding a network, not about how long anyone used a portaloo. All
            of them describe Christchurch, and none of them says anything about
            how long Richmond’s or Delta’s sewers would be out.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "A treatment plant built to survive an earthquake still needs the sewers that reach it",
      body: (
        <Prose>
          <p>
            Metro Vancouver’s biennial liquid waste report lists what it has
            built or designed to a post-disaster standard, which means a
            structure the building code expects to keep working after the
            earthquake rather than merely to stay standing: the Annacis Island
            plant’s Stage 5 expansion, the North Shore secondary treatment
            plant, the new Hollyburn pump station, and the Sperling and
            Sapperton pump stations, which were under construction with seismic
            upgrades. <Cite id="MV-LWMP-BIENNIAL-19" />
          </p>
          <p>
            That is real work, and it is being done one plant and one pump
            station at a time. Sewage reaches a treatment plant through pipes. A
            plant that survives still needs the sewers that feed it, and the
            sewers are the part whose assessed condition is not public.
          </p>
          <p>
            These are long programs with dates attached. Annacis Island serves
            about 1.25 million people across 14 municipalities, and its
            remaining stage-gate approvals run from 2027 to 2030, with all
            components anticipated by 2035. <Cite id="MV-ANNACIS" /> Iona Island
            was built in 1963, serves about 750,000 people, and is being rebuilt
            for secondary treatment with seismic and flood-resilient design for
            its position on the delta. <Cite id="MV-IONA" />
          </p>
          <Quote
            speaker="Metro Vancouver’s Biennial Report 2017–2018, Integrated Liquid Waste and Resource Management, on a study it commissioned of its own sewers"
            cite={<Cite id="MV-LWMP-BIENNIAL-19" />}
          >
            <p>
              “In 2018, the Liquid Waste Services Department completed a study
              evaluating seismic risks to Metro Vancouver’s sewers, pump
              stations and wastewater treatment plants. Its findings are being
              used to inform seismic resiliency decisions in project designs and
              capital planning.”
            </p>
          </Quote>
          <VerificationNote label="Assessed in 2018, findings not released">
            The region’s own report names the document in its reference list:
            CH2M, <em>Seismic Risk Action Plan for Liquid Waste Services</em>,
            2018, commissioned by Metro Vancouver.{" "}
            <Cite id="MV-LWMP-BIENNIAL-19" /> Nothing from it has been
            published: no vulnerability ratings, no failure counts, and no
            expectation of how long the collection system would take to come
            back. <Cite id="MV-CH2M-18" /> The sewers were in scope, and what
            the study found about them is the one thing a reader cannot read.
          </VerificationNote>
        </Prose>
      ),
    },

    {
      title:
        "Vancouver sets a seismic standard for new sewer pipe, which is not the same as knowing how the old pipe will do",
      body: (
        <Prose>
          <p>
            The City of Vancouver’s Engineering Design Manual carries a section
            headed Seismic Design Standards inside its sanitary sewer part, with
            a parallel one for storm drainage. <Cite id="COV-EDM-26" /> It tells
            a designer to choose pipe material and replacement strategy from a
            risk assessment of the ground: how susceptible the soil is to
            shaking, and its potential for permanent ground deformation, which
            is ground that moves and does not move back.{" "}
            <Cite id="COV-EDM-26" /> It names the strategies too, among them
            routing mains outside liquefaction zones, where saturated soil loses
            its strength and behaves like a liquid while the ground shakes.{" "}
            <Cite id="COV-EDM-26" />
          </p>
          <p>
            “Minimize seismic risk to sewage and drainage services” is objective
            3.4 of the City’s Healthy Waters Plan. <Cite id="COV-HWP-25" /> How
            the plan proposes to measure progress against it is the honest part:
            a rating scale of 1 to 5 by expert judgement.{" "}
            <Cite id="COV-HWP-25" />
          </p>
          <p>
            A standard for new pipe is not an assessment of old pipe. Nothing
            published says how the network already under the streets would
            perform, and nothing says the replacement pipe performs better or
            worse than what it replaces. Nobody has measured it.
          </p>
          <VerificationNote label="No municipality has published an assessment of its own sewers">
            Metro Vancouver owns the trunk sewers and the treatment plants. The
            pipe under a residential street belongs to the municipality, and no
            seismic vulnerability assessment of a municipal sewer network has
            been published for Vancouver, Delta, Surrey or New Westminster. The
            only duration published for this system anywhere in the region is
            the province’s many months, covering water and wastewater together.{" "}
            <Cite id="PEIRS" />
          </VerificationNote>
        </Prose>
      ),
    },
  ],

  lever: {
    heading: "What you can do",
    title: (
      <>
        The province expects water and wastewater disruption to last many
        months, and it names inadequate disposal of waste as the step between a
        stopped collection service and a risk to health. <Cite id="PEIRS" />{" "}
        That step is the one a household controls.
      </>
    ),
    items: [
      // No citation, and none is missing: a pail and a lid rest on no document,
      // and the claim the page sources is the one in the sentence above it.
      <>
        <strong>
          Settle now how the household would contain human waste with no water
          to flush.
        </strong>{" "}
        A pail with a tight lid, heavy bags, and something dry to cover each use
        is the whole of it. It costs almost nothing and takes almost no storage
        space, which is the objection most preparedness advice runs into.
      </>,
      <>
        <strong>Do not plan to flush with stored water.</strong> The four litres
        per person per day PreparedBC advises is for drinking and sanitation,{" "}
        <Cite id="PREPAREDBC" /> and the City of Vancouver puts that figure more
        than 300 litres a day below normal use. <Cite id="COV-RAINCITY-19" />{" "}
        Water put by for drinking and washing does not stretch to the toilet as
        well.
      </>,
    ],
    closing: (
      <>
        Vancouver’s advice to store water assumes a household with somewhere to
        put a bin of it. <Cite id="COV-RAINCITY-19" /> The toilet is the part of
        the problem that stored water does not solve, which is why the pail is
        worth settling before the water stops rather than after.
      </>
    ),
  },
};
