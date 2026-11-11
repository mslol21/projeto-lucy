/**
 * Depoimentos: espaços reservados.
 *
 * Para publicar: obter autorização expressa para uso de imagem, voz e relato;
 * armazenar vídeo em /public/videos e legenda .vtt (ou CDN autorizada);
 * adicionar uma transcrição acessível; preencher os dados e marcar authorized=true.
 * Nunca publicar identidade, condição clínica ou resultado de tratamento sem consentimento.
 */
export type VideoTestimonial = {
  id: "depoimento-01" | "depoimento-02" | "depoimento-03" | "depoimento-04";
  title: string;
  videoSrc?: string;
  youtubeId?: string;
  captionsSrc?: string;
  transcript?: string;
  statement?: string;
  displayName?: string;
  authorized: boolean;
  materialUnderReview?: boolean;
};

export const VIDEO_TESTIMONIALS: readonly VideoTestimonial[] = [
  { id: "depoimento-01", title: "Depoimento 01", youtubeId: "Un-wQkY4A0E", authorized: true },
  { id: "depoimento-02", title: "Depoimento 02", authorized: false },
  // Duas fotografias e dois vídeos foram recebidos na conversa.
  // Autorização para uso dos vídeos confirmada nesta conversa; seleção e legendagem pendentes.
  { id: "depoimento-03", title: "Depoimento 03", authorized: false, materialUnderReview: true },
  // Duas fotos e um vídeo de aproximadamente 2min39s enviados para o quarto depoimento.
  // Vídeo autorizado; contextualização das observações clínicas e legendagem pendentes.
  { id: "depoimento-04", title: "Depoimento 04", authorized: false, materialUnderReview: true },
];
