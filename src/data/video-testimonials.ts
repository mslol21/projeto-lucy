/**
 * Depoimentos da Escola de Fasciaterapia e Movimento.
 *
 * Os depoimentos 03 e 04 têm vídeos com publicação autorizada.
 * O depoimento 05 é exclusivamente textual e teve sua divulgação autorizada.
 * Não publique informações pessoais, transcrições ou alegações clínicas além das autorizadas.
 *
 * Arquivos MP4 configurados:
 *   public/depoimentos/depoimento-03/VID-20261110-WA0021.mp4
 *   public/depoimentos/depoimento-03/VID-20261110-WA0022.mp4
 *   public/depoimentos/depoimento-04/VID-20261110-WA0026.mp4
 *
 * A detecção é automática após o deploy na Vercel. Não é necessário editar TSX.
 */
export type VideoTestimonial = {
  id: "depoimento-01" | "depoimento-02" | "depoimento-03" | "depoimento-04" | "depoimento-05";
  title: string;
  youtubeId?: string;
  /** Caminhos públicos; o player só aparece após o arquivo responder com vídeo. */
  videos?: readonly { src: string; label: string }[];
  statement?: string;
  displayName?: string;
  transcript?: string;
  authorized: boolean;
  /** Texto somente quando houver consentimento expresso para essa forma de divulgação. */
  textPendingConsent?: boolean;
};

export const VIDEO_TESTIMONIALS: readonly VideoTestimonial[] = [
  { id: "depoimento-01", title: "Depoimento 01", youtubeId: "Un-wQkY4A0E", authorized: true },
  { id: "depoimento-02", title: "Depoimento 02", authorized: false },
  {
    id: "depoimento-03", title: "Depoimento 03", authorized: true,
    videos: [
      { src: "/depoimentos/depoimento-03/VID-20261110-WA0021.mp4", label: "Vídeo 1" },
      { src: "/depoimentos/depoimento-03/VID-20261110-WA0022.mp4", label: "Vídeo 2" },
    ],
  },
  {
    id: "depoimento-04",
    title: "Depoimento 04",
    authorized: true,
    videos: [{ src: "/depoimentos/depoimento-04/VID-20261110-WA0026.mp4", label: "Vídeo 1" }],
  },
  {
    id: "depoimento-05",
    title: "Depoimento 05",
    authorized: true,
    displayName: "Dona Inês",
    statement: "Olha, eu me senti muito bem com esse tratamento. É, para mim é uma novidade, porque eu esperava somente que fosse assim, um tratamento só para minhas pernas, e não, eu estou vendo que é um tratamento para o corpo todo, corpo em geral. E eu estou gostando.",
    transcript: "Paciente (Dona Inês): Olha, eu me senti muito bem com esse tratamento. É, para mim é uma novidade, porque eu esperava somente que fosse assim, um tratamento só para minhas pernas, e não, eu estou vendo que é um tratamento para o corpo todo, corpo em geral. E eu estou gostando.\n\nProfissional: A senhora estava com trombose?\n\nPaciente: Eu estou, sim, eu estou com uma trombose na perna esquerda. E acho que já vai... já senti que a perna está menos inchada, menos pesada. Então, eu acho que já está surtindo efeito.\n\nProfissional: Nós ficamos 3 horas conversando, atendendo, né? E agora são 18h, começamos às 14h. Antes de eu chegar, a senhora foi ao banheiro durante...?\n\nPaciente: E durante o tratamento eu fui duas vezes no banheiro também.\n\nProfissional: É, então fez bastante xixi, né? Fez bastante xixi e outra... outro problema que a senhora tem é o Lipedema.\n\nPaciente: Lipedema. Exatamente. Por isso que às vezes o uso da meia compressiva parece que forma um torniquete na minha perna. Então, pretendo também fazer um tratamento para o Lipedema.\n\nProfissional: Isso, e é isso que a gente está fazendo junto da fisioterapia. Seja muito bem-vinda e vamos acompanhar nos próximos capítulos. Hoje é dia 28 de março de 2025. Tá bom, muito bom, dona Inês.",
  },
];
