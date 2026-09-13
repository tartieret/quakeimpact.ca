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
    id: "cov-fire-halls",
    title: "Fire halls",
    publisher: "City of Vancouver",
    licence: "Open Government Licence – Vancouver",
    licenceUrl: "https://opendata.vancouver.ca/pages/licence/",
    attribution: OGL_VANCOUVER_ATTRIBUTION,
    sourceUrl: "https://opendata.vancouver.ca/explore/dataset/fire-halls/information/",
    downloadUrl:
      "https://opendata.vancouver.ca/api/explore/v2.1/catalog/datasets/fire-halls/exports/geojson",
    accessed: "2026-09-12",
    script: "scripts/data/build-fire-protection.mjs",
    files: ["fire-halls.json"],
    disclaimers: [
      "Locations are approximate.",
      "The layer holds twenty halls, which is the City's nineteen plus one in the " +
        "University Endowment Lands serving the UEL and the University of British " +
        "Columbia. It says nothing about the condition or seismic standard of any " +
        "of them: it carries a name, an address and a point.",
    ],
    licenceNote:
      "Licence stated on the record, as for the mains layer, and returned by the " +
      "catalogue API as a field of this dataset. The same prohibition applies: no " +
      "use may suggest official status or City endorsement, which is why the page " +
      "drawn from it says in the legend that the classes are the site's reading of " +
      "City documents and not a City rating.",
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
    files: [
      "region-water.json",
      "region-coast.json",
      "vancouver-water.json",
      "dams-coast.json",
    ],
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
    files: [
      "region-water.json",
      "region-coast.json",
      "vancouver-water.json",
      "dams-coast.json",
    ],
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
      "Provincial highway structures only, and nine of the nineteen crossings drawn. " +
        "The City of Vancouver's own bridges and the crossings nobody publishes an " +
        "open layer for come from the two records below, and the Pattullo record in " +
        "this layer is misplaced by about 23 km and is not used.",
    ],
    licenceNote: "Confirmed on the catalogue record itself.",
  },
  {
    id: "bc-dams-register",
    title: "BC Dams",
    publisher:
      "Ministry of Water, Land and Resource Stewardship, Province of British Columbia",
    licence: "Open Government Licence – British Columbia",
    licenceUrl: "https://www2.gov.bc.ca/gov/content?id=A519A56BC2BF44E4A008B33FCF527F61",
    attribution: OGL_BC_ATTRIBUTION,
    sourceUrl: "https://catalogue.data.gov.bc.ca/dataset/bc-dams",
    downloadUrl:
      "https://openmaps.gov.bc.ca/geo/pub/WHSE_WATER_MANAGEMENT.WRIS_DAMS_PUBLIC_SVW/ows",
    accessed: "2026-09-12",
    script: "scripts/data/build-dams.mjs",
    files: ["region-dams.json"],
    disclaimers: [
      "The register records what a dam is and what a failure would reach. It says " +
        "nothing about earthquakes: it carries no seismic rating, no assessment date " +
        "and no upgrade programme, and its risk level is the regulator's supervisory " +
        "grading rather than a statement about shaking. Nothing drawn from it may be " +
        "presented as a seismic finding.",
      "Failure consequence is a classification of what is downstream, not a " +
        "prediction that a dam will fail. Extreme is the class assigned where a " +
        "failure would be expected to cause loss of life, and most of the region's " +
        "large dams carry it.",
    ],
    licenceNote:
      "Confirmed on the catalogue record itself. The catalogue page assembles itself " +
      "in the browser and states the licence in the record rather than in the served " +
      "data; the WFS endpoint carries no licence of its own, so the record is what " +
      "the licence rests on. The layer also names the dam safety officer assigned to " +
      "each dam, and one owner string carries a named individual and their job " +
      "title. Neither is vendored.",
  },
  {
    id: "cov-public-streets",
    title: "Public streets",
    publisher: "City of Vancouver",
    licence: "Open Government Licence – Vancouver",
    licenceUrl: "https://opendata.vancouver.ca/pages/licence/",
    attribution: OGL_VANCOUVER_ATTRIBUTION,
    sourceUrl:
      "https://opendata.vancouver.ca/explore/dataset/public-streets/information/",
    downloadUrl:
      "https://opendata.vancouver.ca/api/explore/v2.1/catalog/datasets/public-streets/exports/geojson",
    accessed: "2026-09-12",
    script: "scripts/data/build-region-geography.mjs",
    files: ["region-crossings.json"],
    disclaimers: [
      "Street centrelines rather than a structures inventory. Only the three " +
        "crossings the City names as bridges in its own block names are taken from " +
        "it: the Burrard, Granville and Cambie.",
    ],
    licenceNote:
      "The same portal and the same licence as the fire protection mains, stated on " +
      "the dataset record itself rather than inferred from the portal.",
  },
  {
    id: "wikidata",
    title: "Coordinate location (P625) for seven crossings",
    publisher: "Wikidata, Wikimedia Foundation",
    licence: "Creative Commons CC0 1.0 Universal",
    licenceUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    /**
     * CC0 waives the attribution requirement, so nothing here is owed. It is
     * recorded anyway, because a reader checking where a position came from is
     * the reason this file exists, and a source that asks for nothing is still
     * a source.
     */
    attribution: "Crossing positions from Wikidata, dedicated to the public domain under CC0 1.0.",
    sourceUrl: "https://www.wikidata.org/wiki/Wikidata:Copyright",
    downloadUrl: "https://www.wikidata.org/w/api.php?action=wbgetentities",
    accessed: "2026-09-12",
    script: "scripts/data/build-region-geography.mjs",
    files: ["region-crossings.json"],
    disclaimers: [
      "Seven crossings neither government layer holds: the Knight Street, Arthur " +
        "Laing, Pattullo, Golden Ears, Dinsmore, No. 2 Road and North Arm bridges. " +
        "Wikidata gives a coordinate rather than a geometry, so these carry no span.",
    ],
    licenceNote:
      "Stated by the API's own rightsinfo: all structured data in the main and " +
      "property namespaces is CC0, and a coordinate claim is structured data in the " +
      "main namespace. Checked 12 September 2026. It is an openly editable source, " +
      "so each position was checked against the provincial layer: the Pattullo point " +
      "falls 31 m from the province's own correctly placed Pattullo geometry, the " +
      "record its layer has flagged for deletion, while the live provincial record " +
      "sits 23 km away.",
  },
];

export function dataSource(id: string): DatasetSource {
  const found = dataSources.find((source) => source.id === id);
  if (!found) throw new Error(`No data source recorded for "${id}"`);
  return found;
}
