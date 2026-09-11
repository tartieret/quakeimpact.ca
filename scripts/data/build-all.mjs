/**
 * Rebuild every vendored dataset in `src/data` from its original.
 *
 * This is the only thing in the project that touches the network, and it is not
 * part of `npm run build`. The site is a static export with no runtime network
 * dependency; what ships is the reduction, committed, and this script exists so
 * the reduction can be audited and repeated rather than trusted.
 *
 * Run: npm run data
 * Originals are cached in `.data-cache/`, which is not committed. Delete it to
 * force a fresh download.
 */

import { buildFireProtection } from "./build-fire-protection.mjs";
import { buildShakemaps } from "./build-shakemaps.mjs";
import { buildRegionGeography } from "./build-region-geography.mjs";

await buildFireProtection();
await buildShakemaps();
await buildRegionGeography();

process.stdout.write(
  "\nProvenance, attribution and licence for each of these is in src/data/sources.ts.\n",
);
