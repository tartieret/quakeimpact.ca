import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/shell";
import { PageHeader, Section, Prose, NextPrev } from "@/components/page-parts";
import { CITED_REFERENCES } from "@/content/cited";
import { REFERENCES } from "@/content/references";
import type { Reference, ReferenceRoute } from "@/content/types";

export const metadata: Metadata = { title: "Sources" };

/**
 * The register renders itself from `src/content/references.ts`, which is
 * generated from `docs/research/sources.md`. A hand-typed list beside it would
 * be a second source of truth, and the two would drift.
 *
 * It renders the part of the register the site cites, which is not all of it.
 * The register is a research file as well as the site's bibliography, and it
 * holds documents behind findings whose page is not written yet. Printing
 * those here put a document in front of a reader with no claim to check it
 * against, under a standfirst promising every entry was behind a figure on the
 * site. `@/content/cited` works out which those are; nothing is removed from
 * the register, and a document arrives here the moment something cites it.
 */
const DOCUMENTS: Reference[] = Object.values(REFERENCES).filter(
  (entry) => entry.kind !== "page" && CITED_REFERENCES.has(entry.id),
);

const ANALOGUES = [...DOCUMENTS]
  .filter((entry) => entry.kind === "analogue")
  .sort((a, b) => a.title.localeCompare(b.title, "en"));
const DATASETS = [...DOCUMENTS]
  .filter((entry) => entry.kind === "dataset")
  .sort((a, b) => a.title.localeCompare(b.title, "en"));

const NO_LINK = DOCUMENTS.filter((entry) => !entry.href).length;

/**
 * Grouped by who published it.
 *
 * Three hundred documents in one alphabet, led by the short code each is filed
 * under, is a list you can only use if you already know the answer: a reader
 * looking for the BC Hydro filing has to know it is filed under B. The
 * publisher is the thing a reader actually holds in mind, so it orders the
 * page, and the code moves to the end of the entry where it stays copyable and
 * stays the anchor.
 *
 * The grouping is the register's own Organisation cell, not a classification
 * invented here: nothing is assigned to a family by guesswork, so a publisher
 * with one document gets a group of one rather than a wrong home.
 */
const UNATTRIBUTED = "Publisher not recorded";

const BY_PUBLISHER: { publisher: string; slug: string; entries: Reference[] }[] =
  (() => {
    const groups = new Map<string, Reference[]>();
    for (const entry of DOCUMENTS) {
      const key = entry.publisher ?? UNATTRIBUTED;
      const held = groups.get(key);
      if (held) held.push(entry);
      else groups.set(key, [entry]);
    }
    // Two publisher names can reduce to the same slug ("Province of BC" and
    // "Province of B.C."). A group id has to be unique or the jump list sends
    // every reader to whichever came first, so a repeat is numbered.
    const taken = new Set<string>();
    return [...groups.entries()]
      .sort(([a], [b]) => {
        // The unattributed group sorts last wherever its name would fall.
        if (a === UNATTRIBUTED) return 1;
        if (b === UNATTRIBUTED) return -1;
        return a.localeCompare(b, "en");
      })
      .map(([publisher, entries]) => {
        const base = `pub-${publisher
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "")}`;
        let slug = base;
        for (let n = 2; taken.has(slug); n++) slug = `${base}-${n}`;
        taken.add(slug);
        return {
          publisher,
          slug,
          entries: entries.sort((a, b) => a.title.localeCompare(b.title, "en")),
        };
      });
  })();

/**
 * The jump list. Twenty-six letters told a reader nothing; the publishers that
 * hold several documents each are a real table of contents, and the rest are
 * reachable by scrolling the alphabet they are already in.
 */
const JUMP = BY_PUBLISHER.filter((group) => group.entries.length >= 3);

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

/**
 * The short code is the entry's permanent address, so it has to resolve to one
 * place. The datasets are shown twice on this page, once in their own section
 * and again in the full list, and an id on both copies is invalid HTML that
 * sends a `#ref-` link to whichever the browser meets first. The full list is
 * the register, so the anchor lives there and the earlier showing carries
 * none.
 */
function Entry({
  entry,
  showPublisher = true,
  anchored = true,
}: {
  entry: Reference;
  showPublisher?: boolean;
  anchored?: boolean;
}) {
  const kind = KIND_LABEL[entry.kind];
  const byline = [showPublisher ? entry.publisher : undefined, entry.date]
    .filter(Boolean)
    .join(" · ");
  return (
    <li
      id={anchored ? `ref-${entry.id}` : undefined}
      className="scroll-mt-28 bg-paper-raised px-4 py-4"
    >
      <p className="font-display text-base leading-snug text-pretty">
        {entry.title}
      </p>
      {byline ? <p className="mt-1 text-sm text-ink-muted">{byline}</p> : null}
      {entry.note ? (
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{entry.note}</p>
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
        <span className="font-mono break-words">
          <span className="sr-only">Filed as </span>
          {entry.id}
        </span>
      </p>
    </li>
  );
}

function EntryList({
  entries,
  showPublisher = true,
  anchored = true,
}: {
  entries: Reference[];
  showPublisher?: boolean;
  anchored?: boolean;
}) {
  return (
    <ul className="flex flex-col gap-px overflow-hidden rounded-xl border border-rule bg-rule">
      {entries.map((entry) => (
        <Entry
          key={entry.id}
          entry={entry}
          showPublisher={showPublisher}
          anchored={anchored}
        />
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
        lede="An entry names the document, the date on the document itself rather than the date we read it, and what the document is being used for."
      >
        <Prose
          paragraphs={[
            "Under each one is a line saying how we got to it. A figure read off the page of a report is stronger evidence than the same figure repeated in a news story, and the entry says which of the two it is. Where an organisation is describing its own work, that is stated too.",
            `Some documents cannot be checked by following a link. ${NO_LINK} were never recovered at all, and others sit behind a paywall or refuse an automated request. That is a fact about the evidence, so the entry carries it rather than leaving a dead link to be discovered.`,
            "Where a document sets conditions on reuse, the licence is quoted in the entry. Most carry none, which means the facts in them are free to state and their wording is not, so this site paraphrases and links.",
            "Each entry ends with a short code in a typewriter face. That code is what the citation marker in the text points at, and it is the entry's permanent address on this page, so a link to one keeps working.",
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
          <EntryList entries={DATASETS} anchored={false} />
        </div>
      </Section>

      <Section
        title="The full list, by who published it"
        lede={`All ${DOCUMENTS.length} documents, grouped under the organisation that published each one and then ordered by title. The organisations that published three or more are listed first, as a way in.`}
      >
        <nav aria-label="Jump to a publisher" className="mb-10">
          <ul className="flex flex-wrap gap-2">
            {JUMP.map((group) => (
              <li key={group.slug}>
                <a
                  href={`#${group.slug}`}
                  className="inline-block rounded-md border border-rule px-2.5 py-1 text-xs text-accent hover:bg-accent-soft focus-visible:bg-accent-soft"
                >
                  {group.publisher}{" "}
                  <span className="text-ink-faint">{group.entries.length}</span>
                  <span className="sr-only"> documents</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* The id sits on the group rather than on its heading. The contents
            rail is built from `section[id] > h2` and `section[id] h3[id]`, so
            178 publisher subheads carrying ids made a sticky box 8,122 px tall
            in a 900 px viewport, which is a rail nobody can reach the bottom
            of. Moving the id one element out leaves the rail listing the five
            sections, and `#pub-` still lands on the group it names. */}
        <div className="flex flex-col gap-10">
          {BY_PUBLISHER.map((group) => (
            <div key={group.slug} id={group.slug} className="scroll-mt-28">
              <h3 className="text-sm font-semibold tracking-[0.06em] text-ink-faint uppercase">
                {group.publisher}
              </h3>
              <div className="mt-3">
                <EntryList entries={group.entries} showPublisher={false} />
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
