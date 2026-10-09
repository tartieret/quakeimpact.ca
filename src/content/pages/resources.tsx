import Link from "next/link";
import { Cite } from "@/components/citation";
import { Prose } from "@/components/page-parts";
import type { PageModule } from "./index";

/**
 * Further resources. The body of `/resources/`, ported from
 * `docs/copy/resources.md`.
 *
 * No `lever`: every section is already somewhere to go next, and the province's
 * guide leads because it is the one a reader acts on. The podcast is
 * described from its own episode notes rather than from the audio, so the page
 * says what the series covers and when it was made, and leaves what it says to
 * the series.
 */
const link = "text-accent underline underline-offset-2";

export const resources: PageModule = {
  meta: {
    route: "/resources/",
    title: "Further resources",
    description:
      "The province’s earthquake preparedness guide, and a CBC podcast that follows a major earthquake from the first day to the first year.",
    nav: "Resources",
    kicker: "Guides and a podcast",
    standfirst:
      "The province’s guide is the one to follow at home, and a CBC podcast tells the story of a major earthquake from the first day to the first year.",
    /** First-cited order, which is the order the markers are numbered in. */
    references: [
      "PREPAREDBC",
      "PREPAREDBC-PLAN",
      "PREPAREDBC-GUIDES",
      "CBC-FAULTLINES-16",
      "NRCAN-EEW",
    ],
  },

  sections: [
    {
      title: "The province publishes the guide to follow",
      body: (
        <Prose>
          <p>
            <a
              href="https://www2.gov.bc.ca/gov/content/safety/emergency-management/preparedbc"
              target="_blank"
              rel="noreferrer"
              className={link}
            >
              PreparedBC
            </a>{" "}
            is the Province of British Columbia’s preparedness program. Its{" "}
            <em>Earthquake and Tsunami Preparedness Guide</em> asks households
            to be ready to look after themselves for at least two weeks, and
            covers the plan, the supplies and what to do while the ground is
            shaking. <Cite id="PREPAREDBC" /> It is the guide the advice on{" "}
            <Link href="/prepare/" className={link}>
              Preparing
            </Link>{" "}
            follows.
          </p>
          <p>
            Beside it, the province publishes a household plan to fill in, with
            the out-of-area contact and the meeting place, in English, French,
            Chinese and Punjabi. <Cite id="PREPAREDBC-PLAN" />{" "}
            <Cite id="PREPAREDBC-GUIDES" /> There are separate guides for
            apartments and condominiums, for people with disabilities, for pets
            and for neighbourhoods, all on its{" "}
            <a
              href="https://www2.gov.bc.ca/gov/content/safety/emergency-management/preparedbc/guides-and-resources"
              target="_blank"
              rel="noreferrer"
              className={link}
            >
              guides and resources
            </a>{" "}
            page. <Cite id="PREPAREDBC-GUIDES" />
          </p>
        </Prose>
      ),
    },

    {
      title: "A CBC podcast follows the same two kinds of earthquake",
      body: (
        <Prose>
          <p>
            <em>Fault Lines</em> is a five-episode series from CBC Vancouver,
            presented by Johanna Wagstaffe. It takes a megathrust earthquake off
            the coast and a shallow one beneath Vancouver, the same two kinds
            this site describes, and follows them through the first day, the
            first three days, the first week, and the month and the year after.
            The last episode hears from two people who lived through the
            earthquakes in Christchurch, New Zealand, in 2010 and 2011.{" "}
            <Cite id="CBC-FAULTLINES-16" />
          </p>
          <p>
            It was made in 2016. Where it and the province’s current guide
            differ on what to keep at home, follow the guide. Earthquake early
            warning, which can give seconds of notice before strong shaking
            arrives, reached British Columbia in 2024, after the series was
            made. <Cite id="NRCAN-EEW" />
          </p>
          <p>
            Find it on{" "}
            <a
              href="https://www.cbc.ca/listen/cbc-podcasts/147-fault-lines"
              target="_blank"
              rel="noreferrer"
              className={link}
            >
              CBC Listen
            </a>{" "}
            or{" "}
            <a
              href="https://podcasts.apple.com/ca/podcast/fault-lines/id1162124786"
              target="_blank"
              rel="noreferrer"
              className={link}
            >
              Apple Podcasts
            </a>
            , or search for <em>Fault Lines</em> from CBC in any podcast app.
          </p>
        </Prose>
      ),
    },
  ],
};
