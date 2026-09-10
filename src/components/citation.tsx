"use client";

import Link from "next/link";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { REFERENCES } from "@/content/references";
import type { Reference } from "@/content/types";

/**
 * Inline citations.
 *
 * A page declares its references once, in order:
 *
 *   const REFS = ["mv-liquefaction", "crossing-assessments"];
 *   <Citations ids={REFS}> … <ReferenceList /> </Citations>
 *
 * Prose then cites by key — <Cite id="crossing-assessments" /> — and the
 * number comes from the declared order, so it cannot drift from the list at
 * the foot of the page. Clicking a marker opens the reference in place;
 * the same entry is also in the list, with a link back to where it was cited.
 */

const CitationContext = createContext<string[]>([]);

export function Citations({
  ids,
  children,
}: {
  ids: string[];
  children: ReactNode;
}) {
  return (
    <CitationContext.Provider value={ids}>{children}</CitationContext.Provider>
  );
}

const KIND_LABEL: Record<Reference["kind"], string> = {
  report: "Report",
  dataset: "Dataset",
  analogue: "Analogue event",
  page: "On this site",
};

function ReferenceBody({ reference }: { reference: Reference }) {
  const internal = reference.kind === "page";
  return (
    <>
      <span className="block text-[0.6875rem] font-semibold tracking-[0.08em] text-ink-faint uppercase">
        {KIND_LABEL[reference.kind]}
      </span>
      <span className="mt-1 block font-display text-base leading-snug text-ink">
        {reference.title}
      </span>
      {reference.publisher || reference.year ? (
        <span className="mt-1 block text-sm text-ink-muted">
          {[reference.publisher, reference.year].filter(Boolean).join(" · ")}
        </span>
      ) : null}
      {reference.note ? (
        <span className="mt-2 block text-sm leading-relaxed text-ink-muted">
          {reference.note}
        </span>
      ) : null}
      {internal ? (
        <Link
          href={reference.href}
          className="mt-3 inline-block text-sm font-medium text-accent underline underline-offset-4"
        >
          Go to the page
        </Link>
      ) : (
        <a
          href={reference.href}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-block text-sm font-medium text-accent underline underline-offset-4"
        >
          Open the document ↗
        </a>
      )}
      {reference.placeholder ? (
        <span className="mt-3 block font-mono text-xs text-ink-faint">
          Placeholder link — the real citation is not in yet
        </span>
      ) : null}
    </>
  );
}

/**
 * The marker. A button, not a link: the reference shows in place, because
 * sending a reader to the foot of the page to check a claim means they don't.
 */
export function Cite({ id }: { id: string }) {
  const ids = useContext(CitationContext);
  const reference = REFERENCES[id];
  const number = ids.indexOf(id) + 1;

  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!wrap.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // An unregistered key is a content bug, so it is shown, not swallowed.
  if (!reference || number === 0) {
    return (
      <sup
        title={`Unregistered citation key: ${id}`}
        className="font-mono text-[0.7em] text-band-high"
      >
        [?]
      </sup>
    );
  }

  return (
    <span ref={wrap} className="relative inline-block">
      <button
        type="button"
        id={`cite-${number}`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={`Reference ${number}: ${reference.title}`}
        className="align-super text-[0.72em] font-semibold text-accent decoration-dotted underline-offset-2 hover:underline"
      >
        [{number}]
      </button>

      {open ? (
        <span className="fixed inset-x-gutter bottom-4 z-40 block rounded-xl border border-rule-strong bg-paper-raised p-5 text-left shadow-lg sm:absolute sm:inset-x-auto sm:top-[1.6em] sm:bottom-auto sm:left-0 sm:w-80">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close reference"
            className="absolute top-3 right-3 text-sm text-ink-faint hover:text-ink"
          >
            ✕
          </button>
          <span className="block pr-6">
            <ReferenceBody reference={reference} />
          </span>
        </span>
      ) : null}
    </span>
  );
}

/** The foot of the page. Numbered in the same order as the markers. */
export function ReferenceList() {
  const ids = useContext(CitationContext);
  return (
    <ol className="flex flex-col gap-px overflow-hidden rounded-xl border border-rule bg-rule">
      {ids.map((id, i) => {
        const reference = REFERENCES[id];
        if (!reference) return null;
        return (
          <li key={id} className="flex gap-4 bg-paper-raised px-5 py-4">
            <a
              href={`#cite-${i + 1}`}
              aria-label={`Back to citation ${i + 1} in the text`}
              className="mt-0.5 shrink-0 font-mono text-xs text-accent"
            >
              [{i + 1}]
            </a>
            <span className="block min-w-0">
              <ReferenceBody reference={reference} />
            </span>
          </li>
        );
      })}
    </ol>
  );
}
