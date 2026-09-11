import Link from "next/link";
import { ScenarioToggle } from "@/components/scenario-toggle";
import { ScenarioCards } from "@/components/scenario-cards";
import { SystemGrid } from "@/components/system-grid";
import { TimelineStrip } from "@/components/timeline";
import { DependencyGraphPlaceholder } from "@/components/dependency-graph";
import { MapPlaceholder } from "@/components/page-parts";
import { SITE } from "@/content/site";
import { lorem, loremParagraphs } from "@/content/lorem";

export default function HomePage() {
  return (
    <>
      {/* Hero ------------------------------------------------------- */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-gutter py-16 sm:py-24">
          <p className="text-xs font-semibold tracking-[0.12em] text-accent uppercase">
            Lower Mainland, British Columbia
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.04] tracking-tight text-balance sm:text-6xl">
            {SITE.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted text-pretty">
            {lorem(2, 4)}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/after/"
              className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90"
            >
              Start with life afterwards
            </Link>
            <Link
              href="/prepare/"
              className="inline-flex items-center justify-center rounded-full border border-rule-strong px-6 py-3 text-sm font-medium transition-colors hover:border-ink"
            >
              Skip to preparing
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-rule pt-6">
            <span className="text-sm text-ink-muted">Showing impacts for</span>
            <ScenarioToggle size="lg" />
          </div>
        </div>
      </section>

      {/* The misconception ------------------------------------------ */}
      <section className="border-b border-rule bg-paper-raised">
        <div className="mx-auto grid max-w-6xl gap-10 px-gutter py-16 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl tracking-tight">
              What people picture
            </h2>
            <div className="prose-body mt-4 text-ink-muted">
              {loremParagraphs(2, 6).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="border-t border-rule pt-10 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-16">
            <h2 className="font-display text-3xl tracking-tight text-accent">
              What actually happens
            </h2>
            <div className="prose-body mt-4">
              {loremParagraphs(2, 9).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Two scenarios ---------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-gutter py-16">
        <div className="flex flex-col gap-2">
          <h2 className="font-display text-3xl tracking-tight">
            Two scenarios
          </h2>
          <p className="max-w-2xl leading-relaxed text-ink-muted">
            {lorem(2, 12)}
          </p>
        </div>
        <div className="mt-8">
          <ScenarioCards />
        </div>
        <Link
          href="/scenarios/"
          className="mt-6 inline-block text-sm font-medium text-accent underline underline-offset-4"
        >
          How the two differ, in detail
        </Link>
      </section>

      {/* Ground ------------------------------------------------------ */}
      <section className="border-y border-rule bg-paper-raised">
        <div className="mx-auto grid max-w-6xl gap-10 px-gutter py-16 lg:grid-cols-[1fr_1.25fr] lg:items-center">
          <div>
            <h2 className="font-display text-3xl tracking-tight">
              What you are standing on decides your outcome
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              {lorem(3, 15)}
            </p>
            <Link
              href="/shaking/ground/"
              className="mt-6 inline-block text-sm font-medium text-accent underline underline-offset-4"
            >
              Ground conditions across the region
            </Link>
          </div>
          <MapPlaceholder
            title="Liquefaction susceptibility"
            caption="Base layer is the ground, not the municipality."
            dataset="TBD"
          />
        </div>
      </section>

      {/* Timeline + systems ------------------------------------------ */}
      <section className="mx-auto max-w-6xl px-gutter py-16">
        <h2 className="font-display text-3xl tracking-tight">
          Life afterwards
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">
          {lorem(2, 18)}
        </p>
        <div className="mt-8">
          <TimelineStrip />
        </div>
        <div className="mt-6">
          <SystemGrid tier={1} />
        </div>
        <Link
          href="/after/"
          className="mt-6 inline-block text-sm font-medium text-accent underline underline-offset-4"
        >
          All thirteen systems
        </Link>
      </section>

      {/* Dependency graph -------------------------------------------- */}
      <section className="border-t border-rule bg-paper-raised">
        <div className="mx-auto max-w-6xl px-gutter py-16">
          <h2 className="font-display text-3xl tracking-tight">
            Nothing fails on its own
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">
            {lorem(2, 21)}
          </p>
          <div className="mt-8">
            <DependencyGraphPlaceholder />
          </div>
        </div>
      </section>

      {/* Prepare ------------------------------------------------------ */}
      <section className="mx-auto max-w-6xl px-gutter py-16">
        <div className="rounded-2xl border border-accent/30 bg-accent-soft p-8 sm:p-12">
          <h2 className="font-display text-3xl tracking-tight">
            There are specific things you can do
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed">{lorem(2, 24)}</p>
          <Link
            href="/prepare/"
            className="mt-7 inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper"
          >
            What to do about it
          </Link>
        </div>
      </section>
    </>
  );
}
