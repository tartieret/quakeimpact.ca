import Link from "next/link";

import { Cite } from "@/components/citation";
import { Figure, Photograph, Prose } from "@/components/page-parts";
import {
  GroundBasinAmplification,
  GroundTwoGrounds,
} from "@/components/figures/ground-conditions";
import type { PageModule } from "./index";

/**
 * Ground conditions. The body of /shaking/ground/, ported from
 * docs/copy/ground-conditions.md.
 *
 * The neighbourhood-scale maps belong to the Metro Vancouver Seismic
 * Microzonation Mapping Project. This page links readers to the official maps
 * instead of redrawing them. The figures here are schematics of values stated
 * in the cited sources, not substitutes for those maps.
 *
 * The photograph shows what liquefaction did to a street in Christchurch. It
 * illustrates the mechanism and does not predict the amount of damage here.
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
      "The ground beneath a building changes how it shakes. Fraser delta soil can lose its strength, while the deep Georgia Basin makes slow shaking stronger.",
    references: [
      "CJES-2024",
      "JAVANBAKHT-24",
      "JAVANBAKHT-23",
      "DCRRA-APPC",
      "MVSMMP",
      "PEIRS",
    ],
  },

  sections: [
    {
      title: "The same earthquake can shake two places differently",
      body: (
        <Prose>
          <p>
            The downtown peninsula and the North Shore slopes sit on rock.
            Richmond, Delta and the filled edges of False Creek sit on softer
            ground laid down by the Fraser River. Two nearby addresses can
            respond differently because of what lies beneath them.
          </p>
          <p>
            Rock carries earthquake waves differently from deep sediment.
            Loose, wet delta soil can also lose its strength during strong
            shaking. These are separate effects, and both matter in Metro
            Vancouver.
          </p>
          <Figure
            alt="Under the downtown peninsula and North Shore uplands the ground is bedrock, while soft deposits beneath the Fraser delta range from less than 20 m to more than 200 m thick. The two columns show separate places on the same depth scale."
            caption={
              <>
                Bedrock uplands and the Fraser delta shown on one depth scale.
                The columns are separate places, not a cross-section between
                them. <Cite id="CJES-2024" />
              </>
            }
          >
            <GroundTwoGrounds />
          </Figure>
        </Prose>
      ),
    },

    {
      title: "Delta soil can lose its strength",
      body: (
        <Prose>
          <p>
            Liquefaction happens when strong shaking raises the pressure of
            water between grains of loose sand. The sand stops carrying the
            weight above it and the ground temporarily behaves like a thick
            liquid. Foundations can tilt, roads can sag and buried pipes can
            rise or break.
          </p>
          <Photograph
            id="christchurch-cars-in-silt"
            caption={
              <>
                Christchurch, New Zealand, on the day of the 2011 earthquake.
                Sand and water rose through the street after the ground
                liquefied. This shows the mechanism, not the amount of damage
                expected in Metro Vancouver.
              </>
            }
          />
          <p>
            Richmond and Delta have the three conditions liquefaction needs:
            loose sand, shallow groundwater and strong earthquake shaking. Soil
            tests found many metres of material that could liquefy, with
            groundwater generally within a few metres of the surface.{" "}
            <Cite id="JAVANBAKHT-24" /> The soft deposits beneath the delta
            range from less than 20 m to more than 200 m thick.{" "}
            <Cite id="CJES-2024" />
          </p>
          <p>
            Researchers estimate that the shaking needed to start liquefaction
            in Richmond and Delta occurs, on average, every 100 to 250 years.{" "}
            <Cite id="JAVANBAKHT-24" /> That is not an earthquake schedule or an
            estimate of how often visible damage will occur. Soil can begin to
            liquefy below ground without leaving damage at the surface.
          </p>
          <p>
            For a Cascadia earthquake above magnitude 8.9, the estimated chance
            of liquefaction across the area studied is 31 to 57 per cent.{" "}
            <Cite id="JAVANBAKHT-23" /> The range applies to the study area, not
            every property on the delta.
          </p>
          <p>
            The same mechanism affects more than buildings. It can damage
            roads, buried services and the ground beneath dikes. The{" "}
            <Link
              href="/shaking/dikes/"
              className="text-accent underline underline-offset-2"
            >
              Dikes
            </Link>{" "}
            page covers the sections Richmond has had analysed.
          </p>
        </Prose>
      ),
    },

    {
      title: "The Georgia Basin strengthens slow shaking",
      body: (
        <Prose>
          <p>
            Beneath much of Metro Vancouver is the Georgia Sedimentary Basin, a
            deep bowl of soft sediment. It amplifies slow earthquake waves, the
            kind that make tall buildings sway. <Cite id="DCRRA-APPC" />
          </p>
          <p>
            At a shaking period of two seconds, the provincial assessment
            estimates average amplification of 1.7 times where the basin is 1
            to 2 km deep and 2.63 times where it is 3 to 4 km deep. At one test
            site in the City of Vancouver, accounting for the basin raised the
            expected shaking at that period by 24 per cent.{" "}
            <Cite id="DCRRA-APPC" /> These factors apply to that speed of
            shaking and those basin depths. They are not general multipliers for
            every earthquake wave.
          </p>
          <Figure
            alt="At a shaking period of two seconds, average basin amplification is 1.7 where the Georgia Sedimentary Basin is 1 to 2 km deep and 2.63 where it is 3 to 4 km deep."
            caption={
              <>
                Average amplification at a two-second shaking period. A factor
                of 1.0 would mean the basin neither increased nor reduced the
                shaking. <Cite id="DCRRA-APPC" />
              </>
            }
          >
            <GroundBasinAmplification />
          </Figure>
          <p>
            The offshore Cascadia earthquake produces the long, slow waves that
            the basin amplifies. This is one reason it can be especially
            important for tall buildings, even though a nearby crustal
            earthquake produces more intense shaking in much of the city.
          </p>
          <p>
            The sixth-generation Canadian seismic hazard model and the 2020
            National Building Code do not explicitly account for basin effects.
            Detailed local mapping helps show the variation that the national
            model leaves out. <Cite id="DCRRA-APPC" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Neighbourhood maps show where these effects are strongest",
      body: (
        <Prose>
          <p>
            The Metro Vancouver Seismic Microzonation Mapping Project has
            published 29 maps for the western part of the region. They show
            variations in shaking, basin depth, liquefaction and landslide
            susceptibility at neighbourhood scale. <Cite id="MVSMMP" />
          </p>
          <p>
            The maps do not yet cover the whole region. A second phase for Pitt
            Meadows, Maple Ridge and Langley is scheduled for completion in
            late 2026. <Cite id="MVSMMP" />
          </p>
          <p>
            The official maps are free to read at{" "}
            <a
              href="https://www.metrovanmicromap.ca/"
              className="text-accent underline underline-offset-2"
            >
              metrovanmicromap.ca
            </a>
            . They are the best place to compare the ground beneath specific
            neighbourhoods.
          </p>
        </Prose>
      ),
    },
  ],

  lever: {
    heading: "What you can do",
    items: [
      <>
        <strong>Look up the ground beneath home and work.</strong> The official
        maps show neighbourhood-scale differences across the western
        municipalities. Two places used by the same household may sit on very
        different ground.
      </>,
      <>
        <strong>
          On the delta, plan for damaged roads and buried services as well as
          buildings.
        </strong>{" "}
        Liquefaction can affect the route home and the pipes beneath it. In the
        nearby earthquake scenario, driving may be difficult in Richmond and
        Delta, particularly near the airport and Tsawwassen ferry terminal.{" "}
        <Cite id="PEIRS" />
      </>,
      <>
        <strong>
          Ask how a tall building’s assessment accounts for local ground.
        </strong>{" "}
        Slow shaking becomes stronger in the Georgia Basin, and the 2020
        National Building Code does not explicitly account for that effect.{" "}
        <Cite id="DCRRA-APPC" />
      </>,
    ],
  },
};
