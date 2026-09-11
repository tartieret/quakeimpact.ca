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
                        systems, dependency graph, prepare
/scenarios/             the two scenarios side by side + full system matrix
/shaking/               Part 1 index
/shaking/[slug]/        ground, buildings, casualties, fire-following,
                        secondary-hazards
/after/                 Part 2 index — timeline + system grid by build tier
/after/[slug]/          13 system pages
/getting-around/        Part 2b — moving after the shaking
/dependencies/          the dependency graph
/prepare/               Part 3
/method/                band rubric, principles, assumption discipline
/sources/               the source register, rendered from REFERENCES
/contribute/            what the project can use, and how to send it
/about/
/licences/              attribution strings, per-dataset licence positions
```

33 statically exported pages. Re-derive the count from `npm run build` rather than trusting this line.

---

## Content model

Structured content lives in `src/content/site.ts` and page prose in
`src/content/pages/`. The route templates hold neither.

- `SITE` — name, domain, tagline, draft status banner
- `SCENARIOS` — the two scenarios and their comparison rows, including the named official simulation behind each and the `conditions` field. **Weather is a scenario condition, not a system**: it does not fail, so it cannot carry a band, and both official scenarios set one in opposite directions. `TimelineStrip` renders the condition for the selected scenario, and `/scenarios/` shows the two side by side
- `BANDS` — the rubric from overview section 4, including `unknown`
- `PHASES` — hours / days / weeks / months
- `SYSTEMS` — the thirteen systems, each with hook, `bitesAt` phase, per-scenario impact, `dependsOn` edges, and build tier from overview section 8. Food and fuel are separate entries: fuel is an input every other system's repair competes for, food is a demand that cannot be stored, and merging them hides the edge between them. `weather` is not among them and `gas` is — the count stays at thirteen
- **The bands and the prose around them both come from the research.** `research/impact-bands.md` holds the assignment per system per scenario, and `SYSTEMS` matches it row for row. `SystemEntry.hook`, `Impact.mechanism` and `Impact.source` are real, and `ImpactCell` resolves the source key against `REFERENCES` and renders the document. `Impact.evidence` carries the per-scenario caveat where the mechanism sentence was measured on one earthquake and the column it sits in is the other, so a reader on the crustal toggle is not shown a megathrust figure with nothing saying so.
- `SHAKING_PAGES`, `NAV`, `UTILITY_NAV`

`src/content/references.ts` holds `REFERENCES`, the source register: one entry per document, keyed by citation key. Entries carry kind, title, publisher, date, href, route, licence and a one-line note. `kind: "page"` is an internal reference — a claim can point at the page that carries the reasoning. **The file is generated** from `research/sources.md` by `scripts/build-references.mjs`, wired as `npm run references`, so a corrected date or URL propagates in one edit. Do not edit it by hand.

`src/content/pages/` holds one module per written page: `meta`, an array of sections and an optional lever. The array is what makes a wrong page hard to write — every `<h2>` comes from a section title, so a heading cannot miss the contents rail, and `meta.references` is the page's citation contract. See that folder's `README.md`.

Adding a system is one array entry. It then appears in the grid, the matrix, the dependency list and the prepare page, and gets its own exported page, with no other change.

---

## How the principles are enforced in code

**Presentation rule (overview section 4).** `ImpactCell` cannot render a band without a mechanism sentence and a source link — the component's props require all three. There is no way to ship a bare coloured cell.

**Severity survives without colour.** `BandMeter` draws three segments filled 1/2/3. Works in greyscale, in print, and for colour-blind readers.

**"Not yet assessed" is a fourth band.** Hatched, never coloured. Dams and reservoirs ship in that state deliberately, as does large infrastructure in the crustal column — the assumption discipline in overview section 5 becomes visible on the page instead of hidden in a backlog. `VerificationNote` does the same for open research questions.

**No doom without a lever (principle 3).** Every page describing a consequence ends with a `Lever` block. `lever` is optional on a page module only so that a page carrying no doom, such as `/method/`, is not made to manufacture an action.

**The scenario toggle.** One global control, header-mounted, persisted to `localStorage`. Every band reads from it. But system pages show **both** scenarios side by side regardless — the contrast is the teaching point, so the toggle never hides one.

**Contents rail.** `ArticleShell` builds it from the rendered `<h2>` elements, so it cannot fall out of sync with the page.

**Every claim carries a source (principle 2).** `components/citation.tsx`. A page declares its references once, in citation order, and wraps its body in `<Citations ids={…}>`. Prose then cites by key, `<Cite id="MV-WATER-22" />`, and the marker's number comes from that declared order, so the numbering and the `<ReferenceList />` at the foot of the page cannot drift apart. The marker is a button, not a jump link: the reference opens in place, because sending a reader to the bottom of the page to check a claim means they don't. An unregistered key renders `[?]` rather than failing silently. `Citations` resolves the declared keys on the server and passes only those entries to the client, so a page ships the documents it cites rather than the whole 325-entry register.

**Placeholders are labelled as placeholders, and only where one is honest.** The dependency graph slot says it is not drawn and shows its live edge list underneath. Every map slot promising liquefaction susceptibility has been removed rather than recaptioned: the layers carry terms the site will not meet, so that graphic is not coming, and a placeholder for it would be a promise rather than a label. See `licensing.md`.

---

## The preview bundle

`preview/` builds the whole site into one self-contained HTML file for review — hash routing instead of real URLs, client-rendered, but fully interactive. It exists so the layout can be shared without deploying.

```bash
node preview/build.mjs
npx @tailwindcss/cli -i preview/preview.css -o preview/dist/app.css --minify
```

Then concatenate `app.css` and `app.js` into a single HTML file around `<div id="root"></div>`. Not part of the production build; `out/` never contains it.

---

## Before launch

- `robots: { index: false }` in `src/app/layout.tsx` — flip it.
- `X-Robots-Tag` in `netlify.toml` — remove it.
- `SITE.status` draft banner in `site.ts` — remove it.
- Fourteen pages carry evidence and no body text: ten systems and four of the five Part 1 pages. Each says so. They are the build backlog, not defects.
- `npm run lint` runs `next lint`, which Next 16 removed. It needs replacing or dropping.
- Typefaces are Libre Franklin and JetBrains Mono, loaded through `next/font/google` in `layout.tsx`, which downloads and self-hosts them at build time so the served site makes no third-party request. `layout.tsx` and `globals.css` are the only files that name a typeface, and this line previously said something else; check the code before trusting it.
