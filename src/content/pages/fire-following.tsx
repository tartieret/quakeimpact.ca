import Link from "next/link";
import { Cite } from "@/components/citation";
import {
  DataTable,
  Figure,
  Photograph,
  Prose,
  Quote,
  VerificationNote,
} from "@/components/page-parts";
import {
  DFPS_SOURCE,
  DedicatedFireMains,
  FIRE_BASE_SOURCE,
  HALLS_ACCURACY,
  HALL_FACTS,
  MAINS_FACTS,
  VancouverFireHalls,
} from "@/components/figures/fire-following";
import type { PageModule } from "./index";

/**
 * The licence line both maps carry.
 *
 * Three City layers go into them, the mains, the fire halls and the city
 * boundary, and the Open Government Licence – Vancouver asks for one
 * acknowledgement rather than one per layer, so the string is said once and
 * taken from a record rather than retyped. The water under both maps is the
 * province's and asks for its own. `licence` on `Figure` exists because an
 * attribution has to travel with the graphic it produced rather than sit on a
 * separate page.
 */
function FireMapLicence() {
  return (
    <>
      {DFPS_SOURCE.attribution}{" "}
      <a
        href={DFPS_SOURCE.licenceUrl}
        className="text-accent underline underline-offset-2"
      >
        Read the licence
      </a>
      . {FIRE_BASE_SOURCE.attribution}{" "}
      <a
        href={FIRE_BASE_SOURCE.licenceUrl}
        className="text-accent underline underline-offset-2"
      >
        Read the licence
      </a>
      .
    </>
  );
}

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
 * Two maps, both City of Vancouver open data under the Open Government Licence
 * – Vancouver, drawn on one window at one scale so a reader carries the shape
 * of the city from the first to the second.
 *
 * The first is the Dedicated Fire Protection System mains. The dataset is runs
 * of main and not a service area, so what is drawn is the network and not a
 * coverage boundary: a boundary would be a hull the project invented and
 * presented in the City's name (`docs/research/maps.md`).
 *
 * **It shares a section with the hydrant photograph, and the two were separate
 * until 12 September 2026.** The system and the City's silence about where it
 * reaches were being made as two arguments, and they are one: the map is where
 * the line falls and the photograph is the only sign of it a resident gets at
 * the kerb. Merging them exposed what the split had hidden, which is that
 * "everywhere else it is the ordinary mains" was being said three times in
 * four hundred words. The map's caption now carries only what a caption can
 * say, the guards, and leaves the geography to the paragraph above it.
 *
 * The second is the fire halls, marked by what could be established about the
 * standard each one is built to. Those classes are the site's reading of the
 * capital plans cited in the section beside them, and the legend says so: the
 * City publishes no such rating, and the licence forbids anything that would
 * suggest it does.
 *
 * The class that carries the section is the third one, and it is worded as a
 * gap in what we know rather than as a gap in the City's record. "Nothing has
 * been published about these thirteen halls" would be a claim over the whole
 * City publication record, and what was searched is two capital plans. "More
 * information needed" is the same fact from inside our own evidence, it is the
 * `VerificationNote` at the end of the section made countable, and it cannot
 * be taken apart by one person who knows of a document we did not find.
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
      "COV-FIREHALLS-DATA",
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
            houses and another 26 per cent in apartments. The study’s own
            summary is that “about 70% of all ignitions occur in residential
            occupancies”.{" "}
            <Cite id="SCAWTHORN-2020" /> That split comes from what was counted
            after the 1994 Northridge earthquake in California, in the United States, applied here
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
            The modelled fire loss for the magnitude 9.0
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
        "Downtown has a second water system for fire, and nothing tells a resident where it ends",
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
          <Figure
            interactive
            alt={`The dedicated fire protection mains sit in a corner of the city about ${MAINS_FACTS.width} by ${MAINS_FACTS.depth}, in a city about ${MAINS_FACTS.cityWidth} across: the downtown peninsula, the West End, and a crossing of False Creek into Fairview Slopes and Kitsilano. What is drawn is the pipe and not a service area, and everywhere the pipe is not, a fire is fought with water from the ordinary mains.`}
            caption={
              <>
                Every run of dedicated fire main the City publishes,{" "}
                {MAINS_FACTS.runs} of them, on the city they serve a corner of.{" "}
                <Cite id="COV-DFPS-DATA" /> The dataset is the network itself,
                so what is drawn is the pipe: the City publishes no service
                area, and a boundary drawn around the pipe would be one we
                invented. Nothing here says how far from a main a hydrant
                reaches. The city limits are reference only, and they are a
                legal line rather than a shoreline, which is why the water under
                them is drawn from the province’s Freshwater Atlas.
              </>
            }
            licence={<FireMapLicence />}
          >
            <DedicatedFireMains />
          </Figure>
          <p>
            The system has not grown since. The last hydrants went into
            Kitsilano in 2003, and the City describes 2003 as the end of the
            build. <Cite id="COV-PREPARES" /> Everywhere else in Vancouver, and
            everywhere in every other municipality, firefighting depends on the
            ordinary water mains. The pumps have never had to draw seawater for
            a fire. <Cite id="VIA-HYDRANTS" />
          </p>
          <p>
            The City’s Hazard and Risk Explorer describes the system at length:
            built to withstand the largest earthquake considered credible for
            the region, able to draw fresh or salt water, hardened mains,
            “hydrants (the big, blue ones)”, two high-capacity pump stations,
            and built on the lesson of the 1906 fire in San Francisco, in the United States.{" "}
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
          <Photograph
            id="vancouver-dfps-hydrant"
            caption={
              <>
                One of them, in Vancouver. The colour is the whole identifier:
                the City tells residents to look for “the big, blue ones”, and
                this is what that means on a corner.{" "}
                <Cite id="COV-EXPLORER-25" /> Where the blue hydrants stop, a
                fire is fought with water from the ordinary mains, the ones the
                same shaking breaks. Nothing on the street says where that line
                falls.
              </>
            }
          />
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
          <Figure
            interactive
            alt={`Vancouver’s ${HALL_FACTS.inCity} fire halls are spread across the whole city. One is finished to a post-disaster standard and ${HALL_FACTS.planned} more are named in a capital plan for replacement or seismic upgrade. The other ${HALL_FACTS.unestablished} are marked as needing more information, because the documents this site has read say nothing either way about them. That is a gap in the evidence and not a finding about the buildings.`}
            caption={
              <>
                Where the halls are, and what the capital plans say about each
                one. <Cite id="COV-CAP-2730" /> <Cite id="COV-CAP-1922" />{" "}
                <Cite id="COV-CAP-2326" /> Hall #17 on Knight Street is the one
                the City describes as finished to a post-disaster standard.
                Halls #8 and #9 are being rebuilt to that standard for 2029;
                hall #2 on Main Street is being replaced; hall #1 is to be
                seismically upgraded; hall #12 in Kitsilano was selected for
                seismic upgrade in the 2019 to 2022 capital plan and no
                completion has been published. Those six are the halls those
                documents name. The {HALL_FACTS.unestablished} marked as needing
                more information are the ones they do not, which is a gap in
                what we have been able to establish and not a finding about the
                buildings: a hall in that class may well be sound, and nothing
                here says otherwise. The three classes are ours, read off those
                documents, and the City publishes no rating of its own. A
                twentieth hall in the University Endowment Lands serves the UEL
                and the University of British Columbia, and is not one of the
                City’s {HALL_FACTS.inCity}.{" "}
                <Cite id="COV-FIREHALLS-DATA" /> {HALLS_ACCURACY}
              </>
            }
            licence={<FireMapLicence />}
          >
            <VancouverFireHalls />
          </Figure>
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
