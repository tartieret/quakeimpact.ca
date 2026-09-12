---
route: /after/communications/
title: Communications
nav: Communications
hook: Nothing requires a cell tower to hold any backup power at all.
lede: The province expects disruption to communications to continue for days to weeks, with what capacity survives prioritised for emergency personnel. [DCRRA-2025] Behind that sits a plain fact about the rules: the regulator that would set a backup-power run time for a cell site has not set one, and is still asking what it should be. [CRTC-2025-226]
bands: { cascadia: medium, crustal: medium }
mechanism: The province expects disruption to communications to continue for days to weeks, with what capacity survives prioritised for emergency personnel and a prolonged lack of access for everyone else; it names satellite phones and amateur radio as the backups people would fall back on.
source: DCRRA-2025
status: draft
---

## The first failure is not a broken tower, it is a full network

A cell site does not have to fall over to stop working. The province's earthquake
response strategy says what happens first:

> "If service is available, networks may be congested or overloaded, making
> communication extremely challenging. Texts and low-bandwidth data-based services
> may be the most reliable method of communication when other services are
> disrupted." [PEIRS]

A voice call holds a channel open for as long as it lasts; a text is a short burst
that keeps retrying until it lands. [PEIRS]

The same filling-up happens to 9-1-1. E-Comm, which answers 9-1-1 calls for the Lower
Mainland, says: "We received a 1,500 per cent increase in 9-1-1 calls after a 4.7
earthquake in 2015. The vast majority of those calls were not emergencies."
[ECOMM-EQ] That is a count from one small earthquake, not a forecast for a large
one. [ECOMM-EQ]

## Nothing requires a cell site to hold any backup power at all

A cell site is a radio and a computer in a cabinet, usually on a rooftop or at the
foot of a mast, and both run on grid power. When the power goes, the site runs on
whatever battery or generator its owner chose to put there. How long the grid takes
to come back is on [electricity](/after/electricity/).

No Canadian rule sets how long that battery has to last. On 4 September 2025 the
Canadian Radio-television and Telecommunications Commission, the federal telecom
regulator, opened a proceeding on network resiliency and put this to the industry: "What
parameters should TSPs use to determine an appropriate backup power run time for each
type of network site?" [CRTC-2025-226] TSPs are the telephone and internet companies
themselves. The guidance reproduced in the proceeding's appendix is written in
"should" rather than "must". [CRTC-2025-226]

The record closed in late August 2026 and no decision has issued. [CRTC-2025-226] A
regulator asking what the run time ought to be is the plainest evidence available
that no run time is set.

## What the rules do require is that somebody is told

Two Commission decisions from 2025 are in force, and neither is about power.

Telecom Decision CRTC 2025-225, in force since 4 November 2025, requires a provider
to notify the Commission, Innovation, Science and Economic Development Canada and
emergency management organisations within two hours of a major outage, and to file a
report within fourteen days. [CRTC-2025-225] It sets no backup-power requirement and
no requirement to physically strengthen anything. [CRTC-2025-225] Telecom Decision
CRTC 2025-65, from February 2025, requires that 9-1-1 traffic be given priority on
the network where that is technically feasible. [CRTC-2025-65]

The one Canadian backup-power duration in this area belongs to buildings rather than
towers. Guidance under an earlier Commission policy sets backup power of at least 24
hours for central office 9-1-1 switches and 72 hours for tandem switches.
[CRTC-2016-165] Those are the switching offices that route a 9-1-1 call, not the
radio sites the call travels over, and the figures are guidance rather than a
requirement. [CRTC-2016-165]

## British Columbia has asked the regulator for 72 hours

On 28 November 2025 the Province of British Columbia filed its own submission in that
proceeding. It asks the Commission to mandate a minimum of 72 hours of autonomous
backup power at core and high-priority sites, 120 hours as best practice in remote
areas, seismic-rated shelter foundations in high-risk zones, and annual stress
testing including a "Massive Traffic Surge" scenario. [BC-CRTC-SUB] It names "Seismic
Events: High earthquake risk in southwestern BC" as one of four risk categories
facing the province. [BC-CRTC-SUB]

That is a request to a regulator, not a rule and not a description of what is in
place today.

One building in this chain is built for the event: E-Comm's Lower Mainland centre is
a 60,000 square foot reinforced concrete post-disaster building, "designed to resist
an earthquake and to operate self-sufficiently for up to 72 hours". [ECOMM-FAC] That
is where the call arrives, and it says nothing about the cabinets and towers between
a caller and it.

## The province expects days to weeks, with what survives going to emergency personnel first

The province's megathrust assessment states that "disruptions in communications
continue for days to weeks", with access prioritised for emergency personnel,
"leading to a prolonged lack of access to communications for the general population".
[DCRRA-2025] That statement is qualitative and describes a magnitude 9.0 Cascadia
earthquake. [DCRRA-2025]

The response strategy does not separate copper from cellular: "common communication
service providers, including cellular and landline telephone providers, may be
impacted". [PEIRS] It names "satellite phones and amateur radio services" as the
backups people would fall back on, and in the same passage says radio fills up the
way the cellular network does: "Radio communication, if operable, may be also
congested and impact the ability of first responders if saturated with non-sanctioned
operators." [PEIRS]

Non-sanctioned means outside the province's own volunteer service. Through the
Provincial Emergency Radio Communications Service it has installed amateur radio
equipment at each of its regional emergency operations centres, though "some regions
have a limited number of radio operators". [PEIRS] The line it draws is between
operators who joined an organised group before the earthquake and operators who did
not.

> **Not published.** Which regions are short of radio operators, and whether the
> Lower Mainland is one of them, is not in the document. [PEIRS] No carrier has
> published how many sites it runs here, how long they hold without grid power, or
> how quickly it would bring them back, and the province's assessments give no site
> counts and no restoration curve. [PEIRS] [DCRRA-2025]

## The alert that warns of the shaking travels over the network the shaking degrades

Earthquake Early Warning has been live in British Columbia since spring 2024,
delivered over the national public alerting system. [NRCAN-EEW] BC Emergency Alert
reaches a phone only over a live LTE cellular network. [BC-ALERT-2026]

How much warning there is depends on how far away the earthquake starts, and Natural
Resources Canada, which runs the system, publishes no general figure.
[NRCAN-EEW-FAQ] It models named earthquakes instead, and Vancouver appears in three
of them.

| Modelled earthquake | Warning for Vancouver |
| --- | --- |
| Magnitude 9 Cascadia megathrust | 21 to 239 seconds, "due to the variation in possible ruptures along the CSZ" [NRCAN-EEW-CSZ-23] |
| 1946 magnitude 7.3 on central Vancouver Island | About 40 seconds [NRCAN-EEW-1946-21] |
| 2001 magnitude 6.8 Nisqually, 52 km deep | 30 seconds [NRCAN-EEW-NISQ-26] |

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
