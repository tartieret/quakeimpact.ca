# QuakeImpact

What a major earthquake does to the Lower Mainland, and for how long.
**[quakeimpact.ca](https://quakeimpact.ca)**

A public-information site that walks a reader through a major earthquake in the
order they would meet it: the shaking, the weeks after, getting around, and what
to prepare. Every claim rests on a source in `docs/research/`. Both scenarios, a
Cascadia M9 megathrust and a shallow crustal M7, are shown side by side wherever
they differ.

## Stack

| | |
|---|---|
| Framework | Next.js 16, App Router, **static export** (`output: "export"`) |
| Language | TypeScript, strict |
| Styling | Tailwind CSS v4 (CSS-first config, no `tailwind.config.js`) |
| Hosting | Netlify; `netlify.toml` publishes `out/` |

```bash
npm install
npm run dev          # localhost:3000
npm run build        # static export to out/
npm run typecheck    # what CI runs on every pull request
npm run references   # regenerate src/content/references.ts from docs/research/sources.md
npm run data         # rebuild the vendored datasets in src/data/ (the only step that uses the network)
node scripts/qa/audit.mjs   # rendered-output QA over out/, phone and desktop, both themes
```

Set `NEXT_PUBLIC_GA_ID` in the Netlify build environment to report to a GA4
property; see `.env.example`. A build without it loads no analytics, which is
what a local build and a fork should do.

CI runs `npm run typecheck` on every pull request (`.github/workflows/ci.yml`).
Dependabot opens grouped dependency PRs monthly; Next, React and TypeScript
majors are excluded, because those are migrations, not bumps.

## Where things live

```
src/content/site.ts        scenarios, bands, phases, systems, navigation
src/content/pages/         body text, one typed module per page
src/content/references.ts  the source register (generated, do not edit)
src/content/types.ts       content shapes
src/components/            page blocks; figures/ holds maps and charts
src/data/                  vendored, reduced datasets with their provenance
src/app/                   routes; they hold no content
src/app/globals.css        design tokens; the only stylesheet naming a typeface
docs/                      the spec, style guide, research and licensing
```

Adding a system is one entry in `SYSTEMS` in `site.ts`. It then appears in the
grid, the matrix, the related-systems lists and the prepare page, and gets its
own exported page at `/after/<slug>/`.

## Documentation

`docs/` is the source of truth. Start at `docs/README.md`, which indexes it.
The documents most tasks need:

- `docs/site-overview.md`: purpose, principles, scenarios, band rubric, content
  structure.
- `docs/style-guide.md`: tone, voice and accessibility. Read before writing any
  copy.
- `docs/stack-and-structure.md`: routes, content model, how the principles are
  enforced in code, and what remains before launch.
- `docs/research/`: the evidence base and the source register.
- `docs/licensing.md`, `docs/media.md`: what may be reproduced, and the credit
  it is owed.

`AGENTS.md` is the one set of project instructions for Claude Code and Codex.
Codex reads it directly and `CLAUDE.md` imports it with `@AGENTS.md`. It is read
in every conversation, so it holds only rules that apply to every task and
points at the document for anything narrower. `next dev` maintains the Next.js
block at its foot.

## License

Code is MIT; see [LICENSE](LICENSE). Datasets, photographs and quoted material
carry their own terms, listed in `docs/licensing.md` and `docs/media.md` and on
the site's `/licences/` page.
