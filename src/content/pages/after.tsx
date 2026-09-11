import Link from "next/link";
import { Cite } from "@/components/citation";
import { Prose } from "@/components/page-parts";
import { TimelineStrip } from "@/components/timeline";
import { SystemGrid, SystemMatrix } from "@/components/system-grid";
import type { PageModule } from "./index";

/**
 * Life afterwards. The body of `/after/`, ported from `docs/copy/after.md`.
 *
 * An index page, and shorter than the thirteen pages it points at on purpose.
 * The words are the copy's. The timeline strip, the band matrix and the system
 * grids are not words: they are `SYSTEMS` and `PHASES` drawn, and they follow
 * the scenario toggle in the header.
 */
export const after: PageModule = {
  meta: {
    route: "/after/",
    title: "Life afterwards",
    nav: "Life afterwards",
    kicker: "Part 2",
    standfirst:
      "This part is the months after the shaking. One page per system, each carrying how long it is out, how widely, and what it is waiting on. They are set out as a timeline rather than as a list, because each of them fails and returns in an order the others decide.",
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
      "MV-CAPITAL-2027",
      "PREPAREDBC",
      "DCRRA-2025",
    ],
  },

  sections: [
    {
      title: "No system on this list fails by itself",
      body: (
        <Prose>
          <p>
            The province says so about fuel in its own words: “Fuel also holds a
            unique position as a critical resource due to its requirement in the
            distribution of all other supplies, first responder activities, and
            enabling functionality of certain impacted facilities and
            infrastructure that rely on generators.” <Cite id="PEIRS" />{" "}
            Everything that runs on a generator, every repair crew and every
            delivery is downstream of that one resource.
          </p>
          <p>
            Fuel moves by road, and in the same document the province expects
            transportation routes to be “damaged or only partially functional
            and operating at a much-reduced capacity for an extended period
            (weeks to months)”. <Cite id="PEIRS" /> Roads are cleared in a
            published order, and the order is not the reader’s street: Metro
            Vancouver’s regional debris plan clears lifeline routes first, then
            critical infrastructure, then major freeways and arterials, and
            “local routes” last. <Cite id="MV-DEBRIS-17" />
          </p>
          <p>
            That order decides when a crew reaches a broken pipe. A magnitude
            9.0 earthquake is modelled to cause 267 water main failures across
            Metro Vancouver’s network, with about 60 of them at the 71 points
            where mains cross under rivers and inlets, which are the hardest
            places in the system to reach. <Cite id="MV-WATER-22" /> Reaching
            them is a road problem before it is a plumbing problem.
          </p>
          <p>
            Every page in this part carries what its system waits on. The{" "}
            <Link
              href="/dependencies/"
              className="text-accent underline underline-offset-2"
            >
              dependency graph
            </Link>{" "}
            gathers those into one picture, and it is not drawn yet.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "The timeline runs hours, days, weeks, months, and systems enter it at different points",
      body: (
        <div className="flex flex-col gap-8">
          <TimelineStrip />
          <Prose>
            <p>
              <strong>In the first hours</strong>, communications, health care
              and the dams. Nothing currently requires a mobile phone site to
              hold any backup power at all; the regulator opened a proceeding to
              decide what the requirement should be and has not decided.{" "}
              <Cite id="CRTC-2025-226" /> About 65 per cent of one health
              authority’s buildings would likely be completely damaged at the
              shaking level the current building code designs for, and no
              published document compares the expected casualties to the number
              of beds the region has. <Cite id="DCRRA-APPC" />
            </p>
            <p>
              <strong>Within the first week</strong>, electricity, water,
              transportation, fuel, food, and where help comes from. BC Hydro
              told its regulator in November 2025 that a large earthquake could
              leave up to two thirds of downtown customers without power for
              several weeks, and the system years from full restoration.{" "}
              <Cite id="BCH-WESTEND-25" /> The province designates routes that
              must stay open for emergency vehicles after a major earthquake,
              and in the same document states that it is not retrofitting the
              bridges on them to remain in service. <Cite id="MOTI-SRDC-05" />{" "}
              In a Cascadia earthquake the province states that the United
              States would be unable to deliver mutual aid. <Cite id="PEIRS" />
            </p>
            <p>
              <strong>Over the following weeks</strong>, sanitation, natural
              gas, housing, and the port, airport and ferry terminals. The
              province expects disruption to water and wastewater systems for
              many months. <Cite id="PEIRS" /> Natural gas is the one utility
              that cannot be restored in bulk: service returns building by
              building, once a qualified person has been inside and relit every
              appliance. The regulator’s decision on that system states several
              weeks to restore service to hundreds of thousands of customers.{" "}
              <Cite id="BCUC-C-6-25" /> Modelling of a magnitude 9.0 puts road
              access to the airport cut in the first critical days, because
              every bridge leading to it is damaged. <Cite id="AIR-2013" />
            </p>
            <p>
              <strong>Months</strong> is not a further set of systems. It is how
              long several of the first ones take to come back.
            </p>
          </Prose>
        </div>
      ),
    },

    {
      title:
        "A band says how long, how widely, and what the system is waiting on",
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
              Two of those states are worth knowing before reading further. Dams
              and reservoirs are hatched in both scenarios: Cleveland and Seymour
              Falls dams were each reviewed by an engineer in 2024, as the law
              requires, neither review identified an unsafe condition, and
              neither published conclusion mentions earthquakes.{" "}
              <Cite id="MV-DSP-2026" /> The seismic upgrade work at Cleveland
              has not started. <Cite id="MV-CAPITAL-2027" /> Port, airport and
              ferry terminals carry a band for the megathrust and a hatch for
              the crustal earthquake, because the one study that exists modelled
              the megathrust and nothing else. <Cite id="AIR-2013" />
            </p>
          </Prose>
          <SystemMatrix />
        </div>
      ),
    },

    {
      title: "Three of the thirteen pages are written",
      body: (
        <div className="flex flex-col gap-8">
          <Prose>
            <p>
              <strong>
                <Link
                  href="/after/water/"
                  className="text-accent underline underline-offset-2"
                >
                  Water
                </Link>
              </strong>
              ,{" "}
              <strong>
                <Link
                  href="/after/electricity/"
                  className="text-accent underline underline-offset-2"
                >
                  electricity
                </Link>
              </strong>{" "}
              and{" "}
              <strong>
                <Link
                  href="/after/transportation/"
                  className="text-accent underline underline-offset-2"
                >
                  transportation
                </Link>
              </strong>{" "}
              are written in full.
            </p>
            <p>
              Sanitation, natural gas, fuel, food, the port, airport and ferry
              terminals, dams and reservoirs, housing, health care,
              communications, and where help comes from have pages with no text
              on them yet. Each one says so, and each carries its band, the
              sentence saying how the system fails, the document behind that
              sentence, and where it sits on the timeline.
            </p>
          </Prose>
          <div className="flex flex-col gap-4">
            <SystemGrid tier={1} />
            <SystemGrid tier={2} />
            <SystemGrid tier={3} />
          </div>
        </div>
      ),
    },
  ],

  lever: {
    heading: "What you can do",
    title: (
      <>
        The coupling is also why preparing is worth the trouble. A household
        that can manage for a while without water, power and a working toilet is
        not waiting on any single one of them.
      </>
    ),
    items: [
      <>
        <strong>Store four litres per person per day, pets included.</strong>{" "}
        That is the province’s own figure, for drinking and basic sanitation
        together. <Cite id="PREPAREDBC" /> The province’s assessment says
        distributing bulk drinking water across the region stays difficult for
        the first four to five days. <Cite id="DCRRA-2025" />
      </>,
      // No citation, and none is missing: the bullet rests on no document.
      <>
        <strong>Work out what in your home needs electricity to run</strong>,
        including the heating and any gas appliance with an electric fan or
        control, and settle what to do about each one before you need to.
      </>,
      <>
        <strong>
          <Link
            href="/prepare/"
            className="text-accent underline underline-offset-2"
          >
            Preparing
          </Link>
        </strong>{" "}
        sets out the rest, and every written system page ends with its own
        version.
      </>,
    ],
  },
};
