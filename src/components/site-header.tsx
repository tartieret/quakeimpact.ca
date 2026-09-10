"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, SITE, UTILITY_NAV } from "@/content/site";
import { ScenarioToggle } from "./scenario-toggle";

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
          <Link href="/" className="mr-auto flex flex-col leading-none">
            <span className="font-display text-lg tracking-tight">
              {SITE.name}
            </span>
            <span className="mt-0.5 hidden text-[0.6875rem] text-ink-faint sm:block">
              Lower Mainland, British Columbia
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  isActive(item.href)
                    ? "bg-accent-soft font-medium text-accent"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden sm:block">
            <ScenarioToggle />
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="rounded-md border border-rule-strong px-3 py-2 text-sm lg:hidden"
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
            <div className="mb-4 sm:hidden">
              <ScenarioToggle size="lg" />
            </div>
            <ul className="grid gap-1">
              {[...NAV, ...UTILITY_NAV].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-2.5 text-base hover:bg-accent-soft"
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
