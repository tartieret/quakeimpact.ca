import type { MetadataRoute } from "next";
import { ALL_ROUTES } from "@/content/site";
import { absoluteUrl } from "@/content/metadata";

/**
 * `/sitemap.xml`, written at build time into the static export.
 *
 * The list comes from `ALL_ROUTES`, which is derived from the navigation, so
 * a page that exists is a page the sitemap holds and there is no second list
 * to keep in step.
 *
 * Each entry is a URL and nothing else. `lastmod` is only worth sending if it
 * is accurate, and a build date is not: it would mark all 33 pages as changed
 * every time any one of them did, which is the signal a crawler learns to
 * ignore. `changefreq` and `priority` are read by nobody. A date will belong
 * here when it comes from the page's own history rather than from the clock.
 */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ALL_ROUTES.map((route) => ({ url: absoluteUrl(route) }));
}
