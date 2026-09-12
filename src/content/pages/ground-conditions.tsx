import { Cite } from "@/components/citation";
import { Figure, Prose, VerificationNote } from "@/components/page-parts";
import {
  GroundBasinAmplification,
  GroundDikeSettlement,
  GroundSoilColumn,
  GroundTwoGrounds,
} from "@/components/figures/ground-conditions";
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
 *
 * The four figures do not soften that. Each is drawn from numbers stated in the
 * copy above it, none of them touches the microzonation layers, and none of
 * them stands in for the map: a schematic of published figures is a drawing of
 * facts, and a map of liquefaction susceptibility is what the site will not
 * make.
 */
export const groundConditions: PageModule = {
  meta: {
    route: "/shaking/ground/",
    title: "Ground conditions",
    nav: "Ground conditions",
    kicker: "The shaking",
    standfirst:
      "The ground under Metro Vancouver varies far more than the buildings on it do. On the Fraser delta, wet sand can lose its strength and behave like a liquid while the shaking lasts. Under the whole region, a deep bowl of soft sediment makes the slow part of the shaking stronger.",
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
      title: "Same earthquake, different ground, different outcome",
      body: (
        <Prose>
          <p>
            Metro Vancouver is built on two very different things. The downtown
            peninsula and the North Shore slopes sit on rock. Richmond, Delta
            and the old filled-in edges of False Creek sit on soft ground the
            Fraser River laid down. Two addresses a few blocks apart can sit on
            either one, and what the shaking does to a building depends on which
            of them it is standing on.
          </p>
          <p>
            Two separate things are going on, and they land on different places.
            One belongs to the delta. The other is under everybody.
          </p>
        </Prose>
      ),
    },

    {
      title: "On the delta, wet sand can behave like a liquid while it shakes",
      body: (
        <Prose>
          <p>
            The soil there is loose sand with water sitting in the gaps between
            the grains. Shake it hard enough and the sand stops carrying the
            weight above it. For a while, the water does. The ground behaves
            like a thick liquid instead of like solid ground, and engineers call
            that liquefaction. Buried pipes float up, roads sag, foundations
            tilt.
          </p>
          <p>
            Three things have to line up for it, and on the delta all three do:
            a thick layer of the right kind of sand, water close to the surface,
            and strong shaking. In soil tests across Richmond and Delta, three
            quarters of the sites held more than 9.6 m of sand that could
            liquefy, with 11.8 m the average total through a site. The water
            table sits under 3 m, and in places under 1 m.{" "}
            <Cite id="JAVANBAKHT-24" /> Below all that, the soft delta deposits
            run from less than 20 m to more than 200 m thick.{" "}
            <Cite id="CJES-2024" />
          </p>
          <Figure
            alt="Three quarters of the soil profiles tested in Richmond and Delta hold more than 9.6 m of liquefiable material, the mean is 11.8 m, and the groundwater above it sits under 3 m and in places under 1 m. The drawing is a schematic of those figures and not a log of any one site."
            caption={
              <>
                The two conditions the study puts together: sand that can
                liquefy, and water close enough to the surface to keep it wet.
                Depths are to scale and widths mean nothing. The 11.8 m is an
                average total through a site rather than one continuous layer,
                and it is drawn under the water table because the sand has to be
                wet for any of this to happen. <Cite id="JAVANBAKHT-24" />
              </>
            }
          >
            <GroundSoilColumn />
          </Figure>
          <Figure
            alt="Under the downtown peninsula and the North Shore uplands the ground is bedrock, while the soft deposits under the Fraser delta run from less than 20 m to more than 200 m thick. Two addresses a few blocks apart can sit on either one."
            caption={
              <>
                Two grounds on one depth scale, kept apart because they are two
                places rather than one profile. It is not a cross-section: no
                source gives the shape of the rock surface or the distance
                between the two, so the drawing does not either. Nothing is
                published for the thickness of the rock under the uplands, so
                nothing below that surface is measured. <Cite id="CJES-2024" />
              </>
            }
          >
            <GroundTwoGrounds />
          </Figure>
        </Prose>
      ),
    },

    {
      title:
        "Delta soil is expected to reach that tipping point every 100 to 250 years",
      body: (
        <Prose>
          <p>
            Researchers worked the figure out from 787 soil tests, 616 of them
            in Richmond and Delta, and stated it plainly: “In Richmond and Delta
            regions, it is expected that soil liquefaction could occur every 100
            to 250 years.” Elsewhere in the area they studied the interval runs
            from 100 to more than 500 years. The reason for the short one is the
            three conditions above. <Cite id="JAVANBAKHT-24" />
          </p>
          <p>
            That number is not how often an earthquake happens, and it is not
            how often damage shows up at the surface: the ground can start to
            liquefy underneath without anything visible going wrong on top. What
            it measures is the point where the shaking just matches the strength
            holding the soil together. <Cite id="JAVANBAKHT-24" />
          </p>
          <p>
            Against the calendar it is a short gap. The last Cascadia earthquake
            was in 1700.
          </p>
          <p>
            For the offshore earthquake in particular, one above magnitude 8.9
            is put at a 31 to 57 per cent chance of setting off liquefaction in
            the area studied. <Cite id="JAVANBAKHT-23" />
          </p>
        </Prose>
      ),
    },

    {
      title: "The whole region sits in a bowl that makes slow shaking stronger",
      body: (
        <Prose>
          <p>
            Under Metro Vancouver is the Georgia Sedimentary Basin, a deep bowl
            of soft sediment. Sediment like that does not pass the shaking
            through unchanged. Basins amplify it “particularly at long periods,
            impacting tall buildings and other long-period structures”.{" "}
            <Cite id="DCRRA-APPC" />
          </p>
          <p>
            Long period means slow. A tall building sways slowly, taking a
            couple of seconds to lean one way and back, and that is the speed of
            shaking it answers to. The province put numbers on what the bowl
            does at that speed here. Shaking is 1.7 times stronger on average
            where the bowl is 1 to 2 km deep, and 2.63 times stronger where it
            is 3 to 4 km deep. At a test site in the City of Vancouver, allowing
            for the bowl raises the expected shaking at that speed by 24 per
            cent. <Cite id="DCRRA-APPC" />
          </p>
          <p>
            Those factors belong to that speed and those depths. An
            amplification factor with no speed attached does not mean anything.
          </p>
          <Figure
            alt="At a shaking period of two seconds the average basin amplification is 1.7 where the Georgia Sedimentary Basin is 1 to 2 km deep and 2.63 where it is 3 to 4 km deep. Both factors belong to that period: an amplification factor with no period attached does not mean anything."
            caption={
              <>
                Two factors from the province’s assessment, and the bowl depth
                each belongs to. Both are averages at a shaking period of two
                seconds, the speed tall buildings sway at. 1.0 would be ground
                that neither grew nor damped the shaking.{" "}
                <Cite id="DCRRA-APPC" />
              </>
            }
          >
            <GroundBasinAmplification />
          </Figure>
          <p>
            This is why the two scenarios threaten different buildings. The
            offshore earthquake is the one that produces the long, slow waves a
            deep bowl makes worse.
          </p>
        </Prose>
      ),
    },

    {
      title: "Canada’s building code does not yet count the bowl",
      body: (
        <Prose>
          <p>
            The same provincial assessment says so in its own words. “The United
            States Geological Survey included basin effects in the 2018 version
            of the US National Seismic Hazard Model and, as a result, basin
            effects are now included in US building codes. While progress has
            been made in the US, Canada’s 6th Generation Seismic Hazard Model
            and the National Building Code of Canada (2020) do not explicitly
            account for these effects.” <Cite id="DCRRA-APPC" />
          </p>
          <p>
            That is a provincial government document saying the national hazard
            model and the national building code leave out something the
            province has just measured at up to 2.63 under Metro Vancouver. It
            points at detailed local mapping as the work that fills the gap.{" "}
            <Cite id="DCRRA-APPC" />
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Free maps show this ground street by street, for the western half of the region",
      body: (
        <Prose>
          <p>
            The Metro Vancouver Seismic Microzonation Mapping Project has
            published 29 maps of the western communities: how much the ground
            grows the shaking, how deep the bowl is, how likely the soil is to
            liquefy, how likely slopes are to fail. <Cite id="MVSMMP" /> They
            are finer than anything regional, and the province says as much
            about its own work. Its hazard exposure analysis “does not
            incorporate existing seismic microzonation work that has been
            completed at a detailed level, such as for the city of Metro
            Vancouver”. <Cite id="DCRRA-APPC" />
          </p>
          <p>
            The eastern communities are not mapped at that scale yet. A second
            phase covering Pitt Meadows, Maple Ridge and Langley runs to late
            2026. <Cite id="MVSMMP" />
          </p>
          <VerificationNote label="Map not drawn">
            Those layers belong to the Metro Vancouver Seismic Microzonation
            Mapping Project, and they are not open data. They may be read, and
            shared unaltered, but publishing or adapting them electronically
            needs written permission from the Institute for Catastrophic Loss
            Reduction. <Cite id="MVSMMP-LIC" /> They are linked below, not
            redrawn here.
          </VerificationNote>
          <VerificationNote label="Not yet published">
            Nobody has mapped where an earthquake would set off landslides along
            the Sea to Sky corridor or the Fraser Canyon. The landslide mapping
            that does exist for Sea to Sky is built from terrain and rainfall,
            with no earthquake in it at all. <Cite id="GSC-OF-6169" /> Those two
            corridors are how help reaches the Lower Mainland by road.
          </VerificationNote>
        </Prose>
      ),
    },

    {
      title:
        "Richmond tells residents its dikes will hold, and its own engineers are less sure",
      body: (
        <Prose>
          <p>
            Richmond Fire-Rescue tells residents: “Computer soil models predict
            that dikes will sustain some damage during an earthquake; however,
            the dikes will remain an intact barrier to flooding.”{" "}
            <Cite id="RICH-EQ" />
          </p>
          <p>
            Those models are published, in the City’s own dike master plans. A
            2016 analysis asked how far sections of the Lulu Island dikes would
            move in a very rare earthquake, the size expected about once in
            2,475 years. It found the dike dropping 600 mm at No. 1 Road, 1,000
            mm at Bath Slough and 500 mm at No. 4 Road. The provincial limit is
            500 mm, so two of the three sections tested go past it. Another 0.3
            m or so of settling, as liquefied soil packs back down, is not
            counted in those numbers. Where liquefaction is widespread and the
            riverbank steep, the same report says “large uncontrolled
            deformations of several metres or more could be anticipated.”{" "}
            <Cite id="RICH-THURBER-16" />
          </p>
          <Figure
            alt="The 2016 analysis models 600 mm of vertical movement at No. 1 Road, 1,000 mm at Bath Slough and 500 mm at No. 4 Road against a provincial guideline limit of 500 mm, so two of the three tested sections exceed it. These are three tested sections at the 1-in-2,475-year earthquake and the finding does not carry to the rest of the dikes."
            caption={
              <>
                Four limits travel with these three numbers. They are three of
                the eleven sections analysed, and the report says its results
                apply only where it tested. They belong to the 1-in-2,475-year
                earthquake, which does not compare to figures quoted for dams or
                for buildings. The later phases’ finding that a cross-section
                will not meet the requirements describes proposed upgraded
                designs without ground improvement. And that ground improvement
                is being designed and costed. <Cite id="RICH-THURBER-16" />
              </>
            }
          >
            <GroundDikeSettlement />
          </Figure>
          <p>
            The later phases are blunter still. Phases 3, 4 and 5 each conclude
            that proposed dike cross-sections “will not meet the performance
            requirements” of the provincial guidelines “without ground
            improvement or alternative approaches”, and price that ground
            improvement at $9,000 to $18,000 per lineal metre.{" "}
            <Cite id="RICH-DMP3-19" /> <Cite id="RICH-DMP4-21" />{" "}
            <Cite id="RICH-DMP5-19" />
          </p>
          <p>
            That describes proposed upgraded designs without the ground
            improvement, not a survey of the dikes as they stand today. Eleven
            sections were tested across four phases, at the 1-in-475 and
            1-in-2,475 year earthquakes, and the 2016 report says its results
            apply only at the sections it analysed.{" "}
            <Cite id="RICH-THURBER-16" />
          </p>
          <p>
            Both documents are the City’s own, and both are dated: current
            Richmond Fire-Rescue advice on one side, a 2016 analysis and master
            plan phases from 2019 and 2021 on the other.
          </p>
        </Prose>
      ),
    },

    {
      title: "The rules already treat the delta as different ground",
      body: (
        <Prose>
          <p>
            Richmond requires a geotechnical study before anyone builds on
            ground that can liquefy. <Cite id="RICHMOND-PL1" /> None of this is
            news to the people who regulate building there. It is already
            written into how the delta is allowed to build.
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
        <strong>Find out what you are standing on.</strong> The maps cover the
        western municipalities street by street and are free to read at{" "}
        <a
          href="https://www.metrovanmicromap.ca/"
          className="text-accent underline underline-offset-2"
        >
          metrovanmicromap.ca
        </a>
        . Look up where you live and where you work. They may sit on completely
        different ground.
      </>,
      <>
        <strong>
          On the delta, plan for the services and not only for the building.
        </strong>{" "}
        What liquefaction reaches beyond a foundation is the buried pipes and
        the roads. In the scenario for the closer earthquake, “liquefaction of
        roadways in Richmond and Delta may make driving difficult”, around the
        airport and the Tsawwassen ferry terminal in particular.{" "}
        <Cite id="PEIRS" /> Being cut off from normal services is what to plan
        for there, not a damaged home alone.
      </>,
      <>
        <strong>
          If you live or work in a tall building on soft ground, the offshore
          earthquake is the one to think about.
        </strong>{" "}
        It is the one that makes the slow waves a tall building answers to, and
        the bowl under the region makes those waves stronger.{" "}
        <Cite id="DCRRA-APPC" />
      </>,
    ],
  },
};
