# Build order

<!-- review-status: unreviewed -->

> **Review status: unreviewed.** Not yet verified by the project owner. Change to
> `validated` with a date once reviewed, in both the comment and this line.
> **Last research pass:** 10 September 2026.

**Status.** The MVP in `../site-overview.md` §8 — both scenarios, water, power,
transportation, the ground-conditions map and the band rubric — survives contact
with the evidence in substance. Ground conditions is a text page with an outbound
link, because the microzonation layers carry custom ICLR terms rather than an open
licence; see `maps.md` and `../licensing.md`. What follows is the order to build
in, and the reason each page sits where it does.

---

## The order

1. **Scenarios.** Anchored on two official simulations, fully open licence, no
   licensing risk, and the strongest structural idea the site has. It can carry
   the opening.
2. **Method and the band rubric.** Ships with the MVP rather than after it. Two
   systems still have no published assessment behind them, and a reader who meets
   that without the rubric concludes the site is unfinished rather than honest.
3. **Water.** The best-sourced system: a real mechanism, a named official
   describing it in his own words, and a documented reason why no restoration
   time exists.
4. **Transportation.** The strongest page in the set. The province designates
   routes that must stay open and states it is not retrofitting the bridges on
   them to stay open — sourced twice, twenty years apart.
5. **Who stays.** Immediately after transportation, which it depends on. Its
   premise is sourced twice over from separate provincial documents, and it should
   be retitled around what the province plans rather than who can leave.
6. **Ground conditions.** Text and figures from the peer-reviewed literature —
   the strongest single number the site has — with an outbound link in place of a
   map the site cannot licence.
7. **Electricity.** Built on BC Hydro's own regulatory filing. The 2011 press
   release has to be reconciled or retired first.
8. **Preparing.** Cheap to build. The hook is that BC's own guidance contradicts
   itself across three provincial pages while the public remembers a number none
   of them now give — defensible, citable three ways, and close to the reader.

**Consider promoting fire following** into the MVP as the flagship graphic. The
Dedicated Fire Protection System coverage boundary is the one map the site can
draw itself today, under the Open Government Licence – Vancouver, and the whole
point of the section is what falls outside the line — which is a map's job rather
than a paragraph's.

---

## Then

Sanitation, housing, communications, health care and gas — all five have enough
behind them to write. Gas is a new system entry the code does not carry at all.

Large infrastructure and dams ship in the fourth band, and should, until the AIR
study and a published dam assessment surface.

---

## What has to happen before any of it

Three pieces of plumbing, none of them research:

- **The bands in `src/content/site.ts` are scaffolding**, and in seven of twelve
  rows they are more confident than the evidence. They must be replaced from
  `impact-bands.md` before any system page ships, including the four rows where
  the code happens to agree.
- **`SOURCES` does not exist as an export.** `Impact.source` is `"TBD"` in all
  twenty-four cells. `sources.md` is the register it should be generated from,
  rather than retyped.
- **There is no home for the site's copy.** Research prose cannot be pasted
  across — roughly one sentence in four is the site talking about itself, which
  is right in a research file and fatal on a page. `docs/copy/` needs to exist,
  gated on the style guide's checklist, before the first page is written.

---

## For the page

Nothing here reaches the reader. This file exists so that the order in which the
site is built follows the evidence — and so that when a page ships thin, the
record shows it shipped thin on purpose.
