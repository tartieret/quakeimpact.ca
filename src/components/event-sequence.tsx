import type { ReactNode } from "react";

/**
 * A run of dated events, told in the order they happened.
 *
 * `PhaseNarrative` is the same shape for the four phases of the aftermath,
 * where the labels come from `PHASES` and cannot be authored. This one takes
 * its labels from the page, because the events it carries are real and dated:
 * the Canterbury earthquakes on `/shaking/`, and anything else where a
 * sequence is the finding rather than an illustration of one.
 *
 * Presentational, and it holds no words of its own. The labels and the
 * sentences arrive from the page module, already rendered on the server with
 * their citation markers in them.
 *
 * An ordered list, because the order is the point and a reader on a screen
 * reader needs it stated rather than inferred from position. `when` is a
 * string rather than a `<time>` element: "The five months after" is a stretch
 * of time and not a date, and a machine-readable date on some items and not
 * others would be worse than none.
 */
export function EventSequence({
  items,
}: {
  items: { when: string; detail?: string; body: ReactNode }[];
}) {
  return (
    <ol className="flex flex-col gap-px overflow-hidden rounded-xl border border-rule bg-rule">
      {items.map((item) => (
        <li
          key={item.when}
          className="grid gap-2 bg-paper-raised px-5 py-6 sm:grid-cols-[11rem_1fr] sm:gap-6 sm:px-6"
        >
          <p className="flex items-baseline gap-2 sm:flex-col sm:gap-0.5">
            <span className="font-display text-lg leading-tight text-accent">
              {item.when}
            </span>
            {item.detail ? (
              <span className="text-xs text-ink-faint">{item.detail}</span>
            ) : null}
          </p>
          <div className="prose-body max-w-2xl text-sm leading-relaxed text-ink-muted">
            {item.body}
          </div>
        </li>
      ))}
    </ol>
  );
}
