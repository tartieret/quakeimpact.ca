import Link from "next/link";

import { Cite } from "@/components/citation";
import {
  DataTable,
  Prose,
  Quote,
  VerificationNote,
} from "@/components/page-parts";
import type { PageModule } from "./index";

/**
 * Secondary hazards. The body of `/shaking/secondary-hazards/`, ported from
 * `docs/copy/secondary-hazards.md`.
 *
 * There is no figure and no map slot on this page, and that is deliberate. The
 * two layers a reader would want, earthquake-triggered landslide susceptibility
 * on the road corridors and dam-breach inundation downstream of the reservoirs,
 * are respectively unpublished and not routed to the public at all. A
 * placeholder for a graphic that will never be drawn is a promise rather than a
 * label, so the copy states the absence in words instead.
 *
 * The dams here have two owners and the evidence does not mix: Metro Vancouver
 * publishes a yearly safety summary and no review report, BC Hydro states named
 * seismic deficiencies to its own regulator. They have a section each, and
 * neither shares a sentence or a table column with the other.
 */
export const secondaryHazards: PageModule = {
  meta: {
    route: "/shaking/secondary-hazards/",
    title: "Secondary hazards",
    nav: "Secondary hazards",
    kicker: "The shaking",
    standfirst:
      "Landslides, dikes and dams are where the damage arrives once the shaking stops. Most of it sits outside the official damage estimates, which count buildings and the people inside them and say so.",
    /**
     * First-cited order, which is the order the markers are numbered in. It is
     * also the order of "Sources on this page" at the foot of the copy file.
     */
    references: [
      "NRCAN-SCEN",
      "GSC-OF-8853",
      "DCRRA-2025",
      "PEIRS",
      "MVSMMP",
      "GSC-OF-6169",
      "S2S-BLAIS-08",
      "S2S-EA-GEO-03",
      "MOTI-SRDC-05",
      "CJES-2024",
      "YVR-SICRP",
      "MV-DSP-2026",
      "BC-DAMS-REG",
      "BCH-RRA-F2020",
      "BCH-RUSKIN-SEIAM-11",
      "BCH-RUSKIN-F2019",
      "BCH-COQUITLAM-RRA-06",
      "BCDSP-DEP-24",
    ],
  },

  sections: [
    {
      title: "The official damage estimates count buildings and stop there",
      body: (
        <Prose>
          <p>
            Most published damage figures for an earthquake here come from the
            Geological Survey of Canada’s scenario work. That work counts “only
            damage to buildings, and their inhabitants, from earthquake
            shaking”. Landslides, liquefaction, fire following and aftershocks
            are “not currently included”.{" "}
            <Cite id="NRCAN-SCEN" /> With those hazards missing, “the estimates
            herein are likely to represent a minimum estimate on impacts.”{" "}
            <Cite id="GSC-OF-8853" />
          </p>
          <p>
            The Cascadia assessment carries the same warning under its headline
            figures, which cover direct damage from the main shaking “without
            account of secondary hazards like landslides, liquefaction, tsunami,
            fires and more.” <Cite id="DCRRA-2025" />
          </p>
          <p>
            Nobody has folded those hazards into a number for this region. Each
            of them has been looked at on its own.
          </p>
        </Prose>
      ),
    },

    {
      title: "The province’s own scenario has landslides cutting the roads",
      body: (
        <Prose>
          <p>
            The province’s planning scenario for a magnitude 7.0 earthquake
            close to the city is set on a January afternoon, immediately after an
            atmospheric river has soaked the ground. <Cite id="PEIRS" /> Its account of the first
            minutes says: “Landslides and rock falls are generated in many
            areas, cutting off transportation routes. Flooding is increased by
            the recent wet weather event with some dikes failing.”{" "}
            <Cite id="PEIRS" />
          </p>
          <p>
            That is one scenario in one wet January. The same strategy assumes
            that “areas will be isolated”, with large parts of the impact area
            unreachable by road because of landslides, liquefaction and bridge
            damage, and it does not say which areas. <Cite id="PEIRS" />
          </p>
          <p>
            Provincial staging areas “are located outside the impact area and
            will be used to organize, prioritize, and disseminate critical
            resources”. <Cite id="PEIRS" /> Help is gathered outside the shaking
            and pushed in, and two of the roads it would come in on run through
            mountains: Highway 99 north through the Sea to Sky corridor, and
            Highway 1 east through the Fraser Canyon.
          </p>
          <VerificationNote label="Not published">
            No map of where an earthquake would set off landslides along the Sea
            to Sky corridor or the Fraser Canyon has been found in the published
            literature. Every seismic landslide product that has been found for
            this part of the province covers the western municipalities of Metro
            Vancouver, which stops well short of either corridor. <Cite id="MVSMMP" />
          </VerificationNote>
        </Prose>
      ),
    },

    {
      title:
        "The landslide maps for those corridors were built for rain, not for earthquakes",
      body: (
        <Prose>
          <p>
            There is landslide mapping for the Sea to Sky corridor. Two maps
            published by the Geological Survey of Canada in 2009 rate the
            corridor for rock falls and rock slides, and for debris flows, at a
            resolution of 25 m. <Cite id="GSC-OF-6169" /> Each rating is a
            weighted sum of things about the slope: the rock type, how steep it
            is, which way it faces, what the surface is made of, how far it is
            from a stream. Not one of those ingredients is an
            earthquake, and the words “earthquake” and “seismic” appear nowhere
            in the maps. The weighting given to which way a slope faces is
            explained by the weather: rain comes from the west.{" "}
            <Cite id="GSC-OF-6169" />
          </p>
          <p>
            The record of what has actually come down on that corridor is built
            the same way. A review of 154 landslides on 110 km of the corridor
            between 1855 and 2007, a corridor that accounts for “more than 18%
            of Canada’s total landslide related deaths (&gt;600)”, puts 54 per
            cent of them down to the climate and 6 per cent to construction, and
            mentions neither earthquakes nor seismic loading anywhere in its
            text. <Cite id="S2S-BLAIS-08" />
          </p>
          <p>
            The environmental assessment for the highway’s own upgrade splits
            the two hazards apart as well. Earthquakes appear there as a matter
            of designing new bridges and structures to stay usable afterwards.
            Rock fall appears separately, and the report puts it down to the
            original blasting of the cuts, the slow loosening of rock
            afterwards, and “ice and root action”. <Cite id="S2S-EA-GEO-03" />
          </p>
          <p>
            The province’s own seismic design criteria for its bridges say:
            “This document does not address other potential risks, such as
            landslides or tsunamis.” <Cite id="MOTI-SRDC-05" /> Shaking and
            slopes are managed by different programs, and the corridors fall in
            the gap between them.
          </p>
          <p>
            A rock-fall map built for rain still shows where the loose rock is,
            and an earthquake is a different trigger on the same slopes. How
            long a severed mountain highway in this province has taken to reopen
            is on{" "}
            <Link
              href="/getting-around/"
              className="text-accent underline underline-offset-2"
            >
              getting around
            </Link>
            , where every closure counted was caused by rain.
          </p>
        </Prose>
      ),
    },

    {
      title: "The dikes sit on the ground most likely to move",
      body: (
        <Prose>
          <p>
            A dike is an earth embankment that keeps the river and the sea out
            of land lying lower than they are. On the Fraser delta, the ground a
            dike is built on is the same loose, wet sand that liquefies in an
            earthquake, so the thing holding the water back and the ground most
            likely to move are in the same place. The peer-reviewed review of
            the delta treats subsidence, flooding, liquefaction, dike
            vulnerability and tsunami as one interacting set.{" "}
            <Cite id="CJES-2024" />
          </p>
          <p>
            Richmond has had sections of its own dikes analysed by engineers,
            and published the results in its dike master plans. Those numbers,
            and the gap between them and what the City tells residents, are on{" "}
            <Link
              href="/shaking/ground/"
              className="text-accent underline underline-offset-2"
            >
              ground conditions
            </Link>
            .
          </p>
          <p>
            Sea Island, where Vancouver International Airport sits, is ringed by
            a 15 km perimeter dike, which is being raised by about a metre to a
            total height of 4.7 m along with the pump stations behind it.{" "}
            <Cite id="YVR-SICRP" /> That work is a response to rising sea levels
            and flooding, with ground stability included in it. It is not a
            seismic project. <Cite id="YVR-SICRP" />
          </p>
        </Prose>
      ),
    },

    {
      title:
        "BC Hydro names the parts of its own dams an earthquake is expected to break",
      body: (
        <Prose>
          <p>
            Metro Vancouver’s two water-supply dams, Cleveland on the Capilano
            and Seymour Falls on the Seymour, were each reviewed by an engineer
            in 2024, and neither published conclusion mentions an earthquake.{" "}
            <Cite id="MV-DSP-2026" /> What those reviews say, what the capital
            plan has funded and what has not been published about where the
            water would go are on{" "}
            <Link
              href="/after/dams-and-reservoirs/"
              className="text-accent underline underline-offset-2"
            >
              dams and reservoirs
            </Link>
            .
          </p>
          <p>
            BC Hydro owns the power dams in and near the region. Coquitlam,
            Stave Falls, Alouette and Cheakamus are classified Extreme in the
            provincial register as it stands. <Cite id="BC-DAMS-REG" /> In
            filings to its own regulator, BC Hydro names the part of each dam
            that it expects an earthquake to damage, and the strength of shaking
            at which it expects that to happen. <Cite id="BCH-RRA-F2020" />
          </p>
          <Quote
            speaker="BC Hydro"
            source="Facility Asset Plans, filed with the British Columbia Utilities Commission"
            cite={<Cite id="BCH-RRA-F2020" />}
          >
            <p>
              “Given that these are all Extreme consequence dams, current
              expectations — as outlined in the Canadian Dam Association’s Dam
              Safety Guidelines — are that they should be able to withstand an
              earthquake of intensity expected to occur once every 10,000
              years.”
            </p>
          </Quote>
          <p>
            Every figure BC Hydro gives names a part, not a dam. At Alouette, it
            expects the power tunnel headworks and surge tower to fail in
            shaking of the size expected on average once every 100 to 200 years,
            which “could block the post-earthquake discharge of water from
            Alouette Reservoir to Stave Lake Reservoir”.{" "}
            <Cite id="BCH-RRA-F2020" /> That is the means of letting water out
            of the reservoir, not the dam holding it in. Until the tunnel is
            upgraded, BC Hydro says “Alouette Lake Reservoir will be operated in
            a manner that provides sufficient time to provide emergency response
            following a major earthquake.” <Cite id="BCH-RRA-F2020" />
          </p>
          <p>
            BC Hydro prices each deficiency and states in writing which it is
            fixing and which it is accepting: at Coquitlam the inlet portal
            upgrade is in the plan while the outlet portal and the low level
            outlet “are monitored and will be retained as the consequences are
            expected to be low”. <Cite id="BCH-RRA-F2020" /> Stave Falls records
            no seismic issue at all among the significant risks remaining at the
            dam; its problems are turbine design and obsolete controls.{" "}
            <Cite id="BCH-RRA-F2020" />
          </p>
          <p>
            In 2011 a consultant reported to BC Hydro that key components of
            Ruskin Dam and its powerhouse had seismic withstand levels
            “significantly below” the earthquake the guidelines required them to
            survive, with up to 300 people downstream of the dam in summer.{" "}
            <Cite id="BCH-RUSKIN-SEIAM-11" /> The dam was rebuilt. BC Hydro’s
            2019 reporting records that after a 20 year dam safety
            initiative and 11 years of construction the upper part of the dam
            was finished, and its advisory board concluded the project “has met
            the overall project objectives of withstanding the Maximum Design
            Earthquake”. <Cite id="BCH-RUSKIN-F2019" /> That is a statement
            about what the work was designed to do, not a later verification
            that it does it. Ruskin is in Mission, in the Fraser Valley Regional
            District, outside Metro Vancouver. <Cite id="BC-DAMS-REG" />
          </p>
          <p>
            Coquitlam Dam is where the material in the dam itself is the
            problem. BC Hydro told the regulator in 2006 that “the dam contains
            loose materials that are expected to liquefy during a moderate to
            large earthquake”. <Cite id="BCH-COQUITLAM-RRA-06" /> That is the
            mechanism described on{" "}
            <Link
              href="/shaking/ground/"
              className="text-accent underline underline-offset-2"
            >
              ground conditions
            </Link>
            , written by an owner about its own structure.
          </p>
        </Prose>
      ),
    },

  ],

  lever: {
    heading: "What you can do",
    items: [
      <>
        <strong>
          Ask your local government what it holds for the dam or the dike
          nearest you.
        </strong>{" "}
        Municipalities downstream of a dam receive a defined part of its
        emergency plan. <Cite id="BCDSP-DEP-24" /> A
        resident can ask for it, and can ask Metro Vancouver directly under
        freedom of information. Asking is the route that exists.
      </>,
      <>
        <strong>Look up the slopes and the soil where you live.</strong> The
        free neighbourhood maps for the western municipalities cover slope
        instability as well as liquefaction. <Cite id="MVSMMP" />{" "}
        <Link
          href="/shaking/ground/"
          className="text-accent underline underline-offset-2"
        >
          Ground conditions
        </Link>{" "}
        says how to read them and which municipalities they do not reach yet.
      </>,
      <>
        <strong>Plan around the road in, not the road out.</strong> The province
        gathers its help outside the impact area and pushes it in, and its own
        scenario has landslides cutting transportation routes.{" "}
        <Cite id="PEIRS" /> At home that means enough water, food and medicine
        to last while the roads are being cleared.
      </>,
    ],
    closing: (
      <>
        Almost none of this has been modelled for the region as a whole. What
        has been measured was measured one dam, one dike section and one slope
        at a time, which is why the questions above are local ones.
      </>
    ),
  },
};
