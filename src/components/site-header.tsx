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
                aria-current={isActive(item.href) ? "page" : undefined}
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

        <div
          id="mobile-nav"
          hidden={!open}
          className="border-t border-rule bg-paper-raised lg:hidden"
        >
          <div className="mx-auto max-w-6xl px-gutter py-4">
            <ul className="grid gap-1">
              {[...NAV, ...UTILITY_NAV].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-sm px-3 py-2.5 text-base hover:bg-accent-soft"
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
