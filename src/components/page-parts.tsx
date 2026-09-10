import Link from "next/link";
import type { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/* Page furniture                                                      */
/* ------------------------------------------------------------------ */

export function PageHeader({
  kicker,
  title,
  standfirst,
  children,
}: {
  kicker?: string;
  title: string;
  standfirst?: string;
  children?: ReactNode;
}) {
  return (
    <header>
      {kicker ? (
        <p className="mb-3 text-xs font-semibold tracking-[0.12em] text-accent uppercase">
          {kicker}
        </p>
      ) : null}
      <h1 className="font-display text-4xl leading-[1.08] tracking-tight text-balance sm:text-5xl">
        {title}
      </h1>
      {standfirst ? (
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted text-pretty">
          {standfirst}
        </p>
      ) : null}
      {children ? <div className="mt-6">{children}</div> : null}
    </header>
  );
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function Section({
  id,
  title,
  lede,
  children,
}: {
  id?: string;
  title: string;
  lede?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id ?? slugify(title)}
      className="scroll-mt-28 border-t border-rule pt-10"
    >
      <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
        {title}
      </h2>
      {lede ? (
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">{lede}</p>
      ) : null}
      <div className="mt-6">{children}</div>
    </section>
  );
}

export function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="prose-body max-w-2xl">
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Content blocks                                                      */
/* ------------------------------------------------------------------ */

/**
 * "No doom without a lever." Every system page ends with one of these.
 */
export function Lever({
  title,
  items,
  href = "/prepare/",
}: {
  title: string;
  items: string[];
  href?: string;
}) {
  return (
    <aside className="rounded-xl border border-accent/30 bg-accent-soft p-6">
      <p className="text-xs font-semibold tracking-[0.12em] text-accent uppercase">
        What you can do
      </p>
      <h3 className="mt-2 font-display text-xl">{title}</h3>
      <ul className="mt-4 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed">
            <span
              aria-hidden
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className="mt-5 inline-block text-sm font-medium text-accent underline underline-offset-4"
      >
        The full preparedness plan
      </Link>
    </aside>
  );
}

/**
 * An open question held in public. Assumption discipline is a stated principle
 * of the project, so the site shows its gaps rather than papering over them.
 */
export function VerificationNote({ children }: { children: ReactNode }) {
  return (
    <aside className="rounded-lg border border-dashed border-rule-strong bg-paper-raised p-5">
      <p className="text-xs font-semibold tracking-[0.12em] text-ink-faint uppercase">
        Not yet verified
      </p>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{children}</p>
    </aside>
  );
}

export function Callout({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <aside className="border-l-2 border-accent pl-5">
      <p className="text-xs font-semibold tracking-[0.12em] text-accent uppercase">
        {label}
      </p>
      <div className="mt-2 leading-relaxed text-pretty">{children}</div>
    </aside>
  );
}

/* ------------------------------------------------------------------ */
/* Placeholders for content that is not built yet                      */
/* ------------------------------------------------------------------ */

export function MapPlaceholder({
  title,
  caption,
  dataset,
  ratio = "16 / 9",
}: {
  title: string;
  caption: string;
  dataset: string;
  ratio?: string;
}) {
  return (
    <figure>
      <div
        style={{ aspectRatio: ratio, maxHeight: "26rem" }}
        className="hatch grid w-full max-w-full place-items-center rounded-lg border border-rule-strong"
      >
        <div className="rounded-md bg-paper-raised px-5 py-3 text-center">
          <p className="font-display text-lg">{title}</p>
          <p className="mt-1 text-xs text-ink-faint">
            Map slot — not yet built
          </p>
        </div>
      </div>
      <figcaption className="mt-3 max-w-2xl text-sm text-ink-muted">
        {caption}{" "}
        <span className="text-ink-faint">
          Dataset: {dataset}. Licence to be confirmed.
        </span>
      </figcaption>
    </figure>
  );
}

export function NextPrev({
  prev,
  next,
}: {
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
}) {
  return (
    <nav className="grid gap-px overflow-hidden rounded-lg border border-rule bg-rule sm:grid-cols-2">
      {[prev, next].map((link, i) =>
        link ? (
          <Link
            key={i}
            href={link.href}
            className={`bg-paper-raised px-5 py-4 transition-colors hover:bg-accent-soft ${
              i === 1 ? "sm:text-right" : ""
            }`}
          >
            <span className="block text-xs tracking-wide text-ink-faint uppercase">
              {i === 0 ? "Previous" : "Next"}
            </span>
            <span className="mt-1 block font-display text-lg">
              {link.label}
            </span>
          </Link>
        ) : (
          <span key={i} className="hidden bg-paper-raised sm:block" />
        ),
      )}
    </nav>
  );
}
