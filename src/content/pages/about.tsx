import Link from "next/link";
import { Cite } from "@/components/citation";
import { Prose } from "@/components/page-parts";
import type { PageModule } from "./index";

/**
 * About. The body of `/about/`, ported from `docs/copy/about.md`.
 *
 * The copy has no `## What you can do`, so this module carries no `lever`. The
 * page describes no consequence, so an action written for it would be an action
 * nobody asked the reader to take.
 *
 * The site does not talk about itself to the reader anywhere else. This page is
 * the exception the reader came for, and it stays on what they get rather than
 * on who made it.
 */
const link = "text-accent underline underline-offset-2";

export const about: PageModule = {
  meta: {
    route: "/about/",
    title: "About this site",
    nav: "About",
    standfirst:
      "This site is about the months after a major earthquake in the Lower Mainland rather than the minutes during it. Every claim on it comes from a document somebody else published, and every claim links to that document.",
    /** First-cited order, which is the order the markers are numbered in. */
    references: ["PEIRS", "DCRRA-2025"],
  },

  sections: [
    {
      title: "The shaking is the short part",
      body: (
        <Prose>
          <p>
            In the province’s shallow magnitude 7.0 scenario for this region, the
            violent shaking lasts 10 to 20 seconds. <Cite id="PEIRS" /> In its
            magnitude 9.0 Cascadia scenario, the mainshock lasts three minutes.{" "}
            <Cite id="DCRRA-2025" />
          </p>
          <p>
            What follows lasts very much longer. The province expects
            transportation routes to be “damaged or only partially functional and
            operating at a much-reduced capacity for an extended period (weeks to
            months)”, and disruption to water and wastewater systems “for many
            months following the event”. <Cite id="PEIRS" />
          </p>
          <p>
            So this site spends most of its length on the second interval. It is
            organised around how long each system is out, how widely, and what it
            is waiting on, because that is the part of an earthquake a household
            can do something about in advance.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Help arrives later than most people picture, and in one case the province says so itself",
      body: (
        <Prose>
          <p>
            The common expectation is that outside help closes the gap. In the
            offshore magnitude 9.0 case the province’s own plan states that the
            United States would be unable to deliver mutual aid, because the same
            earthquake damages the whole coast at once. <Cite id="PEIRS" /> In
            the nearer crustal earthquake the province’s plan assumes agencies
            outside the impact area are unaffected, and that is the case where
            staging help with them holds up. <Cite id="PEIRS" />
          </p>
          <p>
            Those are two different situations, and most of the confusion about
            earthquakes here comes from treating them as one.{" "}
            <Link href="/scenarios/" className={link}>
              Two earthquakes, not one
            </Link>{" "}
            sets out how they differ.
          </p>
        </Prose>
      ),
    },

    {
      title: "Nothing here is modelled; it is compiled",
      body: (
        <Prose>
          <p>
            No estimate on this site was produced here. Every figure is taken
            from published work: a regulator’s filing, a provincial plan, an
            engineering assessment, a peer-reviewed paper. Past earthquakes
            elsewhere appear too, and they are used to show how something fails,
            never to give a number for the Lower Mainland.
          </p>
          <p>
            What this adds is the assembly: thirteen systems read against each
            other, on one timeline, in the same words, with what each one waits
            on written down.
          </p>
          <p>
            Where a figure is missing, that is said rather than filled in. “Not
            yet assessed” is one of the states a system can be in, drawn hatched
            rather than coloured, and it means nobody has published an assessment
            rather than that the infrastructure is fine or that it is doomed.{" "}
            <Link href="/method/" className={link}>
              How the bands work
            </Link>{" "}
            explains the rest.
          </p>
        </Prose>
      ),
    },

    {
      title: "It is written for a neighbour and checked by an engineer",
      body: (
        <Prose>
          <p>
            The reader this is written for lives in the region, has no technical
            background, and has ten minutes. The reader it is checked against is
            an emergency planner, a geotechnical engineer or a municipal staffer
            looking for the error that lets them dismiss the whole thing.
          </p>
          <p>
            Those two are not in conflict. Plain sentences and careful sourcing
            both need the writer to know exactly what is being claimed. So every
            number carries the document it came from, every marker opens that
            document’s entry where you are standing, and the{" "}
            <Link href="/sources/" className={link}>
              source register
            </Link>{" "}
            lists all of them in one place.
          </p>
        </Prose>
      ),
    },

    {
      title: "Some of it is not written yet, and the site says which parts",
      body: (
        <Prose>
          <p>
            Three of the thirteen system pages carry full text: water,
            electricity and transportation. The other ten carry their band, the
            sentence saying how the system fails, the document behind that
            sentence, and where they sit on the timeline. Each of them says on
            its own page that the body is not written.
          </p>
          <p>
            The{" "}
            <Link href="/dependencies/" className={link}>
              dependency graph
            </Link>{" "}
            counts the connections between systems rather than joining them with
            lines. Of the 26 connections listed there, 6 have a published
            document behind them, and the rest are links a system’s own page
            names and no assessment has established.
          </p>
          <p>Nothing here is styled to look more finished than it is.</p>
        </Prose>
      ),
    },

    {
      title: "Corrections are the most useful thing you can send",
      body: (
        <Prose>
          <p>
            If a number here is wrong, the document that shows it is wrong is the
            whole contribution.{" "}
            <Link href="/contribute/" className={link}>
              Contribute
            </Link>{" "}
            says what can be used and what cannot.
          </p>
        </Prose>
      ),
    },
  ],
};
