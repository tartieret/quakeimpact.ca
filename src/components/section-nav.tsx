import Link from "next/link";
import type { NavItem } from "@/content/types";

/**
 * The other pages in the part, at the foot of a page inside it.
 *
 * A reader deep in one system page could previously only step to the system
 * beside it or climb back to the index. This is the lateral move: every page in
 * the part, named, with the one being read marked.
 *
 * It is furniture rather than content, so it takes no heading. A heading here
 * would enter the heading order and appear in the contents rail, where it would
 * sit among the sections of the page as though it were one of them. The label
 * above the list is a `<p>` and the accessible name comes from the `<nav>`,
 * which is what `TableOfContents` does with "On this page" for the same reason.
 *
 * The current page is marked by weight and an underline as well as by colour,
 * because a list where the reader's position is a hue alone is a list that
 * loses its position in greyscale.
 */
export function SectionNav({
  section,
  current,
}: {
  /** The part this page belongs to. Nothing renders if it holds no pages. */
  section?: NavItem;
  /** The href of the page being read, which is the one that is not a link. */
  current: string;
}) {
  const pages = section?.children;
  if (!section || !pages?.length) return null;

  return (
    <nav aria-label={section.label} className="border-t border-rule pt-8">
      <p className="text-xs font-semibold tracking-[0.12em] text-ink-faint uppercase">
        <Link
          href={section.href}
          className="transition-colors hover:text-accent"
        >
          {section.label}
        </Link>
      </p>
      <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2.5 text-sm">
        {pages.map((page) => (
          <li key={page.href}>
            {page.href === current ? (
              <span
                aria-current="page"
                className="font-semibold text-accent underline decoration-accent underline-offset-4"
              >
                {page.label}
              </span>
            ) : (
              <Link
                href={page.href}
                className="text-ink-muted transition-colors hover:text-ink"
              >
                {page.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
