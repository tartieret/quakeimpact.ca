"use client";

import Link from "next/link";
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
 * The presentation rule from the project brief: a coloured cell alone reads as
 * assertion. Every impact is band -> one sentence of mechanism -> source link.
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
      <Link
        href="/sources/"
        className="text-xs font-medium text-accent underline underline-offset-2"
      >
        Source: {impact.source}
      </Link>
    </div>
  );
}
