# Copy

<!-- review-status: unreviewed -->

> **Review status: unreviewed.** Not yet verified by the project owner. Change to
> `validated` with a date once reviewed, in both the comment and this line.
> **Last copy pass:** 10 September 2026.

The site's words. One file per page, named for its route.

This folder is the opposite of `../research/`. Research files carry confidence
markers, open questions and notes to ourselves. **Copy files carry only what a
reader sees.** Nothing here talks about the project, the search, or how
confident we felt. If a sentence would not make sense to someone who has never
heard of this project, it does not belong in this folder.

Read `../style-guide.md` before editing a line of it, including a heading, a
label or an alt text.

---

## What is written

| File | Route | Built from |
| --- | --- | --- |
| [`home.md`](home.md) | `/` | the whole evidence base |
| [`scenarios.md`](scenarios.md) | `/scenarios/` | `../research/scenarios.md` |
| [`method.md`](method.md) | `/method/` | `../research/impact-bands.md` |
| [`ground-conditions.md`](ground-conditions.md) | `/shaking/ground/` | `../research/ground-conditions.md` |
| [`water.md`](water.md) | `/after/water/` | `../research/systems/water.md` |
| [`electricity.md`](electricity.md) | `/after/electricity/` | `../research/systems/electricity.md` |
| [`transportation.md`](transportation.md) | `/after/transportation/` | `../research/systems/transportation.md` |
| [`getting-around.md`](getting-around.md) | `/getting-around/` | `../research/mobility.md` |
| [`prepare.md`](prepare.md) | `/prepare/` | `../research/preparedness.md` |

That set is the MVP in `../site-overview.md` §8, in the order
`../research/build-order.md` gives.

---

## The shape of a file

```markdown
---
route: /after/water/
title: Water
nav: Water
hook: <the one line that appears on cards and in the grid>
lede: <the standfirst, one or two sentences>
bands: { cascadia: high, crustal: high }
mechanism: <the one sentence that sits in the impact cell>
status: draft
---

## A heading that reads as a sentence about the world

Body.

> **Not yet established.** <a visible gap, rendered as a VerificationNote>

## What you can do

<the Lever block. Every long page ends with one.>

## Sources on this page

<keys, resolving in ../research/sources.md>
```

Front matter feeds `src/content/site.ts`. `bands` and `mechanism` appear on
system pages only, and their values come from `../research/impact-bands.md`
rather than from memory.

## Rules

- **A citation key in square brackets is a promise.** `[MV-WATER-22]` renders as
  a numbered marker that opens the register entry in place, and the same entry is
  listed at the foot of the page. Every key resolves in
  `../research/sources.md`. A sentence with a number in it and no key is a defect.
- **A guard travels with its number, in the same sentence.** Not in a footnote
  and not two paragraphs down. If the guard makes the sentence unwieldy, the
  sentence is carrying too many numbers.
- **A quotation is used wherever it beats our own wording**, which is more often
  than it sounds. An official describing their own system, or a province
  describing its own plan, cannot be accused of spin. Name the speaker and the
  document.
- **An analogue never generates a number.** Christchurch and Kobe illustrate a
  mechanism and forecast nothing here.
- **A gap ships visibly**, with what has and has not been published, and in the
  reader's terms rather than as a report on our searching.
- **Every long page ends with something the reader can do**, tied to the interval
  the page just described.
- Canadian spelling, and the word list in `../style-guide.md` §7 governs.

## What is not written yet

Sanitation, housing, communications, health care, natural gas, food and fuel,
dams and reservoirs, port and airport and ferry terminals, where help comes
from, buildings, casualties, fire following, secondary hazards, the dependency
graph, and the about, sources and contribute pages.

`../research/build-order.md` gives the order. Nothing is waiting on evidence
except dams and the crustal column of port, airport and ferry terminals, which
wait on the public record rather than on us.
