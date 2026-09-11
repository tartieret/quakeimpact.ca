# Style and voice

*How QuakeImpact sounds, and why. Read before writing any page.*

---

## 1. What this site is trying to do

Build awareness in the general public. Not alarm, not reassurance — awareness.

The reader arrives believing an earthquake is a violent event with a clear end, followed by help arriving from outside. They leave understanding that the shaking is the short part, that the systems they depend on fail together rather than separately, and that there are specific things they can do about it.

If a reader finishes a page frightened but with nothing to do, the page has failed. If they finish it reassured that it will be fine, the page has also failed, and worse.

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

**No exclamation marks. No rhetorical questions. No imagined scenes.** We are not narrating a disaster. We are describing how infrastructure behaves.

**The site never talks about itself to the reader.** This is the defect that accumulates fastest, because the project's own principles are well written and it is tempting to render them. A kicker reading "The one original contribution", a callout labelled "Verify before publishing", a section titled "Why the coupling is the story" — each was in the templates, and each addresses a colleague rather than a neighbour. The test is whether the sentence would still make sense to someone who has never heard of this project. Editorial notes to ourselves belong in a comment or in `docs/`; the method and about pages may describe the method, but in the reader's terms and never in the project's shorthand. A page name is copy too: `/leaving/` asserted a conclusion about behaviour before anyone read a word.

---

## 5. Sentence-level rules

- **Aim at a reader who left school at sixteen.** Not because the audience is unsophisticated, but because that is who a public-information site has to reach. If a sentence needs re-reading, rewrite it.
- **Define a term the first time it appears on a page, in the sentence itself.** "Liquefaction — saturated soil losing strength and behaving like a liquid during shaking — is the reason..." Not a glossary the reader has to leave the page for.
- **Prefer the everyday word.** *Restoration* over *remediation*. *Broken* over *compromised*. *Bridge approach* over *abutment transition*, on first use.
- **Ranges, not point estimates.** "Weeks to months" is honest. "Six weeks" implies a precision the sources do not have.
- **Numbers in the reader's units.** Litres per person per day, not cubic metres. Days, not hours, once past the first week.
- **No hedge stacking.** "May potentially be somewhat affected" says nothing. Say what the source says, once.
- **Active voice, named actors.** "BC Hydro would need to..." not "restoration efforts would be required."
- **Canadian spelling.** *Metre*, *centre*, *neighbourhood*, *programme* → *program* (Canadian usage takes the short form here). Follow the *Canadian Oxford*.

---

## 6. Trust: how we earn it and how we lose it

**Attribute everything.** Every impact band on this site carries a mechanism sentence and a source link — the component makes it structurally impossible to ship a coloured cell alone. Prose should meet the same bar. A sentence with a number in it and no source attached is a bug.

**Say what we don't know, in public.** `VerificationNote` exists for this. "Not yet assessed" is a first-class impact band, hatched rather than coloured. A visible gap reads as honest; a quietly missing system reads as sloppy or, worse, as cherry-picking.

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

---

## 8. Visual language

The design carries the same argument as the words: serious, quiet, sourced.

**Restraint is the brand.** Off-white ground, near-black text, one muted teal accent, generous space. It should look like a reference work, not a campaign.

**Colour is reserved for meaning.** The band ramp — sage, amber, brick — is the only place strong colour appears. The accent is deliberately not red, so that when red appears it means something. Nothing is coloured for emphasis alone.

**Severity survives without colour.** Bands render as three segments filled 1/2/3 alongside the colour, so the ordinal reads in greyscale, in print, and for colour-blind readers. Never encode meaning in hue alone.

**No disaster photography.** No rubble, no cracked highways, no stock imagery of collapsed buildings. It is emotionally cheap, it is almost always from somewhere else, and it puts us in the register we are trying to avoid. Maps, diagrams and data only.

**Maps show the ground, not the municipality.** A choropleth by city misleads. Municipal outlines are reference, laid over the real variable.

**Placeholders admit what they are.** An unbuilt map says so and names its dataset. Nothing on this site should look more finished than it is.

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
5. Are the gaps visible, or have they been quietly skipped?
6. Has an analogue been allowed to generate a number?
7. Would this read as alarmist if quoted in isolation, out of context, by someone hostile?

Question 7 is the one that catches the most. Any sentence on this site may end up screenshotted on its own.

---

## Sources for section 3

- Rowe, [*Walking the Faultline of Fear: how affect-inducing risk communication can help promote disaster preparedness*](https://jcom.sissa.it/article/pubid/JCOM_2406_2025_A02/), Journal of Science Communication, 2025 — on fear appeals requiring efficacy pairing, and on unbalanced fear producing avoidance and fatalism.
- [*Risk messaging style and its effect on public preparedness for earthquakes*](https://pubmed.ncbi.nlm.nih.gov/39623151/), longitudinal intervention study, 2024.
- CDC, [Crisis and Emergency Risk Communication principles](https://www.cdc.gov/cerc/media/pdfs/CERC_Introduction.pdf) — be first, be right, be credible, express empathy, promote action, show respect. "Promote action" is the one this project most often has to be reminded of.
