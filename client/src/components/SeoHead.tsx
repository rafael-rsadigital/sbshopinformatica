/* Design: Oficina Azul-Cobalto — cada página sinaliza sua intenção de busca com metadata clara, sem alterar a composição editorial. */
import { useEffect } from "react";

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

    const setMeta = (name: string, content: string) => {
      let tag = document.head.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.name = name;
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    setMeta("description", description);

    const canonicalUrl = `${window.location.origin}${canonicalPath}`;
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
