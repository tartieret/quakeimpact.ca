import Link from "next/link";
import { Cite } from "@/components/citation";
import { Prose } from "@/components/page-parts";
import type { PageModule } from "./index";

/**
 * Contribute. The body of `/contribute/`, ported from `docs/copy/contribute.md`.
 *
 * No `lever`: the page describes no consequence to the reader, so there is
 * nothing for it to tie an action to. What it asks for is the page.
 *
 * The two contact rows carry honest placeholders, because there is no address
 * and no issue tracker yet. They say so in the reader's terms rather than
 * offering a route that goes nowhere.
 */
const link = "text-accent underline underline-offset-2";

export const contribute: PageModule = {
  meta: {
    route: "/contribute/",
    title: "Contribute",
    nav: "Contribute",
    kicker: "Sources, corrections and local knowledge",
    standfirst:
      "This site is built out of documents other people published, so the useful contributions are documents. A correction with a source behind it is worth more than any amount of agreement.",
    /** First-cited order, which is the order the markers are numbered in. */
    references: ["MV-WATER-22", "MV-DWMP-26", "AIR-2013", "BCH-WESTEND-25"],
  },

  sections: [
    {
      title: "Four things are worth sending, and a link beats a summary",
      body: (
        <Prose>
          <ul>
            <li>
              <strong>A published document.</strong> An assessment, a capital
              plan, a hazard study: anything with an author and a date. A stable
              link to it is worth more than a summary of it.
            </li>
            <li>
              <strong>A correction with a source.</strong> If a number here is
              wrong, the document that shows it is wrong is the whole
              contribution.
            </li>
            <li>
              <strong>A pointer.</strong> You know the report exists but not
              where it lives. That still saves days.
            </li>
            <li>
              <strong>A read from the field.</strong> Emergency management,
              geotechnical, utility or logistics work in this region. What reads
              as wrong to someone who does this for a living is worth knowing
              even when no document comes with it, and it will be treated as a
              lead to chase rather than as a claim to publish.
            </li>
          </ul>
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
            Vancouver’s assessment of its own water system was released in a form
            with about two thirds of its roughly 300 pages blacked out, and two
            of the withheld pieces are the two a restoration estimate would be
            built from: the number of leaks and breaks per main, and the damage
            estimates for 21 water storage facilities. <Cite id="MV-WATER-22" />{" "}
            Metro Vancouver’s governing drinking water plan carries no
            restoration estimate either, and lists the analysis that would
            identify the system’s seismic weak points as work still to do.{" "}
            <Cite id="MV-DWMP-26" />
          </p>
          <p>
            <strong>
              What the port, the airport and the ferry terminals face in the
              nearer earthquake.
            </strong>{" "}
            The one study that assesses them modelled the magnitude 9.0
            megathrust and no shallow crustal earthquake. <Cite id="AIR-2013" />{" "}
            Nobody is saying those facilities do better or worse in the closer
            event. Nobody has looked, as far as this site can tell.
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

    {
      title: "Some things cannot be used, however confident",
      body: (
        <Prose>
          <ul>
            <li>Unsourced assertion.</li>
            <li>
              New modelling. This site compiles published work; it does not
              produce estimates of its own.
            </li>
            <li>
              Past earthquakes elsewhere used to generate numbers. Christchurch
              says what life was like when sewer service was out for months. It
              does not say what Richmond’s restoration time would be.
            </li>
            <li>
              Anything that makes a claim stronger than the document behind it.
            </li>
          </ul>
          <p>
            That last one is the failure this site is most careful about, because
            a single number that outruns its source is enough for a reader who
            knows the evidence to put the whole thing down.
          </p>
        </Prose>
      ),
    },

    {
      title: "How to send it",
      body: (
        <Prose>
          <p>
            One document, and one line saying which claim on the site it supports
            or contradicts.
          </p>
          <ul>
            <li>
              <strong>By email.</strong> The address is not published yet, and
              will be before this site launches.
            </li>
            <li>
              <strong>As an issue on the public repository.</strong> The link is
              not published yet, and will be before this site launches.
            </li>
          </ul>
          <p>
            Until those are up, nothing here can receive anything, and saying
            otherwise would be worse than saying nothing.
          </p>
        </Prose>
      ),
    },

    {
      title: "What happens to it",
      body: (
        <Prose>
          <p>
            A document that checks out gets a key in the{" "}
            <Link href="/sources/" className={link}>
              source register
            </Link>
            , and the claim it supports gets a marker pointing at it. A document
            that contradicts something already on the site is the better outcome
            of the two: the page changes, and what it used to say is not left
            standing anywhere.
          </p>
          <p>
            Anything held as a belief rather than a finding becomes a question to
            be settled first, and reaches a page only once a document confirms or
            contradicts it.{" "}
            <Link href="/method/" className={link}>
              How the bands work
            </Link>{" "}
            sets out the rest of that discipline, including what the hatched cells
            mean and why several of the bands are expected to move.
          </p>
        </Prose>
      ),
    },

    {
      title: "Nobody in the field has reviewed this site yet",
      body: (
        <Prose>
          <p>
            It has not been read by an emergency planner, a geotechnical engineer
            or a utility in the region. Until it has, treat it as one reader’s
            compilation of public documents, which is what it says it is on every
            page: the documents are named, and you can check any of them yourself.
          </p>
        </Prose>
      ),
    },
  ],
};
