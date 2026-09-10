"use client";

import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
}

/**
 * Reads the rendered section headings rather than taking a prop, so a page
 * author never has to keep a duplicate list in sync with the page body.
 */
export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id] > h2"),
    );
    setHeadings(
      nodes.map((n) => ({
        id: (n.parentElement as HTMLElement).id,
        text: n.textContent ?? "",
      })),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    nodes.forEach((n) => observer.observe(n.parentElement as HTMLElement));
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
              className={`-ml-px block border-l py-1.5 pl-4 text-sm leading-snug transition-colors ${
                active === h.id
                  ? "border-accent font-medium text-accent"
                  : "border-transparent text-ink-muted hover:text-ink"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
