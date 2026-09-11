import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleShell } from "@/components/shell";
import {
  PageHeader,
  Section,
  Lever,
  NextPrev,
} from "@/components/page-parts";
import { Citations, ReferenceList } from "@/components/citation";
import { TimelineStrip } from "@/components/timeline";
import { ImpactCell } from "@/components/impact-cell";
import { SYSTEMS, SCENARIOS, PHASES } from "@/content/site";
import { pageForSystem } from "@/content/pages";
import { SystemDraftNotice } from "@/components/status";

/**
 * The thirteen system pages.
 *
 * The template holds no words of its own beyond the labels on the furniture it
 * draws. A system's evidence comes from `SYSTEMS` in `@/content/site`; its body
 * comes from a page module in `@/content/pages` where one exists. Where it does
 * not, the body is empty and the page says so in a marker beside the title and
 * two sentences above the evidence, rather than in six paragraphs about the
 * site. The state is read from the content model, not inferred from the words.
 *
 * There is no map slot. The overlay this template used to promise, critical
 * infrastructure drawn on the ground it sits on, rests on the Metro Vancouver
 * microzonation layers, which are not openly licensed and are linked rather
 * than redrawn (`docs/licensing.md`). A page with a graphic it can actually
 * draw puts it in its own module, with the licence beside it.
 */

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
  return { title: pageForSystem(slug)?.meta.title ?? system?.name ?? "Not found" };
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

  const page = pageForSystem(slug);
  const prev = SYSTEMS[index - 1];
  const next = SYSTEMS[index + 1];
  const phase = PHASES.find((p) => p.id === system.bitesAt);

  /**
   * The module's status wins where there is one, so a written page can be
   * marked a draft while its text is under revision. Otherwise the system's own
   * status stands, which is where the ten unwritten pages declare themselves.
   */
  const status = page?.meta.status ?? system.status;

  /**
   * An unwritten page still carries sources: the documents its two impact
   * cells rest on. They are the same register keys, so they list the same way.
   */
  const references = page
    ? page.meta.references
    : [
        ...new Set([
          system.impacts.cascadia.source,
          system.impacts.crustal.source,
        ]),
      ];

  return (
    <Citations ids={references}>
      <ArticleShell
        header={
          <PageHeader
            kicker={page?.meta.kicker ?? "Life afterwards"}
            title={page?.meta.title ?? system.name}
            status={status}
            standfirst={page?.meta.standfirst ?? system.hook}
          />
        }
      >
        {/* The notice sits above the evidence rather than below it, because it
            says what the evidence is worth. It is not a `<section>`: it takes
            no heading, no place in the contents rail and no place in the
            heading order, which is the point of making state structural. */}
        {page ? null : <SystemDraftNotice />}

        {/* At a glance: both scenarios, never one alone. The toggle does not
            hide either column, because the contrast is the teaching point. */}
        <Section
          title="At a glance"
          lede={`Bands measure duration, extent and dependency rather than severity of damage. Felt worst: ${phase?.label.toLowerCase()} after the event.`}
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

        {system.dependsOn.length > 0 ? (
          <Section title="What this waits on">
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
                      <span className="font-display text-lg">
                        {target.name}
                      </span>
                      <p className="mt-1 text-sm text-ink-muted">
                        {target.hook}
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Section>
        ) : null}

        {(page?.sections ?? []).map((section) => (
          <Section
            key={section.id ?? section.title}
            id={section.id}
            title={section.title}
            lede={section.lede}
          >
            {section.body}
          </Section>
        ))}

        {/* A written page brings its own lever. Where the body is not written,
            the system's own standing action stands in, because a page that
            states a consequence and offers nothing is the one failure the
            style guide singles out. */}
        {page?.lever ? (
          <Lever {...page.lever} />
        ) : system.lever ? (
          <Lever {...system.lever} />
        ) : null}

        <Section
          title="Sources on this page"
          lede={
            page
              ? "Numbered as cited above. Every marker in the text opens its entry in place; these are the same entries, with a link back to where each was used."
              : undefined
          }
        >
          <ReferenceList />
        </Section>

        <NextPrev
          prev={
            prev
              ? { href: `/after/${prev.slug}/`, label: prev.name }
              : { href: "/after/", label: "Life afterwards" }
          }
          next={
            next
              ? { href: `/after/${next.slug}/`, label: next.name }
              : { href: "/getting-around/", label: "Getting around" }
          }
        />
      </ArticleShell>
    </Citations>
  );
}
