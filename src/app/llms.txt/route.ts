import { NAV, SHAKING_PAGES, SITE, SYSTEMS, UTILITY_NAV } from "@/content/site";
import type { NavItem } from "@/content/types";
import { absoluteUrl } from "@/content/metadata";
import { pageFor } from "@/content/pages";
import { home } from "@/content/pages/home";

/**
 * `/llms.txt`, written at build time into the static export.
 *
 * The site's pages as a plain Markdown list, in the format proposed at
 * llmstxt.org, for an AI agent that reads one short file before deciding which
 * pages to fetch. None of the major crawlers has said it reads the file; some
 * agent tools look for it, and it costs nothing to keep true.
 *
 * It holds no words of its own. The groups are the footer's, built from `NAV`
 * and `UTILITY_NAV`, so a page the navigation knows about is a page listed here
 * and there is no third list beside the sitemap. Each line carries the page's
 * `meta.description`, the sentence its search result shows; an unwritten page
 * falls back to its hook, as its metadata does, and a page with neither is
 * listed by name alone.
 */
export const dynamic = "force-static";

const HOOKS: Record<string, string> = Object.fromEntries([
  ...SYSTEMS.map((s) => [`/after/${s.slug}/`, s.hook]),
  ...SHAKING_PAGES.map((p) => [`/shaking/${p.slug}/`, p.hook]),
]);

function line({ href, label }: NavItem) {
  const description = pageFor(href)?.meta.description ?? HOOKS[href];
  const link = `- [${label}](${absoluteUrl(href)})`;
  return description ? `${link}: ${description}` : link;
}

export function GET() {
  const parts = NAV.filter((item) => item.children?.length);

  const text = [
    `# ${SITE.name}`,
    `> ${SITE.tagline}`,
    home.meta.description,
    "## Sections",
    [{ href: "/", label: home.meta.nav }, ...NAV].map(line).join("\n"),
    ...parts.flatMap((part) => [
      `## ${part.label}`,
      (part.children ?? []).map(line).join("\n"),
    ]),
    "## Reference",
    UTILITY_NAV.map(line).join("\n"),
  ].join("\n\n");

  return new Response(`${text}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
