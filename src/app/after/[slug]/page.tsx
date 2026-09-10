import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleShell } from "@/components/shell";
import {
  PageHeader,
  Section,
  Prose,
  Lever,
  VerificationNote,
  MapPlaceholder,
  NextPrev,
} from "@/components/page-parts";
import { TimelineStrip } from "@/components/timeline";
import { ImpactCell } from "@/components/band";
import { SYSTEMS, SCENARIOS, PHASES } from "@/content/site";
import { lorem, loremParagraphs, loremLine } from "@/content/lorem";
import Link from "next/link";

export function generateStaticParams() {
  return SYSTEMS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const system = SYSTEMS.find((s) => s.slug === slug);
  return { title: system?.name ?? "Not found" };
}

export default async function SystemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = SYSTEMS.findIndex((s) => s.slug === slug);
  const system = SYSTEMS[index];
  if (!system) notFound();

  const prev = SYSTEMS[index - 1];
  const next = SYSTEMS[index + 1];
  const phase = PHASES.find((p) => p.id === system.bitesAt);

  return (
    <ArticleShell
      header={
        <PageHeader
          kicker="Part 2 — Life afterwards"
          title={system.name}
          standfirst={system.hook}
        />
      }
    >
      {/* At a glance: both scenarios, never one alone. -------------- */}
      <Section
        title="At a glance"
        lede={`Bands are duration, extent and dependency — not severity of damage. Felt worst: ${phase?.label.toLowerCase()} after the event.`}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <ImpactCell
            impact={system.impacts.cascadia}
            label={SCENARIOS.cascadia.name}
          />
          <ImpactCell
            impact={system.impacts.crustal}
            label={SCENARIOS.crustal.name}
          />
        </div>
        <p className="mt-4 text-sm text-ink-muted">
          <Link
            href="/method/"
            className="text-accent underline underline-offset-2"
          >
            How the bands are defined
          </Link>
        </p>
      </Section>

      <Section title="When it bites">
        <TimelineStrip active={system.bitesAt} compact />
      </Section>

      <Section title="What people underestimate">
        <Prose paragraphs={loremParagraphs(3, index + 100)} />
      </Section>

      <Section title="The mechanism">
        <Prose paragraphs={loremParagraphs(3, index + 110)} />
      </Section>

      {system.dependsOn.length > 0 ? (
        <Section title="What this waits on" lede={lorem(1, index + 118)}>
          <ul className="grid gap-px overflow-hidden rounded-xl border border-rule bg-rule sm:grid-cols-2">
            {system.dependsOn.map((dep) => {
              const target = SYSTEMS.find((s) => s.slug === dep);
              if (!target) return null;
              return (
                <li key={dep}>
                  <Link
                    href={`/after/${dep}/`}
                    className="block bg-paper-raised px-5 py-4 hover:bg-accent-soft"
                  >
                    <span className="font-display text-lg">{target.name}</span>
                    <p className="mt-1 text-sm text-ink-muted">{target.hook}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Section>
      ) : null}

      <Section title="Where it is worst">
        <MapPlaceholder
          title={`${system.name} — assets on poor ground`}
          caption={loremLine(index + 120)}
          dataset="TBD"
        />
      </Section>

      <Section
        title="What the analogues show"
        lede="Christchurch, Kobe and Tōhoku illustrate. They never generate numbers."
      >
        <Prose paragraphs={loremParagraphs(2, index + 125)} />
      </Section>

      <Section title="Still to verify">
        <VerificationNote>{loremLine(index + 130)}</VerificationNote>
      </Section>

      <Lever
        title={`${system.name}: what you can do now`}
        items={[
          loremLine(index + 135),
          loremLine(index + 140),
          loremLine(index + 145),
        ]}
      />

      <NextPrev
        prev={
          prev
            ? { href: `/after/${prev.slug}/`, label: prev.name }
            : { href: "/after/", label: "Life afterwards" }
        }
        next={
          next
            ? { href: `/after/${next.slug}/`, label: next.name }
            : { href: "/leaving/", label: "Getting out" }
        }
      />
    </ArticleShell>
  );
}
