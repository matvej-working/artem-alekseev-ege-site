import { readFile, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const client = join(root, "dist/client");
let html = await readFile("/tmp/artem-site.html", "utf8");

const mime = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
};

const asDataUri = async (absolutePath) => {
  const data = await readFile(absolutePath);
  return `data:${mime[extname(absolutePath)] ?? "application/octet-stream"};base64,${data.toString("base64")}`;
};

const cssHref = html.match(/<link[^>]+href="([^"]+\.css)"[^>]*>/)?.[1];
if (!cssHref) throw new Error("CSS asset not found");
let css = await readFile(join(client, cssHref), "utf8");

for (const match of [...css.matchAll(/url\(([^)]+)\)/g)]) {
  const raw = match[1].replace(/^['"]|['"]$/g, "");
  if (!raw.startsWith("/")) continue;
  const uri = await asDataUri(join(client, raw));
  css = css.replaceAll(match[0], `url(${uri})`);
}

html = html.replace(/<link[^>]+rel="stylesheet"[^>]*>/g, `<style>${css}</style>`);
html = html.replace(/<link[^>]+rel="preload"[^>]*>/g, "");
html = html.replace(/<script[\s\S]*?<\/script>/g, "");

for (const match of [...html.matchAll(/(?:src|href)="(\/[^"]+\.(?:jpg|jpeg|png|svg))"/g)]) {
  const uri = await asDataUri(join(client, match[1]));
  html = html.replaceAll(`"${match[1]}"`, `"${uri}"`);
}

const encoded = Buffer.from(html).toString("base64");
const server = `import { createServer } from "node:http";\nconst html = Buffer.from("${encoded}", "base64");\ncreateServer((req, res) => {\n  res.writeHead(200, { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=300" });\n  res.end(html);\n}).listen(Number(process.env.PORT || 3000), "0.0.0.0");\n`;

await writeFile(join(root, "deploy/server.mjs"), server);
await writeFile(join(root, "deploy/package.json"), JSON.stringify({
  name: "artem-alekseev-ege-site",
  private: true,
  version: "1.0.0",
  type: "module",
  scripts: { start: "node server.mjs" },
  engines: { node: ">=20" },
}, null, 2) + "\n");

console.log(`Standalone deployment created (${html.length} bytes HTML)`);
