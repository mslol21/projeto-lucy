import Link from "next/link";
import { ArrowRight, BookOpen, PlayCircle, HeartHandshake } from "lucide-react";

export function TestimonialsPreviewSection() {
  return (
    <section id="depoimentos" aria-labelledby="depoimentos-previa" className="scroll-mt-24 bg-[#F7FAF8] px-5 py-14 text-[#17385B] sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#3B718B]"><HeartHandshake size={18} aria-hidden="true" /> Histórias e experiências</p>
        <h2 id="depoimentos-previa" className="mt-3 max-w-3xl font-serif text-3xl leading-tight sm:text-4xl">Histórias que merecem ser ouvidas.</h2>
        <p className="mt-4 max-w-2xl leading-7 text-[#405B6B]">Conheça relatos de atendimento, vídeos e um caso apresentado no XXI Congresso da Sociedade Brasileira de Diabetes. São experiências individuais, não garantias de resultados.</p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#D9E5E8] bg-white p-6">
            <BookOpen size={26} className="text-[#427996]" aria-hidden="true" />
            <p className="mt-3 text-xs font-bold uppercase tracking-wider text-[#427996]">Depoimento 01 · Relato de caso</p>
            <h3 className="mt-2 font-serif text-xl font-semibold">Neuropatia diabética: redução da dor e melhora da mobilidade</h3>
            <p className="mt-3 text-sm leading-6 text-[#405B6B]">Vídeo e artigo com o acompanhamento relatado por Lucy e a apresentação do trabalho em congresso.</p>
          </div>
          <div className="rounded-2xl border border-[#D9E5E8] bg-white p-6">
            <PlayCircle size={26} className="text-[#427996]" aria-hidden="true" />
            <p className="mt-3 text-xs font-bold uppercase tracking-wider text-[#427996]">Depoimentos 03, 04 e 05</p>
            <h3 className="mt-2 font-serif text-xl font-semibold">Vídeos e experiências de atendimento</h3>
            <p className="mt-3 text-sm leading-6 text-[#405B6B]">Assista aos depoimentos e leia o relato de Dona Inês em uma página dedicada.</p>
          </div>
        </div>
        <Link href="/depoimentos" className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#17385B] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#28577C] focus-visible:outline-2 focus-visible:outline-offset-2">
          Ver todos os depoimentos <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
