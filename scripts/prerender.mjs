import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const distDir = resolve(root, "dist", "public");
const templatePath = resolve(distDir, "index.html");
const serverEntry = resolve(root, "dist", "server", "entry-server.js");

const template = await readFile(templatePath, "utf8");
const { render } = await import(pathToFileURL(serverEntry).href);
const appHtml = render();

if (!template.includes("<!--ssr-outlet-->")) {
  throw new Error("SSR placeholder <!--ssr-outlet--> não encontrado em dist/public/index.html");
}

const html = template.replace("<!--ssr-outlet-->", appHtml);
await writeFile(templatePath, html, "utf8");

console.log("✓ HTML da página inicial pré-renderizado em dist/public/index.html");
