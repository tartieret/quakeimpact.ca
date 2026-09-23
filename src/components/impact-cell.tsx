import Link from "next/link";
import { REFERENCES } from "@/content/references";
import type { Impact } from "@/content/types";

/**
 * The impact cell, and the source line under it.
 *
 * It reads the source register, so it is a Server Component and stays out of
 * the client graph: the register is 325 entries and a page needs the few its
 * cells name.
 */

/**
 * The source line under an impact. `Impact.source` is a key into the register, so
 * the cell names the document rather than pointing at the source list and
 * leaving the reader to find it. Presentation follows `citation.tsx`: title,
 * publisher, date, and a link that opens the document itself.
 *
 * A key that does not resolve is a content bug, so it is shown the way `Cite`
 * shows one, never swallowed.
 */
function SourceLine({ id }: { id: string }) {
  const reference = REFERENCES[id];

  if (!reference) {
    return (
      <p className="text-xs leading-relaxed text-band-high">
        <span className="font-mono">[?]</span> Unregistered source key:{" "}
        <span className="font-mono">{id}</span>
      </p>
    );
  }

  const meta = [reference.publisher, reference.date ?? reference.year]
    .filter(Boolean)
    .join(" · ");
  const linkClass = "font-medium text-accent underline underline-offset-2";

  return (
    <p className="text-xs leading-relaxed text-ink-muted">
      <span className="text-ink-faint">Source: </span>
      {reference.kind === "page" ? (
        <Link href={reference.href} className={linkClass}>
          {reference.title}
        </Link>
      ) : (
        <a
          href={reference.href}
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          {reference.title} ↗
        </a>
      )}
      {meta ? <span> · {meta}</span> : null}
      {reference.placeholder ? (
        <span className="mt-1 block font-mono text-ink-faint">
          Placeholder link: the real citation is not in yet
        </span>
      ) : null}
    </p>
  );
}

/**
 * One sentence of mechanism, the duration where a document states one, and
 * the source under both. A duration from a different document than the
 * mechanism gets its own source line, so each statement reaches its document.
 *
 * `label` names the earthquake where a system reads differently in each; a
 * shared impact stands for both and takes none.
 */
export function ImpactCell({
  impact,
  label,
}: {
  impact: Impact;
  label?: string;
}) {
  const sources = [
    ...new Set([impact.source, impact.disruption?.source].filter(Boolean)),
  ] as string[];

  return (
    <div className="flex flex-col gap-2 rounded-lg border border-rule bg-paper-raised p-4">
      {label ? (
        <span className="text-[0.6875rem] font-semibold tracking-[0.08em] text-ink-faint uppercase">
          {label}
        </span>
      ) : null}
      <p className="text-sm leading-relaxed text-ink-muted">
        {impact.mechanism}
      </p>
      {impact.evidence ? (
        <p className="border-l-2 border-rule-strong pl-3 text-sm leading-relaxed text-ink-muted">
          {impact.evidence}
        </p>
      ) : null}
      {impact.disruption ? (
        <p className="text-sm leading-relaxed">
          <span className="text-ink-faint">Expected disruption: </span>
          {impact.disruption.text}
        </p>
      ) : null}
      {sources.map((id) => (
        <SourceLine key={id} id={id} />
      ))}
    </div>
  );
}
