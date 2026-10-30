import { SITE } from "@/content/site";
import { absoluteUrl } from "@/content/metadata";
import { REFERENCES } from "@/content/references";
import type { IsoDate } from "@/content/types";

/**
 * Structured data, for the part of a search result the `<title>` cannot say.
 *
 * Three things only. The site says what it is, once, in the root layout; every
 * page says when it was last checked and which documents it cites; and a page
 * inside a part says where it sits, so a result for the water page shows the
 * trail it belongs to rather than a bare URL. All three restate what the page
 * already shows a reader in the masthead, under the standfirst, in the sources
 * list and in the section navigation, which is the condition search engines
 * put on structured data and also the honest position: nothing is asserted
 * here that is not on the page.
 *
 * There is no `Article` block. It would want an author and a publication date,
 * and a page that is revised whenever a document behind it is has neither in
 * any form worth publishing. `WebPage` asks for neither, and it has a property,
 * `lastReviewed`, that means exactly what the page's own date means.
 */

/** The site, named once so each page can say it belongs to it. */
const WEBSITE_ID = `${absoluteUrl("/")}#website`;

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
        "@id": WEBSITE_ID,
        name: SITE.name,
        url: absoluteUrl("/"),
        description: SITE.tagline,
        inLanguage: "en-CA",
      }}
    />
  );
}

/**
 * One page: its name, its summary, the day it was last checked against its
 * sources, and those sources.
 *
 * `reviewed` is absent on a page whose body is not written, which has no review
 * to date, and the block then says nothing about it rather than borrowing a
 * build date. `references` is the page's own citation list, resolved from the
 * register the same way the list at its foot is. An internal page is left out,
 * because it is part of this site rather than a document behind it.
 *
 * The props are named as on `PageMeta`, so a written page spreads its `meta`
 * and a page without a module passes the same fields by hand, as it does for
 * `pageMetadata`.
 */
export function WebPageJsonLd({
  route,
  title,
  description,
  reviewed,
  references = [],
}: {
  route: string;
  title: string;
  description: string;
  reviewed?: IsoDate;
  references?: string[];
}) {
  const citation = references.flatMap((id) => {
    const ref = REFERENCES[id];
    if (!ref || ref.kind === "page" || ref.placeholder) return [];
    return [
      {
        "@type": "CreativeWork",
        name: ref.title,
        url: ref.href,
        ...(ref.publisher
          ? { publisher: { "@type": "Organization", name: ref.publisher } }
          : {}),
        ...(ref.year ? { datePublished: String(ref.year) } : {}),
      },
    ];
  });

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": absoluteUrl(route),
        url: absoluteUrl(route),
        name: title,
        description,
        inLanguage: "en-CA",
        isPartOf: { "@id": WEBSITE_ID },
        ...(reviewed ? { lastReviewed: reviewed } : {}),
        ...(citation.length ? { citation } : {}),
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
