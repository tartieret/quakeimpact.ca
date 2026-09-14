---
route: /after/communications/
title: Communications
nav: Communications
hook: Cell sites have no required minimum backup-power time.
lede: The province expects communications to be disrupted for days to weeks. Surviving capacity would go first to emergency personnel. [DCRRA-2025] Cell sites have no minimum backup-power requirement. The regulator is still considering one. [CRTC-2025-226]
bands: { cascadia: medium, crustal: medium }
mechanism: The province expects communications to be disrupted for days to weeks. Surviving capacity would go first to emergency personnel, with satellite phones and amateur radio used as backups.
source: DCRRA-2025
---

## Call volumes overload the network first

A cell site does not have to fall over to stop working:

> "If service is available, networks may be congested or overloaded, making
> communication extremely challenging. Texts and low-bandwidth data-based services
> may be the most reliable method of communication when other services are
> disrupted." [PEIRS]

A voice call holds a channel open for as long as it lasts; a text is a short burst
that keeps retrying until it lands. [PEIRS]

The same filling-up happens to 9-1-1. E-Comm, which answers 9-1-1 calls for the Lower
Mainland, says: "We received a 1,500 per cent increase in 9-1-1 calls after a 4.7
earthquake in 2015. The vast majority of those calls were not emergencies."
[ECOMM-EQ] The count comes from one small earthquake and is not a forecast for a
large one.

## Cell sites have no minimum backup-power requirement

A cell site is a radio and a computer in a cabinet, usually on a rooftop or at the
foot of a mast, and both run on grid power. When the power goes, the site runs on
whatever battery or generator its owner chose to put there. How long the grid takes to come back is on [electricity](/after/electricity/), and a generator runs as long as somebody keeps delivering [fuel](/after/fuel/).

No Canadian rule sets how long that battery has to last. On 4 September 2025 the
Canadian Radio-television and Telecommunications Commission, the federal telecom
regulator, opened a proceeding on network resiliency and put this to the industry: "What
parameters should TSPs use to determine an appropriate backup power run time for each
type of network site?" [CRTC-2025-226] TSPs are the telephone and internet companies
themselves. The guidance reproduced in the proceeding's appendix is written in
"should" rather than "must". [CRTC-2025-226]

The record closed in late August 2026. No decision has been issued. [CRTC-2025-226]

## Current rules focus on reporting and 9-1-1 routing

Telecom Decision CRTC 2025-225, in force since 4 November 2025, requires a provider
to notify the Commission, Innovation, Science and Economic Development Canada and
emergency management organisations within two hours of a major outage, and to file a
report within fourteen days. [CRTC-2025-225] It sets no backup-power requirement and
no requirement to physically strengthen anything. [CRTC-2025-225] Telecom Decision
CRTC 2025-65, from February 2025, requires that 9-1-1 traffic be given priority on
the network where that is technically feasible. [CRTC-2025-65]

Guidance under an earlier Commission policy sets backup power of at least 24 hours
for central office 9-1-1 switches and 72 hours for tandem switches. [CRTC-2016-165]
Those are the switching offices that route a 9-1-1 call, not the radio sites the call
travels over. Both figures are guidance, and neither is binding. [CRTC-2016-165]

## British Columbia has requested 72 hours of backup power

On 28 November 2025 the Province of British Columbia filed its own submission in that
proceeding. It asks the Commission to mandate a minimum of 72 hours of autonomous
backup power at core and high-priority sites, 120 hours as best practice in remote
areas, seismic-rated shelter foundations in high-risk zones, and annual stress
testing including a "Massive Traffic Surge" scenario. [BC-CRTC-SUB] It names "Seismic
Events: High earthquake risk in southwestern BC" as one of four risk categories
facing the province. [BC-CRTC-SUB]

The submission is a request, not a rule. It does not describe what is in place today.

E-Comm's Lower Mainland centre is a 60,000 square foot reinforced concrete
post-disaster building, "designed to resist an earthquake and to operate
self-sufficiently for up to 72 hours". [ECOMM-FAC] This applies to the centre receiving
the call, not the cabinets and towers carrying it.

## Disruption could last days to weeks

The province's megathrust assessment states that "disruptions in communications
continue for days to weeks", with access prioritised for emergency personnel,
"leading to a prolonged lack of access to communications for the general population".
[DCRRA-2025] The assessment gives no site counts or outage curve and applies to a
magnitude 9.0 Cascadia earthquake.

The response strategy does not separate copper from cellular: "common communication
service providers, including cellular and landline telephone providers, may be
impacted". [PEIRS] It names "satellite phones and amateur radio services" as the
backups people would fall back on. Radio fills up the way the cellular network does:
"Radio communication, if operable, may be also congested and impact the ability of
first responders if saturated with non-sanctioned operators." [PEIRS]

Non-sanctioned means outside the province's own volunteer service. Through the
Provincial Emergency Radio Communications Service it has installed amateur radio
equipment at each of its regional emergency operations centres, though "some regions
have a limited number of radio operators". [PEIRS] The distinction is whether an
operator joined an organised group before the earthquake.

> **Not published.** Which regions are short of radio operators, and whether the
> Lower Mainland is one of them, is not in the document. [PEIRS] No carrier has
> published how many sites it runs here, how long they hold without grid power, or
> how quickly it would bring them back, and the province's assessments give no site
> counts and no restoration curve. [PEIRS] [DCRRA-2025]

## Earthquake alerts depend on the mobile network

Earthquake Early Warning has been live in British Columbia since spring 2024,
delivered over the national public alerting system. [NRCAN-EEW] BC Emergency Alert
reaches a phone only over a live LTE cellular network. [BC-ALERT-2026]

How much warning there is depends on how far away the earthquake starts. Natural Resources Canada, which runs the system, publishes only "seconds to tens-of-seconds" and says the number depends on distance. [NRCAN-EEW-FAQ] It models named earthquakes instead, and Vancouver appears in three of them.

| Modelled earthquake | Warning for Vancouver |
| --- | --- |
| Magnitude 9 Cascadia megathrust | 21 to 239 seconds, "due to the variation in possible ruptures along the CSZ" [NRCAN-EEW-CSZ-23] |
| 1946 magnitude 7.3 on central Vancouver Island | About 40 seconds [NRCAN-EEW-1946-21] |
| 2001 magnitude 6.8 Nisqually, in Washington State, 52 km deep | 30 seconds [NRCAN-EEW-NISQ-26] |

For a shallow earthquake directly under a city, the closest case it has modelled is
Victoria, where near the epicentre "alerts would have very short warning times, or
even arrive too late". [NRCAN-EEW-CHCH-23] Ground close to any epicentre falls in
what it calls a late alert zone, where the alert arrives after the shaking starts.
[NRCAN-EEW]

> **Not a general figure.** The City of Vancouver tells residents to expect "10 to 30
> seconds of warning". [COV-EXPLORER-25] No scenario is attached to that range, and
> the numbers above each belong to one modelled earthquake. [NRCAN-EEW-FAQ]

## What you can do

The network that survives the first hours is narrow, and what people send across it
decides who else gets through.

**Text rather than call.** The province names texts and low-bandwidth messages as the
most reliable method when other services are disrupted. [PEIRS] A short message keeps
retrying in the background, while a voice call holds a channel open for its whole
length.

**Call 9-1-1 to report an emergency, and not to ask what happened.** After a
magnitude 4.7 in 2015 E-Comm recorded a 1,500 per cent increase in 9-1-1 calls, and
the vast majority of them were not emergencies. [ECOMM-EQ] Each of those calls held a
line somebody else needed.

**Turn on emergency alerts, and expect the warning to be short.** Earthquake Early
Warning has been live in British Columbia since spring 2024, [NRCAN-EEW] and BC
Emergency Alert reaches a phone over the same cellular network the earthquake is
degrading. [BC-ALERT-2026] Close to the epicentre the alert can arrive with the
shaking rather than before it. [NRCAN-EEW]

None of those three needs anything bought in advance.

## Sources on this page

[DCRRA-2025] [CRTC-2025-226] [PEIRS] [ECOMM-EQ] [CRTC-2025-225] [CRTC-2025-65]
[CRTC-2016-165] [BC-CRTC-SUB] [ECOMM-FAC] [NRCAN-EEW] [BC-ALERT-2026]
[NRCAN-EEW-FAQ] [NRCAN-EEW-CSZ-23] [NRCAN-EEW-1946-21] [NRCAN-EEW-NISQ-26]
[NRCAN-EEW-CHCH-23] [COV-EXPLORER-25]
