import type { Metadata } from "next";
import Link from "next/link";
import { ReadingShell } from "@/components/shell";
import { PageHeader, Section, Prose, NextPrev } from "@/components/page-parts";
import { REFERENCES } from "@/content/references";
import type { ReferenceKind } from "@/content/types";
import { lorem } from "@/content/lorem";

export const metadata: Metadata = { title: "Sources" };

/**
 * The register renders itself. A hand-typed list beside `REFERENCES` is a
 * second source of truth, and the two drift.
 */
const GROUPS: { kind: ReferenceKind; title: string; lede: string }[] = [
  {
    kind: "report",
    title: "Reports and filings",
    lede: "Government, utility and regulator documents. Each one states the claim it is cited for.",
  },
  {
    kind: "dataset",
    title: "Datasets",
    lede: "The layers behind the maps, with the licence each one carries.",
  },
  {
    kind: "analogue",
    title: "Analogue events",
    lede: "For illustration only. They show what life was like elsewhere; they do not supply a restoration time for here.",
  },
];

const byKind = (kind: ReferenceKind) =>
  Object.values(REFERENCES).filter((r) => r.kind === kind);

export default function SourcesPage() {
  return (
    <ReadingShell>
      <PageHeader
        kicker="Every number on this site, and where it came from"
        title="Sources"
        standfirst={lorem(2, 290)}
      />

      {GROUPS.map((group) => {
        const entries = byKind(group.kind);
        if (entries.length === 0) return null;
        return (
          <Section key={group.kind} title={group.title} lede={group.lede}>
            <ul className="flex flex-col gap-px overflow-hidden rounded-xl border border-rule bg-rule">
              {entries.map((entry) => (
                <li key={entry.id} className="bg-paper-raised px-5 py-4">
                  <p className="font-display text-lg leading-snug">
                    {entry.title}
                  </p>
                  {entry.publisher || entry.year ? (
                    <p className="mt-1 text-sm text-ink-muted">
                      {[entry.publisher, entry.year].filter(Boolean).join(" · ")}
                    </p>
                  ) : null}
                  {entry.note ? (
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {entry.note}
                    </p>
                  ) : null}
                  {entry.placeholder ? (
                    <p className="mt-2 font-mono text-xs text-ink-faint">
                      Placeholder link — the real citation is not in yet
                    </p>
                  ) : (
                    <a
                      href={entry.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-block text-sm font-medium text-accent underline underline-offset-4"
                    >
                      Open the document ↗
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </Section>
        );
      })}

      <Section
        title="How sources appear in the text"
        lede="Claims in running text carry a numbered marker. Clicking it opens the document in place, so you can check a figure without leaving the page."
      >
        <Prose
          paragraphs={[
            <>
              Every entry above has a key. Prose cites the key, the marker takes
              its number from the order the page cites in, and the same entries
              are listed again at the foot of the page. A marker can also point
              at another page on this site, where the reasoning is set out
              rather than repeated. The{" "}
              <Link
                href="/getting-around/"
                className="text-accent underline underline-offset-2"
              >
                Getting around
              </Link>{" "}
              page is the worked example.
            </>,
          ]}
        />
      </Section>

      <Section
        title="Missing a document"
        lede="Every entry above is still a placeholder pointing at a stand-in link. If you know where a document lives, that is the most useful thing you can send."
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
        next={{ href: "/contribute/", label: "Contribute" }}
      />
    </ReadingShell>
  );
}
