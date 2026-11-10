import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, ArrowUpRight, BookOpen, HeartPulse, ShieldCheck } from "lucide-react";

const pageUrl = "https://projeto-lucy.vercel.app/conhecimento/fascia-renal";

export const metadata: Metadata = {
  title: "Fáscia renal: o que envolve os rins? | Escola de Fasciaterapia",
  description: "Entenda a fáscia renal, sua anatomia e a diferença entre as estruturas que envolvem os rins e os cuidados renais de quem vive com diabetes.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Fáscia renal: além dos músculos, existe uma anatomia para conhecer",
    description: "Guia educativo sobre fáscia renal, cuidado com os rins e diabetes, com fontes científicas.",
    type: "article",
    url: pageUrl,
    publishedTime: "2026-11-10T00:00:00-03:00",
  },
};

const sources = [
  {
    label: "NCBI Bookshelf — Anatomy, Abdomen and Pelvis: Kidneys",
    url: "https://www.ncbi.nlm.nih.gov/books/NBK482385/",
    description: "Anatomia renal e camadas fasciais",
  },
  {
    label: "PubMed — Gerota versus Zuckerkandl: the renal fascia revisited",
    url: "https://pubmed.ncbi.nlm.nih.gov/2682777/",
    description: "Terminologia das fáscias anterior e posterior",
  },
  {
    label: "American Diabetes Association — Standards of Care 2026, capítulo 11",
    url: "https://diabetesjournals.org/care/article/49/Supplement_1/S246/163914/11-Chronic-Kidney-Disease-and-Risk-Management",
    description: "Avaliação da função renal em pessoas com diabetes",
  },
];

export default function FasciaRenalPage() {
  return (
    <div className="min-h-screen bg-[#F8F8F5] text-[#17385B]">
      <Header />
      <main id="conteudo-principal">
        <article>
          <header className="border-b border-[#D9E5E9] bg-white py-12 sm:py-16">
            <div className="mx-auto max-w-4xl px-5 sm:px-8">
              <Link href="/conhecimento" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#356B8A] hover:underline"><ArrowLeft size={16} aria-hidden="true" /> Voltar aos artigos</Link>
              <p className="mt-5 text-xs font-bold uppercase tracking-[.16em] text-[#426D86]">Anatomia em linguagem simples · Leitura de 5 minutos</p>
              <h1 className="mt-4 max-w-3xl font-serif text-[clamp(2.3rem,5vw,4.3rem)] leading-[1.12] tracking-tight">A fáscia também envolve os rins?</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#465F70]">Sim. Além dos músculos, o corpo possui tecidos fasciais que delimitam e organizam estruturas internas. Conheça a fáscia renal e entenda por que isso não deve ser confundido com o tratamento de doenças dos rins.</p>
              <p className="mt-5 text-xs leading-6 text-[#5C7482]">Material educativo elaborado com base nas referências indicadas. Publicação: 10/11/2026. Revisão profissional pela escola: pendente.</p>
            </div>
          </header>

          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_250px]">
            <div className="max-w-[72ch] space-y-10 text-base leading-8 text-[#364F60]">
              <section aria-labelledby="estrutura-title">
                <h2 id="estrutura-title" className="font-serif text-3xl leading-tight text-[#17385B]">Uma estrutura discreta, mas importante</h2>
                <p className="mt-4">Os rins ficam no <strong>retroperitônio</strong>, uma região profunda do abdômen. Ao redor deles existem gordura perirrenal e camadas de tecido conjuntivo conhecidas como fáscia renal. Essas camadas delimitam compartimentos anatômicos e são referências importantes para estudos de anatomia, exames de imagem e procedimentos médicos.</p>
                <div className="mt-6 rounded-2xl border-l-4 border-[#4487B0] bg-[#EAF4F8] p-5">
                  <p className="font-semibold text-[#17385B]">Em outras palavras</p>
                  <p className="mt-2">A fáscia renal faz parte da organização anatômica que envolve os rins. Ela não é a mesma coisa que o tecido funcional do rim, responsável por filtrar o sangue.</p>
                </div>
              </section>

              <section aria-labelledby="camadas-title">
                <h2 id="camadas-title" className="font-serif text-3xl leading-tight text-[#17385B]">Gerota e Zuckerkandl: dois nomes para conhecer</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-[#D6E5EA] bg-white p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#4E7990]">Camada anterior</p>
                    <h3 className="mt-2 font-serif text-2xl text-[#17385B]">Fáscia de Gerota</h3>
                    <p className="mt-2 text-sm leading-7">Relacionada à face anterior do compartimento que envolve o rim e a gordura ao seu redor.</p>
                  </div>
                  <div className="rounded-xl border border-[#D6E5EA] bg-white p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#4E7990]">Camada posterior</p>
                    <h3 className="mt-2 font-serif text-2xl text-[#17385B]">Fáscia de Zuckerkandl</h3>
                    <p className="mt-2 text-sm leading-7">Relacionada à face posterior desse compartimento, próxima às estruturas da parede abdominal posterior.</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7">A nomenclatura varia entre publicações. Por isso, é útil verificar se o material está falando da camada anterior, posterior ou do conjunto fascial renal.</p>
              </section>

              <section aria-labelledby="diabetes-rins-title">
                <h2 id="diabetes-rins-title" className="font-serif text-3xl leading-tight text-[#17385B]">E o que isso tem a ver com o diabetes?</h2>
                <p className="mt-4">A relação principal do diabetes com a saúde renal envolve possíveis alterações da função dos rins ao longo do tempo, não um problema causado especificamente pela fáscia renal. Pessoas com diabetes podem precisar de avaliações periódicas mesmo sem sintomas.</p>
                <p className="mt-4">As diretrizes de 2026 da American Diabetes Association recomendam, em geral, avaliar a <strong>relação albumina/creatinina na urina (UACR)</strong> e a <strong>taxa de filtração glomerular estimada (eGFR)</strong> pelo menos anualmente em pessoas com diabetes tipo 2 e em pessoas com diabetes tipo 1 com cinco anos ou mais de diagnóstico. O acompanhamento deve ser individualizado pela equipe de saúde.</p>
                <div className="mt-6 rounded-xl border border-[#BFD9E7] bg-white p-6">
                  <div className="flex items-center gap-2 font-semibold text-[#17385B]"><HeartPulse size={20} aria-hidden="true" /> O que vale lembrar</div>
                  <p className="mt-3">Nem sempre a doença renal provoca sinais perceptíveis no começo. Exames e acompanhamento são mais confiáveis do que tentar identificar alterações apenas por dor, postura ou sensações corporais.</p>
                </div>
              </section>

              <section aria-labelledby="fasciaterapia-title">
                <h2 id="fasciaterapia-title" className="font-serif text-3xl leading-tight text-[#17385B]">Onde entra a fasciaterapia?</h2>
                <p className="mt-4">A Escola de Fasciaterapia e Movimento trabalha com percepção corporal, movimento e a abordagem de origem francesa conhecida como Método Danis Bois. Conhecer as estruturas fasciais pode enriquecer o entendimento da anatomia e do corpo.</p>
                <p className="mt-4"><strong>Isso não significa que a manipulação da fáscia renal trate doenças renais ou previna complicações do diabetes.</strong> Não há evidência clínica robusta para atribuir ao Método Danis Bois esses efeitos específicos. Nenhuma abordagem manual substitui avaliação médica, exames, medicamentos ou outros cuidados indicados.</p>
                <Link href="/conhecimento/metodo-danis-bois" className="mt-5 inline-flex min-h-11 items-center gap-2 border-b border-[#2B6C91] text-sm font-semibold text-[#235779] hover:text-[#17385B]">Conheça o Método Danis Bois <ArrowUpRight size={16} aria-hidden="true" /></Link>
              </section>

              <section aria-labelledby="animacao-title" className="rounded-2xl border border-[#DBE6EB] bg-[#F1F6F8] p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#2E6987]"><BookOpen size={19} aria-hidden="true" /> Recurso visual complementar</div>
                <h2 id="animacao-title" className="mt-3 font-serif text-2xl text-[#17385B]">Veja como a anatomia pode ser apresentada visualmente</h2>
                <p className="mt-3 text-sm leading-7">O catálogo MedVisuals oferece a animação “The Fascia”. O vídeo não foi reproduzido nesta página porque seu licenciamento para uso em sites institucionais é específico. O conteúdo da animação não foi utilizado para sustentar afirmações médicas deste artigo.</p>
                <a href="https://medvisuals.ai/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#235779] underline underline-offset-4">Conhecer o catálogo original <ArrowUpRight size={16} aria-hidden="true" /></a>
              </section>

              <section aria-labelledby="fontes-title">
                <h2 id="fontes-title" className="font-serif text-3xl text-[#17385B]">Fontes e leitura complementar</h2>
                <ol className="mt-5 space-y-4">
                  {sources.map((source, i) => (
                    <li key={source.url} className="rounded-xl border border-[#DBE6EB] bg-white p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-[#6A8190]">Referência {i + 1}</p>
                      <a href={source.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-start gap-2 text-sm font-semibold leading-6 text-[#235779] underline underline-offset-4">{source.label}<ArrowUpRight size={15} className="mt-1 shrink-0" aria-hidden="true" /></a>
                      <p className="mt-1 text-sm text-[#536C7C]">{source.description}</p>
                    </li>
                  ))}
                </ol>
              </section>
            </div>

            <aside className="self-start rounded-2xl border border-[#D7E5EA] bg-white p-5 text-sm leading-7 text-[#526B79] lg:sticky lg:top-24">
              <div className="flex items-center gap-2 font-semibold text-[#17385B]"><ShieldCheck size={18} aria-hidden="true" /> Conteúdo responsável</div>
              <p className="mt-3">Anatomia conhecida não equivale a eficácia terapêutica comprovada. Em caso de dúvidas sobre a função dos rins, converse com a equipe que acompanha sua saúde.</p>
              <Link href="/conhecimento" className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-[#235779] underline underline-offset-4">Mais artigos da escola</Link>
            </aside>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
