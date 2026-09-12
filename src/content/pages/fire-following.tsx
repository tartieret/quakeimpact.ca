import Link from "next/link";
import { Cite } from "@/components/citation";
import {
  DataTable,
  MapPlaceholder,
  Prose,
  Quote,
  VerificationNote,
} from "@/components/page-parts";
import type { PageModule } from "./index";

/**
 * Fire following. The body of `/shaking/fire-following/`, ported from
 * `docs/copy/fire-following.md`.
 *
 * Two guards from `docs/research/buildings.md` shape what is here. The fire
 * scenario names travel with every loss figure, so the table carries the
 * earthquake in the row rather than in the caption alone, and the M6.5 New
 * Westminster scenario is absent: the report gives two different losses for it
 * and reconciles neither.
 *
 * The one graphic is the Dedicated Fire Protection System mains, which is the
 * one layer on this subject the site is licensed to draw (City of Vancouver
 * Open Data, Open Government Licence – Vancouver). The dataset is 245 line
 * segments of main and not a service area, so the slot promises the network
 * and not a coverage boundary: a boundary would be a hull the project invented
 * and presented in the City's name (`docs/research/maps.md`).
 */
export const fireFollowing: PageModule = {
  meta: {
    route: "/shaking/fire-following/",
    title: "Fire following",
    nav: "Fire following",
    kicker: "The shaking",
    standfirst:
      "An earthquake starts fires in the same minutes that it breaks the pipes used to put them out. A study for the Institute for Catastrophic Loss Reduction modelled that for the Lower Mainland, and found the closer, smaller earthquake far worse than the offshore one.",
    /**
     * First-cited order, which is the order the markers are numbered in. It is
     * also the order of "Sources on this page" at the foot of the copy file.
     */
    references: [
      "SCAWTHORN-2020",
      "DCRRA-2025",
      "PEIRS",
      "COV-PREPARES",
      "COV-DFPS-2001",
      "COV-DFPS-DATA",
      "VIA-HYDRANTS",
      "COV-EXPLORER-25",
      "VBBL-2025",
      "COV-OAKRIDGE-FE",
      "COV-1489WB",
      "COV-600ROBSON",
      "COV-CAP-2730",
      "COV-CAP-1922",
      "COV-CAP-2326",
      "BBY-FS8",
      "DNV-NORGATE",
      "RICH-CSC-2026-03",
      "CNV-CAPITAL-26",
    ],
  },

  sections: [
    {
      title: "The shaking stops and the fires start",
      body: (
        <Prose>
          <p>
            Fires after an earthquake do not start in one place. They start in
            many buildings at once, in the ordinary things that run through a
            home. In the modelling for the Lower Mainland, about half of the
            ignitions are electrical and about a quarter gas-related.{" "}
            <Cite id="SCAWTHORN-2020" /> About half begin in single-family
            houses and another 26 per cent in apartments, so “about 70% of all
            ignitions occur in residential occupancies”.{" "}
            <Cite id="SCAWTHORN-2020" /> That split comes from what was counted
            after the 1994 Northridge earthquake in California, applied here
            rather than measured here. <Cite id="SCAWTHORN-2020" />
          </p>
          <p>
            Almost half of the fires an earthquake would start anywhere in
            British Columbia would start in Metro Vancouver, with the heaviest
            concentration in the central business district.{" "}
            <Cite id="DCRRA-2025" />
          </p>
          <p>
            The city has been here before, without an earthquake. The Great
            Vancouver Fire of 1886 “killed 21 and destroyed 600~1,000
            buildings”. <Cite id="SCAWTHORN-2020" />
          </p>
        </Prose>
      ),
    },

    {
      title:
        "The hydrants go dry because the same shaking breaks the water mains",
      body: (
        <Prose>
          <p>
            A fire engine does not carry much water. It carries enough to get
            started, and then it connects to a hydrant. The hydrant is the end
            of a buried pipe, and buried pipe is what an earthquake is good at
            breaking.
          </p>
          <p>
            Across the study area the modelling runs to as many as 15,000
            repairs to buried pipe, “the precise number and location depending
            on the scenario”, and “the general rule is about 20% of repairs are
            full breaks”. <Cite id="SCAWTHORN-2020" /> In three of the modelled
            earthquakes the fire loss is driven “primarily due to lack of water
            for firefighting”. <Cite id="SCAWTHORN-2020" /> Why the mains break,
            and how long they take to fix, is on the{" "}
            <Link
              href="/after/water/"
              className="text-accent underline underline-offset-2"
            >
              water page
            </Link>
            .
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Help from the next town cannot cross a bridge nobody has inspected yet",
      body: (
        <Prose>
          <p>
            There are 98 fire halls in the study area and roughly 200 fire
            engines available for immediate firefighting.{" "}
            <Cite id="SCAWTHORN-2020" /> When a city runs short, it calls its
            neighbours. That is expected to fail in the first hours. Every
            department will be holding on to its own crews, help from further
            away in the Lower Mainland is several hours of travel, and “The
            Fraser and other rivers are all barriers if bridges are impassable,
            which they will be at least initially due to the need to inspect for
            damage.” <Cite id="SCAWTHORN-2020" />
          </p>
          <p>
            Most engines in the study area, Burnaby’s among them, carry 4 inch
            large-diameter hose rather than the 5 inch hose Vancouver Fire
            Rescue Services uses, “and lack adapters, which is an obstacle to
            effective mutual aid”. <Cite id="SCAWTHORN-2020" /> Two departments
            can arrive at the same fire and be unable to join their hoses.
          </p>
          <p>
            Phone systems “will sustain some damage but not enough to reduce
            functionality”. The problem is how many people call at once.
            “Saturation, especially of the 911 system, will reduce functionality
            to a great degree, for several hours or more.”{" "}
            <Cite id="SCAWTHORN-2020" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Fire loss follows how close the earthquake is, not how big it is",
      body: (
        <Prose>
          <p>
            The offshore earthquake everyone has heard of is the smallest fire
            event of the set. The modelled fire loss for the magnitude 9.0
            Cascadia earthquake is $162 million. For a magnitude 7.3 crustal
            earthquake in the Georgia Strait, close to downtown, it is $10.7
            billion, about 66 times as much. <Cite id="SCAWTHORN-2020" />
          </p>
          <p>
            The Cascadia rupture is far offshore, so the ground motion it
            delivers in Metro Vancouver is “relatively modest”. The Georgia
            Strait earthquake has “an epicentre very close to downtown
            Vancouver” and delivers “very strong” motion. The number of fires
            follows the shaking on the spot, not the magnitude in the headline.{" "}
            <Cite id="SCAWTHORN-2020" />
          </p>
          <Quote
            speaker="Charles Scawthorn"
            source="Fire following earthquake in the Vancouver region, Institute for Catastrophic Loss Reduction, 2020"
            cite={<Cite id="SCAWTHORN-2020" />}
          >
            <p>
              “the largest number of fires in the Lower Mainland is not likely
              to be caused by a large CSZ event, but rather by closer shallower
              crustal events that occur during the build-up of crustal stresses
              prior to the main subduction zone event.”
            </p>
          </Quote>
          <p>
            CSZ there is the Cascadia Subduction Zone, the offshore fault. The
            federal work on building damage reaches the same ordering through
            ground motion rather than ignitions. See{" "}
            <Link
              href="/shaking/buildings/"
              className="text-accent underline underline-offset-2"
            >
              buildings
            </Link>
            .
          </p>
          <DataTable
            caption="Fires started and fire loss for four of the earthquakes modelled in a 2020 study for the Institute for Catastrophic Loss Reduction. Each loss belongs to the earthquake beside it and means nothing without it."
            columns={["Earthquake", "Fires started", "Modelled fire loss"]}
            rows={[
              ["M9.0 Cascadia subduction", "16", "$162 million"],
              ["M6.8 Juan de Fuca in-slab", "106", "$7.4 billion"],
              ["M7.3 Leech River–Devil’s Mountain", "4", "$0.01 billion"],
              ["M7.3 Georgia Strait crustal", "216", "$10.7 billion"],
            ]}
            note={
              <>
                Median estimates in Canadian dollars, for fire damage only.{" "}
                <Cite id="SCAWTHORN-2020" />
              </>
            }
          />
          <p>
            Those figures are median estimates, and the study says so: “These
            are median estimates — there are significant probabilities of
            greater or less damage.” <Cite id="SCAWTHORN-2020" /> They count
            fire damage only, and the federal scenario studies of building
            damage count everything except fire, so the two sets of numbers are
            complements and adding them would be wrong.{" "}
            <Cite id="SCAWTHORN-2020" />
          </p>
          <p>
            The earthquakes are the ones Natural Resources Canada selected, but
            “the NRCan estimates of ground motion were not available for this
            study; therefore, this study performed its own estimates of ground
            motion”, so this is work aligned with the federal studies rather
            than part of them. <Cite id="SCAWTHORN-2020" /> It leaves out gas
            and fuel transmission line breaks, the vulnerability of energy
            facilities, and what a winter storm would do to the response.{" "}
            <Cite id="SCAWTHORN-2020" />
          </p>
          <p>
            The study sets the limit of its own method. Fire following an
            earthquake “is a highly non-linear process, modelling of which does
            not have great precision and is such that in many cases the only
            clear result is differentiation between situations of a few small
            fires, versus major conflagration.” <Cite id="SCAWTHORN-2020" />
          </p>
          <p>
            The province’s planning scenario says fires following an earthquake
            in Vancouver “could cause an additional $10 billion in damage”{" "}
            <Cite id="PEIRS" /> and the provincial risk assessment gives losses
            ranging “from upwards of $150 million from an M9 Cascadia
            Subduction Zone earthquake to more than $10 billion if an M7.3
            shallow crustal earthquake happens in the Georgia Strait”.{" "}
            <Cite id="DCRRA-2025" /> Both are quoting the same study. They are
            one finding stated twice, not two that agree.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Downtown has a second water system for fire, and the rest of the city does not",
      body: (
        <Prose>
          <p>
            The Dedicated Fire Protection System is a $52 million network of two
            saltwater pumping stations and its own earthquake-resistant
            pipeline, serving the downtown peninsula, the West End, Fairview
            Slopes and Kitsilano. <Cite id="COV-PREPARES" /> The first pump
            station opened at False Creek in September 1995, the second at Coal
            Harbour in February 1997, and the pipeline was
            finished in 2003. <Cite id="COV-PREPARES" /> The Fairview Slopes
            extension was justified partly “to protect Vancouver Hospital, the
            primary emergency care facility for the province”.{" "}
            <Cite id="COV-DFPS-2001" /> The City publishes the mains themselves
            as an open data layer, street by street. <Cite id="COV-DFPS-DATA" />
          </p>
          <MapPlaceholder
            title="The dedicated fire mains"
            caption="The system’s mains run across the downtown peninsula, the West End and False Creek. Everywhere else in the city, the water for fighting a fire comes through the ordinary mains. The dataset is the network itself, so the drawing is the pipe and not a service area."
            dataset="City of Vancouver Open Data, Dedicated Fire Protection System water mains"
            licence={
              <>
                Open Government Licence – Vancouver. <Cite id="COV-DFPS-DATA" />
              </>
            }
          />
          <p>
            The system has not grown since. The last hydrants went into
            Kitsilano in 2003, and the City describes 2003 as the end of the
            build. <Cite id="COV-PREPARES" /> Everywhere else in Vancouver, and
            everywhere in every other municipality, firefighting depends on the
            ordinary water mains. The pumps have never had to draw seawater for
            a fire. <Cite id="VIA-HYDRANTS" />
          </p>
        </Prose>
      ),
    },

    {
      title:
        "The City’s page for residents never says where the dedicated fire system reaches",
      body: (
        <Prose>
          <p>
            The City’s Hazard and Risk Explorer describes the system at length:
            built to withstand the largest earthquake considered credible for
            the region, able to draw fresh or salt water, hardened mains,
            “hydrants (the big, blue ones)”, two high-capacity pump stations,
            and built on the lesson of the San Francisco fire of 1906.{" "}
            <Cite id="COV-EXPLORER-25" /> It names no coverage area.
          </p>
          <p>
            The coverage sentence exists, on a different page, filed under what
            the City has built rather than under what a resident can do.{" "}
            <Cite id="COV-PREPARES" /> No map, address lookup or neighbourhood
            check on vancouver.ca tells a resident which side of the line they
            are on. The blue hydrants are the only part of the description a
            reader can act on, and they arrive without the geography beside
            them.
          </p>
        </Prose>
      ),
    },

    {
      title: "A tall building’s sprinklers draw on the mains that break",
      body: (
        <Prose>
          <p>
            New construction in Vancouver has to be sprinklered. “However,
            sprinklers rely on underground water mains for supply, which are
            likely to fail in a major earthquake.” <Cite id="SCAWTHORN-2020" />
          </p>
          <p>
            California has required an answer to that for decades: in its
            high-earthquake zones, a high-rise has to hold its own secondary
            water supply on site, typically about 60,000 litres. “Vancouver and
            the Provincial Building By-laws lack a similar provision.”{" "}
            <Cite id="SCAWTHORN-2020" /> The Vancouver Building By-law in force
            today still carries no such requirement. <Cite id="VBBL-2025" /> The
            study puts the cost at “significantly less than 1% of the value of
            the building — perhaps on the order of the cost to renovate the
            building lobby”, taking up “the equivalent of perhaps two parking
            spaces”. <Cite id="SCAWTHORN-2020" />
          </p>
          <p>
            Vancouver already builds them, for other reasons. Oakridge Centre’s
            fire engineering records carry a secondary water supply designed “to
            provide a 2-hour design duration”, sized for the City’s assumption
            of three fires at once and not for an earthquake{" "}
            <Cite id="COV-OAKRIDGE-FE" />; a building comment on 1489 West
            Broadway raises “possibly the provision of secondary water supply
            (i.e. water tank)” <Cite id="COV-1489WB" />; and the drawings for
            600 Robson Street label a “SECONDARY WATER SUPPLY ROOM” on the
            second parking level. <Cite id="COV-600ROBSON" /> None of it has
            ever been required, and none of it has been tied to an earthquake.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Fire halls are being replaced one at a time, and most were built before the standard",
      body: (
        <Prose>
          <p>
            Vancouver has 19 fire halls and five specialty fire facilities,
            worth about $642 million to replace, about 58 per cent of them in
            good or fair condition, and 30 years old on average.{" "}
            <Cite id="COV-CAP-2730" /> The City’s own capital plan states the
            problem: “There is also a need to increase the resilience of these
            facilities to ensure that most, if not all, will remain operational
            after a major event such as an earthquake.”{" "}
            <Cite id="COV-CAP-2730" />
          </p>
          <p>
            Fire Hall #12 in Kitsilano was chosen for seismic upgrade because it
            sits in “a relatively large geographic area (west of Arbutus Street)
            where no fire hall meets current seismic standards”, and the same
            document records that the Metro Core “has five fire halls, all of
            which were built in the 1970s or earlier”.{" "}
            <Cite id="COV-CAP-1922" />
          </p>
          <p>
            Individual halls are moving. Hall #17 on Knight Street opened in
            September 2023 as a post-disaster communications hub; halls #8 in
            Downtown South and #9 in Grandview are being rebuilt to
            post-disaster standard for 2029; hall #2 on Main Street, built in
            1974, no longer meets current seismic standards and is being
            replaced; hall #1 is to be seismically upgraded.{" "}
            <Cite id="COV-CAP-2730" /> <Cite id="COV-CAP-2326" /> Against that,
            the whole climate and seismic resilience category of the 2027 to
            2030 capital plan is $24 million of a $3.5 billion plan, and the
            seismic part of it is $1 million for risk assessments on five City
            buildings. <Cite id="COV-CAP-2730" />
          </p>
          <p>
            Elsewhere the picture is thin and uneven. Burnaby builds new halls
            to post-disaster standard, and says so for Fire Station 8 on Burnaby
            Mountain and Fire Station 4 at Greystone, which opened in July 2024.{" "}
            <Cite id="BBY-FS8" /> The District of North Vancouver says the
            Norgate hall replacement “will be built to post-disaster standards”.{" "}
            <Cite id="DNV-NORGATE" /> In Richmond, the fire chief told a council
            committee in March 2026 that “all Richmond firehalls are rated to
            withstand major disasters”, with the oldest under renovation and the
            second oldest brought up to standard some years earlier.{" "}
            <Cite id="RICH-CSC-2026-03" /> That is an officer’s answer recorded
            in minutes rather than an engineering rating hall by hall, and the
            phrase is not the one the building codes use.
          </p>
          <VerificationNote label="Not published">
            How many of Vancouver’s 19 fire halls meet a post-disaster standard
            has not been published: the City’s own phrase for what it is doing
            is “the upgrade and replacement of several fire halls”.{" "}
            <Cite id="COV-CAP-2730" /> Surrey and New Westminster publish
            nothing on the seismic standard of any of their fire halls,
            including Surrey’s new Fleetwood hall. The City of North Vancouver
            has one fire hall, and its capital plan funds a fire hall assessment
            and a long term plan for city fire halls without either of them
            mentioning earthquakes. <Cite id="CNV-CAPITAL-26" />
          </VerificationNote>
        </Prose>
      ),
    },
  ],

  lever: {
    heading: "What you can do",
    items: [
      <>
        <strong>Find out which side of the line you are on.</strong> The
        dedicated fire system covers the downtown peninsula, the West End,
        Fairview Slopes and Kitsilano, and nothing else.{" "}
        <Cite id="COV-PREPARES" /> The City’s own identifier for it is the
        hydrant colour: the big blue ones are on the dedicated system.{" "}
        <Cite id="COV-EXPLORER-25" /> Everywhere else, including most of
        Vancouver, the water for fighting a fire comes through the ordinary
        mains.
      </>,
      <>
        <strong>
          If you live or work in a tall building, ask what water the sprinklers
          have.
        </strong>{" "}
        Sprinklers draw on the underground mains, and the mains are what breaks.{" "}
        <Cite id="SCAWTHORN-2020" /> California requires a high-rise in its
        earthquake zones to keep its own supply on site; Vancouver and the
        provincial by-laws do not. <Cite id="SCAWTHORN-2020" />{" "}
        <Cite id="VBBL-2025" /> The published price for it is well under 1 per
        cent of a building’s value and about two parking spaces of floor area,
        which makes it a fair question to put to a strata council or a building
        owner. <Cite id="SCAWTHORN-2020" />
      </>,
      <>
        <strong>Plan on the first hours being yours.</strong> The 911 system is
        expected to saturate for several hours or more, and help between fire
        departments is expected to be largely ineffective over the same period.{" "}
        <Cite id="SCAWTHORN-2020" /> A small fire stopped in its first minutes
        is one nobody has to cross a broken city to reach.
      </>,
    ],
  },
};
