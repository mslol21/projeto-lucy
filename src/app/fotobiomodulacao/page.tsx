import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/knowledge/Breadcrumbs";
import {
  SunMedium,
  Sparkles,
  ShieldCheck,
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  MessageCircle,
  ArrowRight,
  ExternalLink,
  Layers,
  HeartHandshake,
} from "lucide-react";
import { NOVEMBER_BLUE_OFFER } from "@/data/campaign-data";

export const metadata: Metadata = {
  title: "Fotobiomodulação: O que é, Como Funciona e Evidências | Novembro Azul 2026",
  description:
    "Compreenda a fotobiomodulação: técnica com luz de baixa intensidade (laser e LED) para estímulo biológico celular, suas aplicações em reabilitação e o primeiro atendimento gratuito de Novembro Azul com Lucy Aihara.",
  alternates: {
    canonical: "https://novembroazul.escoladefasciaterapiaemovimento.com/fotobiomodulacao",
  },
  openGraph: {
    title: "Fotobiomodulação: Guia Técnico e Cuidado por Luz | Novembro Azul 2026",
    description:
      "Técnica que utiliza luz em parâmetros específicos para respostas biológicas teciduais. Agende seu primeiro atendimento gratuito em São Paulo.",
    url: "https://novembroazul.escoladefasciaterapiaemovimento.com/fotobiomodulacao",
    type: "article",
  },
};

export default function FotobiomodulacaoDedicatedPage() {
  const offer = NOVEMBER_BLUE_OFFER;
  const whatsappUrl = `https://wa.me/${offer.whatsappNumber}?text=${encodeURIComponent(
    offer.whatsappMessage
  )}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: offer.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB] text-[#17385B]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />

      <main className="flex-1">
        {/* Breadcrumb de Navegação */}
        <div className="bg-white/70 border-b border-stone-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Fotobiomodulação" }
              ]}
            />
          </div>
        </div>

        {/* Hero da Página de Fotobiomodulação */}
        <header className="relative py-14 sm:py-20 bg-gradient-to-b from-[#17385B] via-[#1b3b6f] to-[#17385B] text-white overflow-hidden border-b border-[#84B7CE]/20">
          <div
            className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#84B7CE]/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#84B7CE]/20 text-[#84B7CE] border border-[#84B7CE]/30 text-xs font-semibold tracking-wider uppercase">
                <SunMedium className="w-4 h-4 text-[#84B7CE]" aria-hidden="true" />
                <span>Educação em Saúde e Biofotônica</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-tight text-white">
                Fotobiomodulação: Princípios, Aplicações e Cuidados
              </h1>

              <p className="text-base sm:text-lg text-[#C7D9D2] leading-relaxed font-sans">
                Uma técnica não invasiva fundamentada na aplicação de luz em parâmetros específicos (laser ou LED) para estimular respostas biológicas nos tecidos celulares, auxiliar na modulação inflamatória e promover o autocuidado consciente.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#84B7CE]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Atendimento com Lucy Aihara (InCor/HCFMUSP)
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  Campanha Especial Novembro Azul 2026
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Conteúdo Central Estruturado */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
          {/* 1. Definição da Técnica */}
          <section className="bg-white p-7 sm:p-10 rounded-3xl rounded-tr-[52px] border border-stone-200 shadow-2xs space-y-4">
            <div className="flex items-center gap-2 text-[#527fae]">
              <SunMedium className="w-5 h-5 text-[#527fae]" />
              <h2 className="text-xs font-semibold tracking-wider uppercase">1. Definição da Técnica</h2>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#17385B]">
              O que é a fotobiomodulação?
            </h3>
            <p className="text-sm sm:text-base text-[#415A77] leading-relaxed">
              A <strong>fotobiomodulação (PBM)</strong> é uma modalidade terapêutica física que utiliza fontes luminosas de baixa intensidade — geralmente diodos laser ou LEDs — emitindo fótons em comprimentos de onda específicos (predominantemente nas faixas da luz vermelha e infravermelha próxima).
            </p>
            <p className="text-sm sm:text-base text-[#415A77] leading-relaxed">
              Ao contrário de lasers cirúrgicos de alta energia, a fotobiomodulação opera em regime estritamente atérmico (sem aquecimento destrutivo). Sua ação é de natureza fotoquímica e fotofísica: os fótons penetram na derme e nos tecidos conectivos, sendo absorvidos por fotorreceptores celulares sem provocar lesão mecânica.
            </p>
          </section>

          {/* 2. Como Funciona a Aplicação de Luz */}
          <section className="bg-white p-7 sm:p-10 rounded-3xl rounded-tr-[52px] border border-stone-200 shadow-2xs space-y-4">
            <div className="flex items-center gap-2 text-[#527fae]">
              <Layers className="w-5 h-5 text-[#527fae]" />
              <h2 className="text-xs font-semibold tracking-wider uppercase">2. Mecanismo de Ação Biológico</h2>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#17385B]">
              Como a luz atua no nível celular
            </h3>
            <div className="space-y-3 text-sm sm:text-base text-[#415A77] leading-relaxed">
              <p>
                O principal fotorreceptor celular identificado pela literatura é o <strong>citocromo c oxidase</strong>, enzima fundamental situada na membrana interna das mitocôndrias (Complexo IV da cadeia transportadora de elétrons).
              </p>
              <p>
                Quando a luz no comprimento de onda exato atinge o citocromo c oxidase, estimula a dissociação do óxido nítrico e otimiza a respiração celular. Esse processo resulta em:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-[#17385B]">
                <li className="flex items-start gap-2 bg-[#F5F2EB] p-3 rounded-xl border border-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Aumento da produção de ATP celular (energia disponível para reparação).</span>
                </li>
                <li className="flex items-start gap-2 bg-[#F5F2EB] p-3 rounded-xl border border-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Modulação de citocinas inflamatórias e redução do estresse oxidativo.</span>
                </li>
                <li className="flex items-start gap-2 bg-[#F5F2EB] p-3 rounded-xl border border-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Estímulo à síntese de colágeno e suporte ao tecido fascial conectivo.</span>
                </li>
                <li className="flex items-start gap-2 bg-[#F5F2EB] p-3 rounded-xl border border-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Melhora da microcirculação vascular periférica transitória.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* 3. Possíveis Aplicações Clínicas */}
          <section className="bg-white p-7 sm:p-10 rounded-3xl rounded-tr-[52px] border border-stone-200 shadow-2xs space-y-4">
            <div className="flex items-center gap-2 text-[#527fae]">
              <HeartHandshake className="w-5 h-5 text-[#527fae]" />
              <h2 className="text-xs font-semibold tracking-wider uppercase">3. Indicações no Cuidado e Reabilitação</h2>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#17385B]">
              Onde a técnica pode ser empregada
            </h3>
            <p className="text-sm sm:text-base text-[#415A77] leading-relaxed">
              As aplicações práticas dependem sempre da avaliação fisioterapêutica individual, do equipamento aprovado pela Anvisa e do protocolo dosimétrico definido (tempo, potência e área de contato):
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#F5F2EB] border border-stone-200 space-y-2">
                <h4 className="font-serif font-semibold text-[#17385B] text-base">Alívio de Tensões</h4>
                <p className="text-xs text-[#415A77] leading-relaxed">
                  Auxílio na recuperação de sobrecargas musculares, contraturas e pontos dolorosos crônicos na coluna e articulações.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F5F2EB] border border-stone-200 space-y-2">
                <h4 className="font-serif font-semibold text-[#17385B] text-base">Reparo Tecidual</h4>
                <p className="text-xs text-[#415A77] leading-relaxed">
                  Estímulo aos fibroblastos e suporte na regeneração do tecido conjuntivo e de fáscias sob constante estresse biomecânico.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F5F2EB] border border-stone-200 space-y-2">
                <h4 className="font-serif font-semibold text-[#17385B] text-base">Cuidado Integrativo</h4>
                <p className="text-xs text-[#415A77] leading-relaxed">
                  Associação com o toque suave, a ginástica sensorial e a reeducação do movimento consciente para promoção do bem-estar.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Cuidados, Limitações e Contraindicações */}
          <section className="bg-amber-50/70 border border-amber-300 p-7 sm:p-10 rounded-3xl rounded-tr-[52px] space-y-4 text-amber-950">
            <div className="flex items-center gap-2 text-amber-800">
              <AlertTriangle className="w-5 h-5 text-amber-700" />
              <h2 className="text-xs font-semibold tracking-wider uppercase">4. Cuidados, Limitações e Contraindicações</h2>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-amber-900">
              Rigor ético, segurança e limites biológicos
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-amber-900/90 leading-relaxed">
              <p>
                <strong>Proteção Ocular Obrigatória:</strong> A luz colimada exige uso de óculos de proteção específicos com filtro adequado ao comprimento de onda utilizado pelo equipamento.
              </p>
              <p>
                <strong>Contraindicações Clínicas:</strong> Não se deve aplicar a irradiação direta sobre lesões neoplásicas malignas conhecidas (câncer ativo) sem autorização oncológica, sobre a glândula tireoide em caso de desordens não controladas, ou sobre o útero gravídico.
              </p>
              <p>
                <strong>Aviso Ético Obrigatório:</strong> A fotobiomodulação <strong>NÃO</strong> é tratamento para o câncer de próstata e <strong>NÃO</strong> substitui medicamentos hipoglicemiantes ou insulinoterapia para o diabetes mellitus. Trata-se de recurso fisioterapêutico de reabilitação funcional e alívio de desconfortos teciduais.
              </p>
            </div>
          </section>

          {/* 5. Referências Científicas Verificáveis */}
          <section className="bg-white p-7 sm:p-10 rounded-3xl rounded-tr-[52px] border border-stone-200 shadow-2xs space-y-4">
            <div className="flex items-center gap-2 text-[#527fae]">
              <BookOpen className="w-5 h-5 text-[#527fae]" />
              <h2 className="text-xs font-semibold tracking-wider uppercase">5. Referências Científicas Verificáveis</h2>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#17385B]">
              Literatura acadêmica de referência
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-[#415A77]">
              <li className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                <strong>Hamblin, M. R. (2016).</strong> <em>Photobiomodulation or low-level laser therapy.</em> Journal of Biophotonics, 9(11-12), 1122-1124. (Fundamentos sobre mecanismos de biofotônica e sinalização mitocondrial).
              </li>
              <li className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                <strong>de Freitas, L. F., & Hamblin, M. R. (2016).</strong> <em>Proposed Mechanisms of Photobiomodulation or Low-Level Light Therapy.</em> IEEE Journal of Selected Topics in Quantum Electronics, 22(3), 348-364.
              </li>
              <li className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                <strong>World Association for photobiomoduLation Therapy (WALT).</strong> <em>Consensus guidelines for dosages and clinical protocols in rehabilitation and musculoskeletal pain.</em>
              </li>
            </ul>
          </section>

          {/* 6. Perguntas Frequentes (FAQ) */}
          <section className="bg-white p-7 sm:p-10 rounded-3xl rounded-tr-[52px] border border-stone-200 shadow-2xs space-y-5">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#527fae]">
                Tire suas Dúvidas
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#17385B]">
                Perguntas Frequentes sobre a Fotobiomodulação
              </h3>
            </div>

            <div className="space-y-3">
              {offer.faqs.map((faq) => (
                <div key={faq.id} className="p-4 rounded-xl bg-[#F5F2EB]/60 border border-stone-200 space-y-2">
                  <h4 className="font-serif font-semibold text-[#17385B] text-sm sm:text-base">
                    {faq.question}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#415A77] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 7. CTA de Agendamento Gratuito de Novembro Azul */}
          <section className="bg-gradient-to-r from-[#17385B] to-[#1b3b6f] text-white p-8 sm:p-12 rounded-3xl rounded-tr-[60px] shadow-lg text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-emerald-300" />
              <span>Novembro Azul 2026 • Atendimento Gratuito</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white max-w-2xl mx-auto leading-tight">
              Experimente a fotobiomodulação em seu primeiro atendimento presencial gratuito
            </h3>

            <p className="text-sm sm:text-base text-[#C7D9D2] max-w-xl mx-auto leading-relaxed">
              Uma oportunidade acolhedora para conhecer a técnica e receber uma avaliação com Lucy Aihara no consultório em Higienópolis / Consolação (São Paulo - SP).
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-[#073322] font-semibold text-base shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Quero agendar meu atendimento gratuito</span>
              </a>

              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/20 transition-colors"
              >
                <span>Voltar à página inicial</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-xs text-[#84B7CE] pt-1">
              {offer.microtext}
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
