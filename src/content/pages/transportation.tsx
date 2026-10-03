import Link from "next/link";
import { Cite } from "@/components/citation";
import {
  Figure,
  Photograph,
  Prose,
  VerificationNote,
} from "@/components/page-parts";
import { ApproachAgainstSpan } from "@/components/figures/transportation";
import {
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
 * does not write is the map's caption and alt text, which name the figure.
 *
 * The page stays at the level a member of the public needs: where the
 * crossings are, that many have had seismic work, that inspection gates
 * reopening, and what an owner has said in public about its own structure. It
 * does not grade crossings by design earthquake. Those figures come from design
 * papers and code supplements that a bridge engineer would not rely on without
 * the current assessment of each structure, and most of those are not public;
 * see `docs/knowledge/research.md`. What the province and the City plan for
 * people while the crossings are shut belongs to `/getting-around/`, and the
 * two pages link to each other rather than repeat one another.
 */
export const transportation: PageModule = {
  meta: {
    route: "/after/transportation/",
    title: "Transportation",
    description:
      "Much of Metro Vancouver is reached only by bridge or tunnel, and after a major earthquake the crossings close until they have been inspected.",
    nav: "Transportation",
    kicker: "Life afterwards",
    standfirst:
      "Much of the region is reached only by bridge or tunnel. After a major earthquake the crossings close until they have been inspected, and roads could run at much-reduced capacity for weeks to months.",
    /**
     * First-cited order, which is the order the markers are numbered in. It is
     * also the order of "Sources on this page" at the foot of the copy file.
     */
    references: [
      "LG-BC-16",
      "COV-GRANVILLE-95",
      "COV-BURRARD-00",
      "BCGOV-2026-PATT",
      "OAK-13WCEE",
      "OAK-BASIS-22",
      "COV-CAMBIE-25",
      "BCSIMS-22",
      "GMC-TUNNEL-19",
      "MOTI-MASSEY",
      "PEIRS",
      "USGS-2015EQ",
      "CBC-2015",
    ],
  },

  sections: [
    {
      title: "Much of the region is reached only by bridge or tunnel",
      body: (
        <Prose>
          <p>
            Metro Vancouver is built around water. Burrard Inlet separates the
            North Shore from Vancouver, False Creek cuts through the middle of
            the city, and the Fraser River and its arms separate Vancouver from
            Richmond and the northern suburbs from Delta and Surrey.
            Vancouver’s one land connection runs east through Burnaby and New
            Westminster. Richmond and the airport on Sea Island have none: every
            way on and off is a bridge or a tunnel. The North Shore has two
            vehicle crossings, with mountains behind it.
          </p>
          <p>
            Work, school, deliveries, fuel and food cross the water on the same
            handful of structures, and a trip across the region stops where one
            of them is closed.
          </p>
          <Figure
            interactive
            alt={`The region's ${CROSSINGS_FACTS.total} road, rail and transit crossings, over Burrard Inlet, False Creek, the North and Middle Arms of the Fraser, the Fraser itself and the Pitt River. Vancouver's land connection runs east; every way onto Richmond and Sea Island is a bridge or the George Massey Tunnel.`}
            caption={
              <>
                The region’s road, rail and transit crossings. The Moray
                Channel Bridge, between Richmond and Sea Island, is not shown.
              </>
            }
            licence={<CrossingsLicence />}
          >
            <CrossingsMap />
          </Figure>
        </Prose>
      ),
    },

    {
      title:
        "Many crossings have been upgraded, and how each would hold up is hard to predict",
      body: (
        <Prose>
          <p>
            The province and the City of Vancouver have been strengthening
            bridges against earthquakes since the 1990s. The Lions Gate, the
            Granville and the Burrard are among those that have had seismic
            work. <Cite id="LG-BC-16" /> <Cite id="COV-GRANVILLE-95" />{" "}
            <Cite id="COV-BURRARD-00" /> Some crossings are recent: the
            stal̕əw̓asəm Bridge, which replaced the Pattullo, opened fully in
            2026. <Cite id="BCGOV-2026-PATT" />
          </p>
          <p>
            Saying which crossings would still be usable the day after is much
            harder than it looks. It depends on the structure as it stands
            today, on the ground under its approaches and on the earthquake
            itself, and the answer moves as the engineering codes do. The Oak
            Street Bridge was retrofitted in the 1990s <Cite id="OAK-13WCEE" />{" "}
            and reassessed in 2021 and 2022, because “changes to codes and
            seismic hazard models since that time have resulted in substantially
            higher seismic loading requirements”. Further work was identified,
            and the results are not public. <Cite id="OAK-BASIS-22" /> That is
            the usual case: most of these crossings have been assessed, and most
            of the assessments are not published.
          </p>
          <p>
            The City of Vancouver says the Cambie Bridge “can be seismically
            upgraded to levels that are not achievable with Granville and
            Burrard”, and that once the work is finished “emergency vehicles
            will be able to use the bridge shortly after an earthquake”. Design
            began in 2019, the first phase was finished in 2022, and the upgrade
            is not complete. <Cite id="COV-CAMBIE-25" />
          </p>
          <p>
            Whatever happens to the bridge itself, the road leading onto it can
            fail. A bridge approach is usually an embankment of earth, and where
            it sits on loose, wet ground, liquefaction, which is saturated soil
            losing its strength and behaving like a liquid while the ground
            shakes, can make it settle or slide sideways. A bridge that stands
            with a step at the end of it carries nobody.
          </p>
          <Figure
            alt="A span can stand at its full height while the approach embankment carrying the road onto it settles, leaving a step where the road meets the bridge."
            caption={
              <>
                The bridge holds its height; the ground under the road onto it
                drops away.
              </>
            }
          >
            <ApproachAgainstSpan />
          </Figure>
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
      title: "A standing bridge is closed until it has been inspected",
      body: (
        <Prose>
          <p>
            After a major earthquake there will be “many slight-to-moderately
            damaged bridges”, and each has to be checked before traffic is let
            back over it. The Ministry of Transportation maintains over 2,500
            bridges in the highest seismic zones of the province, and has put
            monitoring instruments on fourteen bridges and one tunnel so that
            inspectors can find out quickly which are safe and go to the most
            important first. <Cite id="BCSIMS-22" />
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
        </Prose>
      ),
    },

    {
      title: "The George Massey Tunnel awaits replacement",
      body: (
        <Prose>
          <p>
            The tunnel carries Highway 99 under the Fraser between Richmond and
            Delta. It was built between 1957 and 1959, and its design “did not
            consider the effects of soil liquefaction … as these were not well
            understood at the time.” <Cite id="GMC-TUNNEL-19" />
          </p>
          <Photograph
            id="george-massey-tunnel-south-portal"
            caption={
              <>
                The tunnel’s south portal in Delta, looking north, in 2021. The
                province calls it a critical transportation corridor, and
                describes its replacement as strengthening connections to the
                Port of Vancouver and the border crossings.{" "}
                <Cite id="MOTI-MASSEY" />
              </>
            }
          />
          <p>
            A retrofit planned in 2001 had two stages. The structural stage was
            finished in 2006. The second, improving the ground along the tunnel
            and its approaches, was cancelled. A 2019 engineering memo prepared
            for the province: “By 2006, the Stage 1 retrofit work was completed,
            while no ground improvement has been performed to date. As a result,
            the Tunnel does not have the level of safety intended in the
            original 2001 COWI study as the risk of tunnel floatation during the
            seismic event still exists.” <Cite id="GMC-TUNNEL-19" />
          </p>
          <p>
            Since 2008 a closure system has detected seismic motion, stopped new
            traffic entering and let vehicles already inside drive out.{" "}
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
      title: "Road capacity could be reduced for weeks to months",
      body: (
        <Prose>
          <p>From the province’s magnitude 7.0 planning scenario:</p>
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
            No damage was found: the alarms alone stopped the trains.
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
        Nobody can say today which crossing will be open the morning after.
        What is in reach is where you plan to be.
      </>
    ),
    items: [
      <>
        <strong>
          Plan for the crossing you use to be closed or under inspection.
        </strong>{" "}
        Inspectors will have many damaged bridges to check, and the most
        important go first. <Cite id="BCSIMS-22" />
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
        .
      </>,
    ],
  },
};
