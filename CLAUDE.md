# QuakeImpact

Public-information site about what a major earthquake does to the Lower Mainland.
Next.js App Router, static export, TypeScript strict, Tailwind v4 (CSS-first, no
`tailwind.config.js`).

## Read before you write

- `docs/site-overview.md` — the spec. If a claim is not in it or carries no
  source, it does not go on the site.
- `docs/style-guide.md` — **read before writing or editing any copy, heading,
  label or alt text.** Tone, sentence rules, word list, visual language and
  accessibility are decisions backed by risk-communication research, not
  preferences. Do not soften, dramatise or "improve" them in passing.
- `docs/stack-and-structure.md` — how the site is built.

## Content lives in one place

`src/content/site.ts` holds scenarios, bands, systems, phases and navigation.
Route templates hold no content. Adding a system is one array entry — it then
appears in the grid, matrix, dependency list, prepare page and its own exported
page with no other change.

Body text lives in `src/content/pages/`, one typed module per page, ported from
the reviewed copy in `docs/copy/`. See `src/content/pages/README.md` for the
contract. There is no markdown pipeline and there will not be one.

A page whose evidence is gathered and whose text is not written says so, and
carries its real band, mechanism and source in the meantime. Placeholders must
stay honestly labelled: nothing should look more finished than it is, and a
placeholder for a graphic the site will never be licensed to draw is worse than
no placeholder at all.

## Accessibility is a requirement, not a pass at the end

- WCAG AA contrast minimum, including large display type.
- Never meaning in colour alone — bands pair colour with the segment meter and a
  written label.
- Heading levels in order; the contents rail is built from real `<h2>` elements.
- Every control keyboard-reachable with a visible focus state.
- Alt text states the finding, not the file.
- Phone width and dark mode both work.

Prefer semantic HTML over ARIA. Reach for a `<button>`, `<nav>`, `<details>`
before recreating them with divs and roles.

## React

- Server Components by default. `"use client"` only where interaction or
  `localStorage` demands it (currently the scenario toggle and its provider).
- No new global state. Scenario is the one global control; anything else is
  props.
- Components stay presentational — data shape comes from `src/content/types.ts`.
- No new dependencies without asking. The build has no network dependency at
  runtime and should stay that way.

## Tailwind

- Design tokens live in `src/app/globals.css`, the only file naming a typeface.
  Add a token there rather than hardcoding a hex value in a component.
- Utilities in the markup; no `@apply` soup, no parallel stylesheet.
- Conditional classes: full class strings, never string-built names — Tailwind
  cannot see them otherwise.
- Reuse the existing spacing and type scale before inventing a value.

## Adding knowledge

Anything learned that outlives the change — a source, a quirk of the stack, a
decision and its reason — goes in `docs/knowledge.md`. If it belongs to the spec
or the voice, it goes in the overview or the style guide instead. Assumptions are
research tasks: record them as verification items rather than shipping them.

## Checks

```bash
npm run typecheck   # what CI runs on every PR
npm run build       # static export to out/
npm run dev
```

Run typecheck before pushing.

## Pull requests

Describe what changed and why in prose. Do not quote code in the description —
the diff already carries it.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
