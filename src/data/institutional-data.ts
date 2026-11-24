/**
 * DADOS INSTITUCIONAIS CENTRALIZADOS — PROJETO LUCY AIHARA
 * Plataforma Institucional: Lucy Aihara & Escola de Fasciaterapia e Movimento
 *
 * Consolidação E-E-A-T, SEO Local, GEO e AEO
 */

export interface InstitutionalProfile {
  name: string;
  professionalTitle: string;
  shortBio: string;
  fullBio: string[];
  credentials: {
    degrees: string[];
    specializations: string[];
    hospitalExperience: string[];
    methodology: string[];
  };
  approach: {
    title: string;
    description: string;
    pillars: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
}

export interface ClinicLocation {
  clinicName: string;
  street: string;
  suite: string;
  neighborhood: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  fullAddress: string;
  metroReference: string;
  landmarks: string;
  parkingInfo: string;
  accessibilityInfo: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  officeHours: {
    days: string;
    hours: string;
  }[];
}

export interface ContactChannels {
  whatsappDisplay: string;
  whatsappRaw: string;
  phoneDisplay: string;
  phoneRaw: string;
  email: string;
  instagramLucy: string;
  instagramSchool: string;
  officialWixSite: string;
  campaignSubdomain: string;
  whatsappMessages: {
    clinicEvaluation: string;
    schoolCourses: string;
    photobiomodulation: string;
    generalContact: string;
    campaignNovember: string;
  };
}

export interface TreatmentService {
  id: string;
  title: string;
  slug: string;
  badge: string;
  shortDescription: string;
  fullDescription: string;
  indications: string[];
  howItWorks: string[];
  durationMinutes: number;
  isComplementary: boolean;
  scientificContext: string;
  href: string;
}

export interface SchoolCourse {
  id: string;
  title: string;
  slug: string;
  level: "Formação Profissional" | "Workshop Imersivo" | "Aperfeiçoamento";
  targetAudience: string;
  summary: string;
  objective: string;
  prerequisites: string;
  format: string;
  workload: string;
  topics: string[];
  status: "Inscrições Abertas" | "Turma em Andamento" | "Lista de Espera";
}

export const LUCY_PROFILE: InstitutionalProfile = {
  name: "Lucy Aihara",
  professionalTitle: "Fisioterapeuta, Educadora Física e Especialista em Fasciaterapia",
  shortBio:
    "Com sólida trajetória em instituições de excelência como InCor e HCFMUSP, Lucy Aihara dedica sua prática clínica e docente à integração entre fáscia, educação somática e movimento consciente.",
  fullBio: [
    "Lucy Aihara é graduada em Fisioterapia e Educação Física, combinando mais de duas décadas de rigor científico e prática sensível no cuidado à saúde integral.",
    "Sua experiência hospitalar no Instituto do Coração (InCor) e no Instituto Central do Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (HCFMUSP) consolidou seu olhar clínico aprofundado para a reabilitação, a dor crônica e a recuperação funcional.",
    "Formada no Método Danis Bois de Fasciaterapia e Educação Perceptiva do Movimento, Lucy tornou-se uma das principais referências e difusoras da abordagem no Brasil, fundando a Escola de Fasciaterapia e Movimento com a missão de formar novos profissionais e promover a autonomia corporal dos pacientes.",
  ],
  credentials: {
    degrees: [
      "Graduação em Fisioterapia",
      "Graduação em Educação Física",
    ],
    specializations: [
      "Fasciaterapia pelo Método Danis Bois",
      "Educação Perceptiva do Movimento (Somato-Psicopedagogia)",
      "Fotobiomodulação Aplicada à Reabilitação e Dor",
      "Biomecânica e Reeducação Postural",
    ],
    hospitalExperience: [
      "Instituto do Coração (InCor - HCFMUSP)",
      "Instituto Central do Hospital das Clínicas da FMUSP",
    ],
    methodology: [
      "Método Danis Bois de Fasciaterapia",
      "Acompanhamento 1 a 1 centrado no paciente",
      "Integração entre toque manual sutil, movimento consciente e diálogo somático",
    ],
  },
  approach: {
    title: "Filosofia de Atendimento e Cuidado",
    description:
      "Acreditamos que o corpo humano possui uma inteligência proprioceptiva extraordinária. O papel da fisioterapeuta é apoiar a recuperação tecidual e despertar a consciência do paciente sobre seus próprios padrões de movimento e tensão.",
    pillars: [
      {
        title: "Atendimento 1 a 1 e Tempo de Escuta",
        description:
          "Sessões individuais dedicadas, sem atendimento simultâneo. Cada paciente recebe atenção plena em um ambiente privativo, silencioso e acolhedor.",
        icon: "UserCheck",
      },
      {
        title: "Toque Manual Especializado na Fáscia",
        description:
          "Mobilização suave e profunda do tecido conjuntivo, respeitando as respostas reflexas do sistema nervoso autônomo sem gerar desconforto excessivo.",
        icon: "HeartHandshake",
      },
      {
        title: "Educação Perceptiva e Autonomia",
        description:
          "Ensinamos o paciente a reconhecer seus próprios limites, posturas compensatórias e sinais de sobrecarga, promovendo autocuidado duradouro.",
        icon: "Compass",
      },
      {
        title: "Fundamentação Científica Ética",
        description:
          "Práticas integrativas respaldadas pela literatura em mecanotransdução, dor crônica e neurofisiologia, sempre em sinergia com o acompanhamento médico.",
        icon: "BookOpenCheck",
      },
    ],
  },
};

export const CLINIC_LOCATION: ClinicLocation = {
  clinicName: "Consultório Lucy Aihara — Fasciaterapia e Saúde Integrada",
  street: "Rua Sergipe, 475",
  suite: "Conjunto 114",
  neighborhood: "Consolação / Higienópolis",
  city: "São Paulo",
  state: "SP",
  postalCode: "01243-912",
  country: "Brasil",
  fullAddress: "Rua Sergipe, 475, conjunto 114 — Consolação, São Paulo, SP, CEP 01243-912",
  metroReference: "A 350 metros da Estação Higienópolis-Mackenzie (Metrô Linha 4-Amarela)",
  landmarks: "Entre a Rua da Consolação e a Av. Angélica, próximo à Universidade Mackenzie e Praça Rotary.",
  parkingInfo: "Edifício com serviço de manobrista / estacionamento conveniado e opções na própria via.",
  accessibilityInfo: "Edifício moderno com elevadores amplos, acesso plano para cadeirantes e portaria segura.",
  googleMapsUrl:
    "https://maps.google.com/?q=Rua+Sergipe,+475,+conjunto+114,+Consola%C3%A7%C3%A3o,+S%C3%A3o+Paulo+-+SP,+01243-912",
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.433728612984!2d-46.6582539!3d-23.5484557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5836a0d4cbb3%3A0x6b29d9365c159bf4!2sR.+Sergipe%2C+475+-+Consola%C3%A7%C3%A3o%2C+S%C3%A3o+Paulo+-+SP%2C+01243-001!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr",
  coordinates: {
    lat: -23.5484557,
    lng: -46.6582539,
  },
  officeHours: [
    {
      days: "Segunda a Sexta-feira",
      hours: "08h00 às 19h00 (Atendimento sob agendamento prévio)",
    },
    {
      days: "Sábados",
      hours: "Cursos, workshops e atendimentos especiais conforme calendário",
    },
  ],
};

export const CONTACT_CHANNELS: ContactChannels = {
  whatsappDisplay: "+55 (11) 99998-6082",
  whatsappRaw: "5511999986082",
  phoneDisplay: "(11) 99998-6082",
  phoneRaw: "5511999986082",
  email: "contato@escoladefasciaterapiaemovimento.com",
  instagramLucy: "https://www.instagram.com/fasciaterapia.fasciavocemesmo",
  instagramSchool: "https://www.instagram.com/fasciaterapia.fasciavocemesmo",
  officialWixSite: "https://www.escoladefasciaterapiaemovimento.com/",
  campaignSubdomain: "https://novembroazul.escoladefasciaterapiaemovimento.com",
  whatsappMessages: {
    clinicEvaluation:
      "Olá, Lucy! Gostaria de agendar uma avaliação fisioterapêutica individual no consultório da Rua Sergipe.",
    schoolCourses:
      "Olá! Gostaria de receber informações sobre as formações profissionais e workshops da Escola de Fasciaterapia e Movimento.",
    photobiomodulation:
      "Olá! Gostaria de informações sobre o atendimento com fotobiomodulação no consultório.",
    generalContact:
      "Olá! Conheci o site institucional da Lucy Aihara e gostaria de mais informações.",
    campaignNovember:
      "Olá, Lucy! Vi o Especial Novembro Azul e gostaria de agendar meu primeiro atendimento individual de 40 minutos.",
  },
};

export function getWhatsAppLink(messageKey: keyof ContactChannels["whatsappMessages"] = "clinicEvaluation"): string {
  const msg = encodeURIComponent(CONTACT_CHANNELS.whatsappMessages[messageKey]);
  return `https://wa.me/${CONTACT_CHANNELS.whatsappRaw}?text=${msg}`;
}

export const TREATMENTS: TreatmentService[] = [
  {
    id: "fasciaterapia",
    title: "Fasciaterapia (Método Danis Bois)",
    slug: "fasciaterapia",
    badge: "Especialidade Principal",
    shortDescription:
      "Terapia manual sutil e profunda que atua sobre a rede fascial, aliviando tensões acumuladas, restaurando a mobilidade e regulando o sistema nervoso autônomo.",
    fullDescription:
      "A Fasciaterapia é uma abordagem terapêutica manual que atua diretamente sobre o sistema fascial — o tecido conjuntivo ininterrupto que envolve, conecta e sustenta todos os músculos, ossos, vísceras e nervos do corpo. Através de um toque suave, preciso e não invasivo, a terapeuta acompanha os movimentos internos teciduais, liberando restrições mecânicas e restabelecendo o tônus fisiológico saudável.",
    indications: [
      "Dores musculoesqueléticas crônicas (coluna, ombros, quadris)",
      "Sensação de rigidez tecidual e restrição de movimento",
      "Sobrecarga tensional relacionada ao estresse e fadiga física",
      "Recuperação funcional pós-traumática ou pós-operatória tardia",
      "Disfunções do sistema nervoso autônomo e ansiedade somatizada",
    ],
    howItWorks: [
      "Escuta inicial do histórico clínico e queixa principal",
      "Avaliação manual da mobilidade e tensões fasciais",
      "Aplicação de toques manuais lentos e sincronizados com a microcirculação",
      "Integração postural e orientações práticas de movimento",
    ],
    durationMinutes: 50,
    isComplementary: true,
    scientificContext:
      "Estudos sobre mecanotransdução fascial indicam que o estímulo mecânico direcionado atua sobre fibroblastos e terminações nervosas livres (mecanorreceptores intersticiais), modulando a propriocepção e a sensação dolorosa.",
    href: "/tratamentos/fasciaterapia",
  },
  {
    id: "fotobiomodulacao",
    title: "Fotobiomodulação Aplicada",
    slug: "fotobiomodulacao",
    badge: "Terapia com Luz",
    shortDescription:
      "Aplicação localizada de luz vermelha e infravermelha próxima para estímulo celular, modulação de processos inflamatórios e suporte à regeneração tecidual.",
    fullDescription:
      "A fotobiomodulação utiliza fótons de comprimentos de onda específicos que são absorvidos por cromóforos mitocondriais (especialmente a citocromo c oxidase). Isso otimiza a síntese de ATP celular, auxilia no controle da inflamação local e apoia os mecanismos naturais de regeneração em tecidos comprometidos por sobrecarga ou dor.",
    indications: [
      "Pontos dolorosos musculares e miofasciais",
      "Suporte em neuropatias periféricas (ex: neuropatia diabética leve/moderada)",
      "Fadiga muscular localizada e recuperação tecidual",
      "Sensibilidade articular e rigidez periférica",
    ],
    howItWorks: [
      "Higienização e posicionamento confortável do paciente",
      "Calibração da dosimetria conforme a área alvo",
      "Aplicação sem dor, sem calor excessivo e sem desconforto",
      "Avaliação da resposta clínica imediata",
    ],
    durationMinutes: 40,
    isComplementary: true,
    scientificContext:
      "Aprovada pela comunidade científica e amplamente pesquisada em dor musculoesquelética, microcirculação tecidual e cicatrização celular.",
    href: "/fotobiomodulacao",
  },
  {
    id: "educacao-perceptiva",
    title: "Educação Perceptiva do Movimento",
    slug: "educacao-perceptiva",
    badge: "Autonomia Corporal",
    shortDescription:
      "Metodologia somática que ensina o paciente a habitar o próprio corpo com leveza, reconhecendo tensões posturais e desenvolvendo novos gestos cotidianos eficientes.",
    fullDescription:
      "Desenvolvida pelo Prof. Dr. Danis Bois, a Educação Perceptiva do Movimento utiliza exercícios corporais lentos e guiados que refinam a atenção sensorial. O paciente aprende a identificar pontos de rigidez antes que se tornem dor, construindo um relacionamento ativo e saudável com o próprio corpo.",
    indications: [
      "Dificuldade de consciência postural e vícios ergonômicos no trabalho",
      "Percepção corporal diminuída ou sensação de desconexão somática",
      "Prevenção de recidivas de dores lombares e cervicais",
      "Praticantes de atividades físicas que desejam refinar o gesto motor",
    ],
    howItWorks: [
      "Observação da respiração e dos eixos de sustentação corporal",
      "Movimentos lineares e curvilíneos lentos com foco atencional",
      "Diálogo reflexivo sobre a percepção tátil e cinestésica",
      "Exercícios simples para aplicação na rotina de casa ou trabalho",
    ],
    durationMinutes: 50,
    isComplementary: true,
    scientificContext:
      "Pesquisas na área de psicopedagogia perceptiva demonstram ganho em autorregulação, redução de índices de ansiedade e melhoria na imagem corporal.",
    href: "/tratamentos#educacao-perceptiva",
  },
];

export const SCHOOL_INFO = {
  name: "Escola de Fasciaterapia e Movimento",
  foundedBy: "Lucy Aihara",
  foundationYear: 2012,
  mission:
    "Formar profissionais de saúde e movimento na arte e ciência da Fasciaterapia e Educação Perceptiva, e oferecer à sociedade um espaço de referência em cuidado somático humanizado.",
  pedagogicalPillars: [
    {
      title: "Rigor Teórico & Prática Clínica",
      description: "Conteúdos anatômicos e neurofisiológicos modernos ancorados em centenas de horas de prática supervisionada em mesa clínica.",
    },
    {
      title: "Pedagogia da Atenção e do Toque",
      description: "Treinamento intensivo da palpação sutil, escuta tecidual e presença terapêutica ética.",
    },
    {
      title: "Respeito à Autonomia do Paciente",
      description: "A formação ensina a cuidar sem impor, capacitando o paciente a ser participante ativo de seu processo de saúde.",
    },
  ],
  targetAudience: "Fisioterapeutas, Educadores Físicos, Médicos, Terapeutas Ocupacionais e profissionais da área da saúde e movimento.",
  wixUrl: "https://www.escoladefasciaterapiaemovimento.com/",
};

export const SCHOOL_COURSES: SchoolCourse[] = [
  {
    id: "formacao-fasciaterapia",
    title: "Formação em Fasciaterapia e Educação Perceptiva do Movimento",
    slug: "formacao-em-fasciaterapia",
    level: "Formação Profissional",
    targetAudience: "Fisioterapeutas e profissionais graduados em áreas de saúde e movimento",
    summary:
      "Programa completo de capacitação profissional no Método Danis Bois, cobrindo anatomia da fáscia, palpação diagnóstica, técnicas manuais e ginástica sensorial.",
    objective:
      "Capacitar o aluno a diagnosticar restrições fasciais, conduzir sessões clínicas de fasciaterapia e prescrever movimentos perceptivos para reabilitação e qualidade de vida.",
    prerequisites: "Graduação completa ou em fase final em Fisioterapia, Educação Física ou áreas afins.",
    format: "Híbrido (Módulos teóricos online e imersões práticas presenciais)",
    workload: "360 horas divididas em módulos semestrais com tutoria clínica",
    topics: [
      "Anatomia e Fisiologia da Rede Fascial e Mecanotransdução",
      "Fundamentos da Palpação e Escuta Tecidual do Ponto Fixo",
      "Técnicas Manuais Globais e Segmentares (Coluna, Crânio e Membros)",
      "Educação Perceptiva: Sequências de Movimento Lento e Sensorial",
      "Acompanhamento da Relação Terapêutica e Ética Somática",
    ],
    status: "Lista de Espera",
  },
  {
    id: "workshop-fascia-movimento",
    title: "Workshop Imersivo: Fáscia, Postura e Consciência Sensorial",
    slug: "workshop-fascia-postura",
    level: "Workshop Imersivo",
    targetAudience: "Instrutores de Pilates, educadores físicos, terapeutas manuais e estudantes",
    summary:
      "Vivência prática intensiva de fim de semana dedicada ao entendimento vivencial das linhas miofasciais e exercícios para alívio tensional imediato.",
    objective:
      "Fornecer ferramentas somáticas aplicáveis no dia a dia para enriquecer as aulas de movimento e o atendimento individual.",
    prerequisites: "Aberto a estudantes e profissionais de movimento.",
    format: "Presencial (São Paulo - SP)",
    workload: "16 horas (Sábado e Domingo)",
    topics: [
      "A fáscia como órgão sensorial e proprioceptivo",
      "Liberação miofascial ativa sem dor agressiva",
      "Exercícios perceptivos para cervicalgia e lombalgia",
      "Vivências de desaceleração do ritmo corporal",
    ],
    status: "Inscrições Abertas",
  },
  {
    id: "modulo-dor-cronica",
    title: "Módulo Temático: Abordagem da Dor Crônica através da Fáscia",
    slug: "fascia-dor-cronica",
    level: "Aperfeiçoamento",
    targetAudience: "Profissionais que já atendem pacientes com fibromialgia, lombalgia e dores persistentes",
    summary:
      "Estudo aprofundado dos mecanismos de sensibilização central e estratégias fasciais para desarmar o ciclo dor-tensão-ansiedade.",
    objective:
      "Instrumentalizar o profissional a criar planos terapêuticos de acolhimento para casos complexos de dor persistente.",
    prerequisites: "Profissionais com experiência em atendimento clínico.",
    format: "Presencial com discussão de casos clínicos",
    workload: "24 horas",
    topics: [
      "Neurobiologia da dor crônica e sensibilização central",
      "O papel dos mecanorreceptores fasciais tipo III e IV",
      "O toque não nocivo como modulador do sistema límbico",
      "Estudos de caso reais e protocolos de acompanhamento progressivo",
    ],
    status: "Inscrições Abertas",
  },
];

export const CAMPAIGNS_HUB = [
  {
    id: "novembro-azul-2026",
    title: "Especial Novembro Azul 2026",
    badge: "Campanha Ativa",
    period: "Novembro de 2026",
    subtitle: "Conscientização sobre Diabetes, Saúde Masculina e o Cuidado com a Fáscia",
    summary:
      "Campanha comemorativa que une conscientização sobre saúde integral, neuropatia periférica no diabetes, prevenção no câncer de próstata e a oferta do primeiro atendimento gratuito de fotobiomodulação.",
    href: "/novembro-azul",
    highlights: [
      "Primeiro atendimento gratuito de fotobiomodulação (40 minutos)",
      "Guias educativos e questionários de triagem sensorial",
      "Vídeos com depoimentos reais de pacientes em recuperação",
    ],
  },
  {
    id: "saude-integral-movimento",
    title: "Conscientização Permanente: Autonomia no Movimento",
    badge: "Programa Contínuo",
    period: "Permanente",
    subtitle: "Educação somática para a prevenção do sedentarismo e da rigidez crônica",
    summary:
      "Iniciativa contínua da Escola de Fasciaterapia e Movimento com materiais abertos, artigos e palestras sobre a saúde das fáscias no envelhecimento ativo.",
    href: "/conhecimento",
    highlights: [
      "Artigos científicos comentados com linguagem acessível",
      "Dicas ergonômicas para trabalhadores de escritório",
      "Exercícios sensoriais para praticar em casa",
    ],
  },
];

export const INSTITUTIONAL_FAQS = [
  {
    question: "O que é Fasciaterapia e para quem ela é indicada?",
    answer:
      "A Fasciaterapia é uma abordagem fisioterapêutica manual que atua diretamente nas fáscias — tecidos conjuntivos que interligam todo o organismo. Ela é indicada para pessoas com dores crônicas (como lombalgias e cervicalgias), tensões musculares relacionadas ao estresse, rigidez articular, recuperação pós-lesão ou para quem busca maior consciência corporal e bem-estar geral.",
  },
  {
    question: "Qual é a formação e experiência profissional de Lucy Aihara?",
    answer:
      "Lucy Aihara é graduada em Fisioterapia e Educação Física, com especialização no Método Danis Bois de Fasciaterapia e Educação Perceptiva do Movimento. Possui sólida bagagem clínica hospitalar adquirida em instituições de referência no Brasil, como o Instituto do Coração (InCor) e o Instituto Central do Hospital das Clínicas da FMUSP. É fundadora e docente da Escola de Fasciaterapia e Movimento.",
  },
  {
    question: "Onde fica o consultório em São Paulo e como é o acesso?",
    answer:
      "O consultório está localizado na Rua Sergipe, 475, conjunto 114, no bairro da Consolação / Higienópolis, em São Paulo (CEP 01243-912). O local fica a cerca de 350 metros da estação de metrô Higienópolis-Mackenzie (Linha 4-Amarela) e conta com estacionamento com manobrista no próprio edifício.",
  },
  {
    question: "Como funciona a primeira consulta de avaliação?",
    answer:
      "A primeira sessão é individual e tem duração aproximada de 50 minutos. Realiza-se uma anamnese detalhada, escuta da história clínica e queixas do paciente, seguida de avaliação postural e palpação manual da mobilidade fascial. Ao final, Lucy traça uma estratégia terapêutica personalizada de acordo com as necessidades e objetivos de cada pessoa.",
  },
  {
    question: "A Fasciaterapia ou a Fotobiomodulação substituem o tratamento médico?",
    answer:
      "Não. Todas as práticas desenvolvidas no consultório têm caráter complementar e integrativo, atuando em harmonia com as orientações do seu médico de confiança. Não realizamos diagnósticos médicos de doenças nem prometemos cura, trabalhando no suporte físico, alívio de tensões e na educação para o autocuidado.",
  },
  {
    question: "A Escola de Fasciaterapia oferece cursos para quem não é fisioterapeuta?",
    answer:
      "A Formação Profissional completa é direcionada a profissionais e estudantes de Fisioterapia, Educação Física e áreas da saúde afins. No entanto, oferecemos workshops introdutórios, cursos temáticos e vivências corporais abertos a praticantes de movimento, instrutores de Pilates e pessoas interessadas no autoconhecimento somático.",
  },
];
