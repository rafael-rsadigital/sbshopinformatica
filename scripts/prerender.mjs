import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const distDir = resolve(root, "dist", "public");
const templatePath = resolve(distDir, "index.html");
const serverEntry = resolve(root, "dist", "server", "entry-server.js");

const template = await readFile(templatePath, "utf8");
const { render, getSeo } = await import(pathToFileURL(serverEntry).href);

const routes = [
  "/",
  "/assistencia-notebooks",
  "/assistencia-impressoras",
  "/contrato-manutencao-empresarial",
  "/regiao-atendimento",
];

function buildHtml(path) {
  const seo = getSeo(path);
  const canonicalUrl = `${seo.canonicalPath === "/" ? "https://sbshopinformatica.vercel.app/" : `https://sbshopinformatica.vercel.app${seo.canonicalPath}`}`;

  let html = template
    .replaceAll("__SEO_TITLE__", seo.title)
    .replaceAll("__SEO_DESCRIPTION__", seo.description)
    .replaceAll("__SEO_CANONICAL__", canonicalUrl)
    .replaceAll("__SEO_OG_TITLE__", seo.title)
    .replaceAll("__SEO_OG_DESCRIPTION__", seo.description)
    .replaceAll("__SEO_OG_URL__", canonicalUrl)
    .replace("<!--ssr-outlet-->", render(path));

  const schemas = seo.schemas
    .map((schema) => `<script type="application/ld+json" data-seo-schema="true">${JSON.stringify(schema)}</script>`)
    .join("\n    ");

  return html.replace("</head>", `    ${schemas}\n  </head>`);
}

for (const route of routes) {
  const html = buildHtml(route);
  const outputPath = route === "/" ? templatePath : resolve(distDir, route.slice(1), "index.html");
  if (route !== "/") {
    await mkdir(resolve(distDir, route.slice(1)), { recursive: true });
  }
  await writeFile(outputPath, html, "utf8");
  console.log(`✓ HTML pré-renderizado: ${route}`);
}
