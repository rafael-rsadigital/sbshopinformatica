/* Design: Oficina Azul-Cobalto — editorial técnico, contraste funcional, prova antes da promessa. */
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Clock3,
  Cpu,
  HardDrive,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  MonitorCog,
  Phone,
  Printer,
  ShieldCheck,
  Star,
  Wrench,
  X,
} from "lucide-react";
import { useState } from "react";
import SeoHead from "@/components/SeoHead";
import { baseLocalBusinessSchema, breadcrumbSchema, faqSchema, site } from "@/lib/seo";

const mapsUrl = site.mapsUrl;
const whatsappUrl =
  "https://wa.me/551137540839?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20pedir%20um%20or%C3%A7amento.";
const phoneUrl = "tel:+551137540839";
const homeFaq = [
  { question: "A SB Shop atende quais equipamentos?", answer: "A SB Shop Informática atende notebooks, computadores e impressoras em Arujá, com diagnóstico e orientação antes da execução do serviço." },
  { question: "Como pedir um orçamento?", answer: "Você pode falar pelo WhatsApp, informar o equipamento e explicar o sintoma para receber orientação sobre o próximo passo." },
  { question: "Onde fica a assistência técnica?", answer: "A SB Shop Informática fica na Rua Zeferino Barbosa de Souza, 130, Jardim Renata, em Arujá/SP." },
];

const homeSchemas = [
  baseLocalBusinessSchema,
  faqSchema(homeFaq),
  breadcrumbSchema([{ name: "Início", url: "/" }]),
];

const services = [
  {
    number: "01",
    icon: MonitorCog,
    title: "Notebook & computador",
    text: "Diagnóstico, formatação, limpeza, upgrade de SSD e memória para devolver velocidade à rotina.",
    accent: "cobalt",
  },
  {
    number: "02",
    icon: Printer,
    title: "Impressoras",
    text: "Manutenção e reparos para impressoras que falham, travam ou não entregam a qualidade de antes.",
    accent: "orange",
  },
  {
    number: "03",
    icon: HardDrive,
    title: "Equipamentos revisados",
    text: "Notebooks usados e revisados, com orientação clara sobre estado, condição e garantia.",
    accent: "cobalt",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Orçamento sem surpresa",
    text: "A gente explica o problema e aprova o serviço antes de começar. Mais clareza, menos susto.",
    accent: "orange",
  },
];

const process = [
  ["01", "Você explica", "Mande uma mensagem ou traga o equipamento para contar o que está acontecendo."],
  ["02", "A gente diagnostica", "Investigamos a causa e apresentamos o caminho mais adequado para o reparo."],
  ["03", "Você aprova", "Nada de serviço sem autorização. O orçamento vem antes da execução."],
  ["04", "Você retoma", "Equipamento revisado, explicado e pronto para voltar ao seu dia."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <SeoHead
        title="SB Shop Informática | Assistência técnica em Arujá"
        description="Assistência técnica de notebooks, computadores e impressoras em Arujá/SP. Diagnóstico claro, orçamento antes do serviço e atendimento local."
        canonicalPath="/"
        schemas={homeSchemas}
      />
      <div className="topline">
        <div className="container topline-inner">
          <span>ASSISTÊNCIA TÉCNICA DE INFORMÁTICA · ARUJÁ/SP</span>
          <a href={phoneUrl}> (11) 3754-0839</a>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" aria-label="SB Shop Informática — início">
            <img src="/images/logotipo-fundo-transparente.png" alt="" className="brand-mark" />
            <span className="brand-wordmark"><strong>SB SHOP</strong><small>INFORMÁTICA</small></span>
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a>
            <a href="#processo" onClick={() => setMenuOpen(false)}>Como funciona</a>
            <a href="#reputacao" onClick={() => setMenuOpen(false)}>Confiança</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
            <a className="nav-cta" href={whatsappUrl}>Pedir orçamento <ArrowUpRight size={16} /></a>
          </nav>
        </div>
      </header>

      <main id="inicio">
        <section className="hero-section">
          <div className="hero-texture" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> DIAGNÓSTICO · REPARO · RETOMADA</div>
              <h1>Assistência técnica de informática em Arujá</h1>
              <p className="hero-lead">Seu equipamento volta a trabalhar — <em>sem conversa complicada.</em> Assistência técnica para notebooks, computadores e impressoras. A gente explica o problema, combina o caminho e cuida do resto.</p>
              <div className="hero-actions">
                <a className="button button-primary" href={whatsappUrl}><MessageCircle size={19} /> Pedir orçamento pelo WhatsApp</a>
                <a className="text-link" href={mapsUrl} target="_blank" rel="noreferrer">Ver no Google Maps <ArrowUpRight size={16} /></a>
              </div>
              <div className="hero-notes">
                <span><Check size={15} /> Orçamento antes do serviço</span>
                <span><Check size={15} /> Atendimento local em Arujá</span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-photo-frame">
                <img src="/images/sb-shop-hero-workbench.webp" alt="Bancada organizada para manutenção de um notebook" />
                <div className="photo-caption"><span>NA BANCADA</span><strong>Precisão que acolhe.</strong></div>
              </div>
              <div className="rating-stamp" aria-label="4,7 de 5 estrelas em 110 avaliações no Google">
                <Star size={15} fill="currentColor" /><strong>4,7</strong><span>110 avaliações<br />no Google</span>
              </div>
              <div className="hero-index">SB<span> / 01</span></div>
            </div>
          </div>
        </section>

        <section className="trust-strip" id="reputacao">
          <div className="container trust-grid">
            <div className="trust-intro"><span className="section-label">O QUE OS CLIENTES PERCEBEM</span><h2>Confiança começa quando tudo fica claro.</h2></div>
            <div className="trust-facts">
              <div className="trust-fact"><strong>4,7</strong><span>nota pública no Google</span></div>
              <div className="trust-fact"><strong>110</strong><span>avaliações recebidas</span></div>
              <div className="trust-fact"><strong>3.993</strong><span>visualizações no perfil</span></div>
            </div>
            <div className="trust-themes"><span>ATENDIMENTO</span><span>AGILIDADE</span><span>CONHECIMENTO TÉCNICO</span><span>IMPRESSORAS</span><span>NOTEBOOKS</span></div>
          </div>
        </section>

        <section className="services-section" id="servicos">
          <div className="container">
            <div className="section-heading split-heading"><div><span className="section-label">SERVIÇOS / 01—04</span><h2>Serviços de assistência técnica em Arujá</h2></div><p>Do sintoma ao reparo, sem atalhos. Nem todo equipamento precisa ser trocado. Às vezes, precisa de diagnóstico, cuidado e uma decisão bem explicada.</p></div>
            <div className="services-grid">
              {services.map((service) => {
                const Icon = service.icon;
                return <article className={`service-card service-${service.accent}`} key={service.number}>
                  <div className="card-top"><span>{service.number}</span><Icon size={23} strokeWidth={1.6} /></div>
                  <h3>{service.title}</h3><p>{service.text}</p><a href={service.number === "01" ? "/assistencia-notebooks" : service.number === "02" ? "/assistencia-impressoras" : service.number === "03" ? "/assistencia-notebooks" : "/contrato-manutencao-empresarial"}>Ver página do serviço <ChevronRight size={16} /></a>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section className="feature-section">
          <div className="container feature-grid">
            <div className="feature-image"><img src="/images/sb-shop-product-laptop.webp" alt="Notebook revisado sobre bancada de assistência técnica" /><span className="image-tag">REVISADO / TESTADO</span></div>
            <div className="feature-copy"><span className="section-label">TAMBÉM TEMOS</span><h2>Tecnologia usada pode ser uma escolha <em>inteligente.</em></h2><p>Quando há notebooks revisados disponíveis, você recebe informação sobre a condição do equipamento, orientação para escolher e um caminho de compra mais tranquilo.</p><div className="feature-list"><span><ShieldCheck size={18} /> Estado explicado com honestidade</span><span><Cpu size={18} /> Configuração para a sua necessidade</span><span><Check size={18} /> Garantia e condições informadas</span></div><a className="button button-dark" href={whatsappUrl}>Consultar disponibilidade <ArrowUpRight size={17} /></a></div>
          </div>
        </section>

        <section className="process-section" id="processo">
          <div className="container">
            <div className="section-heading process-heading"><div><span className="section-label">COMO FUNCIONA</span><h2>Explicar. Diagnosticar.<br /><em>Resolver.</em></h2></div><p>Um processo simples para você saber o que está acontecendo antes de decidir o que fazer.</p></div>
            <div className="process-grid">{process.map(([num, title, text]) => <div className="process-step" key={num}><span className="process-number">{num}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
          </div>
        </section>

        <section className="faq-section home-faq"><div className="container faq-grid"><div><span className="section-label">DÚVIDAS FREQUENTES</span><h2>Antes de trazer, você pode perguntar.</h2></div><div className="faq-list">{homeFaq.map((item) => <details key={item.question}><summary>{item.question}<ChevronRight size={17} /></summary><p>{item.answer}</p></details>)}</div></div></section>

        <section className="contact-section" id="contato">
          <div className="container contact-grid">
            <div><span className="section-label light-label">ONDE ESTAMOS</span><h2>Explique o problema.<br /><em>A gente cuida do resto.</em></h2><p>Rua Zeferino Barbosa de Souza, 130<br />Jardim Renata · Arujá — SP</p><div className="contact-actions"><a className="button button-orange" href={whatsappUrl}><MessageCircle size={19} /> Falar no WhatsApp</a><a className="contact-phone" href={phoneUrl}><Phone size={17} /> (11) 3754-0839</a></div></div>
            <div className="map-card"><iframe title="Localização da SB Shop Informática no Google Maps" src={site.mapsEmbedUrl} width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" /><a className="map-overlay-link" href={mapsUrl} target="_blank" rel="noreferrer">Ver no Google Maps <ArrowUpRight size={15} /></a></div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-inner footer-inner-expanded"><div className="brand footer-brand"><img src={site.logo} alt="" className="brand-mark" /><span className="brand-wordmark"><strong>SB SHOP</strong><small>INFORMÁTICA</small></span></div><address className="footer-nap"><strong>{site.legalName}</strong><span>{site.address.street} · {site.address.neighborhood} · {site.address.city}/{site.address.region}</span><a href={phoneUrl}>{site.phoneDisplay}</a></address><nav className="footer-services" aria-label="Páginas de serviço"><a href="/assistencia-notebooks">Assistência para notebooks</a><a href="/assistencia-impressoras">Assistência para impressoras</a><a href="/contrato-manutencao-empresarial">Manutenção para empresas</a></nav><div className="footer-meta"><span><Clock3 size={14} /> {site.hours}</span><a href={site.instagram} target="_blank" rel="noreferrer"><Instagram size={15} /> @sb_shopinformatica</a></div><span className="footer-note">Feito para a rotina voltar a funcionar.</span></div></footer>
      <a className="mobile-cta" href={whatsappUrl}><MessageCircle size={18} /> Pedir orçamento</a>
    </div>
  );
}
