# Knowledge

Things learned while building the site that outlive the change that taught them:
sources worth keeping, quirks of the stack, decisions and the reason behind them.

Not a changelog. If something belongs to the spec it goes in `site-overview.md`;
if it belongs to the voice it goes in `style-guide.md`. This file is for the rest.

Newest entries at the top. Each entry: a short heading, what was learned, and how
it was confirmed.

---

## Citation markers render inside a paragraph, so they carry no block elements

The inline citation popover (`components/citation.tsx`) sits inside running
prose, which means its markup is nested inside a `<p>`. A `<p>` or `<div>` in
there is invalid HTML and the browser closes the paragraph early, which breaks
the static export on hydration. The panel is built from `<span className="block">`
instead. Confirmed by reading the exported HTML in `out/leaving/index.html` and
clicking through the page in Chromium.

## Citation numbering comes from a declared order, not from render order

Each page lists its reference keys once, in the order it cites them, and the
marker looks its number up in that list. Auto-numbering by render order would
need client-side registration and goes wrong under conditional rendering; the
declared list also doubles as the reference list at the foot of the page, so
there is one source of truth rather than two that can drift.
