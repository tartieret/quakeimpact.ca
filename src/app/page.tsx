import { ScenarioToggle } from "@/components/scenario-toggle";
import { Lever, slugify } from "@/components/page-parts";
import { Citations, ReferenceList } from "@/components/citation";
import { home, HOME_CONTROL_LABEL } from "@/content/pages/home";

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
        <div className="mx-auto max-w-6xl px-gutter py-16 sm:py-24">
          {home.meta.kicker ? (
            <p className="text-xs font-semibold tracking-[0.12em] text-accent uppercase">
              {home.meta.kicker}
            </p>
          ) : null}
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.04] tracking-tight text-balance sm:text-6xl">
            {home.meta.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted text-pretty">
            {home.meta.standfirst}
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-rule pt-6">
            <span className="text-sm text-ink-muted">
              {HOME_CONTROL_LABEL}
            </span>
            <ScenarioToggle size="lg" />
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
          <div className="mx-auto max-w-6xl px-gutter py-16">
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
            Sources on this page
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">
            Numbered as cited above. Every marker in the text opens its entry in
            place; these are the same entries, with a link back to where each
            was used.
          </p>
          <div className="mt-6 max-w-3xl">
            <ReferenceList />
          </div>
        </div>
      </section>
    </Citations>
  );
}
