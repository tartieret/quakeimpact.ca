import Link from "next/link";
import { NAV, SITE, UTILITY_NAV } from "@/content/site";
import { SiteMark } from "./site-mark";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-rule bg-paper-raised">
      <div className="mx-auto grid max-w-6xl gap-10 px-gutter py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-2">
          <p className="flex items-center gap-2.5 text-[1.1875rem] font-bold tracking-[-0.03em]">
            <SiteMark />
            {SITE.name}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
            {SITE.tagline}. Compiled from published work and documented analogue
            events. No original modelling.
          </p>
        </div>

        <nav aria-label="Sections">
          <p className="text-xs font-semibold tracking-[0.12em] text-ink-faint uppercase">
            Sections
          </p>
          <ul className="mt-4 space-y-2.5">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Reference">
          <p className="text-xs font-semibold tracking-[0.12em] text-ink-faint uppercase">
            Reference
          </p>
          <ul className="mt-4 space-y-2.5">
            {UTILITY_NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-rule">
        <p className="mx-auto max-w-6xl px-gutter py-5 text-xs text-ink-faint">
          Not an official source. In an emergency follow the instructions of
          local authorities.
        </p>
      </div>
    </footer>
  );
}
