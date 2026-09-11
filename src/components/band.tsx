/**
 * Bands, drawn.
 *
 * Presentational and server-rendered: nothing here holds state, and nothing
 * here reads the source register. The impact cell, which does read it, is in
 * `impact-cell.tsx`, so that a client component wanting a band pill does not
 * drag 325 reference entries into the browser with it.
 */

import { BANDS } from "@/content/site";
import type { Band as BandId } from "@/content/types";

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
