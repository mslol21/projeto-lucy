/**
 * Depoimentos da Escola de Fasciaterapia e Movimento.
 *
 * O usuário confirmou autorização para os vídeos. Não publique informações
 * pessoais, transcrições ou alegações clínicas além das autorizadas.
 *
 * Para os depoimentos 03 e 04, basta copiar os arquivos MP4:
 *   public/depoimentos/depoimento-03/video-01.mp4
 *   public/depoimentos/depoimento-03/video-02.mp4
 *   public/depoimentos/depoimento-04/video-01.mp4
 *
 * A detecção é automática após o deploy na Vercel. Não é necessário editar TSX.
 */
export type VideoTestimonial = {
  id: "depoimento-01" | "depoimento-02" | "depoimento-03" | "depoimento-04";
  title: string;
  youtubeId?: string;
  /** Caminhos públicos; o player só aparece após o arquivo responder com vídeo. */
  videos?: readonly { src: string; label: string }[];
  statement?: string;
  displayName?: string;
  transcript?: string;
  authorized: boolean;
};

export const VIDEO_TESTIMONIALS: readonly VideoTestimonial[] = [
  { id: "depoimento-01", title: "Depoimento 01", youtubeId: "Un-wQkY4A0E", authorized: true },
  { id: "depoimento-02", title: "Depoimento 02", authorized: false },
  {
    id: "depoimento-03", title: "Depoimento 03", authorized: true,
    videos: [
      { src: "/depoimentos/depoimento-03/video-01.mp4", label: "Vídeo 1" },
      { src: "/depoimentos/depoimento-03/video-02.mp4", label: "Vídeo 2" },
    ],
  },
  {
    id: "depoimento-04", title: "Depoimento 04", authorized: true,
    videos: [{ src: "/depoimentos/depoimento-04/video-01.mp4", label: "Vídeo 1" }],
  },
];
