import { build } from "esbuild";
import path from "node:path";

const root = process.cwd();

await build({
  entryPoints: ["preview/entry.tsx"],
  bundle: true,
  minify: true,
  format: "iife",
  target: ["es2020"],
  jsx: "automatic",
  outfile: "preview/dist/app.js",
  define: { "process.env.NODE_ENV": '"production"' },
  alias: {
    "next/link": path.join(root, "preview/shims/next-link.tsx"),
    "next/navigation": path.join(root, "preview/shims/next-navigation.tsx"),
    "@": path.join(root, "src"),
  },
  loader: { ".css": "empty", ".svg": "empty" },
  logLevel: "info",
});
