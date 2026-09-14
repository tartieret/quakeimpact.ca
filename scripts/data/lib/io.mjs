/** Fetching, caching and writing for the data vendoring scripts. */

import { mkdirSync, writeFileSync, readFileSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

export const REPO_ROOT = fileURLToPath(new URL("../../../", import.meta.url));
export const OUT_DIR = join(REPO_ROOT, "src", "data");
/** Originals land here, outside the repo: they are large and are not vendored. */
export const CACHE_DIR = join(REPO_ROOT, ".data-cache");

/**
 * Download once, reuse afterwards. The cache is deliberately outside `src/` and
 * gitignored: what ships is the reduction, and the script is what makes the
 * reduction reproducible from the original.
 */
export async function download(url, name, { force = false } = {}) {
  mkdirSync(CACHE_DIR, { recursive: true });
  const path = join(CACHE_DIR, name);
  if (existsSync(path) && !force) {
    process.stdout.write(`  cached  ${name} (${kb(statSync(path).size)})\n`);
    return path;
  }
  process.stdout.write(`  GET     ${url}\n`);
  const response = await fetch(url, {
    headers: { "user-agent": "quakeimpact-data-script (static site, one-off)" },
  });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText} for ${url}`);
  }
  const body = Buffer.from(await response.arrayBuffer());
  writeFileSync(path, body);
  process.stdout.write(`  saved   ${name} (${kb(body.length)})\n`);
  return path;
}

export function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

/** Write a vendored file and report its size, which is a design constraint here. */
export function writeVendored(name, value) {
  mkdirSync(OUT_DIR, { recursive: true });
  const path = join(OUT_DIR, name);
  const text = `${JSON.stringify(value)}\n`;
  writeFileSync(path, text);
  process.stdout.write(`  wrote   src/data/${name} (${kb(Buffer.byteLength(text))})\n`);
  return Buffer.byteLength(text);
}

export function kb(bytes) {
  return `${(bytes / 1024).toFixed(1)} kB`;
}

/**
 * Today, as the ISO date recorded against every dataset as "accessed".
 *
 * Local rather than UTC. The province's data is fetched from this side of the
 * country, and `toISOString` would record tomorrow's date for anything pulled
 * after late afternoon Pacific time. An access date that runs ahead of the
 * access is a small thing to get wrong in a provenance record.
 */
export function today() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

/** True when this module is the file node was asked to run. */
export function isMain(metaUrl) {
  return process.argv[1] ? pathToFileURL(process.argv[1]).href === metaUrl : false;
}
