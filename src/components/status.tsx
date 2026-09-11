import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Where a page is in the making, drawn.
 *
 * The state of a page is structural, not prose. A page whose evidence is
 * gathered and whose text is not written carries a marker beside its title and
 * a short notice at the top of its body. It does not carry a paragraph
 * explaining the site to the reader: the style guide's rule that the site never
 * talks about itself applies to the backlog most of all, and six paragraphs of
 * it had accumulated on fourteen pages.
 *
 * Both pieces read without colour. The marker is a word in a dashed outline,
 * which is the vocabulary the rest of the site already uses for something not
 * built: `VerificationNote` and `MapPlaceholder` are drawn the same way. Neither
 * piece is interactive, so neither needs a focus state; the links inside the
 * notice are ordinary links.
 */

/**
 * The marker. Small enough to sit beside a display heading without competing
 * with it, and beside a card title without crowding it.
 *
 * It is a `<span>` rather than a heading or a list item so it can go anywhere a
 * word goes, and it never enters the heading order or the contents rail.
 */
export function DraftMark() {
  return (
    <span className="inline-flex shrink-0 items-center rounded-sm border border-dashed border-rule-strong px-1.5 py-0.5 text-[0.6875rem] font-semibold tracking-[0.12em] text-ink-faint uppercase">
      Draft
    </span>
  );
}

const linkClass = "text-accent underline underline-offset-2";

/**
 * The notice at the top of a draft page's body.
 *
 * Two sentences, and they do three jobs: say that the text is missing, say what
 * on the screen can be relied on, and point somewhere that is written. An
 * `<aside>` rather than a `<section>`, because a section here would take an
 * `<h2>`, an entry in the contents rail and a place in the heading order for
 * something that is a label on the page rather than a part of it. It also keeps
 * `ArticleShell`'s section count honest, which is what decides whether the page
 * reserves a rail column at all.
 */
function Notice({ children }: { children: ReactNode }) {
  return (
    <aside className="rounded-lg border border-dashed border-rule-strong bg-paper-raised p-5 sm:p-6">
      <p className="max-w-2xl leading-relaxed text-pretty text-ink-muted">
        {children}
      </p>
    </aside>
  );
}

/**
 * The notice for a system page under `/after/`. Ported from
 * `docs/copy/unwritten.md`, system variant.
 *
 * The three written system pages are named because they are what this page will
 * look like, and `/prepare/` is named because it is the action that covers every
 * system at once. The page's own one-line action still renders through `Lever`
 * at the foot, from the system's `lever`, and is not described here.
 */
export function SystemDraftNotice() {
  return (
    <Notice>
      This page is not written yet: the band, the sentence behind it, the
      documents at the foot of the page and the action under them are real and
      can be checked today.{" "}
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
      are written in full, and{" "}
      <Link href="/prepare/" className={linkClass}>
        preparing
      </Link>{" "}
      covers what to do across all of the systems, including this one.
    </Notice>
  );
}

/**
 * The notice for a page under `/shaking/`. A Part 1 page carries no band, so
 * this variant names the summary line and the document list, which is what is
 * actually on the screen.
 */
export function ShakingDraftNotice() {
  return (
    <Notice>
      This page is not written yet: the line at the top says what the subject
      covers, and the documents at the foot are the ones gathered for it so far.{" "}
      <Link href="/shaking/ground/" className={linkClass}>
        Ground conditions
      </Link>{" "}
      is written in full, and{" "}
      <Link href="/scenarios/" className={linkClass}>
        the two scenarios
      </Link>{" "}
      covers what each of the two earthquakes does.
    </Notice>
  );
}
