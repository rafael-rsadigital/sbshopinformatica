/* Design: Oficina Azul-Cobalto — cada página sinaliza sua intenção de busca com metadata clara, sem alterar a composição editorial. */
import { useEffect } from "react";
import { site } from "@/lib/seo";

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  schemas: object[];
}

export default function SeoHead({ title, description, canonicalPath, schemas }: SeoHeadProps) {
  useEffect(() => {
    document.title = title;
    document.documentElement.lang = "pt-BR";

    const setMeta = (selector: string, attribute: "name" | "property", value: string) => {
      let tag = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, selector.includes('property=') ? selector.match(/property="([^"]+)"/)?.[1] ?? "" : selector.match(/name="([^"]+)"/)?.[1] ?? "");
        document.head.appendChild(tag);
      }
      tag.content = value;
    };

    setMeta('meta[name="description"]', "name", description);
    setMeta('meta[property="og:title"]', "property", title);
    setMeta('meta[property="og:description"]', "property", description);
    setMeta('meta[property="og:url"]', "property", `${site.url.replace(/\/$/, "")}${canonicalPath === "/" ? "/" : canonicalPath}`);

    const canonicalUrl = `${site.url.replace(/\/$/, "")}${canonicalPath === "/" ? "/" : canonicalPath}`;
    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    document.head.querySelectorAll('script[data-seo-schema="true"]').forEach((node) => node.remove());
    schemas.forEach((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seoSchema = "true";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [title, description, canonicalPath, schemas]);

  return null;
}
