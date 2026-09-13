# Style and voice

*How QuakeImpact sounds, and why. Read before writing any page.*

---

## 1. What this site is trying to do

Build awareness in the general public. Not alarm, not reassurance — awareness.

The reader arrives believing an earthquake is a violent event with a clear end, followed by help arriving from outside. They leave understanding that the shaking is the short part, that the systems they depend on fail together rather than separately, and that there are specific things they can do about it.

If a reader finishes a page frightened but with nothing to do, the page has failed. If they finish it reassured that it will be fine, the page has also failed, and worse.

And a page nobody finishes has failed at the start. This is a public website, not an engineering report, and nobody is obliged to read it: it competes with everything else on a phone. So being good to read is not decoration on top of the rigour, it is half the job. Sequence, concrete detail and short sentences are what make a compilation of regulatory filings into something a neighbour reads to the end. The sourcing is what makes it worth reading; the writing is what gets it read.

---

## 2. Two readers, one text

Every page is written for a neighbour and audited by an expert. We do not write two versions.

**The neighbour** has no technical background, ten minutes, and no particular reason to trust us. They need plain sentences, concrete consequences, and a reason to keep reading.

**The expert** — an emergency planner, a geotechnical engineer, a municipal staffer — is looking for the error that lets them dismiss the whole site. They need every number attributed, every uncertainty admitted, and no claim that outruns its source.

These constraints are compatible. Plain language and rigorous sourcing pull in the same direction: both require knowing exactly what you are claiming. The expert sets the standard for accuracy, never for tone. Writing up to an expert is how public-interest sites become unreadable.

---

## 3. On fear

The research is consistent, and it is not the intuitive answer.

Fear appeals work only when paired with efficacy — a specific action the reader believes they can take and believes will help. Without that pairing, fear reliably produces the opposite of preparedness: message avoidance and fatalism. The reader stops reading, or concludes nothing can be done. This is the Extended Parallel Process Model, and it is the single most important finding for a site like this one.

What this means in practice:

- **Severity is allowed. Dread is not.** "Sewer service in the worst-affected areas: weeks to months" is severe and factual. "Imagine your neighbourhood without toilets" is dread, and it costs us the reader.
- **Every section carries its lever.** This is principle 3 of the project and it is enforced in code — every long page ends with a `Lever` block. That block is not a courtesy at the end. It is what makes the rest of the page usable.
- **Certainty about the hazard is persuasive; certainty about the outcome is not.** We can say the recurrence interval is known. We cannot say what will happen to your street.
- **No countdown framing.** "Overdue", "the big one is coming", "when, not if" — these read as marketing and they are what the field is tired of. The dates and intervals speak for themselves.

We are not in the business of motivating through alarm. We are in the business of making a slow, boring, structural problem legible enough that people act on it.

---

## 4. Voice

**Plain, calm, specific.** The tone of a good engineer explaining something to a neighbour over a fence. Not a press release, not a documentary voiceover, not a public service announcement.

**Concrete over abstract.** "Restoration measured in weeks to months" beats "significant service disruption". Name the thing: the pipe, the substation, the bridge approach.

**Short sentences carry hard facts.** When the content is heavy, the prose gets simpler, not more elaborate. Long sentences signal hedging.

**No second-person catastrophising.** "You" is fine for actions — "keep two weeks of water" — and wrong for outcomes. Not "your building will be tagged."

**Write for a reader who is scanning.** Most people will not read the paragraph. Front-load the claim; put the mechanism after it. Every heading should be readable as a standalone sentence about the world.

**Own the limits in the same breath as the claim.** "Restoration on the delta is measured in months, according to X; we have not found comparable published work for the North Shore." Admitting a gap costs nothing and buys everything.

**No exclamation marks. No rhetorical questions. No invented scenes.** The line is not between narrative and description, and it never was: the province writes its own planning scenario as a sequence of things that happen, in order, and that passage teaches more in three paragraphs than any table on this site. The line is between a consequence the record establishes and a scene we made up. Write the sound like a freight train, the glass across the pavement, the queue at the water truck, the technician who has to come inside to relight the gas, because each of those is a mechanism something published establishes. Do not write a character, a moment, a thought, a line of dialogue, or an image whose only source is imagination.

**No stacked parallel fragments.** A run of short sentences built to the same pattern, each one unpacking a single item from the sentence before, is a rhythm standing in for an argument. "A month later is after the news has moved on. Eleven at night is when people are at home and asleep. An atmospheric river is a long, heavy rainstorm." Three sentences, one shape, and two of them only restating what the reader was told a line earlier. The closing turn that usually follows, "And X is not Y: it is Z", is the same move a fourth time. It is the most recognisable tell of machine-written prose and it survives every other check on this page, because nothing in it is inaccurate. Keep the one thing the reader does not already know and join it to the sentence before it.

**No sentences that tell the reader how to read.** "Read that carefully", "Read the first two rows against each other", "Every part of that sentence was chosen", "Two things that number is not". Each announces a point instead of making it, and each is addressed to a colleague rather than to a neighbour, which is the defect above under another name. The fact underneath never needs the introduction: cut the gesture and the paragraph gets shorter and lands sooner.

**Sequence is the strongest structure this material has.** Hours, days, weeks, months beats any other order, because it is the order a reader will meet it in and because the site's whole argument is that the shaking is the short part. A system inventory answers a question nobody asked yet. Lead with what happens, and let the reader find the system page when they want the evidence behind one line of it.

**A narrative run may defer its sourcing to the pages it links to.** Markers in running prose are how this site proves a claim, and in a four-panel story they turn the same five documents over nine times and make a sequence read like a filing. So a narrative passage may carry its attribution through its links instead, under conditions that are not negotiable: every sentence is a consequence a page on this site states and sources; the noun it hangs on is a link to that page; **no figure, duration or proportion appears in prose that carries no marker**, because a number is exactly what a marker exists to guard; a quotation keeps its speaker in words, since a quote without attribution is worse than a claim without a marker; and the passage says in plain terms what it is, so nobody reads a scenario as a forecast. The home page timeline is the worked example. Everywhere else, the marker stays.

**The site never talks about itself to the reader.** This is the defect that accumulates fastest, because the project's own principles are well written and it is tempting to render them. A kicker reading "The one original contribution", a callout labelled "Verify before publishing", a section titled "Why the coupling is the story" — each was in the templates, and each addresses a colleague rather than a neighbour. The test is whether the sentence would still make sense to someone who has never heard of this project. Editorial notes to ourselves belong in a comment or in `docs/`; the method and about pages may describe the method, but in the reader's terms and never in the project's shorthand. A page name is copy too: `/leaving/` asserted a conclusion about behaviour before anyone read a word.

---

## 5. Sentence-level rules

- **Aim at a reader who left school at sixteen.** Not because the audience is unsophisticated, but because that is who a public-information site has to reach. If a sentence needs re-reading, rewrite it.
- **Define a term the first time it appears on a page, in the sentence itself.** "Liquefaction, saturated soil losing its strength and behaving like a liquid while the ground shakes, is the reason..." Not a glossary the reader has to leave the page for.
- **Prefer the everyday word.** *Restoration* over *remediation*. *Broken* over *compromised*. *Bridge approach* over *abutment transition*, on first use.
- **Ranges, not point estimates.** "Weeks to months" is honest. "Six weeks" implies a precision the sources do not have.
- **Numbers in the reader's units.** Litres per person per day, not cubic metres. Days, not hours, once past the first week.
- **No hedge stacking.** "May potentially be somewhat affected" says nothing. Say what the source says, once.
- **Active voice, named actors.** "BC Hydro would need to..." not "restoration efforts would be required."
- **Canadian spelling.** *Metre*, *centre*, *neighbourhood*, *programme* → *program* (Canadian usage takes the short form here). Follow the *Canadian Oxford*.
- **No em dashes or en dashes in the site's own voice.** Use a comma, a full stop, a colon or a pair of brackets. The dash is the punctuation of an aside, and an aside is usually a guard that belongs in the sentence or a clause that belongs in its own. Three carve-outs: a verbatim quotation keeps the source's punctuation exactly, including its dashes; a proper name keeps its own, as in *Open Government Licence – Canada*; and a numeric range keeps its en dash, as in *pp. 34–35* or *1–8 weeks*. This rule applies to anything a reader sees, including a heading, a label, a caption, alt text and a source register note.

---

## 6. Trust: how we earn it and how we lose it

**The marker is the attribution. Do not say it twice.** Every claim on this site already carries a numbered marker that names its document, so "the province writes that", "the City states", "Natural Resources Canada spells out" is a second attribution stacked on the first. Once is fine; on every third sentence it turns a page into a reading of the bibliography and pushes the real subject of each sentence to the back. Write the finding and let the marker say who established it. Not "the province says many of those who try to run outside suffer extreme injury or death", but "many of those who try to run outside suffer extreme injury or death", with the marker attached.

**Except where the speaker is the finding, and there it is the whole point.** Name the body in words when the sentence works only because of who is saying it: a City telling residents its dikes will hold while its own consultants model them moving past the provincial limit; a province conceding that its own hazard analysis leaves out the detailed mapping that exists; a federal agency calling its own estimates a minimum; an owner naming the part of its own dam it expects an earthquake to break. Those are not attributions, they are the claim. The test is whether removing the name removes the point. If the sentence says the same thing without it, cut it.

**Attribute everything.** Every impact band on this site carries a mechanism sentence and a source link — the component makes it structurally impossible to ship a coloured cell alone. Prose should meet the same bar. A sentence with a number in it and no source attached is a bug.

**An obvious consequence is not an invented fact. A number always is.** Documents state what somebody was paid to assess, and nobody is paid to write down that a lift needs power or that a card reader needs a network. Where a cited fact has a consequence any engineer would grant and no document bothers to record, write it plainly as part of the sequence: the tills stop when the power does, flushing takes water somebody has to spare, food arrives by truck over the same roads as everything else. What inference may never produce is a **quantity, a duration, a band, a geography or a casualty figure** — those come from a document or they do not appear. Two tests before writing one. Could a reader follow the link and find nothing that contradicts it? And would the planner who wrote the source shrug, rather than object? If somebody competent could reasonably reach a different conclusion, it is a verification item in `docs/research/`, not a sentence on a page.

**Say what we don't know, in public.** `VerificationNote` exists for this. "Not yet assessed" is a first-class impact band, hatched rather than coloured. A visible gap reads as honest; a quietly missing system reads as sloppy or, worse, as cherry-picking.

**Name a past event by its year and its country the first time it appears on a page.** "Christchurch" means nothing to a reader who has never heard of it, and a reader who has may still not know when it happened or that it was in New Zealand. Write "the 2011 earthquake in Christchurch, New Zealand" the first time and "Christchurch" after that. The same goes for Kobe, Northridge, Loma Prieta and anything else borrowed from elsewhere. This is not only courtesy to the reader: an event that arrives with no date and no place reads as though it happened here, which is the precise misreading the next rule exists to prevent. The count restarts on every page, because a reader may arrive on any of them and will not have read the others.

**Never let an analogue generate a number.** Christchurch tells us what life was like when sewer service was out for months. It does not tell us how long Richmond's would be out. Analogues illustrate; sources quantify. Mixing the two is the most likely way this site loses its credibility.

**Prefer the specific sourced fact to the generalised claim, even when the general one is available.** BC Hydro's filing says up to two-thirds of *downtown* customers could lose power for several weeks. It says nothing about Surrey. Write the downtown fact and name the gap; do not smooth it into "the region could be without power for weeks." Three reasons, and the first is the one that matters: a reader downtown learns something true about where they actually live, which is the whole point of the site. A reader elsewhere learns that nobody has published an answer, which is also true and also useful. And a claim that stays inside its evidence cannot be taken apart by the one expert who knows the evidence. Where a band has to be broader than its source — because the grid is regional and the finding is not — band the row and write the narrower sentence.

**State the counterpoint before an expert does.** Where a comparison is provocative, name its limits in the same section. An argument that anticipates its own objection is far stronger than one that has to be defended later.

**Never present emergency-responder infrastructure as public infrastructure.** Disaster Response Routes are the live example: presenting them as evacuation routes would teach exactly the wrong behaviour and would rightly cost us the trust of the emergency-management community.

**No urgency devices.** No countdowns, no "act now", no email capture on a fear hook. Nothing on this site should look like it is selling something.

---

## 7. Word list

| Use | Instead of | Why |
|---|---|---|
| A major earthquake | The Big One | Tabloid; imprecise |
| Restoration time | Downtime | Names what the reader waits for |
| Weeks to months | An extended period | Vagueness reads as evasion |
| Not yet assessed | Unknown / likely catastrophic | Honest about the gap |
| Damaged | Devastated, destroyed | Reserve strong words for sourced claims |
| People would need to leave | Mass exodus | Describes behaviour, not spectacle |
| Published assessments show | Experts warn | Names the source type |
| Bands, mechanism, source | Risk score, rating | Our vocabulary, used consistently |

Avoid throughout: *apocalyptic, catastrophic* (unless quoting a source), *ticking time bomb*, *overdue*, *ground zero*, *war zone*, *devastation*, *unimaginable*.

A word on this list is still allowed inside a proper name, because a name is not a word choice. The Institute for Catastrophic Loss Reduction is cited by its name.

---

## 8. Visual language

The design carries the same argument as the words: serious, quiet, sourced.

**Restraint is the brand.** Off-white ground, near-black text, one muted teal accent, generous space. It should look like a reference work, not a campaign.

**Colour is reserved for meaning.** The band ramp — sage, amber, brick — is the only place strong colour appears. The accent is deliberately not red, so that when red appears it means something. Nothing is coloured for emphasis alone.

**Severity survives without colour.** Bands render as three segments filled 1/2/3 alongside the colour, so the ordinal reads in greyscale, in print, and for colour-blind readers. Never encode meaning in hue alone.

**Photographs of what actually happened.** Revised 12 September 2026, replacing a flat ban on photography. The ban was a position about tone dressed up as a position about rigour, and it cost the site the one thing a diagram cannot do: show a reader something that has already happened to a real street. A photograph of Christchurch in 2011 is not fear-mongering. It is evidence that the mechanism the page has just described is a thing the world does, to ordinary roads and ordinary parked cars, and most readers have never seen it.

**A photograph earns its place by showing a mechanism, not by being striking.** That is the test, and it is a test of what the image does rather than of how bad it looks. Liquefaction is the case that makes it obvious: "the ground behaves like a thick liquid" is accurate, it is not a picture, and a reader who has only ever stood on ground that stays put has nothing to attach it to. A schematic of a street is a drawing of the idea of a street. Ground failure, buckled road, a building off its foundations, a bridge approach with a step in it — each of these is a photograph doing work no drawing does. An image that adds nothing the prose has not already given is decoration, and decoration is what the old rule was right to keep out.

**Three limits, and they are about the reader rather than about the register.** No casualties, and no identifiable person in distress: that is a matter of dignity towards people who did not consent to illustrate our argument, and it does not soften when the photograph is free and well licensed. No image standing in for a claim the site cannot make in words. And nothing uncleared — a photographer, a collection, a licence and a link, all four read off the source page and recorded in `media.md`, which is the same discipline every dataset here goes through.

**Say where it is, and anchor it to here.** A photograph of a New Zealand street files itself mentally as somewhere else and stops working. The caption names the ground under the camera and the Metro Vancouver ground it stands for, so the reader ends up thinking about Richmond rather than about Christchurch. **The anchor belongs to the run, not to every caption in it.** Where photographs sit together, one of them carries it and the rest join on — "the same earthquake" is enough — because a standing position restated under each picture stops being discipline and becomes the tic §4 describes. Anchor the first, and make the join explicit enough that a reader arriving at the second is not looking at an unplaced photograph.

**A photograph may not generate a claim.** Section 10's question 8 is about analogues and this is the sharpest case of it, because a photograph is the most persuasive thing on a page and the least measurable. The mechanism carries across; the depth, the number of streets and the time to clear do not, and the caption says so rather than leaving it to be assumed. Every number stays with the document that publishes it.

**Maps show the ground, not the municipality.** A choropleth by city misleads. Municipal outlines are reference, laid over the real variable.

**Geometry may not assert a precision the source does not have.** Section 5's rule against point estimates applies to drawings, and more sharply, because a shape reads as a measurement. "Many months" drawn as a bar on a month axis is an invented number. Where a source gives a range, the drawing shows a range. Where a source gives no end, the drawing has no end. No axis without a domain a source states.

**Meaning without colour needs a vocabulary, not just a prohibition.** Solid fill is a quantity a source published. A hatch is a range or an open end. An axis is a domain a source gives. One tick is one counted thing. A rule separates two things that must not be read as one. The worked version is in `src/components/figures/README.md`.

**A mark is load-bearing if covering it takes something away.** WCAG asks 3:1 of a graphical object a reader needs in order to understand the content, and the way to apply that without turning a quiet page into a loud one is to test each mark rather than raise all of them. Cover the mark with a thumb. If the drawing still says everything it said before, the mark is furniture: a divider under a heading, the border of a card, a gridline dropped from an axis that already labels every value, the frame around a map, the empty run a bar is drawn over where an axis states the domain and the panel writes the finding in words. Furniture stays on the two rule greys and stays quiet. If something goes missing, the mark is load-bearing and is drawn in `--color-mark`, which clears 3:1 on paper, on raised paper and on the accent tint in both themes. Load-bearing covers the axis a reader measures against, the scale line a value sits on, the spine or rail that carries an order, the outline that is the only thing defining a node, the rule between two scales that must not be read as one, and the unfilled segment of a meter, which is its denominator: cover the two empty segments and two of three reads as a bare two.

**There is no third grey.** A mark that looks too heavy at 3:1 is nearly always a mark that was furniture all along, and the fix is to reclassify it rather than to invent a weight between the two. The one honest exception is a hairline drawn across a filled bar, which cannot reach 3:1 against ink and mid grey at once: it clears a slot of paper for itself, or it overhangs the bar at both ends onto paper, and the part of it that carries the reading is the part on paper.

**Alt text carries the guard, not only the finding.** Where a figure exists to stop a misreading, its alt text says so. A reader who cannot see the figure must not be left holding the misreading the figure was drawn to prevent.

**Placeholders admit what they are, and only where one is honest.** An unbuilt map says so and names its dataset. A placeholder for a graphic the site will never be licensed to draw is a promise rather than a label, and is worse than nothing. Nothing on this site should look more finished than it is.

---

## 9. Accessibility

Not a compliance exercise — a public-information site that some readers cannot use has failed at its only job.

- Text contrast meets WCAG AA at minimum; large display type is not exempt in practice.
- Never colour alone: bands pair colour with a filled-segment meter and a written label.
- Every heading level is used in order; the contents rail is generated from real `<h2>` elements.
- Every interactive control is reachable and operable by keyboard, with a visible focus state.
- Images and diagrams carry alt text that states the finding, not the file. "Fuel terminals cluster on the Burrard Inlet shoreline and the delta" — not "map of fuel terminals".
- The site works at phone width and in dark mode. Most people will read this on a phone.

---

## 10. Before a page goes live

1. Does every number carry a source?
2. Does the page end with something the reader can do?
3. Is there a sentence that would make an emergency planner wince?
4. Is there a sentence that would make a neighbour stop reading?
5. Would a neighbour read it to the end at all?
6. Is any image on the page from imagination rather than from a document?
7. Are the gaps visible, or have they been quietly skipped?
8. Has an analogue been allowed to generate a number?
9. Would this read as alarmist if quoted in isolation, out of context, by someone hostile?

Question 9 is the one that catches the most. Any sentence on this site may end up screenshotted on its own. Section 11 catches the rest: a page can pass all nine of these and still be unreadable in the particular way described there.

---

## 11. An anti-example

Everything above says what to do. This says what the failure looks like, because it is the hardest one to catch: the prose is fluent, polite and confident, no sentence in it is false, and it says almost nothing. It is the house style of generated safety copy, and it is what this site's material turns into by default unless someone stops it.

Read the specimen. Then check a draft against the numbered list, which is the part to use.

### The specimen

> ## Understanding Earthquake Risk in Vancouver
>
> Vancouver sits in one of the most seismically active regions in North America, and understanding this risk is essential for every resident. The question isn't whether a major earthquake will strike, but when.
>
> At its core, the region's vulnerability comes down to geology. The Cascadia subduction zone runs along the coast, where one tectonic plate slides beneath another. This isn't just a local concern; it's a hazard that spans the entire Pacific Northwest.
>
> Soil liquefaction presents a particularly significant challenge. When saturated soil is subjected to intense shaking, it can temporarily lose its strength and behave like a liquid, causing structures to settle or tilt. Areas built on river delta sediments — such as Richmond and parts of Delta — are especially susceptible to this phenomenon.
>
> That said, it's worth noting that building codes have evolved considerably. While older structures may be at risk, newer construction is designed with seismic resilience in mind. Preparedness, ultimately, remains the most powerful tool at our disposal.
>
> The key takeaway? Vancouver's earthquake risk is real, but it is manageable. By understanding the hazards, preparing thoughtfully, and staying informed, residents can navigate this uncertainty with confidence.

### What is wrong with it

1. **It opens with framing instead of subject.** "Understanding this risk is essential" tells the reader nothing they did not know when they clicked.
2. **"The question isn't whether, but when."** Stock rhetorical inversion. It is also the countdown framing section 3 rules out.
3. **"At its core."** Filler transition, and so are *ultimately*, *that said*, *in essence*, *it's important to note*.
4. **The not-X-but-Y construction**, twice in four paragraphs. "This isn't just a local concern, it's…" is sentence 2 wearing a different hat.
5. **"Presents a particularly significant challenge."** Abstract intensifiers standing in for a description. Significant how. Challenging to whom.
6. **The em dash aside** around the place names. A colon or a comma does the same work without the affected pause, which is why section 5 bars the dash outright.
7. **"That said, it's worth noting."** Two hedges stacked in one clause.
8. **The reassurance sandwich.** Every hazard statement is neutralised by a comfort clause in the same breath, so the reader cannot tell how alarmed to be. This is the loudest tell in safety writing, and it is the opposite of what section 3 asks for: severity is stated plainly and the relief comes from the lever, not from a subordinate clause.
9. **"Preparedness, ultimately, remains the most powerful tool at our disposal."** Aphorism. Says nothing and sounds like it said something.
10. **"The key takeaway?"** A rhetorical question that answers itself.
11. **The closing paragraph restates the other four and lands on uplift.** Delete it. The last real point is the ending.
12. **"Navigate", "resilience", "thoughtfully", "with confidence".** Vocabulary from every corporate safety page ever written.
13. **Every paragraph runs three to four lines.** Uniform rhythm means nothing is emphasised, because emphasis is a contrast effect.
14. **Every sentence is a balanced subject-verb-object of the same length.** No short ones, no long ones.

### The same passage, written the way this site writes

> ## Liquefaction
>
> Richmond is built on river delta sediment, loose saturated sand and silt running over two hundred metres down in places before it reaches anything solid.
>
> Shake that for long enough and it stops behaving like ground. Buildings settle into it and tilt. Buried tanks and empty pipes float upward. Near the dikes and the river channels the whole surface slides sideways toward open water, carrying whatever is standing on it.
>
> Most of the housing stock went up before the code provisions that address any of this, and the water and sewer mains underneath it were never covered by the building code at all.

Subject first, no preamble. No hedge pairs. No comfort clause bolted onto the hazard. No summary and no closing sentiment. The paragraphs are different lengths because the content is, not to produce a beat, and nothing in it is a fragment placed for cadence.

On a real page the depth would carry its marker and the code claims would carry theirs. This section is about voice; section 6 still governs what may be said at all.

---

## Sources for section 3

- Rowe, [*Walking the Faultline of Fear: how affect-inducing risk communication can help promote disaster preparedness*](https://jcom.sissa.it/article/pubid/JCOM_2406_2025_A02/), Journal of Science Communication, 2025 — on fear appeals requiring efficacy pairing, and on unbalanced fear producing avoidance and fatalism.
- [*Risk messaging style and its effect on public preparedness for earthquakes*](https://pubmed.ncbi.nlm.nih.gov/39623151/), longitudinal intervention study, 2024.
- CDC, [Crisis and Emergency Risk Communication principles](https://www.cdc.gov/cerc/media/pdfs/CERC_Introduction.pdf) — be first, be right, be credible, express empathy, promote action, show respect. "Promote action" is the one this project most often has to be reminded of.
