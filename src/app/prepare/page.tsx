import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/shell";
import {
  PageHeader,
  Section,
  Lever,
  NextPrev,
} from "@/components/page-parts";
import { Citations, ReferenceList } from "@/components/citation";
import { SYSTEMS } from "@/content/site";
import { prepare } from "@/content/pages/prepare";

/**
 * Preparing.
 *
 * The template holds no words of its own beyond the labels on the furniture it
 * draws. Every sentence a reader sees comes from the page module in
 * `@/content/pages/prepare`, and the one list the module does not write is the
 * system grid below, whose lines are the `hook` each system already carries in
 * `SYSTEMS`. Nothing here invents per-system advice.
 */
export const metadata: Metadata = { title: prepare.meta.title };

export default function PreparePage() {
  return (
    <Citations ids={prepare.meta.references}>
      <ArticleShell
        header={
          <PageHeader
            kicker={prepare.meta.kicker}
            title={prepare.meta.title}
            standfirst={prepare.meta.standfirst}
          />
        }
      >
        {prepare.sections.map((section) => (
          <Section
            key={section.id ?? section.title}
            id={section.id}
            title={section.title}
            lede={section.lede}
          >
            {section.body}
          </Section>
        ))}

        {/* Navigation, not advice. Each line is the system's own hook from
            SYSTEMS, so the grid cannot drift from the page it points at. */}
        <Section
          title="By system"
          lede="What each system does when it fails."
        >
          <ul className="grid gap-px overflow-hidden rounded-xl border border-rule bg-rule sm:grid-cols-2">
            {SYSTEMS.map((system) => (
              <li key={system.slug}>
                <Link
                  href={`/after/${system.slug}/`}
                  className="block h-full bg-paper-raised p-5 hover:bg-accent-soft"
                >
                  <span className="font-display text-lg">{system.name}</span>
                  <span className="mt-2 block text-sm leading-relaxed text-ink-muted">
                    {system.hook}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        {prepare.lever ? <Lever {...prepare.lever} /> : null}

        <Section
          title="Sources on this page"
          lede="Numbered as cited above. Every marker in the text opens its entry in place; these are the same entries, with a link back to where each was used."
        >
          <ReferenceList />
        </Section>

        <NextPrev
          prev={{ href: "/dependencies/", label: "Dependency graph" }}
          next={{ href: "/method/", label: "Method & bands" }}
        />
      </ArticleShell>
    </Citations>
  );
}
