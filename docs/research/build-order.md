# Build order

<!-- review-status: unreviewed -->

> **Review status: unreviewed.** Not yet verified by the project owner. Change to
> `validated` with a date once reviewed, in both the comment and this line.
> **Last research pass:** 10 September 2026.

**Status.** The MVP in `../site-overview.md` §8 — both scenarios, water, power,
transportation, the ground-conditions map and the band rubric — survives contact
with the evidence in substance, but two of its assumptions have failed. The map
it opens with cannot be licensed, and the hook it closes with was based on a
claim the source contradicts. What follows replaces it.

---

## What changed

**Ground conditions loses its map.** The microzonation layers carry custom ICLR
terms, not an open licence. The page is still worth building — the peer-reviewed
literature carries the strongest single number the site has — but it is a text
page with an outbound link, not the visual opening it was meant to be. See
`maps.md` and `../licensing.md`.

**Scenarios gains an anchor.** Both scenarios exist as official deterministic
runs under the Open Government Licence – Canada, and the province's own
operational plan uses the crustal M7 as its primary planning scenario. The
framing is no longer ours to justify. It is also the only major page with no
licensing risk whatsoever.

**Preparing loses its hook and gains a better one.** The 72-hours-versus-two-
weeks comparison was false: BC's earthquake guide says two weeks. The
replacement — that BC's own guidance contradicts itself across three provincial
pages while the public remembers a number none of them now give — is defensible,
citable three ways, and closer to the reader.

**The method page is load-bearing for a changed reason.** It was going to explain
six hatched cells. It now has to explain why most of the grid moved in one
research pass. That is a stronger argument for the rubric, not a weaker one.

---

## The order

1. **Scenarios.** Anchored on two official simulations, fully open licence, no
   licensing risk, and the strongest structural idea the site has. It can carry
   the opening.
2. **Method and the band rubric.** Ships with the MVP rather than after it. Two
   systems still have no published assessment behind them, four bands moved in a
   single pass, and a reader who meets that without the rubric concludes the site
   is unfinished rather than honest.
3. **Water.** The best-sourced system: a real mechanism, a named official
   describing it in his own words, and a documented reason why no restoration
   time exists.
4. **Transportation.** Now the strongest page in the set, not the fourth-best.
   The province designates routes that must stay open and states it is not
   retrofitting the bridges on them to stay open — sourced twice, twenty years
   apart.
5. **Who stays.** Immediately after transportation, which it depends on. Promoted
   from the demotion the earlier draft recommended: its premise is now sourced
   twice over from separate provincial documents, and it should be retitled
   around what the province plans rather than who can leave.
6. **Ground conditions.** Text and figures from the peer-reviewed literature,
   with an outbound link where the map was to be.
7. **Electricity.** Rebuilt on BC Hydro's own regulatory filing. The 2011 claim
   the page used to rest on has to be reconciled or retired first.
8. **Preparing.** Cheap to build and now honestly framed.

**Consider promoting fire following** into the MVP as the flagship graphic. The
Dedicated Fire Protection System coverage boundary is the one map the site can
draw itself today, under the Open Government Licence – Vancouver, and the whole
point of the section is what falls outside the line — which is a map's job rather
than a paragraph's.

---

## Then

Sanitation, housing, communications, health care and gas — all five now have
enough behind them to write, where three of them had nothing at the start of this
pass. Gas is a new system entry the code does not carry at all.

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
site is built follows the evidence rather than the original enthusiasm — and so
that when a page ships thin, the record shows it shipped thin on purpose.
