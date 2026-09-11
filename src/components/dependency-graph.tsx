import Link from "next/link";
import { Figure } from "@/components/prose-blocks";
import { SYSTEMS } from "@/content/site";
import { DependencyHubs } from "./figures/dependency-graph";

/**
 * The site's one original contribution, in the only form it can honestly take.
 *
 * The drawing is `DependencyHubs`, and what it does not do is the point: it
 * draws no lines between systems. A line asserts, and a reader looking at a
 * diagram cannot tell a link somebody published from a link that is merely
 * obvious. Twenty of the twenty six links here are the second kind. So the
 * figure counts the links instead of joining them up, and splits every count
 * into the links a document names and the links nobody has established, using
 * the site's existing solid and hatch grammar. `figures/dependency-graph.tsx`
 * carries the reasoning and the document behind each of the six.
 *
 * The list underneath is the same links written out, generated from the
 * `dependsOn` entries in `src/content/site.ts`. It is where every system name
 * becomes a link to its own page, because the drawing is an `aria-hidden`
 * `<svg>` and nothing inside one is reachable by keyboard.
 *
 * `alt` and the caption sit here rather than in the page module, which is the
 * one place this component departs from the figures convention. The figure and
 * the sentences that explain how to read it are one object, and a caption
 * written into a page module would have to be written again by the next page
 * that rendered the drawing.
 */
export function DependencyGraph() {
  return (
    <div className="flex flex-col gap-6">
      <Figure
        alt={
          "Roads, electricity and fuel are what the other systems wait on, and only 6 of the 26 links on this list have a published document behind them. " +
          "The rest are connections each system's own page names and no assessment has established, water on powered pumping among them."
        }
        caption={
          <>
            One mark is one system waiting on another. A solid mark is a link a
            published document names. A hatched mark is a link a system’s own
            page states and no published assessment has established, which is
            most of them. The list below is the same links written out, and it
            comes from the content model rather than from evidence.
          </>
        }
      >
        <DependencyHubs />
      </Figure>

      <ul className="grid gap-px overflow-hidden rounded-xl border border-rule bg-rule sm:grid-cols-2">
        {SYSTEMS.map((s) => (
          <li key={s.slug} className="bg-paper-raised px-5 py-4">
            <Link
              href={`/after/${s.slug}/`}
              className="font-medium hover:text-accent"
            >
              {s.name}
            </Link>
            <p className="mt-1 text-sm text-ink-muted">
              {s.dependsOn.length === 0 ? (
                "names nothing on this list that it waits on"
              ) : (
                <>
                  waits on{" "}
                  {s.dependsOn.map((dep, i) => {
                    const target = SYSTEMS.find((x) => x.slug === dep);
                    return (
                      <span key={dep}>
                        {i > 0 ? ", " : ""}
                        <Link
                          href={`/after/${dep}/`}
                          className="text-accent underline underline-offset-2"
                        >
                          {target?.name ?? dep}
                        </Link>
                      </span>
                    );
                  })}
                </>
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
