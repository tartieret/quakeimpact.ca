import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/shell";
import {
  PageHeader,
  Section,
  Prose,
  Callout,
  VerificationNote,
  NextPrev,
} from "@/components/page-parts";
import { SYSTEMS } from "@/content/site";
import { lorem, loremParagraphs, loremLine } from "@/content/lorem";

export const metadata: Metadata = { title: "Preparing" };

const HORIZONS = [
  { label: "This week", detail: "Nothing to buy" },
  { label: "This month", detail: "One shopping trip" },
  { label: "This year", detail: "Household and building" },
];

export default function PreparePage() {
  return (
    <ArticleShell
      header={
        <PageHeader
          kicker="Part 3"
          title="Preparing"
          standfirst={lorem(2, 200)}
        />
      }
    >
      <Section title="How long you are actually being asked to last">
        <Callout label="Verify before publishing">
          <p className="max-w-2xl text-lg leading-relaxed">
            The figure most people remember may no longer be the current advice.
            If the guidance has moved, the gap between memory and recommendation
            is the strongest hook on the site.
          </p>
        </Callout>
        <div className="mt-6">
          <VerificationNote>{loremLine(201)}</VerificationNote>
        </div>
      </Section>

      <Section title="By horizon" lede={lorem(1, 202)}>
        <div className="grid gap-px overflow-hidden rounded-xl border border-rule bg-rule lg:grid-cols-3">
          {HORIZONS.map((h, i) => (
            <div key={h.label} className="bg-paper-raised p-6">
              <h3 className="font-display text-xl tracking-tight">{h.label}</h3>
              <p className="mt-1 text-xs tracking-wide text-ink-faint uppercase">
                {h.detail}
              </p>
              <ul className="mt-4 space-y-3">
                {[0, 1, 2, 3].map((j) => (
                  <li key={j} className="flex gap-3 text-sm leading-relaxed">
                    <span
                      aria-hidden
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                    />
                    <span>{loremLine(i * 10 + j + 203)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="By system"
        lede="Every system page ends with its own lever. This is all of them in one place."
      >
        <ul className="grid gap-px overflow-hidden rounded-xl border border-rule bg-rule sm:grid-cols-2">
          {SYSTEMS.map((s, i) => (
            <li key={s.slug} className="bg-paper-raised p-5">
              <Link
                href={`/after/${s.slug}/`}
                className="font-display text-lg hover:text-accent"
              >
                {s.name}
              </Link>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {loremLine(i + 240)}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="What preparedness cannot fix">
        <Prose paragraphs={loremParagraphs(2, 260)} />
      </Section>

      <NextPrev
        prev={{ href: "/dependencies/", label: "Dependency graph" }}
        next={{ href: "/method/", label: "Method & bands" }}
      />
    </ArticleShell>
  );
}
