import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/content/metadata";

/**
 * `/robots.txt`, written at build time into the static export.
 *
 * Everything is crawlable, by every agent. There is nothing on this site that
 * is not meant to be read, and a public-information site that search engines
 * and AI assistants cannot reach has failed at its only job. One rule for `*`
 * already admits GPTBot, ClaudeBot, PerplexityBot and the rest, so none is
 * named: a list of allowed agents would be a list to keep up to date.
 *
 * There is no `Host` line. It was a Yandex extension, Yandex no longer reads
 * it, and the preferred host is stated where every crawler does read it: the
 * canonical link on each page and the redirects in `netlify.toml`.
 */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
