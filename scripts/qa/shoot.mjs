/**
 * Screenshots, for the parts of a QA pass that have to be looked at.
 *
 *   ROUTES=/after/water/,/method/ node scripts/qa/shoot.mjs
 *   MODE=figures node scripts/qa/shoot.mjs     # one image per figure
 *
 * Writes into scripts/qa/shots/. Git Bash rewrites a leading slash in an
 * argument into a Windows path, which is why routes arrive by environment
 * variable rather than on the command line.
 */
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { startServer } from "./serve.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const SHOTS = join(HERE, "shots");
const PORT = 4326;

const ROUTES = (process.env.ROUTES || "/").split(",").filter(Boolean);
const MODE = process.env.MODE || "page";
const WIDTHS = (process.env.WIDTHS || "390,1280").split(",").map(Number);
const THEMES = (process.env.THEMES || "light,dark").split(",");

await mkdir(SHOTS, { recursive: true });
const server = await startServer(PORT, "out");
const browser = await chromium.launch();

const slug = (r) => r.replace(/^\/|\/$/g, "").replace(/\//g, "-") || "home";

for (const theme of THEMES) {
  for (const width of WIDTHS) {
    const ctx = await browser.newContext({
      viewport: { width, height: 900 },
      colorScheme: theme,
      deviceScaleFactor: 2,
    });
    const page = await ctx.newPage();
    for (const route of ROUTES) {
      await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: "networkidle" });
      await page.waitForTimeout(250);
      if (MODE === "figures") {
        const figs = page.locator('[role="img"]');
        const n = await figs.count();
        for (let i = 0; i < n; i++) {
          const path = join(SHOTS, `${slug(route)}-fig${i + 1}-${theme}-${width}.png`);
          await figs.nth(i).screenshot({ path });
          console.log(path);
        }
      } else {
        const path = join(SHOTS, `${slug(route)}-${theme}-${width}.png`);
        await page.screenshot({ path, fullPage: process.env.FULL === "1" });
        console.log(path);
      }
    }
    await ctx.close();
  }
}

await browser.close();
server.close();
