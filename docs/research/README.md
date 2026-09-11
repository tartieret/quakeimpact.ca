# Research

<!-- review-status: unreviewed -->

> **Review status: unreviewed.** Not yet verified by the project owner. Change to
> `validated` with a date once reviewed, in both the comment and this line.
> **Last research pass:** 10 September 2026.


The evidence base. One subject per file, mirroring the structure of the site
itself, so that the page being written and the file being cited sit next to each
other.

This folder is the working record, not site copy. It carries source keys,
confidence markers and open questions; the site carries prose. Nothing moves
from here to a page without passing `../style-guide.md`.

---

## How to read a research file

Every factual line carries a **source key** in square brackets, resolving in
[`sources.md`](sources.md), and a **confidence marker**.

| Marker | Meaning | May it reach the site? |
| --- | --- | --- |
| **[A]** | Government, utility, operator or peer-reviewed source directly stating the claim. | Yes. |
| **[B]** | Single source, or reported via media from an underlying document not read directly. | Yes, with attribution that names the route. |
| **[C]** | Analogue event or out-of-region data. | As illustration only. Never as a Lower Mainland number. |
| **[?]** | Not established. | No. It ships as a visible open question. |

Two rules follow from the marker set, and they are the reason the site can be
trusted:

- **A [C] never becomes a local number.** Christchurch's sanitation figures
  describe Christchurch. They illustrate a mechanism; they do not forecast one.
- **A [?] ships visibly.** An open question appears on the site as an open
  question. It is never quietly filled with inference, and inference is never
  promoted to a marker by being written down confidently.

A third rule earns its place from this pass: **an absence that has been searched
for is a finding.** Where a subject has been looked for properly and is
genuinely not in the public record, the search itself is recorded — what was
searched, where, and when. That is a stronger and more useful statement than an
untouched question mark, and it is what lets a system page say *nobody has
published this* rather than *we did not find this*.

---

## Files

| File | Subject |
| --- | --- |
| [`scenarios.md`](scenarios.md) | The two scenarios and the official simulations behind them. |
| [`ground-conditions.md`](ground-conditions.md) | Microzonation, amplification, liquefaction, slope instability. |
| [`buildings.md`](buildings.md) | Building stock, retrofit policy, casualties, loss estimates, fire following. |
| [`systems/`](systems/) | One file per system in the impact grid. |
| [`mobility.md`](mobility.md) | Who can physically leave, and by what route. |
| [`preparedness.md`](preparedness.md) | Official advice, and the gap between jurisdictions. |
| [`analogues.md`](analogues.md) | Christchurch, Kobe, Tōhoku, and the airlift capacity comparison. |
| [`maps.md`](maps.md) | Available layers, what each supports, and what it does not. |
| [`sources.md`](sources.md) | The source register. Becomes `SOURCES` in `site.ts`. |
| [`open-questions.md`](open-questions.md) | The verification queue and the refresh triggers. |
| [`impact-bands.md`](impact-bands.md) | Band assignment per system per scenario, with mechanism and source. |
| [`build-order.md`](build-order.md) | What to build first, and why the evidence says so. |

---

## Working rules

- **A claim lives in one file.** Cross-reference rather than restate; a figure
  written twice is a figure that will disagree with itself.
- **Every key resolves.** A source key used in a file and absent from
  `sources.md` is a defect, not a shorthand.
- **Markers are assigned against the rubric, not by feel.** [A] asserts that a
  source directly states the claim. If it states something adjacent, the marker
  is [B] and the wording changes to match.
- **Corrections are recorded where they were made.** When a figure is found to
  be wrong, the corrected figure and the reason replace it here, and the
  finding goes to `../knowledge.md` if it outlives the change.
