/**
 * DADOS INSTITUCIONAIS CENTRALIZADOS — PROJETO KONNEXY
 * Lucy Mie Aihara | Fisioterapia, Dor e Movimento
 *
 * Consolidação E-E-A-T, SEO Local, GEO, AEO e Conversão
 */

export interface InstitutionalProfile {
  name: string;
  professionalName: string;
  professionalTitle: string;
  siteTitle: string;
  headlineH1: string;
  headlineEditorial: string;
  experienceYears: string;
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
  nearbyNeighborhoods: string[];
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
    periodMorning: string;
    periodAfternoon: string;
    display: string;
    closed: string;
  };
}

export interface SocialLinks {
  instagram: string;
  facebook: string;
  linkedin: string;
  youtube: string;
  officialWix: string;
}

export interface ContactChannels {
  whatsappDisplay: string;
  whatsappRaw: string;
  phoneMainDisplay: string;
  phoneMainRaw: string;
  phoneSecondaryDisplay: string;
  phoneSecondaryRaw: string;
  email: string;
  social: SocialLinks;
  whatsappMessages: {
    clinicEvaluation: string;
    generalEvaluation: string;
    painTreatment: string;
    lumbarPain: string;
    cervicalPain: string;
    chronicPain: string;
    orthopedicRehab: string;
    pelvicPhysio: string;
    neuropathyCare: string;
    fasciatherapy: string;
    photobiomodulation: string;
    schoolCourses: string;
    campaignNovember: string;
  };
}

export interface ClinicalCondition {
  id: string;
  title: string;
  slug: string;
  badge: string;
  shortDescription: string;
  fullDescription: string;
  commonSymptoms: string[];
  physioRole: string;
  evaluationProcess: string[];
  possibleApproaches: string[];
  ethicalLimitations: string;
  faqs: { q: string; a: string }[];
  href: string;
}

export interface TherapeuticTechnique {
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
  name: "Lucy Mie Aihara",
  professionalName: "Lucy Aihara",
  professionalTitle: "Fisioterapeuta e Educadora Física • Especialista no Cuidado da Dor e Movimento",
  siteTitle: "Lucy Aihara — Fisioterapia, Dor e Movimento",
  headlineH1: "Fisioterapia para o cuidado da dor e recuperação do movimento na Consolação, São Paulo.",
  headlineEditorial: "Cuidado com a dor. Novas possibilidades de movimento.",
  experienceYears: "Mais de 20 anos de experiência clínica",
  shortBio:
    "Com mais de duas décadas de prática dedicada e formação multidisciplinar em Fisioterapia e Educação Física, Lucy Mie Aihara combina experiência em hospitais de excelência (InCor e HCFMUSP) à sensibilidade da Fasciaterapia e reabilitação funcional para cuidar de pacientes com dores agudas e crônicas.",
  fullBio: [
    "Lucy Mie Aihara é graduada em Fisioterapia e Educação Física, unindo o conhecimento aprofundado da cinesiologia, anatomia da fáscia e biomecânica do movimento ao acolhimento terapêutico individualizado.",
    "Sua sólida trajetória inclui atuação clínica no Instituto do Coração (InCor - HCFMUSP) e no Instituto Central do Hospital das Clínicas da Faculdade de Medicina da USP, consolidando um olhar rigoroso para a segurança do paciente, reabilitação ortopédica e suporte em dores musculoesqueléticas complexas.",
    "Formada no Método Danis Bois de Fasciaterapia e Educação Perceptiva do Movimento, Lucy é uma das pioneiras da técnica no Brasil e fundadora da Escola de Fasciaterapia e Movimento. Em seu consultório na Consolação, dedica-se exclusivamente ao atendimento 1 a 1 para alívio da dor, mobilidade tecidual e autonomia somática.",
  ],
  credentials: {
    degrees: [
      "Graduação em Fisioterapia",
      "Graduação em Educação Física",
    ],
    specializations: [
      "Fasciaterapia pelo Método Danis Bois",
      "Fisioterapia Ortopédica e Recuperação Funcional",
      "Educação Perceptiva do Movimento (Somato-Psicopedagogia)",
      "Fotobiomodulação Aplicada à Reabilitação e Dor",
      "Abordagens Manuais e Consciência Postural",
    ],
    hospitalExperience: [
      "Instituto do Coração (InCor - HCFMUSP)",
      "Instituto Central do Hospital das Clínicas da FMUSP",
    ],
    methodology: [
      "Atendimento individualizado de 1 a 1 centrado no paciente",
      "Escuta acolhedora da história de dor e rotina de movimento",
      "Integração entre toque fascial suave, terapia manual e exercícios perceptivos",
      "Sem promessas mágicas de cura: compromisso ético e científico com a evolução funcional",
    ],
  },
  approach: {
    title: "Filosofia de Atendimento e Cuidado da Dor",
    description:
      "A dor não é apenas um sinal mecânico isolado; ela envolve memória tecidual, sobrecargas posturais cotidianas, respostas do sistema nervoso e hábitos de vida. O objetivo da fisioterapia é restabelecer o equilíbrio das tensões corporais, permitindo que você se mova com confiança e sem medo.",
    pillars: [
      {
        title: "Atendimento 1 a 1 com Tempo de Escuta",
        description:
          "Sessões individuais de 50 minutos dedicadas exclusivamente a você, em consultório privativo, calmo e acolhedor na Consolação / Higienópolis.",
        icon: "UserCheck",
      },
      {
        title: "Cuidado Focado na Origem da Dor",
        description:
          "Investigação manual e funcional das restrições miofasciais e desequilíbrios biomecânicos que perpetuam a dor crônica ou a rigidez articular.",
        icon: "Target",
      },
      {
        title: "Técnicas Manuais e Tecnologia Sinergética",
        description:
          "Combinação harmônica de Fasciaterapia (Método Danis Bois), terapia manual, fotobiomodulação celular e exercícios sensoriais de baixo impacto.",
        icon: "Sparkles",
      },
      {
        title: "Autonomia e Liberdade no Movimento",
        description:
          "Ensinamos você a reconhecer seus próprios limites corporais e a praticar movimentos seguros no trabalho e em casa, prevenindo recidivas de dor.",
        icon: "Compass",
      },
    ],
  },
};

export const CLINIC_LOCATION: ClinicLocation = {
  clinicName: "Lucy Aihara — Fisioterapia, Dor e Movimento",
  street: "Rua Sergipe, 475",
  suite: "Conjunto 114",
  neighborhood: "Consolação",
  nearbyNeighborhoods: [
    "Higienópolis",
    "Santa Cecília",
    "Vila Buarque",
    "Bela Vista",
    "Avenida Paulista",
    "Cerqueira César",
  ],
  city: "São Paulo",
  state: "SP",
  postalCode: "01243-912",
  country: "Brasil",
  fullAddress: "Rua Sergipe, 475, conjunto 114 — Consolação, São Paulo, SP, CEP 01243-912",
  metroReference: "A 350 metros da Estação Higienópolis-Mackenzie (Linha 4-Amarela do Metrô)",
  landmarks: "Localizado entre a Rua da Consolação e a Av. Angélica, próximo à Universidade Mackenzie, Praça Rotary e Praça Buenos Aires.",
  parkingInfo: "Edifício comercial com serviço de manobrista / estacionamento conveniado e vagas de zona azul no entorno.",
  accessibilityInfo: "Edifício com acessibilidade total, rampa de acesso, elevadores amplos e portaria com recepção controlada.",
  googleMapsUrl:
    "https://maps.google.com/?q=Rua+Sergipe,+475,+conjunto+114,+Consola%C3%A7%C3%A3o,+S%C3%A3o+Paulo+-+SP,+01243-912",
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.433728612984!2d-46.6582539!3d-23.5484557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5836a0d4cbb3%3A0x6b29d9365c159bf4!2sR.+Sergipe%2C+475+-+Consola%C3%A7%C3%A3o%2C+S%C3%A3o+Paulo+-+SP%2C+01243-001!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr",
  coordinates: {
    lat: -23.5484557,
    lng: -46.6582539,
  },
  officeHours: {
    days: "Segunda a Sexta-feira",
    periodMorning: "08h00 às 12h00",
    periodAfternoon: "14h00 às 18h00",
    display: "Segunda a Sexta: 08h às 12h e 14h às 18h (mediante agendamento)",
    closed: "Sábados, Domingos e Feriados: fechado (cursos sob calendário específico)",
  },
};

export const CONTACT_CHANNELS: ContactChannels = {
  whatsappDisplay: "(11) 99998-6082",
  whatsappRaw: "5511999986082",
  phoneMainDisplay: "(11) 99998-6082",
  phoneMainRaw: "5511999986082",
  phoneSecondaryDisplay: "(11) 99649-6082",
  phoneSecondaryRaw: "5511996496082",
  email: "contato@escoladefasciaterapiaemovimento.com",
  social: {
    instagram: "https://www.instagram.com/fasciaterapia.fasciavocemesmo",
    facebook: "https://www.facebook.com/fisioterapiaespecializada.lucyaihara",
    linkedin: "https://www.linkedin.com/in/lucyaihara",
    youtube: "https://www.youtube.com/@lucyaiharafisioterapia4167",
    officialWix: "https://www.escoladefasciaterapiaemovimento.com/",
  },
  whatsappMessages: {
    clinicEvaluation:
      "Olá, Lucy! Gostaria de agendar uma avaliação fisioterapêutica individual no consultório da Rua Sergipe.",
    generalEvaluation:
      "Olá, Lucy! Gostaria de agendar uma avaliação fisioterapêutica individual no consultório da Rua Sergipe.",
    painTreatment:
      "Olá, Lucy! Sinto dores e gostaria de agendar uma consulta de avaliação para fisioterapia da dor na Consolação.",
    lumbarPain:
      "Olá, Lucy! Gostaria de agendar uma avaliação fisioterapêutica para alívio de dor lombar / coluna.",
    cervicalPain:
      "Olá, Lucy! Gostaria de agendar uma avaliação para dor cervical, pescoço e tensão nos ombros.",
    chronicPain:
      "Olá, Lucy! Convivo com dor crônica e gostaria de conhecer sua abordagem fisioterapêutica individualizada.",
    orthopedicRehab:
      "Olá, Lucy! Gostaria de agendar uma avaliação para reabilitação ortopédica e recuperação funcional.",
    pelvicPhysio:
      "Olá, Lucy! Gostaria de informações sobre o cuidado fisioterapêutico para assoalho pélvico e dor pélvica.",
    neuropathyCare:
      "Olá, Lucy! Gostaria de saber mais sobre o acompanhamento fisioterapêutico e fotobiomodulação para neuropatia.",
    fasciatherapy:
      "Olá, Lucy! Gostaria de agendar uma sessão individual de Fasciaterapia (Método Danis Bois).",
    photobiomodulation:
      "Olá, Lucy! Gostaria de informações sobre as sessões de fotobiomodulação no consultório.",
    schoolCourses:
      "Olá! Gostaria de receber informações sobre as formações profissionais e workshops da Escola de Fasciaterapia e Movimento.",
    campaignNovember:
      "Olá, Lucy! Vi a campanha Novembro Azul e gostaria de agendar meu atendimento de 40 minutos.",
  },
};

export function getWhatsAppLink(
  messageKey: keyof ContactChannels["whatsappMessages"] = "generalEvaluation"
): string {
  const msg = encodeURIComponent(CONTACT_CHANNELS.whatsappMessages[messageKey]);
  return `https://wa.me/${CONTACT_CHANNELS.whatsappRaw}?text=${msg}`;
}

export const CONDITIONS_TREATED: ClinicalCondition[] = [
  {
    id: "dor",
    title: "Fisioterapia para Dor e Recuperação Funcional",
    slug: "dor",
    badge: "Especialidade Clínica",
    shortDescription:
      "Avaliação e tratamento fisioterapêutico individualizado para o alívio de dores musculoesqueléticas agudas e persistentes na Consolação / Higienópolis.",
    fullDescription:
      "O atendimento de fisioterapia para dor conduzido por Lucy Mie Aihara tem como propósito investigar as causas reais do desconforto corporal. Muitas vezes, a dor que se manifesta em uma articulação ou músculo é consequência de sobrecargas em outras partes da cadeia fascial, posturas compensatórias e respostas do sistema nervoso ao estresse crônico. Com mais de 20 anos de experiência, Lucy integra técnicas manuais suaves, Fasciaterapia e educação do movimento para restabelecer o equilíbrio e a mobilidade sem agressão aos tecidos.",
    commonSymptoms: [
      "Dores persistentes na coluna, pescoço, ombros ou membros",
      "Rigidez corporal matinal ou após períodos de trabalho sentado",
      "Sensação de aperto, fisgadas ou queimação muscular",
      "Receio de se movimentar ou praticar exercícios devido à dor",
    ],
    physioRole:
      "A fisioterapia atua modulando a sensibilidade nervosa, desfazendo bloqueios de deslizamento entre os planos fasciais e restaurando a liberdade articular com exercícios lentos e controlados.",
    evaluationProcess: [
      "Escuta acolhedora da história clínica e queixas funcionais (50 minutos dedicados)",
      "Exame palpatório da mobilidade das fáscias corporais e tônus muscular",
      "Testes de flexibilidade, amplitude de movimento e estabilidade postural",
      "Elaboração de um plano fisioterapêutico sob medida com orientações para o cotidiano",
    ],
    possibleApproaches: [
      "Fasciaterapia (Método Danis Bois) com toques manuais lentos e profundos",
      "Terapias manuais miofasciais e mobilizações articulares suaves",
      "Fotobiomodulação coadjuvante para alívio da inflamação tecidual",
      "Educação perceptiva e reeducação somática do movimento",
    ],
    ethicalLimitations:
      "A fisioterapia atua no suporte funcional e reabilitação tecidual. Não substitui consultas, exames diagnósticos ou prescrições médicas especializadas.",
    faqs: [
      {
        q: "Como é a primeira consulta de fisioterapia para dor?",
        a: "A consulta é 1 a 1, com duração de 50 minutos. Realizamos uma anamnese completa, exame físico e palpatório e iniciamos as condutas manuais de alívio, orientando os próximos passos de forma transparente.",
      },
      {
        q: "A fisioterapia para dor utiliza medicamentos ou choques elétricos?",
        a: "A abordagem de Lucy Aihara prioriza as terapias manuais especializadas, a Fasciaterapia e a fotobiomodulação celular, sem uso de choques invasivos ou prescrição de remédios (atribuição médica).",
      },
    ],
    href: "/tratamentos/dor",
  },
  {
    id: "dor-lombar",
    title: "Dor Lombar e Lombalgia",
    slug: "dor-lombar",
    badge: "Coluna Vertebral",
    shortDescription:
      "Avaliação cuidadosa das causas mecânicas, sobrecargas miofasciais e posturais que provocam dores e travamentos na região lombar.",
    fullDescription:
      "A dor lombar é uma das queixas musculoesqueléticas mais comuns no ambiente urbano. Frequentemente associada a longos períodos sentado, estresse, alterações no controle motor e sobrecarga dos tecidos da fáscia toracolombar, a lombalgia requer uma avaliação clínica individualizada. Nossa abordagem integra terapia manual suave, liberação de tensões profundas e reeducação perceptiva do movimento para restaurar a estabilidade sem provocar dor reflexa.",
    commonSymptoms: [
      "Dor em pontada, queimação ou aperto na região lombar inferior",
      "Dificuldade ou rigidez para levantar da cadeira ou da cama pela manhã",
      "Sensação de fadiga muscular na coluna ao ficar em pé por muito tempo",
      "Irradiação para o quadril ou glúteo sem déficit neurológico progressivo",
    ],
    physioRole:
      "A fisioterapia atua desarmando o círculo vicioso de espasmo muscular, facilitando o deslizamento da fáscia toracolombar, restaurando a mobilidade do quadril e reensinando o controle motor lombo-pélvico com segurança.",
    evaluationProcess: [
      "Escuta detalhada da evolução da dor, posturas de alívio e histórico de exames de imagem",
      "Avaliação palpatória da mobilidade das fáscias lombar, sacral e diafragmática",
      "Testes de mobilidade ativa da coluna, bacia e membros inferiores",
      "Definição do plano de cuidado com orientações imediatas para o cotidiano",
    ],
    possibleApproaches: [
      "Fasciaterapia (Método Danis Bois) para alívio de tensões profundas",
      "Terapias manuais miofasciais e mobilização articular suave",
      "Fotobiomodulação complementar em pontos de inflamação local",
      "Exercícios perceptivos de reeducação postural e respiração",
    ],
    ethicalLimitations:
      "A fisioterapia não substitui o diagnóstico médico. Casos de dor intensa acompanhados de febre, perda súbita de força motora nos pés ou disfunção esfincteriana exigem encaminhamento médico imediato para investigação de bandeiras vermelhas.",
    faqs: [
      {
        q: "Preciso de ressonância magnética para iniciar o tratamento da dor lombar?",
        a: "Não obrigatoriamente. A maioria das dores lombares mecânicas inespecíficas melhora significativamente com a avaliação funcional e fisioterapêutica. Caso você já possua exames anteriores, traga-os para a consulta; se houver necessidade de nova investigação médica, orientaremos prontamente.",
      },
      {
        q: "O tratamento envolve estalos na coluna?",
        a: "Não. A prática de Lucy Aihara baseia-se na Fasciaterapia e em terapias manuais sutis, respeitando o ritmo e a sensibilidade dos tecidos sem manobras de estalo agressivo.",
      },
    ],
    href: "/tratamentos/dor-lombar",
  },
  {
    id: "dor-cervical",
    title: "Dor Cervical e Tensão no Pescoço",
    slug: "dor-cervical",
    badge: "Pescoço e Ombros",
    shortDescription:
      "Alívio de tensões cervicais crônicas, rigidez na nuca, cefaleias tensionais e sobrecargas no uso de telas e computadores.",
    fullDescription:
      "A cervicalgia e a rigidez na cintura escapular refletem diretamente a postura de cabeça projetada à frente (frequente no trabalho em computadores e celulares) e a resposta do sistema nervoso simpático ao estresse crônico. Os tecidos conjuntivos e músculos da nuca mantêm-se em contração contínua. Com toques manuais lentos e precisos, a fisioterapia restaura a mobilidade das vértebras cervicais e a fluidez das fáscias cervicais e cranianas.",
    commonSymptoms: [
      "Rigidez na nuca e dificuldade para girar a cabeça lateralmente",
      "Sensação de peso e nós dolorosos (pontos-gatilho) no trapézio e ombros",
      "Dores de cabeça tensionais que começam na base do crânio",
      "Tensão reflexa na mandíbula (frequentemente associada a bruxismo)",
    ],
    physioRole:
      "Identificar bloqueios miofasciais na transição cervicotorácica e base do crânio, reequilibrar a tensão dos músculos mastigatórios e cervicais e reeducar a propriocepção da cabeça no espaço.",
    evaluationProcess: [
      "Mapeamento da amplitude de movimento articular do pescoço e ombros",
      "Palpação dos tecidos miofasciais cervicais, claviculares e cranianos",
      "Análise da postura de trabalho e ergonomia cotidiana",
      "Tratamento manual focado na descompressão tecidual",
    ],
    possibleApproaches: [
      "Fasciaterapia cervical e craniana (toque suave sem trancos)",
      "Mobilização articular lenta da cintura escapular",
      "Fotobiomodulação para relaxamento muscular e microcirculação",
      "Orientação ergonômica e exercícios perceptivos breves para o dia a dia",
    ],
    ethicalLimitations:
      "Dores cervicais associadas a dormência progressiva em ambos os braços, tonturas intensas ou perda de equilíbrio exigem avaliação neurológica médica prévia.",
    faqs: [
      {
        q: "A cervicalgia pode causar dor de cabeça?",
        a: "Sim. A chamada cefaleia cervicogênica e as dores de cabeça tensionais frequentemente se originam em pontos de tensão na musculatura suboccipital e na fáscia cervical superficial.",
      },
      {
        q: "Quantas sessões costumam ser necessárias?",
        a: "Muitos pacientes sentem alívio da rigidez e ganho de movimento já nas primeiras sessões. O plano individualizado é definido após a primeira consulta.",
      },
    ],
    href: "/tratamentos/dor-cervical",
  },
  {
    id: "dor-cronica",
    title: "Dor Crônica e Sensibilização Central",
    slug: "dor-cronica",
    badge: "Cuidado Integral",
    shortDescription:
      "Abordagem sensível e especializada para pessoas que convivem com dores há meses ou anos, desarmando o ciclo de dor, medo e tensão.",
    fullDescription:
      "A dor crônica (aquela que persiste por mais de 3 meses) altera a forma como o sistema nervoso processa estímulos mecânicos e sensoriais. O corpo passa a interpretar pequenos movimentos cotidianos como ameaças (sensibilização central e periférica). O atendimento de Lucy Aihara prioriza uma escuta empática e um toque não nocivo — fundamental para demonstrar ao cérebro que o corpo pode ser tocado e movido com segurança e sem dor.",
    commonSymptoms: [
      "Dor persistente ou que se desloca por várias regiões do corpo",
      "Fadiga constante e sensação de esgotamento físico",
      "Hipersensibilidade ao toque ou à mudança de temperatura",
      "Sensação de frustração após passar por múltiplos tratamentos sem melhora duradoura",
    ],
    physioRole:
      "A fisioterapia somática e fascial auxilia na autorregulação do sistema nervoso autônomo, reduz a hipervigilância da dor e devolve ao paciente a confiança no próprio corpo.",
    evaluationProcess: [
      "Acolhimento da trajetória clínica sem julgamentos nem pressa",
      "Avaliação do limiar de sensibilidade dos tecidos conjuntivos",
      "Identificação de estratégias de respiração e regulação somática",
      "Planejamento gradual de intervenções respeitando o ritmo do paciente",
    ],
    possibleApproaches: [
      "Fasciaterapia (Método Danis Bois) com toques gentis de sustentação",
      "Educação em neurociência da dor adaptada ao paciente",
      "Fotobiomodulação de suporte na modulação inflamatória",
      "Ginástica sensorial com micromovimentos lentos e não dolorosos",
    ],
    ethicalLimitations:
      "O acompanhamento fisioterapêutico é complementar e trabalha em estreita parceria com médicos reumatologistas, neurologistas e psiquiatras responsáveis.",
    faqs: [
      {
        q: "O tratamento para dor crônica causa mais dor?",
        a: "Não. A premissa central de Lucy Aihara é nunca ultrapassar o limiar de conforto do paciente. O toque manual é respeitoso, sem forçar estruturas inflamadas.",
      },
    ],
    href: "/tratamentos/dor-cronica",
  },
  {
    id: "dores-musculares-articulares",
    title: "Dores Musculares e Articulares",
    slug: "dores-musculares-articulares",
    badge: "Miofascial & Articular",
    shortDescription:
      "Cuidado integrado para tendinites, bursites, pontos-gatilho e sobrecargas no quadril, ombros, joelhos e tornozelos.",
    fullDescription:
      "Tendinopatias, bursites e contraturas musculares raramente são problemas isolados; geralmente decorrem de compensações mecânicas em cadeias miofasciais inteiras. Ao avaliar como o peso corporal se distribui nos pés, joelhos e pelve, a fisioterapia atua tanto no local do sintoma quanto nos fatores causais à distância, recuperando a mecânica articular sem sobrecarregar tendões e cartilagens.",
    commonSymptoms: [
      "Dor aos movimentos repetitivos ou após caminhadas prolongadas",
      "Sensação de crepitação, peso ou rigidez nas articulações",
      "Pontos-gatilho musculares dolorosos à palpação",
      "Fraqueza ou sensação de instabilidade articular",
    ],
    physioRole:
      "Descompactar estruturas periarticulares, devolver a mobilidade da fáscia muscular profunda e restabelecer a sinergia entre grupos musculares agonistas e antagonistas.",
    evaluationProcess: [
      "Exame palpatório dos tendões, bursas e fáscias de suporte",
      "Análise da marcha e transferências de carga postural",
      "Testes específicos de comprimento e flexibilidade muscular",
    ],
    possibleApproaches: [
      "Terapia manual ortopédica e liberação fascial funcional",
      "Fotobiomodulação localizada para suporte regenerativo tecidual",
      "Exercícios perceptivos de reeducação biomecânica",
    ],
    ethicalLimitations:
      "Fraturas agudas, rupturas tendíneas totais e artrites sépticas requerem avaliação ortopédica e reumatológica imediata.",
    faqs: [
      {
        q: "A fotobiomodulação ajuda em tendinites?",
        a: "Sim, a literatura científica demonstra que comprimentos de onda vermelhos e infravermelhos auxiliam na modulação de citocinas inflamatórias e estimulam a atividade mitocondrial nos tenócitos.",
      },
    ],
    href: "/tratamentos/dores-musculares-articulares",
  },
  {
    id: "reabilitacao-ortopedica",
    title: "Reabilitação Ortopédica",
    slug: "reabilitacao-ortopedica",
    badge: "Pós-Trauma & Cirurgia",
    shortDescription:
      "Acompanhamento em fase de recuperação pós-traumática, entorses, fraturas consolidadas e reabilitação pós-cirúrgica.",
    fullDescription:
      "Após imobilizações, entorses ou intervenções cirúrgicas, os tecidos cicatriciais e a fáscia tendem a perder água e mobilidade, gerando aderências e limitação de movimento. Com base em sua sólida experiência hospitalar no InCor e HC-FMUSP, Lucy Aihara aplica protocolos seguros de reabilitação que respeitam os tempos biológicos de cicatrização, restaurando a amplitude articular e prevenindo retrações secundárias.",
    commonSymptoms: [
      "Restrição de amplitude de movimento após imobilização ou gesso",
      "Cicatrizes cirúrgicas densas, aderidas ou com sensibilidade alterada",
      "Atrofia muscular e insegurança para apoiar o membro",
      "Dor residual após cicatrização de lesões ortopédicas",
    ],
    physioRole:
      "Mobilizar a cicatriz com técnica fascial sem traumatizar o tecido, restaurar os graus funcionais de movimento articular e reabilitar a propriocepção.",
    evaluationProcess: [
      "Avaliação minuciosa da cicatriz, edema residual e amplitude articular",
      "Verificação dos relatórios cirúrgicos e liberação do médico assistente",
      "Desenho de progressão de exercícios e terapia manual",
    ],
    possibleApproaches: [
      "Tratamento manual fascial da cicatriz e tecidos vizinhos",
      "Fotobiomodulação para cicatrização e redução do edema",
      "Treinamento de controle motor e estabilização articular",
    ],
    ethicalLimitations:
      "O início da fisioterapia pós-operatória depende sempre da autorização e das diretrizes do cirurgião responsável.",
    faqs: [
      {
        q: "Como o trabalho fascial ajuda na cicatriz cirúrgica?",
        a: "O toque suave e multidirecional estimula os fibroblastos a depositarem colágeno de forma organizada, evitando aderências profundas que possam puxar músculos e nervos.",
      },
    ],
    href: "/tratamentos/reabilitacao-ortopedica",
  },
  {
    id: "recuperacao-funcional",
    title: "Recuperação Funcional e Mobilidade",
    slug: "recuperacao-funcional",
    badge: "Autonomia & Movimento",
    shortDescription:
      "Devolução da capacidade de realizar atividades da vida diária com segurança, equilíbrio e ausência de travamentos.",
    fullDescription:
      "Recuperar a função significa voltar a caminhar sem receio, subir escadas, carregar objetos ou praticar atividades físicas com prazer. Integrando conceitos de educação física e fisioterapia motora, Lucy elabora planos de recuperação que unem a liberação das fáscias encurtadas à prática de movimentos funcionais eficientes e gentis com as articulações.",
    commonSymptoms: [
      "Insegurança ao caminhar ou subir e descer degraus",
      "Sensação de enrijecimento global após períodos de repouso",
      "Perda de agilidade e flexibilidade no cotidiano",
      "Dificuldade de manter a postura ereta sem fadiga extrema",
    ],
    physioRole:
      "Reestabelecer o alinhamento das cadeias cinéticas e ensinar o paciente a usar o menor esforço muscular para o maior rendimento funcional.",
    evaluationProcess: [
      "Análise de gestos cotidianos (sentar, levantar, agachar e alcançar objetos)",
      "Avaliação de equilíbrio estático e dinâmico",
      "Identificação dos elos fracos e das rigidezes da cadeia fascial",
    ],
    possibleApproaches: [
      "Fasciaterapia global e educação perceptiva do movimento",
      "Exercícios funcionais de estabilização lombo-pélvica",
      "Estratégias de respiração associadas ao movimento",
    ],
    ethicalLimitations:
      "Condições neurológicas progressivas graves requerem abordagem multidisciplinar com equipe médica especializada.",
    faqs: [
      {
        q: "Pessoas de qualquer idade podem realizar a recuperação funcional?",
        a: "Sim. O atendimento é individualizado e ajustado rigorosamente à condição, idade e objetivos de cada pessoa, desde jovens até pessoas idosas.",
      },
    ],
    href: "/tratamentos/recuperacao-funcional",
  },
  {
    id: "fisioterapia-pelvica",
    title: "Fisioterapia Pélvica e Assoalho Pélvico",
    slug: "fisioterapia-pelvica",
    badge: "Saúde Pélvica",
    shortDescription:
      "Atenção fisioterapêutica para o equilíbrio das fáscias e músculos da pelve, dores pélvicas e conscientização perineal.",
    fullDescription:
      "O assoalho pélvico é uma rede complexa de músculos e fáscias que sustenta os órgãos pélvicos e participa ativamente da respiração, da postura e da continência. Dores pélvicas crônicas, sensações de peso ou tensões na bacia frequentemente se associam a hipertonia muscular ou a desequilíbrios na fáscia endopélvica. O cuidado fisioterapêutico é realizado com respeito absoluto, escuta cuidadosa e foco na autorregulação somática.",
    commonSymptoms: [
      "Desconforto ou dor profunda na região pélvica, sacro ou cóccix",
      "Tensão muscular excessiva no assoalho pélvico (hipertonia)",
      "Dificuldade de relaxar a musculatura perineal",
      "Percepção diminuída dos movimentos respiratórios associados à pelve",
    ],
    physioRole:
      "Devolver o tônus adequado (nem frouxo, nem hiperespástico) à musculatura do assoalho pélvico e integrar a pelve à mobilidade da coluna e diafragma.",
    evaluationProcess: [
      "Escuta acolhedora da história clínica e queixas funcionais",
      "Avaliação postural externa da pelve, quadris e respiração diafragmática",
      "Trabalho de conscientização sensorial e controle respiratório perineal",
    ],
    possibleApproaches: [
      "Fasciaterapia aplicada às fáscias lombo-sacrais e ilíacas",
      "Exercícios perceptivos de relaxamento e ativação do assoalho pélvico",
      "Orientações práticas de postura e hábitos cotidianos",
    ],
    ethicalLimitations:
      "Exames ginecológicos, urológicos e diagnósticos de infecções ou alterações orgânicas devem ser previamente realizados pelo médico especialista.",
    faqs: [
      {
        q: "O atendimento de fisioterapia pélvica é doloroso?",
        a: "Não. A abordagem de Lucy Aihara é prioritariamente externa, suave e focada na consciência somática e nas fáscias conectadas à bacia, sem procedimentos invasivos desconfortáveis.",
      },
    ],
    href: "/tratamentos/fisioterapia-pelvica",
  },
  {
    id: "neuropatia",
    title: "Cuidados Fisioterapêuticos na Neuropatia",
    slug: "neuropatia",
    badge: "Sensibilidade & Pés",
    shortDescription:
      "Acompanhamento complementar para suporte à microcirculação, sensibilidade tátil e equilíbrio em neuropatias periféricas.",
    fullDescription:
      "Neuropatias periféricas — como a neuropatia diabética leve a moderada — exigem atenção contínua aos pés e pernas para prevenir perda de equilíbrio e desconfortos sensoriais. A combinação de estímulo fisioterapêutico sensorial, fotobiomodulação local e exercícios de propriocepção apoia a microcirculação tecidual e auxilia na manutenção da sensibilidade protetora dos membros inferiores.",
    commonSymptoms: [
      "Sensação de formigamento, dormência ou queimação nas solas dos pés",
      "Diminuição da percepção do toque ou da temperatura nos dedos",
      "Insegurança no equilíbrio ao caminhar em superfícies irregulares",
      "Rigidez articular nos tornozelos e dedos dos pés",
    ],
    physioRole:
      "Estimular as terminações nervosas sensoriais, promover a mobilidade articular dos pés, melhorar o retorno venoso e apoiar a nutrição tecidual.",
    evaluationProcess: [
      "Avaliação da sensibilidade tátil e da pele dos pés",
      "Inspeção visual detalhada de pontos de pressão e calosidades",
      "Testes de equilíbrio funcional e marcha",
    ],
    possibleApproaches: [
      "Fotobiomodulação aplicada para suporte à microcirculação periférica",
      "Mobilização manual suave das fáscias plantares e articulações dos pés",
      "Treinamento proprioceptivo com estímulos sensoriais adaptados",
    ],
    ethicalLimitations:
      "O acompanhamento fisioterapêutico é estritamente complementar ao tratamento do médico endocrinologista ou neurologista. O controle glicêmico e medicamentoso é indispensável.",
    faqs: [
      {
        q: "A fotobiomodulação pode curar a neuropatia diabética?",
        a: "Não. Não existe cura prometida. A fotobiomodulação atua como terapia integrativa de suporte, auxiliando na sensação de conforto, alívio de dor e apoio à microcirculação tecidual.",
      },
    ],
    href: "/tratamentos/neuropatia",
  },
];

export const TECHNIQUES: TherapeuticTechnique[] = [
  {
    id: "fasciaterapia",
    title: "Fasciaterapia (Método Danis Bois)",
    slug: "fasciaterapia",
    badge: "Terapia Manual Especializada",
    shortDescription:
      "Terapia manual suave e profunda que atua sobre a rede fascial do corpo, aliviando tensões acumuladas, restaurando a mobilidade e regulando o sistema nervoso autônomo.",
    fullDescription:
      "Desenvolvida pelo fisioterapeuta e osteopata francês Danis Bois, a Fasciaterapia atua na fáscia — o tecido conjuntivo que conecta todo o organismo. Com um toque lento, respeitoso e sem força mecânica agressiva, o profissional acompanha a micromobilidade dos tecidos até que o tônus corporal se reequilibre e o ciclo de dor seja desarmado.",
    indications: [
      "Dores musculoesqueléticas agudas e crônicas (lombar, cervical, dorsal)",
      "Sensação de rigidez tecidual profunda e estresse somatizado",
      "Recuperação pós-lesão e melhora da flexibilidade",
      "Desaceleração do ritmo corporal e alívio da fadiga física",
    ],
    howItWorks: [
      "Escuta inicial detalhada da queixa e histórico clínico",
      "Avaliação palpatória da viscoelasticidade fascial",
      "Aplicação de pontos de apoio manuais gentis",
      "Integração somática e orientações de autocuidado",
    ],
    durationMinutes: 50,
    isComplementary: true,
    scientificContext:
      "Pesquisas em mecanotransdução demonstram que estímulos manuais de baixa intensidade regulam os mecanorreceptores intersticiais fasciais (tipo III e IV), diminuindo o tônus simpático e a percepção dolorosa.",
    href: "/tratamentos/fasciaterapia",
  },
  {
    id: "fisioterapia-ortopedica",
    title: "Fisioterapia Ortopédica e Traumato-Funcional",
    slug: "fisioterapia-ortopedica",
    badge: "Reabilitação",
    shortDescription:
      "Avaliação biomecânica e reabilitação de disfunções osteomioarticulares, tendinopatias e recuperação funcional pós-trauma.",
    fullDescription:
      "A fisioterapia ortopédica clássica ganha um novo patamar quando integrada à percepção fascial. Lucy utiliza sua experiência em centros de referência hospitalar para avaliar amplitudes articulares, força muscular e desvios biomecânicos, estruturando planos terapêuticos seguros para a volta às atividades sem dor.",
    indications: [
      "Bursites, tendinites e sinovites articulares",
      "Pós-operatórios ortopédicos tardios e entorses",
      "Desvios posturais dolorosos e sobrecargas no esporte",
    ],
    howItWorks: [
      "Testes ortopédicos de mobilidade e estabilidade",
      "Liberação miofascial e mobilizações articulares",
      "Exercícios terapêuticos de fortalecimento progressivo",
    ],
    durationMinutes: 50,
    isComplementary: true,
    scientificContext:
      "Abordagem fundamentada em diretrizes de reabilitação funcional e cinesiologia aplicada.",
    href: "/tratamentos/reabilitacao-ortopedica",
  },
  {
    id: "terapias-manuais",
    title: "Terapias Manuais e Liberação Miofascial",
    slug: "terapias-manuais",
    badge: "Toque Especializado",
    shortDescription:
      "Conjunto de manobras manuais precisas que restauram o deslizamento entre as fáscias musculares e reduzem nós tensionais sem dor agressiva.",
    fullDescription:
      "As terapias manuais aplicadas por Lucy Aihara diferem de massagens convencionais por sua precisão anatômica e delicadeza no contato. O objetivo não é 'esmagar' nós musculares, mas sim convidar o tecido a liberar tensões por meio do estímulo proprioceptivo suave.",
    indications: [
      "Contraturas musculares e pontos-gatilho dolorosos",
      "Restrições no deslizamento fascial após cicatrizes ou esforço",
      "Rigidez postural em profissionais de escritório",
    ],
    howItWorks: [
      "Identificação tátil das áreas de densificação",
      "Aplicação de toques contínuos de descompressão",
      "Harmonização da respiração com o relaxamento muscular",
    ],
    durationMinutes: 50,
    isComplementary: true,
    scientificContext:
      "O toque terapêutico estimula a liberação de endorfinas locais e otimiza a hidratação da substância fundamental amorfa da fáscia.",
    href: "/tratamentos/dores-musculares-articulares",
  },
  {
    id: "fotobiomodulacao",
    title: "Fotobiomodulação Aplicada (Laser / LED)",
    slug: "fotobiomodulacao",
    badge: "Bioestimulação por Luz",
    shortDescription:
      "Aplicação de comprimentos de onda de luz vermelha e infravermelha próxima para estímulo celular, modulação de processos inflamatórios e suporte tecidual.",
    fullDescription:
      "A fotobiomodulação utiliza fótons de luz que são absorvidos pelas mitocôndrias celulares (enzima citocromo c oxidase), aumentando a síntese de ATP celular e auxiliando no controle de citocinas inflamatórias. No consultório, é utilizada como recurso coadjuvante e sinérgico à terapia manual.",
    indications: [
      "Dores articulares e pontos miofasciais inflamados",
      "Suporte à microcirculação em neuropatias periféricas",
      "Recuperação tecidual e alívio da fadiga muscular localizada",
    ],
    howItWorks: [
      "Higienização da pele e calibração da dosimetria de luz",
      "Aplicação direta e sem dor na região indicada",
      "Combinação imediata com mobilização fascial suave",
    ],
    durationMinutes: 40,
    isComplementary: true,
    scientificContext:
      "Extensamente documentada na literatura científica internacional (WALT) para dor musculoesquelética e regeneração tecidual.",
    href: "/fotobiomodulacao",
  },
  {
    id: "fisioterapia-pelvica",
    title: "Fisioterapia Pélvica e Cuidado Perineal",
    slug: "fisioterapia-pelvica",
    badge: "Saúde Pélvica",
    shortDescription:
      "Abordagem somática e manual não invasiva para equilíbrio fascial da pelve, relaxamento do assoalho pélvico e regulação respiratória.",
    fullDescription:
      "A fisioterapia pélvica conduzida por Lucy Aihara foca na integração da pelve com a respiração diafragmática e as fáscias da coluna lombo-sacral. O atendimento busca devolver a mobilidade aos ossos ilíacos e ao sacro, liberando tensões profundas que sustentam quadros de dor pélvica crônica ou hipertonia perineal.",
    indications: [
      "Dores na pelve, cóccix e região sacral",
      "Tensão muscular e dificuldade de relaxamento perineal",
      "Suporte postural pós-parto e alterações na mobilidade da bacia",
    ],
    howItWorks: [
      "Avaliação externa postural da bacia e padrão respiratório",
      "Mobilização manual suave das fáscias ilíacas e sacrais",
      "Exercícios perceptivos de consciência e coordenação pélvica",
    ],
    durationMinutes: 50,
    isComplementary: true,
    scientificContext:
      "A integridade fascial e proprioceptiva do complexo lombo-pélvico-quadril é fundamental para a função normal das vísceras e estabilização da coluna.",
    href: "/tecnicas/fisioterapia-pelvica",
  },
  {
    id: "educacao-perceptiva",
    title: "Educação Perceptiva do Movimento",
    slug: "educacao-perceptiva",
    badge: "Autonomia Corporal",
    shortDescription:
      "Prática somática que ensina você a perceber seus padrões de tensão antes que virem dor, desenvolvendo movimentos mais econômicos e confortáveis.",
    fullDescription:
      "Desenvolvida pelo Prof. Dr. Danis Bois, a Educação Perceptiva do Movimento utiliza sequências de gestos lentos, contínuos e guiados pela atenção. O paciente aprende a reconhecer pontos cegos de tensão e ganha autonomia real para manter seu corpo alinhado e livre no dia a dia.",
    indications: [
      "Dificuldade de manter a postura sem tensão ou dor",
      "Sensação de desconexão corporal e ansiedade somatizada",
      "Prevenção de recidivas de lombalgias e cervicalgias",
    ],
    howItWorks: [
      "Exercícios sensoriais lentos e sentados ou em pé",
      "Foco na respiração e na propriocepção do eixo axial",
      "Diálogo reflexivo sobre a sensação de leveza do movimento",
    ],
    durationMinutes: 50,
    isComplementary: true,
    scientificContext:
      "Estudos do CERAP / Universidade Fernando Pessoa apontam ganhos significativos em autorregulação e alívio de sintomas somáticos.",
    href: "/tratamentos/recuperacao-funcional",
  },
];

export const SCHOOL_INFO = {
  name: "Escola de Fasciaterapia e Movimento",
  foundedBy: "Lucy Mie Aihara",
  foundationYear: 2012,
  mission:
    "Formar fisioterapeutas, educadores físicos e profissionais de saúde e movimento na arte e ciência da Fasciaterapia e Educação Perceptiva (Método Danis Bois), promovendo uma atuação ética, sensível e fundamentada.",
  pedagogicalPillars: [
    {
      title: "Rigor Científico & Prática Supervisionada",
      description: "Conteúdos anatômicos e neurofisiológicos modernos ancorados em centenas de horas de prática supervisionada em mesa clínica.",
    },
    {
      title: "Pedagogia da Atenção e do Toque Sensível",
      description: "Treinamento intensivo da palpação sutil, escuta tecidual e presença terapêutica ética.",
    },
    {
      title: "Respeito à Autonomia do Paciente",
      description: "A formação ensina a cuidar sem impor, capacitando o paciente a ser participante ativo de sua recuperação.",
    },
  ],
  targetAudience: "Fisioterapeutas, Educadores Físicos, Médicos, Terapeutas Ocupacionais e profissionais da área da saúde e movimento.",
  wixUrl: "https://www.escoladefasciaterapiaemovimento.com/",
};

export const SCHOOL_COURSES: SchoolCourse[] = [
  {
    id: "formacao-fasciaterapia",
    title: "Formação Profissional em Fasciaterapia e Educação Perceptiva",
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
      "Campanha comemorativa que une conscientização sobre saúde integral, neuropatia periférica no diabetes, prevenção no câncer de próstata e a oferta do primeiro atendimento gratuito de fotobiomodulação de 40 minutos.",
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
      "Iniciativa contínua de Lucy Aihara com materiais abertos, artigos e orientações sobre a saúde das fáscias no envelhecimento ativo e bem-estar no trabalho.",
    href: "/conhecimento",
    highlights: [
      "Artigos científicos comentados com linguagem acessível",
      "Dicas ergonômicas para quem trabalha sentado",
      "Exercícios sensoriais para praticar em casa",
    ],
  },
];

export const INSTITUTIONAL_FAQS = [
  {
    question: "Como funciona a avaliação fisioterapêutica com Lucy Aihara?",
    answer:
      "A consulta inicial é individual e tem duração aproximada de 50 minutos. Realizamos uma escuta detalhada da sua história de dor e rotina de vida, seguida de exame palpatório minucioso das fáscias, avaliação da mobilidade articular e testes posturais. Ao final, Lucy traça um plano de cuidado fisioterapêutico personalizado, explicando cada etapa com clareza.",
  },
  {
    question: "Para quais tipos de dor a fisioterapia é indicada?",
    answer:
      "A fisioterapia conduzida por Lucy Aihara é indicada para dores lombares (lombalgia), dores cervicais e tensão nos ombros, dores crônicas persistentes, dores articulares (quadril, joelho, ombro), tendinopatias, dores musculares relacionadas ao estresse, além de suporte na recuperação pós-operatória e cuidados complementares de sensibilidade em neuropatias.",
  },
  {
    question: "Onde fica o consultório e quais são os horários de atendimento?",
    answer:
      "O consultório está localizado na Rua Sergipe, 475, conjunto 114, no bairro da Consolação / Higienópolis, em São Paulo (CEP 01243-912), a 350 metros da estação Higienópolis-Mackenzie do Metrô (Linha 4-Amarela). Os atendimentos ocorrem de segunda a sexta-feira, das 8h às 12h e das 14h às 18h, exclusivamente mediante agendamento prévio.",
  },
  {
    question: "Qual é a formação e experiência de Lucy Mie Aihara?",
    answer:
      "Lucy Mie Aihara possui mais de 20 anos de experiência clínica. É graduada em Fisioterapia e Educação Física, com atuação profissional em hospitais de excelência como o Instituto do Coração (InCor) e o Hospital das Clínicas da FMUSP. Possui especialização no Método Danis Bois de Fasciaterapia e Educação Perceptiva do Movimento, sendo fundadora da Escola de Fasciaterapia e Movimento.",
  },
  {
    question: "As sessões de Fasciaterapia ou terapia manual causam dor?",
    answer:
      "Não. A metodologia de Lucy Aihara prioriza o toque sutil, preciso e contínuo, sem manobras bruscas ou estalos agressivos. O trabalho respeita o limiar de tolerância do paciente e visa desarmar as respostas de defesa do sistema nervoso, promovendo alívio e relaxamento muscular progressivo.",
  },
  {
    question: "A fisioterapia substitui o acompanhamento do meu médico?",
    answer:
      "Não. O tratamento fisioterapêutico atua de maneira integrada e complementar à medicina, focando na reabilitação biomecânica, na regulação dos tecidos miofasciais e na autonomia do movimento. Não realizamos diagnósticos médicos patológicos nem prometemos curas garantidas.",
  },
  {
    question: "Como agendar um horário no consultório?",
    answer:
      "Os agendamentos são realizados diretamente pelo WhatsApp oficial no número (11) 99998-6082 ou pelo telefone secundário (11) 99649-6082. Nossa equipe responderá informando os horários disponíveis e as orientações para sua primeira consulta.",
  },
];

export const TREATMENTS = TECHNIQUES;
export type TreatmentService = TherapeuticTechnique;

