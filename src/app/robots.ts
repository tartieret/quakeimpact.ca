import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";
import { absoluteUrl } from "@/content/metadata";

/**
 * `/robots.txt`, written at build time into the static export.
 *
 * Everything is crawlable. There is nothing on this site that is not meant to
 * be read, and a public-information site that search engines cannot reach has
 * failed at its only job.
 */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: SITE.url,
  };
}
