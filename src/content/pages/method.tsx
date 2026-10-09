import Link from "next/link";
import { Cite } from "@/components/citation";
import { Prose } from "@/components/page-parts";
import type { PageModule } from "./index";

/**
 * How the site reads its evidence. The body of `/method/`, ported from
 * `docs/copy/method.md`. The words are the copy's, verbatim.
 *
 * It describes the rules a reader can see at work on the pages, in the
 * reader's terms. The full rules are in `docs/style-guide.md`.
 *
 * The copy has no `## What you can do`, so this module has no `lever`. The
 * field is optional for this page and this page alone: the principle is no doom
 * without a lever, and this page states no doom. Writing one here would be
 * writing copy.
 */
export const method: PageModule = {
  meta: {
    route: "/method/",
    title: "How this site works",
    description:
      "Every figure on this site comes from a published document. How the pages use them, and where the evidence stops.",
    nav: "Method",
    standfirst:
      "Every figure on this site comes from a published document. This page explains how the pages use them, and where the evidence stops.",
    /**
     * First-cited order, which is the order the markers are numbered in. It is
     * also the order of "Sources on this page" at the foot of the copy file.
     */
    references: [
      "BCH-WESTEND-25",
      "NRCAN-SCEN",
      "DCRRA-2025",
      "PEIRS",
      "GSC-OF-8853",
    ],
  },

  sections: [
    {
      title: "Every figure leads to its document",
      body: (
        <Prose>
          <p>
            The documents behind this site were written by governments,
            utilities, regulators and the engineers they hire. Every number,
            duration and place carries a numbered marker that opens the
            document it came from.
          </p>
          <p>
            Figures are written at the scale a reader needs. A source saying
            repairs take two to three weeks may appear here as “several weeks”.
            The wording gets plainer and the answer stays the same: still
            weeks, and still about the same place. BC Hydro has told its
            regulator that a large earthquake could leave up to two thirds of
            downtown customers without power for several weeks.{" "}
            <Cite id="BCH-WESTEND-25" /> Nothing comparable has been published
            for Surrey, Richmond or the North Shore, so the site says downtown
            and names the gap.
          </p>
          <p>
            Where no document says how long a system would be out, the page
            says so. That is a gap in what has been published, and says nothing
            about whether the system would hold up.
          </p>
        </Prose>
      ),
    },

    {
      title: "The stories are built from the same evidence",
      body: (
        <Prose>
          <p>
            Some passages describe what a stretch of time is like: the lights,
            lifts and tills going off at once, the water pressure falling away
            as mains break, debris across the streets. Each step is a
            consequence that a page on this site states and sources, and it
            links to that page. Put in the order a reader would meet them, they
            are a picture of what is likely, not a forecast for any one street.
          </p>
          <p>
            Past earthquakes elsewhere appear too. The 2011 earthquake in
            Christchurch, New Zealand, shows what months without sewer service
            does to a city, and the 1995 earthquake in Kobe, Japan, shows what
            happens to a port. They are the proof that this has already happened
            to cities like this one. They never supply a number for the Lower
            Mainland.
          </p>
          <p>
            Where the record supports a conclusion, such as that the region is
            not ready, the site says it in its own voice and never puts it in
            the mouth of a document that did not say it.
          </p>
        </Prose>
      ),
    },

    {
      title: "Both earthquakes come from one federal model",
      body: (
        <Prose>
          <p>
            The two scenarios, a magnitude 9.0 rupture of the Cascadia fault and
            a magnitude 7.0 in the Strait of Georgia, come from the Geological
            Survey of Canada’s scenario catalogue. <Cite id="NRCAN-SCEN" /> The
            province’s planning figures are drawn from the same runs,{" "}
            <Cite id="DCRRA-2025" /> <Cite id="PEIRS" /> so a federal and a
            provincial document giving the same number are one estimate quoted
            twice.
          </p>
          <p>
            Those runs count damage to buildings and the people in them from
            shaking alone. Fire, landslides, liquefaction and aftershocks are
            left out, <Cite id="NRCAN-SCEN" /> and Natural Resources Canada says
            its own figures are “likely to represent a minimum estimate on
            impacts.” <Cite id="GSC-OF-8853" />
          </p>
        </Prose>
      ),
    },

    {
      title: "The pages change as the documents do",
      body: (
        <Prose>
          <p>
            Several of the assessments this site relies on are still being
            written, and a page changes when the work behind it is published. If
            you find an error, or a document that fills a gap, the{" "}
            <Link
              href="/contribute/"
              className="text-accent underline underline-offset-2"
            >
              contribute
            </Link>{" "}
            page says what is useful.
          </p>
        </Prose>
      ),
    },
  ],
};
