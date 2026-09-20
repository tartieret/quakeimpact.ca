# Knowledge: research and retrieval

How the research process manufactures a false absence or a false corroboration, and
the routes that got past each one. Every entry here cost the project a wrong finding
before it became a rule.

The rules for writing research files are in `../research/CONVENTIONS.md` and are not
repeated here: a marker certifies a route, a searched absence is a finding, deliberate
non-publication is not absence, and numbers that share a unit are not always comparable.

## Before believing a negative, confirm the channel can produce a positive

Each of these produced a result that looked exactly like an absence:

- **A broken site search.** metrovancouver.org's search returns HTTP 500, and a page
  said no seismic assessment of Cleveland or Seymour Falls dams was published while six
  GVWD Dam Safety Program Annual Updates carried both. Run a control query for something
  known to be there.
- **A 200 that is not a document.** `dfo-mpo.gc.ca` returned a byte-identical
  3,327-byte stub for every path, including an invented one. Request a bogus path and
  compare it with a real one.
- **A failed fetch saved as `.pdf`.** One of two agenda URLs saved 115 KB of JavaScript
  under the requested name. Run `file` on it, or count its pages.
- **A 403.** It means not yet retrieved. See the retrieval routes below.
- **The wrong unit of publication.** The Auditor General's dam-safety follow-ups are
  chapters of the annual *Follow-up Report*, which no query naming a dam finds. Ask what
  a body's reporting unit is (annual report, follow-up series, committee minutes) before
  trusting a title search.
- **The wrong channel.** Richmond's statement that its fire halls are rated for major
  disasters is a fire chief's answer in committee minutes; the City's site search
  indexes reports and not minutes. Search the minutes for anything a resident might ask
  a council, and carry the weakness: an oral assurance is not an engineering certificate.
- **A known document left unread.** FortisBC's 2026 long-term plan never says
  "seismic"; its 2024 Gas System Resiliency Plan, identified and sitting behind a 403,
  is a full seismic risk assessment. An absence is evidence only once the documents
  known to bear on it have been read.

Word an absence to the boundary of what was searched ("More information needed"), not
to the boundary of the subject ("No seismic standard published"). Prefer a document
series to a search box: what a body must report, it reports on an enumerable schedule.

## Verify against the document, not the citation

A correct title, URL and revision date says nothing about whether the document supports
the claim. The PreparedBC guide cited for "72 hours" says "at least two weeks" three
times and never 72 hours; "grossly inadequate" came from a newspaper quoting an
unpublished draft, not from the after-action report it was attributed to. Open the
document and search its text.

Data is the same. The Dedicated Fire Protection System layer, described in three
project documents as a coverage boundary, is 245 segments of water main, and the
province's major-bridge record puts the Pattullo about 20 km from the Pattullo. Read the
geometry before deciding what the graphic is.

## Trace a discrepancy; never average it

Two sources disagreeing is a fact about the sources. $80.5 million against $25 million
for a Cleveland Dam project turned out to be a PDF whose name and data columns
desynchronise under extraction: the figures belonged to Burnaby Mountain Tank No. 2 and
No. 3 and Port Moody Main No. 3. Several consecutive rows with data and no label is the
tell.

## One modelling lineage, not three estimates

The DCRRA's casualty and loss figures are NRCan RiskProfiler outputs for
`SIM9p0_CascadiaInterfaceBestFault` (endnotes 21, 22, 25) plus the Conference Board 2016
family restated, and PEIRS's figures were developed by NRCan too (p. 19). Where the site
shows more than one number, it names who produced each, or it manufactures agreement.

## Look for the operational plan, and the assessment registry

PEIRS (crustal M7) and the DCRRA (Cascadia) closed six open questions that
public-information pages never would have. Response plans state assumptions and
numbers; outreach material does not.

Federal and provincial environmental assessment registries are the same kind of seam.
Every filed document is full-text searchable and downloads without headers; Roberts Bank
Terminal 2 alone indexes 4,804, including NRCan's own review of the project's seismic
design. The regulator's critique is stronger evidence than anything the proponent wrote.

## Retrieval routes

- **Browser headers.** `docs.bcuc.com`, `council.vancouver.ca`, `vancouver.ca` (which
  also wants a `Referer`), `biv.com` and the Glacier Media titles, Sphere and YVR all
  serve to `curl` with a desktop User-Agent, an `Accept` header and a `Referer`.
  `egbc.ca` sits behind a Cloudflare challenge and `crtc.gc.ca` refuses both. BCUC's
  Azure WAF keys documents on an opaque `doc_NNNNN` id, cannot be probed without
  tripping, and its exhibit lists are the way back in.
- **CRTC.** `crtc.gc.ca` pages open in a scripted browser once its challenge clears
  (wait a few seconds after navigating). `applications.crtc.gc.ca` serves plain `curl`:
  `DocWebBroker/OpenDocument.aspx?DMID=` for an intervention, and
  `TransferToWeb/<year>/<notice>_<label>.zip` for a bundle such as a proceeding's
  responses to requests for information. The proceedings list is JSON at
  `portail-portal/eng/listes-lists/18/data`, and its `Doc` field links each notice's
  intervention list and zips. Documents inside a zip do not resolve by their DM number,
  so cite the zip and name the file. Outage filings live on the `otf` file
  `c12-201909780`, one page per file number, and need the browser.
- **PDF text without an extractor.** Inside a browser page, load pdf.js from cdnjs
  and call `getTextContent()` per page. It reads files whose fonts defeat the stream
  method below.
- **ICLR.** `iclr.org/resource/...` URLs 404. `https://www.iclr.org/iclr-embed/?file=<base64
  of the numeric id>` returns a shell whose markup holds the real
  `wp-content/uploads/YYYY/MM/` address. Expect it to move again.
- **NRCan after GEOSCAN.** `geoscan.nrcan.gc.ca` no longer resolves. Its successor,
  OSTR/DOST, is DSpace 7.3 with an unauthenticated API: `/discover/search/objects?query=`
  for metadata, `/core/items/{uuid}/bundles?embed=bitstreams` for PDF addresses. GSC Open
  Files carry `10.4095/…` DOIs.
- **Indexes answer where search engines refuse a script.**
  `api.crossref.org/works?query.bibliographic=` resolves a title. Wayback CDX,
  `web.archive.org/cdx/search/cdx?url=<host>&matchType=domain`, lists every path the
  Archive has seen on a host; it times out on large domains, so narrow the host, not the
  filter.
- **No permalinks.** NRCan's early-warning blog addresses posts by `?offset=`, which
  shifts with every new post, so an old citation silently means a different post. Cite a
  dated archive capture with the post's headline and date.
- **Dead hosts.** A reorganised publisher usually leaves the document alive only in a
  web archive. Record the capture beside the live URL.
- **PDFs without an extractor.** No PDF tool is installed, and none is added for a
  one-off read. Inflate each `stream … endstream` with `zlib`, keep the ones containing
  `Tj` or `TJ`, and pull out the parenthesised strings; kerning arrives as single spaces
  and word breaks as runs of two or more. A file whose strings are glyph indices in a
  subset font with no `ToUnicode` map (the PreparedBC apartments guide) cannot be read
  this way. Record it as unread.

## Open data licences are a field on the record

- **City of Vancouver.** `opendata.vancouver.ca/api/explore/v2.1/catalog/datasets/<slug>`
  returns `metas.default.license`. The portal holds 198 datasets, so `?limit=100` twice
  lists them all when a slug is unknown.
- **BC Data Catalogue.** `catalogue.data.gov.bc.ca/api/3/action/package_show?id=<slug>`
  returns `license_title`. Neighbouring records differ (OGL–BC against Access Only), so
  OGL–BC is not a blanket licence for `gov.bc.ca`.
- A licence's prose page may refuse a script while the record states the licence; the
  record is the stronger evidence.
- **Getting the data.** `openmaps.gov.bc.ca/geo/pub/<OBJECT_NAME>/ows` is a WFS returning
  GeoJSON for a bounding box. `bbox` wants lon,lat, and the other order silently returns
  zero features; without `srsName=urn:ogc:def:crs:EPSG::4326` the output is BC Albers. A
  Git LFS file needs `media.githubusercontent.com/media/<owner>/<repo>/<ref>/<path>`; the
  raw URL returns a pointer file that parses as a valid CSV.
- **Vendored data.** A script in `scripts/data/` fetches the original into the
  uncommitted `.data-cache/`, reduces it (Douglas–Peucker in metres, no dependency) and
  commits a small JSON to `src/data/`. Sizes and what each reduction dropped are in
  `../research/maps.md`.
- Establish a layer's licence before its interest. The recognisable safety artwork
  (Earthquake Country Alliance, Great ShakeOut) is licensed to nobody, so the site draws
  from the published prose position instead; see `../licensing.md`.

## A correction written in one place leaves the claim live in another

`open-questions.md` once logged closures at its foot instead of striking them: eleven of
thirty-seven items were answered and still listed, one of them contradicted by its own
answer 170 lines below. Reordering twenty-five research files found fourteen such
contradictions, including the only blocking item described as "requested" when the
request had never been sent.

Strike a closed item and put its answer in the file that owns the subject. Grep the
folder for an old fact before writing the new one. Treat a restructure as an audit, and
where two files describe one status, the file that owns the action wins.
