"use client";

import Link from "next/link";
import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { Reference } from "@/content/types";

/**
 * The interactive half of the citation system.
 *
 * A marker opens its reference in place, which needs state, which needs a
 * client component. What it must not need is the register: there are 325
 * documents in `@/content/references` and a page cites a handful of them, so
 * the lookup happens on the server in `citation.tsx` and only the page's own
 * entries cross the boundary. Nothing in this file imports the register.
 */

/**
 * One declared reference, resolved. `reference` is null where the page declares
 * a key the register does not hold, so the entry keeps its place in the
 * numbering and the gap stays visible instead of shifting every number after it.
 */
export interface CitationEntry {
  id: string;
  reference: Reference | null;
}

const EntriesContext = createContext<CitationEntry[]>([]);

/**
 * Which marker for a given key is the first on the page.
 *
 * A key cited six times used to emit the same `id` six times, which is invalid
 * and left the reference list's back-link landing on the first marker by
 * accident. Only one marker per key needs an id, so the first one to ask for a
 * key claims it and the rest render without one. The claim is keyed on the
 * asking marker's `useId`, so it is idempotent: a marker that renders twice
 * gets the same answer both times, and the answer is the same on the server and
 * on hydration because the markers render in document order in both.
 */
interface FirstMarkers {
  claim(key: string, marker: string): boolean;
}

function firstMarkers(): FirstMarkers {
  const held = new Map<string, string>();
  return {
    claim(key, marker) {
      const first = held.get(key);
      if (first === undefined) {
        held.set(key, marker);
        return true;
      }
      return first === marker;
    },
  };
}

const FirstMarkerContext = createContext<FirstMarkers | null>(null);

export function CitationProvider({
  entries,
  children,
}: {
  entries: CitationEntry[];
  children: ReactNode;
}) {
  const first = useRef<FirstMarkers | null>(null);
  first.current ??= firstMarkers();
  return (
    <EntriesContext.Provider value={entries}>
      <FirstMarkerContext.Provider value={first.current}>
        {children}
      </FirstMarkerContext.Provider>
    </EntriesContext.Provider>
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
  const entries = useContext(EntriesContext);
  const first = useContext(FirstMarkerContext);
  const marker = useId();

  const index = entries.findIndex((entry) => entry.id === id);
  const reference = index === -1 ? null : entries[index].reference;
  const number = index + 1;

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

  // Claimed on every render, including the one that only opens the popover, so
  // that the marker holding the id cannot change while the page is being read.
  const isFirst = first ? first.claim(id, marker) : true;

  // An unregistered key is a content bug, so it is shown, not swallowed.
  if (!reference) {
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
        id={isFirst ? `cite-${number}` : undefined}
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

/**
 * The foot of the page. Numbered in the same order as the markers, and linking
 * back to the first marker for each key, which is where the claim was made.
 */
export function ReferenceList() {
  const entries = useContext(EntriesContext);
  return (
    <ol className="flex flex-col gap-px overflow-hidden rounded-xl border border-rule bg-rule">
      {entries.map((entry, i) =>
        entry.reference ? (
          <li key={entry.id} className="flex gap-4 bg-paper-raised px-5 py-4">
            <a
              href={`#cite-${i + 1}`}
              aria-label={`Back to citation ${i + 1} in the text`}
              className="mt-0.5 shrink-0 font-mono text-xs text-accent"
            >
              [{i + 1}]
            </a>
            <span className="block min-w-0">
              <ReferenceBody reference={entry.reference} />
            </span>
          </li>
        ) : null,
      )}
    </ol>
  );
}
