export interface NavItem {
  label: string;
  href: string;
}

export interface MetricCard {
  number: string;
  label: string;
  source: string;
}

export interface MythTruthItem {
  id: string;
  category: "diabetes" | "prostata" | "corpo";
  statement: string;
  verdict: "Mito" | "Verdade" | "Atenção";
  explanation: string;
  officialRef: string;
}

export interface ReferenceItem {
  title: string;
  institution: string;
  description: string;
  url: string;
}

export const CAMPAIGN_INFO = {
  year: 2026,
  title: "Novembro Azul 2026 | Escola de Fasciaterapia e Movimento",
  slogan: "Informar também é uma forma de cuidar.",
  centralMessage: "Cuidar de si é também aprender a se conhecer.",
  shareableQuote: "Você não precisa esperar uma data especial para cuidar de si. Sua saúde merece atenção hoje e todos os dias.",
  dates: {
    diabetes: {
      day: "14 de Novembro",
      title: "Dia Mundial do Diabetes",
      badge: "Conscientização & Cuidado Contínuo",
      summary: "Uma data para entender melhor o diabetes, reconhecer sinais de atenção e valorizar o acompanhamento em saúde.",
      href: "#diabetes",
    },
    menHealth: {
      day: "17 de Novembro",
      title: "Dia Nacional de Combate ao Câncer de Próstata",
      badge: "Saúde Integral Masculina",
      summary: "Uma oportunidade para falar com clareza sobre sintomas, fatores de risco e a importância da avaliação médica individualizada.",
      href: "#saude-masculina",
    },
  },
  institution: {
    name: "Escola de Fasciaterapia e Movimento",
    founder: "Lucy Aihara",
    founderRole: "Fisioterapeuta, Educadora Física e Fasciaterapeuta",
    siteUrl: "https://www.escoladefasciaterapiaemovimento.com/",
    instagramUrl: "https://www.instagram.com/fasciaterapia.fasciavocemesmo",
    location: "São Paulo - SP",
    address: {
      street: "Rua Sergipe, 475, conjunto 114",
      neighborhood: "Consolação / Higienópolis",
      city: "São Paulo",
      state: "SP",
      postalCode: "01243-912",
      country: "BR",
      fullAddress: "Rua Sergipe, 475, conjunto 114 — Consolação, São Paulo, SP, CEP 01243-912",
      googleMapsUrl:
        "https://maps.google.com/?q=Rua+Sergipe,+475,+conjunto+114,+Consola%C3%A7%C3%A3o,+S%C3%A3o+Paulo+-+SP,+01243-912",
      metroReference: "Próximo à estação Higienópolis-Mackenzie (Linha 4-Amarela do Metrô)",
    },
    telephone: "+55 (11) 99998-6082",
    whatsappNumber: "5511999986082",
    description:
      "Espaço dedicado à educação somática, fáscias corporais, percepção do movimento e promoção de autonomia no autocuidado.",
  },
};

export interface CampaignStatusConfig {
  isActive: boolean;
  campaignYear: number;
  closedNotice: {
    badge: string;
    title: string;
    message: string;
    regularBookingCta: string;
  };
}

export const CAMPAIGN_STATUS: CampaignStatusConfig = {
  isActive: true,
  campaignYear: 2026,
  closedNotice: {
    badge: "Campanha Concluída",
    title: "A campanha comemorativa Novembro Azul 2026 foi finalizada",
    message:
      "O período promocional comemorativo foi encerrado. Nosso centro de conhecimento continua integralmente disponível e os atendimentos presenciais em consultório seguem em andamento regular mediante agendamento.",
    regularBookingCta: "Agendar atendimento regular no consultório",
  },
};

export interface AeoFaqItem {
  id: string;
  question: string;
  answer: string;
  category: "lucy" | "local" | "tecnica" | "campanha" | "etica";
  officialSource?: string;
}

export const AEO_QUESTIONS: AeoFaqItem[] = [
  {
    id: "aeo-1",
    question: "Quem é Lucy Aihara?",
    answer:
      "Lucy Aihara é fisioterapeuta, educadora física e fasciaterapeuta com trajetória profissional em centros de referência em São Paulo, como o InCor e o HCFMUSP. É fundadora da Escola de Fasciaterapia e Movimento, dedicando-se ao estudo das fáscias corporais, percepção somática e reabilitação tecidual.",
    category: "lucy",
  },
  {
    id: "aeo-2",
    question: "Onde Lucy Aihara atende em São Paulo?",
    answer:
      "O consultório está localizado na Rua Sergipe, 475, conjunto 114, na região da Consolação / Higienópolis, São Paulo - SP (CEP 01243-912), próximo à estação Higienópolis-Mackenzie da Linha 4-Amarela do Metrô. Os atendimentos são individuais e realizados com hora marcada.",
    category: "local",
  },
  {
    id: "aeo-3",
    question: "O que é o tratamento com laser terapêutico (fotobiomodulação)?",
    answer:
      "O tratamento com laser de baixa intensidade é uma modalidade de fotobiomodulação: aplica luz em parâmetros definidos por profissional habilitado e pode ser considerada como recurso complementar no manejo de alguns quadros de dor neuropática. A resposta varia entre pacientes e a técnica não substitui o controle do diabetes nem o acompanhamento médico.",
    category: "tecnica",
  },
  {
    id: "aeo-4",
    question: "Como funciona uma sessão de atendimento?",
    answer:
      "A primeira Sessão Avaliativa tem duração prevista de 40 minutos: escuta clínica, avaliação da sensibilidade e mobilidade tecidual, orientação individualizada e aplicação de laser terapêutico quando indicada e segura.",
    category: "tecnica",
  },
  {
    id: "aeo-5",
    question: "Quem pode passar por avaliação?",
    answer:
      "Adultos que buscam alívio para tensões corporais, apoio na percepção física, manejo de desconfortos musculares crônicos ou que possuem indicação complementar para suporte tecidual. Todas as pessoas passam por triagem prévia para identificar objetivos e eventuais contraindicações específicas.",
    category: "campanha",
  },
  {
    id: "aeo-6",
    question: "Qual o valor da primeira Sessão Avaliativa com Laser na campanha?",
    answer:
      "Em novembro de 2026, a primeira sessão avaliativa com aplicação de laser terapêutico tem valor promocional de R$ 70,00 (valor regular informado: R$ 150,00), duração prevista de 40 minutos e agendamento prévio pelo WhatsApp no consultório da Consolação. A aplicação depende da avaliação e indicação clínica.",
    category: "campanha",
  },
  {
    id: "aeo-7",
    question: "É obrigatório contratar outras sessões ou pacotes?",
    answer:
      "Não. Não há nenhuma obrigação, contrato de fidelidade ou exigência de continuidade. A sessão avaliativa não obriga contratação de pacotes ou outras sessões. A continuidade só ocorre se houver indicação técnica e interesse espontâneo do paciente.",
    category: "campanha",
  },
  {
    id: "aeo-8",
    question: "A fotobiomodulação substitui tratamentos médicos convencionais?",
    answer:
      "Não. A fotobiomodulação é um recurso fisioterapêutico de suporte e bem-estar físico. Ela não previne, não cura e não substitui consultas médicas, diagnósticos oncológicos, exames de rastreamento, quimioterapia, radioterapia ou medicamentos prescritos para diabetes e outras patologias crônicas.",
    category: "etica",
  },
  {
    id: "aeo-9",
    question: "Qual a relação da campanha com diabetes e câncer de próstata?",
    answer:
      "A campanha conecta as duas principais efemérides globais de saúde de novembro: o Dia Mundial do Diabetes (14/11) e o Dia Nacional de Combate ao Câncer de Próstata (17/11). O objetivo central é conscientizar para a importância do autocuidado preventivo, o diálogo precoce com médicos e o respeito aos sinais corporais.",
    category: "campanha",
  },
  {
    id: "aeo-10",
    question: "Como realizar o agendamento do atendimento?",
    answer:
      "O agendamento é realizado de forma simples pelo WhatsApp oficial de Lucy Aihara (+55 11 99998-6082). Basta clicar no botão de agendamento no site para iniciar uma conversa direta com mensagem pré-preenchida e confirmar o horário disponível.",
    category: "campanha",
  },
  {
    id: "aeo-11",
    question: "A Sessão Avaliativa com Laser oferece recibo para reembolso do convênio?",
    answer: "É emitido recibo referente ao serviço realmente prestado, com descrição de fisioterapia e eletroterapia quando pertinente. O paciente pode solicitar reembolso, mas a aprovação e o valor dependem da cobertura e das regras da operadora.",
    category: "campanha",
  },
  {
    id: "aeo-12",
    question: "Pessoas com histórico de câncer podem fazer laser terapêutico?",
    answer: "A indicação depende de avaliação individual. Pacientes em tratamento oncológico devem consultar o médico responsável antes de qualquer aplicação e informar seu histórico à fisioterapeuta.",
    category: "etica",
  },
];

export const NAV_LINKS: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Sessão Avaliativa", href: "/#especial-novembro-azul" },
  { label: "Tratamento com Laser", href: "/#tratamento-laser" },
  { label: "Temas", href: "/#temas" },
  { label: "Sobre Lucy", href: "/conhecimento/lucy-aihara" },
  { label: "Depoimentos", href: "/depoimentos" },
];

export const DIABETES_DATA = {
  definition:
    "O diabetes mellitus é uma condição crônica metabólica caracterizada pelo aumento dos níveis de glicose no sangue (hiperglicemia), decorrente de defeitos na secreção ou na ação da insulina — hormônio produzido pelo pâncreas responsável por transportar a glicose para o interior das células.",
  types: [
    {
      title: "Diabetes Tipo 1 (DM1)",
      nature: "Condição autoimune",
      description:
        "O sistema imunológico ataca equivocadamente as células beta do pâncreas, resultando na perda total ou quase total da produção de insulina. Costuma surgir na infância, adolescência ou início da vida adulta, embora possa ser diagnosticado em qualquer fase.",
      care: "Exige reposição diária de insulina, automonitorização da glicemia, planejamento alimentar e prática regular de movimento com acompanhamento de equipe multidisciplinar.",
      accent: "soft-blue",
    },
    {
      title: "Diabetes Tipo 2 (DM2)",
      nature: "Resistência e deficiência gradual",
      description:
        "O organismo desenvolve resistência à ação da insulina ou não produz quantidade suficiente para manter os níveis adequados. Está frequentemente ligado à predisposição genética, hábitos de vida e avanço da idade. Costuma ter evolução silenciosa nos estágios iniciais.",
      care: "Envolve mudanças positivas no estilo de vida (movimento consciente e alimentação equilibrada), medicamentos orais e, se necessário, terapias injetáveis orientadas pelo médico.",
      accent: "deep-blue",
    },
    {
      title: "Glicemia de Atenção (Pré-diabetes)",
      nature: "Fase de oportunidade",
      description:
        "Os níveis de glicose estão acima do padrão esperado, mas ainda não atingem o critério diagnóstico de DM2. É um momento precioso em que a adoção de hábitos saudáveis e acompanhamento regular podem interromper ou reverter a progressão.",
      care: "Exames de rotina periódicos, reorganização de rotina de sono, redução do estresse e integração do movimento no dia a dia.",
      accent: "sage",
    },
  ],
  symptoms: [
    {
      name: "Poliúria",
      label: "Necessidade de urinar com frequência",
      desc: "O organismo busca eliminar o excesso de glicose através da urina.",
    },
    {
      name: "Polidipsia",
      label: "Sede aumentada e constante",
      desc: "Consequência direta da perda hídrica decorrente da micção frequente.",
    },
    {
      name: "Perda de peso inexplicada",
      label: "Emagrecimento sem motivo aparente",
      desc: "As células não conseguem absorver glicose e passam a queimar estoques energéticos corporais.",
    },
    {
      name: "Polifagia e Fadiga",
      label: "Fome constante e cansaço profundo",
      desc: "Sensação contínua de falta de energia celular, acompanhada de desânimo físico.",
    },
    {
      name: "Visão Turva e Cicatrização Lenta",
      label: "Sinais de circulação e sensibilidade",
      desc: "Alterações transitórias na refração ocular e demora no fechamento de pequenos cortes ou lesões nos pés.",
    },
  ],
  careImportance:
    "O diagnóstico de diabetes pode trazer mudanças importantes. Informação confiável, acompanhamento profissional, acesso ao tratamento e apoio ajudam a construir uma rotina de cuidado possível para cada pessoa.",
};

export const PROSTATE_DATA = {
  definition:
    "A próstata é uma glândula do aparelho reprodutor masculino, com formato semelhante a uma noz, localizada logo abaixo da bexiga e à frente do reto. Sua função principal é produzir e armazenar parte do fluido seminal que nutre e protege os espermatozoides.",
  cancerInfo:
    "O câncer de próstata é o segundo tumor mais frequente entre os homens no Brasil (depois dos tumores de pele não melanoma). Na imensa maioria dos casos, cresce de forma lenta e não manifesta sintomas perceptíveis em sua fase inicial.",
  riskFactors: [
    {
      factor: "Idade",
      desc: "A incidência e a mortalidade aumentam de modo expressivo a partir dos 50 anos de idade.",
    },
    {
      factor: "Histórico Familiar",
      desc: "Ter pai, irmão ou parentes de primeiro grau que tiveram a condição antes dos 60 anos eleva a probabilidade individual.",
    },
    {
      factor: "Fatores Étnicos",
      desc: "Homens negros apresentam maior taxa de incidência e merecem atenção médica orientada desde idades mais jovens.",
    },
    {
      factor: "Estilo de Vida e Sobrepeso",
      desc: "Sedentarismo, tabagismo e excesso de gordura corporal estão correlacionados a formas mais agressivas de enfermidades crônicas.",
    },
  ],
  symptoms: [
    "Dificuldade ou esforço incomum ao urinar.",
    "Jato urinário fraco, interrompido ou sensação de bexiga nunca esvaziada.",
    "Necessidade frequente de levantar-se à noite para urinar (noctúria recorrente).",
    "Dor ou ardor ao urinar.",
    "Presença visível de sangue na urina ou no sêmen.",
    "Dores ósseas persistentes na região lombar ou na pelve (em estágios avançados).",
  ],
  sharedDecisionInfo: {
    title: "Diretriz Oficial do INCA e a Decisão Compartilhada",
    highlight:
      "Nem todo homem sem sintomas precisa fazer PSA e toque retal anualmente como uma regra universal obrigatória.",
    text: "O Instituto Nacional de Câncer (INCA) e o Ministério da Saúde recomendam que os homens conversem com o médico sobre os prós e contras de realizar exames de rastreamento antes de qualquer decisão. O rastreamento sem critérios pode levar a sobrediagnósticos, biópsias desnecessárias e tratamentos invasivos para tumores indolentes que jamais comprometeriam a vida.",
    recommendation:
      "A melhor conduta é o diálogo aberto e individualizado: avaliar o histórico pessoal com seu médico de confiança e procurar atendimento imediato ao notar qualquer alteração urinária.",
  },
};

export const BODY_AWARENESS_DATA = {
  title: "O Corpo Merece Atenção: A Escuta Sensível e Consciente",
  intro:
    "Autocuidado não é uma lista de tarefas punitivas; é um aprendizado diário de presença, percepção e respeito aos limites da nossa biologia.",
  pillars: [
    {
      title: "Percepção Corporal & Fáscias",
      desc: "As fáscias são tecidos conjuntivos presentes em diversas estruturas do corpo. A escola trabalha a percepção corporal e o movimento como parte de sua proposta educativa e de cuidado individualizado.",
    },
    {
      title: "Movimento Consciente",
      desc: "Movimentos suaves, adaptados às possibilidades de cada pessoa, podem integrar uma rotina de atividade física e atenção ao próprio corpo, com orientação profissional quando necessária.",
    },
    {
      title: "Acompanhamento Individualizado",
      desc: "Cada organismo tem uma história única de vida, postura e resiliência. O cuidado em saúde deve sempre acolher a individualidade de cada pessoa, sem fórmulas padronizadas e sem julgamentos.",
    },
    {
      title: "Respeito Aos Próprios Limites",
      desc: "Reconhecer sintomas, respeitar limites e procurar orientação profissional quando necessário também fazem parte do cuidado.",
    },
  ],
  ethicalDisclaimer:
    "Atenção Ética: A Fasciaterapia e a Educação Perceptiva do Movimento são práticas somáticas de integração e bem-estar corporal. Elas não substituem consultas médicas, exames diagnósticos, terapias oncológicas ou o tratamento convencional do diabetes e do câncer de próstata.",
};

export const MYTHS_AND_TRUTHS: MythTruthItem[] = [
  {
    id: "dm-acucar",
    category: "diabetes",
    statement: "O diabetes surge exclusivamente porque a pessoa comeu muito doce.",
    verdict: "Mito",
    explanation:
      "O diabetes tipo 1 é uma condição autoimune decorrente de destruição celular no pâncreas e não tem ligação com o consumo de doces. Já no diabetes tipo 2, embora o excesso calórico e de ultraprocessados contribua para o sobrepeso e a resistência insulínica, fatores genéticos, idade, estresse e sedentarismo exercem papel determinante.",
    officialRef: "Sociedade Brasileira de Diabetes (SBD)",
  },
  {
    id: "dm-sintomas",
    category: "diabetes",
    statement: "Se a pessoa não sente tontura ou dor, significa que a glicemia está normal.",
    verdict: "Mito",
    explanation:
      "O diabetes tipo 2 costuma ser assintomático em seus primeiros anos de evolução. A glicose alta pode danificar vasos sanguíneos e nervos de maneira silenciosa. Por isso, a dosagem laboratorial de glicemia em jejum e hemoglobina glicada em consultas de rotina é fundamental.",
    officialRef: "Ministério da Saúde — Linha de Cuidado do DM2",
  },
  {
    id: "dm-exercicio",
    category: "diabetes",
    statement: "Praticar atividade física e movimento consciente ajuda na sensibilidade à insulina.",
    verdict: "Verdade",
    explanation:
      "A contração muscular permite a captação de glicose de forma independente ou mais sensível à insulina, melhorando significativamente o controle glicêmico e a circulação tecidual periférica.",
    officialRef: "Diretrizes SBD / American Diabetes Association",
  },
  {
    id: "ca-rastreamento-universal",
    category: "prostata",
    statement: "Todo homem a partir de 40 anos deve fazer toque retal e PSA todo ano sem falta.",
    verdict: "Mito",
    explanation:
      "De acordo com as diretrizes do Ministério da Saúde e do INCA, não se recomenda o rastreamento em massa de homens assintomáticos sem ponderação de riscos e benefícios. Homens com sintomas urinários devem sempre ser examinados. Para pessoas sem sintomas, decisões sobre exames devem considerar os benefícios e possíveis danos, em conversa individual com um médico.",
    officialRef: "INCA — Posicionamento sobre Detecção Precoce do Câncer de Próstata",
  },
  {
    id: "ca-sintomas-fase-inicial",
    category: "prostata",
    statement: "O câncer de próstata em fase inicial quase sempre não apresenta nenhum sintoma.",
    verdict: "Verdade",
    explanation:
      "Nos estágios iniciais, o tumor prostático é silencioso. Quando surgem sintomas obstrutivos (como dificuldade de urinar ou fluxo fraco), muitas vezes decorrem de hiperplasia benigna da próstata (condição comum e não cancerosa) ou de doença mais avançada, exigindo avaliação especializada imediata.",
    officialRef: "INCA / Sociedade Brasileira de Urologia",
  },
  {
    id: "ca-conversar-medico",
    category: "prostata",
    statement: "Ter medo ou vergonha dos exames ainda é uma das maiores barreiras no cuidado masculino.",
    verdict: "Verdade",
    explanation:
      "O preconceito e a masculinidade tóxica afastam muitos homens dos serviços de saúde básica. O acolhimento com escuta empática e esclarecimento livre de tabus desmistifica a consulta e salva vidas.",
    officialRef: "Política Nacional de Atenção Integral à Saúde do Homem (PNAISH)",
  },
  {
    id: "corpo-fascia-cura",
    category: "corpo",
    statement: "Terapias corporais como a fasciaterapia curam o diabetes ou previnem o câncer.",
    verdict: "Mito",
    explanation:
      "A fasciaterapia é apresentada pela escola como prática de percepção corporal e movimento. Não há comprovação de que previna ou cure diabetes e câncer, e ela não substitui tratamentos indicados para essas condições.",
    officialRef: "Escola de Fasciaterapia e Movimento — Princípios Éticos",
  },
];

export const OFFICIAL_REFERENCES: ReferenceItem[] = [
  {
    title: "Instituto Nacional de Câncer (INCA)",
    institution: "Ministério da Saúde do Brasil",
    description:
      "Diretrizes técnicas sobre o câncer de próstata, fatores de risco, posicionamento sobre rastreamento populacional e orientação para a decisão compartilhada.",
    url: "https://www.gov.br/inca/pt-br/assuntos/cancer/tipos/prostata",
  },
  {
    title: "Sociedade Brasileira de Diabetes (SBD)",
    institution: "SBD — Diretrizes Oficiais",
    description:
      "Recomendações clínicas para diagnóstico, classificação, rastreamento do diabetes mellitus tipo 1 e tipo 2, monitoramento glicêmico e cuidados integrados.",
    url: "https://diretriz.diabetes.org.br/",
  },
  {
    title: "Ministério da Saúde — Saúde do Homem (PNAISH)",
    institution: "Governo Federal / SUS",
    description:
      "Política Nacional de Atenção Integral à Saúde do Homem, fortalecendo a promoção do autocuidado, a prevenção e a humanização dos atendimentos no SUS.",
    url: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-do-homem",
  },
];

export interface OfferStep {
  number: string;
  title: string;
  description: string;
}

export interface OfferConditionItem {
  text: string;
}

export interface OfferFaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface NovemberBlueOfferData {
  eyebrow: string;
  headline: string;
  subheadline: string;
  offerHeadline: string;
  complement: string;
  ctaText: string;
  ctaSecondaryText: string;
  educationTitle: string;
  educationText: string;
  educationLink: string;
  microtext: string;
  datesConnection: {
    diabetesDate: string;
    prostateDate: string;
    context: string;
  };
  keyPoints: string[];
  whatsappNumber: string;
  whatsappMessage: string;
  clarificationText: string;
  steps: OfferStep[];
  conditions: OfferConditionItem[];
  faqs: OfferFaqItem[];
}

export const NOVEMBER_BLUE_OFFER: NovemberBlueOfferData = {
  eyebrow: "CONDIÇÃO ESPECIAL DE NOVEMBRO AZUL",
  headline: "Dê o primeiro passo para cuidar da sua sensibilidade e da dor.",
  subheadline:
    "Choques, formigamento, sensação de areia nos pés, dormência ou hipersensibilidade merecem avaliação profissional. A sessão de entrada reúne avaliação clínica e aplicação de laser terapêutico, quando indicada.",
  offerHeadline: "1ª SESSÃO AVALIATIVA + LASER POR R$ 70",
  complement:
    "Valor regular informado: R$ 150,00. Condição de novembro: R$ 70,00 por 40 minutos de atendimento presencial mediante agendamento e avaliação de segurança clínica.",
  ctaText: "Reservar meu horário pelo WhatsApp",
  ctaSecondaryText: "Saiba como funciona o laser",
  educationTitle: "O que é o Tratamento com Laser (fotobiomodulação)?",
  educationText:
    "O laser terapêutico utiliza luz de baixa intensidade em comprimentos de onda específicos para interagir com os tecidos. Pode ser considerado, após avaliação, como recurso complementar no manejo de determinados desconfortos e dores neuropáticas. A resposta é individual e a evidência e os protocolos variam conforme a condição.",
  educationLink: "/conhecimento/fotobiomodulacao",
  microtext:
    "Condição válida em novembro de 2026, para novos atendimentos e conforme disponibilidade de agenda. Sem obrigação de contratar pacotes.",
  datesConnection: {
    diabetesDate: "14 de Novembro — Dia Mundial do Diabetes",
    prostateDate: "17 de Novembro — Saúde Integral do Homem",
    context:
      "A campanha conecta a conscientização sobre diabetes, neuropatia e cuidado integral da saúde masculina, sem substituir avaliações ou tratamentos médicos.",
  },
  keyPoints: [
    "Avaliação de sensibilidade e mobilidade tecidual",
    "Aplicação localizada de laser, se clinicamente indicada",
    "Orientação individualizada sobre próximos cuidados",
    "Recibo para solicitação de reembolso conforme convênio",
  ],
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511999986082",
  whatsappMessage:
    "Olá, Lucy! Vi a campanha Novembro Azul no site e gostaria de agendar minha 1ª Sessão Avaliativa com Laser (valor especial de R$ 70) no consultório da Consolação.",
  clarificationText:
    "Não há obrigação de contratar outras sessões. A aplicação de laser depende da indicação e das condições clínicas avaliadas. O reembolso depende das regras do plano de saúde.",
  steps: [
    {
      number: "01",
      title: "Contato direto pelo WhatsApp",
      description:
        "Conte brevemente onde sente dor, dormência ou formigamento para consultar os horários disponíveis.",
    },
    {
      number: "02",
      title: "Confirmação na Consolação",
      description:
        "Receba o horário e as orientações para ir ao consultório na Rua Sergipe, perto da estação Higienópolis-Mackenzie.",
    },
    {
      number: "03",
      title: "Avaliação + laser (40 minutos)",
      description:
        "Lucy avalia seu quadro, explica as possibilidades e realiza a aplicação terapêutica somente quando apropriada.",
    },
  ],
  conditions: [
    { text: "Valor especial de R$ 70,00 para a primeira sessão avaliativa de 40 minutos em novembro de 2026, sujeito à disponibilidade de agenda." },
    { text: "Valor regular informado para essa sessão: R$ 150,00. Oferta apenas com confirmação prévia pelo WhatsApp." },
    { text: "A aplicação de laser depende de avaliação individualizada e indicação segura; não há promessa de cura ou alívio garantido." },
    { text: "Recibo com descrição fiel do serviço realizado (Fisioterapia / Eletroterapia, quando pertinente) para eventual pedido de reembolso; cada operadora define sua cobertura e documentação." },
    { text: "Pacientes com câncer atual ou prévio, especialmente em tratamento, devem informar o histórico e consultar a equipe médica antes de uma eventual aplicação." },
  ],
  faqs: [
    {
      id: "faq-fbm-1",
      question: "Qual o preço da primeira Sessão Avaliativa com Laser?",
      answer: "Na campanha de novembro de 2026, a primeira sessão avaliativa custa R$ 70,00 (valor regular informado de R$ 150,00), com duração prevista de 40 minutos e avaliação prévia da indicação do laser.",
    },
    {
      id: "faq-fbm-2",
      question: "O laser terapêutico pode ajudar na dor neuropática?",
      answer: "A fotobiomodulação por laser de baixa intensidade é estudada como recurso complementar para alguns quadros de dor e neuropatia. Os resultados variam, e a avaliação clínica é indispensável. Não substitui medicação nem o tratamento do diabetes.",
    },
    {
      id: "faq-fbm-3",
      question: "É possível solicitar reembolso pelo convênio?",
      answer: "É fornecido recibo referente ao atendimento efetivamente realizado, com identificação adequada da fisioterapia ou eletroterapia quando aplicável. O pedido pode ser apresentado à operadora, mas o reembolso não é garantido e depende das regras do contrato.",
    },
    {
      id: "faq-fbm-4",
      question: "Preciso contratar pacotes depois da sessão?",
      answer: "Não. Não há fidelidade nem obrigação de contratar outras sessões; qualquer continuidade é decidida após avaliação clínica, de acordo com seu interesse.",
    },
    {
      id: "faq-fbm-5",
      question: "E se eu tiver histórico de câncer?",
      answer: "Informe o diagnóstico e os tratamentos atuais ou anteriores. A segurança da aplicação deve ser avaliada individualmente e, durante tratamento oncológico ou diante de dúvidas, é necessária articulação com o médico responsável antes do procedimento.",
    },
  ],
};

export interface TestimonialItem {
  id: string;
  author: string;
  age: number;
  role: string;
  city: string;
  quote: string;
  context: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "depoimento-marcos",
    author: "Marcos P.",
    age: 54,
    role: "Gestor Administrativo",
    city: "São Paulo - SP",
    quote:
      "Nós, homens, fomos educados a ignorar o cansaço e só procurar ajuda quando algo trava de vez. Conhecer o trabalho da Lucy me ensinou a escutar os sinais de tensão antes que virem dor crônica. O ambiente no consultório transmite uma paz rara.",
    context: "Acompanhamento de percepção corporal e alívio de sobrecargas posturais",
  },
  {
    id: "depoimento-carlos",
    author: "Carlos E.",
    age: 49,
    role: "Professor Universitário",
    city: "São Paulo - SP",
    quote:
      "A seriedade técnica da Lucy salta aos olhos. Ela não faz promessas milagrosas; explica cada passo com base anatômica e fisiológica. A experiência do toque e do cuidado sutil me ajudou a desacelerar a mente e respirar melhor.",
    context: "Sessões presenciais de conscientização do movimento",
  },
  {
    id: "depoimento-roberto",
    author: "Roberto S.",
    age: 62,
    role: "Engenheiro Aposentado",
    city: "São Paulo - SP",
    quote:
      "Com a idade, passei a ter mais receio de rigidez e perda de mobilidade. O atendimento com a Lucy Aihara em Higienópolis foi um divisor de águas: aprendi a respeitar meus limites e ganhei mais leveza no dia a dia.",
    context: "Reeducação somática e mobilidade articular suave",
  },
  {
    id: "depoimento-daniel",
    author: "Daniel M.",
    age: 43,
    role: "Arquiteto",
    city: "São Paulo - SP",
    quote:
      "A campanha do Novembro Azul abriu meus olhos para a importância do autocuidado preventivo. A postura acolhedora da Lucy me deu total segurança para experimentar e aprender a cuidar de mim com gentileza.",
    context: "Prevenção e consciência postural",
  },
];

export interface CommercialPlanItem {
  id: string;
  badge?: string;
  name: string;
  price: string;
  priceNumeric: number;
  perSessionPrice?: string;
  savings?: string;
  savingsPercent?: string;
  sessionsCount: number;
  duration: string;
  isFree?: boolean;
  isFeatured?: boolean;
  features: string[];
  ctaText: string;
  whatsappMessage: string;
  conversionEvent: string;
}

export interface CommercialFaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface CommercialOfferData {
  eyebrow: string;
  title: string;
  subtitle: string;
  badge: string;
  ctaText: string;
  whatsappMessage: string;
  steps: {
    number: string;
    title: string;
    description: string;
  }[];
  frequencyNotice: {
    title: string;
    description: string;
  };
  practicalInfo: {
    location: string;
    duration: string;
    scheduling: string;
    freeSession: string;
    continuity: string;
  };
  plans: CommercialPlanItem[];
  faqs: CommercialFaqItem[];
}

export const COMMERCIAL_DATA: CommercialOfferData = {
  eyebrow: "ESPECIAL NOVEMBRO AZUL 2026",
  title: "Sua primeira Sessão Avaliativa com Laser por R$ 70.",
  subtitle:
    "Atendimento presencial de 40 minutos com avaliação individualizada, orientação e aplicação de laser terapêutico quando clinicamente indicada.",
  badge: "CONDIÇÃO DE NOVEMBRO: R$ 70",
  ctaText: "Agendar Sessão Avaliativa por R$ 70",
  whatsappMessage:
    "Olá, Lucy! Vi a campanha Novembro Azul no site e gostaria de agendar minha 1ª Sessão Avaliativa com Laser (valor especial de R$ 70) no consultório da Consolação.",
  steps: [
    {
      number: "1",
      title: "Entre em contato pelo WhatsApp",
      description: "Converse com Lucy Aihara e solicite o melhor dia e horário para seu atendimento inicial.",
    },
    {
      number: "2",
      title: "Compareça à sessão avaliativa",
      description:
        "Sessão de 40 minutos com avaliação e orientações profissionais; laser somente quando indicado e seguro.",
    },
    {
      number: "3",
      title: "Decida com total liberdade",
      description:
        "Caso tenha interesse e indicação profissional, conheça as opções de continuidade. Não há nenhuma obrigação de contratação.",
    },
  ],
  frequencyNotice: {
    title: "Frequência de atendimento",
    description:
      "Uma vez por semana ou conforme necessidade e avaliação profissional. A frequência e o número de sessões podem variar conforme o caso individual de cada paciente.",
  },
  practicalInfo: {
    location: "Rua Sergipe, 475, conjunto 114 — Consolação, São Paulo - SP (CEP 01243-912)",
    duration: "40 minutos por sessão",
    scheduling: "Agendamento pelo WhatsApp oficial",
    freeSession: "Sessão avaliativa de entrada por R$ 70; laser conforme indicação",
    continuity: "Continuidade opcional, conforme avaliação clínica e seu interesse",
  },
  plans: [
    {
      id: "plano-avaliativo-novembro",
      name: "Primeiro atendimento",
      badge: "Especial Novembro Azul: de R$ 150 por R$ 70",
      price: "R$ 70,00",
      priceNumeric: 70,
      sessionsCount: 1,
      duration: "40 minutos",
      isFree: false,
      features: [
        "1 sessão individualizada de 40 minutos",
        "Aplicação de laser terapêutico quando clinicamente indicada",
        "Avaliação e orientação profissional com Lucy Aihara",
        "Agendamento prévio necessário pelo WhatsApp",
        "Sem compromisso ou obrigação de contratação posterior",
      ],
      ctaText: "Agendar avaliação por R$ 70",
      whatsappMessage:
        "Olá, Lucy! Vi a campanha Novembro Azul no site e gostaria de agendar minha 1ª Sessão Avaliativa com Laser (valor especial de R$ 70) no consultório da Consolação.",
      conversionEvent: "atendimento_lead_avaliativa_70",
    },
    {
      id: "plano-individual",
      name: "Sessão individual",
      price: "R$ 120,00",
      priceNumeric: 120,
      sessionsCount: 1,
      duration: "40 minutos",
      features: [
        "Quantidade: 1 sessão avulsa",
        "Duração: 40 minutos por atendimento",
        "Aplicação de fotobiomodulação conforme indicação",
        "Atendimento presencial em Higienópolis / Consolação",
        "Ideal para manutenção pontual",
      ],
      ctaText: "Agendar sessão individual",
      whatsappMessage:
        "Olá, Lucy! Gostaria de agendar uma sessão individual de fotobiomodulação no valor de R$ 120,00.",
      conversionEvent: "atendimento_lead_individual",
    },
    {
      id: "plano-pacote-4",
      name: "Pacote de 4 sessões",
      badge: "Economia de R$ 90,00",
      price: "R$ 390,00",
      priceNumeric: 390,
      perSessionPrice: "R$ 97,50 por sessão",
      savings: "R$ 90,00 em relação a quatro sessões avulsas",
      savingsPercent: "18,75% de economia",
      sessionsCount: 4,
      duration: "40 minutos por sessão",
      features: [
        "Valor total: R$ 390,00 (equivalente a R$ 97,50 por sessão)",
        "Economia de R$ 90,00 (18,75%) em relação a sessões avulsas",
        "Duração: 40 minutos por sessão",
        "Frequência sugerida: 1 vez por semana ou sob avaliação",
        "Acompanhamento contínuo da resposta tecidual",
      ],
      ctaText: "Tenho interesse no pacote de 4 sessões",
      whatsappMessage:
        "Olá, Lucy! Tenho interesse no pacote de 4 sessões de fotobiomodulação por R$ 390,00.",
      conversionEvent: "atendimento_lead_pacote_4",
    },
    {
      id: "plano-pacote-8",
      name: "Pacote de 8 sessões",
      badge: "Maior economia: R$ 270,00",
      price: "R$ 690,00",
      priceNumeric: 690,
      perSessionPrice: "R$ 86,25 por sessão",
      savings: "R$ 270,00 em relação a oito sessões avulsas",
      savingsPercent: "28,13% de economia",
      sessionsCount: 8,
      duration: "40 minutos por sessão",
      isFeatured: true,
      features: [
        "Valor total: R$ 690,00 (equivalente a R$ 86,25 por sessão)",
        "Economia de R$ 270,00 (28,13%) em relação a sessões avulsas",
        "Duração: 40 minutos por sessão",
        "Acompanhamento estruturado de reabilitação e autocuidado",
        "Ajuste contínuo dos parâmetros conforme a evolução",
      ],
      ctaText: "Tenho interesse no pacote de 8 sessões",
      whatsappMessage:
        "Olá, Lucy! Tenho interesse no pacote de 8 sessões de fotobiomodulação por R$ 690,00.",
      conversionEvent: "atendimento_lead_pacote_8",
    },
  ],
  faqs: [
    {
      id: "faq-com-1",
      question: "Qual é a duração de cada sessão de atendimento?",
      answer:
        "A primeira Sessão Avaliativa tem duração prevista de 40 minutos. A aplicação de laser depende de indicação clínica individualizada.",
    },
    {
      id: "faq-com-2",
      question: "Qual é o valor promocional da primeira avaliação com laser?",
      answer:
        "A primeira Sessão Avaliativa de novembro custa R$ 70,00 (valor regular informado de R$ 150,00). Inclui avaliação e orientações, com aplicação de laser quando clinicamente indicada.",
    },
    {
      id: "faq-com-3",
      question: "Existe alguma obrigação de contratar um pacote após o primeiro atendimento?",
      answer:
        "Não. A avaliação inicial não exige fidelidade nem contratação de pacotes. Qualquer continuidade depende de indicação clínica e escolha da pessoa atendida.",
    },
    {
      id: "faq-com-4",
      question: "Qual é a frequência recomendada para os atendimentos?",
      answer:
        "Geralmente recomenda-se uma frequência de uma vez por semana, mas isso pode variar conforme a necessidade, os objetivos individuais e a avaliação profissional de Lucy Aihara.",
    },
    {
      id: "faq-com-5",
      question: "Como funciona a economia dos pacotes de 4 e 8 sessões?",
      answer:
        "A sessão avulsa tem o valor de R$ 120,00. No pacote de 4 sessões (R$ 390,00), o valor equivalente por sessão passa para R$ 97,50 (economia de R$ 90,00 ou 18,75%). No pacote de 8 sessões (R$ 690,00), o valor equivalente fica em R$ 86,25 (economia de R$ 270,00 ou 28,13%).",
    },
    {
      id: "faq-com-6",
      question: "A fotobiomodulação substitui o acompanhamento médico?",
      answer:
        "Não. A fotobiomodulação é uma técnica fisioterapêutica coadjuvante de reabilitação e alívio tecidual. Ela não cura nem substitui condutas médicas convencionais para diabetes mellitus ou câncer de próstata.",
    },
    {
      id: "faq-com-7",
      question: "Como faço para agendar meu horário?",
      answer:
        "Basta clicar no botão de WhatsApp do plano desejado. Você será direcionado para uma conversa direta com Lucy Aihara com a mensagem pré-preenchida para confirmar o horário disponível no consultório.",
    },
  ],
};
