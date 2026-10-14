import Link from "next/link";
import { Cite } from "@/components/citation";
import { Prose } from "@/components/page-parts";
import { TimelineStrip } from "@/components/timeline";
import { SystemGrid, SystemMatrix } from "@/components/system-grid";
import type { PageModule } from "./index";

/**
 * Life afterwards. The body of `/after/`, ported from `docs/copy/after.md`.
 *
 * An index page, and shorter than the system pages it points at on purpose.
 * The words are the copy's. The timeline strip, the duration table and the
 * system grid are not words: they are `SYSTEMS` and `PHASES` drawn. The grid carries every system in one
 * block rather than in three: the tiers are a build order, which is ours and
 * not the reader's, and which of the pages are drafts is the marker's job.
 */
export const after: PageModule = {
  meta: {
    route: "/after/",
    title: "Life afterwards",
    description:
      "Thirteen essential systems fail on different timelines after a major earthquake. Their recovery depends on one another.",
    reviewed: "2026-10-09",
    nav: "Life afterwards",
    kicker: "Part 2",
    standfirst:
      "Thirteen essential systems fail on different timelines after a major earthquake. Their recovery depends on roads, fuel, power and one another.",
    /** First-cited order, which is the order the markers are numbered in. */
    references: [
      "PEIRS",
      "MV-DEBRIS-17",
      "MV-WATER-22",
      "CRTC-2025-226",
      "DCRRA-APPC",
      "BCH-WESTEND-25",
      "BCSIMS-22",
      "AIR-2013",
      "BCUC-C-6-25",
      "KATRINA-MYTHS-08",
      "DCRRA-2025",
      "COV-RISK-2024",
      "MV-DSP-2026",
      "MV-CAPEX-2026",
      "PREPAREDBC",
    ],
  },

  sections: [
    {
      title: "Repairs wait on fuel and roads",
      body: (
        <Prose>
          <p>
            Generators, emergency crews and every delivery of supplies run on
            fuel. <Cite id="PEIRS" /> Fuel moves by road, and the roads are
            expected to be damaged or running at much reduced capacity for
            weeks to months. <Cite id="PEIRS" />
          </p>
          <p>
            Crews clear debris in a set order: lifeline routes first, then
            critical infrastructure, then major freeways and arterials, and
            local streets last. <Cite id="MV-DEBRIS-17" /> That order decides
            when a crew reaches a broken water main. Metro Vancouver’s model of
            a magnitude 9.0 earthquake breaks its water mains in 267 places,
            about 60 of them where mains cross under rivers and inlets. There
            are 71 of those crossings, and they are the hardest places in the
            system to reach. <Cite id="MV-WATER-22" />
          </p>
        </Prose>
      ),
    },

    {
      title: "What fails first, and what follows",
      body: (
        <div className="flex flex-col gap-8">
          <TimelineStrip />
          <Prose>
            <p>
              <strong>In the first hours</strong>, phone networks and health
              care are hit, and dams have to be checked. Cell sites switch to
              backup power, and no rule says how long it has to last: the
              federal regulator opened a proceeding to set one and has not
              decided. <Cite id="CRTC-2025-226" /> About 65 per cent of
              Vancouver Coastal Health’s buildings are likely to be completely
              damaged by the shaking the current building code designs for.{" "}
              <Cite id="DCRRA-APPC" />
            </p>
            <p>
              <strong>Within the first week</strong>, the damage spreads to
              electricity, water, roads, fuel and food. In downtown Vancouver,
              up to two thirds of BC Hydro’s customers could be without power
              for several weeks, and the system could take years to fully
              restore. <Cite id="BCH-WESTEND-25" /> Many bridges are expected
              to be damaged, and each stays closed until it has been inspected.{" "}
              <Cite id="BCSIMS-22" /> Every bridge to the airport is among
              them, so road access to it is expected to be cut for the first
              few days. <Cite id="AIR-2013" /> In a Cascadia earthquake the
              United States would be hit too, and unable to send mutual aid.{" "}
              <Cite id="PEIRS" />
            </p>
            <p>
              <strong>Over the following weeks</strong>, sanitation, natural
              gas, housing and the port, airport and ferry terminals stay
              disrupted. Water and sewer service are expected to be disrupted
              for many months. <Cite id="PEIRS" /> Gas is the one utility that
              cannot be switched back on all at once: service returns building
              by building, once a qualified person has been inside and relit
              every appliance. Doing that for hundreds of thousands of customers
              would take several weeks. <Cite id="BCUC-C-6-25" />
            </p>
          </Prose>
        </div>
      ),
    },

    {
      title: "How long each system is out",
      body: (
        <div className="flex flex-col gap-8">
          <Prose>
            <p>
              The table shows how long each system is expected to be out, in
              the words of the document that estimates it. Where no document
              gives an estimate, the table says so. That means nobody has
              published one, not that the system would hold up.{" "}
              <Link
                href="/method/"
                className="text-accent underline underline-offset-2"
              >
                How this site works
              </Link>
              .
            </p>
            <p>
              For the port, airport and ferry terminals, the only study covers the Cascadia scenario
              and not the shallow crustal one. <Cite id="AIR-2013" /> Safety
              and conflict has no restoration time at all, because after a
              disaster most people help one another, and theft and violence are
              isolated cases. <Cite id="KATRINA-MYTHS-08" />
            </p>
          </Prose>
          <div className="flex flex-col gap-3">
            <SystemMatrix />
            <p className="text-sm leading-relaxed text-ink-muted">
              Durations in the words of the documents that state them. Not an
              engineering assessment.
            </p>
            <p className="text-sm leading-relaxed text-ink-muted">
              Dams and reservoirs: the 2024 safety reviews of Cleveland and
              Seymour Falls dams found no unsafe condition, but their published
              conclusions do not mention earthquakes.{" "}
              <Cite id="MV-DSP-2026" /> Seismic upgrade work at Cleveland has
              not started. <Cite id="MV-CAPEX-2026" />
            </p>
          </div>
        </div>
      ),
    },

    {
      title: "The systems",
      body: <SystemGrid />,
    },
  ],

  lever: {
    heading: "What you can do",
    title: (
      <>
        Plan to be without water, power and a working toilet at the same time.
      </>
    ),
    items: [
      <>
        <strong>Store four litres of water per person per day, pets
        included.</strong>{" "}
        That is the province’s figure, and it covers drinking and basic
        sanitation. <Cite id="PREPAREDBC" /> Getting bulk drinking water out
        across the region is expected to be hard for the first four to five
        days. <Cite id="DCRRA-2025" />
      </>,
      // No citation, and none is missing: the bullet rests on no document.
      <>
        <strong>Find out what in your home needs electricity</strong>,
        including the heating and any gas appliance with an electric fan or
        control, and decide now what you will do without each one.
      </>,
    ],
    closing: (
      <>
        <Link
          href="/prepare/"
          className="text-accent underline underline-offset-2"
        >
          Preparing
        </Link>{" "}
        covers the rest.
      </>
    ),
    // The closing sentence already carries the link to `/prepare/`.
    href: null,
  },
};
