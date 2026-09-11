"use client";

import Link from "next/link";
import { REFERENCES } from "@/content/references";
import { BANDS } from "@/content/site";
import type { Band as BandId, Impact } from "@/content/types";

const FILL: Record<BandId, number> = { low: 1, medium: 2, high: 3, unknown: 0 };

const COLOR: Record<BandId, string> = {
  low: "var(--color-band-low)",
  medium: "var(--color-band-medium)",
  high: "var(--color-band-high)",
  unknown: "var(--color-band-unknown)",
};

/**
 * Three segments filled 1/2/3 so the ordinal survives without colour —
 * colour-blind readers, printouts, and greyscale screenshots all still work.
 */
export function BandMeter({ band }: { band: BandId }) {
  const filled = FILL[band];
  return (
    <span className="inline-flex items-center gap-0.5" aria-hidden="true">
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          className={`h-3 w-1.5 rounded-[1px] ${
            band === "unknown" ? "hatch" : ""
          }`}
          style={{
            background: i <= filled ? COLOR[band] : "var(--color-rule-strong)",
          }}
        />
      ))}
    </span>
  );
}

export function BandPill({ band }: { band: BandId }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase">
      <BandMeter band={band} />
      <span style={{ color: COLOR[band] }}>{BANDS[band].label}</span>
    </span>
  );
}

/**
 * The source line under a band. `Impact.source` is a key into the register, so
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
 * The presentation rule from the project brief: a coloured cell alone reads as
 * assertion. Every impact is band -> one sentence of mechanism -> source.
 *
 * Where the assessment behind the mechanism models the other earthquake, the
 * cell says so in the reader's terms rather than letting a figure measured on
 * one scenario sit unlabelled under the other.
 */
export function ImpactCell({
  impact,
  label,
}: {
  impact: Impact;
  label?: string;
}) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-rule bg-paper-raised p-4">
      {label ? (
        <span className="text-[0.6875rem] font-semibold tracking-[0.08em] text-ink-faint uppercase">
          {label}
        </span>
      ) : null}
      <BandPill band={impact.band} />
      <p className="text-sm leading-relaxed text-ink-muted">
        {impact.mechanism}
      </p>
      {impact.evidence ? (
        <p className="border-l-2 border-rule-strong pl-3 text-sm leading-relaxed text-ink-muted">
          {impact.evidence}
        </p>
      ) : null}
      <SourceLine id={impact.source} />
    </div>
  );
}
