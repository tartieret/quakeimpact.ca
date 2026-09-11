# Where the research stands

*Updated 10 September 2026. This replaces the working plan for the split, which is
complete. Read this first when picking the project back up.*

---

## What happened

`docs/research.md` — one 542-line file — became `docs/research/`: 25 files, ~9,000
lines, with a 270-source register that verifies clean in both directions. Three
research rounds: eight sweeps to validate and fill gaps, six to reach documents the
first round could not, and two targeted follow-ups on dams and on City of Vancouver
preparedness advice.

Ten of thirteen systems now carry an assessed band, against six of twelve at the
start. The province's own operational plans — PEIRS and the DCRRA — carried more than
every other source combined, and neither had been found before.

## What was wrong, and is now corrected

Five load-bearing claims did not survive:

- **"BC still advises 72 hours."** The cited guide says two weeks, three times.
- **Losses exceeding insurance capacity.** That compared economic loss against
  *insured*-loss capacity. The published insured figures are below it.
- **"No BC mutual-aid document exists."** PEIRS states the position directly.
- **"FortisBC does not address earthquake at all."** An argument from silence; the
  contradicting document was behind a 403 that was a User-Agent check.
- **"No current dam safety assessment exists."** Both reviews exist and are published
  annually. The site's own search returns HTTP 500.

Each is recorded in the file it affected as a withdrawal, not a silent edit.

## The decisions that are closed

Seven, in `site-overview.md` §9. The three most recent: **weather** leaves `SYSTEMS`
and becomes a scenario condition; **gas** joins as a system; **electricity** bands
High but the page does not generalise beyond downtown — which produced a style rule
about preferring the specific sourced fact to the smoothed general one.

## The two decisions still open

1. **Expert review before launch.**
2. **Whether the site archives its own sources.** Several citations already point at
   web archives because the publisher reorganised or the host died. Two federal hosts
   went to NXDOMAIN during this project.

## What has not been started

- **`src/content/site.ts`.** Deliberately untouched — the work was scoped to `docs/`.
  Bands there are scaffolding and disagree with the evidence in seven of twelve rows;
  `mechanism` is lorem and `source` is `"TBD"` in all twenty-four cells; and weather
  and gas still need swapping. `research/impact-bands.md` holds the assessed values
  and the row-by-row reconciliation.
- **`docs/copy/`.** Does not exist. Research prose cannot be pasted into pages —
  roughly one sentence in four is the project talking about itself, which is correct
  in a research file and fatal on a page.

## Where to look for what

| Question | File |
| --- | --- |
| What do we believe, and on what evidence? | `research/` — one file per subject |
| What is still unknown, and what was searched? | `research/open-questions.md` (36 items, 1 blocking) |
| What band, and why? | `research/impact-bands.md` |
| Where does a source key resolve? | `research/sources.md` |
| What may we reproduce? | `licensing.md` — BC government material is all rights reserved by default |
| How do we work, and what have we learned the hard way? | `knowledge.md`, `research/CONVENTIONS.md` |

## One thing worth reading before doing more research

`knowledge.md` has fourteen entries and they converge on a single theme: **the ways a
research process manufactures a false absence or false corroboration.** Broken
searches, 403s recorded as unavailability, correct citations to documents that do not
say the thing, one model quoted by three governments, two figures that look like a
range but are a layout bug, a failed fetch saved with a `.pdf` extension.

Every one cost this project a wrong finding before it became a rule. They are cheaper
to read than to rediscover.
