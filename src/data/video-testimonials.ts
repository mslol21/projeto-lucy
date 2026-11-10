/**
 * Depoimentos: espaços reservados.
 *
 * Para publicar: obter autorização expressa para uso de imagem, voz e relato;
 * armazenar vídeo em /public/videos e legenda .vtt (ou CDN autorizada);
 * adicionar uma transcrição acessível; preencher os dados e marcar authorized=true.
 * Nunca publicar identidade, condição clínica ou resultado de tratamento sem consentimento.
 */
export type VideoTestimonial = {
  id: "depoimento-01" | "depoimento-02";
  title: string;
  videoSrc?: string;
  captionsSrc?: string;
  transcript?: string;
  statement?: string;
  displayName?: string;
  authorized: boolean;
};

export const VIDEO_TESTIMONIALS: readonly VideoTestimonial[] = [
  { id: "depoimento-01", title: "Depoimento 01", authorized: false },
  { id: "depoimento-02", title: "Depoimento 02", authorized: false },
];
