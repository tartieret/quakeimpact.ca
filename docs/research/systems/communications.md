# Communications

<!-- review-status: unreviewed -->

> **Review status: unreviewed.** Not yet verified by the project owner. Change to
> `validated` with a date once reviewed, in both the comment and this line.
> **Last research pass:** 16 September 2026.

**Status.** Three findings, and they must not be confused with each other.

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

**What the carriers hold, which the rule's absence must not be read against.** An absent rule is
not an absent battery. Bell, TELUS and Rogers answered the regulator's own question on backup power
in July 2026. Bell says every one of its cell sites has a battery, a generator or both, with batteries
designed for **2 to 8 hours** and generators for **24 to 48 hours** at the sites that have them.
[BELL-CRTC-RFI-26] **[A]** for Bell's statement. TELUS describes three tiers of site with target
runtimes from **24 hours to over 7 days**. [TELUS-CRTC-RFI-26] [TELUS-CRTC-INT-25] **[A]** for
TELUS's statement. Rogers filed its figures in confidence. [ROGERS-CRTC-RFI-26] So backup power at a
cell site is measured in **hours to a few days**, sized for ordinary outages, and what keeps a site up
after that is fuel and road access. All three figures are national and self-reported; none is a
Lower Mainland inventory.

**Why the distinction is load-bearing.** The band used to rest on the regulatory absence, and that
was not a reason: a missing rule says nothing about how long the network is down, so it cannot
choose between Medium and High. It also left the band open to the obvious objection — electricity
is banded High at several weeks downtown, communications depends on electricity and on fuel, so
how is communications Medium? The answer is the province's own duration statement, and it is worth
writing where a reader can see it. `../impact-bands.md` carries the general rule this case forced:
the published duration sets a band, and a system can be banded below
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

### What the carriers say their cell sites carry

On 12 May 2026 CRTC staff asked each large provider to "describe your current strategy for backup
power at network sites", including "the duration of power backup you design for each site or site
category". The answers were filed on 9 July 2026. They are the only published description of
cell-site backup power by the companies that run the sites.

- **Bell.** For the wireless network, "all cell sites have backup power (battery and/or generator), with battery backup
  designed for the 2-to-8-hour range (depending on site), and generator backup providing 24 to 48
  hours of autonomy or longer with refueling as required for certain critical sites." Bell manages
  "more than 2,500 generators, which permanently cover over 2,000 sites". Central offices carry 4 to
  6 hours of batteries plus standby generators; core and large transport offices 24 to 72 hours of
  on-site fuel. "On rooftop sites where a permanent generator is not feasible, Bell relies on
  extended battery autonomy and rapid-deploy mobile generators." It names "refusal of municipal
  permitting in dense urban environments and on rooftops" among the costs of a mandate.
  [BELL-CRTC-RFI-26] **[A]** for Bell's statement.
- **TELUS.** Sites are classified into Category 1 "Critical", 2 "Important" and 3 "Standard" "to
  determine the duration of their power backup", with "tiered target runtimes (ranging from 24
  hours to over 7 days)". [TELUS-CRTC-RFI-26] **[A]** The figures per category are in its December
  2025 intervention, and **they are written as what providers should do**: at least 72 hours for
  critical sites (core nodes, emergency services connectivity), 48 for important sites, 24 for
  standard sites, which "typically serve as part of a redundant network architecture where
  temporary outages are more tolerable". Batteries "are ideally suited for urban sites where space
  is limited, outages are typically short in duration". [TELUS-CRTC-INT-25] **[A]** for the
  recommendation. The cost table, and anything that would show how many sites sit in each tier,
  is redacted.
- **Rogers.** "Rogers does not have an average duration of power backup, as each site has unique
  characteristics and requirements." The design durations and technologies are filed in confidence.
  Its selection framework focuses on "sites exhibiting the lowest reserve times". [ROGERS-CRTC-RFI-26]
  **[A]** **Withheld, not absent.**

**Guards that travel with these figures.**

- **National, not regional.** No carrier gives a Lower Mainland figure. Bell's figures describe
  Bell's sites; Bell and TELUS share one radio access network, which the regulator treats as a
  single national network [CRTC-2025-245] **[A]**, and which company builds and powers the shared
  sites in British Columbia is not established from a primary document (trade press says TELUS).
- **Design, not performance.** A design runtime is what a site is built for with a healthy battery
  and an unbroken site. None of the filings says what share of sites meets its target, and
  Rogers' selection framework exists because some sites have low reserve times.
- **Advocacy context.** All three filings argue against any required run time. Bell: backup power
  "should be addressed as a best practice rather than as a prescriptive rule". TELUS: "the
  Commission should not mandate any network resiliency requirements, including backup power
  requirements". Rogers: "This should be a best practice only." They are the carriers' own accounts,
  filed to show a mandate is unnecessary.
- **Do not reconcile TELUS's two dates by averaging.** In 2018 CBC News reported TELUS saying its generators and
  backup batteries can last between four and 10 hours, and that its critical sites have fixed
  generators. [CBC-CELLSITES-18] The 2025 and 2026 filings describe 24 hours or more as the target at
  a standard site. Different years, and a target is not an inventory. Neither is wrong on its face,
  and neither is a Lower Mainland figure.

### What the backup is sized for, and what runs it down

The CSTAC guidance reproduced in the proceeding says that where a generator is not practical,
providers "should consider designing battery capacity to cover the typical likely interruption of
the mains supply or the time to travel to site with portable generating equipment". [CRTC-2025-226]
**[A]** Bell says run time is "driven by site role, the duration profile of the commercial-power
events to which the site is exposed, accessibility for refuelling". [BELL-CRTC-RFI-26] **[A]**
Both size backup for an ordinary outage and assume a crew and a truck can arrive.

**Hurricane Fiona, Atlantic Canada, September 2022, is Bell's own account of what happens when they
cannot.** Battery power "typically lasts for eight to ten hours", then generators, which "depend
upon a ready supply of gasoline or diesel fuel ... fuel is only capable of being pumped where there
is power at gas stations and fuel depots"; and "debris and downed power lines prevented our crews
from safely navigating the streets to access network sites to replenish generator fuel". One
wireless priority site went fully down "because its generator had exhausted its fuel supply".
[BELL-FIONA-22] **[C]** as an analogue: it illustrates the mechanism, which is the one the
electricity and fuel files describe for the Lower Mainland, and it generates no figure here.

**A British Columbia example of the same failure at small scale.** On 29 May 2024 a power cut near
Alexis Creek, a failed generator transfer switch and exhausted batteries cut wireless, landline and
9-1-1 access in Bella Coola, Tatla Lake and Nimpo Lake for 2 hours 40 minutes.
[TELUS-BELLACOOLA-24] **[A]** for the incident. Rural and not seismic; research context only.

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
sits directly beside the finding that no rule sets how long the radio sites the calls travel over
must keep running.

E-Comm's own intervention in CRTC 2025-226 puts the gap in its words: "Today, there are no defined
service levels for 911 and NG911 resiliency", and outages affecting emergency services are managed
"under the same standards as those affecting commercial customers". [ECOMM-CRTC-25] **[A]**

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

**No BC-specific published telecom resilience assessment. [?]** Searched 10 and 16 September 2026:
no TELUS, Rogers or BCE network-resilience disclosure specific to British Columbia; no ISED or Public
Safety Canada BC-specific assessment. The carriers' CRTC filings are national.

**No carrier disclosure of site counts, generator coverage or restoration expectations for the
Lower Mainland. [?]** Bell and TELUS publish national design runtimes (above); Rogers withholds its
own. How many Lower Mainland sites have a generator, how many are battery-only rooftop sites, and
how many sit in each TELUS tier is not published. Rogers' durations and TELUS's per-category costs
are **withheld in confidence**, which is a different fact from their not existing.

**Who builds and powers the shared Bell and TELUS radio sites in British Columbia. [?]** The shared
network is established [CRTC-2025-245]; the regional split is trade press only. It decides whose
design runtimes describe Vancouver. See `../open-questions.md`.

**Seismic design of cell sites. [?]** No carrier publishes one. Rogers affirms that current standards
protect against "wildfires, flooding, ice storms, or other extreme events" [ROGERS-CRTC-RFI-26];
TELUS lists earthquakes among threats and audits its critical facilities for them, with the audit
detail redacted [TELUS-CRTC-INT-25]. British Columbia's request for seismic-rated shelter
foundations [BC-CRTC-SUB] is the only published statement on the point, and it is a request.

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

**Method caveat.** The carrier findings come from the CRTC's public record for 2025-226, read in full
on 16 September 2026: the staff request for information, the abridged answers of Bell, TELUS and
Rogers, and the interventions of TELUS, E-Comm and the Canadian Telecommunications Association.
The negatives above are "not found through general web search and the regulator's record as at
that date", not proofs of universal absence.

---

## For the page

**Mechanism sentence for the impact cell (both scenarios, band Medium).** *The province expects
disruption to communications to continue for days to weeks, with what capacity survives prioritised
for emergency personnel and a prolonged lack of access for everyone else; it names satellite phones
and amateur radio as the backups people would fall back on.* [DCRRA-2025] [PEIRS] The crustal column
carries the standing note that the assessment behind it models the megathrust.

**Opening sentence for the page.** A cell site is a radio and a computer in a cabinet, and both need
power. When the grid goes down it runs on its own backup, built to last hours to a few days
[BELL-CRTC-RFI-26] [TELUS-CRTC-INT-25], and after that on whatever fuel reaches it. No rule says how
long that backup has to last, because the regulator has not made one: it opened a proceeding in
September 2025 and has not decided. [CRTC-2025-226]

**Never let the regulatory absence read as "sites have no backup power".** They do, measured in
hours to days. The finding is that nothing sets how long, and that what they carry is sized for an
ordinary outage rather than for weeks without the grid, fuel deliveries or clear roads.

**The satellite-and-radio sentence earns a place near the top.** The province naming satellite
phones and amateur radio as the expected fallbacks is the plainest evidence on this page that the
public networks are not expected to carry this, and it is the province's own expectation rather
than our reading of one. It travels with the congestion symmetry: every channel here fails the same
way, by filling up rather than by breaking. [PEIRS]

**Build it as a regulatory-gap page.** The structure writes itself, and it should be exactly this order:
cell sites carry hours to days of backup, sized for ordinary outages, and then depend on fuel and
access → nothing requires a minimum and the regulator is still asking → what *is* binding is
notification and 9-1-1 prioritisation → British Columbia formally asked for 72 hours in November
2025 → the 9-1-1 centre itself is post-disaster rated and has 72 hours → a M4.7 in 2015 produced a
1,500% spike in 9-1-1 calls → the alerting system that warns you needs the network the
earthquake degrades.

**State clearly that an absence of requirements is a finding, not a gap in our research.** This is the
one page where the reader might otherwise conclude we simply did not look. Name the
proceeding, the date it closed, and the fact that no policy has issued. A dated, named absence is a
fact about the world.

**Guards that must travel with the numbers.**

- The carriers' runtimes are **national design targets from their own filings**, written while
  arguing against a mandate. Give the order of magnitude (hours to a few days), not a single figure,
  and never as a Lower Mainland inventory. TELUS's tiers are what it says providers should do.
- Fiona is **Bell's account of an Atlantic storm**: it carries the mechanism (batteries, then
  generators, then fuel and access), never a duration for the Lower Mainland.
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
