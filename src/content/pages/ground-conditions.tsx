import { Cite } from "@/components/citation";
import {
  Figure,
  Photograph,
  Prose,
  VerificationNote,
} from "@/components/page-parts";
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
 *
 * The two photographs do not soften it either, and they are the first two on the
 * site. This is the page that made the case for them, under the test in
 * `docs/style-guide.md` §8: "the ground behaves like a thick liquid" is
 * accurate, it is not a picture, and a reader who has only stood on ground that
 * stays put has nothing to attach it to. Both are Christchurch in 2011 and both
 * follow a mechanism the prose has already stated and sourced. The first caption
 * anchors the pair to Richmond and Delta and the second opens on "the same
 * earthquake", so the two read as one unit; neither restates the analogue rule,
 * which is the site's standing position and belongs in `docs/media.md` rather
 * than under every photograph. The terms are in `src/content/media.ts`, and the
 * credit each one is owed is printed under it by `Photograph`.
 */
export const groundConditions: PageModule = {
  meta: {
    route: "/shaking/ground/",
    title: "Ground conditions",
    description:
      "Metro Vancouver spans bedrock, deep soft sediment and river delta soil that can liquefy during an earthquake.",
    nav: "Ground conditions",
    kicker: "The shaking",
    standfirst:
      "Metro Vancouver spans bedrock, deep soft sediment and river delta soil. On the delta, wet sand can lose its strength during an earthquake. Beneath the region, the Georgia Basin amplifies slow shaking.",
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
      title: "Ground conditions change the shaking",
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
        </Prose>
      ),
    },

    {
      title: "Delta soil can liquefy",
      body: (
        <Prose>
          <p>
            The soil there is loose sand with water sitting in the gaps between
            the grains. Shake it hard enough and the sand stops carrying the
            weight above it. For a while, the water does. The ground behaves
            like a thick liquid, and engineers call that liquefaction. Buried
            pipes float up, roads sag, foundations tilt.
          </p>
          <Photograph
            id="christchurch-cars-in-silt"
            caption={
              <>
                Christchurch, New Zealand, on the day of the 2011 earthquake.
                The silt rose through the road, and the cars are standing in
                ground that stopped carrying them.
                Richmond and Delta have both conditions: loose sand that can
                liquefy and water close enough to the surface to keep
                it wet.{" "}
                <Cite id="JAVANBAKHT-24" />
              </>
            }
          />
          <Photograph
            id="avonside-road-damage"
            caption={
              <>
                The same earthquake, a suburban street. The cones in the
                foreground are where the ground vented: sand and water came up
                through the road and spread over it, so the material lying on
                the surface was under it that morning. That is why liquefaction
                reaches the building, the pipes and the road beneath it.
              </>
            }
          />
          <p>
            Liquefaction needs loose sand, shallow groundwater and strong
            shaking. The delta has all three. In soil tests across Richmond and Delta, three
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
                Thicknesses are to scale and widths mean nothing; how deep the
                bottom of the sand sits is not a published figure. The 11.8 m is
                an average total through a site. It is not one continuous layer,
                and it is drawn under the water table because the sand
                has to be wet for any of this to happen. <Cite id="JAVANBAKHT-24" />
              </>
            }
          >
            <GroundSoilColumn />
          </Figure>
          <Figure
            alt="Under the downtown peninsula and the North Shore uplands the ground is bedrock, while the soft deposits under the Fraser delta run from less than 20 m to more than 200 m thick. The two columns are two places on one depth scale, not a slice through the ground between them."
            caption={
              <>
                Two grounds on one depth scale, kept apart because they are two
                places and not one profile. No source gives the shape of the
                rock surface or the distance between the two, so the drawing
                shows neither and is not a cross-section. Nothing is published
                for the thickness of the rock under the uplands, so nothing
                below that surface is measured. <Cite id="CJES-2024" />
              </>
            }
          >
            <GroundTwoGrounds />
          </Figure>
        </Prose>
      ),
    },

    {
      title: "Liquefaction is expected every 100 to 250 years on the delta",
      body: (
        <Prose>
          <p>
            Researchers worked the figure out from 787 soil tests, 616 of them
            in Richmond and Delta: “In Richmond and Delta regions, it is
            expected that soil liquefaction could occur every 100 to 250 years.”
            Across the whole area they studied the interval runs from 100 to
            more than 500 years. The reason for the short one is the three
            conditions above. <Cite id="JAVANBAKHT-24" />
          </p>
          <p>
            The number measures the point where the shaking just matches the
            strength holding the soil together. It is not how often an
            earthquake happens, and it is not how often damage shows up at the
            surface: the ground can start to liquefy underneath without anything
            visible going wrong on top. <Cite id="JAVANBAKHT-24" />
          </p>
          <p>
            A Cascadia earthquake above magnitude 8.9, one that ruptures the
            offshore interface, carries a 31 to 57 per cent chance of setting
            off liquefaction in the area studied.{" "}
            <Cite id="JAVANBAKHT-23" />
          </p>
        </Prose>
      ),
    },

    {
      title: "The Georgia Basin amplifies slow shaking",
      body: (
        <Prose>
          <p>
            Under Metro Vancouver is the Georgia Sedimentary Basin, a deep bowl
            of soft sediment. Basins amplify shaking “particularly at long
            periods, impacting tall buildings and other long-period
            structures”. <Cite id="DCRRA-APPC" />
          </p>
          <p>
            Long period means slow. A tall building sways slowly, taking a
            couple of seconds to lean one way and back, and that is the speed of
            shaking it answers to. At that speed, shaking is 1.7 times stronger
            on average where the bowl is 1 to 2 km deep, and 2.63 times stronger
            where it is 3 to 4 km deep. At a test site in the City of Vancouver,
            allowing for the bowl raises the expected shaking at that speed by
            24 per cent. <Cite id="DCRRA-APPC" />
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
            The offshore earthquake is the one that produces the long, slow
            waves a deep bowl makes worse, so the two scenarios threaten
            different buildings.
          </p>
        </Prose>
      ),
    },

    {
      title: "The building code does not yet account for the basin",
      body: (
        <Prose>
          <p>
            The province says so in the same assessment. “The United States
            Geological Survey included basin effects in the 2018 version of the
            US National Seismic Hazard Model and, as a result, basin effects are
            now included in US building codes. While progress has been made in
            the US, Canada’s 6th Generation Seismic Hazard Model and the
            National Building Code of Canada (2020) do not explicitly account
            for these effects.” <Cite id="DCRRA-APPC" />
          </p>
          <p>
            The same assessment points at detailed local mapping as the work
            that fills the gap.{" "}
            <Cite id="DCRRA-APPC" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Detailed ground maps cover the western region",
      body: (
        <Prose>
          <p>
            The Metro Vancouver Seismic Microzonation Mapping Project has
            published 29 maps of the western communities: how much the ground
            grows the shaking, how deep the bowl is, how likely the soil is to
            liquefy, how likely slopes are to fail. <Cite id="MVSMMP" /> They
            are finer than anything regional, and the province concedes as much
            about its own work: its hazard exposure analysis “does not
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
            Mapping Project, and they are not open data. They may be read and
            shared unaltered, and the data layers may be adapted on the same
            terms; publishing them commercially, including electronically, needs
            written permission from the Institute for Catastrophic Loss
            Reduction. <Cite id="MVSMMP-LIC" /> They are linked below, not
            redrawn here.
          </VerificationNote>
        </Prose>
      ),
    },

    {
      title: "Richmond’s dike message conflicts with its engineering results",
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
            500 mm, so two of the three sections tested go past it. Sideways
            movement stayed inside the limit at all three. Another 0.3
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
                These are three of the eleven sections analysed, and the report
                says its results apply only where it tested.{" "}
                <Cite id="RICH-THURBER-16" /> They belong to the
                1-in-2,475-year earthquake, and a dam or a building figure at
                that same return period measures something else.
              </>
            }
          >
            <GroundDikeSettlement />
          </Figure>
          <p>
            Phases 3, 4 and 5 of the master plan, published in 2019 and 2021,
            each conclude that proposed dike cross-sections
            “will not meet the performance requirements” of the provincial
            guidelines “without ground improvement or alternative approaches”,
            and price that ground improvement at $9,000 to $18,000 per lineal
            metre. <Cite id="RICH-DMP3-19" /> <Cite id="RICH-DMP4-21" />{" "}
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
            Richmond already requires a geotechnical study before anyone builds
            on ground that can liquefy. <Cite id="RICHMOND-PL1" />
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
          On the delta, plan for the services as well as the building.
        </strong>{" "}
        Liquefaction reaches past the foundation to the buried pipes and the
        roads. In the scenario for the closer earthquake, “liquefaction of
        roadways in Richmond and Delta may make driving difficult”, around the
        airport and the Tsawwassen ferry terminal in particular.{" "}
        <Cite id="PEIRS" />
      </>,
      <>
        <strong>
          If you live or work in a tall building on soft ground, the offshore
          earthquake is the one to think about.
        </strong>{" "}
        It makes the slow waves a tall building answers to, and the bowl under
        the region makes those waves stronger. <Cite id="DCRRA-APPC" />
      </>,
    ],
  },
};
