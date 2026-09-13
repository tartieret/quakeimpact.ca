import type { ReactNode } from "react";

/**
 * Block primitives that appear inside the body of a section: subheads, data
 * tables, quotations and figures.
 *
 * Every one of them is a Server Component and every one of them takes
 * `ReactNode` wherever a reader will see a sentence, so a claim can carry its
 * `<Cite>` marker where the claim is rather than in a footnote.
 *
 * `page-parts.tsx` re-exports all of these, so a page can import the whole set
 * from one place.
 */

/** Combining accents, U+0300 to U+036F, left behind by NFD normalisation. */
const COMBINING_MARKS = new RegExp("[\u0300-\u036f]", "g");

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(COMBINING_MARKS, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/* ------------------------------------------------------------------ */
/* Subheads                                                            */
/* ------------------------------------------------------------------ */

/**
 * A subhead inside a section. It carries an id, which is what lets the
 * contents rail list it under its `<h2>`. Text is a plain string so the id and
 * the rail entry both come from the words on the page.
 */
export function Subhead({ children, id }: { children: string; id?: string }) {
  return (
    <h3
      id={id ?? slugify(children)}
      className="scroll-mt-28 font-display text-xl tracking-tight text-pretty"
    >
      {children}
    </h3>
  );
}

/* ------------------------------------------------------------------ */
/* Tables                                                              */
/* ------------------------------------------------------------------ */

/**
 * A cell standing for a figure nobody has put in the public record. It is a
 * visible state rather than an empty cell, for the same reason the fourth band
 * is hatched rather than blank: a gap that is shown reads as honest, and a gap
 * that is left blank reads as an oversight. Hatching and the words carry the
 * meaning together, so it survives in greyscale.
 */
export function NotPublished({ label = "Not published" }: { label?: string }) {
  return (
    <span className="hatch inline-flex items-center rounded border border-rule-strong px-2 py-1 text-xs font-semibold tracking-[0.08em] text-ink-muted uppercase">
      {label}
    </span>
  );
}

/**
 * A data table.
 *
 * The first cell of every row is a row header, so a screen reader announces
 * which crossing or which source a figure belongs to. The table scrolls inside
 * its own container at phone width, which is why the container is a focusable
 * region: a pane that can only be reached by dragging is unusable from a
 * keyboard.
 *
 * Pass `""` as the first column label for a table whose top-left cell is blank;
 * it renders as an empty corner cell rather than an unlabelled header.
 */
export function DataTable({
  caption,
  columns,
  rows,
  note,
  id,
  minWidth = "32rem",
}: {
  /** Says what the table shows. Plain text; it names the table for the rail of a screen reader. */
  caption: string;
  /** Column labels, left to right. `""` renders a blank corner cell. */
  columns: ReactNode[];
  /** One array per row, in column order. The first entry becomes the row header. */
  rows: ReactNode[][];
  /** Sits under the table. Citation markers for the table as a whole go here. */
  note?: ReactNode;
  id?: string;
  /** Width below which the table scrolls rather than crushing its columns. */
  minWidth?: string;
}) {
  const captionId = id ?? `table-${slugify(caption)}`;

  return (
    <div>
      <div
        role="region"
        aria-labelledby={captionId}
        tabIndex={0}
        className="overflow-x-auto rounded-xl border border-rule bg-paper-raised"
      >
        <table
          style={{ minWidth }}
          className="w-full border-collapse text-left"
        >
          <caption
            id={captionId}
            className="border-b border-rule px-4 py-3 text-left text-sm leading-snug text-ink-muted"
          >
            {caption}
          </caption>
          <thead>
            <tr className="border-b border-rule">
              {columns.map((column, i) =>
                column === "" ? (
                  <td key={i} className="px-4 py-3" />
                ) : (
                  <th
                    key={i}
                    scope="col"
                    className="px-4 py-3 align-bottom text-xs font-semibold tracking-[0.08em] text-ink-faint uppercase"
                  >
                    {column}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, r) => (
              <tr key={r} className="border-b border-rule last:border-0">
                {row.map((cell, c) =>
                  c === 0 ? (
                    <th
                      key={c}
                      scope="row"
                      className="px-4 py-3 align-top text-sm leading-relaxed font-medium text-ink"
                    >
                      {cell}
                    </th>
                  ) : (
                    <td
                      key={c}
                      className="px-4 py-3 align-top text-sm leading-relaxed text-ink-muted"
                    >
                      {cell}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note ? (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
          {note}
        </p>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Quotations                                                          */
/* ------------------------------------------------------------------ */

/**
 * A quotation, with the speaker and the document named under it.
 *
 * An official describing their own system cannot be accused of spin, which is
 * why quotations do so much work on this site. The words between the tags are
 * verbatim, including whatever punctuation the source used, so nothing here
 * adds quote glyphs or reflows the text: what is passed in is what appears.
 *
 * Several paragraphs can be passed as several `<p>` elements.
 */
export function Quote({
  children,
  speaker,
  source,
  cite,
  href,
}: {
  /** The quotation, verbatim. */
  children: ReactNode;
  /** Who said it, or the body that published it. */
  speaker: ReactNode;
  /** The document, and the page or section within it. */
  source?: ReactNode;
  /** A `<Cite>` marker for the document. */
  cite?: ReactNode;
  /** The document's own URL, for the `cite` attribute. */
  href?: string;
}) {
  return (
    <figure className="border-l-2 border-accent pl-5 sm:pl-6">
      <blockquote
        cite={href}
        className="flex flex-col gap-4 text-lg leading-relaxed text-pretty"
      >
        {children}
      </blockquote>
      <figcaption className="mt-4 text-sm leading-relaxed text-ink-muted">
        {speaker}
        {source ? (
          <>
            , <cite className="not-italic">{source}</cite>
          </>
        ) : null}
        {cite ? <> {cite}</> : null}
      </figcaption>
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/* Figures                                                             */
/* ------------------------------------------------------------------ */

/**
 * A graphic with its caption, its finding and its licence.
 *
 * `alt` states what the reader would take away from looking at it, not what the
 * file is called, and it is applied to the frame so an inline `<svg>` and an
 * `<img alt="">` are both covered. `licence` travels with the graphic because
 * an Open Government Licence source has to be attributed beside the thing it
 * produced, not on a separate page.
 *
 * `interactive` is for a graphic a reader can operate, which today means a map
 * with a zoom. `role="img"` makes everything inside it presentational, so a
 * frame carrying that role would hide the graphic's own buttons from a screen
 * reader entirely. An interactive figure therefore drops the role and puts the
 * finding in a screen-reader paragraph instead: the sentence still arrives
 * first, and the controls under it are reachable.
 */
export function Figure({
  children,
  alt,
  caption,
  licence,
  id,
  interactive = false,
}: {
  /** The graphic. An `<img alt="">` or an inline `<svg aria-hidden>`. */
  children: ReactNode;
  /** The finding the graphic shows, in one sentence. */
  alt: string;
  caption?: ReactNode;
  /** Attribution required by the source's licence. */
  licence?: ReactNode;
  id?: string;
  /** The graphic has controls of its own. */
  interactive?: boolean;
}) {
  return (
    <figure id={id}>
      <div
        role={interactive ? undefined : "img"}
        aria-label={interactive ? undefined : alt}
        className="overflow-hidden rounded-lg border border-rule bg-paper-raised"
      >
        {interactive ? <p className="sr-only">{alt}</p> : null}
        {children}
      </div>
      {caption || licence ? (
        <figcaption className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
          {caption}
          {licence ? (
            <span className="mt-2 block text-xs text-ink-faint">{licence}</span>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
