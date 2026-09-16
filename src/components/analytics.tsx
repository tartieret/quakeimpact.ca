import Script from "next/script";

/**
 * Google Analytics 4, loaded only on a build that was given a property.
 *
 * The measurement ID comes from `NEXT_PUBLIC_GA_ID`, read at build time. The
 * site is a static export with no server, so there is nothing to read an
 * environment variable per request: the ID is inlined into the HTML by the
 * build that produced it. A build without the variable renders nothing and
 * makes no third-party request, which is what `next dev`, the QA pass over
 * `out/` and a fork all want. Set it in Netlify's build environment for the
 * production site.
 *
 * The value is checked against GA4's own format rather than trusted. It is
 * written into an inline script, and an ID pasted with its quotes or with a
 * trailing newline would otherwise put broken JavaScript on all 33 pages,
 * where the only symptom is that no page ever reports a view.
 *
 * `afterInteractive` is why this is `next/script` and not a bare tag: gtag.js
 * is fetched once hydration has started, so a third-party request cannot get
 * in front of the page a reader came for.
 *
 * No page view is sent from here for a client-side navigation. gtag.js sends
 * one on load, and GA4's enhanced measurement counts the rest from History
 * API events, which is what the App Router's soft navigation between pages
 * does; sending our own as well would count those pages twice.
 */
const MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID?.trim();

const isMeasurementId = (id: string) => /^G-[A-Z0-9]+$/.test(id);

export function Analytics() {
  if (!MEASUREMENT_ID || !isMeasurementId(MEASUREMENT_ID)) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {[
          "window.dataLayer = window.dataLayer || [];",
          "function gtag(){dataLayer.push(arguments);}",
          "gtag('js', new Date());",
          `gtag('config', '${MEASUREMENT_ID}');`,
        ].join("\n")}
      </Script>
    </>
  );
}
