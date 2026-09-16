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
 * The words are the copy's. The timeline strip, the band matrix and the system
 * grid are not words: they are `SYSTEMS` and `PHASES` drawn, and they follow
 * the scenario toggle in the header. The grid carries every system in one
 * block rather than in three: the tiers are a build order, which is ours and
 * not the reader's, and which of the pages are drafts is the marker's job.
 */
export const after: PageModule = {
  meta: {
    route: "/after/",
    title: "Life afterwards",
    description:
      "Thirteen essential systems fail on different timelines after a major earthquake. Their recovery depends on one another.",
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
      "MOTI-SRDC-05",
      "BCUC-C-6-25",
      "AIR-2013",
      "MV-DSP-2026",
      "MV-CAPEX-2026",
      "KATRINA-MYTHS-08",
      "PREPAREDBC",
      "DCRRA-2025",
    ],
  },

  sections: [
    {
      title: "Failures spread between systems",
      body: (
        <Prose>
          <p>
            On fuel, the province writes: “Fuel also holds a unique position as
            a critical resource due to its requirement in the distribution of
            all other supplies, first responder activities, and enabling
            functionality of certain impacted facilities and infrastructure that
            rely on generators.” <Cite id="PEIRS" /> Generators, repair crews
            and deliveries all need fuel.
          </p>
          <p>
            Fuel moves by road, and in the same document the province expects
            transportation routes to be “damaged or only partially functional
            and operating at a much-reduced capacity for an extended period
            (weeks to months)”. <Cite id="PEIRS" /> Roads are cleared in a
            published order: Metro Vancouver’s regional debris plan clears
            lifeline routes first, then critical infrastructure, then major
            freeways and arterials, and “local routes” last.{" "}
            <Cite id="MV-DEBRIS-17" />
          </p>
          <p>
            That order decides when a crew reaches a broken pipe. A magnitude
            9.0 earthquake is modelled to cause 267 water main failures across
            Metro Vancouver’s network, with about 60 of them at the 71 points
            where mains cross under rivers and inlets, the hardest places in the
            system to reach. <Cite id="MV-WATER-22" />
          </p>
          <p>
            The{" "}
            <Link
              href="/dependencies/"
              className="text-accent underline underline-offset-2"
            >
              dependency graph
            </Link>{" "}
            counts 29 such connections. Six have a published document behind
            them, and the rest are links no assessment has established.
          </p>
        </Prose>
      ),
    },

    {
      title: "What fails first",
      body: (
        <div className="flex flex-col gap-8">
          <TimelineStrip />
          <Prose>
            <p>
              <strong>In the first hours</strong>, communications and health
              care are affected, and dams must be checked. Nothing requires a
              mobile phone site to hold any
              backup power at all; the regulator opened a proceeding to decide
              what the requirement should be and has not decided.{" "}
              <Cite id="CRTC-2025-226" /> About 65 per cent of one health
              authority’s buildings would likely be completely damaged at the
              shaking level the current building code designs for, and no
              published document compares the expected casualties to the number
              of beds the region has. <Cite id="DCRRA-APPC" />
            </p>
            <p>
              <strong>Within the first week</strong>, failures spread through
              electricity, water, transportation, fuel and food supply. Access
              to outside help also becomes clear. BC Hydro
              told its regulator in November 2025 that a large earthquake could
              leave up to two thirds of downtown customers without power for
              several weeks, and the system years from full restoration.{" "}
              <Cite id="BCH-WESTEND-25" /> The province designates routes that
              must stay open for emergency vehicles after a major earthquake,
              and in the same document states that it is not retrofitting the
              bridges on them to remain in service. <Cite id="MOTI-SRDC-05" />{" "}
              In a Cascadia earthquake the United States would be unable to
              deliver mutual aid. <Cite id="PEIRS" />
            </p>
            <p>
              <strong>Over the following weeks</strong>, sanitation, natural
              gas, housing and major terminals remain disrupted.
              Disruption to water and wastewater systems is expected to run for many
              months.{" "}
              <Cite id="PEIRS" /> Natural gas is the one utility that cannot be
              restored in bulk: service returns building by building, once a
              qualified person has been inside and relit every appliance.
              Restoring service to hundreds of thousands of customers would
              take several weeks. <Cite id="BCUC-C-6-25" /> Modelling of a magnitude
              9.0 puts road access to the airport cut in the first critical
              days, because every bridge leading to it is damaged.{" "}
              <Cite id="AIR-2013" />
            </p>
            <p>
              Several systems that fail in the first hours take months to
              restore.
            </p>
          </Prose>
        </div>
      ),
    },

    {
      title: "What the impact bands measure",
      body: (
        <div className="flex flex-col gap-8">
          <Prose>
            <p>
              Each system carries one of three bands for each earthquake, Low,
              Medium or High, and a fourth state, not yet assessed, drawn
              hatched. Every coloured cell comes with one sentence saying how
              the system fails and a link to the document that says so.{" "}
              <Link
                href="/method/"
                className="text-accent underline underline-offset-2"
              >
                How the bands work
              </Link>
              .
            </p>
            <p>
              Dams and reservoirs are hatched in both scenarios: Cleveland and
              Seymour Falls dams were each reviewed by an engineer in 2024, as
              the law requires, neither review identified an unsafe condition,
              and neither published conclusion mentions earthquakes.{" "}
              <Cite id="MV-DSP-2026" /> The seismic upgrade work at Cleveland
              has not started. <Cite id="MV-CAPEX-2026" /> Port, airport and
              ferry terminals carry a band for the megathrust and a hatch for
              the crustal earthquake, because the one study that exists modelled
              the megathrust and nothing else. <Cite id="AIR-2013" /> Safety
              and conflict carries no band at all, because how people treat each
              other has no restoration time: most people help one another after
              a disaster, and theft and violence are isolated cases.{" "}
              <Cite id="KATRINA-MYTHS-08" />
            </p>
          </Prose>
          <SystemMatrix />
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
        Prepare for water, power and sanitation to be unavailable at the same
        time.
      </>
    ),
    items: [
      <>
        <strong>Store four litres per person per day, pets included.</strong>{" "}
        The province sets that figure for drinking and basic sanitation
        together. <Cite id="PREPAREDBC" /> Distributing bulk drinking water
        across the region stays difficult for the first four to five days.{" "}
        <Cite id="DCRRA-2025" />
      </>,
      // No citation, and none is missing: the bullet rests on no document.
      <>
        <strong>Work out what in your home needs electricity to run</strong>,
        including the heating and any gas appliance with an electric fan or
        control, and settle what to do about each one before you need to.
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
        sets out the rest.
      </>
    ),
    // The closing sentence already carries the link to `/prepare/`.
    href: null,
  },
};
