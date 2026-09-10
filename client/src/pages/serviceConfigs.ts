/* Design: Oficina Azul-Cobalto — páginas orientadas a intenção de busca, com linguagem direta e sem promessas não confirmadas. */
import type { ServicePageConfig } from "./ServicePage";

export const serviceConfigs: Record<string, ServicePageConfig> = {
  "assistencia-impressoras": {
    slug: "assistencia-impressoras",
    eyebrow: "IMPRESSORAS · DIAGNÓSTICO · REPARO",
    title: "Assistência técnica para impressoras em Arujá",
    intro: "Manutenção e reparo de impressoras que falham, travam, puxam papel ou deixam a impressão com qualidade irregular. Explique o sintoma e receba orientação sobre o próximo passo.",
    accent: "orange",
    serviceType: "Assistência técnica e manutenção de impressoras",
    bullets: ["Avaliação de falhas de impressão e alimentação de papel", "Orientação antes da execução do serviço", "Atendimento para uso doméstico e pequenos negócios", "Possibilidade de conversar sobre manutenção recorrente"],
    sections: [
      { title: "O sintoma conta uma história", text: "Falhas de impressão, ruídos, atolamentos e mensagens de erro ajudam a direcionar o diagnóstico. Quanto mais detalhes você trouxer, mais objetiva pode ser a conversa." },
      { title: "Serviço explicado antes", text: "A proposta é entender o problema e explicar o caminho possível antes de iniciar qualquer reparo, evitando decisões no escuro." },
      { title: "Rotina de empresa", text: "Se a impressora é essencial para a operação, converse sobre uma rotina de manutenção adequada ao volume e ao contexto do seu negócio." },
    ],
    faq: [
      { question: "Vocês atendem impressoras de qualquer marca?", answer: "A disponibilidade depende do modelo e do tipo de falha. Envie marca, modelo e uma descrição do sintoma pelo WhatsApp para receber uma orientação inicial." },
      { question: "Posso levar a impressora diretamente?", answer: "Entre em contato antes para confirmar o melhor encaminhamento e as condições de atendimento para o seu equipamento." },
      { question: "Vocês fazem contrato de manutenção para empresas?", answer: "Podemos conversar sobre a necessidade da sua empresa e avaliar um formato de manutenção recorrente conforme os equipamentos e a rotina de uso." },
    ],
  },
  "assistencia-notebooks": {
    slug: "assistencia-notebooks",
    eyebrow: "NOTEBOOKS · COMPUTADORES · PERFORMANCE",
    title: "Assistência técnica para notebooks em Arujá",
    intro: "Diagnóstico, limpeza, formatação, upgrade de SSD e memória para notebooks e computadores que ficaram lentos, aquecem demais ou precisam voltar à rotina.",
    accent: "cobalt",
    serviceType: "Assistência técnica e manutenção de notebooks",
    bullets: ["Diagnóstico de lentidão, aquecimento e falhas", "Formatação e organização com orientação clara", "Upgrade de SSD e memória conforme a necessidade", "Equipamentos revisados e explicados com transparência"],
    sections: [
      { title: "Nem toda lentidão pede troca", text: "O diagnóstico ajuda a separar problemas de armazenamento, memória, temperatura e configuração antes de decidir por um reparo ou upgrade." },
      { title: "Upgrade com propósito", text: "SSD e memória fazem sentido quando combinam com o uso que você faz do equipamento. A recomendação deve partir da sua rotina, não de uma lista genérica." },
      { title: "Dados e próximos passos", text: "Antes de qualquer serviço, converse sobre arquivos importantes, acesso ao equipamento e o que precisa ser preservado durante o atendimento." },
    ],
    faq: [
      { question: "Meu notebook está lento. Precisa trocar?", answer: "Nem sempre. O ideal é avaliar armazenamento, memória, temperatura e sistema antes de decidir por uma troca ou upgrade." },
      { question: "Vocês fazem limpeza e manutenção preventiva?", answer: "Sim, a necessidade depende do estado do equipamento e do ambiente de uso. Envie o modelo e o sintoma para conversar sobre a avaliação." },
      { question: "Vocês trabalham com notebooks revisados?", answer: "Quando há equipamentos revisados disponíveis, a condição, a configuração e as condições de compra são informadas antes da decisão." },
    ],
  },
  "contrato-manutencao-empresarial": {
    slug: "contrato-manutencao-empresarial",
    eyebrow: "EMPRESAS · CONTINUIDADE · PREVENÇÃO",
    title: "Contrato de manutenção de informática para empresas",
    intro: "Sua empresa depende de computadores e impressoras todos os dias? Converse com a SB Shop Informática sobre uma rotina de suporte e manutenção alinhada à operação local.",
    accent: "cobalt",
    serviceType: "Contrato de manutenção de informática para empresas",
    bullets: ["Mapeamento inicial dos equipamentos e prioridades", "Conversas sobre manutenção preventiva e corretiva", "Apoio para notebooks, computadores e impressoras", "Escopo e formato definidos conforme a necessidade"],
    sections: [
      { title: "Começa pelo cenário real", text: "Uma boa conversa começa entendendo quantos equipamentos existem, quais são críticos e quais problemas mais interrompem a rotina." },
      { title: "Prevenção reduz improviso", text: "Manutenção preventiva ajuda a criar visibilidade sobre os equipamentos e a tratar sinais antes que virem uma interrupção maior." },
      { title: "Escopo sem letra miúda", text: "O formato do atendimento deve deixar claro o que está incluído, como funciona o contato e quais situações precisam de orçamento separado." },
    ],
    faq: [
      { question: "O contrato atende notebooks e impressoras?", answer: "A composição pode ser conversada conforme os equipamentos e a rotina da empresa. Envie uma visão geral da operação para avaliarmos o melhor escopo." },
      { question: "Existe atendimento emergencial?", answer: "A disponibilidade e os prazos dependem do formato combinado. O ideal é discutir as prioridades e os horários críticos da sua empresa antes de definir o serviço." },
      { question: "Como solicito uma proposta?", answer: "Entre em contato pelo WhatsApp com a cidade, quantidade aproximada de equipamentos e os principais problemas enfrentados pela equipe." },
    ],
  },
};
