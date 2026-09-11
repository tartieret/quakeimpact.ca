import Link from "next/link";
import { Prose } from "@/components/page-parts";
import type { PageSection } from "./index";

/**
 * The standing text a page carries once its evidence is gathered and its body
 * is not written. Ported from `docs/copy/unwritten.md`, system variant.
 *
 * It is a `PageSection` like any other, so a page in this state renders through
 * the same path as a written one: a real `<h2>`, in the heading order, in the
 * contents rail. The reader can see from the rail that the page says only this.
 *
 * The copy file also holds a shaking-page variant, below, for the four pages
 * under `/shaking/` that are in the same state. Pages in Part 1 carry no band,
 * so that variant names what is actually on the screen instead.
 */

const linkClass = "text-accent underline underline-offset-2";

export const UNWRITTEN_SYSTEM: PageSection = {
  title: "This page is not written yet",
  body: (
    <div className="rounded-lg border border-dashed border-rule-strong bg-paper-raised p-6 sm:p-8">
      <Prose>
        <p>
          What is above it is real. The band, the sentence saying how this
          system fails, the document that sentence comes from, where the system
          sits on the timeline and what it is waiting on all come from published
          assessments, and every one of them is listed at the foot of this page.
          They can be read and checked today.
        </p>
        <p>
          What is missing is the rest: how the failure works, where in the
          region it falls hardest, what has and has not been published about
          restoring it, and what a household can do about it. None of that is
          here yet, and nothing has been written in its place.
        </p>
        <p>
          <Link href="/method/" className={linkClass}>
            How the bands work
          </Link>{" "}
          explains what the band above means and how it was assigned.{" "}
          <Link href="/after/water/" className={linkClass}>
            Water
          </Link>
          ,{" "}
          <Link href="/after/electricity/" className={linkClass}>
            electricity
          </Link>{" "}
          and{" "}
          <Link href="/after/transportation/" className={linkClass}>
            transportation
          </Link>{" "}
          are written in full and show what this page will carry.{" "}
          <Link href="/prepare/" className={linkClass}>
            Preparing
          </Link>{" "}
          covers what to do across all of the systems, including this one.
        </p>
      </Prose>
    </div>
  ),
};

/**
 * The same standing text for a page under `/shaking/`. A Part 1 page carries a
 * summary line, no band and no reference ids of its own, so the route lists no
 * sources for it. This variant therefore points at the line at the top of the
 * page and promises no document list, and sends the reader to the one page in
 * the part that is written.
 */
export const UNWRITTEN_SHAKING: PageSection = {
  title: "This page is not written yet",
  body: (
    <div className="rounded-lg border border-dashed border-rule-strong bg-paper-raised p-6 sm:p-8">
      <Prose>
        <p>
          The line at the top of this page is real: it says what this subject
          covers, and nothing more.
        </p>
        <p>
          What is missing is the page itself: what the documents say, where they
          disagree, what nobody has published, and what any of it means for a
          person in the region. None of that is here yet, and nothing has been
          written in its place.
        </p>
        <p>
          <Link href="/shaking/ground/" className={linkClass}>
            Ground conditions
          </Link>{" "}
          is written in full and carries the finding the rest of this part rests
          on: what a building stands on matters more than which building it is.{" "}
          <Link href="/scenarios/" className={linkClass}>
            The two scenarios
          </Link>{" "}
          covers what each of the two earthquakes does, in the province’s and
          the federal agency’s own words.
        </p>
      </Prose>
    </div>
  ),
};
