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
/after/[slug]/          12 system pages
/leaving/               Part 2b — who can actually leave
/dependencies/          the dependency graph
/prepare/               Part 3
/method/                band rubric, principles, assumption discipline
/sources/               source register
/about/
```

30 statically exported pages.

---

## Content model

Everything lives in `src/content/site.ts`. The route templates hold no content.

- `SITE` — name, domain, tagline, draft status banner
- `SCENARIOS` — the two scenarios and their comparison rows
- `BANDS` — the rubric from overview section 4, including `unknown`
- `PHASES` — hours / days / weeks / months
- `SYSTEMS` — the twelve systems, each with hook, `bitesAt` phase, per-scenario impact, `dependsOn` edges, and build tier from overview section 8
- `SHAKING_PAGES`, `NAV`, `UTILITY_NAV`

Adding a system is one array entry. It then appears in the grid, the matrix, the dependency list and the prepare page, and gets its own exported page, with no other change.

---

## How the principles are enforced in code

**Presentation rule (overview section 4).** `ImpactCell` cannot render a band without a mechanism sentence and a source link — the component's props require all three. There is no way to ship a bare coloured cell.

**Severity survives without colour.** `BandMeter` draws three segments filled 1/2/3. Works in greyscale, in print, and for colour-blind readers.

**"Not yet assessed" is a fourth band.** Hatched, never coloured. Port, airport and ferry terminals ship in that state deliberately — the assumption discipline in overview section 5 becomes visible on the page instead of hidden in a backlog. `VerificationNote` does the same for open research questions.

**No doom without a lever (principle 3).** Every long page ends with a `Lever` block.

**The scenario toggle.** One global control, header-mounted, persisted to `localStorage`. Every band reads from it. But system pages show **both** scenarios side by side regardless — the contrast is the teaching point, so the toggle never hides one.

**Contents rail.** `ArticleShell` builds it from the rendered `<h2>` elements, so it cannot fall out of sync with the page.

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
- Source keys are all `"TBD"`. The `source` field on `Impact` is a plain string and should become a key into a real source register.
- Typeface is a Georgia stack, chosen so the build has no network dependency. `src/app/globals.css` is the only file that names a typeface.
