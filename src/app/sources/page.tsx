import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/shell";
import { PageHeader, Section, Prose, NextPrev } from "@/components/page-parts";
import { REFERENCES } from "@/content/references";
import type { Reference, ReferenceRoute } from "@/content/types";

export const metadata: Metadata = { title: "Sources" };

/**
 * The register renders itself from `src/content/references.ts`, which is
 * generated from `docs/research/sources.md`. A hand-typed list beside it would
 * be a second source of truth, and the two would drift.
 */
const DOCUMENTS: Reference[] = Object.values(REFERENCES)
  .filter((entry) => entry.kind !== "page")
  .sort((a, b) => a.id.localeCompare(b.id, "en"));

const ANALOGUES = DOCUMENTS.filter((entry) => entry.kind === "analogue");
const DATASETS = DOCUMENTS.filter((entry) => entry.kind === "dataset");

const NO_LINK = DOCUMENTS.filter((entry) => !entry.href).length;

/** Grouped by the first letter of the code, which is how the list is ordered. */
const LETTERS: { letter: string; entries: Reference[] }[] = [];
for (const entry of DOCUMENTS) {
  const letter = entry.id.charAt(0).toUpperCase();
  const last = LETTERS[LETTERS.length - 1];
  if (last && last.letter === letter) last.entries.push(entry);
  else LETTERS.push({ letter, entries: [entry] });
}

/**
 * How we reached the document, in the reader's words rather than the one-word
 * code the research files use. It is the difference between a figure read off
 * the page of a report and the same figure repeated in a news story.
 */
const ROUTE_LABEL: Record<ReferenceRoute, string> = {
  direct: "Read from the document itself",
  media: "Reported in the press; the underlying document not read",
  vendor: "The organisation describing its own work",
  landing: "A page about the document, not the document",
  archive: "Read from an archived or repository copy",
};

const KIND_LABEL: Partial<Record<Reference["kind"], string>> = {
  dataset: "Dataset",
  analogue: "Analogue event",
};

function Entry({ entry }: { entry: Reference }) {
  const kind = KIND_LABEL[entry.kind];
  return (
    <li
      id={`ref-${entry.id}`}
      className="scroll-mt-28 bg-paper-raised px-4 py-4 sm:grid sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-5"
    >
      <p className="font-mono text-xs break-words text-ink-faint">{entry.id}</p>
      <div className="mt-1 sm:mt-0">
        <p className="font-display text-base leading-snug text-pretty">
          {entry.title}
        </p>
        <p className="mt-1 text-sm text-ink-muted">
          {[entry.publisher, entry.date].filter(Boolean).join(" · ")}
        </p>
        {entry.note ? (
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            {entry.note}
          </p>
        ) : null}
        {entry.licence ? (
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            <span className="font-semibold">Licence:</span> {entry.licence}
          </p>
        ) : null}
        <p className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-xs text-ink-faint">
          {kind ? <span className="font-semibold text-ink-muted">{kind}</span> : null}
          {entry.route ? <span>{ROUTE_LABEL[entry.route]}</span> : null}
          {entry.href ? (
            <a
              href={entry.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-accent underline underline-offset-4"
            >
              Open the document ↗
            </a>
          ) : (
            <span>No link to follow</span>
          )}
        </p>
      </div>
    </li>
  );
}

function EntryList({ entries }: { entries: Reference[] }) {
  return (
    <ul className="flex flex-col gap-px overflow-hidden rounded-xl border border-rule bg-rule">
      {entries.map((entry) => (
        <Entry key={entry.id} entry={entry} />
      ))}
    </ul>
  );
}

export default function SourcesPage() {
  return (
    <ArticleShell
      header={
        <PageHeader
          kicker="Every figure on this site, and the document it came from"
          title="Sources"
          standfirst={`Nothing here is our own modelling. Every number was published by somebody else first, and this page lists all ${DOCUMENTS.length} of those documents, with the date each one carries and a link wherever one survives.`}
        />
      }
    >
      <Section
        title="How to read an entry"
        lede="An entry names the document, who published it, and the date on the document itself rather than the date we read it."
      >
        <Prose
          paragraphs={[
            "Under each one is a line saying how we got to it. A figure read off the page of a report is stronger evidence than the same figure repeated in a news story, and the entry says which of the two it is. Where an organisation is describing its own work, that is stated too.",
            `Some documents cannot be checked by following a link. ${NO_LINK} were never recovered at all, and others sit behind a paywall or refuse an automated request. That is a fact about the evidence, so the entry carries it rather than leaving a dead link to be discovered.`,
            "Where a document sets conditions on reuse, the licence is quoted in the entry. Most carry none, which means the facts in them are free to state and their wording is not, so this site paraphrases and links.",
          ]}
        />
      </Section>

      <Section
        title="Analogue events illustrate, they do not measure"
        lede={`${ANALOGUES.length} entries describe earthquakes somewhere else: Christchurch, Kobe and the 2011 earthquake off the Pacific coast of Tohoku.`}
      >
        <Prose
          paragraphs={[
            "They are here because they show what daily life was like when a sewer network was out for months, or when fuel existed but nothing could move it. They cannot tell you how long anything in the Lower Mainland would be out. No restoration time on this site is taken from one of them.",
          ]}
        />
        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {ANALOGUES.map((entry) => (
            <li key={entry.id}>
              <a
                href={`#ref-${entry.id}`}
                className="text-accent underline underline-offset-4"
              >
                {entry.title}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        title="Datasets, and what may be drawn from them"
        lede={`${DATASETS.length} entries are map and catalogue layers rather than reports. These are the ones a map could be built from, so each carries its licence in full.`}
      >
        <Prose
          paragraphs={[
            <>
              Some of these may be used freely with credit. Others may be read
              and linked to but not copied, restyled or built on. The{" "}
              <Link
                href="/licences/"
                className="text-accent underline underline-offset-2"
              >
                licences page
              </Link>{" "}
              sets out the credit each one requires, and names the layers this
              site links to rather than draws.
            </>,
          ]}
        />
        <div className="mt-6">
          <EntryList entries={DATASETS} />
        </div>
      </Section>

      <Section
        title="The full list"
        lede="Alphabetical by the short code each document is filed under. The codes are stable, so a link to one entry keeps working."
      >
        <nav aria-label="Jump to a letter" className="mb-8">
          <ul className="flex flex-wrap gap-2">
            {LETTERS.map(({ letter, entries }) => (
              <li key={letter}>
                <a
                  href={`#sources-${letter}`}
                  className="inline-block rounded-md border border-rule px-2.5 py-1 font-mono text-xs text-accent hover:bg-accent-soft"
                >
                  {letter}
                  <span className="sr-only">
                    , {entries.length} documents
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-10">
          {LETTERS.map(({ letter, entries }) => (
            <div key={letter}>
              <h3
                id={`sources-${letter}`}
                className="scroll-mt-28 font-mono text-sm font-semibold tracking-[0.12em] text-ink-faint"
              >
                {letter}
              </h3>
              <div className="mt-3">
                <EntryList entries={entries} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Missing a document"
        lede="Some of what this site needs has never been published, and some of it was published and then taken down. If you know where a document lives, that is the most useful thing you can send."
      >
        <Link
          href="/contribute/"
          className="inline-block text-sm font-medium text-accent underline underline-offset-4"
        >
          How to send a source or a correction
        </Link>
      </Section>

      <NextPrev
        prev={{ href: "/method/", label: "Method & bands" }}
        next={{ href: "/licences/", label: "Licences" }}
      />
    </ArticleShell>
  );
}
