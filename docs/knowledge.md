# Knowledge

Things learned while building the site that outlive the change that taught them:
sources worth keeping, quirks of the stack, decisions and the reason behind them.

Not a changelog. If something belongs to the spec it goes in `site-overview.md`;
if it belongs to the voice it goes in `style-guide.md`. This file is for the rest.

Newest entries at the top. Each entry: a short heading, what was learned, and how
it was confirmed.

---

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
