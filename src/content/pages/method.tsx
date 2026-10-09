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
      "Every figure on this site comes from a published document. How those documents are used, and what they leave out.",
    nav: "Method",
    standfirst:
      "Every figure on this site comes from a published document. This page explains how those documents are used, and what they leave out.",
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
            Governments, utilities, regulators and their engineers wrote the
            documents behind this site. Each number, duration and place has a
            small numbered marker beside it. Tap or click it to see the document
            it came from.
          </p>
          <p>
            Numbers are rounded to what matters to a reader. If a report says
            repairs could take two to three weeks, the page may just say
            “several weeks”. It will not turn weeks into days, or stretch a
            finding about one neighbourhood to cover the whole region. BC Hydro,
            for example, has told its regulator that a large earthquake could
            leave up to two thirds of downtown customers without power for
            several weeks. <Cite id="BCH-WESTEND-25" /> So the electricity page
            talks about downtown, and says that nothing similar has been
            published for Richmond, Surrey or the North Shore.
          </p>
          <p>
            When nobody has published an estimate of how long a system would be
            out, the page says so. That does not mean the system would be fine.
            It means nobody has put a number on it in public.
          </p>
          <p>
            None of this is an engineering assessment. The site reports what the
            documents say, in their terms, and it does not replace the
            assessment of the agency responsible for a system.
          </p>
        </Prose>
      ),
    },

    {
      title: "The stories use the same evidence",
      body: (
        <Prose>
          <p>
            Some parts of the site tell a story: the first hours after the
            shaking, then the days and weeks that follow. The power goes out,
            and with it the lights, the lifts and the tills. Water pressure
            drops as mains break, and debris blocks the streets. Each of those
            events comes from a page on this site that gives its sources, and
            the story links to it. The story shows what is likely to happen
            across the region. Nobody can say what will happen on a particular
            street.
          </p>
          <p>
            Earthquakes in other places appear too. The 2011 earthquake in
            Christchurch, New Zealand, shows what months without sewers does to
            a city. The 1995 earthquake in Kobe, Japan, shows what happens to a
            port. They are here because they show that none of this is
            hypothetical, but their numbers are never used for the Lower
            Mainland.
          </p>
          <p>
            The site also has a point of view. Where the evidence supports a
            conclusion, such as that the region is not ready, the page says it
            directly. Those conclusions are the site’s own, and are never
            attributed to a document that did not reach them.
          </p>
        </Prose>
      ),
    },

    {
      title: "Both earthquakes come from one federal model",
      body: (
        <Prose>
          <p>
            The two earthquakes on this site, a magnitude 9.0 on the Cascadia
            fault and a magnitude 7.0 in the Strait of Georgia, come from the
            Geological Survey of Canada. <Cite id="NRCAN-SCEN" /> The
            province’s planning figures come from the same model runs.{" "}
            <Cite id="DCRRA-2025" /> <Cite id="PEIRS" /> So when a federal
            report and a provincial report give the same number, it is one
            estimate quoted twice.
          </p>
          <p>
            Those runs only count damage to buildings, and to the people inside
            them, from the shaking itself. Fire, landslides, aftershocks and
            liquefaction, where wet ground turns soft during shaking, are left
            out. <Cite id="NRCAN-SCEN" /> Natural Resources Canada’s own report
            says the real impact is likely higher: its figures are “likely to
            represent a minimum estimate on impacts.”{" "}
            <Cite id="GSC-OF-8853" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Pages are updated when new work comes out",
      body: (
        <Prose>
          <p>
            Several of the reports this site relies on are still being written.
            When one is published, the pages that depend on it are updated. If
            you spot a mistake, or know of a document that fills a gap, the{" "}
            <Link
              href="/contribute/"
              className="text-accent underline underline-offset-2"
            >
              contribute
            </Link>{" "}
            page explains what helps.
          </p>
        </Prose>
      ),
    },
  ],
};
