# Knowledge: build, content pipeline and QA

Quirks of the stack and the reasons behind code-level decisions. How the site is built
is in `../stack-and-structure.md`, the page-module contract in
`src/content/pages/README.md`, and figures in `src/components/figures/README.md`.

## Build and tooling

- **`npm run build` rewrites `tsconfig.json`**: `jsx` to `react-jsx`, a
  `.next/dev/types/**/*.ts` include, and every inline array reformatted. Restore the
  file unless the change is the point of the commit.
- **`next dev` manages the agent-rules block in `AGENTS.md`** and leaves `CLAUDE.md`
  alone as long as `AGENTS.md` carries it
  (`node_modules/next/dist/server/lib/generate-agent-files.js`). Keep `CLAUDE.md` to the
  one-line `@AGENTS.md` import, or both files end up carrying the block.
- **The lockfile has to carry every platform's `@emnapi`.** `@img/sharp-wasm32` and
  `@tailwindcss/oxide-wasm32-wasi` are never installed, but `npm ci` still resolves
  their dependencies, and which ones it asks for differs by platform: Windows wants
  `wasi-threads`, Linux wants `runtime` and `core`. `npm install --package-lock-only`
  writes only the current platform's. All three root entries were added by hand from
  `npm view <pkg>@<range> version dist.integrity dependencies --json`: `@emnapi/runtime`
  is not `dev`, the other two are, and all three are `optional`. Check with
  `npm ci --dry-run --os=linux --cpu=x64`.

## QA scripts

`scripts/qa/` is the whole-site pass. `serve.mjs` serves `out/` the way a host does,
because `file://` resolves neither `about/index.html` nor trailing slashes. `checks.mjs`
measures and `audit.mjs` decides, over 30 routes at 390 px and 1280 px in both themes.
`interaction.mjs` covers tab order, focus rings and the citation popover; `copy.mjs` runs
the style guide's sentence rules over rendered text; `shoot.mjs` writes screenshots.

- **Run from the repo root.** `resolveFile` reads the module-level `ROOT`, resolved from
  `argv[2] ?? "out"` against the working directory; the `root` argument only reaches the
  404 page. Run elsewhere, every route loads the not-found template and looks like a
  page with its figures missing.
- **Console 404s for `/after/__next.after.__PAGE__.txt?_rsc=…` are harmless.** The export
  writes that segment as a directory and the client asks for a flattened filename.
- **Git Bash rewrites a leading `/`** in an argument into a Windows path, so routes reach
  the scripts by environment variable.
- **A mark's ground inside an SVG** is the last opaque shape painted under it, not an
  ancestor's background. `marks()` reports a phantom black fill on every `<line>` and
  `<polyline>`; skip `fill` there before believing the number.
- **Measure an anchor's landing with `scroll-behavior: auto`.** `/sources/` is about
  69,000 px tall and smooth scrolling turns a fragment jump into a seconds-long animation.

## Metadata and search

- **A page that declares its own `openGraph` loses the inherited `opengraph-image`**,
  because metadata merges by top-level key. `CARD` in `src/content/metadata.ts` writes
  the image back. The home page keeps its card regardless, so the one page checked by
  hand is the one that works.
- The generated card has no file extension, so `netlify.toml` gives it a `Content-Type`.
  `next/og` ships its own font and needs no network.
- **No `lastmod` in the sitemap.** A build date marks every URL changed whenever one does,
  which crawlers learn to ignore; `priority` and `changefreq` are read by nobody.
- A page description is compressed from the page's own standfirst, so no new claim is
  written for a search result.

## Page modules and citations

- **The module shape prevents three failures.** Every `<h2>` comes from a
  `PageSection.title`, so no heading exists outside the contents rail. `lever` is a field,
  so the block that makes a page usable cannot dissolve into prose; it is optional only
  because `/method/` carries no doom, and routes spread `LeverProps` into `Lever`.
  `meta.references` is the citation contract: `Cite` numbers a marker by the key's
  position in it and `ReferenceList` reads it, so an undeclared key renders `[?]`.
  Declared order rather than render order, because render-order numbering needs client
  registration and breaks under conditional rendering.
- **A citation marker sits inside a `<p>`**, so its popover is built from
  `<span className="block">`. A `<div>` there closes the paragraph and breaks hydration.
- **Only the first marker for a key carries `id="cite-N"`.** A per-page map in the
  provider records which `useId` claimed the key, so a re-render, Strict Mode and
  hydration all give the id to the same marker.
- **Escape returns focus to the marker.** Unmounting the focused close button otherwise
  drops focus to `<body>`. A pointer dismissal never moved focus and gives nothing back.
- **A `"use client"` file ships what it imports.** `citation.tsx` importing `REFERENCES`
  put the whole register (about 145 KB minified) on every page with a citation. The
  server `citation.tsx` now resolves the page's keys and hands only those entries to
  `citation-client.tsx`; `impact-cell.tsx` is a Server Component and `band.tsx` only
  draws. Importing page modules also pulls in their client components, which is why
  `/sources/` loads the 13 KB chunk the system pages share.
- **`Impact.source` keys are citation keys**, resolved against `REFERENCES`; an unknown
  key fails visibly, as `[?]` does.
- **`Impact.evidence` is written only where the assessment does not model its column.**
  `MV-WATER-22` models the M9 only, so its figure sits in the crustal column; `PEIRS` is
  the crustal M7, so sanitation, fuel and food sit in the Cascadia column. `DCRRA-APPC`'s
  65% is stated at the code's design ground motion, a hazard level rather than a
  scenario, and gets no evidence line. Filled everywhere, it would train readers to skip it.
- **Page state is a field.** `status?: PageStatus` sits on `SystemEntry`, on
  `SHAKING_PAGES` entries and on `meta`; the route reads `page?.meta.status ??
  entry.status`. The notice is an `<aside>` with no heading, because a `<section>` would
  enter the rail and inflate the rail-column count below. The `Draft` marker sits beside
  the `<h1>` so the heading's name stays the title, but inside a card's `<h3>`.
  `SystemMatrix` carries no marker, so "not written" never sits beside "Not yet assessed".
- **Adding a Part 1 page** is one `SHAKING_PAGES` entry plus two hand-kept maps: `MODULES`
  in `src/app/shaking/[slug]/page.tsx` and `ALL_PAGES` in `src/content/pages/index.ts`.
  `NAV` derives its children from `SHAKING_PAGES` and `SYSTEMS`.

## The source register

- **`/sources/` lists what the site cites, not the register.** The register keeps every
  document the research read (332 rows, about 209 cited). `src/content/cited.ts` derives
  the set from `meta.references`, `Impact.source`, `SHAKING_PAGES[].references` and every
  `kind: "dataset"` entry, since `/licences/` names all datasets. A module missing from
  `ALL_PAGES` silently drops its documents from `/sources/`.
- The page is grouped by the Organisation cell with the title leading each entry. No
  filter box, because the page that proves the sourcing must work without JavaScript, and
  no publisher families, because a classifier misfiles the next row.
- **`scripts/build-references.mjs` parses conventions, not rows.** The Source cell takes
  four shapes: `*Title*`, `"Headline"`, `Title — note`, and `Author, "Article",
  *Journal*… **note**`. It splits at whichever comes first, the em dash or the bold run,
  so a title must open the cell and a bold note must open the note. `extractHref` takes
  the first `https://` in the URL cell, so a route that is not the document is written
  without a scheme. `accessNotes()` lowercases the URL cell's first letter, so start that
  cell with an ordinary word. `date` is the cell verbatim, and `year` is derived only
  where the cell is not purely an access date. A document never recovered has an empty
  `href`.
- Licence strings are read by two files and only match if the register spells each
  licence the way `../licensing.md` does.

## CSS, layout and the contents rail

- **`.prose-body` styles bare elements from `@layer components`.** Layer order beats
  specificity: components beat Preflight in `base`, utilities beat components, and a rule
  outside any layer beats all three. `> blockquote` and `> table` are direct-child
  selectors because `Quote` and `DataTable` draw a rule and a border of their own.
- **The rail observes headings, not sections.** A section and its subhead both intersect,
  and the outer one always won. Its query is `main section[id] > h2, main section[id]
  h3[id]`, so an id on an `<h3>` is a request to appear in the rail: 177 publisher
  subheads on `/sources/` made it 8,122 px tall. A heading that only needs to be linkable
  carries its id on a wrapper. The lever is a `<section>` with a direct-child `<h2>` for
  the same reason.
- **The rail column is decided in CSS, from the exported HTML.** The rail renders nothing
  under three headings, so the grid adds its column with
  `:has(>div>section:nth-of-type(3))`, which is settled before first paint. The gap is
  column-only (`lg:gap-x-16`), and the base state names no `grid-template-columns`.
- **A part that contains the current page is `aria-current={true}`**; only the page
  itself is `"page"`.
- **Every `overflow-x-auto` needs a tab stop and a name**: `tabIndex={0}`,
  `role="region"` and `aria-labelledby` pointing at a caption, as `DataTable` and
  `SystemMatrix` do. It was missed twice, so grep for the utility.
