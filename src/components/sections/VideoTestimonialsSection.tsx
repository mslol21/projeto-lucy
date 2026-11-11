import { Film, HeartHandshake, LockKeyhole, ExternalLink, Play, FileText } from "lucide-react";
import { VIDEO_TESTIMONIALS } from "@/data/video-testimonials";
import { LocalTestimonialVideos } from "@/components/sections/LocalTestimonialVideos";

export function VideoTestimonialsSection() {
  return (
    <section
      id="depoimentos"
      aria-labelledby="depoimentos-titulo"
      className="scroll-mt-24 border-y border-[#DBE7E9] bg-[#F7FAF8] py-16 text-[#17385B] sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-[#3B718B]">
            <HeartHandshake size={18} aria-hidden="true" />
            Experiências de atendimento
          </p>
          <h2 id="depoimentos-titulo" className="mt-3 font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.15]">
            Histórias contadas por quem viveu o cuidado.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#405B6B]">
            Depoimentos e registros de atendimento compartilhados com autorização.
            Experiências individuais não representam garantia de resultados.
          </p>
        </div>

        <div className="mt-9 grid gap-6 md:grid-cols-2">
          {VIDEO_TESTIMONIALS.map((item) => {
            const youtubePublished = Boolean(item.authorized && item.youtubeId);
            const hasLocalVideos = Boolean(item.authorized && item.videos?.length);
            return (
              <article key={item.id} className="overflow-hidden rounded-2xl border border-[#D9E5E8] bg-white shadow-[0_8px_26px_rgba(23,56,91,.035)]">
                {youtubePublished ? (
                  <div className="bg-[#E7EFF3]">
                    <a
                      href={"https://www.youtube.com/watch?v=" + item.youtubeId}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-14 items-center justify-center gap-2 bg-[#17385B] px-4 py-3 text-center text-sm font-semibold text-white hover:bg-[#28577C] focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      <Play size={18} aria-hidden="true" /> Assistir ao depoimento no YouTube <ExternalLink size={16} aria-hidden="true" />
                    </a>
                    <div className="aspect-video w-full">
                      <iframe
                        className="h-full w-full"
                        src={"https://www.youtube.com/embed/" + item.youtubeId + "?rel=0"}
                        title={"Vídeo — " + item.title}
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                    <p className="px-4 py-3 text-center text-xs leading-5 text-[#456277]">
                      Se o vídeo não reproduzir aqui, use o botão acima para abrir diretamente no YouTube.
                    </p>
                  </div>
                ) : item.authorized && item.transcript && !item.videos?.length ? (
                  <div className="flex items-center gap-3 border-b border-[#DDE8EC] bg-[#EAF2F5] px-6 py-5">
                    <FileText size={25} className="shrink-0 text-[#427996]" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold text-[#355B72]">Relato de Dona Inês</p>
                      <p className="text-xs text-[#526E7E]">Entrevista de 28 de março de 2025 · Depoimento em texto</p>
                    </div>
                  </div>
                ) : item.textPendingConsent ? (
                  <div className="flex aspect-video flex-col items-center justify-center gap-3 bg-[#EAF2F5] px-5 text-center">
                    <div className="flex size-16 items-center justify-center rounded-full border border-[#BCD5E1] bg-white text-[#427996]">
                      <FileText size={27} strokeWidth={1.6} aria-hidden="true" />
                    </div>
                    <p className="text-sm font-semibold text-[#355B72]">Depoimento em texto</p>
                    <p className="max-w-[36ch] text-xs leading-5 text-[#526E7E]">Aguardando autorização para divulgação do relato</p>
                  </div>
                ) : hasLocalVideos && item.videos ? (
                  <LocalTestimonialVideos videos={item.videos} title={item.title} />
                ) : (
                  <div className="flex aspect-video flex-col items-center justify-center gap-3 bg-[#EAF2F5] px-5 text-center">
                    <div className="flex size-16 items-center justify-center rounded-full border border-[#BCD5E1] bg-white text-[#427996]">
                      <Film size={27} strokeWidth={1.6} aria-hidden="true" />
                    </div>
                    <p className="text-sm font-semibold text-[#355B72]">Espaço reservado para vídeo</p>
                    <p className="max-w-[30ch] text-xs leading-5 text-[#526E7E]">Conteúdo ainda não publicado</p>
                  </div>
                )}
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[.1em] text-[#4D7890]">{item.title}</p>
                  {item.authorized && item.statement && <blockquote className="mt-3 border-l-2 border-[#84B7CE] pl-4 text-base leading-7 text-[#344F60]">{item.statement}</blockquote>}
                  {item.authorized && item.displayName && <p className="mt-3 text-sm font-medium text-[#3E6378]">{item.displayName}</p>}
                  {item.authorized && item.transcript && item.videos?.length && (
                    <details className="mt-5 border-t border-[#DDE8EC] pt-4">
                      <summary className="cursor-pointer text-sm font-semibold text-[#245C7D]">Ler transcrição do vídeo</summary>
                      <p className="mt-3 whitespace-pre-line text-sm leading-7 text-[#405B6B]">{item.transcript}</p>
                    </details>
                  )}
                  {item.authorized && item.transcript && !item.videos?.length && (
                    <div className="mt-5 space-y-4 border-t border-[#DDE8EC] pt-5 text-sm leading-7 text-[#405B6B]">
                      {item.transcript.split("\\n\\n").map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                      <p className="text-xs leading-6 text-[#526E7E]">Relato pessoal sobre a experiência de atendimento. Não comprova eficácia clínica nem substitui avaliação e acompanhamento médico, especialmente em casos de trombose.</p>
                    </div>
                  )}
                  {item.textPendingConsent && <p className="mt-3 text-sm leading-7 text-[#526E7E]">O relato será disponibilizado exclusivamente em formato de texto após autorização para divulgação.</p>}
                  {!youtubePublished && !hasLocalVideos && !item.textPendingConsent && !(item.authorized && item.transcript) && <p className="mt-3 text-sm leading-7 text-[#526E7E]">Depoimento e vídeo serão adicionados futuramente.</p>}
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-6 flex max-w-3xl items-start gap-2 text-xs leading-6 text-[#526E7E]">
          <LockKeyhole size={16} className="mt-1 shrink-0" aria-hidden="true" />
          A utilização de imagem, voz e relato depende de autorização.
          Resultados individuais não representam garantia de resposta terapêutica.
        </p>
      </div>
    </section>
  );
}
