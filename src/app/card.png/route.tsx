import { ImageResponse } from "next/og";
import { SITE } from "@/content/site";
import { CARD } from "@/content/metadata";

/**
 * The card a link to this site unfurls into, on every route.
 *
 * Every page points at it through `pageMetadata`, with its own title and
 * description on top. One image and a description per page is the right way
 * round: the image says whose site this is, and the words say which page.
 *
 * It is a route handler named `card.png` rather than an `opengraph-image`
 * file, because Next writes a generated metadata image into a static export
 * with no extension, and the image is then typed only if a header rule in the
 * host's config says so. A link preview draws no image it cannot identify,
 * and WhatsApp builds its preview on the sender's phone, where nothing retries.
 * A `.png` address is typed by any host, with no rule to keep in step.
 *
 * It is drawn at build time into the static export, so the deployed site
 * serves a real PNG and fetches nothing.
 *
 * The colours are the tokens from `globals.css`, written out because this file
 * is rendered by a layout engine that never sees the stylesheet. It names no
 * typeface, and the drawing carries no figure: a card is read at thumbnail
 * size and a number on it could not carry its marker.
 */

/** Drawn once at build time, like every other file in the export. */
export const dynamic = "force-static";

const PAPER = "#f6f6f4";
const INK = "#14161a";
const INK_MUTED = "#5c5f63";
const ACCENT = "#1f4f63";

/**
 * The site mark, as the icon draws it: a seismograph trace at rest, one event,
 * and back to rest. Inlined as a data URI because the renderer here loads no
 * files of its own.
 */
const MARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="${INK}"/><path d="M4 19 L10 19 L13 9 L17 25 L20 15 L23 19 L28 19" fill="none" stroke="${PAPER}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const MARK_SRC = `data:image/svg+xml;base64,${Buffer.from(MARK).toString("base64")}`;

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          color: INK,
          padding: "80px 88px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={MARK_SRC} width={72} height={72} alt="" />
          <span style={{ fontSize: 52, fontWeight: 600, letterSpacing: "-0.01em" }}>
            {SITE.name}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", width: 160, height: 6, background: ACCENT }} />
          <div
            style={{
              marginTop: 36,
              fontSize: 60,
              lineHeight: 1.16,
              letterSpacing: "-0.02em",
              maxWidth: 940,
            }}
          >
            {SITE.tagline}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 30, color: INK_MUTED }}>
          {SITE.domain}
        </div>
      </div>
    ),
    { width: CARD.width, height: CARD.height },
  );
}
