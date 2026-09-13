# Knowledge

Things learned while building the site that outlive the change that taught them:
sources worth keeping, quirks of the stack, decisions and the reason behind them.

Not a changelog. If something belongs to the spec it goes in `site-overview.md`;
if it belongs to the voice it goes in `style-guide.md`. This file is for the rest.

Newest entries at the top. Each entry: a short heading, what was learned, and how
it was confirmed.

---

## Direct access is a question of where the list goes, not of whether the top bar opens

**13 September 2026.** The site has five parts across the top and two of them hold
pages: five subjects under "The shaking", thirteen systems under "Life afterwards".
A reader inside one of them had `NextPrev` and the way back up to the index, so
reaching the system beside the next one meant two moves or a return to the grid. The
first idea was to make the top bar expand.

Counting the parts settled it. Three of the five have nothing to open. A menu that
responds to two items in five is a menu a reader tries twice and stops trying, and
the two that do open are not the same size: five is a menu, thirteen is a directory,
and a directory in a sticky header is a hover target with focus handling and a
separate path for phones, none of which this site has any client-side machinery for.
Against that, the top bar was never where the need was. The need was lateral movement
from inside a part, which is a different position in the page from the bar at the top.

So the same lists went to three places that cost nothing. A `<nav>` at the foot of
every page inside a part, listing the part and marking the page being read: static,
no JavaScript, and it meets the reader where they finish. The footer, which was
already the site's index and was only listing the five parts and the six reference
pages. And the menu on a phone, which is already a disclosure panel, so nesting a
`<details>` under the two parts that have children adds no interaction model that was
not already there. The part the reader is in is open when the panel opens.

Two things fell out of building it. `NAV` now derives its children from
`SHAKING_PAGES` and `SYSTEMS` rather than repeating them, so the footer index, the
phone menu and the foot-of-page list all grow when a system is added and none of them
can drift. And the header had been marking a part as `aria-current="page"` whenever
the reader was anywhere inside it, which was harmless while the parts were leaves and
became a contradiction the moment the pages were listed under them: the part and the
page both claiming to be the page. A part that merely contains the page is
`aria-current={true}`; only the page is `"page"`.

The rule to carry forward: when a reader cannot get somewhere, ask where they are
standing when they want it, rather than reaching for the control that is furthest
from them. The top bar is the most expensive place on the page to add a list and
usually the least useful.

---

## A gap in the record and a gap in what you searched are different classes

**12 September 2026.** `/shaking/fire-following/` now carries two maps, the
Dedicated Fire Protection System mains and Vancouver's fire halls. The mains
map was the one the project had planned for months; the halls map is the one
that taught something.

**The brief was a hall map coloured by seismic status, and no such status is
published.** `docs/research/buildings.md` already records the instruction not to
turn the City's "several fire halls" into a number. What the record does hold is
six halls named individually in two capital plans: one finished to a
post-disaster standard, five named for replacement or upgrade. Colouring the
other thirteen anything at all would have been a judgement nobody published.

**So the uncovered part becomes a class, and it is 13 of 19.** That is not a
compromise with the brief, it is a better version of it: the figure makes a gap
countable, and it is the same gap the section's `VerificationNote` states in
words. **When a classification is asked for and the evidence covers only part of
the set, the uncovered part is a class, named for what is missing rather than
for what might be there.**

**The first wording of that class was wrong, and the correction is the entry.**
It read "No seismic standard published", which is a claim over the *whole City
publication record* — every page, every report, every council minute. What this
project actually searched is two capital plans and the pages around them. The
class now reads **"More information needed"**, which is the same fact stated
from inside our own evidence: a gap in what we have established, not a gap in
what exists. **A negative is only as wide as the search behind it. Word an
absence to the boundary of what you looked at, not to the boundary of the
subject.** The narrower claim also survives the one reader who knows of a
document we did not find, where the wider one would have been simply false.

The figure's finding line moved the same way, from "13 of 19 have no published
seismic standard" to "6 of 19 have an answer we could find", which asserts only
the halls we verified. The caption says outright that a hall in the third class
may well be sound. The legend still says the classes are ours and that the City
publishes no such rating, which the OGL–Vancouver prohibition on implying
official status requires anyway.

**A hall layer confirmed a number the copy already carried.** The City's open
`fire-halls` dataset holds twenty records, nineteen of them with a Vancouver
local area and one, in the University Endowment Lands, without. The copy's "19
fire halls" comes from a capital plan; the layer's own attribution is what
separates the twentieth, so the count in the figure is computed rather than
typed, and the legend names the twentieth rather than quietly dropping it.

**Colour arrived after the first pass, and the constraint it had to meet was
that it change nothing.** The three hall classes are sage, amber and the site's
existing grey for a gap, and the water on both maps is a new `--color-water`
token. Neither is load-bearing: the classes are already three different shapes
at three different sizes with three written labels and counts, so the hue sits
on top of channels that already work in greyscale, and covering the blue leaves
the shoreline a line. **That is the test to apply when someone asks for colour:
not "is colour allowed" but "does the drawing lose anything when the colour goes
away".** If it does, the colour is doing work that a shape or a label should be
doing.

The one thing colour did force was a third shape. Two solid discs of different
diameters were fine while they were ink and mid-grey, and stopped being fine
once they were sage and grey: **sage and neutral grey have almost the same
luminance**, 4.70 and 4.85 against white, so in greyscale the size difference
was suddenly carrying the distinction alone. The third mark is now a square.
Shape survives greyscale, colour blindness and a phone better than size does.

Water is the site's first colour that is an identity rather than a value, and
`style-guide.md` §8 now says so. Every other colour here scores something. The
sea does not, and a shoreline drawn in the same grey as an axis is a line with
land on an unstated side of it.

**Three drawing lessons from the same figure:**

- **A symbol drawn in map units shrinks with the column.** The marks were sized
  on a laptop and were 3 px across on a 390 px phone. Size a symbol at phone
  width first and check it at the wider one; the reverse order looks fine and
  ships something nobody can see. Solid marks survive the shrink, thin rings do
  not, which is why two of the three classes are solid discs.
- **Paper on paper is a mark at 1:1 against its own ground.** A donut filled
  with paper and a disc given a paper halo both read fine and both fail the QA
  pass's mark check, correctly: the fill is `none` and the halo is gone, and
  nothing was lost because the halls sit kilometres apart.
- **A municipal boundary is a legal line, not a shoreline.** The City boundary
  layer strikes straight out across Burrard Inlet and English Bay. Drawn alone
  it gives a reader no peninsula and no False Creek, so both maps carry the
  Freshwater Atlas under it, cut for a third window at 25 m. The boundary is
  dashed and quiet so it cannot be mistaken for the coast it crosses.

**And one that reverses an earlier entry, in its own terms.** *A map without its
geography* concluded that a duplicated base layer costs a full second copy.
These two maps share their base layer and write it out twice anyway, because the
copies sit a few kilobytes apart rather than 85, which is inside gzip's window.
The rule was never "always deduplicate": it was **measure the distance between
the copies**. Here the distance said inline, and inlining avoids a hidden
dependency between two figures in two different sections, where moving one would
silently empty the other.

**How confirmed:** built and read at 390 px and 900 px in both themes;
`node scripts/qa/audit.mjs` clean on the route; counts in the legend, the
finding line and the alt text all computed from the vendored file rather than
written down.

---

## A control that filters has to filter something the evidence resolves

**12 September 2026.** The site carried one global control: a header-mounted toggle
between the Cascadia M9 and the shallow crustal M7, persisted to `localStorage`, and
described in the code as the thing every impact band reads from. Counted rather than
assumed, four things read it. It swapped the band pill on two of the thirteen system
cards, one paragraph on the home page, and one weather sentence on the timeline
strip; the fourth was a second copy of the picker itself.

The reason is in `types.ts` and was already written there: the published work assesses
a single design earthquake per system, so eleven of the thirteen rows go through the
`bothScenarios` helper with the same band and the same mechanism sentence in both
columns. Only `large-infrastructure` and `outside-help` differ at all. The difference
between the two columns is therefore usually a difference in what has been studied,
not in what would happen, and a control that picks one column presents that gap to the
reader as an answer.

Everywhere the site treated the two scenarios seriously it was already ignoring the
toggle and showing both: the system pages, `SystemMatrix` and the two ShakeMaps. The
toggle was the outlier. Where the two genuinely diverge, hiding one of them removes
the teaching point; where they do not, the control does nothing but imply that it
does.

Removing it took the last client-side global state with it, along with the accepted
first-paint flash recorded below on 11 September: with nothing stored and nothing to
re-apply after hydration, there is no unchosen scenario to flash. `TimelineStrip`,
`SystemGrid` and `ScenarioCards` are server components again.

The rule to carry forward: before building a control that filters, count the rows it
would actually change. A filter over a dimension the sources do not resolve is not a
neutral convenience — it manufactures a distinction the evidence will not support, and
it costs the reader the comparison that was the real finding.

---

## The ban on photography is gone, and the first two photographs are on the site

**12 September 2026.** The style guide said "no disaster photography … maps,
diagrams and data only". It no longer does. Recording it here because
`docs/README.md` says a style-guide rule is a decision to record rather than an
edit to make in passing, and because this one was reversed twice in a day: first
narrowed to an exception for liquefaction, then dropped, on the project owner's
call that the ban was bad positioning.

**Why the ban was wrong, in its own terms.** It gave three reasons. Disaster
imagery is emotionally cheap; it is almost always from somewhere else; it puts
the site in the register it is trying to avoid. The first is a claim about bad
photographs, not about photographs. The second is true and is a captioning
problem, not a prohibition. The third is the real one, and it was a position
about tone stated as a position about rigour — which is exactly what §3 warns
against in the other direction, since the site's fear discipline is about
severity paired with efficacy and never about keeping the material at arm's
length. The cost was concrete: the site could not show a reader something that
had already happened to a real street.

**What replaced it.** A test of what an image does rather than a list of what it
may not contain: **a photograph earns its place by showing a mechanism, not by
being striking.** Liquefaction is the case that makes it obvious, and it is not
the only one — a buckled road, a building off its foundations, a bridge approach
with a step in it are all things the site describes in words and a reader has
never seen. What the test excludes is decoration: an image adding nothing the
prose has not already given.

**Three limits survive, and they are not about tone.** No casualties and no
identifiable person in distress, which is dignity towards people who did not
consent to illustrate our argument and does not soften because the file is free.
No image standing in for a claim the prose cannot make. And nothing uncleared.
Over them sits the rule that **a photograph may not generate a claim**, which is
§10's question 8 about analogues at its sharpest: a photograph is the most
persuasive thing on a page and the least measurable.

**The dramatic image is the one that is not available, and that is a
coincidence.** The brief that brought these images in records "Car swallowed by
liquefaction", Phillipstown, as all rights reserved. Under the first, narrower
rule it was excluded twice over — on rights and for being a spectacle. Only the
rights exclusion survives, which is the honest position: the site does not
refuse a photograph for being vivid.

**Hosting waited a session on network access, and the wait paid for itself.**
The session that wrote the rule had no route to `commons.wikimedia.org`,
`upload.wikimedia.org`, `www.flickr.com`, `www.canterburystories.nz` or
`www.sciencelearn.org.nz` — 403 at the egress proxy for all of them — so no file
could be downloaded and no licence read at its source. Every row went in as
`stated`, and `verified` is the only status that may be hosted. The page carried
labelled empty slots in the meantime, which is the part worth keeping: the two
sentences saying "not hosted yet" were true for a day and cost nothing, and the
alternative — a broken image, or quietly dropping the slot — would have been a
lie in one direction or the other.

**Opening the files corrected both of them, and that is the durable lesson.**
The next session had the route. Both rows verified at their sources and both are
hosted, and both turned out to be wrong about their own pictures, because the
alt text had been written off the brief instead of off the file. One described
"an ordinary commercial street" and shows a residential one. The other described
a road broken open into holes and troughs, and shows a street buried under
vented silt with sand volcanoes in the foreground — the photographer's own
Flickr title says "sink holes" and the frame has none. The mechanism survived in
both cases and the wording did not, so the alt text and one page caption were
rewritten to the photographs. **Open the file before writing its alt text**, now
a rule in `docs/media.md` §"When a photograph is hosted". No review short of
looking at the image would have caught either error: every word was plausible,
sourced to a brief, and wrong.

**A collection page describing a file is not the file.** The row for
`christchurch-cars-in-silt` cited the Science Learning Hub page that happens to
state the rights, with a note to find the Commons original before hosting. It is
`File:Liquefaction in Peterborough St.JPG`, and the two are the same bytes —
identical checksum on 4 373 550 — so the link now goes to the file page where
the photographer states the licence rather than to a page repeating it.

**The first binary asset in the repo moved two pieces of tooling.** `public/`
did not exist until these two files; the site had shipped one inline SVG icon and
nothing else. Two things assumed that. `scripts/qa/serve.mjs` had no `.jpg` in
its MIME table, so the QA server answered `application/octet-stream` and the
audit was grading a page whose photographs only rendered because Chromium
sniffs. And the figures check in `scripts/qa/checks.mjs` read a labelled
`role="img"` frame as defective unless it contained an `<svg>`, which was true
of every figure on the site until a photograph went in one. Both are fixed: the
server knows the type, and the check asks for a graphic rather than for a
drawing. Neither was a fault in the photographs, and both would have been read
as one.

**`ratio` on a register row is load-bearing, not decoration.** The frame sets
`aspect-ratio` from it and the image is `object-cover`, so a row whose ratio
disagrees with its file does not letterbox — it crops, silently, with no warning
and nothing in the build to catch it. Both rows arrived saying `3 / 2` and both
files are `4 / 3`. On a CC BY-SA photograph an uncorrected crop would also have
been an unannounced derivative. Measure the file, do not assume the ratio.

**Two things the register does that `references.ts` does not.** It flags
non-commercial and no-derivatives as data rather than as a note, so "what comes
off the site if it ever earns money" is a question answered by reading the data
on the day it is asked. And it is written by hand rather than generated from
`docs/research/sources.md`, because a photograph is not a source: a reference is
a document a claim rests on, and a photograph is the one thing on a page that
must never become one.

---

## Four more photographs, and two rules that came out of placing them

**12 September 2026.** `/shaking/buildings/` took three and
`/shaking/fire-following/` took one, which makes six on the site.

**Prefer September 2010 to February 2011 wherever both show the mechanism.** The
three on the buildings page are unreinforced masonry failures — a parapet down
off a shop row, a gable end wall on a footpath, brick across a traffic lane — and
all three are the Darfield earthquake of 4 September 2010 rather than the
Christchurch earthquake of 22 February 2011. Same city, same building stock, same
failure, and 2010 killed nobody. The page cites the 2011 death toll from URM
façades two paragraphs below where the images sit, so a 2011 photograph of the
same mechanism would have put the casualty limit under pressure to no purpose.
This generalises: when two events produced the same mechanism, the one without
the deaths is the one to photograph.

**A photograph of here is not an analogue, and the rule changes shape.** The
hydrant is the first image on the site that is not standing in for something.
Every other one argues "this mechanism is real, and your ground is like that
ground", and the analogue rule limits what may be carried across. The hydrant
carries nothing across: it is the object itself, on a street the reader can walk
to, and its caption is an instruction rather than a framing. `/shaking/fire-
following/` had been telling readers that the blue hydrants are the only part of
the City's description they can act on, and then not showing them one, which is
the plainest §8 failure the site had left. The register and `/licences/` both say
which kind an image is, because the two kinds are read differently.

**The alt-text rule earned itself again.** Two of the three captions drafted
before the files were opened carried a detail the frame did not support: a person
"waiting for a bus" where there is no bus stop, and shops called undamaged that
are boarded over with plywood. Both were plausible, both were invented, and
neither would have survived anyone looking. Write the words off the image.

**Vancouver's own imagery is scarce and badly licensed.** A search of openly
licensed collections for a blue DFPS hydrant returns one usable file, at
1024 × 1024, under CC BY-NC-SA 2.0 — and **nothing at all** under a licence
allowing commercial use. That is worth knowing before planning any page around
local photography: the Christchurch material is abundant and freely licensed, and
the Vancouver material is neither.

---

## A map without its geography is a scatter plot with a compass rose

**12 September 2026.** Asked whether the scenario ShakeMaps were drawn the usual
way, the honest answer was no — the convention for a ShakeMap is a sequential
colour ramp, usually contoured, over a basemap — but that was the smaller half
of the answer. **A conventional ShakeMap stripped of its coastline would have
been just as unreadable.** The marks were floating on paper with nothing to
locate them against. Fix the ground first; the encoding is a separate question
and easier to judge once there is a shoreline to read it over.

**The base layer was already in the repository and already licensed.** The
Freshwater Atlas coastlines and rivers were acquired in September for the
getting-around map, under OGL–BC confirmed on each record. What did not fit was
the window: it had been cut 51 km across and the scenario window is 160 km.
`scripts/data/build-region-geography.mjs` now holds a list of windows rather
than one bounding box, because **a reduction is only honest at the size it was
cut for** — the wide window is cut at 150 m, and cutting it at 60 m would have
shipped four times the vertices to draw the same line at 258 m per pixel.

**How coarse is honest, at a zoom.** 150 m is about a fifth of a 730 m model
cell. Drawing a coastline finer than the grid it sits under is false precision
however far a reader zooms in, which settles the tolerance question without
reference to the zoom at all.

**A duplicate outside gzip's window is not free.** Both maps draw the same
shoreline, and the two copies sat about 85 kB apart in the markup — well
outside the 32 kB back-reference window a gzip stream looks through. The
duplicate cost **18 kB over the wire, an eighth of the page**, which is not
what one expects of repeated text. The geometry is now written once into a
hidden `defs` and referenced with `use`. **When the same large string appears
twice in a page, check the distance between them before assuming compression
handles it.**

**What the base layer confirmed for free.** No cell in either scenario file
falls in the open Strait of Georgia, which with the shoreline drawn is now
visible rather than asserted. A base layer is a check on the registration of
everything drawn over it, not only a convenience for the reader.

**How confirmed:** rebuilt from the originals with `npm run data`; page weight
measured gzipped before and after the deduplication; drawn and read at 390 px
and 1280 px in both themes.

---

## A figure that fits the column is not the same as a figure a reader can read

**12 September 2026.** The two scenario ShakeMaps on `/scenarios/` shipped at a
fixed 300 px, inside a 672 px column. The window they cover is 220 cells across,
so a cell was **1.4 px** and a mark in the lowest class was about half of one.
Every rule the figure convention asks for was satisfied — fixed pixel height, no
viewBox, type at the same physical size everywhere — and the drawing was still
unreadable, because none of those rules asks how much ground one mark gets.

**The rule this produces: for a drawing whose unit is a real thing, work out the
size of one unit on screen before anything else.** If a cell, a bar or a mark
lands under about 3 px, the figure has no business being drawn at that size,
whatever the convention says about the frame around it.

**What the fix cost, and where it landed.** `src/components/figures/map-viewer.tsx`
is now the viewport every map on the site is drawn into: a fixed-aspect pane with
pan, zoom to sixteen times, keyboard control and a scale bar. It is the first
interactive figure and the first `viewBox` on the site, and the reasoning for both
exceptions is in that file and in the figures README. Two details worth carrying
to the next map:

- **A map pane can have a `viewBox` without breaking the no-viewBox rule**,
  because the rule exists to stop a viewBox scaling *type* and a map pane holds
  no type. Every word is outside the pane in HTML. The moment a label goes
  inside the drawing, the exception stops applying.
- **`role="img"` makes its whole subtree presentational.** `Figure` put that role
  on the frame, so a graphic with buttons inside it would have had those buttons
  hidden from a screen reader entirely. `Figure` now takes `interactive`, which
  drops the role and carries the finding in a screen-reader paragraph instead.

**A bug the small size had been hiding.** Each cell was written as
`m dx dy h5 v5 z`, which closes a **right triangle**, not a square: `z` returns
to the start of the subpath, so three commands make three sides. Area was the
drawing's entire measure of acceleration, and every mark had been drawing half of
it since the figure was written. At 1.4 px it was invisible; at the first zoom it
was obvious. **A drawing too small to read is also too small to review**, which
is the second reason not to ship one.

**How confirmed:** measured in the browser at 390 px and 1280 px, in both
themes, with the keyboard and with a drag; scale bar checked against
`kmWide / k` at several zooms.

---

## Three things the page review of 12 September could not settle

**12 September 2026.** A page-by-page review against the style guide, the spec and
the research files fixed what was fixable. Three items are recorded here instead,
because each needs a decision rather than an edit.

**The DCRRA licence note and the pages disagree.** `DCRRA-2025` carries
`licence: "... the facts may be stated and linked to, and nothing may be
reproduced."` Three sections of two pages reproduce short quotations from it:
`/after/health-care/` a 57-word block quotation from `DCRRA-APPC` and the
"thousands of uninjured, distraught people" phrase twice, and
`/after/communications/` two phrases. The project already decided the same
question the other way for PEIRS, whose research file says fair dealing covers
quotation and instructs "Publish it, with attribution, a link and the page
number." Either the DCRRA note is written too broadly and should say the same, or
the quotations come off. It is a licensing judgement and the note and the pages
should not be left contradicting each other.

**`CBOC-2016` is recorded as unretrievable and as held.** `docs/research/sources.md`
says "**The report itself is not retrievable**" and that every figure comes from
the press release, `CBOC-2016-PR`. `docs/research/buildings.md` quotes the report
directly at **[A]** and elsewhere says it "**is held**, but not from a live path",
via a web archive copy. `/shaking/buildings/` cites `CBOC-2016` for the $127.5
billion and for the scaling assumption. If the archive copy is held, the register
note and href should say so, as `AIR-2013` already does. If it is not, the page's
sentence has to move to `CBOC-2016-PR` or come off.

**The days-of-supply figure: the spec and the research file gave opposite
instructions.** `site-overview.md` §5 says the Lower Mainland days-of-supply
figures "have been chased and do not hold up" and to lead with the mechanism
instead. `research/systems/food-and-fuel.md` permits the figures under four
guards, all of which `/after/fuel/` met. `CLAUDE.md` makes the overview the spec,
so the numbers came off and the note keeps the finding, which is the absence. If
the research file's position is the intended one, the overview is what needs
amending, or this recurs at the next pass.

**Also recorded, because `research/systems/housing.md` says it lives here and it
did not.** PEIRS's summary table and its narrative both say 70,000 **households**
displaced; a logistics footnote at p. 118 says 70,000 displaced **persons**. The
table and the narrative agree with each other and are preferred. The discrepancy
is the province's own, it is not resolved, and `/after/housing/` now states it in
its own verification note rather than leaving it for a reader to find.

---

## The research register is not the site's bibliography, and `/sources/` was printing it whole

**11 September 2026.** `/sources/` rendered every row of `REFERENCES`, which is generated
from `docs/research/sources.md`. That register is a research file before it is anything
else: it holds every document the project has read, and by its own rule every key cited
anywhere in `docs/research/` has a row. So 332 documents reached the reader, of which only
209 are behind anything on the site. The other 123 back findings whose page is not written
yet, or are negative results kept precisely because nothing came of them — a site search
that returned nothing, a coroner's process page establishing that a report exists by
statute and is not released, which is what makes *never published* the honest phrase rather
than *not found*.

A document a reader cannot check against a claim is not a source to them, and the page's
own standfirst promised the opposite: "every figure on this site, and the document it came
from". Two ways out, and only one of them is honest. Deleting the rows would have taken the
evidence with them and broken the register's contract with the research files that cite it.
So the register keeps all 332 and `/sources/` asks which of them the site cites.

The set is derived in `src/content/cited.ts`, never listed, because a hand-kept allow-list
drifts the first time a page cites something new. Four inputs, and the last two are the
ones that are easy to miss:

- `meta.references` on every page module. It is already each page's citation contract —
  `Cite` numbers markers from it — so nothing has to parse prose.
- `Impact.source` on every `SYSTEMS` entry. The band grid cites outside any page body, and
  a system whose page is unwritten still shows its bands.
- `SHAKING_PAGES[].references`, the same case for a shaking subject listing evidence ahead
  of its text.
- Every `kind: "dataset"` entry, because `/licences/` names all of them with the attribution
  string the licence requires. A dataset reaches the reader there whether or not a sentence
  cites it, and dropping it here would leave the two pages disagreeing about what the site
  draws on.

`PAGES` in `src/content/pages/index.ts` was the 13 system modules, so the 15 pages outside
`/after/` had to be added; `ALL_PAGES` is now the whole set and `PAGES` is keyed from it,
since `pageForSystem` is its only reader and asks for `/after/<slug>/`. A module missing
from that list is a page whose documents silently vanish from `/sources/`, which is the one
way this can go wrong.

**Measured.** `out/sources/index.html` 980,452 → 643,806 bytes. The cost is one 12,974-byte
client chunk that `/sources/` did not load before: importing the page modules puts their
client components in its graph, the regression this file records under "A client component
that imports the register ships all 325 entries". It is the chunk the thirteen system pages
already share, so a reader arriving from one has it cached, and it buys 337 KB of HTML on
the page itself. Worth knowing before importing page modules anywhere else.

---

## A mark that crosses a bar has to be given a ground before it is drawn

**11 September 2026.** The fix for the open end on `PrepareDaysByDocument`, and the
general shape of the answer. SVG paints in document order and has no notion of a
mark "on top of" anything, so a qualifier drawn over a bar is drawn in whatever
colour the bar already put there. Three marks in `prepare.tsx` were affected, and
only the first was visible to the harness:

- The open-end arrowhead, `muted` on a `muted` bar, measured 1:1 in both themes.
- The midpoint upright on the school panels, `ruleStrong` where it crosses the
  empty track in `rule`: 1.30:1 in light, 1.36:1 in dark. Below the 3:1 that a
  non-text graphic needs, and the panel that fails is the province-wide one, whose
  bar stops short of the midpoint, which is the panel the mark exists for.
- The gridlines at 3 and 7 days, `rule` drawn under a `TrackBase` in `rule`:
  identical colour, and painted first, so occluded outright across every bar and
  1.28:1 against paper in the gaps between rows. Dead ink at both ends.

The device that fixes all three is a slot: the mark clears a rectangle of
`--color-paper-raised` for itself, then draws into it. It is the same trick the
hatch pattern already uses when it fills its own background rather than leaving it
transparent, generalised. Measured after: the arrowhead is 6.42:1 in light and
6.98:1 in dark against its own ground.

Three things learned building it, each of which cost a rebuild:

- **A slot is bounded by what it clears, not by the mark it carries.** The school
  upright runs five pixels past the track at each end; its slot does not, because a
  paper rectangle on paper is itself a mark with no ground, and the harness rightly
  says so.
- **A slot must stop where the bar stops.** Drawn as one full-height rule across the
  whole block, the gridlines erased the row labels they passed through. They are now
  one segment per bar, and a gridline stands down where a document's own end already
  falls on the value, so the stop is never overwritten by a gridline.
- **A nested `<svg>` hides a mark's real ground.** `At` opens one, and anything
  measuring what a mark sits on treats that nested root as the start of the world.
  Keep the knockout in the outer drawing, with the percentage anchor and a pixel
  `transform`, and put only the path that needs pixel coordinates inside `At`.

Floor and ceiling now differ in the first channel as well as the written one: a
closed end is flush with the bar and stops against an upright, an open end is cut
back and detaches across a gap of paper.

## An id on a heading is an id in the contents rail

**11 September 2026.** `TableOfContents` builds itself from
`main section[id] > h2, main section[id] h3[id]`, which is what lets a page author
add a subhead without maintaining a second list. On `/sources/` the publisher
subheads carry ids so the jump list can point at them, and there are 177 of them:
the rail came out 8,122 px tall in a 900 px viewport, 182 links, and a sticky box
taller than the viewport stops behaving as sticky, so everything past the first
screenful was unreachable.

The fix is not to drop the ids, because the jump list needs them. It is to put the
id one element out, on the `<div>` that wraps the heading and its list. The fragment
still lands on the group, the heading is still the first thing under it, and the
rail falls to the five real sections and 235 px. Worth remembering as a general
property: on this site an id on an `<h3>` inside a section is a request to appear in
the rail, so a heading that only needs to be linkable should carry its id on a
wrapper.

## One key, one anchor

**11 September 2026.** `/sources/` renders the datasets twice, once in their own
section with the licences in full and again in the full list, and `Entry` set
`id={"ref-" + entry.id}` both times. Eight duplicate ids, invalid HTML, and a
`#ref-` link landing on whichever copy the browser met first. The short code is
advertised on the page as the entry's permanent address, so it has to resolve to
one place, and the full list is the register. `Entry` now takes `anchored`, and the
earlier showing carries none. Measured after: 325 `ref-` ids on the page, 325 of
them unique, and each of the eight formerly doubled keys lands 112 px from the top
of the viewport, which is the `scroll-mt-28` the entry asks for.

One trap when checking this by hand. The site sets `scroll-behavior: smooth`, and
`/sources/` is about 69,000 px tall, so a fragment jump is an animation lasting
several seconds. Measure the landing position after forcing `scroll-behavior: auto`,
or the numbers are a scroll caught mid flight and every anchor looks broken.

## The register's notes are read by neighbours, and they had drifted to colleagues

**11 September 2026.** The Source cell's note is rendered twice: in the citation popover
on every page that cites the key, and again on `/sources/`. Nothing in the register said
so loudly enough, so the notes accumulated exactly the defect `style-guide.md` §4
predicts. Live on the site, before this pass: "[A] on line-item names and section totals
only … whose column alignment does not survive extraction. Use MV-CAPEX-2026",
"Replaces NAB-WIKI", "grep-verified to contain no mention of 'earthquake'", "cite that".
Seventy-six rows carried something written to a colleague.

- **Translating a note is not deleting it.** "Per-project figures must not be quoted
  from this table, whose column alignment does not survive extraction" is a real finding
  about what the document supports. The reader-facing half is "the plan supports the
  names of the projects and the total for the section, not a figure for any one
  project"; the half about our PDF tooling is not a fact about the world.
- **The register now has a place for the other half.** An HTML comment inside a cell,
  `<!-- research: … -->`, is stripped by `scripts/build-references.mjs` in `cells()` and
  never reaches `references.ts`. Confidence markers, superseded keys, document-host ids
  and "highest-priority document to obtain" live there, one line from the row they
  belong to and still greppable. A comment may not contain a pipe. This was preferred to
  a new column, which would have meant editing 325 rows and changing `Reference` in
  `src/content/types.ts`, and to deleting the material, which would have lost it.
- **Two generated strings are copy too, and nobody had read them as copy.**
  `accessNotes()` synthesises a sentence for a paywalled, refused or unrecovered link.
  It said "The host returns 403 to an automated fetch; open it in a browser", which is
  our tooling talking; it now says the site refuses a request that does not come from a
  browser. It also lowercases the first letter of the URL cell to graft it onto "No link
  recovered:", so a URL cell that opens with a proper name renders as "bC Hydro's".
  Start those cells with an ordinary word.
- **A citation key is invisible in a popover.** A note that says "superseded by
  `COV-RISK-2024`" is resolvable on `/sources/`, where the code is on screen, and is
  noise in a popover that shows one document. Cross-references in a note now name the
  document in words; the key goes in the research comment.

## `/sources/` was ordered by the one thing a reader does not know

**11 September 2026.** The page listed 325 entries in a single alphabet, each led by its
internal key, with a jump list of 26 letters. A reader looking for the BC Hydro filing
had to know it was filed under B. The fix needed no JavaScript: the list is grouped by
the register's own Organisation cell, the document title leads each entry, and the code
moved to the end where it is still the anchor and still copyable. The jump list is now
the 19 organisations holding three or more documents, which is a table of contents
rather than an alphabet.

A filter box was considered and not built. It would have been the only client component
on the page that proves the site's sourcing, and the page has to render with JavaScript
off; grouping by publisher answers the same question statically. Grouping into publisher
*families* was also rejected: 176 distinct organisations would need a classifier, and a
classifier silently misfiles the next row someone adds. A group of one is honest.

## Open data licences are a field on the record, and the APIs will tell you

**11 September 2026.** Acquiring the three map datasets the site is allowed to draw, the
useful discovery was that every licence question has a machine-readable answer, which
turns "check each record individually" from a chore into a one-line check.

- **City of Vancouver, Opendatasoft.** `opendata.vancouver.ca/api/explore/v2.1/catalog/datasets/<slug>`
  returns `metas.default.license` and `license_url` for that dataset. That is the record
  stating its own licence, which is what `licensing.md` asks for. The portal holds 198
  datasets in total, so `?limit=100` twice enumerates the lot when a slug is unknown —
  which is how the DFPS slug, recorded as unconfirmed, was confirmed as
  `dedicated-fire-protection-systems-dfps-water-mains`.
- **BC Data Catalogue, CKAN.** `catalogue.data.gov.bc.ca/api/3/action/package_show?id=<slug>`
  returns `license_title`. Neighbouring records genuinely differ — Freshwater Atlas layers
  come back "Open Government Licence - British Columbia" while several forestry and
  fisheries layers come back "Access Only" — so the rule that OGL–BC is not a blanket
  licence for `gov.bc.ca` is not theoretical.
- **The human-readable licence page may be unreachable even when the licence is not.**
  `vancouver.ca/your-government/open-data-licence.aspx` returns 403 to every non-browser
  client, and the Archive copy 404s. The record's own licence field is the stronger
  evidence anyway; note the gap rather than imply the prose was read.

**Getting the data out, once the licence is settled.** `openmaps.gov.bc.ca/geo/pub/<OBJECT_NAME>/ows`
is a WFS in front of any public BC warehouse layer and returns GeoJSON for a bounding box,
so there is no shapefile to parse and no whole-province download. Two traps: the `bbox`
parameter wants **lon,lat** order despite WFS 2.0 nominally being lat,lon, and silently
returns zero features given the other way; and output arrives in BC Albers unless
`srsName` is the URN form `urn:ogc:def:crs:EPSG::4326`. GitHub-hosted data in an LFS
repository needs `media.githubusercontent.com/media/<owner>/<repo>/<ref>/<path>`; the
ordinary raw URL hands back a 133-byte pointer file that parses as a perfectly valid CSV.

**The pattern the vendored data follows**, in `scripts/data/` and `src/data/`: the script
fetches the original into an uncommitted `.data-cache/`, reduces it, and writes a small
committed JSON. Script and output are both in the repository, so the derivation is
auditable and repeatable, and nothing on the site touches the network at build or run
time. Reductions use a thirty-line Douglas–Peucker in metres rather than a dependency.
Sizes, and what each one dropped, are in `research/maps.md`.

**Read the geometry before deciding what the graphic is.** The Dedicated Fire Protection
System layer had been described through three project documents as a coverage boundary,
"a single closed shape". It is 245 line segments of water main. What can honestly be drawn
from it is the network, not a boundary, because a boundary would be a hull the project
invented and then attributed to the City. The same check caught the province's own
major-bridge record for the Pattullo sitting about 20 km from the Pattullo.

---

## A figure has no viewBox, because a viewBox scales the type

**11 September 2026.** The figure system lives in `src/components/figures/`, with
`README.md` there as the convention and `figure-kit.tsx` as the parts list. The first
two figures are on `/after/water/`.

The decision everything else follows from is counter-intuitive and worth recording: a
figure on this site has **no `viewBox`**. A viewBox scales the drawing uniformly, text
included, so type sized to read at 390 px is oversized at the 672 px reading measure and
type sized for the measure fails AA on a phone. There is no size that satisfies both.
Instead the `<svg>` is `width="100%"` with a fixed pixel height, horizontal positions are
percentages of the drawing width, and vertical positions and every type size are pixels.
Text is then the same physical size at every width. Confirmed by building both water
figures and checking the static export at both ends.

Three consequences fell out of it:

- **Percentages cover rectangles and text but not paths**, because path data has no
  percentage units. The fix is a nested `<svg>` that takes the percentage anchor and
  draws its children in pixels relative to it; `At` in the kit is that, and the arrowhead
  on the open-ended bar is its only current use.
- **A rectangle at `x="0"` or `x="100%"` has its stroke half clipped** by the edge of the
  drawing. Axis ticks are drawn as 1 px rects nudged inward with a pixel `transform`
  rather than as stroked lines, and tracks are filled rather than outlined.
- **SVG text does not wrap.** A label is a few words bound to the geometry and lives in
  the figure component; the sentence-level caption and the alt text live in the page
  module beside the prose, where they reflow and can carry `<Cite>` markers.

Colour was not needed for either figure and no token was added to `globals.css`. The
drawing grammar carries the meaning instead, and it is deliberately the same grammar the
band meter already uses: solid fill is a figure a source published, hatch is a range or
an open end, a rule separates two things that must not be read as one, and an axis is
drawn only where a source gives a domain. The water clocks figure has no axis on its
second panel for exactly that reason: nobody has published how long restoration takes,
and an axis would invite a reader to measure a date off it.

**Where the style guide turned out to be underspecified.** §8 settles what a figure may
look like but not what a figure may claim. Three gaps showed up in practice, and the
answers are now in the figures README rather than in the guide: a drawing needs a stated
rule that geometry may not assert a precision the source lacks (which is what produced
the no-axis panel and the hatched fifth day); "never meaning in colour alone" needed a
positive counterpart, which is the solid/hatch grammar; and alt text needed the extra
requirement that where a figure exists to stop a misreading, the alt text has to carry
the guard, not only the numbers. If any of those should be promoted into §8 as site-wide
voice, that is a decision for the style guide rather than for the component folder.

## Copy lands as typed page modules, and the shape is what stops a wrong page

**11 September 2026.** The finished copy in `docs/copy/` is markdown and there is no
markdown pipeline. A copy file is ported by hand into a module under
`src/content/pages/`, which becomes the source of truth for that page's words; the
route template renders it and holds none.

The module exports `meta: PageMeta`, `sections: PageSection[]` and `lever: PageLever`.
The body is a typed array rather than a component on purpose, because the array is what
makes three failures impossible rather than merely discouraged. Every `<h2>` comes from
a `PageSection.title` and the route renders it through `Section`, so a heading cannot be
authored outside the contents rail. `lever` is a required field rather than one section
among many, so the block that makes a page usable cannot be dropped or turned into
prose. And `meta.references` is the citation contract: `Cite` numbers a marker by the
key's position in that array and `ReferenceList` reads the same array, so an undeclared
key renders a visible `[?]` instead of a number and the drift shows on the page.

The registry in `src/content/pages/index.ts` keys modules on `meta.route`, so the key
and the page cannot disagree. `unwritten.tsx` holds the standing text for a page whose
evidence is gathered and whose body is not, as a `PageSection`, so an unwritten page
renders through the same path as a written one and its one heading appears in the rail.

**How confirmed:** `/after/water/` builds with fifteen markers numbered in
first-cited order and no `[?]`; every block of `docs/copy/water.md` appears word for
word in the rendered HTML.

---

## The system template promised a map the project had already decided not to build

**11 September 2026.** `/after/[slug]/` carried a "Where it is worst" slot on all
thirteen system pages, captioned as the system's assets drawn on poor ground. That
overlay rests on the Metro Vancouver microzonation layers, which `licensing.md` records
as link-only under ICLR's custom terms, and which the decision of 10 September 2026
gives up rather than hold open. A placeholder is honest about a graphic that is coming;
it is not honest about one that is not. The slot is gone, and a page with a graphic it
can actually draw puts it in its own module with the licence beside it, which is what
`MapPlaceholder`'s `licence` prop is for.

---

## A citation key cited more than once repeats its element id

**11 September 2026.** `Cite` gives the marker button an id of `cite-` plus its number, and the
number is the key's position in the page's reference array rather than the marker's
position on the page. A key cited six times, as `MV-WATER-22` is on the water page,
therefore renders six elements carrying `id="cite-1"`. The backlink from
`ReferenceList` still lands on the first of them, so the behaviour is right and the
markup is not. Recorded rather than fixed: it belongs to `citation.tsx`.

---

## The source register is generated from the research file, and its Source cell has four shapes

**11 September 2026.** `src/content/references.ts` is now produced by
`scripts/build-references.mjs` from the register table in `docs/research/sources.md`
(`npm run references`), and committed. 325 rows, plus two internal page entries written in
the script because a cross-reference to `/method/` is not a document.

The Source column mixes a document title with an editorial note, and it does so four ways
consistently: an italicised `*Title*`, a quoted `"Headline"` for news, `Title — note` for a
page or dataset, and `Author, "Article", *Journal*… **note**` for a full citation, where the
note opens with the bold run. Splitting on only the italic form leaves two hundred
three-hundred-character "titles", so the parser takes whichever separator comes first, the
em dash or the bold run. This is a property of how the register is written, not a guess per
row: change the convention in the register and this script has to change with it.

Two smaller decisions worth keeping. The `date` field is the register cell verbatim, because
it carries *undated*, *not recovered* and *accessed 10 Sep 2026*, and a numeric `year` is
derived only where the cell is not purely an access date, since when we looked at a living
page is not when it was published. And `Reference.href` is required by the type, so the eight
rows whose document was never recovered carry an empty `href` and the pages render "no link
to follow" rather than a link that goes nowhere.

---


## A `ready` flag cannot suppress a paint that has already happened

**11 September 2026.** `ScenarioProvider` carried a `ready` boolean, documented as
being there "to avoid a flash", and nothing in the codebase read it. The reason it
was never consumed is structural rather than an oversight.

The sequence on a static export is: the exported HTML carries the default scenario,
React hydrates it, a passive effect then reads `localStorage`, and a second render
follows. The browser paints between hydration and that second render, so a reader
whose stored choice is the crustal scenario genuinely sees a frame of Cascadia
bands. A flag set in the same passive effect is set *after* that paint. Anything
consuming it would have had to hide the bands in the exported HTML too — which
costs every reader without JavaScript the content, on a public-information site.

The fix is to move when the preference is applied, not to cover the moment it is
wrong. A layout effect is committed before paint; a passive effect is not. React
warns if `useLayoutEffect` runs on the server, so the provider picks the hook by
environment (`typeof window === "undefined" ? useEffect : useLayoutEffect`) — the
standard isomorphic-layout-effect shape, and safe because the choice is constant
within an environment so hook order never changes. `ready` was then removed: a
flag nothing can usefully read is worse than no flag, because the next person
assumes the problem is handled.

A render-blocking inline script in `<head>` stamping the preference on the root
element would remove the flash from the very first paint, and is the better answer
if the site ever grows a second persisted preference. It has to live in
`src/app/layout.tsx`.

## An impact cell's source key and a citation key are the same key

**11 September 2026.** `ImpactCell` used to render `Source: {impact.source}` linked
at `/sources/` whatever the string was, so the band grid and `components/citation.tsx`
were two unconnected sourcing mechanisms and a typo in a key was invisible. Both
now resolve against `REFERENCES` in `src/content/references.ts`, and the register
keys from `docs/research/sources.md` are used verbatim in `Impact.source`.

An unresolved key fails visibly in both, the way `Cite` renders `[?]`. That matters
more than it sounds: the register has 347 keys and the site has 26 impact cells, so
a silent fallback would be a claim on the page resting on nothing, presented as
sourced.

## `Impact.evidence` exists because a band is not a measurement of its column

**11 September 2026.** Most published work assesses one design earthquake, so the
same mechanism sentence stands in both scenario columns. Two of the site's sources
pull in opposite directions, which is easy to get backwards: `MV-WATER-22` models
the magnitude 9 megathrust only, so its 267 main failures are a megathrust figure
sitting in the crustal column; `PEIRS` is the province's **crustal M7** planning
scenario, so everything resting on it (sanitation, fuel, food) is a crustal figure
sitting in the Cascadia column. `DCRRA-APPC`'s 65% is neither — it is stated at the
building code's design ground motion, which is a hazard level rather than a
scenario, so it needs no evidence line and must not be given one.

`evidence` is written only where the assessment does not model the column it sits
in. Filling it everywhere would train readers to skip it.

---

## A failed fetch saved with a .pdf extension is not a PDF

**10 September 2026.** Two candidate URLs existed for one Metro Vancouver agenda,
differing only in `Jun` against `June`. Both had produced a local file with a `.pdf`
name, so both looked retrieved.

They were not the same thing. One was 8.6 MB of agenda; the other was 115 KB of
**JavaScript** — a site's shell page, returned with a 200, saved under the name the
fetcher asked for. Nothing in the filename or the exit status said so.

The check is one command: `file` on the artefact, or a page count. A saved response is
not evidence of a successful retrieval, and a `.pdf` extension is a request, not a
result. This is the same failure as a 403 recorded as an absence and a broken search
recorded as a gap — **the tool succeeded, the retrieval did not, and only the content
tells you which.**

**How confirmed:** the smaller file identifies as JavaScript source; the larger one
carries the agenda cited in `research/systems/dams-and-reservoirs.md`.

---

## A broken search looks exactly like an absence

**10 September 2026.** The dams page said no current seismic assessment of Cleveland
or Seymour Falls had been published. It was wrong. Dam Safety Reviews for both were
completed in 2024 and their conclusions are published every year in the GVWD Dam
Safety Program Annual Update, tabled at Metro Vancouver's Water Committee. Six
editions were retrievable.

The earlier pass missed them because **metrovancouver.org's own search returns HTTP
500**. A site search that errors, returns nothing, or silently drops PDFs produces
precisely the same result as a subject nobody has written about — and nothing in the
output says which it was.

Two habits follow. Run a **control query** against any site search before trusting a
negative: search for something you know is there. If the control fails, the search is
broken and every negative from it is void. And prefer the **document series** to the
search box — annual reports, board and committee agendas, statutory filings. A body
that must report something reports it on a schedule, and the schedule is enumerable
even when the search is not.

**How confirmed:** six annual updates retrieved by walking committee agendas after
the search returned 500.

---

## Trace a discrepancy; never average it

**10 September 2026.** Two Metro Vancouver sources gave different figures for the same
dam project: $80.5 million, in design, 2026–2032, against $25 million, not started,
2028–2034. The tempting resolutions are to take the newer, take the larger, or split
the difference.

Tracing it found the actual answer: the February agenda's PDF has name and data
columns that desynchronise under extraction — nine or more consecutive rows carry
data with no name — and the figures that appear to sit against Cleveland Dam belong
to **Burnaby Mountain Tank No. 2 and No. 3** and **Port Moody Main No. 3**. Averaging
would have put a water tank's capital budget on a dam, in a document whose entire
value is that its numbers are checkable.

The rule: **two sources disagreeing is a fact about the sources, not a range to
collapse.** Find out why they differ before deciding what to print. Layout-driven
extraction errors are common in agenda PDFs and are invisible in the extracted text —
a table where several consecutive rows have data but no label is the tell.

**How confirmed:** the July reporting is structurally sound — one line per row, clean
descending sort — and its figures are the ones used.

---

## Silence in one document is not evidence, if another document is unread

**10 September 2026.** FortisBC's 2026 Long Term Gas Resource Plan — its public
investment roadmap to 2050 — contains no occurrence of "seismic" or "earthquake".
That was verified properly, by full-text extraction, and recorded as a sourced
absence: the gas system's own long-range plan does not treat earthquake.

It was wrong. FortisBC's 2024 Gas System Resiliency Plan, filed with the BCUC, is
a quantitative seismic risk assessment — 511 occurrences of "earthquake", Hazus
fragility curves, six earthquake damage mechanisms, 58 assessed vulnerabilities,
one of them driven by earthquake lateral spreading with a 61-day mean outage. The
document that would have contradicted the inference was known to exist, was listed
as unretrieved, and was sitting behind an HTTP 403.

The failure was not the search. It was writing a finding whose whole force came
from an absence, while a named, identified document that bore directly on it was
still unread. **An absence is only evidence once the documents known to be
relevant have been read.** Where one is outstanding, the honest claim is narrower:
this document does not address it, and that one has not been seen.

The narrower claim survived and is still interesting — a utility whose public
roadmap frames resilience as a supply-and-demand question assesses seismic hazard
extensively in its regulatory filing. That contrast is real. The accusation the
broader claim implied was not.

**How confirmed:** the 2024 plan retrieved and searched; the finding withdrawn in
`research/systems/gas.md` rather than quietly edited.

---

## Three routes that unblocked documents recorded as unreachable

**10 September 2026.** Each of these turned a "not retrievable" note into a primary
source. All three are worth trying before recording an absence.

**ICLR.** Every `iclr.org/resource/...` URL in the site's search index is stale and
404s. The working pattern is `https://www.iclr.org/iclr-embed/?file=<base64 of the
numeric id>`, which returns a viewer shell whose markup contains the real
`wp-content/uploads/YYYY/MM/` PDF address. The Vancouver fire files were
re-uploaded under `2025/10/`, which is why the old paths broke. Cite the uploads
URL, and expect it to move again.

**NRCan after GEOSCAN.** `geoscan.nrcan.gc.ca` no longer resolves at all, so every
GEOSCAN link still printed on live NRCan pages is dead. Its successor, OSTR/DOST,
is a DSpace 7.3 instance, and the server-side-rendered HTML of any
`ostrnrcan-dostrncan.canada.ca/search?query=` page leaks the backend API host.
That API is unauthenticated: `/discover/search/objects?query=` returns full Dublin
Core including the report number, and `/core/items/{uuid}/bundles?embed=bitstreams`
returns direct PDF addresses. This is the route to any GEOSCAN-era publication.

**Wayback CDX scales inversely with domain size.** Filtered CDX scans succeeded on
small hosts and timed out on `fema.gov`, `oregon.gov` and `media.defense.gov`.
Narrow the host, not the filter.

**A pattern worth noticing across all three:** the documents were not withdrawn.
The publishers reorganised, and the addresses everyone cites were left pointing at
nothing. Two federal hosts in this project have died outright —
`geoscan.nrcan.gc.ca` and `afhistory.af.mil` — and in both cases the document
survives only in a web archive. Where a citation matters, record the archive
capture alongside the live URL, because the live URL is the one that will fail.

---

## Some public document servers block on User-Agent alone

**10 September 2026.** `docs.bcuc.com` returned HTTP 403 to two agents across two
research passes, and both recorded the documents as unreachable. They are not. A
plain `curl` with a desktop browser User-Agent, an `Accept:` header and a
`Referer` returned HTTP 200 on the first attempt for both PDFs.

The same pattern holds for `council.vancouver.ca`, `vancouver.ca` (which also
wants a `Referer`), `biv.com` and the Glacier Media titles, `crtc.gc.ca`, Sphere
and YVR. `egbc.ca` sits behind a Cloudflare challenge, which is a different and
harder problem.

Two consequences worth carrying. A "403" in a research note means *not yet
retrieved*, never *not available* — and the distinction matters, because the BCUC
403 cost this project a wrong finding. And any absence recorded against a source
that 403s should be re-tested with a browser User-Agent before it is published.

**How confirmed:** both BCUC PDFs retrieved in full on the first attempt after the
header change.

---

## A confidence marker certifies a route, not a feeling

**10 September 2026.** The research report marked claims [A] where the source was
a government body, on the reasoning that government bodies are reliable. Two
findings showed that this is the wrong test.

The George Massey Tunnel has been described as "seismically retrofitted" in two
official government releases, and contradicted twice by the engineering memo the
Ministry itself commissioned. A press release is [A] evidence that the release
says what it says. It is not evidence for an engineering fact its own engineers
dispute.

In the other direction, a Washington State after-action report was cited [A] for
Metro Vancouver claims and was driving a band in the system grid. It is a
Washington document. The rubric's own definition of [C] says out-of-region data
is never a Vancouver number — including when the out-of-region body is a
government.

The rule that came out of it, now in `research/CONVENTIONS.md`: the marker
records **who said it, in what document, and how it reached us**. Institutional
authority is not one of the inputs.

**How confirmed:** MoTI releases against the 2019 COWI memo; the rubric against
its own application.

---

## Verify a claim against the document, not against the citation

**10 September 2026.** The report's strongest hook was that BC still advises 72
hours of self-sufficiency while Washington moved to two weeks. The PreparedBC
guide was cited correctly — right title, right URL, right revision date. Fetching
it and searching the text returned **zero** occurrences of "72 hours", "72-hour",
"three days" or "three-day". It says "at least two weeks", three times.

The claim was almost certainly true once, and survived a draft because everything
around it checked out. A correct citation is not evidence that the cited document
supports the claim, and the only way to know is to open it.

Two other claims failed the same way in the same pass: "grossly inadequate" and
"humanitarian disaster within ten days" appear nowhere in the Washington
after-action report they were attributed to — they are newspaper quotations from
an unpublished draft — and the "85% of southwest BC's refined fuel" figure is not
in the Global News article it cites, which says something else about somewhere
else.

**How confirmed:** full-text extraction and search of each cited document.

---

## The province has its own scenarios, and they are better than ours

**10 September 2026.** Two BC government documents that no earlier search had
surfaced carry more than the site had assembled from every other source together.

The **Provincial Earthquake Immediate Response Strategy** (EMCR, v1.1 August
2026) uses a shallow crustal M7.0 in the Georgia Strait affecting Greater
Vancouver as its primary planning scenario — the same event the site's crustal
scenario is built on — with red and yellow tag counts, casualties, displaced
households, direct losses, a recurrence interval and a duration. The
**Disaster and Climate Risk and Resilience Assessment** (October 2025) does the
same for Cascadia.

Between them they closed six open questions and moved three system pages out of
NOT ASSESSED. The lesson for future gaps: before concluding that something is
unpublished, look for the **operational plan** rather than the public-information
page. Response plans state assumptions and numbers that outreach material does
not.

**How confirmed:** both documents retrieved and read; figures cross-checked
against the narrative text, which repeats them in prose.

---

## Canada has one earthquake modelling lineage, not several

**10 September 2026.** The report presented three casualty and loss estimates as
independent corroboration. They are not independent. The DCRRA's figures are
NRCan RiskProfiler outputs for `SIM9p0_CascadiaInterfaceBestFault` — the same
catalogue run the site already cites — and its loss family restates Conference
Board of Canada 2016. PEIRS's figures were developed by NRCan too.

A range that comes from one model run stated three times is not a range. Where
the site shows more than one number it must show who produced each, or it is
manufacturing agreement.

**How confirmed:** DCRRA endnotes 21, 22 and 25 name the RiskProfiler scenario;
PEIRS p.19 names NRCan.

---

## Insured loss and economic loss are different quantities

**10 September 2026.** The report compared total economic loss estimates against
the insurance industry's claims-paying capacity and concluded that every
published figure exceeds capacity by two to four times. Insurers pay insured
losses. The published insured figures — $20.4B and $26B — are both *below* the
~$30B capacity.

The error survived because both quantities are denominated in billions of
dollars and appear in the same sentences in the source material. Any comparison
between two money figures needs the question asked explicitly: money paid by
whom, to whom, for what.

**How confirmed:** re-derived from the report's own table; the two independent
insured-to-total ratios agree closely at 27.2% and 26.5%.

---

## An absence that has been searched for is a finding

**10 September 2026.** Six of twelve system pages were empty because nothing had
been found. Searching properly turned most of those into statements about the
world rather than statements about our effort.

Metro Vancouver's governing drinking water plan names seismic risk as a core
pressure and states no restoration time — a far better citation for "no published
estimate exists" than any amount of unsuccessful searching. FortisBC's roadmap to
2050 contains zero occurrences of "seismic". The City of Vancouver stated in an
FOI response that it holds no records on falling-glass casualties. Metro
Vancouver redacted the failure counts behind the water figures under FOIPPA, and
IPREM withholds part of the debris-clearing plan.

Those last two matter especially: **deliberate non-publication is not absence.**
A document that exists and is withheld is a different fact from a document that
was never written, and the site should not flatten them together.

**How confirmed:** each absence recorded with the channel searched and the date,
per `research/CONVENTIONS.md`.

---

## The safety artwork everybody recognises is nobody's to reuse

**12 September 2026.** The canonical Drop, Cover and Hold On illustrations come from the
Earthquake Country Alliance and the Great ShakeOut, and PreparedBC credits an ECA graphic
for the wheelchair, walker and cane panel in its own guide. Neither publisher licenses
them. The ShakeOut graphics page carries a bare "© 2026 Statewide California Earthquake
Center" and states no terms at all; the ECA page says the graphics are "available for use
in campaigns and outreach of all kinds", which is an invitation and not a grant. Every
other result is Getty, iStock or Dreamstime. So the register's rule applies, the same way
it applied to MVSMMP: unconfirmed means do not reproduce.

**The way through is the same one the `gov.bc.ca` entry already describes.** A body
position stated in prose is a fact, and facts are not copyrightable; what is forbidden is
reproducing somebody's layout, screenshotted, redrawn or "adapted from". `/shaking/` now
carries the site's own three-panel schematic, drawn from the sentences in the PreparedBC
guide rather than from anyone's artwork. That is the better outcome regardless of
permission, because the ECA drawings are in exactly the campaign register section 8 of
the style guide rules out.

**It also produced the site's first pictogram**, and the mark grammar in
`src/components/figures/README.md` does not reach one: solid fill, hatch, axis and tick
all encode quantities, and a drawing of where to put your body has none. Recorded there
rather than here, along with the two things a pictogram still owes — named limb weights,
because `FIG_STROKE` is a hairline and a body is not, and the same thumb test for its
greys.

**How confirmed:** licence check against both publishers' own pages, recorded in
`licensing.md`.

---

## Map licensing is settled per dataset, and it cost the flagship graphic

**10 September 2026.** The Metro Vancouver microzonation layers are not openly
licensed. They carry custom ICLR terms: share-alike, with commercial and
electronic publication of the maps, data, or conclusions about them reserved to
prior written approval. The reservation covers electronic media and extends to
conclusions *about* the maps, which is broad enough that the judgement would not have
been ours to make — so on 10 September 2026 the project decided not to seek approval at
all. The ground-conditions map, the liquefaction choropleth and the
critical-infrastructure overlay are not built; ground conditions ships as text.

The map the site *can* build today is the Dedicated Fire Protection System
coverage boundary, under the Open Government Licence – Vancouver. The NRCan
scenario catalogue is Open Government Licence – Canada and carries no risk.

One trap recorded for the overlay work: the BC transmission lines dataset is
openly licensed, but **voltage attributes are withheld by agreement with BC
Hydro**, so a map built from it cannot imply voltage or criticality.

**How confirmed:** per-dataset licence check recorded in `licensing.md`.

---

## A working search over the wrong unit of publication is still a broken search

**10 September 2026.** This folder recorded, twice and as a mandatory date guard, that the
Auditor General had never published a follow-up on its 2021 dam-safety audit. It was
confirmed against the OAG's own search API, which returns exactly one dam-safety
publication. The API was not broken. The query was not wrong. **The unit of publication
was.**

The follow-ups are chapters inside the *Annual Follow-up Report* series — one report a
year covering every outstanding audit at once. No query naming a dam would ever have
surfaced one, because the document is not about dams. Three editions existed the whole
time, and the most recent puts implementation at **two of nine recommendations**.

This is the same family as "a broken search looks exactly like an absence", and it is the
harder case, because nothing looks broken. The habit it produces: **when a body is
required to report on a schedule, ask what the reporting unit is before concluding
anything from a title search.** Annual reports, follow-up series, quarterly filings and
committee minutes all hide subject matter inside a container named for its cadence.

**How confirmed:** three editions retrieved directly, with per-recommendation detail.

---

## Before believing a negative from a host, confirm the host can produce a positive

**10 September 2026.** `dfo-mpo.gc.ca` returned **HTTP 200 with a byte-identical
3,327-byte stub for every path tried — including one constructed rather than found.** Exit
status 0, a 200, a page that rendered. A negative drawn from it would have been worthless
and would have looked exactly like a result.

This is the third shape of one lesson. A 403 is not an absence. A `.pdf` extension is a
request, not a result. And now: **a 200 is not a document.** The general rule generalises
all three — *before believing a negative from a host, confirm the host can produce a
positive.* The check is one line: request a deliberately bogus path on the same host and
compare the response to a real one. If they match, the host is telling you nothing.

Two hosts in this project behave this way, and two more return a rendered shell with no
content. Neither failure raises an error anywhere.

---

## A municipality's assurances about its own buildings live in minutes, not reports

**10 September 2026.** Whether Richmond's fire halls are built to a post-disaster standard
is answered — "all Richmond firehalls are rated to withstand major disasters" — by the fire
chief, **answering a councillor's question, recorded in committee minutes.** The written
staff reports on the same halls contain zero occurrences of seismic, earthquake or
post-disaster, and say only "satisfy related codes".

The City's public site search indexes report PDFs. Its council decisions database indexes
minutes text. **Neither indexes the other**, so each channel is individually complete and
jointly blind, and a search of the obvious one returns a clean, false absence.

The habit: **for anything a resident might ask a council about, search the minutes series
before concluding nothing was said.** And carry the weakness with the finding — an
officer's oral assurance in minutes is real evidence of what the City believes, and it is
not an engineering certificate.

---

## The federal impact assessment registry is a full-text seam, and it is barely touched

**10 September 2026.** Every document filed in a federal environmental assessment is
full-text searchable and downloads without headers. Roberts Bank Terminal 2 alone indexes
**4,804 documents**, and the search returns matched sentences plus the file name.

It yielded, in one pass: the geotechnical and seismic section this folder had recorded as
unretrievable, Natural Resources Canada's own published review of a Lower Mainland
project's seismic design, and a federal review panel's statement of the damage mechanism.
It is the richest unexploited primary-source seam this project has found, and it covers
geotechnics, seismic hazard and marine infrastructure on the Fraser delta.

**The habit:** where a project required federal or provincial environmental assessment, the
assessment registry holds engineering that is published nowhere else — including the
regulator's own critique of it, which is stronger than anything the proponent writes.

---

## Some publishers have no permalinks, and the address means something different each week

**10 September 2026.** Natural Resources Canada publishes its only city-level earthquake
early-warning figures on a blog with **no per-post permalinks**. Posts are addressed by an
`?offset=` page, and a given post's offset **shifts every time a new post is published**.

A citation to `offset=36` does not break. It comes to mean a different post, silently, and
a checker following it finds a real page that does not say the thing. This is worse than a
dead link, which at least announces itself.

**The rule:** where a source has no stable address, cite a dated web-archive capture and
quote the post's own headline and date in the citation, so a reader can find it again even
if every URL in the chain fails.

## A closed question logged beside the queue is how the queue goes stale

**10 September 2026.** `open-questions.md` recorded closures in a section at the foot of
the file rather than striking the items they closed. It read as diligence — nothing
thrown away, the reasoning preserved — and it produced a register that contradicted
itself. Item 30 asked whether the Auditor General's 2021 dam-safety findings were ever
followed up and answered "confirmed that no follow-up has been published"; 170 lines
below, the same file recorded three follow-ups and two of nine recommendations complete.
Eleven of thirty-seven items were answered and still listed.

Two subject files had the same defect one level down, and it was invisible until the
correction narrative was stripped out: the dams file carried "implementation not
established" in its guard list against "2 of 9 as at 31 March 2025" in its body, and the
health-care file said no ICU count is published anywhere directly above per-hospital ICU
counts for six hospitals.

**The mechanism is always the same.** A correction is written in one place while the
claim it corrects stays live in another, and both are true-looking prose in the same
voice. Nobody re-reads a 600-line file end to end, so the two never meet.

**The rule:** a closed question is struck from the queue and its answer goes to the file
that owns the subject. One claim, one home — the convention already existed and a log is
how it gets broken while appearing to be followed. Where a correction changes a fact,
grep the whole folder for the old fact before writing the new one down.

## Reorganising a document is how you find out it contradicts itself

**10 September 2026.** A pass that reordered twenty-five research files by subject rather
than by discovery found fourteen internal contradictions. None was found by looking for
contradictions. They surfaced because reordering forces someone to read a long file end
to end, and nobody does that in the normal course of work — a file is written in pieces,
each piece read in isolation, and a claim corrected in section 3 can sit beside its own
negation in section 9 for as long as nobody reads both in one sitting.

The most expensive one was not a fact at all. `open-questions.md` described the project's
**only blocking item** — ICLR's written approval for the microzonation maps — as
*requested*, while `licensing.md` carried sending that email as an action still
outstanding. One word, and it turned "waiting on a reply" into "waiting on a request
nobody has written". A blocked project that believes the ball is in someone else's court
does not chase it. **Surfacing it is what let the owner settle it** — shown the choice
between writing the email and giving up the map, they gave up the map, which had been the
real decision all along and was invisible while the item read as *awaiting reply*.

**The rule:** treat a restructure as an audit, and budget for it. Where two files describe
the same status, the one that owns the *action* wins over the one that merely mentions it.
And check the status of anything described as blocking before believing the block.

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

---

## `npm run build` rewrites tsconfig.json, and the diff is not yours

**11 September 2026.** A build prints "the following mandatory changes were made to your
tsconfig.json" and then rewrites the file: `jsx` from `preserve` to `react-jsx`, an added
`.next/dev/types/**/*.ts` include, and every inline array expanded one element per line.
The whole file reformats, so the diff looks like deliberate work and will be staged by a
`git add -A` without anyone noticing.

It is Next.js maintaining its own config, not a change the branch meant to make. Check
`git status` after a build and restore the file unless the change is the point of the
commit. The same caution applies to any tool that edits config in place during a build.

---

## Tailwind's cascade layers are what let `.prose-body` style bare elements

**11 September 2026.** Authored long-form copy is written as plain `<ul>`, `<h3>`,
`<blockquote>` and `<table>` inside `Prose`, with no classes on them. Preflight has
already stripped list markers, heading weights and table borders, and the project has
no typography plugin, so those elements need an element layer of their own.

The rules live in `@layer components` in `globals.css`. Layer order, not specificity,
decides the winner between layers: `components` beats Preflight in `base`, and every
Tailwind utility in `utilities` beats `components`. That is the whole reason a
component can carry utilities in its markup and still sit inside `.prose-body` without
a specificity war. It also means a rule written outside a layer would beat all three,
so anything added to that file belongs inside one.

Two rules are scoped to direct children anyway — `.prose-body > blockquote` and
`.prose-body > table` — because `Quote` and `DataTable` draw a rule and a border of
their own on a wrapper the utilities cannot reach into. Without the `>`, a quotation
inside a run of prose came out with two left rules.

## A scrollable table has to be reachable from a keyboard

`DataTable` puts the table in an `overflow-x-auto` container so a wide table scrolls
inside its own box instead of making the page scroll sideways. A pane that scrolls only
by dragging cannot be read without a mouse, so the container is a focusable region:
`tabIndex={0}` with `role="region"` and `aria-labelledby` pointing at the table's real
`<caption>`. This is the one place on the site where a role beats a semantic element,
because there is no element that means "scrollable pane".

## The lever is a section, not an aside

`Lever` used to render an `<aside>` with an `<h3>`, which kept "What you can do" out of
the contents rail and out of the heading order. Every copy file gives it an
`## What you can do` heading, and it is the thing a reader who already knows the risk
came for. It is now a real `<section>` with an `<h2>`, still inside its accent panel:
the rail query is `main section[id] > h2`, so the heading has to be a direct child of
the section, which is why the panel is the section rather than a div inside it.

## The contents rail observes headings, not sections

The rail now lists `<h3>` subheads under their `<h2>`, which meant the
IntersectionObserver could no longer observe section elements: a section and a subhead
inside it both intersect, and sorting by position always resolved to the outer one, so
a subhead could never become current. It observes the heading elements themselves
instead. They are short, the observer band is a thin strip near the top of the
viewport, and so at most one is inside it at a time. An `<h3>` is listed only if it
carries an id, which is what `Subhead` gives it; a bare `<h3>` stays out of the rail.

---

## Only the first marker for a key carries an id, and it claims it

**11 September 2026.** The duplicate `id="cite-1"` recorded further up this file is
fixed. The number still comes from the key's position in the declared array, because
that is the citation contract, but the id no longer follows from it automatically: the
first marker to render for a key takes `id="cite-N"` and every later marker for the same
key renders with no id at all. Only one element needs one, since the only thing pointing
at it is the backlink from `ReferenceList`, which now lands on the first marker by
design rather than by accident.

"First" is decided by a small per-page map held in the citation provider. A marker asks
whether its own `useId` holds the key, and the map answers the same way every time it is
asked, so the claim is idempotent: a re-render, a Strict Mode double invocation and
hydration all give the same marker the id. Markers render in document order on the
server and again on the client, so the server and the browser agree on which one it is.

## A client component that imports the register ships all 325 entries

**11 September 2026.** `citation.tsx` was a client component, because opening a
reference in place needs state, and it imported `REFERENCES` at module scope. Every page
carrying a citation therefore shipped the whole generated register, about 160 KB of
source and 145 KB of it minified into a chunk, to read the handful of documents that
page cites.

The fix is a boundary rather than a rewrite. `citation.tsx` is now a Server Component
that resolves the page's declared keys and hands the resolved entries to a small client
provider in `citation-client.tsx`, which imports no register. What crosses into the
browser is the page's own references and nothing else.

`band.tsx` had the same fault for the same reason, and it mattered as much: it was a
client component whose `SourceLine` read the register, so every system page shipped the
register a second way and the citation fix alone would have changed nothing there. The
impact cell and its source line now live in `impact-cell.tsx`, a Server Component;
`band.tsx` keeps only the drawing, which `system-grid.tsx` can import from the client
without dragging the register along. A page with citations went from 739,715 to 595,092
bytes of JavaScript, at the cost of about 10 KB of HTML for the entries that now travel
in the payload.

The general rule: a `"use client"` file imports data modules at its own page's expense.
Resolve the lookup on the server and pass the answer across.

## The lever is optional, and route templates spread it

**11 September 2026.** `PageModule.lever` is optional. The principle is no doom without
a lever, and `/method/` carries no doom: it explains the rubric. It was typed
`Omit<PageModule, "lever">` to say so, which is a workaround rather than a statement, and
every other page still carries one.

`PageLever` is now `LeverProps`, the props of `Lever` itself, and each route renders
`{module.lever ? <Lever {...module.lever} /> : null}` rather than naming four props. A
slot added to the component is then a slot a module can fill without eight route files
changing, which is what the old spelling cost when the lever grew a closing paragraph and
an overridable standing link.

## The register is copy, and its defects render

**11 September 2026.** `docs/research/sources.md` is no longer only a research file: it
generates `src/content/references.ts`, and every cell reaches a reader through the
citation popover and `/sources/`. The lesson from repairing a pass over the generated
output is that the two halves have to be checked against each other, because the
generator faithfully reproduces whatever the register got wrong.

Four specific traps, all found in live rows:

- **A URL cell holding prose is a URL cell.** `extractHref` takes the first `https://` in
  it, so a row recording "reached only through the proceedings index at
  https://www.bcuc.com/OurWork/Proceedings" published the index as the source. Two BCUC
  rows and a BC Hydro row did. A route that is not the document is written without a
  scheme, so it stays a note to a researcher rather than becoming a link to a reader.
- **An em dash inside a title breaks the split.** `splitSource` only recognises a title
  that starts the cell. In the register's author-first shape, the first ` — ` becomes the
  title/note boundary wherever it falls, so six rows shipped a title cut in half:
  "Zatar & Harik, "Bridge embankments", "Wyllie and Norrish, *Rock Fall Containment for
  Rock Cuts, Highway 99". Putting the quoted or italic title at the front of the cell
  fixes it without changing a character of the title.
- **A bold editorial note has to open the note, not close it.** `KAUR-2026` bolded
  "not retrieved" at the end, so the title ran 372 characters to reach it.
- **Licence strings are read by two files.** `OGL – Canada`, `**OGL–Canada**` and
  `OGL–Canada` are one licence and three strings; `/licences/` and the generated entries
  only agree if the register spells each one the way `licensing.md` does.

## Search engines refuse a script; the archives and the DOI registries do not

**11 September 2026.** Recovering lost URLs for the register, every general search engine
refused an automated request: Bing returned no organic results, DuckDuckGo's HTML and
Lite endpoints served a CAPTCHA after two queries, Mojeek returned an empty result list.
Three machine-readable indexes answered every question instead, and they are the route to
use next time:

- **`api.crossref.org/works?query.bibliographic=`** resolved a journal article and a
  Geological Survey open file from their titles alone. GSC Open Files carry `10.4095/…`
  DOIs that redirect to the NRCan repository, so an "Open File NNNN" with no URL is
  almost always recoverable.
- **The Wayback CDX API** — `web.archive.org/cdx/search/cdx?url=<host>&matchType=domain`
  — lists every path the Archive has ever seen on a host. Grepping 20,000 `egbc.ca` paths
  for "seismic" found a guideline PDF that a site search could not, and the same trick
  recovered a 2014 trade-press PDF from a subdomain that no longer resolves.
- **A browser user-agent changes the answer.** The EGBC PDF the register had recorded as
  "403 to automated fetch" serves normally to `curl` with a desktop UA. `crtc.gc.ca`
  genuinely refuses both, which is worth recording on the row rather than retrying.

Two hosts that defeat this: `docs.bcuc.com` puts an Azure WAF in front of documents keyed
by an opaque `doc_NNNNN` id whose filename must match exactly, so a path that was not
captured at the time cannot be reconstructed; and probing for one trips the WAF within a
few requests. The BCUC's own exhibit lists are the way back in — they name which exhibit
an appendix belongs to, which is worth recording even when the file itself is not.

## The QA pass is a script, and lives in `scripts/qa/`

**11 September 2026.** Ten pages built by ten agents each verified only themselves,
and nothing had been looked at across the whole site, at phone width or in dark mode.
`scripts/qa/` is that pass, written so it can be rerun rather than redone:

- `serve.mjs` serves `out/` the way a host does. A `file://` run is not equivalent:
  the export writes `about/index.html` and every internal link carries a trailing
  slash, so `file://` resolves neither, and Next's segment prefetches 404 differently.
- `checks.mjs` is injected before each page loads and measures; `audit.mjs` drives
  30 routes at 390 px and 1280 px in both themes and decides what counts as a defect.
  Measurement and threshold are kept apart so a rerun after a fix is comparable.
- `interaction.mjs` covers what a snapshot cannot: tab order, focus rings, the
  citation popover, and the scenario flash. `copy.mjs` runs the style guide's
  sentence rules over rendered text. `shoot.mjs` writes screenshots.

Two traps worth keeping. Git Bash rewrites a leading slash in an argument into a
Windows path, so a route reaches these scripts by environment variable, never on the
command line. And a mark's ground inside an SVG is not its ancestor's background but
the last opaque rect painted under it: without that, `SiteMark`'s paper-coloured
trace reads as an invisible stroke on all 30 pages, because it sits on an ink tile.

## An open end drawn in the bar's own colour is a closed end

**11 September 2026.** In `PrepareDaysByDocument` the open-end arrowhead is
`FIG_COLOR.muted` at the right edge of the bar. Where a row's solid bar already
reaches the domain end, as PreparedBC's 2024 guide does at 14 days, the arrowhead is
muted on muted: 1:1 against its own ground, and it does not render. The row then
looks identical to the one row on the figure that genuinely closes at 14, so the two
marks that mean opposite things draw the same. The arrowhead over a hatched bar in
the row below it renders correctly, which is what made the miss hard to see by eye.

The general rule the kit should carry: a mark that qualifies a bar has to be drawn
against the bar, not in the bar's colour. The hatch already solves this by filling
its own background with `--color-paper-raised`; an arrowhead needs the same care, a
knockout outline or a colour that is not the fill it sits on.

## `--color-ink-faint` is below AA in both themes

**11 September 2026.** Measured against the grounds it is actually painted on:
`#6e7276` on `--color-paper` is 4.48:1 and on `--color-accent-soft` 4.14:1; in dark
`#797d82` on paper is 4.45:1, on paper-raised 4.13:1, on accent-soft 3.62:1. AA for
body-sized text is 4.5:1, and the token carries the 12 px floor almost everywhere it
appears: figure axis labels, the "Source" line, the contents rail's own heading, the
band label for "Not yet assessed". The light value misses by 0.02.

Two band ramp colours have the same problem where they are used as text rather than
as fill. `BandPill` colours its written label with the band colour, so on
`--color-paper` "Medium" (`#b57a14`) is 3.37:1 and "Low" (`#4f7f4a`) is 4.34:1.
Severity survives without colour because of the segment meter, but the label beside
the meter is still text and still has to be readable.

## Static export cannot apply a stored preference before the first paint

**11 September 2026.** `ScenarioProvider` applies the stored scenario in a layout
effect, on the reasoning that a layout effect commits before paint. It does, but the
paint it precedes is the hydration commit's, not the exported HTML's. Measured on
`/scenarios/` with `scenario=crustal` stored, the first animation frame at +105 ms
shows Cascadia checked and the switch lands at +139 ms: about a third of a second of
the scenario the reader did not choose, on every page load.

Nothing in React can fix this, because the flash happens before React exists on the
page. The only cures are a blocking inline script in `<head>` that reads
`localStorage` and sets an attribute the CSS keys off, or accepting the flash. It is
worth writing down that the layout effect is not the fix it is documented as being.

## The quiet token has to clear AA on the tinted ground, not the paper one

**11 September 2026.** `--color-ink-faint` was set by how it looked on paper and
then used on three grounds. Paper is the most forgiving of them, so tuning there
left the token failing on the other two: light `#6e7276` was 4.48:1 on paper but
4.14:1 on `--color-accent-soft`, and dark `#797d82` was 4.45:1 on paper, 4.13:1 on
paper-raised and 3.62:1 on accent-soft. It is now `#666a6e` in light (5.04 paper,
5.45 raised, 4.66 accent-soft) and `#8b8f94` in dark (5.67, 5.26, 4.62). The
binding ground in both themes is accent-soft, which is the tint the impact cell and
the hovered system card sit on, and it is the ground nobody checks.

The token is still the quietest text on the site: ink-muted reads 5.93:1 on light
paper against ink-faint's 5.04:1, and 7.54:1 against 5.67:1 in dark. Restraint
survives the correction, which is the point. Anything quieter than these two values
fails accent-soft, so they are a floor and not a preference.

## Colour that is also text has to pass as text

**11 September 2026.** `BandPill` set its written label in the band colour. As fill
the ramp is fine; as 12 px semibold type on paper, medium (`#b57a14`) was 3.37:1 and
low (`#4f7f4a`) 4.34:1. The label is now ink and the hue stays in the segment meter
beside it. Nothing is lost: the meter already carried both the hue and the ordinal,
so the pill still says severity three ways — fill, count and word — and it still
reads in greyscale. The general form: a ramp built for fills has no obligation to be
legible as type, so a component that borrows it for type has to re-measure it.

## A box that scrolls needs a tab stop, and this is the second time

**11 September 2026.** `SystemMatrix` was `overflow-x-auto` with no `tabIndex` and no
role, so at 390 px the Crustal M7 column — 196 px of 544 px — could not be reached
without a pointer. `DataTable` in `prose-blocks.tsx` already had the fix, and this
file already records the lesson from that one, which is what makes the repeat worth
writing down: the pattern was known and simply not reached for. The matrix now
carries `role="region"`, `tabIndex={0}` and an `aria-labelledby` pointing at a
screen-reader-only `<caption>`, and all 196 px are reachable with the arrow keys.

Worth making a habit of: every `overflow-x-auto` added to this codebase is a
keyboard defect until it has a tab stop and a name. Grep for the utility rather than
waiting for the audit to find the next one.

## The scenario flash is accepted, and the reason is in the content

**11 September 2026.** The comment in `scenario-context.tsx` claimed a layout effect
prevented the flash of the unchosen scenario. It does not, and the correction now
sits in the file. The flash stands: measured after the fix, the first frame at +41 ms
still carries Cascadia and the switch lands at +91 ms.

A blocking inline script in `<head>` is the standard cure, and it was rejected here
on what the flash actually is. A theme flash is an attribute: one line of script sets
it, CSS does the rest, and the markup is unchanged. A scenario is not an attribute —
the two scenarios differ in the band on every cell and in the words beside it, so the
only pre-hydration cure is to export both copies and hide one. That doubles the page
and hands a reader without JavaScript two contradictory sets of bands at once. The
rule to carry forward: an inline preference script is worth it only where the
preference is expressible as an attribute the CSS can read.

## Escape has to hand focus back, or it takes the reader's place with it

**11 September 2026.** The citation popover closed on Escape and unmounted the close
button focus was sitting on, so focus fell to `<body>` and the next Tab restarted at
the top of the document. A reader who checks a source mid-paragraph loses the
paragraph. The marker button now holds a ref and both Escape and the close button
return focus to it. A pointer dismissal deliberately does not: it never moved focus,
so it has nothing to give back.

## The rail column is decided by the exported HTML, not by the route

**11 September 2026.** `ArticleShell` reserved a 15 rem aside on every page, and
`TableOfContents` renders nothing below three headings, so the four unwritten Part 1
pages narrowed their body by 15 rem for an empty column. The rail is built
client-side from the DOM, so the route cannot know the count at build time — but the
DOM can, at parse time, and CSS can read it: the second column is applied by
`:has(>div>section:nth-of-type(3))` on the grid container. That is true or false in
the exported HTML before the first paint and before React exists, so the column is
right from the first frame and nothing moves when the rail fills in. Measured:
`/shaking/buildings/` 1112 px of body and no rail, `/shaking/ground/` 808 px and a
rail, cumulative layout shift 0 on both.

Two details that are easy to get wrong. The gap is set on the column axis only
(`lg:gap-x-16`): a plain `gap` adds a row gap under the empty aside in the
single-column case. And the base state names no `grid-template-columns` at all
rather than a one-column template, so the `:has()` rule is adding a declaration
rather than racing another utility for order within the layer.

## The exported segment prefetch 404s under `serve.mjs`

**11 September 2026.** Every desktop route in the audit logs a handful of console
404s for URLs shaped `/after/__next.after.__PAGE__.txt?_rsc=…`. The file exists, as
`out/after/__next.after/__PAGE__.txt`: the export writes the segment as a directory
and the client asks for it with the dots flattened into a filename. `serve.mjs` maps
a URL straight onto a path and does no rewriting, so it answers 404. It is a
property of the export and the static server, not of any page, and it is invisible
to a reader because the prefetch is speculative and the real navigation is a plain
HTML request. Worth a rewrite rule in `serve.mjs` if the noise ever hides a real
console error.


## A knockout with nothing under it is the same defect it was meant to cure

**11 September 2026.** After the open end on `/prepare/` was fixed, the audit still
found four marks at 1:1 against their own ground, all of them the mirror image of
that bug. `LandNode` on `/getting-around/` and the three provenance boxes on
`/method/` were outlined rectangles filled `--color-paper-raised`, sitting directly
on the figure frame, which is `--color-paper-raised`. Paper drawn on paper: the fill
painted nothing, in both themes, and the outline was doing all the work already.

The rule that covers both directions: **a knockout is only a knockout where there is
something under it to clear.** On `/prepare/` a paper slot under an arrowhead is
load-bearing because a solid bar runs through it, and the slot is bounded by that
bar. Here nothing ran under the boxes, so the fill was a mark with no ground, and the
honest form is `fill="none"`. Reaching for a paper fill by habit, because boxes
usually have one, is how the defect gets in. Before writing a fill, name the thing it
covers; if you cannot, do not paint it.

Two low-contrast marks in the same two files that the audit does not flag, because
they are above its 1.15:1 floor and merely faint:

- `ClearingOrder`'s rail was `--color-rule`, 1.30:1 on paper, while `Spine` two
  figures below it was `--color-rule-strong`, 1.68:1. Both are connectors. The rail
  is now `ruleStrong` too. `rule` is the kit's colour for the empty track behind a
  bar, where a filled bar sits over it and gives it contrast; used on bare paper it
  is close to nothing.
- The SVG `Meter` in `method.tsx` filled its unfilled segments with `rule`, though
  its own doc comment claims it is the same mark as `BandMeter`, which uses
  `ruleStrong`. The segments that carry the denominator were the faintest thing on
  the figure, so "two of three" read as a bare two. It now matches the component it
  says it mirrors.

What is left under 3:1 in those files is every `--color-rule-strong` hairline:
1.68:1 in light, 1.66:1 in dark, which is the value of the token itself and covers
`FigRule`, `Axis` ticks, spines and box outlines site-wide. Whether a structural
hairline should clear 3:1 for WCAG 1.4.11 is a question about the token in
`globals.css` and about the kit, not about any one figure, and it is not answerable
one file at a time.

## `serve.mjs` resolves `out/` from the working directory, not from its argument

**11 September 2026.** `startServer(port, root)` takes a root, but `resolveFile` reads
the module-level `ROOT`, which is `resolve(process.argv[2] ?? "out")`. The `root`
argument only reaches the 404 page lookup. So the server serves `./out` relative to
wherever node was started: `audit.mjs` works because it is run from the repo root, and
a one-off measuring script run from `scripts/qa/` gets a 404 for every route and a
page whose `<main>` is the not-found template. It is a convincing failure, because the
page loads, the status is invisible to `page.evaluate`, and the figures simply are not
there. Run QA scripts from the repo root, or pass the out directory as `argv[2]`.

## The thumb test, and the one new grey it needed

**11 September 2026.** Every structural hairline in every figure was drawn in
`--color-rule-strong`, which measures 1.68:1 on raised paper in light and 1.66:1 in
dark, and the empty track under a bar was `--color-rule` at 1.30:1 and 1.25:1. WCAG
1.4.11 asks 3:1 of a graphical object a reader needs in order to understand the
content, and it is level AA, so the axes, the scale lines, the spines, the node
outlines and the rule between the two water clocks were all failing a criterion this
site holds itself to.

Raising both rule greys to 3:1 would have fixed it and cost the brand: the same
hairline draws the divider under every section heading and the border of every card,
and the quiet of those is part of why the site reads as a reference work. So the
split is by role rather than by weight. `--color-mark`, `#868682` light and `#6e747b`
dark, is for a mark a reader needs; the two rule greys keep the furniture. The test
that decides which is in `docs/style-guide.md` section 8: cover the mark and see
whether the drawing still says what it said. An axis fails that test, a gridline
dropped from a labelled axis passes it.

Measured after the change, on `--color-paper-raised`: `--color-mark` 3.65:1 light and
3.62:1 dark, and on the accent tint, the least forgiving ground the site paints a
mark on, 3.12:1 and 3.18:1. `FIG_COLOR` now offers exactly two greys, `mark` and
`track`, and the `rule` and `ruleStrong` keys are gone, so a figure cannot reach for
a furniture grey by accident.

Two things this turned up that are worth keeping:

A hairline drawn across a filled bar cannot clear 3:1 against ink and mid grey at
once, and no token will fix it. `prepare.tsx` had already solved it twice, in
`SlottedRule`, which clears a slot of paper for the mark to sit in, and in `DayStop`,
which overhangs the bar by four pixels at each end so the part that carries the
reading is on paper. Both patterns are the answer; a darker grey is not.

The QA sweep's `marks()` check reports a phantom black fill on every `<line>`.
SVG's default `fill` is black, `getComputedStyle` reports it whether or not the
element can paint a fill, and a `<line>` never does. Two of them read as 1.23:1 in
dark mode, which is a mark nobody can see, except that there is no mark. Skip `fill`
on `line` and `polyline` before believing the number.

## The band meter is the one meaning-bearing mark still under 3:1

**11 September 2026.** `BandMeter` in `src/components/band.tsx` draws its unfilled
segments in `--color-rule-strong`, 1.68:1 light and 1.66:1 dark on raised paper. The
unfilled segments are the denominator: cover them and two of three reads as a bare
two, and the word beside the meter says "medium", not "of three". By the test in
section 8 that makes them load-bearing, and the fix is one token, from
`var(--color-rule-strong)` to `var(--color-mark)`.

It is recorded here rather than done because the change that introduced `--color-mark`
was scoped to the figure kit and the figures. The same swap was made in the two
figures that redraw the meter in SVG, `method.tsx` and `transportation.tsx`, so the
site currently draws the same mark two ways.

## A page's state is a field, not a paragraph

**11 September 2026.** Fourteen pages carried their evidence and no text, and each
one explained that in four or five paragraphs of standing prose. It read well and it
was the defect section 4 of the style guide names: a reader who came to find out what
happens to their water was being told how this project is organised and how far along
it is. The site-wide banner counted the pages, and `/after/` had a heading that did
the same, so the count had to be edited in three places every time a page landed.

The replacement is `status?: PageStatus` in `src/content/types.ts`, set on the
`SystemEntry`, on the `SHAKING_PAGES` entry, and available on a page module's `meta`
so a written page can be marked a draft while its text is under revision. The route
reads `page?.meta.status ?? entry.status`. `src/components/status.tsx` draws the two
things a reader sees: a `Draft` marker beside the page title and on the system card,
and a two-sentence notice above the body. 228 words of standing prose came out.

Three things were worth learning while doing it.

**The notice must not be a `<section>`.** The old text was a `PageSection` with a real
`<h2>`, so the contents rail of a draft page opened with an entry about the page
rather than about the subject, and the reader looking for the band had to scroll past
it. It is now an `<aside>` with no heading, which also keeps `ArticleShell`'s
`:has(>div>section:nth-of-type(3))` count honest: that selector decides whether the
page reserves a rail column at all, and a notice dressed as a section was inflating it.

**The marker goes beside the `<h1>`, not inside it.** A flex row holding the heading
and the mark keeps the heading's accessible name to the title. On a card the mark does
go inside the `<h3>`, because a card's heading is the whole of what the reader is
choosing between, and "Sanitation Draft" is what they need to hear.

**`SystemMatrix` deliberately carries no marker.** Every column in that table is
evidence, and a draft page's evidence is complete, so a marker would qualify nothing
in the row. It would also sit one column from the "Not yet assessed" band, and those
are two different absences: one says nobody has published an assessment, the other
says we have not written the page. Side by side in one table they invite exactly the
misreading the band vocabulary exists to prevent.

The marker is a word in a dashed outline on `--color-ink-faint`, which is 5.04:1 on
paper and 5.67:1 in dark mode, and the dashed outline is the vocabulary
`VerificationNote` and `MapPlaceholder` already use for something not built. Nothing
here is interactive, so nothing needs a focus state.

## The lockfile has to hold every platform's `@emnapi`, and npm will not put them there

`npm ci` failed in CI with `Missing: @emnapi/runtime@1.11.3 from lock file` and
`Missing: @emnapi/core@1.11.3`. It had failed once before with
`Missing: @emnapi/wasi-threads@1.2.3`, which is the same bug wearing a different name.

Two optional packages pull these in: `@img/sharp-wasm32` depends on `@emnapi/runtime`,
and `@tailwindcss/oxide-wasm32-wasi` depends on `@emnapi/core`, `@emnapi/runtime` and
`@emnapi/wasi-threads`. Both are `cpu: wasm32` and are never installed on either
machine. But `npm ci` still resolves an ideal tree that includes their dependencies,
and which of the three it asks for differs by platform: Windows asks for
`wasi-threads`, Linux asks for `runtime` and `core`.

`npm install --package-lock-only` writes only the ones the current platform wants, and
silently drops the others, so regenerating the lock on Windows produces a file that
fails on Linux and regenerating it on Linux would produce one that fails here. Fixing
whichever package the error names just moves the failure to the next one, which is
what the first repair did.

The lock has to carry all three root entries at once. They were added by hand with
version, `resolved`, `integrity` and `dependencies` taken from
`npm view <pkg>@<range> version dist.integrity dependencies --json`. `@emnapi/runtime`
is not `dev`, because `@img/sharp-wasm32` is a production dependency; the other two are
`dev: true` and all three are `optional: true`.

Two things make this checkable without a Linux machine. `npm ci --dry-run --os=linux
--cpu=x64` resolves the tree CI will resolve and reports the same `EUSAGE` when the
lock is short. And writing the file back with `json.dumps(lock, indent=2,
ensure_ascii=False)` plus a trailing newline reproduces npm's own formatting exactly,
so the diff is the entries added and nothing else. A 22-line diff is the evidence that
no version was moved while fixing this.

---

## Two PreparedBC guides read, one that cannot be, and the reason is the font

**11 September 2026.** The fetcher returns nothing usable from a PreparedBC guide PDF:
it reports binary content and, for the earthquake guide, reads the designer's leftover
document title, `extreme_heat_cover_v02`, which looks like the wrong file and is not.
The guide itself is the right document. No `pdftotext`, `pdftk`, `pypdf` or PyMuPDF is
installed here, and the project takes no new dependency for a one-off read.

What worked is twenty lines of Python over the raw file: find each `stream … endstream`,
`zlib.decompress` it, keep the ones containing `Tj` or `TJ`, and pull the parenthesised
strings out. The text arrives one glyph at a time with kerning as single spaces and word
breaks as runs of two or more, so the normalisation is to protect the runs, delete the
single spaces, then restore the runs. That read the earthquake guide, the neighbourhood
guide and the disabilities guide in full.

It does not read the apartments and condominiums guide, and the difference is not the
tooling. That file's strings decompress to glyph indices in an embedded subset font with
no usable `ToUnicode` map, so there are no characters to recover without the font
tables: the only text that comes back is the fill-in field labels, which are set in a
different face. **A PDF that resists extraction is two different situations** — a stream
nothing has inflated, which is a tooling problem, and text that is not characters, which
is not. The second one needs a machine with a real PDF stack or the document in another
format, and until then the honest record is that the guide exists and has not been read.
`research/preparedness.md` carries it that way.

**How confirmed:** the extracted earthquake-guide text carries "Last updated: Mar 2024"
and the nine-item planning checklist quoted in `research/preparedness.md`; the
apartments guide yields two fill-in labels and no prose.


## Splitting a Part 1 page costs one array, and the map question is per layer

**12 September 2026.** `/shaking/secondary-hazards/` became `/shaking/landslides/`,
`/shaking/dikes/` and `/shaking/dams/`. The structural cost is one edit: three entries
in `SHAKING_PAGES` replace one, and the card grid on the index, the prev/next chain, the
part's children in the header menu and the footer index, the static params and the
sources index all follow from it. Nothing else in the site names those pages. The two
edits that are not derived are the `MODULES` map in `src/app/shaking/[slug]/page.tsx`,
which keys a slug to a page module, and `ALL_PAGES` in `src/content/pages/index.ts`,
which is what makes a page's documents count as cited on `/sources/`.

The reason the pages were split is that the grouping argument, that the damage arrives
after the shaking and arrives where the ground was already marginal, is true of all
three and does not give a reader looking for the dike behind their house a reason to
read about a power tunnel first. `site-overview.md` §5 carries that.

**The map position is now three questions rather than one, and they have different
answers.** Dam-breach inundation for the region's dams is not routed to the public, and
seismic landslide susceptibility for the Sea to Sky corridor and the Fraser Canyon has
not been published at all: every seismic landslide product found for this province
covers the western municipalities of Metro Vancouver. Both absences are stated in the
copy rather than drawn as a placeholder. What is open is the provincial dam register
[BC-DAMS-REG], OGL–BC, which carries each dam's location, owner, failure consequence
class and risk level. That is a drawable layer and it is the one a dams map would start
from. **Before drawing any of the three, establish the layer's licence, not the
subject's interest.**

**How confirmed:** `npm run build` exports seven `/shaking/` routes; the three new pages
render their markers numbered 1..n with no `[?]`; the licence on `BC-DAMS-REG` is stated
on the record in `src/content/references.ts`.
