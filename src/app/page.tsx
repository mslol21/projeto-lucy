import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FrequentlyAskedQuestions } from "@/components/sections/FrequentlyAskedQuestions";
import { TestimonialsPreviewSection } from "@/components/sections/TestimonialsPreviewSection";
import { ShareActions } from "@/components/engagement/ShareActions";

const topics = [
  { number:"01", title:"Visão geral", description:"Entenda o propósito da campanha e a importância das duas datas de novembro.", href:"/visao-geral" },
  { number:"02", title:"14 Nov: Diabetes", description:"Conheça o diabetes, sinais de alerta e formas de cuidado.", href:"/diabetes" },
  { number:"03", title:"17 Nov: Próstata", description:"Saúde masculina, prevenção e decisões compartilhadas com profissionais.", href:"/cancer-de-prostata" },
  { number:"04", title:"Fáscia e cuidado", description:"Explore a relação entre movimento, percepção corporal e cuidado.", href:"/fascia-e-cuidado" },
  { number:"05", title:"Trajetória de Lucy", description:"Conheça Lucy Aihara, sua história e sua atuação profissional.", href:"/trajetoria-de-lucy" },
  { number:"06", title:"Neuropatia e SNA", description:"Informações educativas sobre neuropatia e sistema nervoso autônomo.", href:"/neuropatia-e-sna" },
  { number:"07", title:"Checklist corporal", description:"Uma experiência de observação e atenção ao próprio corpo.", href:"/checklist-corporal" },
];

export default function HomePage() {
  return <div className="flex min-h-screen flex-col pb-20 lg:pb-0">
    <Header />
    <main className="reader-friendly flex-1">
      <HeroSection />
      <section id="temas" aria-labelledby="temas-titulo" className="scroll-mt-24 bg-[#F5F2EB] px-5 py-14 text-[#17385B] sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#427996]">Explore esta edição</p>
          <h2 id="temas-titulo" className="mt-3 max-w-3xl font-serif text-3xl leading-tight sm:text-4xl">Sete temas para conhecer no seu ritmo</h2>
          <p className="mt-4 max-w-2xl leading-7 text-[#405B6B]">Comece por um resumo e aprofunde apenas os assuntos que interessarem a você. Cada tema tem sua própria página.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map(topic => <article key={topic.number} className="flex flex-col rounded-2xl border border-[#D9E5E8] bg-white p-6 shadow-sm">
              <span className="inline-flex w-fit rounded-full bg-[#EAF2F5] px-3 py-1 text-xs font-bold text-[#245C7D]">Tema {topic.number}</span>
              <h3 className="mt-4 font-serif text-xl font-semibold">{topic.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-[#405B6B]">{topic.description}</p>
              <Link href={topic.href} className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#17385B] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#28577C] focus-visible:outline-2 focus-visible:outline-offset-2">Conhecer o tema <ArrowRight size={16} aria-hidden="true" /></Link>
            </article>)}
          </div>
        </div>
      </section>
      <FrequentlyAskedQuestions />
      <TestimonialsPreviewSection />
    </main>
    <Footer />
    <ShareActions />
  </div>;
}
