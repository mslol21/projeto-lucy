import { Film, HeartHandshake, LockKeyhole } from "lucide-react";
import { VIDEO_TESTIMONIALS } from "@/data/video-testimonials";

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
            Este espaço receberá depoimentos em vídeo de pessoas atendidas pela escola,
            compartilhados somente com a autorização de cada participante.
          </p>
        </div>

        <div className="mt-9 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {VIDEO_TESTIMONIALS.map((item) => {
            const published = Boolean(item.authorized && item.videoSrc && item.captionsSrc && item.transcript);
            return (
              <article key={item.id} className="overflow-hidden rounded-2xl border border-[#D9E5E8] bg-white shadow-[0_8px_26px_rgba(23,56,91,.035)]">
                {published ? (
                  <video
                    className="aspect-video w-full bg-[#E7EFF3] object-contain"
                    controls
                    playsInline
                    preload="none"
                    aria-label={item.title}
                  >
                    <source src={item.videoSrc} type="video/mp4" />
                    <track kind="captions" src={item.captionsSrc} srcLang="pt-BR" label="Português" default />
                    Seu navegador não suporta vídeo HTML5.
                  </video>
                ) : (
                  <div className="flex aspect-video flex-col items-center justify-center gap-3 bg-[#EAF2F5] px-5 text-center">
                    <div className="flex size-16 items-center justify-center rounded-full border border-[#BCD5E1] bg-white text-[#427996]">
                      <Film size={27} strokeWidth={1.6} aria-hidden="true" />
                    </div>
                    <p className="text-sm font-semibold text-[#355B72]">Espaço reservado para vídeo</p>
                    <p className="max-w-[30ch] text-xs leading-5 text-[#526E7E]">{item.materialUnderReview ? "Material em preparação" : "Conteúdo ainda não publicado"}</p>
                  </div>
                )}
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[.1em] text-[#4D7890]">{item.title}</p>
                  {published ? (
                    <>
                      {item.statement && <blockquote className="mt-3 border-l-2 border-[#84B7CE] pl-4 text-base leading-7 text-[#344F60]">{item.statement}</blockquote>}
                      {item.displayName && <p className="mt-3 text-sm font-medium text-[#3E6378]">{item.displayName}</p>}
                      <details className="mt-5 border-t border-[#DDE8EC] pt-4">
                        <summary className="cursor-pointer text-sm font-semibold text-[#245C7D]">Ler transcrição do vídeo</summary>
                        <p className="mt-3 whitespace-pre-line text-sm leading-7 text-[#405B6B]">{item.transcript}</p>
                      </details>
                    </>
                  ) : (
                    <p className="mt-3 min-h-12 text-sm leading-7 text-[#526E7E]">
                      {item.materialUnderReview ? "Materiais audiovisuais recebidos. Publicação pendente de autorização e preparação das legendas e do relato." : "Depoimento e vídeo serão adicionados futuramente."}
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-6 flex max-w-3xl items-start gap-2 text-xs leading-6 text-[#526E7E]">
          <LockKeyhole size={16} className="mt-1 shrink-0" aria-hidden="true" />
          A publicação de relatos depende de consentimento para uso de imagem, voz e texto.
          Experiências individuais não representam garantia de resultados terapêuticos.
        </p>
      </div>
    </section>
  );
}
