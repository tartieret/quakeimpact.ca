import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/shell";
import {
  PageHeader,
  Section,
  MapPlaceholder,
  NextPrev,
} from "@/components/page-parts";
import { SHAKING_PAGES } from "@/content/site";
import { lorem } from "@/content/lorem";

export const metadata: Metadata = { title: "The shaking" };

export default function ShakingIndexPage() {
  return (
    <Shell>
      <PageHeader
        kicker="Part 1"
        title="The shaking"
        standfirst={lorem(2, 40)}
      />

      <Section
        title="Ground conditions decide everything else"
        lede={lorem(1, 41)}
      >
        <MapPlaceholder
          title="Ground conditions — Metro Vancouver"
          caption="Bedrock on the downtown peninsula and North Shore behaves nothing like the Fraser delta."
          dataset="TBD"
          ratio="21 / 9"
        />
      </Section>

      <Section title="In this part">
        <ul className="grid gap-px overflow-hidden rounded-xl border border-rule bg-rule sm:grid-cols-2">
          {SHAKING_PAGES.map((page, i) => (
            <li key={page.slug}>
              <Link
                href={`/shaking/${page.slug}/`}
                className="group flex h-full flex-col gap-2 bg-paper-raised p-6 transition-colors hover:bg-accent-soft"
              >
                <span className="font-mono text-xs text-ink-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl tracking-tight group-hover:text-accent">
                  {page.name}
                </h3>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {page.hook}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <NextPrev
        prev={{ href: "/scenarios/", label: "Two scenarios" }}
        next={{ href: "/after/", label: "Life afterwards" }}
      />
    </Shell>
  );
}
