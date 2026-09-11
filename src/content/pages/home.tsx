import Link from "next/link";
import { Cite } from "@/components/citation";
import { Prose } from "@/components/page-parts";
import { ScenarioCards } from "@/components/scenario-cards";
import { SystemGrid } from "@/components/system-grid";
import { PhaseNarrative } from "@/components/phase-narrative";
import type { PageModule } from "./index";

/**
 * Home. The body of `/`, ported from `docs/copy/home.md`.
 *
 * The words are the copy's, verbatim. The landing page is not an article, so
 * the route lays the sections out full-bleed rather than in the article
 * measure — but the sections, their headings and every sentence in them come
 * from here, and the route holds none.
 *
 * The page is ordered so that a reader meets a consequence before they meet
 * the site's filing system. The four phases come first and carry the answer to
 * the question the site exists to answer; six systems follow, picked rather
 * than listed; the two scenarios come after both, because a reader who has not
 * yet been told why this matters has no reason to work through the difference
 * between a megathrust and a crustal earthquake.
 *
 * The standfirst is the one place outside `/about/` where the author speaks in
 * the first person, and it is deliberate. The province's two-week ask carries a
 * source; that almost nobody has done it does not, because no survey in the
 * register measures it. Written as an observation the compiler made as his
 * neighbourhood's point of contact, and linked to the page that says who he is,
 * it is testimony a reader can weigh rather than a statistic with no document
 * behind it. If a published preparedness rate for the region turns up, it
 * belongs here and the sentence should become a cited one.
 *
 * The first two sections open on a sentence the copy writes as their first
 * paragraph and this module passes as `lede`, which is the only difference
 * between the copy file and what the page renders.
 *
 * What used to sit here and no longer does is the dependency figure and the
 * full system grid. Both are indexes of the site rather than pictures of the
 * aftermath, and both already have a page: `/dependencies/` draws the links,
 * `/after/` carries every system. The coupling they teach survives here as the
 * paragraph that says nothing fails on its own.
 *
 * There is no map slot. The liquefaction overlay this page used to promise
 * rests on the Metro Vancouver microzonation layers, which are not openly
 * licensed and are linked rather than redrawn (`docs/licensing.md`), so the
 * placeholder is gone rather than recaptioned.
 */

/**
 * The hero's scenario control. The note says what the toggle is for, because a
 * reader four seconds into the site has no idea why they are being asked to
 * choose; the label names what it sets. Both are furniture, not claims.
 */
export const HOME_CONTROL_NOTE =
  "Two different earthquakes are possible here, and they are not the same emergency. Pick one and every page on the site answers for it. If you do not know which, leave it where it is.";
export const HOME_CONTROL_LABEL = "Showing impacts for";

const link = "text-accent underline underline-offset-2";

export const home: PageModule = {
  meta: {
    route: "/",
    title: "What a major earthquake does to the Lower Mainland, and for how long",
    nav: "Home",
    kicker: "Lower Mainland, British Columbia",
    standfirst: (
      <>
        British Columbia asks every household to keep{" "}
        <Link href="/prepare/" className={link}>
          two weeks of water and food
        </Link>
        . <Cite id="PREPAREDBC" /> I am the{" "}
        <Link href="/about/" className={link}>
          volunteer point of contact for my neighbourhood
        </Link>
        , and in talking to people about this I have met almost nobody who has.
        So this site gathers what is already published about a major earthquake
        in the Lower Mainland — what breaks, how long it stays broken, and what
        each thing is waiting on — to make two weeks a length of time you can
        picture rather than a slogan.
      </>
    ),
    /**
     * First-cited order, which is the order the markers are numbered in. It is
     * also the order of "Sources on this page" at the foot of the copy file.
     */
    references: [
      "PREPAREDBC",
      "CRTC-2025-226",
      "DCRRA-APPC",
      "MV-WATER-22",
      "MV-DEBRIS-17",
      "MOTI-SRDC-05",
      "BCH-WESTEND-25",
      "PEIRS",
      "BCUC-C-6-25",
      "COV-RISK-2024",
      "NRCAN-1700",
      "DCRRA-2025",
    ],
  },

  sections: [
    {
      title: "The shaking is the short part",
      lede: "Most people picture an earthquake as a violent event with a clear end, followed by help arriving from outside. Here is the same event told as the four stretches of time the province plans in.",
      body: (
        <div className="flex flex-col gap-8">
          <PhaseNarrative
            items={[
              {
                phase: "hours",
                heading:
                  "You are on your own, and so is everyone you would call",
                body: (
                  <p>
                    Nothing in Canada requires a mobile phone site to keep
                    running once its power goes. The regulator opened a
                    proceeding in September 2025 to decide what that requirement
                    should be, and has not decided. <Cite id="CRTC-2025-226" />{" "}
                    The hospitals are in the same earthquake: about 65 per cent
                    of one health authority’s buildings would likely be
                    completely damaged at the shaking the current building code
                    designs for, and no published document sets the expected
                    casualties against the number of beds the region has.{" "}
                    <Cite id="DCRRA-APPC" />
                  </p>
                ),
              },
              {
                phase: "days",
                heading:
                  "Water is the problem, and the roads belong to the response",
                body: (
                  <p>
                    A magnitude 9 megathrust is modelled to break 267 water
                    mains across Metro Vancouver, about 60 of them where mains
                    cross under rivers and inlets, which are the slowest repairs
                    in the system. <Cite id="MV-WATER-22" /> A crew reaches a
                    broken pipe in a published order that clears lifeline routes
                    first and local streets last. <Cite id="MV-DEBRIS-17" /> The
                    province designates routes that must stay open for emergency
                    vehicles, and states in the same document that it is not
                    retrofitting the bridges on them to stay in service.{" "}
                    <Cite id="MOTI-SRDC-05" />
                  </p>
                ),
              },
              {
                phase: "weeks",
                heading:
                  "The power comes back unevenly, and the toilet still does not work",
                body: (
                  <p>
                    BC Hydro told its regulator in November 2025 that a large
                    earthquake could leave up to two thirds of downtown
                    customers without power for several weeks.{" "}
                    <Cite id="BCH-WESTEND-25" /> The province expects disruption
                    to water and wastewater for many months. <Cite id="PEIRS" />{" "}
                    Gas is the one utility that cannot be turned back on from a
                    control room: service returns only as a technician enters
                    each affected building and relights every appliance in it.{" "}
                    <Cite id="BCUC-C-6-25" />
                  </p>
                ),
              },
              {
                phase: "months",
                heading:
                  "Months is not a new set of failures. It is how long the first ones take",
                body: (
                  <p>
                    The City of Vancouver states that areas with a high
                    concentration of damage may be closed off for weeks, months
                    or even years, which keeps people out of homes that came
                    through the shaking standing. <Cite id="COV-RISK-2024" /> BC
                    Hydro puts its own system years from complete restoration.{" "}
                    <Cite id="BCH-WESTEND-25" /> Through all of it the
                    province’s plan is that people shelter within the region
                    rather than leave it. <Cite id="PEIRS" />{" "}
                    <Link href="/getting-around/" className={link}>
                      What that means for getting around
                    </Link>
                    .
                  </p>
                ),
              },
            ]}
          />
          <Prose>
            <p>
              None of those failures happens on its own. Water needs power for
              pumps and roads for crews. Roads need debris cleared, which needs
              fuel. How long the region waits depends less on any one system
              than on the order in which they can be brought back, which is why{" "}
              <Link href="/after/" className={link}>
                life afterwards
              </Link>{" "}
              is told system by system and{" "}
              <Link href="/dependencies/" className={link}>
                the dependency graph
              </Link>{" "}
              counts what each system is waiting on.
            </p>
          </Prose>
        </div>
      ),
    },

    {
      title: "What you would actually notice",
      lede: "Water in the taps, power in the walls, a phone that connects, a toilet that flushes, roads that carry you, a home to go back to. Each one carries how long it is out, a sentence on how it fails, and the document behind it.",
      body: (
        <div className="flex flex-col gap-6">
          <SystemGrid
            slugs={[
              "water",
              "electricity",
              "communications",
              "sanitation",
              "transportation",
              "housing",
            ]}
          />
          <Prose>
            <p>
              Natural gas, fuel, food, health care, the port and airport, the
              dams, and where help comes from are on{" "}
              <Link href="/after/" className={link}>
                life afterwards
              </Link>
              , with the same three things for each.
            </p>
          </Prose>
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
              , or start with{" "}
              <Link href="/shaking/" className={link}>
                the shaking
              </Link>
              , which covers the ground under the region, the buildings on it,
              and the fires and landslides that arrive after the shaking stops.
            </p>
          </Prose>
          <ScenarioCards />
        </div>
      ),
    },

    {
      title: "This site puts scattered published work in one place you can walk through",
      body: (
        <Prose>
          <p>
            Most of what is on these pages is already in print: federal and
            provincial scenarios, utility filings with their regulators,
            municipal plans, peer-reviewed engineering. It is spread across
            dozens of documents, each written for somebody else — a regulator, a
            council, another engineer — and none of them written to tell you
            what a month without a working toilet looks like. What this site
            adds is the gathering. The pieces sit next to each other here, in an
            order you can walk through. No number on the site is a new estimate.
          </p>
          <p>
            Where nobody has published an answer, the gap is stated rather than
            filled with a guess. Where two official documents disagree, both are
            here. How long a system is out is written as one of three bands —
            Low, Medium or High — with a fourth state, not yet assessed, drawn
            hatched, which means nobody has published an assessment.{" "}
            <Link href="/method/" className={link}>
              How the bands work
            </Link>
            .
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
