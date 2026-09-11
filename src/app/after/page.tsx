import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/shell";
import { PageHeader, Section, Prose, NextPrev } from "@/components/page-parts";
import { TimelineStrip } from "@/components/timeline";
import { SystemGrid, SystemMatrix } from "@/components/system-grid";
import { ScenarioToggle } from "@/components/scenario-toggle";
import { lorem, loremParagraphs } from "@/content/lorem";

export const metadata: Metadata = { title: "Life afterwards" };

export default function AfterIndexPage() {
  return (
    <Shell>
      <PageHeader
        kicker="Part 2"
        title="Life afterwards"
        standfirst={lorem(2, 90)}
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm text-ink-muted">Bands shown for</span>
          <ScenarioToggle size="lg" />
        </div>
      </PageHeader>

      <Section title="Hours, days, weeks, months" lede={lorem(1, 91)}>
        <TimelineStrip />
      </Section>

      <Section
        title="Where the evidence is strongest"
        lede="Water, electricity and transportation. These three have the most published work behind them, so they are the most specific pages on the site."
      >
        <SystemGrid tier={1} />
      </Section>

      <Section title="The rest of the picture">
        <div className="flex flex-col gap-4">
          <SystemGrid tier={2} />
          <SystemGrid tier={3} />
        </div>
      </Section>

      <Section title="Everything at once" lede={lorem(1, 93)}>
        <SystemMatrix />
      </Section>

      <Section title="Nothing here fails on its own">
        <Prose paragraphs={loremParagraphs(2, 95)} />
        <Link
          href="/dependencies/"
          className="mt-5 inline-block text-sm font-medium text-accent underline underline-offset-4"
        >
          The dependency graph
        </Link>
      </Section>

      <NextPrev
        prev={{ href: "/shaking/", label: "The shaking" }}
        next={{ href: "/getting-around/", label: "Getting around" }}
      />
    </Shell>
  );
}
