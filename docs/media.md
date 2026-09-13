# Media

Photographs the site hosts, and the terms each one comes with.

Version 1, 12 September 2026. Companion to `licensing.md`, which covers data,
reports and text. That file's rule holds here without change: **nothing goes on
the site unless its licence has been checked and recorded.** This file is where
a photograph's check is recorded.

---

## What a photograph is for on this site

Until 12 September 2026 the style guide banned photography outright. The ban was
a position about tone presented as a position about rigour, and it cost the site
the one thing a diagram cannot do: show a reader something that has already
happened to a real street. §8 now says what a photograph is for instead of
listing what it may not contain.

**A photograph earns its place by showing a mechanism, not by being striking.**
That is the whole test, and it is a test of what the image does rather than of
how bad it looks. Liquefaction is the case that makes it obvious: "the ground
behaves like a thick liquid" is accurate, it is not a picture, and a reader who
has only ever stood on ground that stays put has nothing to attach it to. A
schematic of a street is a drawing of the idea of a street. The same goes for
ground failure, a buckled road, a building off its foundations, a bridge
approach with a step in it — things the site describes in words and a reader has
never seen. What fails the test is an image that adds nothing the prose has not
already given. That is decoration, and decoration is what the old rule was right
to keep out.

**Showing what happened somewhere else is not fear-mongering.** It is evidence
that the mechanism is a thing the world does. The site's position on fear is in
§3 of the style guide and it has not moved: severity is allowed, dread is not,
and every page carries its lever. A photograph does not change that balance.
What would change it is an image that exists to make the reader feel something
the page cannot then act on — and that image fails the mechanism test above
anyway, because feeling is not a mechanism.

Three limits, and they are about the reader rather than about the register:

1. **No casualties, and no identifiable person in distress.** A matter of
   dignity towards people who did not consent to illustrate our argument. It
   does not soften because the photograph is free and well licensed.
2. **No image standing in for a claim the site cannot make in words.** If the
   argument is not in the prose, a picture does not get to make it.
3. **Nothing uncleared.** A photographer, a collection, a licence and a link,
   all four read off the source page and recorded in the register below. The
   same discipline every dataset goes through in `licensing.md`.

**Say where it is, and anchor it to here.** A photograph of a New Zealand street
files itself mentally as somewhere else and stops working. The caption names the
ground under the camera and the Metro Vancouver ground it stands for, so the
reader finishes thinking about Richmond rather than about Christchurch.

**The anchor belongs to the run, not to every caption in it.** Where photographs
sit together, one carries the anchor and the rest join on. The worked example is
the pair on `/shaking/ground/`: the first names Richmond and Delta, the second
opens on "the same earthquake", and the two read as one unit. Repeating the
anchor under each picture, or repeating the analogue rule under each picture,
stops being discipline and becomes the tic `style-guide.md` §4 describes — which
is why the analogue rule lives in this file and on `/licences/` rather than under
every photograph.

**A photograph may not generate a claim.** This is the site's standing rule
about analogues — `style-guide.md` §10, question 8 — and it bites hardest here,
because a photograph is the most persuasive thing on a page and the least
measurable. Nothing about Metro Vancouver may be inferred from what Christchurch
looks like. The depth of the silt, the number of streets, the time it took to
clear: none of it transfers. The photograph carries the mechanism and the
numbers stay with the documents that publish them.

---

## Status, and what it takes to change it

| Status | Meaning |
| --- | --- |
| **Verified** | Someone opened the source page, read the photographer and the licence off it, and dated the row. **Only a verified photograph may be hosted.** |
| **Stated** | A photographer and a licence are recorded here from the brief of 12 September 2026, and nobody has re-read them from the source page. Publishable as soon as one person opens the link and dates the row. |
| **To verify** | The file exists and is very likely usable. The terms have not been read at all. |
| **Rejected** | The terms are known and the site cannot meet them. |

**Six rows are Verified, checked at their sources on 12 September 2026, and all
six are hosted.** Two on `/shaking/ground/`, three on `/shaking/buildings/` and
one on `/shaking/fire-following/`. Everything else below is Stated or To verify
and none of it is on the site. See *The verification
queue* at the foot for what is left.

---

## Licences in use

| Short | Full name | Share-alike | Non-commercial | No derivatives |
| --- | --- | --- | --- | --- |
| CC BY 2.0 | Attribution 2.0 Generic | no | no | no |
| CC BY-SA 2.0 | Attribution-ShareAlike 2.0 Generic | **yes** | no | no |
| CC BY-SA 3.0 | Attribution-ShareAlike 3.0 Unported | **yes** | no | no |
| CC BY-NC-SA 2.0 | Attribution-NonCommercial-ShareAlike 2.0 Generic | **yes** | **yes** | no |
| CC BY-NC-ND 4.0 | Attribution-NonCommercial-NoDerivatives 4.0 International | no | **yes** | **yes** |

What each constraint costs, in the site's terms:

**Share-alike** costs nothing while the photograph sits in a page as itself. It
bites the moment it is drawn on: a composite, an annotated version, an arrow
laid over it, a crop used inside one of the site's own figures. Any of those
would have to be released under the same licence. So share-alike material stays
out of the figure kit and out of anything the site draws. Where an image has to
be marked up, use CC BY material or draw it.

**Non-commercial** is a tripwire rather than a constraint. The site is free,
carries no advertising, no affiliate links and no paid offering, which reads as
non-commercial in ordinary usage. If that ever changes, every NC row comes off
the site in the same change. Two rows are NC today. They are flagged in the code as
well as here, so the question can be answered by grep and not by memory.

**No derivatives** means no crop, no colour correction, no text or arrows over
it, no use inside a composite. Straight resizing is not a derivative. Publish at
the file's own aspect ratio, as an inline figure, and record "No changes made."
in the credit.

**The crop nobody means to make.** `ratio` on a register row is a number a
person typed, and the frame takes its shape from it. Both rows carried 3 / 2 for
4 / 3 files until somebody opened them. So the component uses `object-contain`
rather than `object-cover`: with the right ratio the two render identically, and
with the wrong one `contain` letterboxes where `cover` would crop and say
nothing. A crop is a derivative, and an unannounced derivative of a share-alike
or no-derivatives photograph is a licence breach rather than a layout defect.
The rule is to measure the file, but the failure mode should not be silent.

---

## Register

### 1. Vehicles in silt

#### `christchurch-cars-in-silt`

- **Shows:** two parked cars standing in silt forced up through the ground, on
  an ordinary residential street in central Christchurch, 22 February 2011. The
  silt has spread over the road surface and the cars' wheels are sunk into it;
  water stands in a pool alongside. A picket fence and a weatherboard house are
  behind them, which is most of why the photograph works.
- **Photographer:** Schwede66
- **Licence:** CC BY-SA 3.0
- **Source:** https://commons.wikimedia.org/wiki/File:Liquefaction_in_Peterborough_St.JPG
- **Status:** **Verified, 12 September 2026.** Photographer and licence read off
  the Commons file page. The Science Learning Hub page that the row used to cite
  serves the identical file — same filename stem, and the same 4 373 550 bytes,
  confirmed by checksum — so the Commons file page is now the link, and the
  licence can be checked at the source rather than at a page describing it. The
  Commons description places it in Peterborough Street west of Madras Street.
- **Credit:** `Photo by Schwede66, CC BY-SA 3.0.`
- **Hosted:** `public/media/christchurch-cars-in-silt.jpg`. 4000 × 3000 original
  resized to 1600 × 1200; ratio `4 / 3`. No other change.
- **Used on:** `/shaking/ground/`, in the section on wet sand behaving like a
  liquid.
- **Why this one:** the setting is a normal street rather than a disaster zone,
  and the subject is two cars that are obviously not going anywhere. One
  familiar object, immobilised, no technical knowledge needed to read it.
- **Correction on hosting:** the row described "an ordinary commercial street"
  until the file was opened. It is residential. The brief was never checked
  against the image, which is the argument for opening a file before writing its
  alt text and not after.

#### `christchurch-pages-road`

- **Shows:** a car stuck in liquefaction and standing water on Pages Road near
  Onepu Street, photographed within hours of the 22 February 2011 earthquake.
- **Photographer:** Gavin Turner
- **Title:** "Car stuck in liquefaction"
- **Collection:** Canterbury Stories, Christchurch City Libraries
- **Licence:** CC BY-NC-ND 4.0 — **non-commercial and no derivatives**
- **Source:** https://www.canterburystories.nz/collections/community/gavinturner/ccl-cs-27020
- **Status:** Stated.
- **Credit:** `Photo by Gavin Turner, "Car stuck in liquefaction", Canterbury
  Stories, Christchurch City Libraries, CC BY-NC-ND 4.0. No changes made.`
- **Used on:** nowhere yet. Cleared and held.
- **Constraints:** no cropping, no colour correction, no overlay, no composite.
  Straight resizing only, at the native aspect ratio. NC: it comes off the site
  if the site ever earns money.
- **Why it is held:** silt and standing water together is closer to what the
  first hours look like than silt alone, and it is the better photograph for a
  section about the first hours. `/shaking/ground/` has no such section, and a
  third photograph in the one section that exists would be padding. It waits for
  a page that needs it.

#### `christchurch-car-in-mud`

- **Shows:** a car sunk to the sills in grey liquefaction silt on a Christchurch
  street, 24 February 2011, two days after the earthquake.
- **Photographer:** not read. The file page carries it.
- **Licence:** CC BY 2.0, originally uploaded from Flickr.
- **Source:** https://commons.wikimedia.org/wiki/File:Car_in_liquefaction_mud,_Christchurch,_24_February_2011.jpg
- **Status:** To verify — licence recorded, photographer not.
- **Credit:** `Photo by AUTHOR, via Wikimedia Commons, CC BY 2.0.`
- **Note:** on the brief's reading this is the strongest single image in the set
  for a general audience, and CC BY makes it the one the site could draw on if a
  marked-up version is ever wanted. Worth verifying first.

#### `christchurch-the-palms`

- **Shows:** the car park of a shopping centre under liquefaction silt. Useful
  for scale across a large paved area rather than a single vehicle. Roughly
  4672 × 3104.
- **Photographer:** not read.
- **Licence:** not read.
- **Source:** https://commons.wikimedia.org/wiki/File:The_Palms_in_liquefaction.jpg
- **Status:** To verify.

### 1b. Unreinforced masonry, parapets and what lands on the footpath

All three are the **September 2010 Darfield earthquake**, not February 2011, and
that choice is the substance of this group rather than a detail of it. Same
city, same building stock, same failure — and the 2010 earthquake killed nobody.
The 2011 photographs of a URM façade down on a street carry a death toll that
`/shaking/buildings/` cites two paragraphs below where the images sit, and using
them would have leaned on the casualty limit for no gain. 2010 gets the
mechanism with none of that attached.

Together they answer three different sentences in the City's own quote, which is
why there are three and not one: what a parapet is, what it does when it fails,
and what the street looks like afterwards.

#### `christchurch-beckenham-shops`

- **Shows:** a row of two-storey brick shops in Beckenham, each with a moulded
  parapet above its roofline, one of which has collapsed along with part of the
  wall below it, bending the verandah it fell on. The shopfront underneath is
  boarded over and the footpath is closed the length of the row.
- **Photographer:** Greg O'Beirne
- **Licence:** CC BY-SA 3.0
- **Source:** https://commons.wikimedia.org/wiki/File:ChristchurchEarthquake_Beckenham03_gobeirne.jpg
- **Status:** **Verified, 12 September 2026.**
- **Used on:** `/shaking/buildings/`, under the paragraph defining a parapet.
- **Why this one:** it is the only photograph in the set that teaches the word.
  The neighbouring parapets are intact and ornate and the failed one is not, so a
  reader learns what a parapet is by comparison inside a single frame, and the
  row could be Commercial Drive or Main Street without changing a thing.
- **Panoramic**, `100 / 39` hosted. It is the widest image on the site and the
  frame is the reason it works; do not crop it to match anything else.

#### `christchurch-dairy-gable-wall`

- **Shows:** the upper brick wall of a corner shop in Dallington gone from the
  building, the room behind it open to the street with its door and lining
  standing, and the brick heaped on the footpath below a shopfront that is
  undamaged.
- **Photographer:** Martin Luff — the same photographer as `avonside-road-damage`,
  though this one is on Commons rather than taken from his Flickr stream.
- **Licence:** CC BY-SA 2.0
- **Source:** https://commons.wikimedia.org/wiki/File:Earthquake_damage_-_dairy.jpg
- **Status:** **Verified, 12 September 2026.**
- **Used on:** `/shaking/buildings/`, against the City's "collapse onto exterior
  areas immediately adjacent to the building".
- **Why this one:** it is the clearest statement in the set of the thing the
  sentence describes, because the wall, the hole it left and the pile it made are
  all in one frame, and the shop underneath is plainly still a shop.

#### `christchurch-moorhouse-parapet`

- **Shows:** brick off one parapet spread the length of a footpath and across a
  parking lane on Moorhouse Avenue, fenced and coned, with the building intact
  and traffic running in the far lanes.
- **Photographer:** Nate Cull
- **Licence:** CC BY-SA 2.0
- **Source:** https://commons.wikimedia.org/wiki/File:Office_Building_Moorhouse_Ave.jpg
- **Status:** **Verified, 12 September 2026.**
- **Used on:** `/shaking/buildings/`, after the 13-million-tonne federal debris
  estimate.
- **Why this one:** it answers a different claim from the other two. The City's
  worry about arterials is emergency response and transport blockage rather than
  injury, and this is that claim at the scale of one building. **The caption says
  in as many words that the federal tonnage is not something the photograph can
  be asked** — a number beside an image is exactly where the analogue rule slips.

### 1c. Vancouver itself

#### `vancouver-dfps-hydrant`

**The first photograph on the site that is not an analogue,** and the rule it
sits under is different because of it. Every other image here says "this
mechanism is a thing the world does, and it could do it on ground like yours".
This one says "this object is on a street near you, go and look". There is no
transfer from somewhere else, so there is nothing for the analogue rule to
limit, and the caption's job is the opposite of framing: it is an instruction.

- **Shows:** a Vancouver hydrant with a blue body and a white bonnet, the letters
  `DFPS` cast into the body below one outlet.
- **Photographer:** Tom Magliery (`mag3737`)
- **Title:** "Hydrant"
- **Licence:** CC BY-NC-SA 2.0 — **non-commercial and share-alike**
- **Source:** https://www.flickr.com/photos/mag3737/35236992430
- **Status:** **Verified, 12 September 2026.** Licence read off the Flickr page,
  which records licence id 1. The photographer's own description settles the
  identification rather than leaving it to inference: "We attended a tour of
  Vancouver's Dedicated Fire Protection System (DFPS) … One of the blue hydrants
  that is part of the DFPS." The cast `DFPS` on the body is legible in the hosted
  file and corroborates it independently.
- **Used on:** `/shaking/fire-following/`, where the page says the blue hydrants
  are the only part of the City's description a resident can act on.
- **Why this one:** the page tells a reader to go and identify an object and then
  does not show them the object. That is the plainest failure of §8's test that
  the site had left, and it is the one case where a photograph is not evidence
  but an instruction.
- **Constraints:** NC makes this the second non-commercial row. Share-alike keeps
  it out of the figure kit like the rest.
- **Not the best available file, and there is no better.** 1024 × 1024 is the
  largest size Flickr offers for it, and a search of openly licensed collections
  for a Vancouver DFPS hydrant returns **nothing** under a licence permitting
  commercial use. If the site ever needs to shed NC material, this one has no
  replacement waiting and the slot goes back to being a sentence.

### 2. Road damage, sinkholes and lateral spreading

#### `avonside-road-damage`

- **Shows:** a suburban street in Avonside under wet silt and standing water,
  22 February 2011, with low circular cones in the foreground where the ground
  vented. Commons files it under *Sand volcanoes*, which is what those are.
- **Photographer:** Martin Luff
- **Collection:** Flickr
- **Licence:** CC BY-SA 2.0
- **Source:** https://www.flickr.com/photos/martinluff/5471846307
- **Status:** **Verified, 12 September 2026, for this photograph only.** The
  licence was read off the photographer's own Flickr page, which states CC BY-SA
  2.0. The photostream is not licensed uniformly, so a second image from it is a
  second check. The USGS has reused this photographer's work, which is why the
  terms are well established.
- **Credit:** `Photo by Martin Luff, via Flickr, CC BY-SA 2.0.`
- **Hosted:** `public/media/avonside-road-damage.jpg`. The file was fetched from
  the Wikimedia Commons mirror, `File:Sink holes and liquefaction on roads -
  Avonside in Christchurch.jpg`, which carries the full 3648 × 2736 camera frame
  and a FlickreviewR pass recording CC BY-SA 2.0 against this same photo ID on
  25 February 2011. Resized to 1600 × 1200; ratio `4 / 3`. The credit stays with
  Flickr because that is where the photographer published it.
- **A person is in frame.** Someone in a raincoat is walking along the far
  footpath, small, incidental and plainly not in difficulty. The limit in this
  file bars casualties and identifiable people in distress, and neither applies,
  so the photograph stands. Recorded because it is the kind of thing that gets
  noticed once and re-argued later.
- **Used on:** `/shaking/ground/`, alongside the sentence about buried pipes and
  sagging roads.
- **Why this one:** it is the material behind any argument about water mains,
  sewers and getting an emergency vehicle down a street. The same photostream
  covers North New Brighton and River Road.
- **Correction on hosting:** the row and the page caption both described a road
  broken open into holes and sunken troughs. The frame does not show that. It
  shows a street buried under vented silt and water, with sand volcanoes in the
  foreground — the same mechanism, reaching the road rather than the building,
  which is what the caption was for. Alt text and caption were rewritten to the
  photograph. The photographer's own Flickr title says "sink holes"; the title
  is not the frame.

#### `christchurch-june-2011`

- **Shows:** liquefaction from the magnitude 6.0 aftershock of 13 June 2011.
  Second event, so it says this was not a one-off.
- **Photographer:** not read.
- **Licence:** CC BY 2.0.
- **Source:** https://commons.wikimedia.org/wiki/File:Soil_liquefaction_from_the_M_6.0_13_June_2011_Christchurch_earthquake.png
- **Status:** To verify — licence recorded, photographer not.

#### `sullivan-park-959`, `sullivan-park-960`

- **Shows:** ground failure at Sullivan Park. Roughly 2848 × 4272, portrait, so
  they suit a narrow column or a phone better than anything else in the set.
- **Photographer:** not read.
- **Licence:** not read.
- **Source:** https://commons.wikimedia.org/wiki/File:Sullivan_Park_liquefaction_959.JPG
  and https://commons.wikimedia.org/wiki/File:Sullivan_Park_liquefaction_960.JPG
- **Status:** To verify.

---

## Rejected

**"Car swallowed by liquefaction", Phillipstown**, Science Learning Hub. Rights
held by Geoff Trotter, all rights reserved. It is the most dramatic image in the
set and it is the one that cannot be had. Do not use it, and do not go looking
for a copy of it elsewhere: a copy on another host is the same photograph under
the same terms.

**Te Ara, the Encyclopedia of New Zealand.** Provided for private study only.

**Getty, Alamy, Dreamstime.** Paid licence.

**Anything on canterburystories.nz that does not state its terms.** Licences
there vary item by item, from CC BY through CC BY-NC-ND to all rights reserved.
The collection is large and street-level and worth the time; every item is its
own check.

---

## Where to look for more

- Wikimedia Commons, *Category:2010 Canterbury earthquake* and
  *Category:2010 Canterbury earthquake damage*. The September 2010 event, which
  caused no deaths. For any mechanism that both earthquakes produced, look here
  first: the imagery is equivalent and it carries none of the casualty weight of
  February 2011.
- Wikimedia Commons, *Category:Buildings damaged by the 2011 Canterbury
  earthquake*. Very large, organised by individual building.
- Wikimedia Commons, *Category:Soil liquefaction in New Zealand*. Small, and
  entirely licensed material.
- Wikimedia Commons, *Category:Roads damaged by the 2011 Canterbury earthquake*.
  Larger, and directly on topic for the road damage above.
- Canterbury Stories, `canterburystories.nz`, run by Christchurch City
  Libraries. The largest street-level collection, and the one that needs the
  most checking.
- USGS earthquake photo collections. Public domain, no permission needed, but
  mostly US and Japanese events rather than Christchurch.

---

## The verification queue

The session that first wrote this file had no network route to any of the hosts
below — its egress policy answered 403 to `commons.wikimedia.org`,
`upload.wikimedia.org`, `www.flickr.com`, `www.canterburystories.nz` and
`www.sciencelearn.org.nz` alike — so it recorded what the brief of 12 September
2026 stated and marked every row as somebody else's check. **A later session on
12 September 2026 had the route, and did the two jobs for the two rows the site
uses.** Both are Verified and both are hosted. What that took is written into
the two rows above.

Three things came out of doing it, and all three are worth keeping:

**The Commons link for `christchurch-cars-in-silt` is settled.** It is
`File:Liquefaction in Peterborough St.JPG`. The Science Learning Hub page serves
that identical file — the same filename stem, and a byte-for-byte checksum match
on 4 373 550 bytes — so the two were never different photographs, and the row now
links the file page where the licence is stated by the photographer rather than
the page that describes it.

**Two rows were wrong about their own pictures,** and in both cases the error
came from writing alt text off a brief instead of off a file. One said a
commercial street and showed a residential one. The other described a road
broken open into holes and troughs, and shows a street buried under vented silt
with sand volcanoes in it. Neither error survived the file being opened, and
neither would have been caught by any check short of looking. **Open the file
before writing its alt text.** That is now the rule, and it is the one thing
this round should change about how the next photograph is added.

**`www.canterburystories.nz` still answers 403 to this environment,** so
`christchurch-pages-road` remains Stated. It is held rather than used, so
nothing on the site waits on it.

Three more photographs were cleared and hosted on the same day, for
`/shaking/buildings/` and `/shaking/fire-following/`. Their rows are above. Two
things from that round are worth carrying forward: **prefer the September 2010
earthquake to February 2011 wherever both show the mechanism**, because one of
them killed nobody; and the alt-text rule below held again, since two of the
three captions written before the files were opened contained a detail the frame
did not support — a bus stop that is not there, and shops called undamaged that
are boarded over.

What is left, and none of it is blocking:

1. **`christchurch-pages-road`** turns Verified when someone can open
   canterburystories.nz and read the photographer, the title and the licence off
   the item page. It is cleared and held, and there is still no page for it.
2. **The To-verify rows** — `christchurch-car-in-mud`,
   `christchurch-the-palms`, `christchurch-june-2011`, `sullivan-park-959` and
   `sullivan-park-960` — are unread. `christchurch-car-in-mud` is worth doing
   first: CC BY makes it the only one the site could draw on if a marked-up
   version is ever wanted.
3. **The Fraser delta susceptibility citation.** The brief asks that each
   photograph be paired with Natural Resources Canada or Geological Survey of
   Canada liquefaction susceptibility mapping for the Fraser delta, so that a New
   Zealand street is anchored to named local ground. **The source register holds
   no such mapping.** `/shaking/ground/` pairs the photographs with Richmond and
   Delta on the sources it already carries — the 787-borehole study for the soil
   profiles and the microzonation project for the street-by-street layers — which
   is the honest version of the same move. An NRCan or GSC susceptibility layer
   would be better, and finding one is question 26 in
   `research/open-questions.md` rather than something to assert here.

---

## When a photograph is hosted

- `public/media/<file>` is the only place image files live. Nothing is hot-linked
  from another host: the figures rule that nothing is fetched at runtime applies
  to photographs too, and a hot-link would also break the credit the moment the
  other host moved the file.
- `src/content/media.ts` is the only place a photographer, a licence or a source
  link is written. The credit line under the photograph, and the list on
  `/licences/`, are both read from it, so they cannot drift apart.
- The caption is the page's, not the register's. It carries the framing — the
  local ground the photograph stands for — and it carries citations like any
  other caption on the site.
- The alt text states what the ground is doing, not what the object is. "A car
  sunk to its door sills in grey silt forced up out of the road surface" does
  the work; "a car in mud" does not. Most readers have never seen this, so the
  alt text is carrying the explanation and not just labelling a picture.
- **Open the file first, and write the alt text off the image.** Not off the
  brief, not off the collection's caption, not off the file name — the first two
  photographs the site hosted both reached this point with a description that
  the picture turned out to contradict, and a photographer's own title said
  "sink holes" about a frame that has none. A description nobody has checked
  against the image is a claim, and the page's caption inherits it.
