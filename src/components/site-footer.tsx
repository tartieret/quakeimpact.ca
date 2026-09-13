import Link from "next/link";
import { NAV, SITE, UTILITY_NAV } from "@/content/site";
import type { NavItem } from "@/content/types";
import { SiteMark } from "./site-mark";

/**
 * The point at which a column is long enough to be worth splitting. Thirteen
 * systems in a single file leave the three columns beside it standing in front
 * of half a screen of nothing, which reads as a layout that has gone wrong
 * rather than as a long list.
 */
const LONG_COLUMN = 8;

/**
 * One column of the footer index. `href` makes the column's own label a link,
 * which is how a part's column points at the part's page: the heading is the
 * part, the list under it is what the part holds.
 *
 * A long list takes two grid columns and flows down one and up the next, so the
 * footer stays about as tall as its shortest column rather than as tall as its
 * longest.
 */
function FooterNav({
  label,
  href,
  items,
}: {
  label: string;
  href?: string;
  items: NavItem[];
}) {
  const wide = items.length > LONG_COLUMN;

  return (
    <nav aria-label={label} className={wide ? "sm:col-span-2" : undefined}>
      <p className="text-xs font-semibold tracking-[0.12em] text-ink-faint uppercase">
        {href ? (
          <Link href={href} className="transition-colors hover:text-accent">
            {label}
          </Link>
        ) : (
          label
        )}
      </p>
      <ul className={wide ? "mt-4 sm:columns-2 sm:gap-x-10" : "mt-4"}>
        {items.map((item) => (
          <li key={item.href} className="mb-2.5 break-inside-avoid">
            <Link href={item.href} className="text-sm hover:text-accent">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/**
 * The footer is the site's index, so it lists every page rather than every
 * part. "Sections" is the five parts in reading order; the columns beside it
 * are what the two parts that hold pages hold, drawn from `NAV`, so a system
 * added to the content model appears here with no change to this file.
 */
export function SiteFooter() {
  const parts = NAV.filter((item) => item.children?.length);

  return (
    <footer className="mt-24 border-t border-rule bg-paper-raised">
      <div className="mx-auto max-w-6xl px-gutter py-14">
        <div>
          <p className="flex items-center gap-2.5 text-[1.1875rem] font-bold tracking-[-0.03em]">
            <SiteMark />
            {SITE.name}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
            {SITE.tagline}. Compiled from published work and documented analogue
            events. No original modelling.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          <FooterNav label="Sections" items={NAV} />
          {parts.map((part) => (
            <FooterNav
              key={part.href}
              label={part.label}
              href={part.href}
              items={part.children ?? []}
            />
          ))}
          <FooterNav label="Reference" items={UTILITY_NAV} />
        </div>
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
