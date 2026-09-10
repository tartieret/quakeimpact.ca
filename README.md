# QuakeImpact

What a major earthquake does to the Lower Mainland — and for how long.
**quakeimpact.ca**

Structural scaffold.
**All body text is lorem ipsum.** Titles, labels, navigation, the band rubric
and the system list are real. Nothing here is publishable content.

## Stack

| | |
|---|---|
| Framework | Next.js 15, App Router, **static export** (`output: "export"`) |
| Language | TypeScript, strict |
| Styling | Tailwind CSS v4 (CSS-first config, no `tailwind.config.js`) |
| Hosting | Netlify — `netlify.toml` publishes `out/` |

```bash
npm install
npm run dev        # localhost:3000
npm run build      # emits out/
npm run typecheck
```

CI runs `npm run typecheck` on every pull request (`.github/workflows/ci.yml`).
Dependabot opens grouped dependency PRs monthly; Next, React and TypeScript
majors are excluded — those are migrations, not bumps.

## Documentation

`docs/` is the project knowledge base and the source of truth for content:

- `docs/site-overview.md` — purpose, principles, scenarios, band rubric, full
  content structure, sources, build order, open decisions. **Read this first.**
- `docs/style-guide.md` — tone, voice, visual language, accessibility. Read
  before writing any page.
- `docs/stack-and-structure.md` — how the site is built.

## Where things live

```
src/content/site.ts     ← the whole content model: scenarios, bands,
                          systems, navigation. Edit this, not the pages.
src/content/types.ts    ← shapes. Impact = band + mechanism + source.
src/content/lorem.ts    ← placeholder text. Delete when real copy lands.
src/components/         ← design system + page blocks
src/app/                ← routes
src/app/globals.css     ← design tokens (colour, type). Only file naming a typeface.
```

Adding a system is one entry in `SYSTEMS` in `site.ts`. It appears in the
grid, the matrix, the dependency list, the prepare page and gets its own
statically-exported page at `/after/<slug>/` with no other change.

## Routes

```
/                       hero, misconception, scenarios, ground, timeline,
                        systems, dependency graph, prepare
/scenarios/             the two scenarios side by side + full matrix
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

## Decisions baked into the structure

**One global control: the scenario toggle.** Held in `ScenarioProvider`,
persisted to `localStorage`, shown in the header. Every band on every page
reads from it. System pages additionally show both scenarios side by side —
the contrast is a teaching point, so the toggle never hides one.

**Bands never appear as a bare coloured cell.** `ImpactCell` enforces
band → one sentence of mechanism → source link. `BandMeter` renders the
ordinal as three filled segments, so severity survives greyscale, printing
and colour blindness.

**"Not yet assessed" is a first-class band.** Hatched, never coloured. Port,
airport and ferry terminals ship in that state deliberately — assumption
discipline is visible on the page rather than hidden in a backlog.

**Every long page ends with a `Lever`.** No doom without one.

**`VerificationNote`** shows open research questions in public.

**Contents rail** (`ArticleShell`) on pages with many sections; auto-built
from the rendered `<h2>`s, so it cannot fall out of sync.

**Placeholders are honestly labelled.** Map and graph slots say they are not
built and name the dataset as TBD, so nothing reads as finished.

## Before launch

- Replace `src/content/lorem.ts` usage everywhere.
- `robots: { index: false }` in `src/app/layout.tsx` — flip it.
- `SITE.status` draft banner in `site.ts` — remove it.
- `SITE.name` is a working title.
- Source keys are all `"TBD"` and `/sources/` links are unresolved. A real
  source register with stable keys should replace the string field on `Impact`.
