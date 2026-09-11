import Link from "next/link";
import { Cite } from "@/components/citation";
import { Prose, DataTable, VerificationNote } from "@/components/page-parts";
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
    nav: "Transportation",
    kicker: "Life afterwards",
    standfirst:
      "British Columbia designates routes that must stay open for emergency vehicles after a major earthquake. In the same document, the Ministry states that it is not retrofitting the bridges on those routes to remain in service.",
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
            Both of these sentences are in the BC Ministry of Transportation’s
            seismic retrofit design criteria, two sections apart.
          </p>
          <p>
            From §2.1.2: “In the Lower Mainland and on Vancouver Island a system
            of routes have been designated as Disaster Response Routes (DRRs).
            Disaster Response Routes are corridors that must be kept open for
            emergency vehicle response following a major earthquake. Lifeline
            bridges and bridges on Disaster Response Routes are being
            retrofitted as the highest priority in the first phase of the
            retrofit program.” <Cite id="MOTI-SRDC-05" />
          </p>
          <p>
            From §2.2: “Functional retrofitting requires that important
            (Lifeline and DRR) bridges remain in service after the design
            earthquake. … The Ministry is not anticipating functional
            retrofitting in the current stage of retrofitting; it may be
            considered in a future stage.” <Cite id="MOTI-SRDC-05" />
          </p>
          <p>
            The position has not changed in twenty years. The Ministry’s
            February 2025 seismic design supplement says the objective of the
            retrofit program remains “to continue to reduce the risk of bridge
            collapse”, with performance matching a new bridge as an “ultimate
            objective” approached in stages. <Cite id="MOTI-S6-SEC4" />
          </p>
          <p>
            Two further figures set the scale. Retrofits are carried out against
            a 475-year earthquake. New lifeline crossings are designed against a
            2,475-year earthquake. <Cite id="MOTI-SRDC-05" />{" "}
            <Cite id="MOTI-S6-SEC4" />
          </p>
        </Prose>
      ),
    },

    {
      title:
        "A bridge that survives is not a bridge you can drive over the next morning",
      body: (
        <Prose>
          <p>
            The Ministry defines its retrofit service levels in plain words.
          </p>
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
          <p>
            Restoration is gated on inspection before it is gated on repair.
            What the province and the City plan for people while that inspection
            happens is set out in{" "}
            <Link
              href="/getting-around/"
              className="text-accent underline underline-offset-2"
            >
              getting around
            </Link>
            .
          </p>
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
          <p>
            Three Lower Mainland crossings have published figures at their
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
            chosen instead was to wrap the girders in glass fibre so the bridge
            could bend, rather than to stop the ground moving, which saved over
            $1 million against improving the ground. <Cite id="OAK-13WCEE" /> The
            bridge was reassessed in 2021 and 2022 because “changes to codes and
            seismic hazard models since that time have resulted in substantially
            higher seismic loading requirements”, and further retrofits were
            identified. Those figures are not public. <Cite id="OAK-BASIS-22" />
          </p>
          <p>
            One crossing shows the whole chain from objective to built fix, and
            it is not in Metro Vancouver. The Mission Bridge connects the
            District of Mission to Abbotsford, about 80 km east of Vancouver, on
            the provincial disaster recovery network. Its engineers found that
            “liquefaction is the key issue affecting the seismic performance of
            the bridge”, predicted settlements of up to 200 mm at the Mission
            south approach piers and a flow-slide failure at the Mission south
            abutment for that bridge’s 475-year design earthquake, designed
            compacted gravel toe berms and ground treatment against both, and
            recorded that the work was built. <Cite id="MISSION-CGS-18" /> None
            of those numbers describes a Richmond or Delta crossing.
          </p>
          <p>
            The province does publish what an approach is meant to achieve. In
            the zone where a bridge approach embankment meets the structure, a
            lifeline crossing must keep 100 per cent of its lanes after a
            975-year earthquake and 50 per cent of its lanes after a 2,475-year
            earthquake, with normal service restorable within one month.{" "}
            <Cite id="MOTI-S6-SEC6" />
          </p>
        </Prose>
      ),
    },

    {
      title:
        "The George Massey Tunnel has a published shortfall and a 2031 replacement",
      body: (
        <Prose>
          <p>
            The tunnel is 630 m of immersed tube built between 1957 and 1959,
            with 550 m and 335 m of approaches at the north and south ends. The
            approaches together are longer than the crossing.{" "}
            <Cite id="GMC-TUNNEL-19" />
          </p>
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
            Three numbers carry the whole thing. The tunnel was designed against
            a 475-year earthquake. With the structural retrofit and no ground
            improvement it meets its performance criteria for an earthquake of
            “approximately 150 to 240 years”. A new lifeline crossing is
            designed for 2,475. <Cite id="GMC-TUNNEL-19" />
          </p>
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
          <DataTable
            caption="Crossings and guideways in the region, and what has been published about the earthquake each was designed or assessed against."
            columns={["Crossing", "What is published"]}
            minWidth="38rem"
            rows={[
              [
                "George Massey Tunnel",
                <>
                  Retrofit half completed, 150 to 240 year capacity, does not
                  meet the seismic performance criteria in the 2014 bridge code{" "}
                  <Cite id="GMC-TUNNEL-19" />
                </>,
              ],
              [
                "Oak Street",
                <>
                  475-year collapse-prevention objective; 100 mm differential
                  settlement at the south approach piers in that 475-year event,
                  assuming a ground densification the paper records as not built
                  at the time; reassessed 2021 to 2022 <Cite id="OAK-13WCEE" />{" "}
                  <Cite id="OAK-BASIS-22" />
                </>,
              ],
              [
                "Knight Street",
                <>
                  Treated as a lifeline bridge; after the 1,000-year event “the
                  crossing need not be passable”; shear key failures predicted
                  at all concrete girder approach spans <Cite id="KSB-2010" />
                </>,
              ],
              [
                "Queensborough",
                <>
                  Collapse prevention at the 475-year event only, “may or may
                  not be functional”; about 150 mm of differential movement at
                  the approach bents in that event, after the soil there was
                  treated <Cite id="QB-MOTH-95" />
                </>,
              ],
              [
                "Golden Ears",
                <>
                  Objectives at 475, 1,000 and 2,475 years; in the 2,475-year
                  event, about 0.5 m of ground movement at the river bank and
                  about 0.3 m at the main piers after densification{" "}
                  <Cite id="GEB-CGS-08" /> <Cite id="NAB-ICCHGE-08" />
                </>,
              ],
              [
                "Alex Fraser",
                <>
                  Founded on weak deltaic materials; an early example of
                  liquefaction assessment in design. No return period published{" "}
                  <Cite id="AFB-CGS-17" />
                </>,
              ],
              [
                "Canada Line, North Arm Bridge",
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
                "Pattullo replacement",
                <>
                  Open; seismic description is qualitative only{" "}
                  <Cite id="BCGOV-2026-PATT" />
                </>,
              ],
              [
                "Port Mann",
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
            Project criteria differ between owners and structures. Golden Ears
            and the North Arm Bridge were designed in the same decade against
            different sets of design events, and the engineers who set each of
            them published what they were. How a crossing is specified is a
            decision taken project by project, and there is no single figure
            that every bridge in the region was built to.
          </p>
        </Prose>
      ),
    },

    {
      title: "The province expects weeks to months of reduced capacity",
      body: (
        <Prose>
          <p>
            From the province’s crustal magnitude 7.0 planning scenario:
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
            bridges and one tunnel carry structural monitoring instruments. The
            province gives its reason plainly: “There will be many
            slight-to-moderately damaged bridges after an earthquake and the
            ability to quickly determine their safety will allow inspectors to
            focus on higher priority structures.” <Cite id="BCSIMS-22" />
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
            No damage was found. The stoppage came from alarms, not from
            breakage. Eighty minutes is what a check of an undamaged system took
            after a small, deep earthquake, and it forecasts nothing about a
            large one.
          </p>
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
      // document. It asks the reader a question about their own day.
      <>
        <strong>
          Know which side of the water you need to be on during a working day.
        </strong>{" "}
        The useful question is not how to get home, it is where you would rather
        be stuck.
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
