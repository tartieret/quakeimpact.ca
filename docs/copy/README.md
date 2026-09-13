# Copy

<!-- review-status: unreviewed -->

> **Review status: unreviewed.** Not yet verified by the project owner. Change to
> `validated` with a date once reviewed, in both the comment and this line.
> **Last copy pass:** 12 September 2026.

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
| [`shaking.md`](shaking.md) | `/shaking/` | `../site-overview.md` §5, Part 1 |
| [`ground-conditions.md`](ground-conditions.md) | `/shaking/ground/` | `../research/ground-conditions.md` |
| [`buildings.md`](buildings.md) | `/shaking/buildings/` | `../research/buildings.md` |
| [`casualties.md`](casualties.md) | `/shaking/casualties/` | `../research/buildings.md` |
| [`fire-following.md`](fire-following.md) | `/shaking/fire-following/` | `../research/buildings.md` |
| [`landslides.md`](landslides.md) | `/shaking/landslides/` | `../site-overview.md` §5, Part 1 |
| [`dikes.md`](dikes.md) | `/shaking/dikes/` | `../research/ground-conditions.md` |
| [`dams.md`](dams.md) | `/shaking/dams/` | `../research/systems/dams-and-reservoirs.md` |
| [`after.md`](after.md) | `/after/` | `../research/impact-bands.md` |
| [`communications.md`](communications.md) | `/after/communications/` | `../research/systems/communications.md` |
| [`electricity.md`](electricity.md) | `/after/electricity/` | `../research/systems/electricity.md` |
| [`water.md`](water.md) | `/after/water/` | `../research/systems/water.md` |
| [`sanitation.md`](sanitation.md) | `/after/sanitation/` | `../research/systems/sanitation.md` |
| [`gas.md`](gas.md) | `/after/gas/` | `../research/systems/gas.md` |
| [`transportation.md`](transportation.md) | `/after/transportation/` | `../research/systems/transportation.md` |
| [`large-infrastructure.md`](large-infrastructure.md) | `/after/large-infrastructure/` | `../research/systems/large-infrastructure.md` |
| [`fuel.md`](fuel.md) | `/after/fuel/` | `../research/systems/food-and-fuel.md` |
| [`food.md`](food.md) | `/after/food/` | `../research/systems/food-and-fuel.md` |
| [`dams-and-reservoirs.md`](dams-and-reservoirs.md) | `/after/dams-and-reservoirs/` | `../research/systems/dams-and-reservoirs.md` |
| [`housing.md`](housing.md) | `/after/housing/` | `../research/systems/housing.md` |
| [`health-care.md`](health-care.md) | `/after/health-care/` | `../research/systems/health-care.md` |
| [`outside-help.md`](outside-help.md) | `/after/outside-help/` | `../research/systems/outside-help.md` |
| [`getting-around.md`](getting-around.md) | `/getting-around/` | `../research/mobility.md` |
| [`prepare.md`](prepare.md) | `/prepare/` | `../research/preparedness.md` |
| [`dependencies.md`](dependencies.md) | `/dependencies/` | `../site-overview.md` §5, "Centrepiece" |
| [`contribute.md`](contribute.md) | `/contribute/` | `../site-overview.md` §7 |
| [`about.md`](about.md) | `/about/` | `../site-overview.md` §1 and §2 |

`shaking.md` and `after.md` are the index pages for parts one and two, and each one
is shorter than the pages it points at. The four pages under them that follow ground
conditions came after the MVP. The rest of the table is the MVP in
`../site-overview.md` §8, in the order `../research/build-order.md` gives.

[`unwritten.md`](unwritten.md) is not a page and has no route. It holds the standing
text a page shows when its evidence has been gathered and its body has not been
written, in two variants: one for a system page under `/after/`, which carries a band,
and one for a shaking page under `/shaking/`, which does not.

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
source: MV-WATER-22
---

## A heading that reads as a sentence about the world

Body.

> **Not yet established.** <a visible gap, rendered as a VerificationNote>

## What you can do

<the Lever block. Every long page ends with one.>

## Sources on this page

<keys, resolving in ../research/sources.md>
```

Front matter feeds `src/content/site.ts`. `bands`, `mechanism` and `source`
appear on system pages only, and their values come from
`../research/impact-bands.md` rather than from memory.

`hook` is the one line a card carries, so it only has somewhere to go on a page
that appears on a card: a system page under `/after/` and a Part 1 page under
`/shaking/`. Everywhere else it is written and never shown, and the page's
`lede` is the first line a reader sees. Write one anyway if it helps settle what
the page is about, but do not expect to find it rendered.

`source` is the third of the three fields `Impact` in `src/content/types.ts`
requires, alongside the band and the mechanism sentence. It is one key, the one the
mechanism sentence rests on, and it is not the same list as **Sources on this page**.
All thirteen system files carry it.

`outside-help.md` is the one file whose front matter does not fit that shape. Its
two columns carry different mechanism sentences and its Low column carries an
`Impact.evidence` guard, so it writes `mechanism-cascadia`, `mechanism-crustal` and
`evidence-crustal` instead of one `mechanism`. `src/content/site.ts` is where those
three strings live.

There is no `status` key. It was on every file here, including the written ones,
which meant it recorded nothing. An unwritten page declares itself in the content
model, not in the copy: see **What is not written yet** below.

The rest of a system's entry stays in `src/content/site.ts` and has no front-matter
key: the slug, the phase it bites at, what it depends on, and its build tier.

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

Nothing. Every page is written: all five under `/shaking/`, all thirteen systems
under `/after/`, and the reference pages. The system pages are ordered above as
they are ordered in `SYSTEMS` in `../../src/content/site.ts`, which is the order a
reader meets them in.

`/sources/` and `/licences/` are the two pages with no file here, and that is by
design: both render from the generated register in
`../../src/content/references.ts`, and a hand-typed list beside it would be a
second source of truth. Their words live in their route templates,
`../../src/app/sources/page.tsx` and `../../src/app/licences/page.tsx`, and the
style guide governs them like any other page.

[`unwritten.md`](unwritten.md) is therefore standing text no page currently
shows. It stays, because a page can be returned to draft while its text is under
revision: `status: "draft"` goes on the system in `../../src/content/site.ts`, on
the entry in `SHAKING_PAGES`, or on a page module's `meta`.

Dams carries no band in either column, and port, airport and ferry terminals
carries none in the crustal column. Both pages are written and say so in the
reader's terms, because what is missing there is the public record rather than
the copy.
