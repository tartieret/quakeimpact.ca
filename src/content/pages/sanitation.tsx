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
        and wastewater systems to last many months. <Cite id="PEIRS" />
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
            The water goes first. Flushing takes water somebody has to spare,
            and after a major earthquake nobody has water to spare. Why the{" "}
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
            PreparedBC tells residents to store four litres per person per day,
            for drinking and sanitation. <Cite id="PREPAREDBC" /> Vancouver’s
            Rain City Strategy sets that against ordinary use: it “falls short
            of normal daily water use by more than 300 L per day, and provides
            the bare minimum for drinking and hygiene”.{" "}
            <Cite id="COV-RAINCITY-19" />
          </p>
          <p>
            Four litres covers drinking and washing. There is nothing in it for
            a toilet.
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
            It covers the whole affected region, with no municipality broken
            out. Water and wastewater are merged into one sentence, so it does
            not say whether one returns before the other, and it does not
            separate the treatment plants from the pipes.
          </p>
          <p>
            The province publishes shorter intervals for drinking water. They
            measure how long it takes to truck bulk water to people, which is a
            different question from when a sewer works again, and they are set
            out with{" "}
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
      title: "Waste with nowhere to go is a health problem",
      body: (
        <Prose>
          <Quote
            speaker="The Provincial Earthquake Immediate Response Strategy, on disrupted waste collection"
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
            <em>Possible</em> is the province’s word, not likely and not
            expected.
          </p>
          <p>
            Inadequate disposal is the step between a collection service that
            has stopped and a risk to health, and it is the one link in the
            chain a household can act on.
          </p>
          <p>
            Waste collection is the garbage as well as the sewage, and a garbage
            truck needs roads and fuel like everything else on a road. Shelters
            are where the province names the risk, because that is where people
            are gathered together.
          </p>
          <p>
            The 2011 earthquake in Christchurch, New Zealand, shows what a
            failed collection system does to ordinary life. Chemical toilets
            were provided for about 30,000 residents and 1,141 portaloos were
            delivered. <Cite id="CHCH-SEWER-STUFF" /> Temporary toilets stayed
            in use for weeks. <Cite id="CHCH-SEWER-NZH" /> Sewer repairs were
            projected to take more than a couple of years,{" "}
            <Cite id="CHCH-SEWER-STUFF" /> and a later council estimate put
            full network restoration at up to 30 years. <Cite id="CHCH-RNZ" />{" "}
            The last two figures are about rebuilding a network, not about how
            long anyone used a portaloo. All of them describe Christchurch, and
            none of them says anything about how long Richmond’s or Delta’s
            sewers would be out.
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
            Metro Vancouver lists what it has built or designed to a
            post-disaster standard, which means a structure the building code
            expects to keep working after the earthquake, not just to stay
            standing: the Annacis Island plant’s Stage 5 expansion, the North
            Shore secondary treatment plant, the new Hollyburn pump station, and
            the Sperling and Sapperton pump stations, which were under
            construction with seismic upgrades.{" "}
            <Cite id="MV-LWMP-BIENNIAL-19" />
          </p>
          <p>
            The work goes one plant and one pump station at a time. Sewage
            reaches those plants through pipes, and the sewers are the part
            whose assessed condition is not public.
          </p>
          <p>
            Annacis Island serves about 1.25 million people across 14
            municipalities, and its remaining stage-gate approvals run from 2027
            to 2030, with all components anticipated by 2035.{" "}
            <Cite id="MV-ANNACIS" /> Iona Island was built in 1963, serves
            about 750,000 people, and is being rebuilt for secondary treatment
            with seismic and flood-resilient design for its position on the
            delta. <Cite id="MV-IONA" />
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
            back. <Cite id="MV-CH2M-18" /> The sewers were in scope.
          </VerificationNote>
        </Prose>
      ),
    },

    {
      title:
        "Vancouver has a seismic standard for new sewer pipe and no assessment of the old",
      body: (
        <Prose>
          <p>
            The City of Vancouver’s Engineering Design Manual has a section
            headed Seismic Design Standards inside its sanitary sewer part, with
            a parallel one for storm drainage. <Cite id="COV-EDM-26" /> A
            designer choosing pipe material and replacement strategy has to work
            from a risk assessment of the ground: how susceptible the soil is to
            shaking, and its potential for permanent ground deformation, which
            is ground that moves and does not move back.{" "}
            <Cite id="COV-EDM-26" /> The strategies are named too, among them
            routing mains outside liquefaction zones, where saturated soil loses
            its strength and behaves like a liquid while the ground shakes.{" "}
            <Cite id="COV-EDM-26" />
          </p>
          <p>
            “Minimize seismic risk to sewage and drainage services” is objective
            3.4 of the City’s Healthy Waters Plan. <Cite id="COV-HWP-25" />{" "}
            Progress against it is measured on a rating scale of 1 to 5 by
            expert judgement. <Cite id="COV-HWP-25" />
          </p>
          <p>
            Nothing published says how the network already under the streets
            would perform, and nothing says the replacement pipe performs better
            or worse than what it replaces. Nobody has measured it.
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
        months, and names inadequate disposal of waste as the step between a
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
        space.
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
        put a bin of it. <Cite id="COV-RAINCITY-19" /> Stored water does not
        solve the toilet. Settle the pail before the water stops.
      </>
    ),
  },
};
