import Link from "next/link";
import type { ReactNode } from "react";
import type { PageStatus } from "@/content/types";
import { DraftMark } from "./status";
import { slugify } from "./prose-blocks";

/**
 * Page furniture and content blocks.
 *
 * The block primitives that go *inside* a section — subheads, tables,
 * quotations, figures — live in `prose-blocks.tsx` and are re-exported at the
 * foot of this file, so a page imports the whole set from one place.
 *
 * Anywhere a reader sees a sentence, the prop is `ReactNode` rather than
 * `string`. A standfirst, a lede and a "what you can do" bullet all carry
 * sourced claims, and a claim on this site carries its `<Cite>` marker in the
 * same sentence as the number.
 */

/* ------------------------------------------------------------------ */
/* Page furniture                                                      */
/* ------------------------------------------------------------------ */

export function PageHeader({
  kicker,
  title,
  status,
  standfirst,
  children,
}: {
  kicker?: string;
  title: string;
  /**
   * Where the page is in the making. A draft gets a marker beside the title,
   * which is a label on the page rather than a sentence about the project. It
   * sits outside the `<h1>`, so the accessible name of the heading stays the
   * title and nothing is added to the heading order.
   */
  status?: PageStatus;
  standfirst?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header>
      {kicker ? (
        <p className="mb-3 text-xs font-semibold tracking-[0.12em] text-accent uppercase">
          {kicker}
        </p>
      ) : null}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <h1 className="font-display text-4xl leading-[1.08] tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        {status === "draft" ? <DraftMark /> : null}
      </div>
      {standfirst ? (
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted text-pretty">
          {standfirst}
        </p>
      ) : null}
      {children ? <div className="mt-6">{children}</div> : null}
    </header>
  );
}

export function Section({
  id,
  title,
  lede,
  children,
}: {
  id?: string;
  title: string;
  lede?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section
      id={id ?? slugify(title)}
      className="scroll-mt-28 border-t border-rule pt-10"
    >
      <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
        {title}
      </h2>
      {lede ? (
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">{lede}</p>
      ) : null}
      <div className="mt-6">{children}</div>
    </section>
  );
}

/**
 * A run of body text.
 *
 * `paragraphs` is the short form: every entry becomes a `<p>`, and every entry
 * is a `ReactNode`, so running text carries inline citations. See
 * `components/citation.tsx`.
 *
 * `children` is the long form, for a run that is not only paragraphs. A section
 * in the copy mixes paragraphs with lists, subheads, tables, quotations and
 * set-apart blocks, and they read as one column of text rather than as a stack
 * of separate objects. Write the blocks directly:
 *
 *   <Prose>
 *     <p>The province designates routes ... <Cite id="moti-srdc-05" /></p>
 *     <Subhead>A bridge that survives is not a bridge you can drive over</Subhead>
 *     <ul>
 *       <li>...</li>
 *     </ul>
 *     <Quote speaker="..." source="...">...</Quote>
 *   </Prose>
 *
 * `.prose-body` in `globals.css` styles the elements written that way, so a
 * plain `<ul>` or `<h3>` needs no classes. Both props can be used at once; the
 * paragraphs come first.
 *
 * `wide` drops the reading measure, for a section built around a table.
 */
export function Prose({
  paragraphs,
  children,
  wide = false,
}: {
  paragraphs?: ReactNode[];
  children?: ReactNode;
  wide?: boolean;
}) {
  return (
    <div className={wide ? "prose-body max-w-none" : "prose-body max-w-2xl"}>
      {paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Content blocks                                                      */
/* ------------------------------------------------------------------ */

/**
 * "No doom without a lever." Every long page ends with one of these.
 *
 * It is a real `<section>` with a real `<h2>`, so it appears in the contents
 * rail and sits in the heading order alongside everything above it. The reader
 * who lands on a page looking for what to do can find it from the rail. The
 * panel keeps it visually distinct without costing it its place in the
 * structure.
 *
 * `title` is the sentence between the heading and the list: on the
 * transportation page it says who can and cannot retrofit a bridge. It is no
 * longer a heading of its own, because "What you can do" is the heading the
 * copy gives and a second one under it would break the order. Items carry their
 * own citations, so they are `ReactNode`.
 *
 * `closing` is the paragraph some copy writes after the bullets, which ties the
 * list together and is not itself an action. It has its own slot because a
 * closing sentence forced into the list reads as one more thing to do.
 *
 * The standing link at the foot is the route out to the preparedness plan.
 * `href={null}` leaves it off, which is what `/prepare/` itself wants: a link
 * from a page to that same page is a loop. `linkLabel` renames it where the
 * default words would be wrong.
 */
export interface LeverProps {
  /** The `<h2>`, and the entry in the contents rail. */
  heading?: string;
  id?: string;
  /** One or two sentences under the heading. */
  title?: ReactNode;
  items: ReactNode[];
  /** A closing paragraph under the list, where the copy writes one. */
  closing?: ReactNode;
  /** Where the standing link goes. `null` leaves the link off. */
  href?: string | null;
  /** The standing link's words. */
  linkLabel?: ReactNode;
}

export function Lever({
  heading = "What you can do",
  id,
  title,
  items,
  closing,
  href = "/prepare/",
  linkLabel = "The full preparedness plan",
}: LeverProps) {
  return (
    <section
      id={id ?? slugify(heading)}
      className="scroll-mt-28 rounded-xl border border-accent/30 bg-accent-soft p-6 sm:p-8"
    >
      <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
        {heading}
      </h2>
      {title ? (
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">{title}</p>
      ) : null}
      <ul className="mt-6 flex max-w-2xl flex-col gap-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 leading-relaxed">
            <span
              aria-hidden
              className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {closing ? (
        <p className="mt-6 max-w-2xl leading-relaxed">{closing}</p>
      ) : null}
      {href ? (
        <Link
          href={href}
          className="mt-6 inline-block text-sm font-medium text-accent underline underline-offset-4"
        >
          {linkLabel}
        </Link>
      ) : null}
    </section>
  );
}

/**
 * A gap, shown rather than hidden. Assumption discipline is a stated principle
 * of the project, so the site shows its gaps rather than papering over them.
 *
 * The label names the kind of gap, because "not yet published" and "not a
 * restoration estimate" are different claims and the copy distinguishes them.
 *
 * The copy writes that distinction as a bold lead: `> **Not yet published.**
 * The rest of the note.` The lead is the label, so it goes in `label` and comes
 * out of the body. A note that repeats it reads it twice, and the body then
 * opens on a sentence fragment.
 *
 *   <VerificationNote label="Not a restoration estimate">
 *     A March 2018 case study found that …
 *   </VerificationNote>
 *
 * The label is uppercased in CSS, so it takes no full stop: the copy's
 * sentence-ending period belongs to the markdown, not to the label, and set in
 * capitals it reads as a typo.
 */
export function VerificationNote({
  label = "Not yet verified",
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  return (
    <aside className="rounded-lg border border-dashed border-rule-strong bg-paper-raised p-5">
      <p className="text-xs font-semibold tracking-[0.12em] text-ink-faint uppercase">
        {label}
      </p>
      <div className="prose-body mt-2 text-sm leading-relaxed text-ink-muted">
        {children}
      </div>
    </aside>
  );
}

export function Callout({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <aside className="border-l-2 border-accent pl-5">
      <p className="text-xs font-semibold tracking-[0.12em] text-accent uppercase">
        {label}
      </p>
      <div className="mt-2 leading-relaxed text-pretty">{children}</div>
    </aside>
  );
}

/* ------------------------------------------------------------------ */
/* Placeholders for content that is not built yet                      */
/* ------------------------------------------------------------------ */

/**
 * A map slot that has not been built. It names the dataset and says what it is,
 * so nothing on the page looks more finished than it is. `licence` is for a
 * dataset whose terms are already settled, where the attribution has to sit
 * beside the graphic; leave it out and the slot says the licence is still to be
 * confirmed, which is usually the truth.
 */
export function MapPlaceholder({
  title,
  caption,
  dataset,
  licence,
  ratio = "16 / 9",
}: {
  title: string;
  caption: string;
  dataset: string;
  licence?: ReactNode;
  ratio?: string;
}) {
  return (
    <figure>
      <div
        style={{ aspectRatio: ratio, maxHeight: "26rem" }}
        className="hatch grid w-full max-w-full place-items-center rounded-lg border border-rule-strong"
      >
        <div className="rounded-md bg-paper-raised px-5 py-3 text-center">
          <p className="font-display text-lg">{title}</p>
          <p className="mt-1 text-xs text-ink-faint">Map slot, not yet built</p>
        </div>
      </div>
      <figcaption className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
        {caption}{" "}
        <span className="text-ink-faint">
          Dataset: {dataset}.{" "}
          {licence ? <>{licence}</> : "Licence to be confirmed."}
        </span>
      </figcaption>
    </figure>
  );
}

export function NextPrev({
  prev,
  next,
}: {
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
}) {
  return (
    <nav className="grid gap-px overflow-hidden rounded-lg border border-rule bg-rule sm:grid-cols-2">
      {[prev, next].map((link, i) =>
        link ? (
          <Link
            key={i}
            href={link.href}
            className={`bg-paper-raised px-5 py-4 transition-colors hover:bg-accent-soft ${
              i === 1 ? "sm:text-right" : ""
            }`}
          >
            <span className="block text-xs tracking-wide text-ink-faint uppercase">
              {i === 0 ? "Previous" : "Next"}
            </span>
            <span className="mt-1 block font-display text-lg">
              {link.label}
            </span>
          </Link>
        ) : (
          <span key={i} className="hidden bg-paper-raised sm:block" />
        ),
      )}
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/* Blocks that go inside a section                                     */
/* ------------------------------------------------------------------ */

export {
  slugify,
  Subhead,
  DataTable,
  NotPublished,
  Quote,
  Figure,
} from "./prose-blocks";

export { Photograph } from "./photograph";
