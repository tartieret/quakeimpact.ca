"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, SITE, UTILITY_NAV } from "@/content/site";
import { SiteMark } from "./site-mark";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  /**
   * Exactly one thing on a page is `aria-current="page"`, and it is the page.
   * A part that merely contains the page is current in the general sense, which
   * is what the bare `true` is for: with the pages of a part listed under it,
   * marking both the part and the page as "page" would announce the reader as
   * being in two places at once.
   */
  const currentFor = (href: string) =>
    pathname === href ? "page" : isActive(href) ? true : undefined;

  return (
    <>
      <p className="bg-ink px-gutter py-1.5 text-center text-[0.6875rem] tracking-wide text-paper/80">
        {SITE.status}
      </p>

      <header className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-gutter py-3">
          <Link href="/" className="mr-auto flex items-center gap-2.5">
            <SiteMark />
            <span className="flex flex-col leading-none">
              <span className="text-lg font-bold tracking-[-0.03em]">
                {SITE.name}
              </span>
              <span className="mt-1 hidden font-mono text-[0.5625rem] tracking-[0.08em] whitespace-nowrap text-ink-faint uppercase sm:block">
                Lower Mainland, British Columbia
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={currentFor(item.href)}
                className={`rounded-sm px-3 py-2 text-sm whitespace-nowrap transition-colors ${
                  isActive(item.href)
                    ? "bg-accent-soft font-semibold text-accent"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="rounded-sm border border-rule-strong px-3 py-2 text-sm lg:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {/* The panel, unlike the bar above it, has room to nest, so this is
            where a reader gets at the pages inside a part without going through
            its index first. A part's pages sit in a `<details>`, which is a
            disclosure the browser already knows how to open from a keyboard;
            the part that is being read is open when the menu opens, because
            that is the list a reader in it is most likely to want. The part's
            own page keeps its row above, so reaching it is still one tap. */}
        <div
          id="mobile-nav"
          hidden={!open}
          className="border-t border-rule bg-paper-raised lg:hidden"
        >
          <div className="mx-auto max-w-6xl px-gutter py-4">
            <ul className="grid gap-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={currentFor(item.href)}
                    className={`block rounded-sm px-3 py-2.5 text-base ${
                      isActive(item.href)
                        ? "bg-accent-soft font-semibold text-accent"
                        : "hover:bg-accent-soft"
                    }`}
                  >
                    {item.label}
                  </Link>

                  {item.children?.length ? (
                    <details
                      open={isActive(item.href)}
                      className="mt-1 ml-3 border-l border-rule pl-2"
                    >
                      <summary className="cursor-pointer rounded-sm px-3 py-2 text-sm text-ink-faint marker:text-ink-faint">
                        {item.childrenLabel}
                      </summary>
                      <ul className="grid gap-0.5 pb-2">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              aria-current={currentFor(child.href)}
                              className={`block rounded-sm px-3 py-2 text-sm ${
                                pathname === child.href
                                  ? "bg-accent-soft font-semibold text-accent"
                                  : "text-ink-muted hover:bg-accent-soft hover:text-ink"
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : null}
                </li>
              ))}
            </ul>

            <ul className="mt-3 grid gap-1 border-t border-rule pt-3">
              {UTILITY_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={currentFor(item.href)}
                    className={`block rounded-sm px-3 py-2.5 text-base ${
                      isActive(item.href)
                        ? "bg-accent-soft font-semibold text-accent"
                        : "hover:bg-accent-soft"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
