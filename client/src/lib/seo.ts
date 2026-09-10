/* Design: Oficina Azul-Cobalto — conteúdo factual, hierarquia editorial e sinais locais consistentes em todas as páginas. */

export const site = {
  name: "SB Shop Informática",
  legalName: "Assistência Técnica S.B Shop Informática",
  description:
    "Assistência técnica de informática em Arujá para notebooks, computadores e impressoras.",
  url: "https://sbshopinformatica.vercel.app/",
  phone: "+55 11 3754-0839",
  phoneDisplay: "(11) 3754-0839",
  whatsapp: "https://wa.me/551137540839?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20pedir%20um%20or%C3%A7amento.",
  address: {
    street: "Rua Zeferino Barbosa de Souza, 130",
    neighborhood: "Jardim Renata",
    city: "Arujá",
    region: "SP",
    country: "BR",
  },
  hours: "Segunda a sexta, das 08:30 às 17:30",
  mapsUrl: "https://maps.app.goo.gl/K3fwKVh8CWYQPmm2A",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3213.6401087335853!2d-46.3196292!3d-23.3942493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce877e661519e3%3A0xaf7867d84b130632!2sAssist%C3%AAncia%20T%C3%A9cnica%20S.B%20Shop%20Inform%C3%A1tica!5e1!3m2!1spt-BR!2sbr!4v1789060459185!5m2!1spt-BR!2sbr",
  instagram: "https://www.instagram.com/sb_shopinformatica/",
  logo: "/images/logotipo-fundo-transparente.png",
};

export const baseLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ComputerStore",
  "@id": "https://sbshopinformatica.vercel.app/#business",
  name: site.name,
  alternateName: site.legalName,
  description: site.description,
  image: "https://sbshopinformatica.vercel.app/images/logotipo-fundo-transparente.png",
  logo: "https://sbshopinformatica.vercel.app/images/logotipo-fundo-transparente.png",
  telephone: site.phone,
  url: site.url,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.3942493,
    longitude: -46.3196292,
  },
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:30",
    closes: "17:30",
  }],
  areaServed: ["Arujá", "Itaquaquecetuba", "Mogi das Cruzes", "Santa Isabel", "Guarulhos"],
  sameAs: [site.instagram, site.mapsUrl],
};

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${site.url.replace(/\/$/, "")}${item.url}`,
    })),
  };
}
