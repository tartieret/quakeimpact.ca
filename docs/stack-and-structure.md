# Stack and site structure

*Companion to `site-overview.md`. How the site is built, and how the principles in the overview are enforced in code.*

---

## Stack

| | |
|---|---|
| Framework | Next.js 15, App Router, **static export** (`output: "export"`) |
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
/leaving/               Part 2b — who can actually leave
/dependencies/          the dependency graph
/prepare/               Part 3
/method/                band rubric, principles, assumption discipline
/sources/               source register + the citation convention
/contribute/            what the project can use, and how to send it
/about/
```

32 statically exported pages. *A `/licences/` route is required by `licensing.md` and does not yet exist; re-derive the count from `npm run build` after it is added.*

---

## Content model

Everything lives in `src/content/site.ts`. The route templates hold no content.

- `SITE` — name, domain, tagline, draft status banner
- `SCENARIOS` — the two scenarios and their comparison rows
- `BANDS` — the rubric from overview section 4, including `unknown`
- `PHASES` — hours / days / weeks / months
- `SYSTEMS` — the thirteen systems, each with hook, `bitesAt` phase, per-scenario impact, `dependsOn` edges, and build tier from overview section 8. Food and fuel are separate entries: fuel is an input every other system's repair competes for, food is a demand that cannot be stored, and merging them hides the edge between them
  **Pending code change, decided 10 September 2026:** `weather` leaves `SYSTEMS` and is rendered on the timeline; `gas` joins it. The count stays at thirteen. Weather was carried with a `medium/medium` band the evidence declines to assign — it is a scenario condition, not a system that fails. See `research/impact-bands.md`.
- **The band values in `SYSTEMS` are scaffolding, not findings.** `research/impact-bands.md` holds the assessed bands, and in most rows the code is currently more confident than the evidence; in several it asserts a band where nothing had been assessed. `Impact.mechanism` is `loremLine()` and `Impact.source` is `"TBD"` in every cell. Do not treat the current values as sourced. **The reconciliation in `research/impact-bands.md` predates the food/fuel split and is written against twelve rows; re-derive it against the thirteen in the code.**
- `SHAKING_PAGES`, `NAV`, `UTILITY_NAV`

`src/content/references.ts` holds `REFERENCES`, the source register: one entry per document, keyed by citation key. Entries carry kind, title, publisher, year, href and a one-line note. `kind: "page"` is an internal reference — a claim can point at the page that carries the reasoning. Every entry is currently flagged `placeholder`, and that flag is what makes the marker and the reference list say so on the page.

Adding a system is one array entry. It then appears in the grid, the matrix, the dependency list and the prepare page, and gets its own exported page, with no other change.

---

## How the principles are enforced in code

**Presentation rule (overview section 4).** `ImpactCell` cannot render a band without a mechanism sentence and a source link — the component's props require all three. There is no way to ship a bare coloured cell.

**Severity survives without colour.** `BandMeter` draws three segments filled 1/2/3. Works in greyscale, in print, and for colour-blind readers.

**"Not yet assessed" is a fourth band.** Hatched, never coloured. Dams and reservoirs ship in that state deliberately, as does large infrastructure in the crustal column — the assumption discipline in overview section 5 becomes visible on the page instead of hidden in a backlog. `VerificationNote` does the same for open research questions.

**No doom without a lever (principle 3).** Every long page ends with a `Lever` block.

**The scenario toggle.** One global control, header-mounted, persisted to `localStorage`. Every band reads from it. But system pages show **both** scenarios side by side regardless — the contrast is the teaching point, so the toggle never hides one.

**Contents rail.** `ArticleShell` builds it from the rendered `<h2>` elements, so it cannot fall out of sync with the page.

**Every claim carries a source (principle 2).** `components/citation.tsx`. A page declares its references once, in citation order, and wraps its body in `<Citations ids={…}>`. Prose then cites by key — `<Cite id="crossing-assessments" />` — and the marker's number comes from that declared order, so the numbering and the `<ReferenceList />` at the foot of the page cannot drift apart. The marker is a button, not a jump link: the reference opens in place, because sending a reader to the bottom of the page to check a claim means they don't. An unregistered key renders `[?]` rather than failing silently. `/leaving/` is the worked example.

**Placeholders are labelled as placeholders.** Map and graph slots say they are not built and name the dataset as TBD.

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

- Replace all uses of `src/content/lorem.ts` — every body sentence on the site is currently placeholder.
- `robots: { index: false }` in `src/app/layout.tsx` — flip it.
- `X-Robots-Tag` in `netlify.toml` — remove it.
- `SITE.status` draft banner in `site.ts` — remove it.
- Every entry in `REFERENCES` is a placeholder pointing at example.org. Replace the entries and drop the `placeholder` flag; nothing else changes.
- Source keys on `Impact` are all `"TBD"`. The `source` field is still a plain string and should become a key into `REFERENCES`, and `ImpactCell` should render the reference rather than linking to `/sources/`.
- Contact details on `/contribute/` — email address and issue tracker link.
- Typeface is a Georgia stack, chosen so the build has no network dependency. `src/app/globals.css` is the only file that names a typeface.
