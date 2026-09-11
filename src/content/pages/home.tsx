import Link from "next/link";
import { Cite } from "@/components/citation";
import { Prose } from "@/components/page-parts";
import { ScenarioCards } from "@/components/scenario-cards";
import { SystemGrid } from "@/components/system-grid";
import { PhaseNarrative } from "@/components/phase-narrative";
import { ScenarioText } from "@/components/scenario-text";
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
 * the question the site exists to answer; then every system as a card, so that
 * a reader who has just been told what the months are like can go straight to
 * the part of life they depend on; the two scenarios come after both, because
 * a reader who has not yet been told why this matters has no reason to work
 * through the difference between a megathrust and a crustal earthquake.
 *
 * The standfirst opens on the gap the site exists to close: the province asks
 * for two weeks, and households are not carrying it. Both halves are cited, and
 * the second says kit ownership rather than days of supply because that is what
 * the record measures — no published study measures held supply anywhere in the
 * Lower Mainland, and `docs/research/household-preparedness.md` carries the six
 * studies, what each one counted, and the guard that none of them may be used
 * to say what share of households could last two weeks. The sentence quotes no
 * percentage: the figure is five years old, and one number invites a reader to
 * take a poll of 800 for a census.
 *
 * The first two sections open on a sentence the copy writes as their first
 * paragraph and this module passes as `lede`, which is the only difference
 * between the copy file and what the page renders.
 *
 * What used to sit here and no longer does is the dependency figure, which is
 * an index of the site rather than a picture of the aftermath and which has its
 * own page at `/dependencies/`. The coupling it teaches survives here as the
 * paragraph that says nothing fails on its own. The system grid stayed, moved
 * below the timeline and given the whole set rather than three tier-1 cards:
 * after four paragraphs about the months, a reader wants to look their own life
 * up, and a card they cannot find is a page they will not read.
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
  "Two different earthquakes are possible here, and they do not have the same impact. Pick one and every page on the site answers for it. If you do not know which, leave it where it is.";
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
        . <Cite id="PREPAREDBC" /> Most households in the region have not put
        together an emergency kit of any size.{" "}
        <Cite id="RESEARCHCO-PREP-21" /> So this site gathers what is already
        published about a major earthquake in the Lower Mainland — what breaks,
        how long it stays broken, and what each thing is waiting on — to make
        two weeks a length of time you can picture rather than a slogan.
      </>
    ),
    /**
     * First-cited order, which is the order the markers are numbered in. It is
     * also the order of "Sources on this page" at the foot of the copy file.
     */
    references: [
      "PREPAREDBC",
      "RESEARCHCO-PREP-21",
      "DCRRA-2025",
      "PEIRS",
      "CRTC-2025-226",
      "MV-DEBRIS-17",
      "BCH-WESTEND-25",
      "BCUC-C-6-25",
      "COV-RISK-2024",
      "NRCAN-1700",
    ],
  },

  sections: [
    {
      title: "The shaking is the short part",
      lede: "Most people picture an earthquake as a violent event with a clear end, followed by help arriving from outside. Consider this timeline instead.",
      body: (
        <div className="flex flex-col gap-8">
          <PhaseNarrative
            items={[
              {
                phase: "hours",
                heading:
                  "It is over in a minute, and then you cannot reach anyone",
                body: (
                  <>
                    <ScenarioText
                      as="p"
                      crustal={
                        <>
                          In the province’s own scenario the earthquake is heard
                          before it is felt: a sound like a freight train, then
                          10 to 20 seconds of violent shaking that knocks people
                          off their feet, “except for those who remember to
                          drop, cover, and hold on”. A small number of buildings
                          collapse, many more shift and crack, and most of the
                          people badly hurt are hurt by things falling — some of
                          them while running outside. <Cite id="PEIRS" />{" "}
                          <Link href="/scenarios/" className={link}>
                            The passage in full
                          </Link>
                          .
                        </>
                      }
                      cascadia={
                        <>
                          The province’s megathrust assessment sets its
                          earthquake at ten in the morning on an August day, in a
                          30 to 40 degree heatwave with wildfire smoke. The
                          shaking is moderate rather than violent and lasts
                          about three minutes, and it arrives along a thousand
                          kilometres of coast at once rather than under one
                          city. <Cite id="DCRRA-2025" />{" "}
                          <Link href="/scenarios/" className={link}>
                            Both scenarios, side by side
                          </Link>
                          .
                        </>
                      }
                    />
                    <p>
                      When it stops, the phone in your hand is what you reach
                      for, and it is among the first things to fail. Nothing in
                      Canada requires a cell tower to hold any backup power at
                      all; the regulator opened a proceeding in September 2025
                      to decide what that requirement should be, and has not
                      decided. <Cite id="CRTC-2025-226" />
                    </p>
                  </>
                ),
              },
              {
                phase: "days",
                heading: "Water and food become things you have to go and find",
                body: (
                  <>
                    <p>
                      The taps are what most households notice first. In the
                      megathrust assessment, getting bulk drinking water around
                      the region stays difficult for the first four to five
                      days. <Cite id="DCRRA-2025" />
                    </p>
                    <p>
                      The shops do not restock. The province expects the network
                      that delivers meat, fruit and vegetables, dairy and bread
                      to take weeks or months, because the problem is moving the
                      goods rather than having them — and a service station with
                      full tanks and no power dispenses nothing. <Cite id="PEIRS" />{" "}
                      Roads are cleared in a published order that puts lifeline
                      routes first and local streets last, so your street waits.{" "}
                      <Cite id="MV-DEBRIS-17" />
                    </p>
                  </>
                ),
              },
              {
                phase: "weeks",
                heading:
                  "The power comes back in patches, and the toilet still does not work",
                body: (
                  <>
                    <p>
                      BC Hydro told its regulator in November 2025 that a large
                      earthquake could leave up to two thirds of downtown
                      customers without power for several weeks.{" "}
                      <Cite id="BCH-WESTEND-25" /> Your street comes back when
                      its own poles and wires do, which is not when the city
                      centre does.
                    </p>
                    <p>
                      The toilet is the part nobody plans for. With no water to
                      flush and the sewers damaged as well, an apartment tower
                      has nothing else to use, and the province expects
                      disruption to water and wastewater for many months.{" "}
                      <Cite id="PEIRS" /> Gas cannot be turned back on from a
                      control room either: it returns only when a technician
                      reaches your building and relights every appliance in it.{" "}
                      <Cite id="BCUC-C-6-25" />
                    </p>
                  </>
                ),
              },
              {
                phase: "months",
                heading:
                  "Months is not a new set of failures. It is how long the first ones take",
                body: (
                  <>
                    <p>
                      The building you live in can be standing and still closed.
                      The City of Vancouver states that areas with a high
                      concentration of damage may be closed off for weeks,
                      months or even years. <Cite id="COV-RISK-2024" /> BC Hydro
                      puts its own system years from complete restoration.{" "}
                      <Cite id="BCH-WESTEND-25" />
                    </p>
                    <p>
                      Through all of it the province’s plan is that people
                      shelter within the region rather than leave it.{" "}
                      <Cite id="PEIRS" />{" "}
                      <Link href="/getting-around/" className={link}>
                        What that means for getting around
                      </Link>
                      .
                    </p>
                  </>
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
      title: "Look up whichever part of it you depend on",
      lede: "Water in the taps, power in the walls, a phone that connects, a toilet that flushes, roads that carry you, a home to go back to. Each card says when that part of life starts to be affected, how long it stays that way, and one sentence on how it fails. Open any of them for the documents behind it.",
      body: <SystemGrid />,
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
      title: "Where the documents disagree, this site says so",
      body: (
        <Prose>
          <p>
            No number here is a new estimate. Where nobody has published an
            answer, the page says so rather than filling the gap with a guess.
            Where two official documents contradict each other, both are here
            and the page says where they part company — British Columbia’s own
            advice on how long a household should expect to last alone is
            published in six different versions, and{" "}
            <Link href="/prepare/" className={link}>
              preparing
            </Link>{" "}
            sets them side by side.
          </p>
          <p>
            How long a system is out is written as one of three bands, Low,
            Medium or High, with a fourth state, not yet assessed, drawn
            hatched.{" "}
            <Link href="/method/" className={link}>
              How the bands work
            </Link>
            .{" "}
            <Link href="/sources/" className={link}>
              The sources
            </Link>{" "}
            lists every document, and{" "}
            <Link href="/contribute/" className={link}>
              contribute
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
