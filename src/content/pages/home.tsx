import Link from "next/link";
import { Cite } from "@/components/citation";
import { Prose } from "@/components/page-parts";
import { ScenarioCards } from "@/components/scenario-cards";
import { SystemGrid } from "@/components/system-grid";
import { PhaseNarrative } from "@/components/phase-narrative";
import { ScenarioPair } from "@/components/scenario-text";
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
 * The timeline carries no citation markers, and that is the one place this
 * page departs from the site's habit. Its four panels make no claim of their
 * own: every sentence in them is a consequence a system page states and
 * sources, and the noun it hangs on is a link to that page. Markers on prose
 * written this way would number the same handful of documents nine times over
 * and make a narrative read like a filing. Two rules keep it honest. **No
 * figure appears in an unmarked panel** — the numbers stay on the pages that
 * can guard them, which is also why the panels read better. And the quoted
 * passage keeps its attribution in words, because a quotation without a
 * speaker is worse than a claim without a marker. The paragraph under the
 * timeline says what the reader is looking at and where the evidence is.
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
        <Cite id="RESEARCHCO-PREP-21" /> This site gathers what has already been
        published about a major earthquake in the Lower Mainland: what breaks,
        how long it stays broken, and what each repair is waiting on.
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
      "NRCAN-1700",
    ],
  },

  sections: [
    {
      title: "The shaking is the short part",
      lede: "Most people picture an earthquake as a violent event with a clear end, followed by help arriving from outside.",
      body: (
        <div className="flex flex-col gap-8">
          <PhaseNarrative
            items={[
              {
                phase: "hours",
                heading: "It is over in a minute, and nothing works",
                body: (
                  <>
                    <ScenarioPair
                      crustal={
                        <>
                          In the province’s own scenario the earthquake is
                          heard before it is felt: a sound like a freight train,
                          then seconds of violent shaking that knocks
                          people off their feet, “except for those who
                          remember to drop, cover, and hold on”. A small
                          number of buildings collapse, many more shift and
                          crack, and many of the people who try to run outside
                          are badly hurt by falling and flying objects.{" "}
                          <Link href="/shaking/" className={link}>
                            More about the shaking
                          </Link>
                          .
                        </>
                      }
                      cascadia={
                        <>
                          The province’s megathrust assessment sets its
                          earthquake on a summer morning. The shaking is
                          moderate rather than violent, it goes on for minutes,
                          and it arrives along the whole coast at once rather
                          than under one city.{" "}
                          <Link href="/shaking/" className={link}>
                            More about the shaking
                          </Link>
                          .
                        </>
                      }
                    />
                    <p>
                      The{" "}
                      <Link href="/after/electricity/" className={link}>
                        power
                      </Link>{" "}
                      is already off when the shaking stops: the lights, the
                      lifts, the tills, the fuel pumps and the traffic signals
                      at every intersection, all at the same moment.
                      Everyone reaches for a{" "}
                      <Link href="/after/communications/" className={link}>
                        phone
                      </Link>{" "}
                      at once, and the towers that keep working are the ones
                      with power left in them.
                    </p>
                    <p>
                      Over the next few hours the{" "}
                      <Link href="/after/water/" className={link}>
                        water
                      </Link>{" "}
                      pressure falls away as broken mains empty the system.
                      Glass, brick and cladding lie across the pavements and{" "}
                      <Link href="/after/transportation/" className={link}>
                        debris blocks streets
                      </Link>{" "}
                      in every neighbourhood. People are trapped and injured across the
                      region, and the{" "}
                      <Link href="/after/health-care/" className={link}>
                        hospitals
                      </Link>{" "}
                      taking them stood through the same earthquake.
                    </p>
                  </>
                ),
              },
              {
                phase: "days",
                heading: "Nobody is coming to your street yet",
                body: (
                  <>
                    <p>
                      The taps are dry. Bottled{" "}
                      <Link href="/after/water/" className={link}>
                        water
                      </Link>{" "}
                      is the first thing to go from the shops, and the shops do
                      not restock:{" "}
                      <Link href="/after/food/" className={link}>
                        food
                      </Link>{" "}
                      arrives by truck through the same broken roads as
                      everything else, and a{" "}
                      <Link href="/after/fuel/" className={link}>
                        service station
                      </Link>{" "}
                      with full tanks and no power dispenses nothing. Cards do
                      not work without power or a network.
                    </p>
                    <p>
                      Crews clear the routes the response needs first, which is
                      not your street, so what you can reach is what you can
                      walk or cycle to. The{" "}
                      <Link href="/after/sanitation/" className={link}>
                        toilet
                      </Link>{" "}
                      stops being usable on the first day rather than the first
                      week, because flushing takes water nobody has to spare.
                      In the{" "}
                      <Link href="/prepare/" className={link}>
                        province’s own plan
                      </Link>
                      , family and neighbours are likely to be the only
                      available first responders, so the people who reach you
                      first are the people who already live on your street.
                    </p>
                  </>
                ),
              },
              {
                phase: "weeks",
                heading:
                  "Some things come back. The ones under the road do not",
                body: (
                  <>
                    <p>
                      <Link href="/after/electricity/" className={link}>
                        Power
                      </Link>{" "}
                      comes back where the network can be repaired first, and
                      putting poles and wires back up is many small repairs
                      rather than one big one. BC Hydro has published an
                      estimate for downtown Vancouver and for nowhere else in
                      the region.{" "}
                      <Link href="/after/water/" className={link}>
                        Water
                      </Link>{" "}
                      comes back behind it, and no restoration estimate for the
                      water network has been published at all.
                    </p>
                    <p>
                      The{" "}
                      <Link href="/after/sanitation/" className={link}>
                        sewers
                      </Link>{" "}
                      are what nobody can give you a date for. Households manage
                      waste in buckets and chemical toilets, and an apartment
                      tower has nowhere else to put it.{" "}
                      <Link href="/after/gas/" className={link}>
                        Gas
                      </Link>{" "}
                      returns building by building, as fast as technicians can
                      enter each one and relight every appliance in it. Drinking
                      water arrives on trucks, at points people queue at, and
                      schools and workplaces are shut or somewhere else.
                    </p>
                  </>
                ),
              },
              {
                phase: "months",
                heading: "Repair becomes the ordinary state of things",
                body: (
                  <>
                    <p>
                      The{" "}
                      <Link href="/after/housing/" className={link}>
                        building you live in
                      </Link>{" "}
                      can be standing, sound to look at, and closed for months
                      behind a cordon. Most people who lose their home lose
                      it that way rather than to collapse. Somewhere to
                      move into is scarce, contractors and engineers are
                      scarcer, and every household in the region is looking at
                      the same time.
                    </p>
                    <p>
                      Utilities run at reduced service long after they are back
                      on, and the network as a whole is a long way from the state
                      it was in the morning before. The province’s plan
                      through all of it is that people stay in the region rather
                      than leave it.{" "}
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
              No two earthquakes do the same thing, and none of this is a
              forecast of the actual event. It follows the two events the
              province and its agencies plan around, which are the ones
              households are asked to be ready for.
            </p>
            <p>
              The weather it happens in changes how hard each of those stretches
              is. Running out of water in an August heat dome is not the same as
              running out of it in January after days of rain, and the two
              scenarios are set in those two conditions: a 30 to 40 degree
              heatwave with wildfire smoke for the megathrust,{" "}
              <Cite id="DCRRA-2025" /> a January afternoon after an atmospheric
              river for the crustal earthquake. <Cite id="PEIRS" />
            </p>
            <p>
              None of those failures happens on its own, either. Water needs
              power for pumps and roads for crews. Roads need debris cleared,
              which needs fuel. The order in which the systems can be brought
              back sets how long the region waits, so{" "}
              <Link href="/after/" className={link}>
                life afterwards
              </Link>{" "}
              takes them one at a time and{" "}
              <Link href="/dependencies/" className={link}>
                the dependency graph
              </Link>{" "}
              counts what each one is waiting on.
            </p>
          </Prose>
        </div>
      ),
    },

    {
      title: "Every system comes back on its own schedule",
      lede: "Water in the taps, power in the walls, a phone that connects, a toilet that flushes, roads that carry you, a home to go back to.",
      body: <SystemGrid />,
    },

    {
      title: "The region plans for two earthquakes, and they are not the same event",
      body: (
        <div className="flex flex-col gap-8">
          <Prose>
            <p>
              The offshore Cascadia megathrust is the one people have heard of.
              The shallower earthquake underneath the region is the one Natural
              Resources Canada calls “the greatest earthquake hazard” to west
              coast cities, because it is closer and more frequent.{" "}
              <Cite id="NRCAN-1700" /> British Columbia’s primary earthquake
              planning scenario is that nearer one. <Cite id="PEIRS" /> Other
              magnitudes and other faults are possible; these two are what the
              planning is written around.
            </p>
            <p>
              They are dangerous to different buildings. Which one matters to
              you depends on the building you are in and the ground under it.{" "}
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
      title: "Everything here comes from published documents",
      body: (
        <Prose>
          <p>
            Governments, utilities and the engineers they hire wrote them.
            Where nobody has published an answer, the page says so instead of
            guessing. Where two official documents contradict each other, both
            are here.
          </p>
          <p>
            How long something is out is written as one of three bands: Low,
            Medium or High, with a fourth for not yet assessed.{" "}
            <Link href="/method/" className={link}>
              How the bands work
            </Link>
            .{" "}
            <Link href="/sources/" className={link}>
              The sources
            </Link>{" "}
            lists every document, and if you find something wrong,{" "}
            <Link href="/contribute/" className={link}>
              contribute
            </Link>{" "}
            says what a correction needs.
          </p>
        </Prose>
      ),
    },
  ],

  lever: {
    heading: "Start here",
    items: [
      <>
        If you have two minutes, store water. Distributing bulk drinking water
        across the region stays difficult for the first four to five days.{" "}
        <Cite id="DCRRA-2025" /> PreparedBC asks for four litres per person per
        day, for at least two weeks. <Cite id="PREPAREDBC" /> Water in the
        cupboard covers the days when getting it to you is hardest.
      </>,
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
    ],
  },
};
