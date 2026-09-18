import type { Metadata } from "next";
import Link from "next/link";
import { Lever, slugify } from "@/components/page-parts";
import {
  Citations,
  ReferenceList,
  SOURCES_LEDE,
  SOURCES_TITLE,
} from "@/components/citation";
import { home, homeHero } from "@/content/pages/home";
import { pageMetadata } from "@/content/metadata";
import { SITE } from "@/content/site";

/**
 * The one page whose title is not the heading on it. The `<h1>` is a sentence
 * about the world and reads as one; a search result for the site itself has to
 * open on the name somebody typed, so the title is the name and the tagline
 * and takes no site suffix after it.
 */
export const metadata: Metadata = pageMetadata({
  route: "/",
  title: { absolute: `${SITE.name}: ${SITE.tagline}` },
  description: home.meta.description,
  type: "website",
});

/**
 * The landing page.
 *
 * It is not an article, so it does not use `ArticleShell`: the sections run
 * full-bleed across the page, banded light and raised, rather than sitting in
 * a reading measure beside a contents rail. What it shares with every other
 * page is that it holds no words of its own. The headings, the prose and the
 * closing "Start here" block all come from the page module in
 * `@/content/pages/home`, which is where `docs/copy/home.md` landed, and the
 * components the module puts in its section bodies are fed by the content
 * model.
 *
 * Each section's `<h2>` carries the id slugified from its title, so the
 * heading order runs h1 then h2 with nothing skipped and every section can be
 * linked to.
 */
export default function HomePage() {
  return (
    <Citations ids={home.meta.references}>
      {/* Hero ------------------------------------------------------- */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-gutter py-10 sm:py-14">
          {home.meta.kicker ? (
            <p className="text-xs font-semibold tracking-[0.12em] text-accent uppercase">
              {home.meta.kicker}
            </p>
          ) : null}
          <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
            {homeHero.titleLines.map((line, i) => (
              <span key={line} className="sm:block">
                {i > 0 ? " " : ""}{line}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted text-pretty sm:text-xl">
            {home.meta.standfirst}
          </p>
          <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
            <Link
              href={homeHero.primary.href}
              className="inline-flex min-h-12 items-center rounded-sm bg-accent px-5 py-3 text-sm font-semibold text-paper hover:underline underline-offset-4"
            >
              {homeHero.primary.label}
            </Link>
            <a
              href={homeHero.secondary.href}
              className="inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-accent underline underline-offset-4"
            >
              {homeHero.secondary.label}<span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* Body ------------------------------------------------------- */}
      {home.sections.map((section, i) => (
        <section
          key={section.id ?? section.title}
          id={section.id ?? slugify(section.title)}
          className={`scroll-mt-28 border-b border-rule ${
            i % 2 === 1 ? "bg-paper-raised" : ""
          }`}
        >
          <div className={`mx-auto max-w-6xl px-gutter ${i === 0 ? "pt-8 pb-12 sm:pt-10 sm:pb-16" : "py-16"}`}>
            <h2 className="max-w-3xl font-display text-3xl tracking-tight text-balance">
              {section.title}
            </h2>
            {section.lede ? (
              <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">
                {section.lede}
              </p>
            ) : null}
            <div className="mt-6">{section.body}</div>
          </div>
        </section>
      ))}

      {/* Start here -------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-gutter py-16">
        {home.lever ? <Lever {...home.lever} /> : null}
      </section>

      {/* Sources ----------------------------------------------------- */}
      <section
        id="sources-on-this-page"
        className="scroll-mt-28 border-t border-rule bg-paper-raised"
      >
        <div className="mx-auto max-w-6xl px-gutter py-16">
          <h2 className="font-display text-3xl tracking-tight">
            {SOURCES_TITLE}
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">
            {SOURCES_LEDE}
          </p>
          <div className="mt-6 max-w-3xl">
            <ReferenceList />
          </div>
        </div>
      </section>
    </Citations>
  );
}
