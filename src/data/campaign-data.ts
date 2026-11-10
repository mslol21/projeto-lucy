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
      summary: "Uma data para promover a educação em saúde, desmistificar o diagnóstico e incentivar o acompanhamento precoce e humanizado.",
      href: "#diabetes",
    },
    menHealth: {
      day: "17 de Novembro",
      title: "Dia Nacional de Combate ao Câncer de Próstata",
      badge: "Saúde Integral Masculina",
      summary: "Espaço para quebrar tabus, incentivar o diálogo com profissionais de saúde e praticar a escuta atenta dos sinais do próprio corpo.",
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
    description: "Espaço dedicado à educação somática, fáscias corporais, percepção do movimento e promoção de autonomia no autocuidado.",
  },
};

export const NAV_LINKS: NavItem[] = [
  { label: "O Propósito", href: "/#datas" },
  { label: "Diabetes", href: "/#diabetes" },
  { label: "Neuropatia", href: "/#neuropatia" },
  { label: "Saúde Masculina", href: "/#saude-masculina" },
  { label: "O Corpo & Fascia", href: "/#corpo-atencao" },
  { label: "Mitos e Verdades", href: "/#mitos-verdades" },
  { label: "Centro de Conhecimento", href: "/conhecimento" },
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
    "Receber o diagnóstico de diabetes não é o fim da autonomia — é o começo de uma aliança consciente com o próprio corpo. Com informação qualificada, acesso ao tratamento e apoio compassivo, é plenamente viável viver com qualidade, vigor e bem-estar pleno.",
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
      desc: "As fáscias formam uma vasta rede viscoelástica de tecido conjuntivo que envolve músculos, órgãos e nervos. Quando aprendemos a escutar as microtensões e o movimento interno desse tecido, percebemos sinais sutis de estresse antes que se tornem dores crônicas.",
    },
    {
      title: "Movimento Consciente",
      desc: "O movimento não precisa ser exaustivo para ser transformador. Práticas suaves, com atenção plena ao ritmo respiratório e aos apoios dos pés, nutrem a circulação, acalmam o sistema nervoso e devolvem vitalidade aos tecidos.",
    },
    {
      title: "Acompanhamento Individualizado",
      desc: "Cada organismo tem uma história única de vida, postura e resiliência. O cuidado em saúde deve sempre acolher a individualidade de cada pessoa, sem fórmulas padronizadas e sem julgamentos.",
    },
    {
      title: "Respeito Aos Próprios Limites",
      desc: "Reconhecer quando o corpo pede descanso, hidratação ou investigação médica é a mais refinada expressão de inteligência biológica.",
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
      "De acordo com as diretrizes do Ministério da Saúde e do INCA, não se recomenda o rastreamento em massa de homens assintomáticos sem ponderação de riscos e benefícios. Homens com sintomas urinários devem sempre ser examinados. Para homens sem sintomas a partir dos 50 anos (ou 45 com histórico familiar), a indicação deve ser resultado de uma decisão compartilhada com o médico.",
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
      "A Fasciaterapia e o trabalho somático atuam na reorganização da tonicidade muscular, alívio de dores, melhora da consciência corporal e bem-estar global. Não possuem ação de cura de neoplasias ou de reversão primária de causas hormonais.",
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
