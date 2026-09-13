import type { Metadata } from "next";
import { SITE } from "./site";
import type { PageMeta } from "./types";

/**
 * What a page tells a search engine and a link preview.
 *
 * Every route builds its `Metadata` here rather than writing its own object,
 * for the reason the rest of `src/content/` exists: the shape is stated once
 * and a page supplies the three things that differ. A route that wrote its own
 * would be a second place for the canonical rule, the card type and the locale
 * to drift.
 *
 * The three things a page must supply are its route, its title and its
 * description. All three already live in the page module's `meta`, so a
 * written page passes that straight through and a page with no module passes
 * the same three fields by hand.
 */

/** A site-relative path as the absolute URL a crawler and a card need. */
export const absoluteUrl = (path: string) => new URL(path, SITE.url).toString();

/**
 * The card image, stated once.
 *
 * `src/app/opengraph-image.tsx` draws it and reads its dimensions from here, so
 * the picture and what every page says about the picture cannot disagree.
 *
 * It has to be written into each page's `openGraph` rather than left to be
 * inherited. Next attaches the image drawn at the root of the route tree to
 * every page below it, but a page that declares an `openGraph` of its own
 * replaces the inherited object whole, and every page here declares one in
 * order to carry its own title. Measured on the export: take this out and the
 * home page keeps its card and the other 31 pages lose theirs.
 *
 * The route has no file extension, which is a fact about how Next writes a
 * generated image into a static export, and `netlify.toml` gives it the content
 * type a link preview checks for before it will draw anything.
 */
export const CARD = {
  path: "/opengraph-image",
  width: 1200,
  height: 630,
  contentType: "image/png",
  alt: `${SITE.name}: ${SITE.tagline}`,
} as const;

const CARD_IMAGE = {
  url: CARD.path,
  width: CARD.width,
  height: CARD.height,
  type: CARD.contentType,
  alt: CARD.alt,
};

interface PageMetadataInput {
  /** The route as it is exported, with its trailing slash. */
  route: string;
  /**
   * The `<title>`, before the site name is appended by the root template. The
   * home page passes `{ absolute: … }`, because a title that already opens on
   * the site name does not want it a second time.
   */
  title: NonNullable<Metadata["title"]>;
  description: string;
  /**
   * The home page is the site; every other page is a piece of writing on it.
   * It is the one field a link preview reads that the page itself does not
   * show, so it is stated rather than guessed from the route.
   */
  type?: "website" | "article";
}

/**
 * `openGraph` and `twitter` carry no title or description of their own.
 *
 * Next fills both from the resolved page title and description, which means
 * the card and the search result cannot say different things, and the title
 * template is applied once rather than written out a second time here.
 *
 * The image they do carry is the one card the site has, for the reason set out
 * on `CARD` above.
 */
export function pageMetadata({
  route,
  title,
  description,
  type = "article",
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: route },
    openGraph: {
      type,
      url: route,
      siteName: SITE.name,
      locale: "en_CA",
      images: [CARD_IMAGE],
    },
    twitter: { card: "summary_large_image" },
  };
}

/** The same, for a route whose words come from a page module. */
export const metadataFor = (meta: PageMeta): Metadata =>
  pageMetadata({
    route: meta.route,
    title: meta.title,
    description: meta.description,
  });
