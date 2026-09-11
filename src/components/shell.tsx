import type { ReactNode } from "react";
import { TableOfContents } from "./toc";

/** Standard measure. Index and overview pages use this. */
export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-gutter py-12 sm:py-16">
      <div className="flex flex-col gap-12">{children}</div>
    </div>
  );
}

/** Narrower measure for pages that are mostly running text. */
export function ReadingShell({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-gutter py-12 sm:py-16">
      <div className="flex flex-col gap-12">{children}</div>
    </div>
  );
}

/**
 * Long pages with many sections: body on the left, a sticky contents rail on
 * the right. The rail is what makes a twelve-section system page navigable.
 *
 * The rail column is reserved only where there will be a rail. `TableOfContents`
 * reads the rendered headings and renders nothing below three of them, so the
 * four unwritten Part 1 pages were narrowing their body by 15 rem for an empty
 * aside. The route cannot answer this — the rail is built client-side from the
 * DOM — but the DOM can, and does so at parse time: `:has()` on a third
 * `<section id>` is true or false in the exported HTML, before the first paint
 * and before React exists, so the column is right from the first frame and
 * nothing shifts when the rail fills in. The column gap is set on its own axis
 * so the single-column case does not gain a row gap under the empty aside.
 */
export function ArticleShell({
  header,
  children,
}: {
  header: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl px-gutter py-12 sm:py-16">
      {header}
      <div className="mt-12 lg:grid lg:items-start lg:gap-x-16 lg:has-[>div>section:nth-of-type(3)]:grid-cols-[minmax(0,1fr)_15rem]">
        <div className="flex min-w-0 flex-col gap-12">{children}</div>
        <aside className="hidden lg:block">
          <TableOfContents />
        </aside>
      </div>
    </div>
  );
}
