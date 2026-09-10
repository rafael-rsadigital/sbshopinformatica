/* Design: Oficina Azul-Cobalto — páginas de serviço com leitura escaneável, prova factual local e CTA humano para orçamento. */
import { ArrowLeft, ArrowUpRight, Building2, Check, ChevronRight, Clock3, Laptop, MapPin, MessageCircle, Phone, Printer } from "lucide-react";
import SeoHead from "@/components/SeoHead";
import { baseLocalBusinessSchema, breadcrumbSchema, faqSchema, site } from "@/lib/seo";

export interface ServicePageConfig {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  accent: "cobalt" | "orange";
  serviceType: string;
  bullets: string[];
  sections: Array<{ title: string; text: string }>;
  faq: Array<{ question: string; answer: string }>;
}

function waFor(subject: string) {
  return `${site.whatsapp}&text=${encodeURIComponent(`Olá, vim pelo site e quero falar sobre ${subject}.`)}`;
}

export default function ServicePage({ config }: { config: ServicePageConfig }) {
  const canonicalPath = `/${config.slug}`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: config.title,
    serviceType: config.serviceType,
    description: config.intro,
    provider: baseLocalBusinessSchema,
    areaServed: baseLocalBusinessSchema.areaServed,
    url: canonicalPath,
  };
  const ServiceIcon = config.slug === "assistencia-impressoras" ? Printer : config.slug === "assistencia-notebooks" ? Laptop : Building2;
  const visualNote = config.slug === "assistencia-impressoras" ? "ALIMENTAÇÃO · TINTA · ROTINA" : config.slug === "assistencia-notebooks" ? "SSD · MEMÓRIA · TEMPERATURA" : "PREVENÇÃO · PRIORIDADE · CONTINUIDADE";
  const schemas = [
    baseLocalBusinessSchema,
    serviceSchema,
    faqSchema(config.faq),
    breadcrumbSchema([
      { name: "Início", url: "/" },
      { name: config.title, url: canonicalPath },
    ]),
  ];

  return (
    <div className="site-shell service-page">
      <SeoHead
        title={`${config.title} | SB Shop Informática em Arujá`}
        description={config.intro}
        canonicalPath={canonicalPath}
        schemas={schemas}
      />
      <div className="topline"><div className="container topline-inner"><span>ASSISTÊNCIA TÉCNICA DE INFORMÁTICA · ARUJÁ/SP</span><a href={site.phone ? `tel:${site.phone}` : "#contato"}>{site.phoneDisplay}</a></div></div>
      <header className="site-header"><div className="container header-inner">
        <a className="brand" href="/" aria-label="SB Shop Informática — início"><img src={site.logo} alt="" className="brand-mark" /><span className="brand-wordmark"><strong>SB SHOP</strong><small>INFORMÁTICA</small></span></a>
        <nav className="main-nav service-nav" aria-label="Navegação principal"><a href="/#servicos">Serviços</a><a href="/contrato-manutencao-empresarial">Empresas</a><a href="/#contato">Contato</a><a className="nav-cta" href={waFor(config.serviceType)}>Pedir orçamento <ArrowUpRight size={16} /></a></nav>
      </div></header>

      <main>
        <section className={`service-hero service-hero-cobalt service-hero-${config.slug}`}>
          <div className="container service-hero-inner">
            <a className="back-link" href="/"><ArrowLeft size={15} /> Voltar para a página inicial</a>
            <span className="eyebrow"><span className="eyebrow-dot" /> {config.eyebrow}</span>
            <h1>{config.title}</h1>
            <p className="service-intro">{config.intro}</p>
            <div className="service-hero-detail"><div className="service-hero-icon"><ServiceIcon size={30} strokeWidth={1.5} /></div><div><span>PLACA DE ATENDIMENTO</span><strong>{visualNote}</strong></div><em>SB / LOCAL</em></div>
            <a className="button button-primary" href={waFor(config.serviceType)}><MessageCircle size={19} /> {config.slug === "contrato-manutencao-empresarial" ? "Conversar sobre a empresa" : `Falar sobre ${config.slug === "assistencia-impressoras" ? "minha impressora" : "meu notebook"}`}</a>
          </div>
        </section>

        <section className="service-body"><div className="container service-content-grid">
          <div><span className="section-label">COMO PODEMOS AJUDAR</span><h2>Diagnóstico claro para uma decisão mais tranquila.</h2><p className="service-body-lead">O primeiro passo é entender o sintoma, o uso e o que faz sentido para você. O orçamento é apresentado antes da execução do serviço.</p><div className="service-bullets">{config.bullets.map((bullet) => <span key={bullet}><Check size={17} /> {bullet}</span>)}</div></div>
          <aside className="service-aside"><span className="aside-index">SB / 0{config.slug === "assistencia-impressoras" ? "2" : config.slug === "assistencia-notebooks" ? "1" : "3"}</span><strong>Atendimento local</strong><p>Rua Zeferino Barbosa de Souza, 130<br />Jardim Renata · Arujá — SP</p><div className="service-proof"><span><strong>4,7</strong> nota no Google</span><span><strong>110</strong> avaliações recebidas</span><span><strong>Antes</strong> orçamento explicado</span></div><a href={site.mapsUrl} target="_blank" rel="noreferrer">Ver no Google Maps <ArrowUpRight size={15} /></a></aside>
        </div></section>

        <section className="service-detail-section"><div className="container"><span className="section-label">O QUE VOCÊ PODE ESPERAR</span><div className="service-detail-grid">{config.sections.map((section, index) => <article key={section.title}><span>0{index + 1}</span><h2>{section.title}</h2><p>{section.text}</p></article>)}</div></div></section>

        <section className="faq-section"><div className="container faq-grid"><div><span className="section-label">DÚVIDAS FREQUENTES</span><h2>Antes de trazer, você pode perguntar.</h2></div><div className="faq-list">{config.faq.map((item) => <details key={item.question}><summary>{item.question}<ChevronRight size={17} /></summary><p>{item.answer}</p></details>)}</div></div></section>

        <section className="contact-section service-contact"><div className="container service-contact-grid"><div><span className="section-label light-label">FALE COM A SB SHOP</span><h2>Vamos entender o que o seu equipamento precisa.</h2><div className="contact-actions"><a className="button button-orange" href={waFor(config.serviceType)}><MessageCircle size={19} /> Pedir orçamento</a><a className="contact-phone" href={`tel:${site.phone}`}><Phone size={17} /> {site.phoneDisplay}</a></div></div><div className="service-contact-data"><span><MapPin size={16} /> {site.address.street} · {site.address.neighborhood} · {site.address.city}/{site.address.region}</span><span><Clock3 size={16} /> {site.hours}</span><a href={site.mapsUrl} target="_blank" rel="noreferrer">Abrir rota no Google Maps <ArrowUpRight size={15} /></a></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-inner footer-inner-expanded"><div className="brand footer-brand"><img src={site.logo} alt="" className="brand-mark" /><span className="brand-wordmark"><strong>SB SHOP</strong><small>INFORMÁTICA</small></span></div><address className="footer-nap"><strong>{site.legalName}</strong><span>{site.address.street} · {site.address.neighborhood} · {site.address.city}/{site.address.region}</span><a href={`tel:${site.phone}`}>{site.phoneDisplay}</a></address><div className="footer-meta"><span><Clock3 size={14} /> {site.hours}</span><a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a></div></div></footer>
      <a className="mobile-cta" href={waFor(config.serviceType)}><MessageCircle size={18} /> Pedir orçamento</a>
    </div>
  );
}
