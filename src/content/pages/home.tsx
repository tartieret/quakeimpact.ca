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
 * the question the site exists to answer; then every system as a card, so that
 * a reader who has just been told what the months are like can go straight to
 * the part of life they depend on; the two scenarios come after both, because
 * a reader who has not yet been told why this matters has no reason to work
 * through the difference between a megathrust and a crustal earthquake.
 *
 * The timeline is a story and reads as one. It sources itself through its links
 * rather than through a marker on every sentence, and that is the one place this
 * page departs from the site's habit. Its panels make no claim of their own:
 * every sentence in them is a consequence a system page states and sources, and
 * the noun it hangs on is a link to that page, which is where the document and
 * all its qualifications are. Markers on prose written this way would number the
 * same handful of documents nine times over and make a narrative read like a
 * filing. Three rules keep it honest, and they are in §4 of the style guide.
 * **A duration may ride on its link and a count may not** — several weeks, many
 * months and the rest are the story, while 267 mains and two thirds of downtown
 * customers stay on the pages that can guard them. A duration is written in the
 * source's own words and no tighter, with the body named only where the naming
 * is the point, as it is for BC Hydro conceding several weeks downtown. And the
 * quotation keeps its attribution, which here is the marker beside it rather
 * than a speaker in words.
 *
 * What the panels do not do is name the document a fact came out of. "In the
 * province's scenario the earthquake is heard before it is felt" tells a reader
 * they are being read a planning document; the earthquake being heard before it
 * is felt tells them what the first second is like, which is what they came for.
 * The one exception left is the months panel, where the province's plan is the
 * subject rather than the source: that people stay in the region is an
 * assumption a plan makes, and stated as a bare fact it would be a claim about
 * what people do, which nothing here establishes.
 *
 * The hours panel tells one story rather than standing the two scenarios in a
 * pair of labelled columns. The pair is the right shape further down the site,
 * where a reader has met both earthquakes and the columns answer "which of these
 * is this finding about". At the top of the landing page nobody has met either,
 * and two columns asked a reader to hold two unintroduced earthquakes apart
 * before they had been told why it matters. What the panel keeps of the pair is
 * the range, because the length of that first minute is the one thing a reader
 * can picture before they know anything else: ten seconds and three minutes are
 * the two scenarios' own durations rather than a smoothed average, so neither is
 * hidden, and `/shaking/` is one link away with each attached to its earthquake.
 * That link is load-bearing here, and `stack-and-structure.md` says why. The
 * scene that follows is an earthquake close to the city, named as such, so the
 * quotation and the collapses stay attached to the earthquake they were assessed
 * on rather than reading as claims about the megathrust too.
 *
 * The panels say what the stretch is like, not what has and has not been
 * published. A sentence about the state of the record — BC Hydro has published
 * an estimate for downtown and for nowhere else, no restoration estimate for
 * the water network exists at all — tells a reader about this site's evidence
 * base rather than about their own street, and the gap it names is already
 * stated in full on the system page the panel links to. Where a duration is
 * published the panel gives the duration; where none is, it says what the
 * mechanism does to an ordinary week instead.
 *
 * The standfirst opens with the difference between the event and its aftermath.
 * It names the ordinary services a household loses before the timeline shows
 * the sequence in full. The preparation gap moves to the closing lever, where
 * it sits beside the action a reader can take.
 *
 * The system-grid introduction is passed as `lede`. The timeline needs no
 * extra introduction after the hero; its heading leads straight into the story.
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

export const homeHero = {
  titleLines: ["The shaking", "is the short part."],
  primary: { label: "Start with food and water", href: "/prepare/" },
  secondary: { label: "Explore the aftermath", href: "#what-happens-after-the-shaking" },
};

export const home: PageModule = {
  meta: {
    route: "/",
    title: homeHero.titleLines.join(" "),
    description:
      "What has already been published about a major earthquake in the Lower Mainland: what breaks, how long it stays broken, and what each repair is waiting on.",
    nav: "Home",
    kicker: "Lower Mainland, British Columbia",
    standfirst: (
      <>
        A major earthquake may last only minutes. Disruption to water, food,
        power and transportation could last for weeks.
      </>
    ),
    /**
     * First-cited order, which is the order the markers are numbered in. It is
     * also the order of "Sources on this page" at the foot of the copy file.
     */
    references: [
      "PREPAREDBC",
      "RESEARCHCO-PREP-21",
      "PEIRS",
      "DCRRA-2025",
      "NRCAN-1700",
    ],
  },

  sections: [
    {
      title: "What happens after the shaking?",
      body: (
        <div className="flex flex-col gap-8">
          <PhaseNarrative
            items={[
              {
                phase: "hours",
                heading: "It is over in minutes, and nothing works",
                body: (
                  <>
                    <p>
                      The shaking lasts somewhere between ten seconds and three
                      minutes, depending on how big the earthquake is and where
                      it happens.
                    </p>
                    <p>
                      An earthquake close to the city is heard before it is
                      felt: a sound like a freight train, then seconds of violent
                      shaking that knock people off their feet, “except for those
                      who remember to drop, cover, and hold on”.{" "}
                      <Cite id="PEIRS" /> A small number of buildings collapse, many more
                      shift and crack, and many of the people who try to run
                      outside are badly hurt by falling and flying objects.{" "}
                      <Link href="/shaking/" className={link}>
                        More about the shaking
                      </Link>
                      .
                    </p>
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
                      Crews clear emergency routes first. Local streets wait,
                      so what you can reach may be limited to walking or cycling
                      distance. The{" "}
                      <Link href="/after/sanitation/" className={link}>
                        toilet
                      </Link>{" "}
                      can stop being usable on the first day because flushing
                      takes water nobody has to spare. Family and neighbours
                      are likely to reach you before official help. See{" "}
                      <Link href="/prepare/" className={link}>
                        what to prepare
                      </Link>
                      .
                    </p>
                  </>
                ),
              },
              {
                phase: "weeks",
                heading: "Repairs stretch across the region",
                body: (
                  <>
                    <p>
                      <Link href="/after/electricity/" className={link}>
                        Power
                      </Link>{" "}
                      comes back where the network can be repaired first.
                      Restoring poles and wires means making many small repairs
                      across the region. In downtown Vancouver, BC Hydro says
                      it could take several weeks to restore power to customers
                      and years to completely restore the system.{" "}
                      <Link href="/after/water/" className={link}>
                        Water
                      </Link>{" "}
                      comes back behind it, and the mains that cross under the
                      rivers and inlets are the slowest of those repairs.
                    </p>
                    <p>
                      The{" "}
                      <Link href="/after/sanitation/" className={link}>
                        sewers
                      </Link>{" "}
                      stay broken for months. Households manage waste in buckets
                      and chemical toilets, and an apartment tower has nowhere
                      else to put it.{" "}
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
                      behind a cordon. Cordons around standing buildings
                      displace more people than collapses. Somewhere to move
                      into is scarce, contractors and engineers are scarcer,
                      and every household in the region is looking at the same
                      time.
                    </p>
                    <p>
                      Utilities run at reduced service long after they are back
                      on. The province’s plan assumes people stay in the region.{" "}
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
              This timeline combines the two events the province and its
              agencies plan around. Actual conditions will differ, but these
              are the events households are asked to be ready for.
            </p>
            <p>
              The weather changes how hard each stretch is. The megathrust
              scenario is set in a 30 to 40 degree heatwave with wildfire
              smoke. <Cite id="DCRRA-2025" /> The crustal scenario is set on a
              January afternoon after an atmospheric river.{" "}
              <Cite id="PEIRS" />
            </p>
            <p>
              These failures compound one another. Water needs power for pumps
              and roads for crews. Roads need debris cleared, which needs fuel.
              The order in which the systems can be brought
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
            <p>
              None of those repairs is a household’s to make, which is why
              what matters on the day is what you already have.{" "}
              <Link href="/prepare/" className={link}>
                Preparing
              </Link>{" "}
              sets out what to keep and how much.
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
      title: "The region plans for two different earthquakes",
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
            Pages mark gaps where nobody has published an answer. Where two
            official documents contradict each other, both are here.
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
    heading: "Start with food and water",
    items: [
      <>
        British Columbia asks every household to keep at least two weeks of
        emergency supplies. <Cite id="PREPAREDBC" /> Most households in the
        region have not put together a kit of any size.{" "}
        <Cite id="RESEARCHCO-PREP-21" />
      </>,
      <>
        You do not need to assemble everything at once. Check what you already
        have, then add water and food that will not spoil over time. The{" "}
        <Link href="/prepare/" className={link}>
          preparation guide
        </Link>
        {" "}shows how much to keep and what to add next.
      </>,
    ],
  },
};
