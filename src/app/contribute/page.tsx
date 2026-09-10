import type { Metadata } from "next";
import Link from "next/link";
import { ReadingShell } from "@/components/shell";
import {
  PageHeader,
  Section,
  Prose,
  Callout,
  NextPrev,
} from "@/components/page-parts";
import { lorem, loremLine, loremParagraphs } from "@/content/lorem";

export const metadata: Metadata = { title: "Contribute" };

const WANTED = [
  {
    name: "A published document",
    detail:
      "An assessment, a capital plan, a hazard study — anything with an author and a date. A stable URL is worth more than a summary of it.",
  },
  {
    name: "A correction with a source",
    detail:
      "If a number here is wrong, the document that shows it is wrong is the whole contribution.",
  },
  {
    name: "A pointer",
    detail:
      "You know the report exists but not where it lives. That still saves days.",
  },
  {
    name: "A read from the field",
    detail:
      "Emergency management, geotechnical, utility or logistics work in the region. Tell us what reads as wrong to someone who does this for a living.",
  },
];

const NOT_WANTED = [
  "Unsourced assertion, however confident.",
  "New modelling. This site compiles published work; it does not produce estimates of its own.",
  "Analogue events used to generate numbers. Christchurch says what life was like, not what Vancouver's restoration times are.",
  "Anything that makes a claim stronger than the document behind it.",
];

export default function ContributePage() {
  return (
    <ReadingShell>
      <PageHeader
        kicker="Sources, corrections and local knowledge"
        title="Contribute"
        standfirst={lorem(2, 310)}
      />

      <Section title="What this needs most" lede={lorem(1, 311)}>
        <ul className="flex flex-col gap-px overflow-hidden rounded-xl border border-rule bg-rule">
          {WANTED.map((w) => (
            <li key={w.name} className="bg-paper-raised px-5 py-4">
              <p className="font-medium">{w.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                {w.detail}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="How to send it">
        <Callout label="One document, one line of context">
          <p className="text-lg leading-relaxed">
            What the document is, and which claim on the site it supports or
            contradicts. A contradicted claim is a good outcome — it is usually
            more interesting than the claim was.
          </p>
        </Callout>
        <div className="mt-8 flex flex-col gap-px overflow-hidden rounded-xl border border-rule bg-rule">
          <div className="bg-paper-raised px-5 py-4">
            <p className="font-medium">By email</p>
            <p className="mt-1 font-mono text-sm text-ink-faint">
              Address to be published before launch
            </p>
          </div>
          <div className="bg-paper-raised px-5 py-4">
            <p className="font-medium">As a repository issue</p>
            <p className="mt-1 font-mono text-sm text-ink-faint">
              Public issue tracker — link to be published before launch
            </p>
          </div>
        </div>
      </Section>

      <Section title="What happens to it" lede={lorem(1, 314)}>
        <Prose paragraphs={loremParagraphs(2, 315)} />
        <p className="mt-6 text-sm text-ink-muted">
          Anything held as &ldquo;I believe X is the case&rdquo; becomes a
          verification item first and reaches a page only once a document
          confirms or contradicts it. The{" "}
          <Link
            href="/method/"
            className="text-accent underline underline-offset-2"
          >
            method page
          </Link>{" "}
          sets out that discipline, and the{" "}
          <Link
            href="/sources/"
            className="text-accent underline underline-offset-2"
          >
            source register
          </Link>{" "}
          is where accepted documents land.
        </p>
      </Section>

      <Section title="What cannot be used">
        <ul className="flex flex-col gap-3">
          {NOT_WANTED.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed">
              <span
                aria-hidden
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-faint"
              />
              <span className="text-ink-muted">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Review before launch" lede={loremLine(318)}>
        <Prose paragraphs={loremParagraphs(2, 319)} />
      </Section>

      <NextPrev
        prev={{ href: "/sources/", label: "Sources" }}
        next={{ href: "/about/", label: "About" }}
      />
    </ReadingShell>
  );
}
