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
      <div className="mt-12 lg:grid lg:grid-cols-[minmax(0,1fr)_15rem] lg:items-start lg:gap-16">
        <div className="flex min-w-0 flex-col gap-12">{children}</div>
        <aside className="hidden lg:block">
          <TableOfContents />
        </aside>
      </div>
    </div>
  );
}
