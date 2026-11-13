export type EvidenceLevel = 1 | 2 | 3 | 4;

export interface TableOfContentItem {
  id: string;
  title: string;
}

export interface ArticleReference {
  citation: string;
  type: "diretriz" | "estudo" | "livro" | "institucional";
  url?: string;
}

export interface KnowledgeArticle {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  category: "Método Somático" | "Saúde & Prevenção" | "Ciência & Fáscia" | "Institucional";
  readingTime: string;
  publishedAt: string;
  updatedAt: string;
  author: {
    name: string;
    role: string;
    institution: string;
  };
  evidenceBadge: {
    level: EvidenceLevel;
    label: string;
    description: string;
  };
  tableOfContents: TableOfContentItem[];
  medicalDisclaimer: string;
  sections: {
    id: string;
    title: string;
    evidenceLevel?: EvidenceLevel;
    content: string[];
    subsections?: {
      title: string;
      content: string[];
    }[];
  }[];
  references: ArticleReference[];
  relatedSlugs: string[];
}

export const EVIDENCE_LEVELS_INFO: Record<EvidenceLevel, { title: string; color: string; badgeBg: string; textBg: string; description: string }> = {
  1: {
    title: "Nível 1 — Evidência Estabelecida",
    color: "#17385B",
    badgeBg: "bg-[#17385B] text-white",
    textBg: "bg-blue-50 border-blue-200 text-blue-950",
    description: "Diretrizes clínicas oficiais, consensos médicos (SBD, INCA, OMS) e ensaios clínicos com alto rigor metodológico."
  },
  2: {
    title: "Nível 2 — Evidência Preliminar",
    color: "#2B5D88",
    badgeBg: "bg-[#2B5D88] text-white",
    textBg: "bg-sky-50 border-sky-200 text-sky-950",
    description: "Ensaios clínicos pilotos, estudos observacionais controlados e pesquisas acadêmicas (ex.: CERAP) com resultados positivos mas amostras restritas."
  },
  3: {
    title: "Nível 3 — Experiência Clínica Relatada",
    color: "#3B7A57",
    badgeBg: "bg-[#3B7A57] text-white",
    textBg: "bg-emerald-50 border-emerald-200 text-emerald-950",
    description: "Séries de casos, relatos de consultório e observações da prática terapêutica da Escola de Fasciaterapia e Movimento."
  },
  4: {
    title: "Nível 4 — Hipóteses em Pesquisa",
    color: "#6B5B95",
    badgeBg: "bg-[#6B5B95] text-white",
    textBg: "bg-purple-50 border-purple-200 text-purple-950",
    description: "Modelos teóricos e mecanísticos sobre a rede fascial, propriocepção e interocepção que aguardam investigação empírica aprofundada."
  }
};

export const KNOWLEDGE_ARTICLES: KnowledgeArticle[] = [
  {
    slug: "metodo-danis-bois",
    title: "O Método Danis Bois e a Fasciaterapia: Origem, Fundamentos e Prática",
    subtitle: "Uma abordagem psicocorporal e sensorial francesa fundamentada no toque sutil, na escuta do tecido fascial e no movimento consciente.",
    summary: "Conheça a história da fasciaterapia do Método Danis Bois (MDB), seus quatro pilares de intervenção, a diferença em relação a técnicas de manipulação agressiva e o que as pesquisas acadêmicas mostram sobre a percepção corporal.",
    category: "Método Somático",
    readingTime: "7 min de leitura",
    publishedAt: "01 de Novembro de 2026",
    updatedAt: "09 de Novembro de 2026",
    author: {
      name: "Escola de Fasciaterapia e Movimento",
      role: "Equipe Editorial & Lucy Aihara (Fisioterapeuta e Fasciaterapeuta)",
      institution: "Escola de Fasciaterapia e Movimento"
    },
    evidenceBadge: {
      level: 2,
      label: "Evidência Preliminar e Experiência Clínica",
      description: "Fundamentado em estudos somáticos acadêmicos do CERAP e décadas de observação clínica na Europa e América Latina."
    },
    tableOfContents: [
      { id: "origem-historica", title: "1. Origem Histórica na França" },
      { id: "quatro-pilares", title: "2. Os Quatro Pilares do Método" },
      { id: "diferenciacao-tecnica", title: "3. Diferenciação de Outras Terapias Manuais" },
      { id: "o-que-a-ciencia-mostra", title: "4. O que a Literatura Científica Aponta" },
      { id: "limites-e-etica", title: "5. Limitações Metodológicas e Rigor Ético" }
    ],
    medicalDisclaimer: "A Fasciaterapia e o Método Danis Bois são abordagens de educação somática e terapia manual integrativa que promovem relaxamento, propriocepção e alívio do desconforto corporal. Não substituem diagnósticos médicos, tratamentos farmacológicos, cirúrgicos ou fisioterapia convencional para afecções sistêmicas.",
    sections: [
      {
        id: "origem-historica",
        title: "1. Origem Histórica na França",
        evidenceLevel: 2,
        content: [
          "O Método Danis Bois (MDB), também conhecido como Fasciaterapia e Somatopsicopedagogia, teve sua gênese na França durante a década de 1980, concebido pelo fisioterapeuta e osteopata francês Danis Bois.",
          "Ao longo de sua prática clínica, Danis Bois observou que os tecidos conectivos do corpo — as fáscias — respondem não apenas a forças mecânicas vigorosas, mas exibem uma micromobilidade interna e sutil, intimamente conectada à atenção e ao estado emocional do indivíduo.",
          "Posteriormente, Bois doutorou-se em Ciências da Educação e fundou o Centro de Estudos e Pesquisa Aplicada em Psicopedagogia Perceptiva (CERAP), vinculado à Universidade Fernando Pessoa, em Portugal, estabelecendo um arcabouço metodológico para estudar a experiência do corpo vivo (corporalidade)."
        ]
      },
      {
        id: "quatro-pilares",
        title: "2. Os Quatro Pilares do Método Danis Bois",
        evidenceLevel: 3,
        content: [
          "A prática não se resume a uma massagem ou manobra isolada. O método é estruturado em quatro modalidades terapêuticas e pedagógicas complementares:",
          "1. Toque Manual Fascial: Um toque sutil, preciso e sem pressão agressiva. O profissional não força o tecido, mas 'escuta' com as mãos as restrições de mobilidade e acompanha o ritmo interno da fáscia para restabelecer a fluidez tecidual.",
          "2. Ginástica Sensorial (Movimento Consciência): Exercícios lentos, contínuos e sem esforço excessivo que reeducam a coordenação motora, expandem a amplitude articular e diminuem compensações posturais dolorosas.",
          "3. Introspecção Sensorial: Uma prática meditativa e perceptiva focada na atenção interna, onde o paciente aprende a silenciar o ruído mental e mapear as sensações reais do seu corpo no presente.",
          "4. Entrevista Verbal Formativa: O diálogo entre terapeuta e participante que transforma a sensação física em consciência verbal e integração cognitiva."
        ]
      },
      {
        id: "diferenciacao-tecnica",
        title: "3. Diferenciação de Outras Abordagens Manuais",
        evidenceLevel: 2,
        content: [
          "É comum haver confusão entre a Fasciaterapia do Método Danis Bois e outras abordagens voltadas à fáscia. É fundamental esclarecer as diferenças:",
          "• Não é Liberação Miofascial Esportiva: A liberação miofascial comum frequentemente utiliza rolos rígidos, ventosas e pressões profundas com o objetivo de quebrar aderências ou 'pontos-gatilho', podendo provocar dor momentânea. A Fasciaterapia do MDB atua na faixa de baixa intensidade sensorial, respeitando o limiar de conforto do sistema nervoso.",
          "• Não é Rolfing ou Integração Estrutural: Embora compartilhem o fascínio pela continuidade fascial, o Rolfing tem foco predominante no alinhamento gravitacional através de protocolos sistemáticos de manipulação tecidual. O MDB enfatiza a autorregulação do movimento interno e a pedagogia perceptiva.",
          "• Sem Promessas Mágicas: No Brasil e no mundo, a Escola de Fasciaterapia e Movimento preza pela integridade, sem prometer desbloqueios milagrosos ou curas instantâneas de condições metabólicas ou neurológicas."
        ]
      },
      {
        id: "o-que-a-ciencia-mostra",
        title: "4. O que a Literatura Científica Aponta",
        evidenceLevel: 2,
        content: [
          "Estudos desenvolvidos no âmbito do CERAP e publicados em periódicos de terapias corporais e ciências sociais da saúde demonstram que as intervenções baseadas no Método Danis Bois estão associadas a:",
          "• Redução estatisticamente perceptível de dores musculoesqueléticas inespecíficas (lombalgias e cervicalgias funcionais).",
          "• Diminuição de marcadores subjetivos de ansiedade, estresse e hiperatividade simpática.",
          "• Aprimoramento da consciência interoceptiva e proprioceptiva, permitindo que a pessoa identifique precocemente sinais de fadiga e tensão corporal antes que se tornem lesões incapacitantes."
        ]
      },
      {
        id: "limites-e-etica",
        title: "5. Limitações Metodológicas e Rigor Ético",
        evidenceLevel: 1,
        content: [
          "Como em muitas intervenções somáticas, é preciso manter sobriedade epistemológica: boa parte dos estudos acadêmicos existentes conta com amostras de conveniência e foco na experiência qualitativa do paciente.",
          "Não há evidências de que a Fasciaterapia cure patologias orgânicas, altere a glicemia de forma direta ou elimine a necessidade de condutas médicas preconizadas.",
          "O valor da abordagem reside na humanização do cuidado, na restauração do diálogo entre a mente e o corpo e no conforto físico de pessoas convivendo com dores crônicas."
        ]
      }
    ],
    references: [
      {
        citation: "Bois, D. (2007). Le moi renouvelé: introduction à la somato-psychopédagogie. Point d'Appui.",
        type: "livro"
      },
      {
        citation: "Courraud, C. (2012). Fasciathérapie et toucher de relation dans l'accompagnement des personnes douloureuses chroniques. Réciprocités, 6, 24-38.",
        type: "estudo"
      },
      {
        citation: "Schleip, R., Findley, T. W., Chaitow, L., & Huijing, P. A. (2012). Fascia: The Tensional Network of the Human Body. Elsevier Health Sciences.",
        type: "livro"
      }
    ],
    relatedSlugs: ["fasciaterapia-e-dor", "neuropatia-diabetica", "evidencias-cientificas", "lucy-aihara"]
  },
  {
    slug: "neuropatia-diabetica",
    title: "Neuropatia Diabética: Compreendendo a Dor Invisível e a Importância da Sensibilidade",
    subtitle: "Da fisiopatologia das fibras nervosas à prevenção do pé diabético e ao papel da percepção corporal no autocuidado.",
    summary: "Entenda o que é a neuropatia diabética periférica, por que ela pode causar queimação intensa ou passar totalmente imperceptível, como funciona o teste com monofilamento e quais as medidas essenciais de proteção.",
    category: "Saúde & Prevenção",
    readingTime: "8 min de leitura",
    publishedAt: "01 de Novembro de 2026",
    updatedAt: "09 de Novembro de 2026",
    author: {
      name: "Escola de Fasciaterapia e Movimento",
      role: "Revisão Educativa Institucional",
      institution: "Escola de Fasciaterapia e Movimento"
    },
    evidenceBadge: {
      level: 1,
      label: "Evidência Estabelecida — Diretrizes SBD",
      description: "Conteúdo estritamente alinhado às Diretrizes Oficiais da Sociedade Brasileira de Diabetes e Ministério da Saúde."
    },
    tableOfContents: [
      { id: "o-que-e-neuropatia", title: "1. O que é a Neuropatia Diabética Periférica?" },
      { id: "sintomas-e-formas", title: "2. Os Sinais de Alerta: Dos Formigamentos ao Silêncio" },
      { id: "perigo-silencioso", title: "3. O Perigo da Perda de Sensibilidade Protetora" },
      { id: "rastreamento-monofilamento", title: "4. Como é Feita a Avaliação: Teste do Monofilamento" },
      { id: "prevencao-autocuidado", title: "5. Guia Prático de Cuidado com os Pés" },
      { id: "perspectiva-somatica", title: "6. A Visão Somática: Reencontrar o Próprio Corpo" }
    ],
    medicalDisclaimer: "Este conteúdo tem finalidade estritamente educativa. A neuropatia diabética requer diagnóstico e acompanhamento com endocrinologista, neurologista e equipe multidisciplinar. Jamais interrompa medicamentos ou altere seu tratamento glicêmico sem orientação profissional.",
    sections: [
      {
        id: "o-que-e-neuropatia",
        title: "1. O que é a Neuropatia Diabética Periférica?",
        evidenceLevel: 1,
        content: [
          "A neuropatia diabética é uma das complicações crônicas mais frequentes do diabetes mellitus tipo 1 e tipo 2. Trata-se de um conjunto de distúrbios que acometem os nervos periféricos do corpo humano.",
          "Quando os níveis de glicose no sangue permanecem elevados por períodos prolongados (hiperglicemia crônica), ocorrem alterações metabólicas e microvasculares nos vasos diminutos que irrigam os nervos (os vasa nervorum).",
          "Essa isquemia e o acúmulo de subprodutos oxidativos provocam danos progressivos à bainha de mielina e aos axônios dos neurônios, prejudicando a condução dos impulsos nervosos — especialmente nos membros inferiores, das pontas dos dedos dos pés até as pernas (distribuição típica 'em meia ou bota')."
        ]
      },
      {
        id: "sintomas-e-formas",
        title: "2. Os Sinais de Alerta: Dos Formigamentos ao Silêncio",
        evidenceLevel: 1,
        content: [
          "A apresentação da neuropatia pode variar profundamente entre indivíduos. Classicamente, divide-se os sintomas em duas formas principais:",
          "• Sintomas Positivos (Sensações Desagradáveis): Queimação, pontadas, choques elétricos, formigamento (parestesia), sensação de 'areia nos pés' e dor que piora predominantemente no período noturno, ao deitar.",
          "• Alodinia e Hiperestesia: Situações em que o simples contato do lençol sobre os pés ou calçar uma meia comum desperta uma dor excruciante.",
          "• Sintomas Negativos (Perda de Sensações): Diminuição ou ausência completa da sensibilidade à temperatura (não sentir calor ou frio extremo), à vibração e à dor."
        ]
      },
      {
        id: "perigo-silencioso",
        title: "3. O Perigo da Perda de Sensibilidade Protetora",
        evidenceLevel: 1,
        content: [
          "O maior risco clínico da neuropatia não reside apenas na dor que se sente, mas na dor que NÃO se sente.",
          "Quando as fibras sensoriais perdem a capacidade de transmitir dor, o indivíduo perde a 'sensibilidade protetora'. Isso significa que um sapato apertado, uma pedra minúscula dentro do calçado, uma dobra na meia ou uma queimadura de asfalto quente não causam desconforto imediato.",
          "Sem o alerta biológico da dor, lesões e calosidades evoluem silenciosamente para bolhas, úlceras complexas e infecções graves, constituindo a principal causa de amputações de membros inferiores não traumáticas no Brasil."
        ]
      },
      {
        id: "rastreamento-monofilamento",
        title: "4. Como é Feita a Avaliação: Teste do Monofilamento 10g",
        evidenceLevel: 1,
        content: [
          "As diretrizes da Sociedade Brasileira de Diabetes recomendam que todo paciente com diabetes tipo 2 passe por um exame minucioso dos pés no momento do diagnóstico e anualmente a partir de então; para o tipo 1, a partir de 5 anos de evolução da doença.",
          "O teste mais prático, indolor e padronizado mundialmente é o teste do Monofilamento de Semmes-Weinstein (filamento de náilon de 10 gramas).",
          "O profissional toca pontos anatômicos estratégicos na sola e no dorso do pé do paciente (que permanece com os olhos fechados). Se a pessoa não sentir a pressão correspondente à curvatura do filamento em determinados pontos, há perda de sensibilidade protetora, exigindo cuidados redobrados imediatos."
        ]
      },
      {
        id: "prevencao-autocuidado",
        title: "5. Guia Prático de Cuidado com os Pés",
        evidenceLevel: 1,
        content: [
          "Medidas comprovadas que reduzem drasticamente complicações:",
          "1. Inspeção diária: Olhe a sola dos pés, calcanhares e entre os dedos todos os dias (utilize um espelho de chão ou peça auxílio de um familiar).",
          "2. Higiene e hidratação cuidadosas: Lave com água morna (sempre teste a temperatura da água com o cotovelo ou termômetro, nunca com os pés). Seque muito bem entre os dedos para evitar micoses. Hidrate o calcanhar e dorso, mas não aplique creme entre os dedos.",
          "3. Verifique sempre o calçado: Antes de calçar tênis ou sapatos, passe a mão por dentro para garantir que não há pedriscos, costuras soltas ou palmilhas dobradas.",
          "4. Jamais ande descalço: Nem mesmo em casa ou na areia da praia.",
          "5. Corte reto das unhas: Nunca retire cutículas profundamente ou use lâminas em casa. Em caso de unhas encravadas, procure um podólogo com formação clínica ou enfermagem especializada."
        ]
      },
      {
        id: "perspectiva-somatica",
        title: "6. A Visão Somática: Reencontrar o Próprio Corpo",
        evidenceLevel: 3,
        content: [
          "Na Escola de Fasciaterapia e Movimento, compreendemos o sofrimento psicológico de quem convive com a dor neuropática ou com o distanciamento da própria sensibilidade.",
          "Muitas vezes, a pessoa com neuropatia passa a encarar seus pés e pernas com medo, desconfiança ou resignação. O acompanhamento somático pelo Método Danis Bois não tem como objetivo 'curar os axônios lesados', mas sim auxiliar o indivíduo a restabelecer uma relação afetuosa, segura e consciente com seu corpo como um todo.",
          "Por meio de toques sutis e movimentos conscientes de tronco, pelve e membros, busca-se amenizar a ansiedade associada à dor crônica e devolver ao paciente a sensação de integridade e pertencimento de seu corpo."
        ]
      }
    ],
    references: [
      {
        citation: "Sociedade Brasileira de Diabetes (SBD). Diretrizes da Sociedade Brasileira de Diabetes 2024-2025. Rastreamento e Manejo da Neuropatia Diabética.",
        type: "diretriz",
        url: "https://diretriz.diabetes.org.br"
      },
      {
        citation: "Boulton, A. J., et al. (2020). Diabetic Neuropathies: A Position Statement by the American Diabetes Association. Diabetes Care.",
        type: "diretriz"
      },
      {
        citation: "Brasil. Ministério da Saúde. Manual do Pé Diabético: Estratégias para o cuidado da pessoa com doença crônica. Brasília, 2016.",
        type: "institucional"
      }
    ],
    relatedSlugs: ["metodo-danis-bois", "fasciaterapia-e-dor", "evidencias-cientificas"]
  },
  {
    slug: "fasciaterapia-e-dor",
    title: "A Fáscia, a Sensibilidade e as Dores Crônicas: Uma Conexão Essencial",
    subtitle: "Por que o tecido conjuntivo que envolve músculos, órgãos e nervos é considerado o maior órgão sensorial do corpo humano.",
    summary: "Descubra o papel da fáscia na transmissão de forças, na propriocepção e na percepção da dor. Entenda como o estresse contínuo altera a elasticidade fascial e de que modo a abordagem somática auxilia no manejo das tensões.",
    category: "Ciência & Fáscia",
    readingTime: "6 min de leitura",
    publishedAt: "01 de Novembro de 2026",
    updatedAt: "09 de Novembro de 2026",
    author: {
      name: "Escola de Fasciaterapia e Movimento",
      role: "Equipe de Educação Somática",
      institution: "Escola de Fasciaterapia e Movimento"
    },
    evidenceBadge: {
      level: 2,
      label: "Evidência Preliminar & Pesquisa Anatômica",
      description: "Baseado em descobertas contemporâneas da biologia fascial (Fascia Research Congress) e modelos somatopsicopedagógicos."
    },
    tableOfContents: [
      { id: "o-que-e-fascia", title: "1. O que é a Fáscia?" },
      { id: "orgao-sensorial", title: "2. A Fáscia como Rede de Comunicação Sensorial" },
      { id: "ciclo-dor-tensao", title: "3. O Ciclo de Dor, Rigidez e Ansiedade" },
      { id: "escuta-somatica", title: "4. A Escuta do Tecido no Método Danis Bois" },
      { id: "cuidados-integrativos", title: "5. A Fáscia no Dia a Dia: Dicas de Consciência Corporal" }
    ],
    medicalDisclaimer: "As informações deste texto abordam princípios biomecânicos e somáticos da fáscia humana. Casos de dor crônica incapacitante necessitam de investigação com médicos reumatologistas, ortopedistas ou neurologistas para afastar patologias estruturais.",
    sections: [
      {
        id: "o-que-e-fascia",
        title: "1. O que é a Fáscia?",
        evidenceLevel: 1,
        content: [
          "Historicamente tratada nos laboratórios de anatomia como mero tecido de preenchimento ou 'embalagem' a ser descartada para expor os músculos, a fáscia ganhou nas últimas décadas o merecido protagonismo na medicina moderna.",
          "A fáscia é uma teia contínua tridimensional de tecido conjuntivo fibroso e viscoelástico (composta por colágeno, elastina e matriz extracelular aquosa rica em hialuronano) que envelopa e interliga todos os músculos, ossos, vasos e órgãos, desde o topo da cabeça até a ponta dos pés, sem interrupção anatômica."
        ]
      },
      {
        id: "orgao-sensorial",
        title: "2. A Fáscia como Rede de Comunicação Sensorial",
        evidenceLevel: 2,
        content: [
          "Pesquisadores internacionais como o Dr. Robert Schleip e a Profa. Carla Stecco demonstraram que a fáscia é ricamente inervada, abrigando milhões de terminações nervosas livres, corpúsculos de Ruffini, Pacini e mecanorreceptores intersticiais.",
          "Estima-se que haja até seis vezes mais receptores sensoriais na rede fascial do que nos próprios músculos. Por essa razão, a ciência hoje considera a fáscia como o mais extenso órgão proprioceptivo e interoceptivo do corpo humano.",
          "Ela informa ao cérebro não apenas onde nossos membros estão no espaço, mas o tônus basal, o grau de segurança e o nível de tensão ao qual estamos submetidos."
        ]
      },
      {
        id: "ciclo-dor-tensao",
        title: "3. O Ciclo de Dor, Rigidez e Ansiedade",
        evidenceLevel: 2,
        content: [
          "Sob estresse emocional contínuo, sedentarismo prolongado ou após traumas mecânicos, a matriz fascial perde parte de sua hidratação e fluidez. As camadas fasciais deixam de deslizar suavemente entre si, fenômeno conhecido como densificação do ácido hialurônico.",
          "Essa perda de deslizamento irrita os mecanorreceptores e nociceptores, enviando sinais constantes de alarme ao sistema nervoso central.",
          "O organismo responde aumentando o tônus defensivo (tensão involuntária), gerando fadiga muscular, perda de flexibilidade e sensação crônica de 'corpo travado' ou dor difusa."
        ]
      },
      {
        id: "escuta-somatica",
        title: "4. A Escuta do Tecido no Método Danis Bois",
        evidenceLevel: 3,
        content: [
          "Diferente de manobras que tentam vencer a rigidez muscular na base da força, a Fasciaterapia da Escola adota uma postura de cooperação com a fisiologia do tecido.",
          "O toque do terapeuta atua como um ponto de apoio acolhedor. Ao sustentar o tecido no seu ponto de equilíbrio e acompanhar o movimento interno imperceptível aos olhos desatentos, permite-se que o sistema nervoso parassimpático reduza a hiperatividade protetora.",
          "À medida que a fáscia readquire hidratação e maleabilidade, muitos pacientes relatam alívio na sensação de peso, desbloqueio da respiração diafragmática e sensação profunda de restauração física."
        ]
      },
      {
        id: "cuidados-integrativos",
        title: "5. A Fáscia no Dia a Dia: Dicas de Consciência Corporal",
        evidenceLevel: 1,
        content: [
          "Para preservar a saúde de suas fáscias no cotidiano:",
          "• Hidratação regular: A matriz fascial necessita de água para manter sua propriedade lubrificante.",
          "• Movimento variado e tridimensional: Evite passar horas na mesma postura rígida. Espreguice-se devagar, faça movimentos espiralados e alongamentos gentis sem rebote.",
          "• Pausas respiratórias: Ao longo do dia de trabalho, faça 3 respirações lentas e profundas, percebendo a expansão da caixa torácica e das costas."
        ]
      }
    ],
    references: [
      {
        citation: "Stecco, C. (2014). Functional Atlas of the Human Fascial System. Elsevier Health Sciences.",
        type: "livro"
      },
      {
        citation: "Schleip, R., & Müller, D. G. (2013). Training principles for fascial connective tissues: Scientific foundation and suggested practical applications. Journal of Bodywork and Movement Therapies, 17(1), 103-115.",
        type: "estudo"
      },
      {
        citation: "Bois, D., & Ausseur, N. (2001). Vers une thérapie manuelle de l'attention et de la présence. Mains Libres.",
        type: "estudo"
      }
    ],
    relatedSlugs: ["metodo-danis-bois", "neuropatia-diabetica", "evidencias-cientificas"]
  },
  {
    slug: "evidencias-cientificas",
    title: "Evidências Científicas: Critérios, Estado da Arte e Transparência",
    subtitle: "Como a Escola de Fasciaterapia e Movimento classifica a literatura e preserva a honestidade intelectual perante o público.",
    summary: "Uma prestação de contas transparente sobre o que a ciência já comprovou com robustez, o que representa evidência preliminar promissora e o que constitui experiência clínica na área somática e na saúde integrativa.",
    category: "Ciência & Fáscia",
    readingTime: "7 min de leitura",
    publishedAt: "01 de Novembro de 2026",
    updatedAt: "09 de Novembro de 2026",
    author: {
      name: "Escola de Fasciaterapia e Movimento",
      role: "Conselho Editorial & Científico",
      institution: "Escola de Fasciaterapia e Movimento"
    },
    evidenceBadge: {
      level: 1,
      label: "Metodologia Científica e Ética",
      description: "Classificação baseada em critérios epidemiológicos formais (Oxford Centre for Evidence-Based Medicine)."
    },
    tableOfContents: [
      { id: "compromisso-etico", title: "1. O Nosso Compromisso Ético" },
      { id: "matriz-quatro-niveis", title: "2. A Matriz dos Quatro Níveis de Informação" },
      { id: "estudos-danis-bois", title: "3. O Corpo de Pesquisa do CERAP e MDB" },
      { id: "o-que-nao-se-deve-afirmar", title: "4. O que NUNCA Deve Ser Afirmado" },
      { id: "futuro-da-pesquisa", title: "5. As Fronteiras Futuras da Pesquisa em Fáscia" }
    ],
    medicalDisclaimer: "A Escola de Fasciaterapia e Movimento não endossa tratamentos experimentais como substitutos da medicina alopática comprovada. Nossos materiais são elaborados em conformidade com as boas práticas de comunicação pública em saúde.",
    sections: [
      {
        id: "compromisso-etico",
        title: "1. O Nosso Compromisso Ético",
        evidenceLevel: 1,
        content: [
          "No campo da saúde e do bem-estar, a fronteira entre esperança terapêutica genuína e promessas infundadas deve ser guardada com rigor inegociável.",
          "A Escola de Fasciaterapia e Movimento adota uma política de comunicação transparente, repelindo qualquer sensacionalismo que atribua propriedades curativas milagrosas à terapia manual ou que induza pacientes com condições crônicas a negligenciar tratamentos médicos convencionais."
        ]
      },
      {
        id: "matriz-quatro-niveis",
        title: "2. A Matriz dos Quatro Níveis de Informação",
        evidenceLevel: 1,
        content: [
          "Para orientar o público e os profissionais de saúde, todas as alegações institucionais da escola são categorizadas em quatro níveis:",
          "• Nível 1 — Evidência Estabelecida: Dados corroborados por diretrizes clínicas consolidadas, revisões sistemáticas com metanálise ou diretrizes de entidades de referência (Sociedade Brasileira de Diabetes, Instituto Nacional de Câncer, Cochrane Collaboration). Exemplo: o rastreamento com monofilamento para prevenção do pé diabético.",
          "• Nível 2 — Evidência Preliminar: Estudos clínicos pilotos, pesquisas com grupos controle de pequeno porte e teses de pós-graduação acadêmica (como as produzidas no CERAP/Universidade Fernando Pessoa). Apontam benefícios em dor crônica funcional e estresse, mas exigem amostras maiores para generalização estatística definitiva.",
          "• Nível 3 — Experiência Clínica Relatada: Observações qualitativas consistentes colhidas ao longo de décadas de prática em consultório por profissionais habilitados, descrevendo respostas positivas no bem-estar, na amplitude articular e na autopercepção.",
          "• Nível 4 — Hipóteses Teóricas em Pesquisa: Modelos biomecânicos e neurofisiológicos sobre a condutividade hialurônica, piezoelectricidade fascial e sinalização interoceptiva que continuam em debate e validação laboratorial."
        ]
      },
      {
        id: "estudos-danis-bois",
        title: "3. O Corpo de Pesquisa do CERAP e MDB",
        evidenceLevel: 2,
        content: [
          "O Centro de Estudos e Pesquisa Aplicada em Psicopedagogia Perceptiva (CERAP) coordenou diversas dissertações de mestrado e teses de doutorado examinando:",
          "• O impacto do toque fascial na modulação da dor em indivíduos com queixas osteoarticulares.",
          "• O papel da ginástica sensorial no aprimoramento do esquema corporal e na redução da ansiedade somatizada.",
          "• A fenomenologia da presença corporal através da entrevista sensorial.",
          "Esses estudos possuem valor científico ao documentar a experiência em primeira pessoa e mapear respostas fisiológicas preliminares, embora não devam ser equiparados a ensaios farmacológicos duplo-cegos."
        ]
      },
      {
        id: "o-que-nao-se-deve-afirmar",
        title: "4. O que NUNCA Deve Ser Afirmado",
        evidenceLevel: 1,
        content: [
          "Em conformidade com as normativas sanitárias e os códigos deontológicos da Fisioterapia:",
          "1. Jamais afirmamos que a fasciaterapia cura, reverte ou impede o surgimento do diabetes mellitus ou de suas complicações vasculares.",
          "2. Jamais afirmamos que o toque fascial substitui a insulina, medicações hipoglicemiantes ou exames laboratoriais regulares.",
          "3. Jamais extrapolamos resultados observados em dor musculoesquelética para prometer regeneração axonal em neuropatia diabética periférica.",
          "4. Jamais declaramos que a prática previne ou trata o câncer de próstata ou qualquer neoplasia maligna."
        ]
      },
      {
        id: "futuro-da-pesquisa",
        title: "5. As Fronteiras Futuras da Pesquisa em Fáscia",
        evidenceLevel: 4,
        content: [
          "O surgimento da Fascia Research Society e a realização periódica do Congresso Internacional de Pesquisa em Fáscia abriram novas portas de diálogo entre anatomistas, cirurgiões plásticos, fisioterapeutas e neurocientistas.",
          "A compreensão da fáscia como um sistema contínuo e inteligente de transmissão mecânica e sensória está redefinindo os paradigmas do movimento, da reabilitação e da medicina preventiva moderna."
        ]
      }
    ],
    references: [
      {
        citation: "Oxford Centre for Evidence-Based Medicine (OCEBM). Levels of Evidence Working Group. The Oxford 2011 Levels of Evidence.",
        type: "diretriz",
        url: "https://www.cebm.ox.ac.uk"
      },
      {
        citation: "Berger, E. (2017). Somatopsychopédagogie et recherche qualitative: vers une science de l'expérience corporelle. Réciprocités.",
        type: "estudo"
      },
      {
        citation: "Conselho Federal de Fisioterapia e Terapia Ocupacional (COFFITO). Código de Ética e Deontologia da Fisioterapia.",
        type: "institucional"
      }
    ],
    relatedSlugs: ["metodo-danis-bois", "neuropatia-diabetica", "fasciaterapia-e-dor", "lucy-aihara"]
  },
  {
    slug: "lucy-aihara",
    title: "Lucy Aihara: Trajetória, Formação e Propósito na Escola de Fasciaterapia",
    subtitle: "Fisioterapeuta, educadora física e pioneira na formação e difusão do Método Danis Bois e do cuidado somático no Brasil.",
    summary: "Conheça o percurso profissional de Lucy Aihara, sua sólida formação acadêmica, a experiência em instituições de excelência como o InCor / HCFMUSP e sua dedicação em ensinar uma relação de escuta e respeito com o próprio corpo.",
    category: "Institucional",
    readingTime: "5 min de leitura",
    publishedAt: "01 de Novembro de 2026",
    updatedAt: "09 de Novembro de 2026",
    author: {
      name: "Escola de Fasciaterapia e Movimento",
      role: "Equipe Editorial",
      institution: "Escola de Fasciaterapia e Movimento"
    },
    evidenceBadge: {
      level: 3,
      label: "Perfil Biográfico Oficial",
      description: "Informações curriculares e institucionais conferidas diretamente com os registros da fundadora."
    },
    tableOfContents: [
      { id: "quem-e-lucy", title: "1. Quem é Lucy Aihara" },
      { id: "formacao-e-atuacao", title: "2. Formação Acadêmica e Atuação no HCFMUSP" },
      { id: "encontro-com-o-metodo", title: "3. O Encontro com a Fasciaterapia e o Método Danis Bois" },
      { id: "fundacao-da-escola", title: "4. A Fundação da Escola de Fasciaterapia e Movimento" },
      { id: "principios-e-etica", title: "5. Princípios de Atendimento e Compromisso Social" }
    ],
    medicalDisclaimer: "Lucy Aihara atua no âmbito de suas habilitações legais em Fisioterapia, Educação Física e Terapias Somáticas. Seus atendimentos e cursos promovem educação perceptiva e reabilitação funcional, respeitando integralmente o escopo médico interdisciplinar.",
    sections: [
      {
        id: "quem-e-lucy",
        title: "1. Quem é Lucy Aihara",
        evidenceLevel: 3,
        content: [
          "Lucy Aihara é fisioterapeuta, educadora física e uma das principais referências na prática e no ensino da Fasciaterapia e do Método Danis Bois no Brasil.",
          "Fundadora da Escola de Fasciaterapia e Movimento, em São Paulo, Lucy dedica sua vida profissional a auxiliar pessoas a reconquistarem a mobilidade natural, aliviarem dores crônicas e construírem uma convivência de paz, presença e respeito com seus corpos."
        ]
      },
      {
        id: "formacao-e-atuacao",
        title: "2. Formação Acadêmica e Atuação no HCFMUSP",
        evidenceLevel: 3,
        content: [
          "Com dupla graduação em Fisioterapia e Educação Física, Lucy consolidou sua bagagem técnica no cuidado de pacientes com diversas complexidades clínicas.",
          "Atuou profissionalmente em centros médicos de excelência internacional, com destaque para sua vivência clínica no Instituto Central do Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (IC-HCFMUSP) e no Instituto do Coração (InCor).",
          "Essa vivência em ambiente hospitalar de alta complexidade forneceu-lhe uma sólida base de rigor ético, discernimento diagnóstico e respeito incondicional aos protocolos científicos estabelecidos."
        ]
      },
      {
        id: "encontro-com-o-metodo",
        title: "3. O Encontro com a Fasciaterapia e o Método Danis Bois",
        evidenceLevel: 3,
        content: [
          "Ao longo de sua trajetória clínica, Lucy percebeu que muitas queixas dolorosas não respondiam satisfatoriamente a manobras puramente mecânicas, revelando um forte componente de estresse acumulado e descompasso perceptivo.",
          "Essa busca a levou à especialização internacional na Fasciaterapia do Método Danis Bois e na Somatopsicopedagogia, estudando diretamente com as equipes formadoras associadas ao Prof. Danis Bois e às entidades europeias de referência.",
          "Encantada pela suavidade, precisão e profundidade do método, Lucy incorporou o toque sutil e a ginástica sensorial como pilares centrais de seu trabalho clínico e pedagógico."
        ]
      },
      {
        id: "fundacao-da-escola",
        title: "4. A Fundação da Escola de Fasciaterapia e Movimento",
        evidenceLevel: 3,
        content: [
          "A criação da Escola de Fasciaterapia e Movimento nasceu da vontade de democratizar o acesso a esse conhecimento no Brasil.",
          "A Escola opera como um núcleo de atendimento clínico individualizado (localizado no bairro de Higienópolis / Consolação, em São Paulo) e simultaneamente como um polo de formação, grupos de estudo e oficinas de movimento para fisioterapeutas, terapeutas corporais e praticantes leigos.",
          "Sob o lema 'Cuidar de si é também aprender a se conhecer', a Escola defende que o aprendizado do corpo é um patrimônio de saúde preventiva que acompanha o indivíduo por toda a vida."
        ]
      },
      {
        id: "principios-e-etica",
        title: "5. Princípios de Atendimento e Compromisso Social",
        evidenceLevel: 1,
        content: [
          "Lucy Aihara conduz seu trabalho sob princípios estritos:",
          "• Não mercantilização do sofrimento: Sem promessas falsas de cura rápida para doenças crônicas ou degenerativas.",
          "• Diálogo interdisciplinar: Atuação integrada com os médicos assistentes, nutricionistas e psicólogos que acompanham o paciente.",
          "• Compromisso educativo: Campanhas de utilidade pública como o Novembro Azul 2026, levando conscientização qualificada sobre diabetes, prevenção ao câncer e saúde integral a milhares de cidadãos."
        ]
      }
    ],
    references: [
      {
        citation: "Conselho Regional de Fisioterapia e Terapia Ocupacional da 3ª Região (CREFITO-3). Registro Profissional.",
        type: "institucional"
      },
      {
        citation: "Hospital das Clínicas da Faculdade de Medicina da USP (HCFMUSP). Instituto Central e Instituto do Coração (InCor).",
        type: "institucional"
      },
      {
        citation: "Escola de Fasciaterapia e Movimento. Acervo institucional e diretrizes pedagógicas.",
        type: "institucional",
        url: "https://www.escoladefasciaterapiaemovimento.com/"
      }
    ],
    relatedSlugs: ["metodo-danis-bois", "fasciaterapia-e-dor", "neuropatia-diabetica", "evidencias-cientificas", "fotobiomodulacao"]
  },
  {
    slug: "fotobiomodulacao",
    title: "Fotobiomodulação: Princípios da Terapia por Luz, Aplicações e Evidências Científicas",
    subtitle: "Compreenda como a luz de baixa intensidade em comprimentos de onda específicos interage com os tecidos celulares e quais os limites clínicos na reabilitação.",
    summary: "Um guia técnico e educativo sobre a fotobiomodulação (PBM), o uso terapêutico de lasers e LEDs de baixa intensidade, seus mecanismos mitocondriais de ação e os critérios de responsabilidade em saúde integrativa.",
    category: "Ciência & Fáscia",
    readingTime: "7 min de leitura",
    publishedAt: "13 de Novembro de 2026",
    updatedAt: "13 de Novembro de 2026",
    author: {
      name: "Escola de Fasciaterapia e Movimento",
      role: "Equipe Editorial & Lucy Aihara",
      institution: "Escola de Fasciaterapia e Movimento"
    },
    evidenceBadge: {
      level: 2,
      label: "Evidência Estabelecida & Pesquisa Fotobiológica",
      description: "Amparado em consensos da World Association for photobiomoduLation Therapy (WALT) e periódicos indexados de biofotônica."
    },
    tableOfContents: [
      { id: "o-que-e-pbm", title: "1. O que é a Fotobiomodulação?" },
      { id: "mecanismo-celular", title: "2. Como a Luz Atua no Nível Celular: Os Fotorreceptores" },
      { id: "laser-vs-led", title: "3. Diferenças entre Laser e LED: Espectros e Parâmetros" },
      { id: "aplicacoes-fisioterapia", title: "4. Aplicações no Cuidado e Reabilitação" },
      { id: "limites-eticos-novembro-azul", title: "5. Limites Éticos: O que a Fotobiomodulação NÃO Faz" }
    ],
    medicalDisclaimer: "A fotobiomodulação é um recurso físico coadjuvante utilizado na fisioterapia para auxílio na modulação inflamatória, reparo tecidual e alívio do desconforto. Ela NÃO substitui o tratamento médico convencional, terapias oncológicas ou o controle farmacológico do diabetes.",
    sections: [
      {
        id: "o-que-e-pbm",
        title: "1. O que é a Fotobiomodulação?",
        evidenceLevel: 1,
        content: [
          "A fotobiomodulação (PBM, antigamente denominada terapia a laser de baixa intensidade ou LLLT — Low-Level Laser Therapy) é uma modalidade terapêutica não invasiva baseada na emissão de luz monocromática ou quase-monocromática em comprimentos de onda específicos, geralmente situados nas faixas do vermelho (620–700 nm) e do infravermelho próximo (700–1100 nm).",
          "Diferentemente dos lasers cirúrgicos de alta potência, que geram ablação ou corte térmico, os equipamentos de fotobiomodulação operam em níveis de energia atérmicos (baixa intensidade), não causando queimaduras ou lesões celulares, mas estimulando reações fotoquímicas e fotofísicas benignas nos tecidos biológicos."
        ]
      },
      {
        id: "mecanismo-celular",
        title: "2. Como a Luz Atua no Nível Celular: Os Fotorreceptores",
        evidenceLevel: 2,
        content: [
          "O principal mecanismo aceito pela comunidade científica baseia-se na absorção de fótons por cromóforos celulares endógenos, com ênfase especial na enzima citocromo c oxidase (Complexo IV da cadeia respiratória mitocondrial).",
          "Quando a luz no comprimento de onda correto atinge as mitocôndrias, facilita a dissociação do óxido nítrico inibitório do centro catalítico do citocromo c oxidase. Esse processo restaura o consumo de oxigênio celular, eleva a síntese de adenosina trifosfato (ATP) e modula espécies reativas de oxigênio (ROS), desencadeando cascatas de sinalização benéficas.",
          "Entre os desdobramentos celulares documentados estão a modulação de citocinas inflamatórias, estímulo à síntese de colágeno por fibroblastos e facilitação da microcirculação vascular local."
        ]
      },
      {
        id: "laser-vs-led",
        title: "3. Diferenças entre Laser e LED: Espectros e Parâmetros",
        evidenceLevel: 1,
        content: [
          "Tanto os diodos laser quanto os diodos emissores de luz (LEDs) são utilizados com êxito na prática clínica, guardando particularidades importantes:",
          "• Lasers de Baixa Intensidade: Possuem feixe coerente, monocromático e colimado, permitindo entrega de densidade energética focada e maior penetração em estruturas profundas (como articulações, tendões e cápsulas fasciais profundas).",
          "• Diodos Emissores de Luz (LEDs): Apresentam feixe não coerente com largura de banda espectral estreita. São ideais para tratamento de áreas teciduais mais amplas e camadas superficiais ou intermediárias com excelente segurança biológica.",
          "O sucesso do procedimento depende estritamente da dosimetria (densidade de energia calculada em Joules/cm²), do tempo de irradiação e da técnica de aplicação conduzida por profissional capacitado."
        ]
      },
      {
        id: "aplicacoes-fisioterapia",
        title: "4. Aplicações no Cuidado e Reabilitação",
        evidenceLevel: 2,
        content: [
          "Na fisioterapia e no consultório de Lucy Aihara, a fotobiomodulação é empregada de maneira personalizada após minuciosa avaliação clínica individual:",
          "• Suporte no manejo de dores musculoesqueléticas agudas e crônicas.",
          "• Auxílio na recuperação de tensões miofasciais e pontos de sobrecarga postural.",
          "• Estímulo ao processo cicatricial e regenerativo tecidual em áreas de sofrimento circulatório local leve.",
          "• Aprimoramento da tolerância tecidual e do bem-estar geral quando integrada à abordagem de movimento consciente e escuta corporal."
        ]
      },
      {
        id: "limites-eticos-novembro-azul",
        title: "5. Limites Éticos: O que a Fotobiomodulação NÃO Faz",
        evidenceLevel: 1,
        content: [
          "Em conformidade com o código de ética profissional e as diretrizes do Ministério da Saúde:",
          "1. A fotobiomodulação NÃO previne, NÃO cura e NÃO substitui o tratamento médico do diabetes mellitus ou da resistência insulínica.",
          "2. A técnica NÃO constitui terapia oncológica nem substitui o rastreamento, diagnóstico ou condutas médicas para o câncer de próstata ou qualquer neoplasia.",
          "3. Não há promessas de resultados milagrosos ou instantâneos. O primeiro atendimento gratuito na campanha de Novembro Azul serve para que o interessado conheça a técnica, tire suas dúvidas e receba uma avaliação honesta e profissional sobre a pertinência do recurso para o seu caso específico."
        ]
      }
    ],
    references: [
      {
        citation: "Hamblin, M. R. (2016). Photobiomodulation or low-level laser therapy. Journal of Biophotonics, 9(11-12), 1122-1124.",
        type: "estudo"
      },
      {
        citation: "de Freitas, L. F., & Hamblin, M. R. (2016). Proposed Mechanisms of Photobiomodulation or Low-Level Light Therapy. IEEE Journal of Selected Topics in Quantum Electronics, 22(3), 348-364.",
        type: "estudo"
      },
      {
        citation: "Chung, H., Dai, T., Sharma, S. K., Huang, Y. Y., Carroll, J. D., & Hamblin, M. R. (2012). The nuts and bolts of low-level laser (light) therapy. Annals of Biomedical Engineering, 40(2), 516-533.",
        type: "estudo"
      },
      {
        citation: "World Association for photobiomoduLation Therapy (WALT). Consensus guidelines for dosages and clinical protocols.",
        type: "diretriz",
        url: "https://waltza.co.za"
      }
    ],
    relatedSlugs: ["metodo-danis-bois", "fasciaterapia-e-dor", "neuropatia-diabetica", "evidencias-cientificas", "lucy-aihara"]
  }
];

export function getArticleBySlug(slug: string): KnowledgeArticle | undefined {
  return KNOWLEDGE_ARTICLES.find((a) => a.slug === slug);
}

export function getAllArticles(): KnowledgeArticle[] {
  return KNOWLEDGE_ARTICLES;
}
