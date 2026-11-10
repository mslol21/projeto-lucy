import Link from "next/link";
import { Activity, HeartPulse, ArrowUpRight } from "lucide-react";
const cards = [
  { icon: Activity, tag: "Diabetes e percepção corporal", title: "Mobilidade, sensibilidade e atenção aos pés", content: "Pessoas com diabetes podem apresentar alterações de sensibilidade, formigamento e dor. Movimentos adaptados e atenção ao corpo podem integrar o cuidado, mas não diagnosticam neuropatia. A avaliação dos pés e o tratamento médico continuam essenciais." },
  { icon: HeartPulse, tag: "Assoalho pélvico e saúde do homem", title: "Reabilitação e qualidade de vida", content: "A fisioterapia pélvica pode integrar a reabilitação de sintomas urinários, inclusive em situações específicas após tratamento da próstata, com indicação individualizada. Não previne nem trata o câncer de próstata." },
];
export function FasciaConnectionSection() {
  return (
    <section id="fascia-cuidado" aria-labelledby="fascia-title" className="scroll-mt-24 bg-[#F9FAF8] py-16 text-[#17385B] sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-xs font-bold uppercase tracking-[.16em] text-[#426C84]">Uma ponte com a Escola de Fasciaterapia e Movimento</p>
        <h2 id="fascia-title" className="mt-3 max-w-4xl font-serif text-3xl leading-tight sm:text-4xl">Fáscia, movimento e cuidado em saúde</h2>
        <p className="mt-4 max-w-3xl leading-7 text-[#435D6D]">A experiência de Lucy Aihara aproxima a educação do movimento de conversas importantes sobre condições crônicas. A abordagem corporal é complementar e deve respeitar o acompanhamento de saúde de cada pessoa.</p>
        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {cards.map((card) => { const Icon=card.icon; return (
            <article key={card.title} className="border border-[#D5E2E8] bg-white p-6 sm:p-8">
              <Icon size={26} className="text-[#31759D]" aria-hidden="true"/>
              <p className="mt-5 text-xs font-bold uppercase tracking-[.1em] text-[#4B758C]">{card.tag}</p>
              <h3 className="mt-3 font-serif text-2xl">{card.title}</h3>
              <p className="mt-4 leading-7 text-[#435D6D]">{card.content}</p>
            </article>
          ); })}
        </div>
        <Link href="/conhecimento/metodo-danis-bois" className="mt-7 inline-flex min-h-11 items-center gap-2 border-b border-[#17385B] text-sm font-semibold">Saiba mais sobre o Método Danis Bois <ArrowUpRight size={16} aria-hidden="true"/></Link>
        <div className="mt-6 rounded-xl border border-[#D5E2E8] bg-[#F0F7FA] p-5"><p className="text-sm font-semibold text-[#17385B]">A fáscia também está presente ao redor dos rins.</p><p className="mt-2 text-sm leading-7 text-[#435D6D]">Conheça a anatomia da fáscia renal e entenda por que cuidar da função dos rins em pessoas com diabetes é um tema diferente da terapia manual.</p><Link href="/conhecimento/fascia-renal" className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#235779] underline underline-offset-4">Ler artigo sobre fáscia renal <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
        <p className="mt-4 text-xs leading-6 text-[#526B78]">A efetividade específica da fasciaterapia pelo Método Danis Bois para neuropatia diabética ou câncer de próstata não está estabelecida por evidência clínica robusta.</p>
      </div>
    </section>
  );
}
