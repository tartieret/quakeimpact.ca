import { Cite } from "@/components/citation";
import { Prose } from "@/components/page-parts";
import type { PageModule } from "./index";

/**
 * Contribute. The body of `/contribute/`, ported from `docs/copy/contribute.md`.
 *
 * No `lever`: the page describes no consequence to the reader, so there is
 * nothing for it to tie an action to. What it asks for is the page.
 *
 * Two sections, because a page asking for help should be shorter than the help
 * it asks for. What is worth sending sits in the opening section as prose
 * rather than a list; the three open questions stay at length, because they are
 * the specific ask and each one carries its source.
 *
 * The standfirst used to say the useful contributions were documents, which was
 * the project's own filing discipline pointed at the reader. What a page can
 * publish and what is worth receiving are different questions, and only the
 * second one is the reader's. A correction with nothing behind it is still a
 * correction, and somebody has to look.
 */
const link = "text-accent underline underline-offset-2";

export const contribute: PageModule = {
  meta: {
    route: "/contribute/",
    title: "Contribute",
    nav: "Contribute",
    kicker: "Corrections, sources and local knowledge",
    standfirst:
      "Anything is welcome, whether it is a correction, a document, a pointer to a report you know exists, or the read of somebody who does this work for a living. Something on this site that looks wrong to you is worth sending even when no document comes with it.",
    /** First-cited order, which is the order the markers are numbered in. */
    references: ["MV-WATER-22", "MV-DWMP-26", "AIR-2013", "BCH-WESTEND-25"],
  },

  sections: [
    {
      title:
        "Contributions are welcome, and most of all from people who work in these fields",
      body: (
        <Prose>
          <p>
            Email{" "}
            <a href="mailto:contact@quakeimpact.ca" className={link}>
              contact@quakeimpact.ca
            </a>
            , or open an issue on{" "}
            <a
              href="https://github.com/tartieret/quakeimpact.ca"
              target="_blank"
              rel="noreferrer"
              className={link}
            >
              the public repository
            </a>
            .
          </p>
          <p>
            The readers most likely to catch what is wrong here are the ones
            who work in the fields this site covers: seismology and geotechnical
            engineering, water and sewer, power, gas, telecommunications,
            transport, fuel and food supply, housing, health care and emergency
            management.
          </p>
          <p>
            The fastest thing to act on is one line saying which claim on the
            site is wrong, and a document with an author and a date behind it. A
            pointer to a report you know exists but cannot place saves days on
            its own. So does a read from the field with no document at all,
            which is chased as a lead rather than published as a claim, because
            what reaches a page has to be something a reader can check.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Three questions on this site are waiting on a document that may already exist",
      body: (
        <Prose>
          <p>These are the gaps where a single file would change a page.</p>
          <p>
            <strong>How long the water would take to come back.</strong> Metro
            Vancouver’s assessment of its own water system was released with
            about two thirds of its roughly 300 pages blacked out, including the
            two pieces a restoration estimate would be built from: the number of
            leaks and breaks per main, and the damage estimates for 21 water
            storage facilities. <Cite id="MV-WATER-22" /> The governing drinking
            water plan carries no restoration estimate either.{" "}
            <Cite id="MV-DWMP-26" />
          </p>
          <p>
            <strong>
              What the port, the airport and the ferry terminals face in the
              nearer earthquake.
            </strong>{" "}
            The one study that assesses them modelled the magnitude 9.0
            megathrust and no shallow crustal earthquake. <Cite id="AIR-2013" />{" "}
            Nobody has looked at the closer event, as far as this site can tell.
          </p>
          <p>
            <strong>What happens to power outside downtown Vancouver.</strong> BC
            Hydro told its regulator that a large earthquake could leave up to two
            thirds of downtown customers without power for several weeks.{" "}
            <Cite id="BCH-WESTEND-25" /> Nothing equivalent has been published for
            Surrey, Richmond or the North Shore.
          </p>
          <p>
            If one of those has been answered somewhere and this site has missed
            it, that is the most valuable thing anyone can send.
          </p>
        </Prose>
      ),
    },
  ],
};
