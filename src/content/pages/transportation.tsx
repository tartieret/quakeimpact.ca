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
      "British Columbia’s bridge retrofits protect life but do not guarantee that emergency routes remain usable after an earthquake.",
    nav: "Transportation",
    kicker: "Life afterwards",
    standfirst:
      "British Columbia gives first retrofit priority to bridges on emergency routes. The work protects life, but the Ministry says those bridges are not being upgraded to remain in service after a major earthquake.",
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
      "GMC-ITT-19",
      "MOTI-MASSEY",
      "KSB-2010",
      "AFB-CGS-17",
      "AFB-CJCE-85",
      "BCGOV-2026-PATT",
      "PATT-PA-S4-20",
      "PM-PCI-11",
      "PMH1-CAEE-15",
      "PM-SEI-17",
      "PM-IABSE-17",
      "COV-CAMBIE-25",
      "COV-GRANVILLE-95",
      "COV-BURRARD-00",
      "IRON-ICRAGEE-95",
      "PITT-PREM-09",
      "LG-BC-16",
      "LG-TAC-09",
      "YVR-COV-96",
      "YVR-MP-18",
      "DELTA-WESTHAM-09",
      "TL-WESTHAM",
      "PEIRS",
      "BCSIMS-22",
      "USGS-2015EQ",
      "CBC-2015",
    ],
  },

  sections: [
    {
      title: "The province funds life safety, not immediate use",
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
      title: "A standing bridge may still be closed",
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
      title: "Bridge approaches often fail first",
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
            <strong>Golden Ears.</strong> The criteria set for the bridge were
            that it “must not collapse” in the 2,475-year earthquake, “must be
            repairable” after the 1,000-year one, and “must be fully functional”
            after the 475-year one. About 0.5 m of ground movement was
            calculated at the river edge for the 2,475-year earthquake, and up to
            about 0.3 m at the main bridge piers in that same earthquake, in
            spite of the ground there having been densified.{" "}
            <Cite id="GEB-CGS-08" /> <Cite id="NAB-ICCHGE-08" /> The two numbers
            come from two analyses at two places on one bridge, and the banks
            were densified too, so the gap between them is not a measure of what
            densification did.
          </p>
          <p>
            <strong>Oak Street.</strong> The 1990s retrofit had the “primary
            objective being to prevent structural collapse of any part of the
            bridge under a 475 year return period earthquake”. The south
            approach sits on liquefiable soil. A ground improvement for it was
            designed in 1994 and not built at the time. A later study assumed a
            smaller densification scheme, and under “design level earthquakes”
            put the maximum differential pier settlement there at 100 mm; the
            paper does not say whether that scheme was built. The fix chosen
            was to wrap the girders in glass fibre so the bridge could bend,
            which saved over $1 million against improving the ground, and it
            was finished in 2002.{" "}
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
      title: "The George Massey Tunnel awaits replacement",
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
            The 2001 retrofit was designed against a 475-year earthquake, with
            the objective “to prevent the loss of life and restrict damage to a
            repairable level”. With the structural retrofit and no ground
            improvement the tunnel meets its performance criteria for an
            earthquake of “approximately 150 to 240 years”.{" "}
            <Cite id="GMC-TUNNEL-19" /> The replacement is to be designed as a
            lifeline structure, against a 2,475-year earthquake.{" "}
            <Cite id="GMC-ITT-19" />
          </p>
          <Figure
            alt="The George Massey Tunnel’s retrofit was designed against a 475 year earthquake and now meets its performance criteria for approximately a 150 to 240 year earthquake, against a lifeline standard of 2,475 years. The three are a design intent, an assessed range and a standard, and each is drawn differently because they are not the same kind of number."
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
            inside drive out. It is meant to limit use above a 275-year event, a
            figure the 2019 memo takes from a 2016 ministry memo and says “is
            not consistent with analysis by COWI”.{" "}
            <Cite id="GMC-TUNNEL-19" />
          </p>
          <p>
            The replacement is an eight-lane immersed tube. In July 2026 its
            budget was updated to $8.5 billion, with major construction expected
            from 2027 and completion in September 2031.{" "}
            <Cite id="MOTI-MASSEY" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Assessments for named crossings remain incomplete",
      body: (
        <Prose>
          <p>
            Crossings in this region have mostly been assessed. Most of those
            assessments are not public. The figures below come from
            engineering papers, project requirements and government releases.
          </p>
          <Figure
            interactive
            alt={`${CROSSINGS_FACTS.total} crossings mapped with equal-size markers whose inner fill increases with the published earthquake level. Golden Ears, Port Mann, the Pattullo replacement and Pitt River are at the 2,475-year level, with different published performance requirements. Knight Street is at 1,000 years and ${CROSSINGS_FACTS.at475} crossings are at 475 years. The George Massey Tunnel assesses at 150 to 240 years after the ground stage of its retrofit was cancelled. Question marks identify the remaining ${CROSSINGS_FACTS.unpublished}, including Cambie, for which no return period was found; Cambie's upgrade toward a 1 in 2,475 standard is unfinished. A design objective does not establish that all proposed work was built or forecast whether a crossing stays open; the table states each source's limits.`}
            caption={
              <>
                The earthquake each crossing has a published figure for, in the
                place the crossing is. Every marker has the same outer size;
                more fill means a larger published earthquake, in an order
                rather than a scale. A question mark means no return period was
                found. The key under the map says what each of those earthquakes
                bought, which is the part the number alone leaves out: solid
                cores are design intents, the hatched tunnel is an assessment,
                and the retrofit objective is to stop a collapse rather than to
                keep a crossing open. The question mark does not mean a crossing
                is unassessed. The table below gives the full figure and its
                source, crossing by crossing. The Moray Channel Bridge is not
                drawn: no openly licensed source holds it, and a hand-placed
                position would be one this site invented.
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
                  settlement at the south approach piers under design level
                  earthquakes, assuming a densification the paper does not say
                  was built; girder retrofit finished 2002; reassessed 2021 to
                  2022, with further retrofits identified <Cite id="OAK-13WCEE" />{" "}
                  <Cite id="OAK-BASIS-22" />
                </>,
              ],
              [
                <CrossingName id="knight-street" />,
                <>
                  Treated as a lifeline bridge. After a 475-year event it was to
                  carry “some traffic, including the public”; after the
                  1,000-year event “the crossing need not be passable, but
                  damage is not to increase the risk of collapse”. Before the
                  retrofit, shear key failures were predicted at all concrete
                  girder approach spans, and new shear keys were among the
                  retrofits chosen <Cite id="KSB-2010" />
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
                  Fully functional at 475 years, repairable at 1,000, no
                  collapse at 2,475; in the 2,475-year event, about 0.5 m of
                  ground movement at the river edge and up to about 0.3 m at the
                  main piers after densification{" "}
                  <Cite id="GEB-CGS-08" /> <Cite id="NAB-ICCHGE-08" />
                </>,
              ],
              [
                <CrossingName id="alex-fraser" />,
                <>
                  Founded on weak deltaic materials; an early example of
                  liquefaction assessment in design <Cite id="AFB-CGS-17" /> No
                  return period was found in the sources read. The 1985 design
                  paper includes an earthquake risk analysis, but its full text
                  has not been read behind the paywall <Cite id="AFB-CJCE-85" />
                </>,
              ],
              [
                <CrossingName id="north-arm">Canada Line, North Arm Bridge</CrossingName>,
                <>
                  The project’s own criteria, as reported by its designer in
                  2008: a 475-year event with repairable damage and a 100-year
                  event with no significant damage. The paper names no other
                  design event. Only partial liquefaction is expected; the ground
                  was not densified, and the piles were designed to carry both
                  the shaking and the liquefied ground moving against them{" "}
                  <Cite id="NAB-ICCHGE-08" />
                </>,
              ],
              [
                <CrossingName id="pattullo">Pattullo replacement</CrossingName>,
                <>
                  The replacement bridge is open <Cite id="BCGOV-2026-PATT" />
                  Its project agreement specifies design events with 10%, 5%
                  and 2% probability in 50 years, the last corresponding to
                  about 2,475 years, and requires Lifeline performance under
                  CSA S6 and the BC Supplement. The agreement names the bridge’s
                  class; the code’s performance criteria have not been read
                  behind the paywall <Cite id="PATT-PA-S4-20" />
                </>,
              ],
              [
                <CrossingName id="port-mann" />,
                <>
                  A four-level earthquake demand was specified, “with the lowest
                  level a serviceability earthquake and the largest level an
                  ultimate earthquake with a 1:2500 year return period”{" "}
                  <Cite id="PM-PCI-11" /> The project it belongs to set
                  objectives at 475, 975 and 2,475 years and a Cascadia
                  subduction event, and published what a lifeline structure and
                  an economic sustainability route each had to achieve without
                  saying which of the two this bridge was{" "}
                  <Cite id="PMH1-CAEE-15" /> Further papers on its seismic design
                  sit behind paywalls <Cite id="PM-SEI-17" />{" "}
                  <Cite id="PM-IABSE-17" />
                </>,
              ],
              [
                <CrossingName id="cambie" key="cambie" />,
                <>
                  The one False Creek bridge the City says can be brought up:
                  “Among the three bridges over False Creek, Cambie Street
                  Bridge can be seismically upgraded to levels that are not
                  achievable with Granville and Burrard.” The work is not
                  finished. Of the <em>proposed</em> work, “emergency vehicles
                  will be able to use the bridge shortly after an earthquake”,
                  at a “level of performance … nearly equivalent to today’s
                  modern bridge code for a 1 in 2475-year seismic event”. Design
                  began in 2019 and the first phase was complete in 2022{" "}
                  <Cite id="COV-CAMBIE-25" />
                </>,
              ],
              [
                <CrossingName id="granville" key="granville" />,
                <>
                  “The previously completed Phase I and Phase II work on the
                  Granville Bridge ensured that the structure would not collapse
                  during the design seismic event. Phase III is intended to
                  ensure that the bridge will be serviceable within a short time
                  following an earthquake.” The design seismic event is not
                  defined in the report and no return period is given. All
                  phases were complete by 1996{" "}
                  <Cite id="COV-GRANVILLE-95" /> <Cite id="COV-BURRARD-00" />
                </>,
              ],
              [
                <CrossingName id="burrard" key="burrard" />,
                <>
                  Strengthened during the 1990s: “the steel truss spans have
                  been strengthened and new improved bearings have been
                  installed”, leaving the concrete approach spans, whose seven
                  expansion bents were still outstanding in 2000. No return
                  period is stated <Cite id="COV-BURRARD-00" /> The City's 2025
                  position is that Cambie's level is “not achievable with
                  Granville and Burrard” <Cite id="COV-CAMBIE-25" />
                </>,
              ],
              [
                <CrossingName id="ironworkers-memorial-second-narrows" />,
                <>
                  The 1995 foundation retrofit design aimed to prevent collapse
                  under a 475-year earthquake. Ground improvement by vibration
                  was proposed; the paper does not record it as built
                  <Cite id="IRON-ICRAGEE-95" />
                </>,
              ],
              [
                <CrossingName id="pitt-river" />,
                <>
                  Named a lifeline structure, “built to accommodate a
                  1-in-2,475-year quake”. The release does not state what service
                  must remain afterwards <Cite id="PITT-PREM-09" />
                </>,
              ],
              [
                <CrossingName id="lions-gate" />,
                <>
                  Seismic retrofit completed in 2002 <Cite id="LG-BC-16" />
                  The suspended-span designers considered a nearby moderate
                  earthquake and a major subduction earthquake about 200 km
                  away. Their paper gives no return period <Cite id="LG-TAC-09" />
                </>,
              ],
              [
                <CrossingName id="arthur-laing" />,
                <>
                  Phase I of the seismic upgrade was complete by early 1996;
                  Phase II was planned for that summer. The council report
                  gives no return period, and completion of Phase II has not
                  been established <Cite id="YVR-COV-96" />
                </>,
              ],
              [
                <CrossingName id="dinsmore" />,
                <>
                  YVR’s 2037 Master Plan proposes to “Replace or upgrade the
                  Dinsmore Bridge to seismic standards”. It does not define a
                  return period or record the work as completed
                  <Cite id="YVR-MP-18" />
                </>,
              ],
              [
                <CrossingName id="canoe-pass" />,
                <>
                  The bridge over Canoe Pass, built in 1909, is Westham
                  Island’s only land connection, linking it to Ladner
                  <Cite id="DELTA-WESTHAM-09" /> TransLink is planning its
                  replacement <Cite id="TL-WESTHAM" /> No seismic return period
                  was found in the sources read.
                </>,
              ],
              [
                <CrossingName id="no-2-road" />,
                <>
                  Owned and maintained by the City of Richmond
                  <Cite id="YVR-MP-18" /> No seismic return period was found in
                  the sources read.
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
      title: "Road capacity could be reduced for weeks to months",
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
      title: "A magnitude 4.8 stopped two SkyTrain lines",
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
