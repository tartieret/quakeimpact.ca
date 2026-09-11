"use client";

import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: 2 | 3;
}

/**
 * Reads the rendered section headings rather than taking a prop, so a page
 * author never has to keep a duplicate list in sync with the page body.
 *
 * Two levels are listed. An `<h2>` is a section and links to the section, so a
 * reader lands above the heading rather than on it. A `<h3>` inside a section
 * is a subhead and links to itself; it only appears if it carries an id, which
 * is what `Subhead` in `prose-blocks.tsx` gives it. A page with eleven sections
 * and a subhead under each is what the rail has to make navigable.
 *
 * Highlighting observes the heading elements themselves rather than the
 * sections, because sections nest and a nested pair would always resolve to the
 * outer one. The band is a thin strip near the top of the viewport, so at most
 * one heading is in it at a time, and the last heading to enter it stays
 * current until another does.
 */
export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main section[id] > h2, main section[id] h3[id]",
      ),
    );

    // The element observed, against the id the rail links to.
    const targets = nodes.map((node) => ({
      node,
      id:
        node.tagName === "H2"
          ? ((node.parentElement as HTMLElement).id ?? "")
          : node.id,
      level: node.tagName === "H2" ? (2 as const) : (3 as const),
    }));

    setHeadings(
      targets.map(({ node, id, level }) => ({
        id,
        level,
        text: node.textContent ?? "",
      })),
    );
    setActive(targets[0]?.id ?? "");

    const idFor = new Map(targets.map((t) => [t.node, t.id]));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];
        const id = visible && idFor.get(visible.target as HTMLElement);
        if (id) setActive(id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    targets.forEach((t) => observer.observe(t.node));
    return () => observer.disconnect();
  }, []);

  if (headings.length < 3) return null;

  return (
    <nav aria-label="On this page" className="sticky top-24">
      <p className="text-xs font-semibold tracking-[0.12em] text-ink-faint uppercase">
        On this page
      </p>
      <ul className="mt-4 flex flex-col gap-0.5 border-l border-rule">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              aria-current={active === h.id ? "true" : undefined}
              className={
                active === h.id
                  ? h.level === 3
                    ? "-ml-px block border-l border-accent py-1.5 pr-2 pl-8 text-sm leading-snug font-medium text-accent transition-colors"
                    : "-ml-px block border-l border-accent py-1.5 pr-2 pl-4 text-sm leading-snug font-medium text-accent transition-colors"
                  : h.level === 3
                    ? "-ml-px block border-l border-transparent py-1.5 pr-2 pl-8 text-sm leading-snug text-ink-muted transition-colors hover:text-ink"
                    : "-ml-px block border-l border-transparent py-1.5 pr-2 pl-4 text-sm leading-snug text-ink-muted transition-colors hover:text-ink"
              }
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
