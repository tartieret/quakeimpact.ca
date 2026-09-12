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
      "Landslides, dikes and dams are the damage that arrives once the shaking stops. Most of it sits outside the official damage estimates, which count buildings and the people inside them and say so.",
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
      "BCDSR-40-2016",
      "BCDSP-DSR-INFO",
      "MV-DSP-2026",
      "BC-DAMS-REG",
      "MV-CAPEX-2026",
      "OAG-DAMS-FU-25",
      "OAG-DAMS-21",
      "BCH-RRA-F2020",
      "BCH-RUSKIN-SEIAM-11",
      "BCH-RUSKIN-F2019",
      "BCH-COQUITLAM-RRA-06",
      "BCDSP-DEP-24",
      "BCH-DAMFAQ",
      "MV-CLEVELAND-UPDATES",
      "MV-CDSEP",
      "MV-DSP-2022",
    ],
  },

  sections: [
    {
      title: "The official damage estimates count buildings and stop there",
      body: (
        <Prose>
          <p>
            Most published damage figures for an earthquake here come from the
            Geological Survey of Canada’s scenario work, and it is careful about
            its own limits. It counts “only damage to buildings, and their
            inhabitants, from earthquake shaking”. Landslides, liquefaction,
            fire following and aftershocks are “not currently included”.{" "}
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
            Nobody has folded those hazards into a number for this region. That
            is not the same as nobody having looked at them, and the difference
            matters in every section below.
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
            close to the city is set in January, days after an atmospheric river
            has soaked the ground. <Cite id="PEIRS" /> Its account of what
            happens in the first minutes says: “Landslides and rock falls are
            generated in many areas, cutting off transportation routes. Flooding
            is increased by the recent wet weather event with some dikes
            failing.” <Cite id="PEIRS" />
          </p>
          <p>
            That is a description of one scenario in one wet January, and it is
            not a map. The same strategy assumes that “areas will be isolated”,
            with large parts of the impact area unreachable by road because of
            landslides, liquefaction and bridge damage, and it does not say
            which areas. <Cite id="PEIRS" />
          </p>
          <p>
            Where the roads run matters because of how the province plans to
            help. Provincial staging areas “are located outside the impact area
            and will be used to organize, prioritize, and disseminate critical
            resources”. <Cite id="PEIRS" /> Help is gathered outside the shaking
            and pushed in. Two of the roads it would come in on run through
            mountains: Highway 99 north through the Sea to Sky corridor, and
            Highway 1 east through the Fraser Canyon.
          </p>
          <VerificationNote label="Not published">
            Nobody has published a map of where an earthquake would set off
            landslides along the Sea to Sky corridor or the Fraser Canyon. Every
            seismic landslide product that exists for this part of the province
            covers the western municipalities of Metro Vancouver, which stops
            well short of either corridor. <Cite id="MVSMMP" />
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
            There is landslide mapping for the Sea to Sky corridor, and it is
            detailed. Two maps published by the Geological Survey of Canada in
            2009 rate the corridor for rock falls and rock slides, and for
            debris flows, at a resolution of 25 m. <Cite id="GSC-OF-6169" />{" "}
            Each rating is a weighted sum of things about the slope: the rock
            type, how steep it is, which way it faces, what the surface is made
            of, how far it is from a stream. Not one of those ingredients is an
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
            None of this is an oversight. The province’s own seismic design
            criteria for its bridges say plainly: “This document does not
            address other potential risks, such as landslides or tsunamis.”{" "}
            <Cite id="MOTI-SRDC-05" /> Shaking and slopes are managed by
            different programs, and the corridors fall in the gap between them.
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
            , and those closures were caused by rainfall rather than by an
            earthquake.
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
            vulnerability and tsunami as one interacting set rather than as five
            separate risks. <Cite id="CJES-2024" />
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
            seismic project and should not be read as one.{" "}
            <Cite id="YVR-SICRP" />
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Both water-supply dams were reviewed in 2024, and neither published conclusion mentions an earthquake",
      body: (
        <Prose>
          <p>
            Metro Vancouver owns the dams that hold back the reservoirs the
            region drinks from. Two of them, Cleveland Dam on the Capilano and
            Seymour Falls Dam on the Seymour, are classified Extreme.
          </p>
          <p>
            Extreme is the top of the province’s five-tier consequence scale,
            and a consequence class is a statement about what is downstream
            rather than about the dam itself. It means that if the dam failed,
            more than 100 people could die, and that people are “ordinarily or
            regularly located in the dam-breach inundation zone, whether to
            live, work or recreate”. <Cite id="BCDSR-40-2016" /> It is not a
            prediction that a dam will fail, and it says nothing about how
            likely that is.
          </p>
          <p>
            What the class does is set the rules the owner works under. A dam in
            that class must be reviewed at least every seven years by an
            engineer qualified in dam safety, “to determine if the dam is safe”,
            with the report sent to a provincial dam safety officer.{" "}
            <Cite id="BCDSR-40-2016" /> Not doing it is an offence carrying a
            fine of up to $200,000 or six months in prison.{" "}
            <Cite id="BCDSR-40-2016" /> The engineer signs a statement with one
            of three answers on it: reasonably safe, reasonably safe but with
            deficiencies, or not safe and needing urgent action.{" "}
            <Cite id="BCDSP-DSR-INFO" /> Another engineer has to peer-review the
            work. <Cite id="BCDSP-DSR-INFO" />
          </p>
          <p>
            Both dams were reviewed, and both reviews were finished in 2024.{" "}
            <Cite id="MV-DSP-2026" /> Metro Vancouver reports the conclusions to
            its Water Committee every year. <Cite id="MV-DSP-2026" />
          </p>
          <DataTable
            caption="Metro Vancouver’s two water-supply dams, the class the province puts them in, and the conclusion Metro Vancouver publishes from each dam’s most recent safety review."
            columns={[
              "Dam",
              "Consequence class",
              "Most recent review",
              "What the published conclusion says",
            ]}
            rows={[
              [
                "Cleveland Dam",
                "Extreme",
                "Started 2023, completed 2024, report sent to the province in December 2024",
                "“The review identified no unsafe or unacceptable conditions related to design, construction, or operation.”",
              ],
              [
                "Seymour Falls Dam",
                "Extreme",
                "Started 2021, finalised 2024, report sent to the province in June 2024",
                "“The review concluded that the dam is reasonably safe, operated safely, maintained in a safe condition, and that surveillance is adequate to detect any developing safety problems.”",
              ],
            ]}
            note={
              <>
                Extreme is a consequence class. It describes what lies
                downstream if a dam were to fail, and it is neither a prediction
                that one will fail nor a measure of how likely that is.{" "}
                <Cite id="BCDSR-40-2016" /> Both conclusions are Metro
                Vancouver’s own summaries, reported to its Water Committee, of
                reviews that have not been published. Neither mentions
                earthquakes. <Cite id="MV-DSP-2026" />
              </>
            }
            minWidth="46rem"
          />
          <p>
            Neither conclusion mentions earthquakes, ground shaking or how
            either dam would perform in one. <Cite id="MV-DSP-2026" />
          </p>
          <p>
            The routine work behind those reviews is done to the letter. Staff
            walk both dams at least weekly and inspect them formally twice a
            year, and the instruments buried in them are read at intervals from
            near-continuous to annual, with the readings checked by staff every
            weekday. <Cite id="MV-DSP-2026" /> Every one of those intervals is
            what the regulation asks of a dam in this class.{" "}
            <Cite id="BCDSR-40-2016" /> In the provincial register both dams sit
            at risk level 3, which the province labels stable.{" "}
            <Cite id="BC-DAMS-REG" /> That is the best rating any Extreme dam in
            British Columbia currently holds, and 20 of the province’s 56
            Extreme dams are rated worse. <Cite id="BC-DAMS-REG" />
          </p>
          <p>
            And the seismic work is still ahead. Metro Vancouver’s capital
            reporting, as at 31 May 2026, has a Cleveland Dam Seismic Stability
            Evaluation in design from 2024 to 2027 at $1.2 million, a Seymour
            Falls Dam Seismic Stability Assessment in design from 2025 to 2032
            at $14.15 million, and Cleveland Dam MCE Seismic Upgrades not
            started, scheduled from 2028 to 2034, at $25 million.{" "}
            <Cite id="MV-CAPEX-2026" /> MCE stands for Maximum Credible
            Earthquake, the largest earthquake engineers judge to be credible at
            the site. That the owner is still funding the evaluations, and has
            not begun the upgrade, is the clearest sign that the 2024 reviews
            did not close the earthquake question.
          </p>
          <VerificationNote label="Not published">
            The review reports themselves are not public, and neither are the
            names of the engineers who wrote them, any list of deficiencies, or
            the assurance statement each one signed. What is published each year
            is Metro Vancouver’s own summary of them, a paragraph per dam.{" "}
            <Cite id="MV-DSP-2026" />
          </VerificationNote>
        </Prose>
      ),
    },

    {
      title:
        "The programme that audits the dams runs on less than half the staff it says it needs",
      body: (
        <Prose>
          <p>
            Reviews are the owner’s duty. Audits are the province’s, and they
            run on roughly a five-year cycle for a dam in the Extreme class.{" "}
            <Cite id="MV-DSP-2026" /> The last audits of Cleveland Dam and
            Seymour Falls Dam were completed in 2020, and as of June 2026 the
            follow-up audits were “being planned by the Dam Safety Officer for
            2026”. <Cite id="MV-DSP-2026" />
          </p>
          <p>
            The province has said why, in its own words. Its dam safety
            programme has 10 staff against an assessed need of 25, staffing
            “deteriorated in 2024”, and “due to increasing staff shortages, we
            are not meeting our program objectives under our existing Dam Safety
            Audit policy (2013). Currently we are risk managing which audits we
            can complete and are only able to target the very highest risk
            dams.” <Cite id="OAG-DAMS-FU-25" />
          </p>
          <p>
            That statement was written for the Auditor General of British
            Columbia, who concluded in September 2021, after auditing the years
            2019 and 2020, that “the ministry has not effectively overseen the
            safety of dams in B.C. While it promoted dam owner compliance with
            regulatory requirements, it did not adequately verify and enforce
            compliance.” <Cite id="OAG-DAMS-21" /> Nine recommendations were
            made and all nine were accepted. <Cite id="OAG-DAMS-21" /> As at 31
            March 2025, two of the nine were complete.{" "}
            <Cite id="OAG-DAMS-FU-25" />
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
            BC Hydro owns the power dams in and near the region, and its
            published record is a different one. Coquitlam, Stave Falls,
            Alouette and Cheakamus are classified Extreme in the provincial
            register as it stands. <Cite id="BC-DAMS-REG" /> In filings to its
            own regulator, BC Hydro names the part of each dam that it expects
            an earthquake to damage, and the strength of shaking at which it
            expects that to happen. <Cite id="BCH-RRA-F2020" />
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
            of the reservoir, not the dam holding it in, and the distinction is
            the whole of it. Until the tunnel is upgraded, BC Hydro says
            “Alouette Lake Reservoir will be operated in a manner that provides
            sufficient time to provide emergency response following a major
            earthquake.” <Cite id="BCH-RRA-F2020" /> A reservoir run with a
            margin for evacuation.
          </p>
          <p>
            Naming a deficiency is not the same as leaving it. BC Hydro prices
            each one and states in writing which it is fixing and which it is
            accepting: at Coquitlam the inlet portal upgrade is in the plan
            while the outlet portal and the low level outlet “are monitored and
            will be retained as the consequences are expected to be low”.{" "}
            <Cite id="BCH-RRA-F2020" /> And where there is nothing to name, the
            filing says so. Stave Falls records no seismic issue at all among
            the significant risks remaining at the dam; its problems are turbine
            design and obsolete controls. <Cite id="BCH-RRA-F2020" />
          </p>
          <p>
            One dam near the region has been all the way round this loop in
            public. In 2011 a consultant reported to BC Hydro that key
            components of Ruskin Dam and its powerhouse had seismic withstand
            levels “significantly below” the earthquake the guidelines required
            them to survive, with up to 300 people downstream of the dam in
            summer. <Cite id="BCH-RUSKIN-SEIAM-11" /> The dam was rebuilt. BC
            Hydro’s 2019 reporting records that after a 20 year dam safety
            initiative and 11 years of construction the upper part of the dam
            was finished, and its advisory board concluded the project “has met
            the overall project objectives of withstanding the Maximum Design
            Earthquake”. <Cite id="BCH-RUSKIN-F2019" /> That is a statement
            about what the work was designed to do rather than a later
            verification that it does it, and Ruskin is in Mission, in the
            Fraser Valley Regional District, not in Metro Vancouver.{" "}
            <Cite id="BC-DAMS-REG" />
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

    {
      title:
        "The maps of what lies downstream of a dam exist, and the public does not see them",
      body: (
        <Prose>
          <p>
            Somebody has worked out what would be under water if either dam
            failed. They had to: the consequence class depends on knowing who is
            down there, and the owner of a dam this size must keep a dam
            emergency plan with an evacuation area map in it.{" "}
            <Cite id="BCDSR-40-2016" /> <Cite id="BCDSP-DEP-24" /> Both plans
            were updated in March 2026. <Cite id="MV-DSP-2026" />
          </p>
          <p>
            Where those maps go is set out in the regime. The dam owner, the
            emergency dam contact and the provincial dam safety officer hold the
            whole plan. The local emergency contact holds a defined part of it.{" "}
            <Cite id="BCDSP-DEP-24" /> Nothing in the rules requires any of it
            to be published, and nothing in them forbids it either.{" "}
            <Cite id="BCDSR-40-2016" /> <Cite id="BCDSP-DEP-24" />
          </p>
          <p>
            The same utility does publish this kind of thing elsewhere. BC Hydro
            put out dam-failure evacuation brochures for Campbell River and the
            Strathcona Regional District, both in 2014, both on Vancouver
            Island. <Cite id="BCH-DAMFAQ" /> Nothing comparable has been
            published for the communities below its Lower Mainland dams.{" "}
            <Cite id="BCH-DAMFAQ" />
          </p>
          <p>
            Neither of Metro Vancouver’s dams had a public-facing alarm system
            in 2020, in the utility’s own words, and one is now being built on
            the Capilano River with sirens, lights and river level gauges,
            targeted for 2027. <Cite id="MV-CLEVELAND-UPDATES" />{" "}
            <Cite id="MV-DSP-2026" /> Its alarms are for an unscheduled release
            of water from the dam. They do not sound for heavy rain or spring
            melt, and they are not a dam-breach or earthquake warning.{" "}
            <Cite id="MV-CDSEP" />
          </p>
          <VerificationNote label="Not published">
            Downstream inundation and evacuation mapping for either Metro
            Vancouver dam has not been published, and nobody has refused to
            publish it. Metro Vancouver listed a river users study, river
            hydraulic modelling, downstream hazards studies and an updated
            public safety risk assessment for the Capilano in its 2022-to-2024
            programme, and none of them has appeared. <Cite id="MV-DSP-2022" />
          </VerificationNote>
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
        Municipalities downstream of a dam receive part of its emergency plan,
        including the evacuation area material. <Cite id="BCDSP-DEP-24" /> A
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
        <Cite id="PEIRS" /> What that means at home is the same as everywhere
        else on this subject: enough water, food and medicine to be
        self-sufficient while the roads are being cleared.
      </>,
    ],
    closing: (
      <>
        Almost none of this has been modelled for the region as a whole. What
        has been measured was measured one dam, one dike section and one slope
        at a time, which is why the local answer is the one worth chasing.
      </>
    ),
  },
};
