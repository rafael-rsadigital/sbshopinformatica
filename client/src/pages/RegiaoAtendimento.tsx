import { ArrowLeft, ArrowUpRight, Check, Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import SeoHead from "@/components/SeoHead";
import { baseLocalBusinessSchema, breadcrumbSchema, faqSchema, site } from "@/lib/seo";

const cities = [
  { name: "Arujá", text: "É onde fica a SB Shop Informática e nossa principal área de atendimento presencial." },
  { name: "Guarulhos", text: "Atendimento para clientes que precisam de suporte e manutenção de notebooks, computadores e impressoras na região." },
  { name: "Itaquaquecetuba", text: "Atendimento para equipamentos de informática de uso pessoal e empresarial, conforme o serviço necessário." },
  { name: "Mogi das Cruzes", text: "Clientes da região podem consultar a SB Shop sobre assistência para notebooks, computadores e impressoras." },
  { name: "Santa Isabel", text: "Também atendemos clientes de Santa Isabel, com orientação prévia sobre o equipamento e o serviço." },
];

const faq = [
  { question: "A SB Shop atende somente Arujá?", answer: "Não. A SB Shop Informática está em Arujá e também atende clientes de Guarulhos, Itaquaquecetuba, Mogi das Cruzes e Santa Isabel, conforme o serviço e a necessidade de atendimento." },
  { question: "Quais equipamentos podem ser atendidos?", answer: "A SB Shop trabalha principalmente com notebooks, computadores e impressoras. Para confirmar o atendimento, envie a marca, o modelo e uma descrição do problema pelo WhatsApp." },
  { question: "Como funciona o atendimento para cidades vizinhas?", answer: "Entre em contato antes de levar ou enviar o equipamento. A equipe orienta sobre o melhor encaminhamento de acordo com a cidade, o equipamento e o tipo de serviço." },
  { question: "Onde fica a SB Shop Informática?", answer: "A assistência fica na Rua Zeferino Barbosa de Souza, 130, Jardim Renata, em Arujá/SP." },
];

export default function RegiaoAtendimento() {
  const canonicalPath = "/regiao-atendimento";
  const canonicalUrl = `${site.url.replace(/\/$/, "")}${canonicalPath}`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonicalUrl}#service`,
    name: "Assistência técnica de informática em Arujá e região",
    serviceType: "Assistência técnica e manutenção de informática",
    description: "Atendimento de informática para notebooks, computadores e impressoras em Arujá e cidades da região, incluindo Guarulhos, Itaquaquecetuba, Mogi das Cruzes e Santa Isabel.",
    provider: { "@id": "https://sbshopinformatica.vercel.app/#business" },
    areaServed: baseLocalBusinessSchema.areaServed,
    url: canonicalUrl,
  };
  const schemas = [
    baseLocalBusinessSchema,
    serviceSchema,
    faqSchema(faq),
    breadcrumbSchema([
      { name: "Início", url: "/" },
      { name: "Região de atendimento", url: canonicalPath },
    ]),
  ];

  return (
    <div className="site-shell service-page">
      <SeoHead
        title="Assistência técnica em Arujá e região | SB Shop Informática"
        description="Assistência técnica de notebooks, computadores e impressoras em Arujá, Guarulhos, Itaquaquecetuba, Mogi das Cruzes e Santa Isabel."
        canonicalPath={canonicalPath}
        schemas={schemas}
      />

      <div className="topline"><div className="container topline-inner"><span>ASSISTÊNCIA TÉCNICA DE INFORMÁTICA · ARUJÁ E REGIÃO</span><a href={`tel:${site.phone}`}>{site.phoneDisplay}</a></div></div>
      <header className="site-header"><div className="container header-inner">
        <a className="brand" href="/" aria-label="SB Shop Informática — início"><img src={site.logo} alt="" className="brand-mark" /><span className="brand-wordmark"><strong>SB SHOP</strong><small>INFORMÁTICA</small></span></a>
        <nav className="main-nav service-nav" aria-label="Navegação principal"><a href="/#servicos">Serviços</a><a href="/assistencia-notebooks">Notebooks</a><a href="/assistencia-impressoras">Impressoras</a><a className="nav-cta" href={site.whatsapp}>Pedir orçamento <ArrowUpRight size={16} /></a></nav>
      </div></header>

      <main>
        <section className="service-hero service-hero-cobalt">
          <div className="container service-hero-inner">
            <a className="back-link" href="/"><ArrowLeft size={15} /> Voltar para a página inicial</a>
            <span className="eyebrow"><span className="eyebrow-dot" /> ATENDIMENTO LOCAL · ARUJÁ E REGIÃO</span>
            <h1>Assistência técnica de informática em Arujá e região</h1>
            <p className="service-intro">A SB Shop Informática atende Arujá e cidades vizinhas com assistência para notebooks, computadores e impressoras. Antes de qualquer serviço, você pode explicar o problema e receber orientação sobre o melhor encaminhamento.</p>
            <div className="service-hero-detail"><div className="service-hero-icon"><MapPin size={30} strokeWidth={1.5} /></div><div><span>ÁREA DE ATENDIMENTO</span><strong>ARUJÁ · GUARULHOS · ITAQUAQUECETUBA · MOGI · SANTA ISABEL</strong></div><em>SB / REGIÃO</em></div>
            <a className="button button-primary" href={site.whatsapp}><MessageCircle size={19} /> Consultar atendimento</a>
          </div>
        </section>

        <section className="service-body"><div className="container service-content-grid">
          <div><span className="section-label">ONDE ATENDEMOS</span><h2>Atendimento em Arujá e cidades próximas.</h2><p className="service-body-lead">A empresa está localizada em Arujá e amplia o atendimento para cidades da região. A disponibilidade e o encaminhamento podem variar conforme o equipamento e o serviço solicitado.</p><div className="service-bullets"><span><Check size={17} /> Notebooks e computadores</span><span><Check size={17} /> Impressoras e equipamentos de impressão</span><span><Check size={17} /> Diagnóstico e manutenção</span><span><Check size={17} /> Orientação antes da execução do serviço</span></div></div>
          <aside className="service-aside"><span className="aside-index">SB / REGIÃO</span><strong>Atendimento local</strong><p>{site.address.street}<br />{site.address.neighborhood} · {site.address.city} — {site.address.region}</p><div className="service-proof"><span><strong>Arujá</strong> endereço da assistência</span><span><strong>5</strong> cidades atendidas na região</span><span><strong>Antes</strong> atendimento orientado</span></div><a href={site.mapsUrl} target="_blank" rel="noreferrer">Ver no Google Maps <ArrowUpRight size={15} /></a></aside>
        </div></section>

        <section className="service-detail-section"><div className="container"><span className="section-label">CIDADES ATENDIDAS</span><div className="service-detail-grid">{cities.map((city, index) => <article key={city.name}><span>0{index + 1}</span><h2>{city.name}</h2><p>{city.text}</p></article>)}</div></div></section>

        <section className="service-detail-section"><div className="container"><span className="section-label">COMO SOLICITAR</span><div className="service-content-grid"><div><h2>Primeiro, conte o que está acontecendo.</h2><p className="service-body-lead">Informe a cidade, o equipamento e o problema apresentado. A equipe pode orientar sobre o próximo passo antes de você se deslocar até a assistência.</p></div><aside className="service-aside"><strong>Fale pelo WhatsApp</strong><p>Envie marca, modelo e uma breve descrição do problema.</p><a href={site.whatsapp}>Conversar agora <ArrowUpRight size={15} /></a></aside></div></div></section>

        <section className="faq-section"><div className="container faq-grid"><div><span className="section-label">DÚVIDAS FREQUENTES</span><h2>Atendimento para Arujá e região.</h2></div><div className="faq-list">{faq.map((item) => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</div></div></section>

        <section className="contact-section service-contact"><div className="container service-contact-grid"><div><span className="section-label light-label">FALE COM A SB SHOP</span><h2>Está em Arujá ou região?<br /><em>Vamos conversar.</em></h2><div className="contact-actions"><a className="button button-orange" href={site.whatsapp}><MessageCircle size={19} /> Pedir orçamento</a><a className="contact-phone" href={`tel:${site.phone}`}><Phone size={17} /> {site.phoneDisplay}</a></div></div><div className="service-contact-data"><span><MapPin size={16} /> {site.address.street} · {site.address.neighborhood} · {site.address.city}/{site.address.region}</span><span><Clock3 size={16} /> {site.hours}</span><a href={site.mapsUrl} target="_blank" rel="noreferrer">Abrir rota no Google Maps <ArrowUpRight size={15} /></a></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-inner footer-inner-expanded"><div className="brand footer-brand"><img src={site.logo} alt="" className="brand-mark" /><span className="brand-wordmark"><strong>SB SHOP</strong><small>INFORMÁTICA</small></span></div><address className="footer-nap"><strong>{site.legalName}</strong><span>{site.address.street} · {site.address.neighborhood} · {site.address.city}/{site.address.region}</span><a href={`tel:${site.phone}`}>{site.phoneDisplay}</a></address><div className="footer-meta"><span><Clock3 size={14} /> {site.hours}</span><a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a></div></div></footer>
      <a className="mobile-cta" href={site.whatsapp}><MessageCircle size={18} /> Pedir orçamento</a>
    </div>
  );
}
