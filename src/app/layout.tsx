import type { Metadata } from "next";
import { Libre_Franklin, JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteJsonLd } from "@/components/structured-data";
import { SITE } from "@/content/site";
import "./globals.css";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-libre-franklin",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

/**
 * What every page inherits, and what a page overrides.
 *
 * `metadataBase` is what turns the site-relative canonical each page writes,
 * and the card image drawn by `opengraph-image.tsx`, into the absolute URLs a
 * crawler and a link preview both require.
 *
 * A page supplies its own title, description, canonical and card through
 * `pageMetadata` in `@/content/metadata`. What is set here is what does not
 * vary: the title template, the crawl rules and the shape of the card.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.name, template: `%s · ${SITE.name}` },
  description: SITE.tagline,
  alternates: { canonical: "/" },
  /**
   * Crawlable, and with the two limits Google applies by default lifted. Its
   * default snippet length cuts a description that was written to be read
   * whole, and its default image preview is a thumbnail of a card drawn at
   * 1200 px.
   */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE.name,
    title: SITE.name,
    description: SITE.tagline,
    locale: "en_CA",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-CA"
      className={`${libreFranklin.variable} ${jetBrainsMono.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <SiteJsonLd />
      </body>
    </html>
  );
}
