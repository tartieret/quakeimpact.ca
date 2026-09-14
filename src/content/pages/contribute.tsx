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
    description:
      "Send a correction, a relevant document or an expert review of the site’s earthquake information.",
    nav: "Contribute",
    kicker: "Corrections, sources and local knowledge",
    standfirst:
      "Send a correction, a relevant document or a review from your field. If something looks wrong, it is worth reporting even if you do not have a source at hand.",
    /** First-cited order, which is the order the markers are numbered in. */
    references: ["MV-WATER-22", "MV-DWMP-26", "AIR-2013", "BCH-WESTEND-25"],
  },

  sections: [
    {
      title: "How to contribute",
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
            The readers most likely to catch what is wrong here work in the
            fields this site covers: seismology and geotechnical engineering,
            water and sewer, power, gas, telecommunications, transport, fuel and
            food supply, housing, health care and emergency management.
          </p>
          <p>
            The fastest thing to act on is one line saying which claim is wrong,
            and a document with an author and a date behind it. A pointer to a
            report you know exists but cannot place saves days on its own. So
            does a read from the field with no document at all. That gets chased
            as a lead rather than published as a claim: what reaches a page has
            to be something a reader can check.
          </p>
          <p>
            Claims need published evidence before they reach the site. This
            project does not produce new calculations, and figures from past
            earthquakes elsewhere are not applied to the Lower Mainland. The
            2011 earthquake in Christchurch, New Zealand, and the 1995
            earthquake in Kobe, Japan, can show how a system fails, but not how
            long a local outage would last.
          </p>
        </Prose>
      ),
    },

    {
      title: "Three documents we are looking for",
      body: (
        <Prose>
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
            it, that is the document to send.
          </p>
        </Prose>
      ),
    },
  ],
};
