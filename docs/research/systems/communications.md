# Communications

<!-- review-status: unreviewed -->

> **Review status: unreviewed.** Not yet verified by the project owner. Change to
> `validated` with a date once reviewed, in both the comment and this line.
> **Last research pass:** 11 September 2026.

**Status.** Two findings, and they must not be confused with each other.

**The duration, which sets the band. Band: Medium**, on the province's own words: the megathrust
assessment states that "disruptions in communications continue for days to weeks", with surviving
capacity prioritised for emergency personnel and "a prolonged lack of access to communications for
the general population". [DCRRA-2025] **[A]** Days to weeks is the Medium duration row. Nothing
published states a duration for the crustal earthquake, so that column carries the megathrust note.

**The regulatory finding, which is the page's lead and not its band: no binding Canadian
requirement sets a backup-power run time for cell sites, and none requires physical hardening of
network infrastructure.** The cleanest evidence is that the regulator is still asking the question.
**An absence of requirements is a finding, not a gap in our research**, and the page should say so
in as many words.

**Why the distinction is load-bearing.** The band used to rest on the regulatory absence, and that
was not a reason: a missing rule says nothing about how long the network is down, so it cannot
choose between Medium and High. It also left the band open to the obvious objection — electricity
is banded High at several weeks downtown, communications depends on electricity and on fuel, so
how is communications Medium? The answer is the province's own duration statement, and it is worth
writing where a reader can see it. `../impact-bands.md` carries the general rule this case forced:
the published duration sets a band, dependency describes it, and a system can be banded below
something it depends on, because a cell site comes back when fuel reaches it while a distribution
network comes back one pole at a time.

---

## Findings

### Backup power at cell sites

Telecom Notice of Consultation **CRTC 2025-226** (4 September 2025) asks, at Q7(c), "What
parameters should TSPs use to determine an appropriate backup power run time for each type of
network site?" Its **Appendix 1 reproduces CSTAC guidance written entirely in "should"
language**. [CRTC-2025-226] **[A]**

The record closed on or about **26 August 2026**. **No regulatory policy has issued as of 10
September 2026.** [CRTC-2025-226] **[A]** for the proceeding and its dates; the non-issuance is a
searched absence as at that date.

A regulator asking what the run time should be is the strongest available evidence that no run
time is required. It is better than any statement we could make on our own, and it is a primary
document.

### What is binding

- **Telecom Decision CRTC 2025-225** (4 September 2025, in force 4 November 2025) mandates
  outage **notification and reporting only**: notification to the CRTC, ISED and emergency
  management organisations within **2 hours** of a major outage (30 minutes or longer and
  600,000 user-minutes or more, or a community-isolation event), and a **14-day** post-outage
  report. **It contains no power requirement and no hardening requirement.**
  [CRTC-2025-225] **[A]**
- **Telecom Decision CRTC 2025-65** (28 February 2025) requires **9-1-1 IP traffic prioritisation
  where technically feasible** and hardens the wireless public-alerting interconnection layer.
  [CRTC-2025-65] **[A]**

So the binding rules govern telling people about an outage and prioritising 9-1-1 traffic. Neither
governs whether the equipment stays powered.

### The 9-1-1 switch backup-power minimums

The only Canadian backup-power **duration** language found is best-practice guidance for 9-1-1
switching offices under **TRP 2016-165**: backup power provisions lasting a minimum of **24 hours
for central office switches and 72 hours for tandem switches**. [CRTC-2016-165] **[B]** — the
decision text was reached through the CRTC record rather than read as a standalone primary
document.

**This applies to 9-1-1 switches, not to radio sites. Do not present it as a cell-tower figure.** It is
the single most likely number on this page to be misread, and the misreading — "towers have 24
hours" — is exactly the false reassurance the page exists to prevent.

### British Columbia's 72-hour request to the CRTC

The Province of British Columbia's intervention of **28 November 2025** in CRTC 2025-226 asks the
Commission to mandate:

- a minimum of **72 hours of autonomous backup power at core and high-priority sites** (120
  hours as best practice in remote areas);
- **seismic-rated shelter foundations in high-risk zones**;
- **annual stress testing**, including a "Massive Traffic Surge" scenario.

It names "**Seismic Events: High earthquake risk in southwestern BC**" as one of four BC risk
categories. [BC-CRTC-SUB] **[A]**

**This is a request, not a rule.** Framed correctly it is the strongest paragraph available to this
page: British Columbia's own government asked the regulator for 72 hours of backup power and
seismic-rated foundations, because nothing requires anything today. Stated in that order, with
both halves sourced, it needs no commentary.

### The Vancouver Building By-law's emergency power minimums

Where a Canadian code does require backup power, the number is measured in hours. The Vancouver
Building By-law 2025 (Book I, consolidated 5 May 2026, convenience copy, marked "THESE MATERIALS
ARE NOT AN OFFICIAL VERSION") requires an emergency power supply "capable of operating under a
full load for not less than **2 h**" for elevators in tall buildings, fire-suppression water supply
equipment and smoke-control fans (Art. 3.2.7.9.(1)), and **1 to 2 hours** of emergency lighting
depending on building class (Art. 3.2.7.4.(1)). [VBBL-2025] **[A]**

**The guard is not optional and the paragraph does not ship without it. A municipal building
by-law governs buildings. It does not govern telecommunications sites, which fall under federal
jurisdiction and are not regulated by it at all.** The comparison is a scale-setting one and
nothing more: British Columbia asked the CRTC for 72 hours at cell sites; nothing requires anything
at a cell site; and where Canadian codes do set a duration for a building, it is one or two hours,
for evacuating that building rather than for keeping a service running. **If that guard cannot be
held in the page layout, cut the paragraph** — it is the same class of misreading the TRP 2016-165
figures already invite, and the page should not invite it twice.

The hospital end of the same code minimum, and the distinction between a code minimum, a
contractual requirement and a design intent, lives in `health-care.md`.

### What the governments say the public would experience

- "If service is available, networks may be **congested or overloaded**, making communication
  extremely challenging. **Texts and low-bandwidth data-based services may be the most reliable
  method of communication** when other services are disrupted." [PEIRS] **[A]**
- "**Disruptions in communications continue for days to weeks**," with access prioritised for
  emergency personnel, "leading to a prolonged lack of access to communications for the general
  population." [DCRRA-2025] **[A]** (M9.0 Cascadia scenario.)
- The province opens the same passage with the plain statement that "**common communication
  service providers, including cellular and landline telephone providers, may be impacted**" —
  landline included, which matters because the folk assumption is that copper survives what
  cellular does not. PEIRS does not distinguish them. [PEIRS] **[A]**

Both are qualitative. Neither publishes site counts, restoration curves or performance estimates.

### 9-1-1 call saturation

E-Comm: "We received a **1,500 per cent increase in 9-1-1 calls after a 4.7 earthquake in 2015**.
The vast majority of those calls were not emergencies." [ECOMM-EQ] **[A]**

This is a real Lower Mainland saturation event, measured by the 9-1-1 operator itself, from an
earthquake most people barely felt. It carries its own lever, and it is the rare case where the
lever is not to do something but to not do something.

### Radio, amateur radio and PERCS

PEIRS continues: "**Radio communication, if operable, may be also congested and impact the ability
of first responders if saturated with non-sanctioned operators.** There may be increased reliance on
backup communication methods, such as satellite phones and amateur radio services." [PEIRS] **[A]**

**Read that sentence carefully, because it runs against the grain of ordinary preparedness
advice.** The province expects *increased reliance* on amateur radio, and in the same breath warns
that untrained operators on those frequencies **degrade the responders' own ability to work**. It is
not telling the public to stay off the air; it is describing a congestion mechanism that applies to
radio exactly as it applies to the cellular network — and that is the honest symmetry of this page.
Every channel described here fails the same way: not by breaking, but by filling up.

**What this licenses the site to say, and what it does not.**

- **It may say** that the province names satellite phones and amateur radio as the backups it
  expects people to fall back on. That is [A], and it is a statement about provincial expectation
  rather than an endorsement.
- **It may say** that the province expects responder radio to be degraded by unsanctioned use, in
  the province's own words. This is the kind of finding the site exists for: uncomfortable, sourced,
  and not otherwise in front of the public.
- **It must not** turn this into advice to buy a radio. A licence, an antenna, a power source and
  the training to use them are four separate problems, and nothing in PEIRS establishes that an
  unprepared household with a handheld is better off — the passage rather suggests the opposite for
  everyone else on the frequency.
- **It must not** present amateur radio as a *solution* the way it is often presented. The province
  presents it as a fallback that is itself expected to be congested.

**And the province runs an organised amateur radio service, which changes what that
caution means.** PEIRS: "**EMCR, through the Provincial Emergency Radio Communications
Service (PERCS), has aligned with many amateur radio organizations across the province,
and has installed amateur radio equipment at each PREOC.** A volunteer team of radio
operators supports each PREOC and many EOCs across the province; however, **some regions
have a limited number of radio operators**." [PEIRS] **[A]**

**This reframes the warning above, and the reframing matters more than either passage
alone.** The province is not cautioning against amateur radio — it has built amateur radio
into its own provincial emergency structure, installed the equipment at every regional
operations centre, and depends on volunteers to run it. The distinction it draws is
between **affiliated operators and unaffiliated ones**, not between amateurs and
professionals. "Non-sanctioned" means outside PERCS, not unlicensed.

**Read together, the two passages give the site something better than a caution.** The
province names a way in which amateur radio degrades the response *and* a way in which it
constitutes the response, and the difference between them is **whether the operator is
part of an organised group before the earthquake**. That is a real, specific, joinable
thing, and a far more useful sentence than "get a radio".

**A stated capacity gap, in the province's own words.** "Some regions have a limited
number of radio operators" is [A], it is EMCR describing its own service, and it is the
kind of admission this site exists to surface. What is **not** established: which regions,
how many operators, or whether the Lower Mainland is among the thin ones. No number
appears. **[?]** Do not assume the Lower Mainland is well covered because it is populous,
and do not assume it is thin because the province says some regions are. Neither is
sourced.

**The guard, and where it stops.** The warning against presenting amateur radio as a
solution stands for equipment bought by an unprepared household. It does **not** stand
for organised radio, which the province treats as part of its own capability. Both halves
belong on the page, and the hinge between them is affiliation.

**Where this belongs on the site.** Beside the lever, not beside the failure. The useful household
consequence of this whole page is not a piece of equipment — it is **send a text, not a call**,
which is free, needs nothing bought in advance, and is the province's own recommendation
above. Amateur radio is context for why the text message matters, not a competing
recommendation. See `../preparedness.md`.

### E-Comm's 9-1-1 centre

E-Comm's Lower Mainland centre is a **60,000 square foot reinforced concrete post-disaster
building**, "designed to resist an earthquake and to operate self-sufficiently for up to **72 hours**
following a disaster", with shatterproof glass and emergency food and water storage.
[ECOMM-FAC] **[A]**

A page that only reports absences is not an honest page. This one is closed, it is favourable, and it
sits directly beside the finding that nothing protects the radio sites the calls travel over.

### Earthquake early warning

- **Earthquake Early Warning has been live in British Columbia since spring 2024**, delivered over
  the National Public Alerting System. Natural Resources Canada states plainly that sites near the
  epicentre fall in a "**late alert zone**", where the alert can arrive **after** the shaking.
  [NRCAN-EEW] **[A]**
- **BC Emergency Alert reaches phones only on a live LTE cellular network.** [BC-ALERT-2026]
  **[A]**
- **The City of Vancouver tells residents to expect "10 to 30 seconds of warning"**, delivered
  through television, radio and compatible cell phones. [COV-EXPLORER-25] **[A]** for the City
  saying it.
- **Checked, 10 September 2026, and it is not a Vancouver figure for either of this site's
  scenarios.** NRCan publishes no general warning time and says so — its system pages give only
  "seconds to tens-of-seconds", explicitly distance-dependent. [NRCAN-EEW-FAQ] **[A]** But its
  Earthquakes Canada blog models named cities event by event, and Vancouver appears three times:

  | Modelled event | Warning for Vancouver |
  | --- | --- |
  | Cascadia M9 megathrust [NRCAN-EEW-CSZ-23] **[A]** | **21 to 239 seconds**, "due to the variation in possible ruptures along the CSZ" |
  | 1946 M7.3 crustal, central Vancouver Island [NRCAN-EEW-1946-21] **[A]** | about **40 seconds** (Courtenay and Cumberland fell inside a late alert zone extending ~30 km from the epicentre) |
  | 2001 M6.8 Nisqually, in-slab, 52 km deep [NRCAN-EEW-NISQ-26] **[A]** | **30 seconds** |

  And for the case closest to this site's crustal scenario — a shallow earthquake immediately
  beneath a populated centre — NRCan models Victoria, not Vancouver, and its conclusion is that
  "alerts would have very short warning times, or even arrive too late" in neighbourhoods near
  the epicentre. [NRCAN-EEW-CHCH-23] **[A]** No equivalent run for a crustal event beneath
  Vancouver has been published.
- **So the City's ceiling is NRCan's floor, and the City's floor is below it.** For Cascadia the
  system's own operator models 21 to 239 seconds; for a near crustal event it declines to promise
  any. The one case "10 to 30 seconds" roughly fits is a distant deep earthquake of the Nisqually
  type, which is neither scenario this site runs. **Do not publish "10 to 30 seconds" as a
  Vancouver expectation, and publish no seconds figure without its scenario attached.**
- **Two activations are now on the record, and both illustrate the hinge.** The first public
  alert, in September 2024 for an M6.5 south of Haida Gwaii, reached nobody by cell tower because
  there are no cell towers in the alerted area. The first in southwest BC, in February 2025 for an
  earthquake northeast of Sechelt, was distributed by cell-tower polygon and by broadcast, and
  "some phones outside the EEW region also received the alert". **[?]** — **this bullet carries
  no source key.** It reads as Earthquakes Canada blog material, but none of the registered
  `NRCAN-EEW-*` keys is the activations post, and an uncited marker certifies our diligence
  rather than the record. **Not usable until the post is located and registered.**
- **Citation hazard, and it is worse than fragile.** The Earthquakes Canada blog has **no
  per-post permalinks** — posts are addressed only by an `?offset=` page, and a post's offset
  **shifts every time a new post is published**. A citation to `offset=36` will silently come to
  mean a different post. Every figure above is cited to a dated web-archive capture with the
  post's own date and headline quoted, never to a live offset URL.

Put together — and the modelled figures above are the evidence for it, not an illustration of
it: the closer the earthquake, the less warning the system can give, and the alert
depends on the same cellular network the earthquake is degrading — a network with no required
backup power at all. That dependency is the hinge of the page. It is not a criticism of early
warning, which works as designed and is worth having; it is a statement of what it can and cannot
do.

---

## What is not established

**No BC-specific published telecom resilience assessment. [?]** Searched 10 September 2026: no
TELUS, Rogers or BCE network-resilience disclosure specific to British Columbia; no ISED or Public
Safety Canada BC-specific assessment.

**No carrier disclosure of site counts, backup-power holdings or restoration expectations for the
Lower Mainland. [?]** None found through the channels above.

**No peer-reviewed or grey-literature study modelling cellular network saturation or
post-earthquake cellular performance in British Columbia or Metro Vancouver. [?]** PEIRS and the
DCRRA are the only BC government documents describing post-earthquake communications failure,
and both do so qualitatively — no numbers, no restoration curves, no site counts.

**The Xona Partners report on the July 2022 Rogers outage does not fill this gap.** It addresses
**no power-related failure mode and makes no backup-power recommendation**; it is about
configuration, management-plane isolation and process. [XONA-2023] **[A]** for what the report
covers. It is the obvious document a reader or a critic will reach for, so the page should say what
it is about rather than leave the inference open.

**No regulatory policy from CRTC 2025-226 as at 10 September 2026. [?]** The record closed
around 26 August 2026. **This is the page's live refresh trigger**: a decision would change the
central finding, and the page must be re-run against it when one issues.

**Method caveat.** Neither the session that produced this evidence nor the 10 September 2026
follow-up had general web search. The original material was obtained by direct fetching of
regulator, government and operator endpoints, sitemaps, site-native search APIs and the Crossref
API. The follow-up added a **scripted browser** that defeats Cloudflare and JavaScript shells, and
the **Crossref and OpenAlex bibliographic indexes**, which are true indexes rather than
search-engine proxies. What still cannot be run is a keyword query of the form "does any
document anywhere say X", so these negatives remain **"not found through these channels"**, not proofs of universal absence.
The regulatory findings are the least affected, because they rest on primary CRTC documents read
directly. **The three carrier and BC-specific negatives above rest on direct
fetching of carrier and government endpoints rather than on any keyword index.**

---

## For the page

**Mechanism sentence for the impact cell (both scenarios, band Medium).** *The province expects
disruption to communications to continue for days to weeks, with what capacity survives prioritised
for emergency personnel and a prolonged lack of access for everyone else; it names satellite phones
and amateur radio as the backups people would fall back on.* [DCRRA-2025] [PEIRS] The crustal column
carries the standing note that the assessment behind it models the megathrust.

**Opening sentence for the page.** A cell site is a radio and a computer in a cabinet, and both need
power. In the Lower Mainland no rule says how long that power has to last after the grid goes down,
because the regulator has not made one: it opened a proceeding in September 2025 and has not
decided. [CRTC-2025-226]

**The satellite-and-radio sentence earns a place near the top.** The province naming satellite
phones and amateur radio as the expected fallbacks is the plainest evidence on this page that the
public networks are not expected to carry this, and it is the province's own expectation rather
than our reading of one. It travels with the congestion symmetry: every channel here fails the same
way, by filling up rather than by breaking. [PEIRS]

**Build it as a regulatory-gap page.** The structure writes itself, and it should be exactly this order:
nothing requires backup power at cell sites → the regulator is still asking → what *is* binding is
notification and 9-1-1 prioritisation → British Columbia formally asked for 72 hours in November
2025 → the 9-1-1 centre itself is post-disaster rated and has 72 hours → a M4.7 in 2015 produced a
1,500% spike in 9-1-1 calls → the alerting system that warns you needs the network the
earthquake degrades.

**State clearly that an absence of requirements is a finding, not a gap in our research.** This is the
one page where the reader might otherwise conclude we simply did not look. Name the
proceeding, the date it closed, and the fact that no policy has issued. A dated, named absence is a
fact about the world.

**Guards that must travel with the numbers.**

- The 24-hour and 72-hour figures under TRP 2016-165 [CRTC-2016-165] are about **9-1-1
  switches**, not radio sites.
  If there is any risk of that line being read as a tower figure, cut it.
- BC's 72-hour ask is a **request to the regulator**, not a rule and not a description of what exists.
- The Vancouver Building By-law's 1–2 hours are a **code minimum for buildings**, for evacuation
  life safety. The by-law does not govern telecommunications sites. Ship the comparator only with
  that guard attached; otherwise cut it.
- E-Comm's 72 hours describes **one building** — the call centre — and says nothing about the
  network between a caller and that building.
- The 1,500% figure is **9-1-1 calls after a M4.7 in 2015**, from E-Comm, and is a saturation
  observation, not a forecast for a major earthquake.
- PEIRS and DCRRA statements are qualitative and carry their scenarios.

**Through-line, shared with `housing.md` and `health-care.md`: the new buildings are excellent and
the existing ones are the problem.** The new St. Paul's, the new Surrey hospital, Royal Columbian's
acute care tower, E-Comm's Lower Mainland centre and three new Vancouver fire halls are built to
post-disaster standard. Existing St. Paul's, Richmond Hospital, most of Vancouver's fire halls, 265
outstanding school seismic projects province-wide and **every cell site in the region** are not.
Communications is where that contrast is starkest: the building that answers the call is
post-disaster rated; nothing at all governs the towers that carry it.

**Lever.** Two, and both are unusually concrete. First, text rather than call — PEIRS says so in the
province's own voice, and low-bandwidth messages get through congestion that defeats voice.
Second, the E-Comm finding: do not call 9-1-1 to ask what happened or whether it was an
earthquake. The 2015 spike was overwhelmingly non-emergency calls, and each one occupied a line
somebody else needed. Turn on Earthquake Early Warning and BC Emergency Alert, and understand
that near the epicentre the alert may arrive with the shaking rather than before it.

**Do not write.** No "the network will go down" — no source says that. No implied criticism of
carriers for a rule that does not exist; the finding is about the regulatory record, not about
corporate conduct. No suggestion that early warning is useless, which is neither true nor what
NRCan says.
