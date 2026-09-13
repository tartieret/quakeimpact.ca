/**
 * Minimal static server for the exported site in `out/`.
 *
 * Next's static export writes `about/index.html`, and the site's internal
 * links carry trailing slashes, so a `file://` run resolves neither. This
 * serves `out/` the way a host would: a directory request gets its
 * `index.html`, and a missing file gets `404.html`.
 */
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname, resolve } from "node:path";

const ROOT = resolve(process.argv[2] ?? "out");

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
  ".ico": "image/x-icon",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
};

async function resolveFile(pathname) {
  const candidates = [];
  const clean = decodeURIComponent(pathname.split("?")[0]);
  if (clean.endsWith("/")) {
    candidates.push(join(ROOT, clean, "index.html"));
  } else {
    candidates.push(join(ROOT, clean));
    candidates.push(join(ROOT, clean, "index.html"));
    candidates.push(join(ROOT, `${clean}.html`));
  }
  for (const c of candidates) {
    try {
      const s = await stat(c);
      if (s.isFile()) return c;
    } catch {}
  }
  return null;
}

export function startServer(port = 4321, root = ROOT) {
  const server = createServer(async (req, res) => {
    const file = await resolveFile(new URL(req.url, "http://x").pathname);
    // A prefetch the page abandoned leaves a socket that cannot take headers.
    const send = (status, type, body) => {
      if (res.writableEnded || res.headersSent || res.destroyed) return;
      res.writeHead(status, { "content-type": type });
      res.end(body);
    };
    if (!file) {
      let body = "not found";
      try {
        body = await readFile(join(root, "404.html"));
      } catch {}
      send(404, TYPES[".html"], body);
      return;
    }
    const body = await readFile(file);
    send(200, TYPES[extname(file)] ?? "application/octet-stream", body);
  });
  server.on("clientError", (_e, socket) => socket.destroy());
  return new Promise((ok) => server.listen(port, () => ok(server)));
}

if (process.argv[1] && import.meta.url.endsWith("serve.mjs") && process.env.QA_SERVE) {
  const port = Number(process.env.PORT ?? 4321);
  startServer(port).then(() => console.log(`serving ${ROOT} on ${port}`));
}
