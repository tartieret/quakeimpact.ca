import Link from "next/link";
import { SYSTEMS } from "@/content/site";

/**
 * Placeholder for the site's one original contribution. The real version is a
 * drawn graph; this lists the same edges so the data model can be checked now.
 */
export function DependencyGraphPlaceholder() {
  return (
    <div className="flex flex-col gap-6">
      <div
        style={{ aspectRatio: "16 / 10", maxHeight: "30rem" }}
        className="hatch grid w-full place-items-center rounded-xl border border-rule-strong"
      >
        <div className="max-w-sm rounded-md bg-paper-raised px-6 py-5 text-center">
          <p className="font-display text-xl">Dependency graph</p>
          <p className="mt-2 text-sm text-ink-muted">
            Drawn graph slot. Edges below are live from the content model.
          </p>
        </div>
      </div>

      <ul className="grid gap-px overflow-hidden rounded-xl border border-rule bg-rule sm:grid-cols-2">
        {SYSTEMS.filter((s) => s.dependsOn.length > 0).map((s) => (
          <li key={s.slug} className="bg-paper-raised px-5 py-4">
            <Link
              href={`/after/${s.slug}/`}
              className="font-medium hover:text-accent"
            >
              {s.name}
            </Link>
            <p className="mt-1 text-sm text-ink-muted">
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
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
