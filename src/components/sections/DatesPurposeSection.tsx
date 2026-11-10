import Image from "next/image";
import { ArrowRight, CalendarDays } from "lucide-react";

const topics = [
  {
    day: "14", month: "NOVEMBRO", category: "Diabetes", title: "Dia Mundial do Diabetes",
    description: "Uma oportunidade para falar sobre os tipos de diabetes, sinais que merecem atenção, acompanhamento e qualidade de vida.",
    href: "#diabetes", label: "Ler especial sobre diabetes"
  },
  {
    day: "17", month: "NOVEMBRO", category: "Saúde do homem", title: "Dia Nacional de Combate ao Câncer de Próstata",
    description: "Informações sobre a próstata, sintomas, fatores de risco e decisões de cuidado discutidas com profissionais de saúde.",
    href: "#saude-masculina", label: "Ler especial sobre próstata"
  }
];

export function DatesPurposeSection() {
  return (
    <section id="datas" aria-labelledby="datas-title" className="scroll-mt-24 border-b border-[#DEE6E9] bg-white py-20 text-[#17385B] sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-5 border-b-2 border-[#17385B] pb-5">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[.2em] text-[#47738C]">Destaque do mês</p>
            <h2 id="datas-title" className="font-serif text-[clamp(2.1rem,4.5vw,4rem)] leading-tight">Duas datas que merecem atenção.</h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[#4D6475]">No Novembro Azul, informação e acolhimento ajudam a abrir conversas importantes sobre a saúde.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {topics.map((topic) => (
            <article key={topic.day} className="group flex flex-col border border-[#D6E1E7] bg-[#F8FAFA]">
              <div className="flex items-start gap-5 p-6 sm:gap-7 sm:p-8">
                <div className="flex w-[75px] shrink-0 flex-col items-center border-t-4 border-[#17385B] bg-[#E4EFF4] p-3 sm:w-24">
                  <span className="font-serif text-5xl leading-none">{topic.day}</span>
                  <span className="mt-2 text-[9px] font-bold tracking-[.14em]">{topic.month}</span>
                </div>
                <div>
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-[#47738C]"><CalendarDays size={15} />{topic.category}</span>
                  <h3 className="mt-3 font-serif text-2xl leading-tight sm:text-3xl">{topic.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#4D6475] sm:text-base">{topic.description}</p>
                </div>
              </div>
              <a href={topic.href} className="mt-auto flex min-h-14 items-center justify-between border-t border-[#D6E1E7] px-6 py-4 text-sm font-semibold hover:bg-[#E4EFF4] sm:px-8">
                {topic.label} <ArrowRight size={18} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
        <aside className="mt-10 grid overflow-hidden border border-[#D6E1E7] bg-[#F6F7F5] md:grid-cols-[200px_1fr]">
          <div className="relative min-h-[160px] bg-white">
            <Image src="/images/escola-material-institucional.png" alt="Material institucional da Escola de Fasciaterapia e Movimento" fill sizes="200px" className="object-contain p-4" />
          </div>
          <div className="p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[.12em] text-[#47738C]">Escola de Fasciaterapia e Movimento</p>
            <h3 className="mt-2 font-serif text-2xl">Informação que continua depois de novembro</h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#4D6475]">Além das datas de conscientização, a escola compartilha conteúdos sobre percepção corporal, movimento e cuidado individualizado. Conheça a trajetória de Lucy e as iniciativas da instituição.</p>
            <a href="#historia" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4">Conhecer a trajetória de Lucy <ArrowRight size={16} /></a>
          </div>
        </aside>
      </div>
    </section>
  );
}
