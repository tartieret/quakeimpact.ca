import type { MetadataRoute } from "next";
import { ALL_ROUTES } from "@/content/site";
import { absoluteUrl } from "@/content/metadata";
import { pageFor } from "@/content/pages";

/**
 * `/sitemap.xml`, written at build time into the static export.
 *
 * The list comes from `ALL_ROUTES`, which is derived from the navigation, so
 * a page that exists is a page the sitemap holds and there is no second list
 * to keep in step.
 *
 * `lastmod` is the page module's `reviewed` date: the day the page was last
 * checked against its sources, set by hand, so it moves when that page's
 * evidence does and not when any other page changes. A build date would mark
 * every URL changed whenever one was, which is the signal a crawler learns to
 * ignore. A page with no module has no review to date and sends none.
 * `changefreq` and `priority` are read by nobody.
 */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ALL_ROUTES.map((route) => {
    const reviewed = pageFor(route)?.meta.reviewed;
    return reviewed
      ? { url: absoluteUrl(route), lastModified: reviewed }
      : { url: absoluteUrl(route) };
  });
}
