import Link from "next/link";
import { Cite } from "@/components/citation";
import { Prose } from "@/components/page-parts";
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
 * the part of life they depend on. The two scenarios are not described here;
 * `/scenarios/` compares them and `/shaking/` describes the shaking.
 *
 * The timeline is short on purpose: one paragraph per phase, the concrete
 * thing a reader would meet and a link to the page that explains it. The full
 * sequence, with a marker on every figure and the dependencies between
 * systems, is on `/after/`. Here it is a story and sources itself through its
 * links, under the rules in §4 of the style guide: every sentence is a
 * consequence a linked page states and sources, a duration may ride on its link
 * in the source's own words, and a count stays on the page that can guard it.
 * BC Hydro is named because its several weeks downtown is a concession by the
 * owner; the province's plan is named in the months panel because that people
 * stay in the region is an assumption a plan makes, not a fact about what
 * people do. Ten seconds and three minutes are the two scenarios' own
 * durations, and the link on "shaking" attaches each to its earthquake.
 *
 * The panels say what the stretch is like, not what has and has not been
 * published, and they do not name the document a fact came out of.
 *
 * The standfirst sets the length of the shaking against the length of the
 * outages and carries no figure, so it takes no marker. The province's two
 * weeks and the preparation gap sit together in the closing lever, beside the
 * action a reader can take.
 *
 * There is no map slot. The liquefaction overlay this page used to promise
 * rests on the Metro Vancouver microzonation layers, which are not openly
 * licensed and are linked rather than redrawn (`docs/licensing.md`), so the
 * placeholder is gone rather than recaptioned.
 */

const link = "text-accent underline underline-offset-2";

export const homeHero = {
  titleLines: ["What a major earthquake does", "to the Lower Mainland"],
  primary: { label: "See what happens next", href: "#what-happens-after-the-shaking" },
  secondary: { label: "Start preparing", href: "/prepare/" },
};

export const home: PageModule = {
  meta: {
    route: "/",
    title: homeHero.titleLines.join(" "),
    description:
      "What a major earthquake does to water, power, food and transport in the Lower Mainland, how long each stays out, and how to prepare.",
    reviewed: "2026-10-09",
    nav: "Home",
    kicker: "Lower Mainland, British Columbia",
    standfirst: (
      <>
        The shaking lasts minutes. Here is what fails, and why the outages
        can last weeks or months.
      </>
    ),
    /**
     * First-cited order, which is the order the markers are numbered in. It is
     * also the order of "Sources on this page" at the foot of the copy file.
     */
    references: [
      "TOTH-BCCI-15",
      "PREPAREDBC",
      "RESEARCHCO-PREP-21",
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
                heading: "Power, phones and water fail in the first hours",
                body: (
                  <p>
                    The{" "}
                    <Link href="/shaking/" className={link}>
                      shaking
                    </Link>{" "}
                    lasts from ten seconds to three minutes. The{" "}
                    <Link href="/after/electricity/" className={link}>
                      power
                    </Link>{" "}
                    goes out with it, taking the lights, lifts and traffic
                    signals. The{" "}
                    <Link href="/after/communications/" className={link}>
                      phone
                    </Link>{" "}
                    network jams as everyone calls at once, and{" "}
                    <Link href="/after/water/" className={link}>
                      water
                    </Link>{" "}
                    pressure falls as broken mains drain the system. The{" "}
                    <Link href="/after/health-care/" className={link}>
                      hospitals
                    </Link>{" "}
                    went through the same shaking.
                  </p>
                ),
              },
              {
                phase: "days",
                heading: "Help reaches main routes before side streets",
                body: (
                  <p>
                    The taps are dry and the shops do not restock, because{" "}
                    <Link href="/after/food/" className={link}>
                      food
                    </Link>{" "}
                    arrives by truck on the same broken roads.{" "}
                    <Link href="/after/communications/" className={link}>
                      Phones
                    </Link>{" "}
                    fade as cell-site batteries run down, and cards stop
                    working. Crews clear emergency routes first, and{" "}
                    <Link href="/after/transportation/" className={link}>
                      local streets
                    </Link>{" "}
                    wait. The{" "}
                    <Link href="/after/sanitation/" className={link}>
                      toilet
                    </Link>{" "}
                    may stop flushing on the first day.
                  </p>
                ),
              },
              {
                phase: "weeks",
                heading: "Power and water come back area by area",
                body: (
                  <p>
                    In downtown Vancouver, BC Hydro says customers could be
                    without{" "}
                    <Link href="/after/electricity/" className={link}>
                      power
                    </Link>{" "}
                    for several weeks, and{" "}
                    <Link href="/after/water/" className={link}>
                      water
                    </Link>{" "}
                    follows power. The{" "}
                    <Link href="/after/sanitation/" className={link}>
                      sewers
                    </Link>{" "}
                    stay broken for months.{" "}
                    <Link href="/after/gas/" className={link}>
                      Gas
                    </Link>{" "}
                    returns one building at a time, as technicians relight
                    each appliance.
                  </p>
                ),
              },
              {
                phase: "months",
                heading: "Standing homes can stay closed for months",
                body: (
                  <p>
                    A{" "}
                    <Link href="/after/housing/" className={link}>
                      building
                    </Link>{" "}
                    can be standing and still be closed for months behind a
                    cordon. Contractors and engineers are hard to find, because
                    the whole region needs them at once. The province’s plan
                    assumes people{" "}
                    <Link href="/getting-around/" className={link}>
                      stay in the region
                    </Link>{" "}
                    while this goes on.
                  </p>
                ),
              },
            ]}
          />
          <Prose>
            <p>
              A household gets through those weeks on what it already has at
              home.
            </p>
          </Prose>
        </div>
      ),
    },

    {
      title: "Every system comes back on its own schedule",
      lede: "Start with the one you depend on most.",
      body: <SystemGrid />,
    },

    {
      title: "Why this site exists",
      body: (
        <Prose>
          <p>
            My name is Thomas Tartière. I live in downtown Vancouver, and in
            the French consulate’s emergency plan I am the volunteer contact
            for the French community in this part of the city. Preparing for
            that meant reading what has been published about a major
            earthquake here. Public guidance mostly covers the risk and what to
            do while the ground is shaking. What happens over the following weeks and months is in technical
            reports written for specialists.
          </p>
          <p>
            In 2015 I heard Janos Toth go through the earthquake vulnerability
            of British Columbia’s infrastructure one system at a time.{" "}
            <Cite id="TOTH-BCCI-15" /> Years later, when my first child was
            born, that talk is what got me to put together an emergency kit.
            This site takes the same approach, using published documents,
            most of them written by governments, utilities and the engineers
            they hire.
          </p>
          <p>
            <Link href="/about/" className={link}>
              About this site
            </Link>{" "}
            has the rest of the story,{" "}
            <Link href="/method/" className={link}>
              How this site works
            </Link>{" "}
            explains the method, the{" "}
            <Link href="/sources/" className={link}>
              sources page
            </Link>{" "}
            lists every document, and{" "}
            <Link href="/contribute/" className={link}>
              contribute
            </Link>{" "}
            explains how to report an error.
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
        have, then add water and food that keeps. The{" "}
        <Link href="/prepare/" className={link}>
          preparation guide
        </Link>
        {" "}shows how much to keep and what to add next.
      </>,
    ],
  },
};
