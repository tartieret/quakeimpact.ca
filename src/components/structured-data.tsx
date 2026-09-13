import { SITE } from "@/content/site";
import { absoluteUrl } from "@/content/metadata";

/**
 * Structured data, for the part of a search result the `<title>` cannot say.
 *
 * Two things only. The site says what it is, once, in the root layout; a page
 * inside a part says where it sits, so a result for the water page shows the
 * trail it belongs to rather than a bare URL. Both restate what the page
 * already shows a reader in the masthead and the section navigation, which is
 * the condition search engines put on structured data and also the honest
 * position: nothing is asserted here that is not on the page.
 *
 * There is no `Article` block. It would want an author and a publication date,
 * and a page that is revised whenever a document behind it is has neither in
 * any form worth publishing.
 */

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // The content is built here from typed data, not from anything a reader
      // supplies, and JSON.stringify escapes what is in it.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE.name,
        url: absoluteUrl("/"),
        description: SITE.tagline,
        inLanguage: "en-CA",
      }}
    />
  );
}

/**
 * The trail to a page inside a part: the home page, the part, and the page.
 * Written only where there is a part to name, because a two-step trail from
 * the home page to a top-level page tells a reader nothing they cannot see.
 */
export function BreadcrumbJsonLd({
  trail,
}: {
  trail: { name: string; href: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: trail.map((step, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: step.name,
          item: absoluteUrl(step.href),
        })),
      }}
    />
  );
}
