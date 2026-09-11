import Link from "next/link";
import { Cite } from "@/components/citation";
import { Prose } from "@/components/page-parts";
import { ScenarioCards } from "@/components/scenario-cards";
import { SystemGrid } from "@/components/system-grid";
import { TimelineStrip } from "@/components/timeline";
import { DependencyGraphPlaceholder } from "@/components/dependency-graph";
import type { PageModule } from "./index";

/**
 * Home. The body of `/`, ported from `docs/copy/home.md`.
 *
 * The words are the copy's, verbatim. The landing page is not an article, so
 * the route lays the sections out full-bleed rather than in the article
 * measure — but the sections, their headings and every sentence in them come
 * from here, and the route holds none.
 *
 * The components in these bodies are the page's own: the scenario cards sit
 * under the section about the two earthquakes, the timeline and the system
 * grid under the section that sends the reader to the system pages, and the
 * dependency list under the paragraph that says nothing fails on its own.
 *
 * There is no map slot. The liquefaction overlay this page used to promise
 * rests on the Metro Vancouver microzonation layers, which are not openly
 * licensed and are linked rather than redrawn (`docs/licensing.md`), so the
 * placeholder is gone rather than recaptioned.
 */

/** Labels the scenario control in the hero. Furniture, not a claim. */
export const HOME_CONTROL_LABEL = "Showing impacts for";

const link = "text-accent underline underline-offset-2";

export const home: PageModule = {
  meta: {
    route: "/",
    title: "What a major earthquake does to the Lower Mainland, and for how long",
    nav: "Home",
    kicker: "Lower Mainland, British Columbia",
    standfirst:
      "A major earthquake in Metro Vancouver means minutes of shaking, and months of waiting for water, power and transport to come back. Every figure here comes from a published document, and every document is listed.",
    /**
     * First-cited order, which is the order the markers are numbered in. It is
     * also the order of "Sources on this page" at the foot of the copy file.
     */
    references: [
      "PEIRS",
      "BCH-WESTEND-25",
      "NRCAN-1700",
      "DCRRA-2025",
      "PREPAREDBC",
    ],
  },

  sections: [
    {
      title: "The shaking is the short part",
      body: (
        <div className="flex flex-col gap-8">
          <Prose>
            <p>
              Most people picture an earthquake as a violent event with a clear
              end, followed by help arriving from outside.
            </p>
            <p>
              The province’s own planning says something different. Water and
              wastewater disruption is “expected for many months”.{" "}
              <Cite id="PEIRS" /> Transportation routes would be operating “at a
              much-reduced capacity for an extended period (weeks to months)”.{" "}
              <Cite id="PEIRS" /> BC Hydro told its regulator in November 2025
              that a large earthquake could leave up to two thirds of downtown
              customers without power for several weeks, and the system years
              from full restoration. <Cite id="BCH-WESTEND-25" />
            </p>
            <p>
              None of those failures happens on its own. Water needs power for
              pumps and roads for crews. Roads need debris cleared, which needs
              fuel. How long the region waits depends less on any one system
              than on the order in which they can be brought back.
            </p>
          </Prose>
          <DependencyGraphPlaceholder />
        </div>
      ),
    },

    {
      title: "There are two earthquakes to think about, not one",
      body: (
        <div className="flex flex-col gap-8">
          <Prose>
            <p>
              The offshore Cascadia megathrust is the one people have heard of.
              The shallower earthquake underneath the region is the one Natural
              Resources Canada calls “the greatest earthquake hazard” to west
              coast cities, because it is closer and more frequent.{" "}
              <Cite id="NRCAN-1700" /> British Columbia’s primary earthquake
              planning scenario is that nearer one. <Cite id="PEIRS" />
            </p>
            <p>
              They are dangerous to different buildings, and which of them is
              the one that matters to you depends on the building you are in and
              the ground it stands on.{" "}
              <Link href="/scenarios/" className={link}>
                Read about the two scenarios
              </Link>
              .
            </p>
          </Prose>
          <ScenarioCards />
        </div>
      ),
    },

    {
      title:
        "The shaking gets one part of this site, and the months after it get the rest",
      body: (
        <div className="flex flex-col gap-8">
          <Prose>
            <p>
              <strong>
                <Link href="/shaking/" className={link}>
                  The shaking
                </Link>
              </strong>{" "}
              covers the ground under the region, the buildings on it, the
              injuries, and the fires and landslides that arrive after the
              shaking stops. What a building stands on matters more than which
              building it is.
            </p>
            <p>
              <strong>
                <Link href="/after/" className={link}>
                  Life afterwards
                </Link>
              </strong>{" "}
              is the core. One page per system, each carrying how long it is
              out, how widely, and what it is waiting on. Water, power,
              transport, sanitation, gas, fuel, food, housing, health care,
              communications and the rest.
            </p>
            <p>
              <strong>
                <Link href="/getting-around/" className={link}>
                  Getting around
                </Link>
              </strong>{" "}
              is about what the province actually plans for, which is that
              people stay where they are and the roads are used for the
              response.
            </p>
            <p>
              <strong>
                <Link href="/prepare/" className={link}>
                  Preparing
                </Link>
              </strong>{" "}
              is what to do about all of it, and every system page ends with its
              own version.
            </p>
          </Prose>
          <TimelineStrip />
          <SystemGrid tier={1} />
        </div>
      ),
    },

    {
      title: "A band says how long, how widely, and what the system is waiting on",
      body: (
        <Prose>
          <p>
            Each system carries one of three bands for each earthquake: Low,
            Medium or High. A fourth state, not yet assessed, is drawn hatched
            and means nobody has published an assessment.
          </p>
          <p>
            A band reads the public record rather than judging the equipment.
            Every coloured cell comes with one sentence saying how the system
            fails and a link to the document that says so.{" "}
            <Link href="/method/" className={link}>
              How the bands work
            </Link>
            .
          </p>
        </Prose>
      ),
    },

    {
      title: "Every number here comes from a document somebody else published",
      body: (
        <Prose>
          <p>
            That published work is federal and provincial scenarios, utility
            filings with their regulators, municipal plans, and peer-reviewed
            engineering. No number here is a new estimate.
          </p>
          <p>
            Where nobody has published an answer, the gap is stated rather than
            filled with a guess. Where two official documents disagree, both are
            here.
          </p>
          <p>
            <Link href="/sources/" className={link}>
              The sources
            </Link>{" "}
            lists every document.{" "}
            <Link href="/contribute/" className={link}>
              Contribute
            </Link>{" "}
            explains what a correction needs in order to be usable.
          </p>
        </Prose>
      ),
    },
  ],

  lever: {
    heading: "Start here",
    items: [
      <>
        If you have ten minutes, read{" "}
        <Link href="/scenarios/" className={link}>
          the two scenarios
        </Link>{" "}
        and then{" "}
        <Link href="/prepare/" className={link}>
          preparing
        </Link>
        .
      </>,
      <>
        If you have two minutes, store water. The province’s own assessment says
        that distributing bulk drinking water across the region stays difficult
        for the first four to five days. <Cite id="DCRRA-2025" /> PreparedBC
        asks for four litres per person per day, for at least two weeks.{" "}
        <Cite id="PREPAREDBC" /> Water in the cupboard covers the days when
        getting it to you is hardest.
      </>,
    ],
  },
};
