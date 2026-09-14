# QuakeImpact

Public-information site about what a major earthquake does to the Lower Mainland.
Next.js App Router, static export, TypeScript strict, Tailwind v4 (CSS-first, no
`tailwind.config.js`).

This file is the one set of instructions for Claude Code and Codex; `CLAUDE.md`
imports it. It is loaded into every conversation, so it holds only what applies to
every task. Anything narrower belongs in the document for that task.

## Read what the task needs

Before starting, read the document for the kind of work, not all of them.

| Task | Read first |
|---|---|
| Any copy, heading, label or alt text | `docs/style-guide.md`. Its tone, sentence rules and word list are decisions backed by risk-communication research. Do not soften, dramatise or "improve" them in passing. |
| A claim, a band, or a page's structure | `docs/site-overview.md`, the spec. A claim that has no source in `docs/research/` does not go on the site. |
| Components, routes, the content model | `docs/stack-and-structure.md`, `src/content/pages/README.md` |
| A figure or a map | `src/components/figures/README.md` |
| Research files or the source register | `docs/research/CONVENTIONS.md`, the header of `docs/research/sources.md` |
| Photographs or datasets | `docs/media.md`, `docs/licensing.md` |

When something in the stack, the QA scripts or a source host behaves oddly, grep
`docs/knowledge/` before debugging it.

## Content lives in one place

`src/content/site.ts` holds scenarios, bands, systems, phases and navigation. Route
templates hold no content. Adding a system is one array entry, and it then appears
everywhere it should.

Body text lives in `src/content/pages/`, one typed module per page, ported from the
reviewed copy in `docs/copy/`. There is no markdown pipeline and there will not be one.

A page whose evidence is gathered and whose text is not written says so, and carries
its real band, mechanism and source in the meantime. Nothing should look more finished
than it is, and a placeholder for a graphic the site will never be licensed to draw is
worse than none. Assumptions are research tasks: they go in
`docs/research/open-questions.md`, not on the site.

## General information, not a bibliography

The copy gives a reader a representative picture of what a major earthquake does,
not a reproduction of its sources. Every claim still rests on a source, but:

- Write at the order of magnitude the source supports. "Two to three weeks in some
  scenarios" can be "several weeks". Don't change the order of magnitude, the
  severity, or the kind of place a finding is about.
- Cite with a bracketed marker, rendered as [1], and paraphrase. Quote only when the
  source's own words carry the point.
- Drop qualifiers that only say a figure is uncertain or comes from one scenario.
  Keep the ones that change what a reader should take away.

`docs/style-guide.md` §1, §5 and §6 have the detail.

## Accessibility is a requirement, not a pass at the end

- WCAG AA contrast, including large display type, and 3:1 for any mark a reader needs.
- Never meaning in colour alone: bands pair colour with the segment meter and a label.
- Heading levels in order; the contents rail is built from real `<h2>` elements.
- Every control keyboard-reachable with a visible focus state. A box with
  `overflow-x-auto` needs `tabIndex={0}`, `role="region"` and a name.
- Alt text states the finding, not the file.
- Phone width and dark mode both work.

Prefer semantic HTML over ARIA: a `<button>`, `<nav>` or `<details>` before divs and roles.

## React

- Server Components by default. `"use client"` only where interaction demands it
  (the header menu, the contents rail, the citation popover, the map pane).
- A client file ships every data module it imports. Resolve lookups on the server and
  pass the result across.
- No client-side global state; anything else is props. Components stay
  presentational, and data shape comes from `src/content/types.ts`.
- No new dependencies without asking. The build has no network dependency at runtime.

## Tailwind

- Design tokens live in `src/app/globals.css`, the only file naming a typeface. Add a
  token there rather than hardcoding a hex value.
- Utilities in the markup; no `@apply` soup, no parallel stylesheet.
- Conditional classes are full class strings, never built from parts.
- Reuse the existing spacing and type scale before inventing a value.

## Recording what was learned

A lesson that outlives the change goes in the matching file in `docs/knowledge/`:
`research.md`, `build.md` or `design.md`. Write the rule, the reason and where it is
enforced, not the story of finding it. If the lesson belongs to the spec, the voice,
the figures README or the research conventions, put it there instead and do not
repeat it in `docs/knowledge/`. Delete an entry once the code or a doc makes it
redundant.

## Checks

```bash
npm run typecheck   # what CI runs on every PR; run it before pushing
npm run build       # static export to out/; restore tsconfig.json if it rewrites it
npm run dev
```

## Pull requests

Describe what changed and why in prose. Do not quote code in the description.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
