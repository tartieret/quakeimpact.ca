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
      <Section title="How long you are being asked to last">
        <Callout label="Emergency Management BC, in its own words">
          <blockquote className="max-w-2xl text-lg leading-relaxed">
            During a disaster, local and provincial government resources will
            be overwhelmed. In such an event, one&rsquo;s family and neighbours
            are likely to be the only available first responders. People living
            in an earthquake zone should aim to be self-sufficient for up to two
            weeks.
          </blockquote>
          <p className="mt-3 text-sm text-ink-muted">
            Provincial Earthquake Immediate Response Strategy, page 42.
          </p>
        </Callout>

        <div className="mt-8">
          <Callout label="And the province does not yet say it consistently">
            <p className="max-w-2xl leading-relaxed">
              PreparedBC&rsquo;s earthquake and tsunami guide says at least two
              weeks, three times over. Its general emergency-kit page says a
              minimum of three days to one week. Its earthquake hazard page says
              three days. The figure most people remember — 72 hours — is not
              the one the guide now gives, and the gap is inside British
              Columbia&rsquo;s own advice rather than across a border.
            </p>
          </Callout>
        </div>

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
