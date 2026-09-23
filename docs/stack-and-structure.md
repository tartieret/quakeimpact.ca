# Stack and site structure

*Companion to `site-overview.md`. How the site is built, and how the principles in the overview are enforced in code.*

---

## Stack

| | |
|---|---|
| Framework | Next.js 16, App Router, **static export** (`output: "export"`) |
| Language | TypeScript, strict |
| Styling | Tailwind CSS v4 (CSS-first config; no `tailwind.config.js`) |
| Hosting | Netlify — `netlify.toml` publishes `out/` |
| Domain | quakeimpact.ca |

Static export was chosen over an SPA because the site is public-facing content people will link to — every page needs a real URL and real HTML.

**Netlify note.** Netlify auto-detects Next.js and installs its Next.js Runtime, which expects `.next` and provisions serverless functions. A pure static export wants none of that. The runtime is supposed to detect `output: "export"` and stand down, but that detection has been unreliable across versions, so `NETLIFY_NEXT_PLUGIN_SKIP = "true"` is set explicitly in `netlify.toml`. Build settings live in that file, not in the Netlify UI.

---

## Routes

```
/                       hero, misconception, scenarios, ground, timeline,
                        systems, prepare
/scenarios/             the two scenarios side by side + full system matrix
/shaking/               Part 1 index
/shaking/[slug]/        ground, buildings, casualties, fire-following,
                        landslides, dikes, dams
/after/                 Part 2 index — timeline + system grid by build tier
/after/[slug]/          13 system pages
/getting-around/        Part 2b — moving after the shaking
/prepare/               Part 3
/method/                how the evidence is read, principles, assumption discipline
/sources/               the source register, rendered from REFERENCES
/contribute/            what the project can use, and how to send it
/about/
/licences/              attribution strings, per-dataset licence positions
```

32 pages, plus `robots.txt`, `sitemap.xml`, the social card and a 404. Re-derive the count from `npm run build` rather than trusting this line.

---

## Content model

Structured content lives in `src/content/site.ts` and page prose in
`src/content/pages/`. The route templates hold neither.

- `SITE` — name, domain, tagline, draft status banner
- `SCENARIOS` — the two scenarios and their comparison rows, including the named official simulation behind each and the `conditions` field. **Weather is a scenario condition, not a system**: it does not fail, so it has no restoration time, and both official scenarios set one in opposite directions. `TimelineStrip` renders both conditions side by side, as `/scenarios/` does
- `PHASES` — hours / days / weeks / months
- `SYSTEMS` — the fourteen systems, each with hook, `bitesAt` phase, one `impact` (or a `byScenario` pair where the two earthquakes differ), `dependsOn` edges, and build tier from overview section 8. Food and fuel are separate entries: fuel is an input every other system's repair competes for, food is a demand that cannot be stored, and merging them hides the edge between them. `weather` is not among them and `gas` is. `safety-and-conflict` is the one with no restoration time, so it has no `bitesAt` and no `disruption`, which makes fourteen. `impactsOf` resolves either shape into the list a page draws
- **The impacts come from the research.** `research/impact-bands.md` holds the mechanism and source per system, and `SYSTEMS` matches it. `Impact.disruption` is how long the system is out in the words of the document that says so, with its own source key, because the duration often comes from a different document than the mechanism. `ImpactCell` resolves each key against `REFERENCES` and renders the document; `SystemMatrix` on `/after/` cites each duration with a marker. `Impact.evidence` carries a caveat that changes what a reader should take away, such as the crustal outside-help sentence being a planning assumption.
- `SHAKING_PAGES`, `NAV`, `UTILITY_NAV`

`src/content/references.ts` holds `REFERENCES`, the source register: one entry per document, keyed by citation key. Entries carry kind, title, publisher, date, href, route, licence and a one-line note. `kind: "page"` is an internal reference — a claim can point at the page that carries the reasoning. **The file is generated** from `research/sources.md` by `scripts/build-references.mjs`, wired as `npm run references`, so a corrected date or URL propagates in one edit. Do not edit it by hand.

`src/content/pages/` holds one module per written page: `meta`, an array of sections and an optional lever. The array is what makes a wrong page hard to write — every `<h2>` comes from a section title, so a heading cannot miss the contents rail, and `meta.references` is the page's citation contract. See that folder's `README.md`.

Adding a system is one array entry. It then appears in the grid, the duration table, the related-systems lists and the prepare page, and gets its own exported page, with no other change.

---

## How the principles are enforced in code

**Presentation rule (overview section 4).** `Impact` requires a mechanism sentence and a source key, and `Disruption` requires its own source key, so there is no way to ship a duration without a document behind it.

**A missing estimate is shown, not hidden.** `NotPublished` draws "No published estimate" hatched in the table. Dams and reservoirs and health care ship in that state, as does large infrastructure for the crustal earthquake — the assumption discipline in overview section 5 becomes visible on the page instead of hidden in a backlog. `VerificationNote` does the same for open research questions.

**No doom without a lever (principle 3).** Every page describing a consequence ends with a `Lever` block. `lever` is optional on a page module only so that a page carrying no doom, such as `/method/`, is not made to manufacture an action.

**Both scenarios, always.** There is no control that picks one and hides the other, and the site has no client-side global state at all. Every place the two differ shows both: `SystemMatrix` stands them in labelled columns, `ImpactCell` renders them as a pair on each system page, `ScenarioCards` compares them row by row on `/scenarios/`, `TimelineStrip` sets the two weather conditions against each other, and `ScenarioPair` is the shape a passage of prose takes when it differs. The rule is about hiding, not about columns. The landing page's first panel gives the shaking as one range, ten seconds to three minutes, whose two ends are the two scenarios' own durations rather than a smoothed average, and links to the page that separates them: nothing is withheld, and it reads better than two columns do at the top of a page where neither earthquake has been introduced. A range used this way rests on that link, so it stays where the link is. The reason is in the evidence rather than in the interface: the published work assesses a single design earthquake per system, so eleven of the thirteen rows carry one assessment in both columns, and a control that picked one column would present a gap in what has been studied as an answer about what would happen. See `knowledge/design.md`.

**Contents rail.** `ArticleShell` builds it from the rendered `<h2>` elements, so it cannot fall out of sync with the page.

**Every claim carries a source (principle 2).** `components/citation.tsx`. A page declares its references once, in citation order, and wraps its body in `<Citations ids={…}>`. Prose then cites by key, `<Cite id="MV-WATER-22" />`, and the marker's number comes from that declared order, so the numbering and the `<ReferenceList />` at the foot of the page cannot drift apart. The marker is a button, not a jump link: the reference opens in place, because sending a reader to the bottom of the page to check a claim means they don't. An unregistered key renders `[?]` rather than failing silently. `Citations` resolves the declared keys on the server and passes only those entries to the client, so a page ships the documents it cites rather than the whole 325-entry register.

**Placeholders are labelled as placeholders, and only where one is honest.** Every map slot promising liquefaction susceptibility has been removed rather than recaptioned: the layers carry terms the site will not meet, so that graphic is not coming, and a placeholder for it would be a promise rather than a label. See `licensing.md`.

---

## The preview bundle

`preview/` builds the whole site into one self-contained HTML file for review — hash routing instead of real URLs, client-rendered, but fully interactive. It exists so the layout can be shared without deploying.

```bash
node preview/build.mjs
npx @tailwindcss/cli -i preview/preview.css -o preview/dist/app.css --minify
```

Then concatenate `app.css` and `app.js` into a single HTML file around `<div id="root"></div>`. Not part of the production build; `out/` never contains it.

---

## What a page tells a search engine

`src/content/metadata.ts` builds every page's `Metadata`. A route passes its module's `meta` to `metadataFor` and gets a title, a description, a canonical URL and a social card back; the two pages with no module, `/sources/` and `/licences/`, pass the same three fields by hand. Nothing about the shape of a page's metadata is written twice.

- **`PageMeta.description` is required.** One or two plain sentences, no markup and no citation marker, compressed from the page's own standfirst. A page without one falls back to the site tagline and every result for the site then reads the same, which is why the field is not optional. `SystemEntry.hook` stands in on a page whose body is not written, the way it already stands in as the standfirst.
- **`/robots.txt` and `/sitemap.xml`** are `src/app/robots.ts` and `src/app/sitemap.ts`, written into the export at build. The sitemap enumerates `ALL_ROUTES`, derived from `NAV` and `UTILITY_NAV`, so a page the navigation knows about cannot be missing from it. Entries carry a URL and nothing else: see `knowledge/build.md` on why there is no `lastmod`.
- **The social card** is `src/app/opengraph-image.tsx`, drawn at build time and the same on every page, with each page's own title and description on top of it. Both generated routes need `export const dynamic = "force-static"` under `output: "export"`, and the card needs a `Content-Type` header in `netlify.toml` because a generated image is written without a file extension.
- **Structured data** is two blocks in `src/components/structured-data.tsx`: the site says what it is once in the root layout, and a page inside a part says where it sits. Both restate what the page already shows.
- **`/404` is the one page that asks not to be indexed.** Everything else carries `index, follow`, a canonical URL with its trailing slash, and a `googlebot` line lifting the default snippet and image-preview limits. Verify on the export rather than the source: `grep -o '<meta name="robots"[^>]*>' out/**/index.html`.

---

## Analytics

`src/components/analytics.tsx`, rendered once in the root layout, loads GA4's `gtag.js` through `next/script` at `afterInteractive`.

- **The property is build configuration, not content.** `NEXT_PUBLIC_GA_ID` is read at build time — a static export has no server to read it per request — so the ID is inlined into the HTML by the build that produced it. It belongs in Netlify's build environment; `.env.example` records the name. A build without it renders no script and makes no third-party request, which is what `next dev`, a QA pass over `out/` and a fork all want.
- **The ID is validated against `G-…` before it is used.** It is written into an inline script, and a value pasted with its quotes would put broken JavaScript on every page, where the only symptom is that nothing is ever reported.
- **No page view is sent for a client-side navigation.** gtag.js sends one on load and GA4's enhanced measurement counts the rest from History API events, which is what soft navigation between pages does. Sending our own as well would count those pages twice — so if page views look doubled, that setting is the first place to look.
- **This is the site's one third-party request.** Everything else, typefaces included, is served from the site's own origin. A privacy note in the copy is an open question, not something the code decides.

---

## Before launch

- `SITE.status` draft banner in `site.ts` — remove it.
- `npm run lint` runs `next lint`, which Next 16 removed. It needs replacing or dropping.
- Typefaces are Libre Franklin and JetBrains Mono, loaded through `next/font/google` in `layout.tsx`, which downloads and self-hosts them at build time so no reader's browser asks Google for a font. Analytics is the one third-party request the site makes; see above. `layout.tsx` and `globals.css` are the only files that name a typeface, and this line previously said something else; check the code before trusting it.
