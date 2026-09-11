# Where the research stands

*Updated 10 September 2026. Read this first when picking the project back up. It is an
orientation note, not a plan — the plan it replaced is finished.*

---

## What exists

`docs/research/` — 25 files, roughly 10,500 lines, with a 347-source register that
verifies clean in both directions: every key used resolves, and every key registered is
either used or explicitly retired. One file per subject, plus `sources.md`,
`open-questions.md`, `impact-bands.md` and `CONVENTIONS.md`.

Three research rounds. Eight sweeps to validate and fill gaps, six to reach documents
the first round could not, and a third round of twelve that closed or narrowed twenty
further items. Ten of thirteen systems now carry an assessed band, against six of
twelve at the start.

The province's own operational plans — **PEIRS** and the **DCRRA** — carried more than
every other source combined, and neither had been found before. PEIRS in particular now
supplies the experience narrative, the hospital names, the communications position, the
supply-chain passage, the biological-hazards passage and the two-week
self-sufficiency instruction, quoted directly.

## What was wrong, and is now corrected

Eight load-bearing claims did not survive. Three of them died because *a search that
worked returned nothing* — which is a finding, not a failure.

- **"BC still advises 72 hours."** The cited guide says two weeks, three times.
- **Losses exceeding insurance capacity.** That compared economic loss against
  *insured*-loss capacity. The published insured figures are below it.
- **"No BC mutual-aid document exists."** PEIRS states the position directly.
- **"FortisBC does not address earthquake at all."** An argument from silence; the
  contradicting document was behind a 403 that was a User-Agent check.
- **"No current dam safety assessment exists."** Both reviews exist and are published
  annually. The site's own search returns HTTP 500.
- **"No OAG follow-up has ever been published."** It was, and it reports
  implementation at 2 of 9 recommendations as at 31 March 2025.
- **Wahleach's consequence classification.** Extreme in the draft; Very High in the
  source.
- **"Metro Vancouver states no seismic objective for sanitation."** Withdrawn — the
  search that produced the absence was not strong enough to carry it.

Each is recorded in the file it affected as a withdrawal, not a silent edit. That is a
convention, not a courtesy: a reader who finds the old claim elsewhere needs to be able
to see that we know.

## What was retired rather than corrected

**The West Berlin 1948–49 airlift comparison.** Not wrong — the arithmetic survived
verification — but it needed three caveats to be stated fairly, and a comparison that
takes three caveats is not teaching a reader anything they can act on. What it was
carrying, the water-demand arithmetic against the Sphere humanitarian standards,
stands on its own and is stronger without it. The local version is better still:
Annacis Island normally treats about **430 litres per person per day** against a Sphere
emergency minimum of **15**. See `research/analogues.md`.

## Where the review stands

Every research file carries a **review-status header** in two states, `unreviewed` and
`validated`, as an HTML comment and a visible blockquote line. All 25 are currently
`unreviewed`. The project owner validates them one at a time; validation expires on a
substantive edit. The check, and the reason "status" means two different things in this
project, are in `research/CONVENTIONS.md`.

```bash
grep -L '^<!-- review-status: validated -->' docs/research/*.md docs/research/systems/*.md
```

## The decisions that are closed

Seven, in `site-overview.md` §9. The three most recent: **weather** leaves `SYSTEMS` and
becomes a scenario condition; **gas** joins as a system; **electricity** bands High but
the page does not generalise beyond downtown — which produced a style rule about
preferring the specific sourced fact to the smoothed general one.

## The decisions still open

Three, also in §9.

1. **Expert review before launch.**
2. **Renaming "Absence of outside help" to "Where help comes from."** The only row in
   `SYSTEMS` named for a negative, and the name states a conclusion the evidence does
   not support. Touches `src/content/site.ts` — one array entry.
3. **Whether the site archives its own sources.** Several citations already point at web
   archives because the publisher reorganised or the host died. **Two federal hosts went
   to NXDOMAIN during this project's lifetime**, the second of them while the Berlin
   material was being retired. A site whose whole proposition is that its sources check
   out should not depend on other people's links holding.

## What has not been started

- **`src/content/site.ts`.** Deliberately untouched — the work was scoped to `docs/`.
  Bands there are scaffolding and disagree with the evidence in seven of twelve rows;
  `mechanism` is lorem and `source` is `"TBD"` in all twenty-four cells; and weather and
  gas still need swapping. `research/impact-bands.md` holds the assessed values and the
  row-by-row reconciliation. The one code change made so far is the removal of the
  Berlin section from `src/app/sources/page.tsx`.
- **`docs/copy/`.** Does not exist. Research prose cannot be pasted into pages — roughly
  one sentence in four is the project talking about itself, which is correct in a
  research file and fatal on a page.

## Where to look for what

| Question | File |
| --- | --- |
| What do we believe, and on what evidence? | `research/` — one file per subject |
| What is still unknown, and what was searched? | `research/open-questions.md` — 36 items, 1 blocking |
| What band, and why? | `research/impact-bands.md` |
| Where does a source key resolve? | `research/sources.md` |
| What may we reproduce, and what may we quote? | `licensing.md` — the two are not the same question |
| How do we work, and what have we learned the hard way? | `knowledge.md`, `research/CONVENTIONS.md` |

## One thing worth reading before doing more research

`knowledge.md` has eighteen entries and they converge on a single theme: **the ways a
research process manufactures a false absence or a false corroboration.** Broken
searches, 403s recorded as unavailability, correct citations to documents that do not
say the thing, one model quoted by three governments, two figures that look like a range
but are a layout bug, a failed fetch saved with a `.pdf` extension, a working search run
over the wrong unit of publication.

The newest entry is the sharpest: **before believing a negative from a host, confirm the
host can produce a positive.** A control query that returns nothing means the search is
broken, not that the document is absent.

Every one of these cost this project a wrong finding before it became a rule. They are
cheaper to read than to rediscover.
