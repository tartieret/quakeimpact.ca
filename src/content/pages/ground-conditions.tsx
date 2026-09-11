import { Cite } from "@/components/citation";
import { Prose, VerificationNote } from "@/components/page-parts";
import type { PageModule } from "./index";

/**
 * Ground conditions. The body of `/shaking/ground/`, ported from
 * `docs/copy/ground-conditions.md`.
 *
 * The words are the copy's, verbatim. There is no map on this page and there
 * is not going to be one: the neighbourhood-scale layers for this subject
 * belong to the Metro Vancouver Seismic Microzonation Mapping Project, whose
 * terms the site will not meet (`docs/licensing.md`, `docs/research/maps.md`).
 * The copy makes that refusal part of the page rather than leaving a slot
 * promising a graphic, so there is no `MapPlaceholder` here.
 */
export const groundConditions: PageModule = {
  meta: {
    route: "/shaking/ground/",
    title: "Ground conditions",
    nav: "Ground conditions",
    kicker: "The shaking",
    standfirst:
      "The ground under Metro Vancouver varies more than the buildings on it do. On the Fraser delta the soil can lose its strength and behave like a liquid. Under the whole region, a deep basin of soft sediment makes slow shaking grow rather than fade.",
    /**
     * First-cited order, which is the order the markers are numbered in. It is
     * also the order of "Sources on this page" at the foot of the copy file.
     */
    references: [
      "JAVANBAKHT-24",
      "CJES-2024",
      "JAVANBAKHT-23",
      "DCRRA-APPC",
      "MVSMMP",
      "MVSMMP-LIC",
      "GSC-OF-6169",
      "RICH-EQ",
      "RICH-THURBER-16",
      "RICH-DMP3-19",
      "RICH-DMP4-21",
      "RICH-DMP5-19",
      "RICHMOND-PL1",
      "PEIRS",
    ],
  },

  sections: [
    {
      title: "The ground decides more of the outcome than the building does",
      body: (
        <Prose>
          <p>
            Bedrock on the downtown peninsula and the North Shore uplands
            behaves nothing like the Fraser delta under Richmond and Delta, or
            the old fill around False Creek. That difference is larger than the
            difference between one building and its neighbour.
          </p>
          <p>
            Two separate effects are at work, and they land on different places.
            One is local to the delta. The other sits under everything.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "On the delta, saturated sand can behave like a liquid while it is shaken",
      body: (
        <Prose>
          <p>
            Liquefaction is saturated, loose sand losing its strength during
            shaking and behaving for a time like a liquid. Pipes float, roads
            settle, and foundations tilt.
          </p>
          <p>
            Richmond and Delta have the conditions for it in combination: thick
            liquefiable layers, a water table close to the surface, and high
            shaking hazard. Three quarters of the soil profiles tested in the
            two municipalities have more than 9.6 m of liquefiable material
            stacked up, with a mean of 11.8 m. Groundwater sits under 3 m, and
            in places under 1 m. <Cite id="JAVANBAKHT-24" /> The soft delta
            deposits underneath range from less than 20 m to more than 200 m
            thick. <Cite id="CJES-2024" />
          </p>
        </Prose>
      ),
    },

    {
      title:
        "The published return period for liquefaction starting in Richmond and Delta is 100 to 250 years",
      body: (
        <Prose>
          <p>
            The figure is specific, and what it measures matters. Across the
            study region the return period for triggering liquefaction ranges
            from 100 to more than 500 years. “In Richmond and Delta regions, it
            is expected that soil liquefaction could occur every 100 to 250
            years.” The reason given is the combination above.{" "}
            <Cite id="JAVANBAKHT-24" />
          </p>
          <p>
            That is the return period for the soil reaching the point where the
            shaking just matches the strength holding the ground together, which
            engineers call a factor of safety of 1. It was worked out from 787
            cone penetration test profiles, 616 of them in Richmond and Delta.{" "}
            <Cite id="JAVANBAKHT-24" /> It is not the return period of an
            earthquake, and it is not the return period of damage at the
            surface. Ground can begin to liquefy without anything visible
            happening on top of it.
          </p>
          <p>
            Set against the calendar, it is a short interval. The last Cascadia
            earthquake was in 1700.
          </p>
          <p>
            For the megathrust specifically, Cascadia interface earthquakes
            above magnitude 8.9 are put at a 31 to 57 per cent probability of
            triggering liquefaction in the study region.{" "}
            <Cite id="JAVANBAKHT-23" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Under the whole region, a deep basin makes slow shaking grow",
      body: (
        <Prose>
          <p>
            Metro Vancouver sits on the Georgia Sedimentary Basin, a deep bowl
            of soft sediment. Basins amplify shaking “particularly at long
            periods, impacting tall buildings and other long-period
            structures”. <Cite id="DCRRA-APPC" />
          </p>
          <p>
            The province’s own assessment puts numbers on it for this region. At
            a shaking period of two seconds, which is the range tall buildings
            respond to, the average amplification is 1.7 where the basin is 1 to
            2 km deep and 2.63 where it is 3 to 4 km deep. At a City of
            Vancouver test site, correcting for the basin raises the expected
            shaking at that period by 24 per cent. <Cite id="DCRRA-APPC" />
          </p>
          <p>
            Those factors belong to a two-second period and to those basin
            depths. An amplification factor without a period attached does not
            mean anything.
          </p>
          <p>
            This is the physical reason the two scenarios threaten different
            buildings. The offshore megathrust produces exactly the long, slow
            waves a deep basin grows.
          </p>
        </Prose>
      ),
    },

    {
      title: "Canada’s building code does not yet account for the basin effect",
      body: (
        <Prose>
          <p>
            The same provincial assessment says so directly. “The United States
            Geological Survey included basin effects in the 2018 version of the
            US National Seismic Hazard Model and, as a result, basin effects are
            now included in US building codes. While progress has been made in
            the US, Canada’s 6th Generation Seismic Hazard Model and the
            National Building Code of Canada (2020) do not explicitly account
            for these effects.” <Cite id="DCRRA-APPC" />
          </p>
          <p>
            A provincial government document is stating that the national hazard
            model and the national building code leave out an effect it has just
            measured at up to 2.63 for the ground under Metro Vancouver. It
            points at local microzonation mapping as the work that will refine
            the picture. <Cite id="DCRRA-APPC" /> That is a specific and
            checkable gap between two countries’ codes, and it is the reason
            detailed local mapping exists.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Neighbourhood-scale maps of this ground are published and free to read",
      body: (
        <Prose>
          <p>
            The Metro Vancouver Seismic Microzonation Mapping Project has
            published 29 maps for the western communities of the region,
            covering amplification, basin effects, site class, site period,
            liquefaction susceptibility and slope instability at neighbourhood
            scale. <Cite id="MVSMMP" /> They are finer than any regional layer,
            and the province says as much about its own. Its hazard exposure
            analysis “does not incorporate existing seismic microzonation work
            that has been completed at a detailed level, such as for the city of
            Metro Vancouver”. <Cite id="DCRRA-APPC" />
          </p>
          <p>
            A second phase covering Pitt Meadows, Maple Ridge and Langley runs
            to late 2026, so the eastern communities are not mapped at this
            scale yet. <Cite id="MVSMMP" />
          </p>
          <VerificationNote label="Map not drawn">
            The layers for this subject belong to the Metro Vancouver Seismic
            Microzonation Mapping Project. They carry custom terms rather than
            an open licence: they may be read, and shared unaltered, but
            publishing or adapting them electronically needs written permission
            from the Institute for Catastrophic Loss Reduction.{" "}
            <Cite id="MVSMMP-LIC" /> They are linked below, not redrawn.
          </VerificationNote>
          <VerificationNote label="Not yet published">
            Nobody has published earthquake-triggered landslide mapping for the
            Sea to Sky corridor or the Fraser Canyon. The susceptibility mapping
            that exists for Sea to Sky is built from terrain and rainfall, with
            no seismic term in it at all. <Cite id="GSC-OF-6169" /> Those two
            corridors are how aid reaches the Lower Mainland by road.
          </VerificationNote>
        </Prose>
      ),
    },

    {
      title:
        "Richmond’s public advice on its dikes and its own engineering reports differ",
      body: (
        <Prose>
          <p>
            Richmond Fire-Rescue tells residents: “Computer soil models predict
            that dikes will sustain some damage during an earthquake; however,
            the dikes will remain an intact barrier to flooding.”{" "}
            <Cite id="RICH-EQ" />
          </p>
          <p>
            Those models are published, in the City’s own dike master plans. At
            the 1-in-2,475-year earthquake, the 2016 seismic deformation
            analysis for Lulu Island found vertical movement of 600 mm at No. 1
            Road, 1,000 mm at Bath Slough and 500 mm at No. 4 Road. The
            provincial guideline for dikes sets a limit of 500 mm, so two of the
            three tested sections exceed it. A further 0.3 m or so of
            settlement, as liquefied soil reconsolidates, is not counted in
            those numbers. The same report says that where liquefaction is
            extensive and the riverbank steep, “large uncontrolled deformations
            of several metres or more could be anticipated.”{" "}
            <Cite id="RICH-THURBER-16" />
          </p>
          <p>
            Later phases put it more plainly still. Phases 3, 4 and 5 each
            conclude that proposed dike cross-sections “will not meet the
            performance requirements” of the provincial guidelines “without
            ground improvement or alternative approaches”, and cost that ground
            improvement at $9,000 to $18,000 per lineal metre.{" "}
            <Cite id="RICH-DMP3-19" /> <Cite id="RICH-DMP4-21" />{" "}
            <Cite id="RICH-DMP5-19" />
          </p>
          <p>
            Four limits travel with those reports, and each of them matters.
            Eleven sections across four phases were analysed, and the 2016
            report says its results are only applicable at the sections analysed
            and cannot be assumed to hold anywhere else.{" "}
            <Cite id="RICH-THURBER-16" /> The “will not meet” finding describes
            proposed upgraded designs without ground improvement, which is a
            finding about a specification rather than a survey of the dikes as
            they stand today. Ground improvement is being designed and costed,
            so this is a problem the City is working on. And the return periods
            here are 1-in-475 and 1-in-2,475 year earthquakes, which do not
            compare directly to figures quoted for dams or for buildings.
          </p>
          <p>
            Both documents are the City’s own, and both are dated: current
            Richmond Fire-Rescue advice on one side, a 2016 deformation analysis
            and master plan phases from 2019 and 2021 on the other.
          </p>
        </Prose>
      ),
    },

    {
      title: "Local rules already treat the delta as different ground",
      body: (
        <Prose>
          <p>
            Richmond requires a geotechnical special study before construction
            on liquefiable ground. <Cite id="RICHMOND-PL1" /> None of this is
            new to the people who regulate building there. It is already written
            into how the delta is allowed to build.
          </p>
        </Prose>
      ),
    },
  ],

  lever: {
    heading: "What you can do",
    items: [
      // No citation, and none is missing: the bullet points at a public map
      // rather than resting on a finding in a document.
      <>
        <strong>Find out what you are standing on.</strong> The microzonation
        maps cover the western municipalities by neighbourhood and are free to
        read at{" "}
        <a
          href="https://www.metrovanmicromap.ca/"
          className="text-accent underline underline-offset-2"
        >
          metrovanmicromap.ca
        </a>
        . Look up the address you live at and the one you work at, because they
        may sit on completely different ground.
      </>,
      <>
        <strong>
          On the delta, plan for the services and not only for the building.
        </strong>{" "}
        New construction on liquefiable ground in Richmond needs a geotechnical
        special study first. <Cite id="RICHMOND-PL1" /> What liquefaction
        reaches beyond a foundation is the buried pipes and the roads: the
        province’s crustal scenario says “liquefaction of roadways in Richmond
        and Delta may make driving difficult”, around the airport and the
        Tsawwassen ferry terminal in particular. <Cite id="PEIRS" /> Being cut
        off from normal services is the planning case there, not a damaged home
        alone.
      </>,
      <>
        <strong>Two seconds is a tall-building number.</strong> If you live or
        work in a tall building on soft ground, the earthquake to think about is
        the long offshore one, not the short sharp one.
      </>,
    ],
  },
};
