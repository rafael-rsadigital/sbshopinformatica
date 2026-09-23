/* Design: Oficina Azul-Cobalto — o HTML inicial precisa nascer completo no servidor para SEO e manter a mesma árvore no cliente. */
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";
import { baseLocalBusinessSchema, breadcrumbSchema, faqSchema, site } from "./lib/seo";
import { serviceConfigs } from "./pages/serviceConfigs";

const homeFaq = [
  { question: "A SB Shop atende quais equipamentos?", answer: "A SB Shop Informática atende notebooks, computadores e impressoras em Arujá e também clientes de cidades da região, como Guarulhos, Itaquaquecetuba, Mogi das Cruzes e Santa Isabel." },
  { question: "A SB Shop atende cidades além de Arujá?", answer: "Sim. A empresa está localizada em Arujá e atende também clientes de Guarulhos, Itaquaquecetuba, Mogi das Cruzes e Santa Isabel, conforme o equipamento e o serviço necessário." },
  { question: "Como pedir um orçamento?", answer: "Você pode falar pelo WhatsApp, informar a cidade, o equipamento e explicar o sintoma para receber orientação sobre o próximo passo." },
  { question: "Onde fica a assistência técnica?", answer: "A SB Shop Informática fica na Rua Zeferino Barbosa de Souza, 130, Jardim Renata, em Arujá/SP." },
];

const regionalFaq = [
  { question: "A SB Shop atende somente Arujá?", answer: "Não. A SB Shop Informática está em Arujá e também atende clientes de Guarulhos, Itaquaquecetuba, Mogi das Cruzes e Santa Isabel, conforme o serviço e a necessidade de atendimento." },
  { question: "Quais equipamentos podem ser atendidos?", answer: "A SB Shop trabalha principalmente com notebooks, computadores e impressoras. Para confirmar o atendimento, envie a marca, o modelo e uma descrição do problema pelo WhatsApp." },
  { question: "Como funciona o atendimento para cidades vizinhas?", answer: "Entre em contato antes de levar ou enviar o equipamento. A equipe orienta sobre o melhor encaminhamento de acordo com a cidade, o equipamento e o tipo de serviço." },
  { question: "Onde fica a SB Shop Informática?", answer: "A assistência fica na Rua Zeferino Barbosa de Souza, 130, Jardim Renata, em Arujá/SP." },
];

const regionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${site.url.replace(/\/$/, "")}/regiao-atendimento#service`,
  name: "Assistência técnica de informática em Arujá e região",
  serviceType: "Assistência técnica e manutenção de informática",
  description: "Atendimento de informática para notebooks, computadores e impressoras em Arujá e cidades da região, incluindo Guarulhos, Itaquaquecetuba, Mogi das Cruzes e Santa Isabel.",
  provider: { "@id": `${site.url.replace(/\/$/, "")}/#business` },
  areaServed: baseLocalBusinessSchema.areaServed,
  url: `${site.url.replace(/\/$/, "")}/regiao-atendimento`,
};

function serviceSchema(slug: string) {
  const config = serviceConfigs[slug];
  const canonicalUrl = `${site.url.replace(/\/$/, "")}/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonicalUrl}#service`,
    name: config.title,
    serviceType: config.serviceType,
    description: config.intro,
    provider: { "@id": `${site.url.replace(/\/$/, "")}/#business` },
    areaServed: baseLocalBusinessSchema.areaServed,
    url: canonicalUrl,
  };
}

export function getSeo(path: string) {
  if (path === "/") {
    const title = "SB Shop Informática | Assistência técnica em Arujá e região";
    const description = "Assistência técnica de notebooks, computadores e impressoras em Arujá e região. Atendimento para Arujá, Guarulhos, Itaquaquecetuba, Mogi das Cruzes e Santa Isabel.";
    return {
      title,
      description,
      canonicalPath: "/",
      schemas: [
        baseLocalBusinessSchema,
        faqSchema(homeFaq),
        breadcrumbSchema([{ name: "Início", url: "/" }]),
      ],
    };
  }

  if (path === "/regiao-atendimento") {
    const canonicalPath = "/regiao-atendimento";
    return {
      title: "Assistência técnica em Arujá e região | SB Shop Informática",
      description: "Assistência técnica de notebooks, computadores e impressoras em Arujá, Guarulhos, Itaquaquecetuba, Mogi das Cruzes e Santa Isabel.",
      canonicalPath,
      schemas: [
        baseLocalBusinessSchema,
        regionalServiceSchema,
        faqSchema(regionalFaq),
        breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Região de atendimento", url: canonicalPath },
        ]),
      ],
    };
  }

  if (serviceConfigs[path.slice(1)]) {
    const slug = path.slice(1);
    const config = serviceConfigs[slug];
    const canonicalPath = `/${slug}`;
    return {
      title: `${config.title} | SB Shop Informática em Arujá`,
      description: config.intro,
      canonicalPath,
      schemas: [
        baseLocalBusinessSchema,
        serviceSchema(slug),
        faqSchema(config.faq),
        breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: config.title, url: canonicalPath },
        ]),
      ],
    };
  }

  return {
    title: "SB Shop Informática | Assistência técnica em Arujá",
    description: site.description,
    canonicalPath: "/",
    schemas: [baseLocalBusinessSchema, breadcrumbSchema([{ name: "Início", url: "/" }])],
  };
}

export function render(path = "/") {
  return renderToString(
    <Router ssrPath={path}>
      <App />
    </Router>,
  );
}
