/**
 * Provenance for every vendored dataset in this folder.
 *
 * Attribution is a condition of the licences the site relies on, not a
 * courtesy. Each entry here carries the exact attribution string the provider
 * asks for, the licence and its URL, where the file came from, when it was
 * taken, and anything the source requires to be said alongside it. `/licences/`
 * is built from this, and any figure drawn from a dataset should credit it from
 * the same record rather than retyping the string.
 *
 * Files are produced from the originals by the scripts named in `script`. The
 * originals are not committed: they run to tens of megabytes. Re-running the
 * script refetches them and rewrites the vendored file.
 */

export interface DatasetSource {
  /** Key used by the vendored JSON's `source` field. */
  id: string;
  /** What the dataset is, in the site's own words. */
  title: string;
  /** The publishing body. */
  publisher: string;
  /** Licence name, as stated on the record itself. */
  licence: string;
  /** Where that licence text lives. */
  licenceUrl: string;
  /** Exactly what must appear as attribution. */
  attribution: string;
  /** Where the record lives. */
  sourceUrl: string;
  /** Where the file was actually downloaded from, if not the record page. */
  downloadUrl: string;
  /** ISO date the file in this folder was taken. */
  accessed: string;
  /** The script that produced the vendored file from the original. */
  script: string;
  /** Files in this folder derived from it. */
  files: string[];
  /** Anything the source requires to be stated wherever its data appears. */
  disclaimers?: string[];
  /** What the project established about the licence, and where it stopped. */
  licenceNote: string;
}

const OGL_CANADA_ATTRIBUTION =
  "Contains information licensed under the Open Government Licence – Canada. " +
  "Hobbs, T.E., Journeay, J.M., Rotheram, D., 2021. An Earthquake Scenario " +
  "Catalogue for Canada: A Guide to Using Scenario Hazard and Risk Results; " +
  "Geological Survey of Canada, Open File 8806, 22 p.";

const OGL_BC_ATTRIBUTION =
  "Contains information licensed under the Open Government Licence – British Columbia.";

const OGL_VANCOUVER_ATTRIBUTION =
  "Contains information licensed under the Open Government Licence – Vancouver.";

export const dataSources: DatasetSource[] = [
  {
    id: "cov-dfps-mains",
    title: "Dedicated fire protection systems (DFPS) water mains",
    publisher: "City of Vancouver",
    licence: "Open Government Licence – Vancouver",
    licenceUrl: "https://opendata.vancouver.ca/pages/licence/",
    attribution: OGL_VANCOUVER_ATTRIBUTION,
    sourceUrl:
      "https://opendata.vancouver.ca/explore/dataset/dedicated-fire-protection-systems-dfps-water-mains/information/",
    downloadUrl:
      "https://opendata.vancouver.ca/api/explore/v2.1/catalog/datasets/dedicated-fire-protection-systems-dfps-water-mains/exports/geojson",
    accessed: "2026-09-11",
    script: "scripts/data/build-fire-protection.mjs",
    files: ["fire-protection-mains.json"],
    licenceNote:
      "The licence is stated on the dataset record itself, not inferred from the " +
      "portal: the catalogue API returns the licence and its URL as fields of this " +
      "dataset. The licence forbids any use suggesting official status or City " +
      "endorsement, so a page drawn from it must read as independent.",
  },
  {
    id: "cov-city-boundary",
    title: "City boundary",
    publisher: "City of Vancouver",
    licence: "Open Government Licence – Vancouver",
    licenceUrl: "https://opendata.vancouver.ca/pages/licence/",
    attribution: OGL_VANCOUVER_ATTRIBUTION,
    sourceUrl: "https://opendata.vancouver.ca/explore/dataset/city-boundary/information/",
    downloadUrl:
      "https://opendata.vancouver.ca/api/explore/v2.1/catalog/datasets/city-boundary/exports/geojson",
    accessed: "2026-09-11",
    script: "scripts/data/build-fire-protection.mjs",
    files: ["vancouver-boundary.json"],
    licenceNote: "Licence stated on the record, as for the mains layer.",
  },
  {
    id: "gsc-earthquake-scenario-catalogue",
    title:
      "National Earthquake Scenario Catalogue: scenario ShakeMaps for " +
      "SIM9p0_CascadiaInterfaceBestFault and ACM7p0_GeorgiaStraitFault",
    publisher: "Geological Survey of Canada, Natural Resources Canada",
    licence: "Open Government Licence – Canada",
    licenceUrl: "https://open.canada.ca/en/open-government-licence-canada",
    attribution: OGL_CANADA_ATTRIBUTION,
    sourceUrl: "https://github.com/OpenDRR/earthquake-scenarios",
    downloadUrl:
      "https://media.githubusercontent.com/media/OpenDRR/earthquake-scenarios/master/FINISHED/",
    accessed: "2026-09-11",
    script: "scripts/data/build-shakemaps.mjs",
    files: ["shakemap-cascadia-m9.json", "shakemap-georgia-strait-m7.json"],
    disclaimers: [
      "The information is provided at approximately the scale of Census dissemination areas.",
      "The modelling covers damage to buildings and their inhabitants from earthquake " +
        "shaking. It excludes damage to critical infrastructure and vehicles, and excludes " +
        "losses from aftershocks, liquefaction, landslides and fire following.",
      "The scenarios are hypothetical. They represent credible events, not forecasts, and " +
        "results should not be used for building- or property-specific applications.",
    ],
    licenceNote:
      "Open Government Licence – Canada is named in the repository's own terms of use " +
      "(“As stated in the Open Government Licence – Canada, the information is provided " +
      "with No Warranty”), and the catalogue is published under it. It is not repeated as " +
      "a licence file on the release assets themselves, so the per-asset confirmation " +
      "docs/licensing.md asks for rests on the repository statement rather than on a " +
      "notice attached to each file. Recorded as such rather than claimed as stronger.",
  },
  {
    id: "bc-fwa-coastlines",
    title: "Freshwater Atlas – Coastlines",
    publisher: "GeoBC, Province of British Columbia",
    licence: "Open Government Licence – British Columbia",
    licenceUrl: "https://www2.gov.bc.ca/gov/content?id=A519A56BC2BF44E4A008B33FCF527F61",
    attribution: OGL_BC_ATTRIBUTION,
    sourceUrl: "https://catalogue.data.gov.bc.ca/dataset/freshwater-atlas-coastlines",
    downloadUrl: "https://openmaps.gov.bc.ca/geo/pub/WHSE_BASEMAPPING.FWA_COASTLINES_SP/ows",
    accessed: "2026-09-11",
    script: "scripts/data/build-region-geography.mjs",
    files: ["region-water.json"],
    licenceNote:
      "Confirmed on the catalogue record itself, which is the test docs/licensing.md " +
      "sets: OGL–BC is not a blanket licence for gov.bc.ca and applies only where a " +
      "record states it. This one states it.",
  },
  {
    id: "bc-fwa-rivers",
    title: "Freshwater Atlas – Rivers",
    publisher: "GeoBC, Province of British Columbia",
    licence: "Open Government Licence – British Columbia",
    licenceUrl: "https://www2.gov.bc.ca/gov/content?id=A519A56BC2BF44E4A008B33FCF527F61",
    attribution: OGL_BC_ATTRIBUTION,
    sourceUrl: "https://catalogue.data.gov.bc.ca/dataset/freshwater-atlas-rivers",
    downloadUrl: "https://openmaps.gov.bc.ca/geo/pub/WHSE_BASEMAPPING.FWA_RIVERS_POLY/ows",
    accessed: "2026-09-11",
    script: "scripts/data/build-region-geography.mjs",
    files: ["region-water.json"],
    licenceNote: "Confirmed on the catalogue record itself.",
  },
  {
    id: "bc-mot-road-structures",
    title: "Ministry of Transportation (MOT) Road Structures",
    publisher: "Ministry of Transportation and Transit, Province of British Columbia",
    licence: "Open Government Licence – British Columbia",
    licenceUrl: "https://www2.gov.bc.ca/gov/content?id=A519A56BC2BF44E4A008B33FCF527F61",
    attribution: OGL_BC_ATTRIBUTION,
    sourceUrl:
      "https://catalogue.data.gov.bc.ca/dataset/ministry-of-transportation-mot-road-structures",
    downloadUrl:
      "https://openmaps.gov.bc.ca/geo/pub/WHSE_IMAGERY_AND_BASE_MAPS.MOT_ROAD_STRUCTURE_SP/ows",
    accessed: "2026-09-11",
    script: "scripts/data/build-region-geography.mjs",
    files: ["region-crossings.json"],
    disclaimers: [
      "Provincial highway structures only. City-owned and TransLink crossings are not in " +
        "this layer, and the Pattullo Bridge record in it is misplaced. It is not a " +
        "complete set of the region's crossings and must not be drawn as one.",
    ],
    licenceNote: "Confirmed on the catalogue record itself.",
  },
];

export function dataSource(id: string): DatasetSource {
  const found = dataSources.find((source) => source.id === id);
  if (!found) throw new Error(`No data source recorded for "${id}"`);
  return found;
}
