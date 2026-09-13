import Link from "next/link";
import { Cite } from "@/components/citation";
import {
  Figure,
  Photograph,
  Prose,
  DataTable,
  VerificationNote,
} from "@/components/page-parts";
import {
  ApproachAgainstSpan,
  MasseyThreeNumbers,
  ServiceLevelLadder,
} from "@/components/figures/transportation";
import {
  CrossingName,
  CrossingsLicence,
  CrossingsMap,
} from "@/components/figures/crossings-map";
import { CROSSINGS_FACTS } from "@/content/crossings";
import type { PageModule } from "./index";

/**
 * Transportation. The body of `/after/transportation/`, ported from
 * `docs/copy/transportation.md`.
 *
 * The words are the copy's, verbatim. The one reader-facing string the copy
 * does not write is the table caption, which names the table for a screen
 * reader.
 *
 * The page owns the engineering: the Ministry's criteria, the crossings, the
 * displacement figures and the inspection allowance. What the province and the
 * City plan for people while the crossings are shut belongs to
 * `/getting-around/`, and the two pages link to each other rather than repeat
 * one another.
 */
export const transportation: PageModule = {
  meta: {
    route: "/after/transportation/",
    title: "Transportation",
    description:
      "British Columbia designates bridges on the routes that must stay open for emergency vehicles, and states that it is not retrofitting them to stay in service.",
    nav: "Transportation",
    kicker: "Life afterwards",
    standfirst:
      "British Columbia designates bridges on the routes that must stay open for emergency vehicles after a major earthquake as its first retrofit priority. In the same document, the Ministry states that it is not retrofitting the bridges on those routes to remain in service.",
    /**
     * First-cited order, which is the order the markers are numbered in. It is
     * also the order of "Sources on this page" at the foot of the copy file.
     */
    references: [
      "MOTI-SRDC-05",
      "MOTI-S6-SEC4",
      "QB-MOTH-95",
      "GEB-CGS-08",
      "NAB-ICCHGE-08",
      "OAK-13WCEE",
      "OAK-BASIS-22",
      "MISSION-CGS-18",
      "MOTI-S6-SEC6",
      "GMC-TUNNEL-19",
      "MOTI-MASSEY",
      "KSB-2010",
      "AFB-CGS-17",
      "BCGOV-2026-PATT",
      "PM-SEI-17",
      "PM-IABSE-17",
      "PEIRS",
      "BCSIMS-22",
      "USGS-2015EQ",
      "CBC-2015",
    ],
  },

  sections: [
    {
      title: "The province’s own criteria set two standards and buy one",
      body: (
        <Prose>
          <p>
            From §2.1.2 of the BC Ministry of Transportation’s 2005 seismic
            retrofit design criteria: “In the Lower Mainland and on Vancouver Island a
            system of routes have been designated as Disaster Response Routes
            (DRRs). Disaster Response Routes are corridors that must be kept
            open for emergency vehicle response following a major earthquake.
            Lifeline bridges and bridges on Disaster Response Routes are being
            retrofitted as the highest priority in the first phase of the
            retrofit program.”{" "}
            <Cite id="MOTI-SRDC-05" />
          </p>
          <p>
            From §2.2 of the same document, two sections later: “Functional
            retrofitting requires that important (Lifeline and DRR) bridges
            remain in service after the design earthquake. … The Ministry is not
            anticipating functional retrofitting in the current stage of
            retrofitting; it may be considered in a future stage.”{" "}
            <Cite id="MOTI-SRDC-05" />
          </p>
          <p>
            The position has not changed in twenty years. The Ministry’s
            February 2025 seismic design supplement says the objective of the
            retrofit program remains “to continue to reduce the risk of bridge
            collapse”, with performance matching a new bridge as an “ultimate
            objective” approached in stages. <Cite id="MOTI-S6-SEC4" />
          </p>
          <p>
            Retrofits are carried out against a 475-year earthquake. New
            lifeline crossings are designed against a 2,475-year earthquake.{" "}
            <Cite id="MOTI-SRDC-05" /> <Cite id="MOTI-S6-SEC4" />
          </p>
        </Prose>
      ),
    },

    {
      title:
        "A bridge that survives is not a bridge you can drive over the next morning",
      body: (
        <Prose>
          <p>The Ministry’s three retrofit service levels, in its own words:</p>
          <p>
            <strong>Safety 2</strong>: “Limited access (e.g. reduced or
            designated lanes, emergency traffic). It is recognized that
            approximately 24 hours may be needed to complete a post-earthquake
            inspection of the bridge.”
          </p>
          <p>
            <strong>Safety 1</strong>: “limited access to emergency traffic is
            possible within days following the earthquake. Public access is not
            expected until repairs are completed.”
          </p>
          <p>
            <strong>Superstructure</strong>: “Access to traffic is not envisaged
            for a prolonged period.” <Cite id="MOTI-SRDC-05" />
          </p>
          <Photograph
            id="anchorage-bridge-inspection"
            caption={
              <>
                The Glenn Highway bridge over Eagle River, Anchorage, about five
                hours after the magnitude 7.0 earthquake of 30 November 2018. A
                crack in the road surface is measured by hand with a tape.
              </>
            }
          />
          <Photograph
            id="anchorage-glenn-highway-closed"
            caption={
              <>
                The same bridge the next day. Crews and a truck are working on
                the northbound carriageway, which carries no traffic.
              </>
            }
          />
          <p>
            Restoration is gated on inspection before it is gated on repair.
            What the province plans for people while that inspection
            happens is set out in{" "}
            <Link
              href="/getting-around/"
              className="text-accent underline underline-offset-2"
            >
              getting around
            </Link>
            .
          </p>
          <Figure
            alt="The Ministry’s three retrofit service levels run from Safety 2, limited access after about 24 hours of inspection, through Safety 1, emergency traffic within days with public access only once repairs are done, to Superstructure, no traffic for a prolonged period. Restoration is gated on inspection before it is gated on repair."
            caption={
              <>
                The Ministry’s own definitions, in its own order. The more
                segments filled, the less the level allows. None of the three is
                a timescale: two of them are described in range words, so there
                is no axis to read a date off. <Cite id="MOTI-SRDC-05" />
              </>
            }
          >
            <ServiceLevelLadder />
          </Figure>
        </Prose>
      ),
    },

    {
      title: "The approach fails before the span does",
      body: (
        <Prose>
          <p>
            A retrofitted bridge can stand intact while the embankment carrying
            the road onto it settles or slides sideways. A standing bridge with
            a step at the end of it carries nobody, and a retrofit announcement
            rarely separates the two. The mechanism is liquefaction, which is
            saturated soil losing its strength and behaving like a liquid while
            the ground shakes.
          </p>
          <Figure
            alt="A retrofitted span can stand at its full height while the approach embankment carrying the road onto it settles, leaving a step where the road meets the bridge. The drawing is a schematic of that mechanism, not a measurement and not any real crossing."
            caption={
              <>
                A diagram of the mechanism, and not a drawing of any crossing.
                The structure and the ground are drawn as two materials because
                they fail separately. The drop is schematic: nobody publishes a
                settlement for a generic approach, so nothing here is to scale.
              </>
            }
          >
            <ApproachAgainstSpan />
          </Figure>
          <p>
            Three Metro Vancouver crossings have published figures at their
            approaches. Each figure belongs to one size of earthquake, one place
            on one bridge, and one state of the ground beneath it.
          </p>
          <p>
            <strong>Queensborough.</strong> The Ministry’s own retrofit report
            defines the work as a retrofit “that prevents collapse during the
            1/475 year earthquake event, however the structure may or may not be
            functional after the event”, and records calculated differential
            movements of about 150 mm in a liquefiable zone between two of the
            Queensborough approach bents after the soil there had been treated.
            Without that treatment, “the predicted displacements were considered
            large enough to cause a collapse of the structure.”{" "}
            <Cite id="QB-MOTH-95" />
          </p>
          <p>
            <strong>Golden Ears.</strong> About 0.5 m of ground movement was
            calculated at the river bank for the 2,475-year earthquake, and
            about 0.3 m at the main bridge piers in that same 2,475-year
            earthquake, after the ground beneath those piers had been densified.{" "}
            <Cite id="GEB-CGS-08" /> <Cite id="NAB-ICCHGE-08" /> The two numbers
            are the same event at two places on one bridge, and the smaller one
            is what densification left behind.
          </p>
          <p>
            <strong>Oak Street.</strong> The 1990s retrofit had the “primary
            objective being to prevent structural collapse of any part of the
            bridge under a 475 year return period earthquake”. The south
            approach sits on liquefiable soil, and the maximum differential pier
            settlement there was evaluated at 100 mm for that 475-year
            earthquake, a figure that assumes a densification of the ground
            which the same paper records as not built at the time. The fix
            chosen was to wrap the girders in glass fibre so the bridge could
            bend, which saved over $1 million against improving the ground.{" "}
            <Cite id="OAK-13WCEE" /> The bridge was reassessed in 2021 and 2022
            because “changes to codes and seismic hazard models since that time
            have resulted in substantially higher seismic loading requirements”,
            and further retrofits were identified. Those figures are not public.{" "}
            <Cite id="OAK-BASIS-22" />
          </p>
          <p>
            The Mission Bridge is the one crossing where the whole chain from
            objective to built fix is public, and it is about 80 km east of
            Vancouver. It connects the District of Mission to Abbotsford, on the
            provincial disaster recovery network. Its engineers found that
            “liquefaction is the key issue affecting the seismic performance of
            the bridge”, predicted settlements of up to 200 mm at the Mission
            south approach piers and a flow-slide failure at the Mission south
            abutment for that bridge’s 475-year design earthquake, designed
            compacted gravel toe berms and ground treatment against both, and
            recorded that the work was built. <Cite id="MISSION-CGS-18" /> None
            of those numbers describes a Richmond or Delta crossing.
          </p>
          <p>
            In the zone where a bridge approach embankment meets the structure,
            a lifeline crossing must keep 100 per cent of its lanes after a
            975-year earthquake and 50 per cent of its lanes after a 2,475-year
            earthquake, with normal service restorable within one month.{" "}
            <Cite id="MOTI-S6-SEC6" />
          </p>
          <Photograph
            id="anchorage-mirror-lake-ramp"
            caption={
              <>
                The Mirror Lake interchange on the Glenn Highway, Anchorage,
                about three hours after the 2018 earthquake. The embankment
                under the southbound off-ramp has slid down the slope, taking
                the asphalt and guardrail with it. The main carriageway beside
                it is unbroken.
              </>
            }
          />
        </Prose>
      ),
    },

    {
      title:
        "The second stage of the George Massey Tunnel’s retrofit was cancelled, and its replacement opens in 2031",
      body: (
        <Prose>
          <p>
            The tunnel is 630 m of immersed tube built between 1957 and 1959,
            with 550 m and 335 m of approaches at the north and south ends. The
            approaches together are longer than the crossing.{" "}
            <Cite id="GMC-TUNNEL-19" />
          </p>
          <Photograph
            id="george-massey-tunnel-south-portal"
            caption={
              <>
                The tunnel’s south portal in Delta, looking north, in 2021. It
                carries Highway 99 under the Fraser River between Delta and
                Richmond. The province calls it a critical transportation
                corridor, and describes its replacement as strengthening
                connections to the Port of Vancouver and the border
                crossings. <Cite id="MOTI-MASSEY" />
              </>
            }
          />
          <p>
            Its original design assumed peak shaking of 0.21 g, about a fifth of
            the force of gravity, and it “did not consider the effects of soil
            liquefaction … as these were not well understood at the time.” A
            1989 assessment found the tunnel “does not have sufficient strength
            to prevent collapse under the 475 year earthquake”, and a 1991
            investigation found liquefiable soils up to 20 m deep.{" "}
            <Cite id="GMC-TUNNEL-19" />
          </p>
          <p>
            A two-stage retrofit was planned in 2001. The structural stage was
            completed in 2006. The second stage, improving the ground along the
            tunnel and its approaches, was cancelled. The province’s own 2019
            engineering memo: “By 2006, the Stage 1 retrofit work was completed,
            while no ground improvement has been performed to date. As a result,
            the Tunnel does not have the level of safety intended in the
            original 2001 COWI study as the risk of tunnel floatation during the
            seismic event still exists.” <Cite id="GMC-TUNNEL-19" />
          </p>
          <p>
            The tunnel was designed against a 475-year earthquake. With the
            structural retrofit and no ground improvement it meets its
            performance criteria for an earthquake of “approximately 150 to 240
            years”. A new lifeline crossing is designed for 2,475.{" "}
            <Cite id="GMC-TUNNEL-19" />
          </p>
          <Figure
            alt="The George Massey Tunnel was designed against a 475 year earthquake and now meets its performance criteria for approximately a 150 to 240 year earthquake, against a lifeline standard of 2,475 years. The three are a design intent, an assessed range and a standard, and each is drawn differently because they are not the same kind of number."
            caption={
              <>
                Three numbers of three kinds, drawn three ways. A design intent
                is a point somebody aimed at. The assessed capacity is hatched
                because it is a range rather than a figure. The standard is the
                line a new lifeline crossing has to reach.{" "}
                <Cite id="GMC-TUNNEL-19" />
              </>
            }
          >
            <MasseyThreeNumbers />
          </Figure>
          <p>
            An emergency road closure system installed in 2008 detects seismic
            motion and stops new traffic entering while letting vehicles already
            inside drive out. It is set to limit use above a 275-year event.{" "}
            <Cite id="GMC-TUNNEL-19" />
          </p>
          <p>
            The replacement is an eight-lane immersed tube, announced in July
            2026 at $8.5 billion, with major construction from 2027 and opening
            in September 2031. <Cite id="MOTI-MASSEY" />
          </p>
        </Prose>
      ),
    },

    {
      title:
        "What has been assessed, and what has been published, are different lists",
      body: (
        <Prose>
          <p>
            Crossings in this region have mostly been assessed. Most of those
            assessments are not public. Where a figure exists below, it is
            because an engineer published a paper about their own work.
          </p>
          <Figure
            interactive
            alt={`Nineteen crossings mapped. ${CROSSINGS_FACTS.quantitative} have a published figure for the earthquake they were designed or assessed against and ${CROSSINGS_FACTS.qualitative} are described in words only. The remaining ${CROSSINGS_FACTS.none} have nothing in the public record, and they are the crossings between Vancouver and everywhere else: the False Creek bridges, the Arthur Laing, Lions Gate and Ironworkers. A blank mark means nothing was found, not that a crossing is unassessed.`}
            caption={
              <>
                What is published about each crossing, in the place the crossing
                is. The marks say what a reader can obtain, not how a structure
                would perform: nobody publishes that per crossing, and the
                figures that are public each belong to one earthquake at one
                place on one bridge. A blank mark means nothing was found in the
                public record. The table below gives what is published, crossing
                by crossing. The Moray Channel Bridge is not drawn: no openly
                licensed source holds it, and a hand-placed position would be
                one this site invented.
              </>
            }
            licence={<CrossingsLicence />}
          >
            <CrossingsMap />
          </Figure>
          <DataTable
            caption="Crossings and guideways in the region, and what has been published about the earthquake each was designed or assessed against."
            columns={["Crossing", "What is published"]}
            minWidth="38rem"
            rows={[
              [
                <CrossingName id="george-massey-tunnel" />,
                <>
                  Retrofit half completed, 150 to 240 year capacity, does not
                  meet the seismic performance criteria in the 2014 bridge code{" "}
                  <Cite id="GMC-TUNNEL-19" />
                </>,
              ],
              [
                <CrossingName id="oak-street" />,
                <>
                  475-year collapse-prevention objective; 100 mm differential
                  settlement at the south approach piers in that 475-year event,
                  assuming a ground densification the paper records as not built
                  at the time; reassessed 2021 to 2022 <Cite id="OAK-13WCEE" />{" "}
                  <Cite id="OAK-BASIS-22" />
                </>,
              ],
              [
                <CrossingName id="knight-street" />,
                <>
                  Treated as a lifeline bridge; after the 1,000-year event “the
                  crossing need not be passable”; shear key failures predicted
                  at all concrete girder approach spans <Cite id="KSB-2010" />
                </>,
              ],
              [
                <CrossingName id="queensborough" />,
                <>
                  Collapse prevention at the 475-year event only, “may or may
                  not be functional”; about 150 mm of differential movement at
                  the approach bents in that event, after the soil there was
                  treated <Cite id="QB-MOTH-95" />
                </>,
              ],
              [
                <CrossingName id="golden-ears" />,
                <>
                  Objectives at 475, 1,000 and 2,475 years; in the 2,475-year
                  event, about 0.5 m of ground movement at the river bank and
                  about 0.3 m at the main piers after densification{" "}
                  <Cite id="GEB-CGS-08" /> <Cite id="NAB-ICCHGE-08" />
                </>,
              ],
              [
                <CrossingName id="alex-fraser" />,
                <>
                  Founded on weak deltaic materials; an early example of
                  liquefaction assessment in design. No return period published{" "}
                  <Cite id="AFB-CGS-17" />
                </>,
              ],
              [
                <CrossingName id="north-arm">Canada Line, North Arm Bridge</CrossingName>,
                <>
                  The project’s own criteria, as reported by its designer in
                  2008: a 475-year event with repairable damage and a 100-year
                  event with essentially no damage. Only those two events were
                  considered. Partial liquefaction expected; the piles were
                  designed to resist the ground moving rather than to stop it{" "}
                  <Cite id="NAB-ICCHGE-08" />
                </>,
              ],
              [
                <CrossingName id="pattullo">Pattullo replacement</CrossingName>,
                <>
                  The replacement bridge is open; its seismic description is
                  qualitative only{" "}
                  <Cite id="BCGOV-2026-PATT" />
                </>,
              ],
              [
                <CrossingName id="port-mann" />,
                <>
                  Nothing quantitative is public. Three papers on this bridge’s
                  seismic design have been published, and all three sit behind
                  paywalls <Cite id="PM-SEI-17" /> <Cite id="PM-IABSE-17" />
                </>,
              ],
              ["SkyTrain guideways generally", <>Nothing published</>],
            ]}
          />
          <p>
            Golden Ears and the North Arm Bridge were designed in the same
            decade against different sets of design events, and the engineers
            who set each of them published what they were. How a crossing is
            specified is decided project by project, and there is no single
            figure that every bridge in the region was built to.
          </p>
        </Prose>
      ),
    },

    {
      title: "The province’s crustal scenario expects weeks to months of reduced capacity",
      body: (
        <Prose>
          <p>
            From the province’s magnitude 7.0 planning scenario:
          </p>
          <ul>
            <li>
              Transportation routes will be “damaged or only partially
              functional and operating at a much-reduced capacity for an
              extended period (weeks to months)”. <Cite id="PEIRS" />
            </li>
            <li>
              “The rail network in the impact area may be largely unusable
              during the immediate response phase.” <Cite id="PEIRS" />
            </li>
            <li>
              “Liquefaction of roadways in Richmond and Delta may make driving
              difficult, which may compound impacts to Vancouver International
              Airport and Tsawwassen Ferry Terminal.” <Cite id="PEIRS" />
            </li>
          </ul>
          <p>
            The Ministry is responsible for over 400 km of provincial disaster
            response routes and maintains over 2,500 bridges in the highest
            seismic zones of the province. <Cite id="BCSIMS-22" /> Fourteen
            bridges and one tunnel carry structural monitoring instruments. Its
            reason: “There will be many slight-to-moderately damaged bridges
            after an earthquake and the ability to quickly determine their
            safety will allow inspectors to focus on higher priority
            structures.”{" "}
            <Cite id="BCSIMS-22" />
          </p>
        </Prose>
      ),
    },

    {
      title:
        "A magnitude 4.8 stopped two SkyTrain lines for about eighty minutes",
      body: (
        <Prose>
          <p>
            On 29 December 2015 a magnitude 4.8 earthquake occurred 12 km
            southeast of North Saanich, 52 km down. <Cite id="USGS-2015EQ" />{" "}
            TransLink’s own account: “Although SkyTrain has been designed to
            withstand seismic events, the earthquake triggered guideway
            intrusion alarms along the Expo and Millennium lines. In the
            interest of the public’s safety, SkyTrain service was suspended and
            inspections of both lines were conducted.” Service resumed by 1am,
            about eighty minutes later. The Canada Line kept running, which
            TransLink attributed to 70 per cent of its track being underground.{" "}
            <Cite id="CBC-2015" />
          </p>
          <p>
            No damage was found: the alarms stopped the trains. Eighty
            minutes is what a check of an undamaged system took
            after a small, deep earthquake, and it forecasts nothing about a
            large one.
          </p>
          <Photograph
            id="kaikoura-buckled-track"
            caption={
              <>
                North of Kaikoura, New Zealand, three months after the magnitude
                7.8 earthquake of November 2016. The track is bent into an S
                where the ground moved under it, and the rails have rusted.
              </>
            }
          />
          <Photograph
            id="kobe-port-liner-shored-guideway"
            caption={
              <>
                Kobe, Japan, four days after the January 1995 earthquake. The
                green girders carry the Port Liner, an automated transit line on
                an elevated guideway. Scaffolding towers prop up the guideway,
                and the street beneath it is closed.
              </>
            }
          />
          <Photograph
            id="shiroishi-shinkansen-viaduct-repair"
            caption={
              <>
                Shiroishi, Japan, thirteen days after the March 2022 earthquake
                off Fukushima. Scaffolding surrounds the tie beams between the
                columns of the Tohoku Shinkansen viaduct, which the photographer
                records as damaged by the earthquake.
              </>
            }
          />
          <VerificationNote label="Not yet established">
            TransLink has not published a seismic design standard for its
            guideways and stations, a system-wide seismic assessment, or any
            estimate of how long transit would take to come back. None of the
            three is in the public record.
          </VerificationNote>
        </Prose>
      ),
    },
  ],

  lever: {
    heading: "What you can do",
    title: (
      <>
        Nobody outside the Ministry can retrofit a bridge. What is in reach is
        where you plan to be.
      </>
    ),
    items: [
      <>
        <strong>
          Plan on the crossing you use being closed or under inspection
        </strong>
        , not open. That is what the province’s own service levels describe:
        limited access, emergency traffic, and about a day to inspect a bridge
        before anyone is let over it. <Cite id="MOTI-SRDC-05" />
      </>,
      // No citation, and none is missing: this bullet claims nothing about a
      // document. It is about the reader's own day.
      <>
        <strong>
          Know which side of the water you need to be on during a working day.
        </strong>{" "}
        The side you are on when the shaking starts may be the side you stay on.
      </>,
      <>
        <strong>Prepare the side you would be stuck on</strong>, at work as well
        as at home. What the province plans for people while the crossings are
        shut or being inspected is set out in{" "}
        <Link
          href="/getting-around/"
          className="text-accent underline underline-offset-2"
        >
          getting around
        </Link>
        , and what it asks for is a location rather than a route.
      </>,
    ],
  },
};
