import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/knowledge/Breadcrumbs";
import {
  Activity,
  CheckCircle2,
  HelpCircle,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  BookOpen,
  Sparkles,
  HeartHandshake,
} from "lucide-react";
import { getWhatsAppLink } from "@/data/institutional-data";

export const metadata: Metadata = {
  title: "Fasciaterapia Método Danis Bois em São Paulo | Lucy Aihara",
  description:
    "Entenda o que é a Fasciaterapia (Método Danis Bois), como atua nas fáscias corporais, alívio de dores crônicas e regulação somática com Lucy Aihara na Consolação/Higienópolis, SP.",
  alternates: {
    canonical: "/tratamentos/fasciaterapia",
  },
  openGraph: {
    title: "Fasciaterapia Método Danis Bois | Lucy Aihara — São Paulo",
    description:
      "Terapia manual sutil e profunda nas fáscias corporais. Sessões individuais de 50 minutos com Lucy Aihara, pioneira e docente no Brasil.",
    url: "/tratamentos/fasciaterapia",
  },
};

export default function FasciaterapiaPage() {
  const whatsappUrl = getWhatsAppLink("clinicEvaluation");

  const faqs = [
    {
      q: "A Fasciaterapia dói ou utiliza estalos?",
      a: "Não. Diferente de manipulações osteopáticas com thrust (estalos) ou massagens agressivas, a Fasciaterapia do Método Danis Bois utiliza um toque manual lento, sutil e contínuo. Ela respeita o limiar de conforto do paciente e dialoga com o sistema nervoso autônomo sem gerar dor reflexa.",
    },
    {
      q: "Quantas sessões são necessárias para sentir alívio?",
      a: "Muitos pacientes relatam sensação imediata de leveza e desaceleração do ritmo tensional já na primeira sessão. Em quadros de dor crônica ou sobrecarga prolongada, recomenda-se uma avaliação inicial para traçar um plano de acompanhamento progressivo de 4 a 8 sessões.",
    },
    {
      q: "Qual a diferença entre Fasciaterapia e Liberação Miofascial convencional?",
      a: "A liberação miofascial comum frequentemente aplica pressão vigorosa para desfazer nódulos com força mecânica. A Fasciaterapia baseia-se na 'escuta tecidual': o terapeuta acompanha a micromobilidade intrínseca da fáscia até que o próprio tecido reorganize sua viscoelasticidade e regule o tônus muscular sem agressão.",
    },
    {
      q: "Quem pode se beneficiar da Fasciaterapia?",
      a: "Pessoas com dores lombares e cervicais crônicas, enxaquecas tensionais, fibromialgia, estresse somatizado, fadiga persistente, além de praticantes de atividades físicas e atletas que buscam otimizar a biomecânica e recuperar a mobilidade tecidual.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#1A2421]">
      <Header />

      <div className="bg-white/80 border-b border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs
            items={[
              { label: "Tratamentos", href: "/tratamentos" },
              { label: "Fasciaterapia (Método Danis Bois)" },
            ]}
          />
        </div>
      </div>

      <main className="flex-1">
        {/* Hero */}
        <section className="py-14 sm:py-20 bg-gradient-to-b from-[#FAF8F5] via-[#F4EFEA] to-[#FAF8F5] border-b border-[#E8E2D9]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#183B2B]/10 text-[#183B2B] border border-[#183B2B]/15">
              Especialidade Principal • Método Danis Bois
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#1A2421] font-normal tracking-tight">
              Fasciaterapia
            </h1>
            <p className="text-base sm:text-lg text-[#556370] leading-relaxed max-w-2xl mx-auto font-sans">
              Uma abordagem manual suave, profunda e precisa que atua sobre a rede fascial do corpo,
              desfazendo padrões de rigidez crônica e despertando a inteligência proprioceptiva.
            </p>
            <div className="pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#183B2B] hover:bg-[#122c20] text-white font-medium text-xs sm:text-sm shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#C5A880]" />
                <span>Agendar Avaliação de Fasciaterapia</span>
              </a>
            </div>
          </div>
        </section>

        {/* O que é a Fáscia */}
        <section className="py-16 sm:py-20 bg-white border-b border-[#E8E2D9]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A2421] font-normal mb-4">
                O que é a fáscia e por que ela é tão importante?
              </h2>
              <p className="text-base text-[#4A5568] leading-relaxed mb-4">
                A fáscia é uma teia ininterrupta de tecido conjuntivo que envolve e conecta cada músculo,
                osso, víscera e fibra nervosa do organismo humano. Longe de ser apenas um &ldquo;invólucro
                passivo&rdquo;, as pesquisas contemporâneas em biomecânica e mecanotransdução revelaram
                que a fáscia é o maior órgão sensorial do corpo humano, densamente povoado por
                mecanorreceptores, terminações nervosas livres e células contráteis chamadas miofibroblastos.
              </p>
              <p className="text-base text-[#4A5568] leading-relaxed">
                Sob estresse físico, sedentarismo, movimentos repetitivos ou sobrecarga emocional, a água
                intersticial da matriz fascial perde sua fluidez, gerando aderências, densificações e dor
                difusa. A Fasciaterapia atua restabelecendo a viscoelasticidade e a capacidade de deslizamento
                entre os planos teciduais.
              </p>
            </div>

            {/* Como é a sessão */}
            <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E2DBD0] space-y-6">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1A2421] font-normal">
                Como acontece uma sessão de Fasciaterapia?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-[#556370]">
                <div className="space-y-2">
                  <h3 className="font-semibold text-[#183B2B] text-sm">1. Toque Manual Sem Força Agressiva</h3>
                  <p className="leading-relaxed">
                    O paciente permanece confortavelmente deitado sobre a maca. Com toques gentis e
                    sutis, Lucy avalia a tensão dos tecidos e aplica pressões direcionadas com precisão milimétrica.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-[#183B2B] text-sm">2. Escuta do Movimento Interno</h3>
                  <p className="leading-relaxed">
                    O terapeuta aguarda o momento de relaxamento espontâneo do tecido (o chamado ponto de apoio
                    ou ponto fixo), permitindo que a fáscia recupere seu ritmo livre de micromobilidade.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-[#183B2B] text-sm">3. Regulação do Sistema Nervoso</h3>
                  <p className="leading-relaxed">
                    Ao estimular mecanorreceptores de baixo limiar, a técnica reduz a hiperatividade do sistema
                    nervoso simpático (luta e fuga), induzindo profundo relaxamento somático e alívio da dor.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-[#183B2B] text-sm">4. Integração Perceptiva</h3>
                  <p className="leading-relaxed">
                    Ao final do atendimento, o paciente reflete sobre as sensações corporais percebidas,
                    recebendo orientações de movimento sensorial para prolongar os benefícios no cotidiano.
                  </p>
                </div>
              </div>
            </div>

            {/* Indicações e Benefícios */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A2421] font-normal">
                Para quem é indicada a Fasciaterapia?
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#4A5568]">
                {[
                  "Dores lombares, torácicas e cervicais persistentes",
                  "Tensões nos ombros e mandíbula (bruxismo e DTM)",
                  "Rigidez matinal e perda de amplitude de movimento",
                  "Sobrecarga física decorrente de estresse crônico",
                  "Sensação de fadiga somática e desconexão com o corpo",
                  "Recuperação de mobilidade após cicatrizações e imobilizações",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9]">
                    <CheckCircle2 className="w-4 h-4 text-[#4A6B5D] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Artigo Relacionado do Conhecimento */}
            <div className="p-6 rounded-2xl bg-white border border-[#E2DBD0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C5A880]">
                  Artigo Científico Aprofundado
                </span>
                <h3 className="font-serif text-lg text-[#1A2421]">
                  O Método Danis Bois e a Fasciaterapia: Origem, Fundamentos e Prática
                </h3>
                <p className="text-xs text-[#718096]">
                  Aprofunde-se nos 4 pilares, histórico na França e pesquisas acadêmicas do CERAP.
                </p>
              </div>
              <Link
                href="/conhecimento/metodo-danis-bois"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#183B2B] hover:text-[#25523D] flex-shrink-0"
              >
                <span>Ler artigo completo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* FAQ */}
            <div className="space-y-4 pt-6">
              <h2 className="font-serif text-2xl text-[#1A2421] font-normal mb-4">
                Dúvidas Comuns sobre Fasciaterapia
              </h2>
              {faqs.map((f, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D9] space-y-2">
                  <h3 className="font-serif text-base text-[#183B2B] font-semibold">
                    {f.q}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#556370] leading-relaxed">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Final */}
            <div className="pt-8 text-center space-y-4">
              <h3 className="font-serif text-2xl text-[#1A2421]">
                Experimente o alívio que o toque fascial proporciona
              </h3>
              <p className="text-sm text-[#556370] max-w-xl mx-auto">
                Sessões individuais de 50 minutos na Consolação / Higienópolis, São Paulo.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-[#073322] font-semibold text-sm sm:text-base shadow-sm transition-transform active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Agendar Sessão pelo WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
