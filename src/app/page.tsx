import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, CalendarCheck, CheckCircle2, Clock3, HeartPulse,
  MapPin, MessageCircle, ShieldCheck, Sparkles, Stethoscope,
  FileText, Activity, Footprints, HandHeart, ExternalLink,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CampaignThemesSection } from "@/components/home/CampaignThemesSection";
import { LucySummarySection } from "@/components/home/LucySummarySection";
import { TestimonialsPreviewSection } from "@/components/home/TestimonialsPreviewSection";
import { AeoKnowledgeFaqSection } from "@/components/home/AeoKnowledgeFaqSection";
import { LocationSection } from "@/components/home/LocationSection";
import { MobileBookingBar } from "@/components/home/MobileBookingBar";
import { CampaignWhatsAppLink } from "@/components/home/CampaignWhatsAppLink";
import { NOVEMBER_BLUE_OFFER, CAMPAIGN_INFO } from "@/data/campaign-data";

const BENEFITS = [
  { title: "Avaliação individualizada", description: "Investigação da sensibilidade, do movimento e das queixas relatadas", icon: Stethoscope },
  { title: "Aplicação de laser terapêutico", description: "Aplicação localizada com parâmetros adequados, quando clinicamente indicada", icon: Sparkles },
  { title: "Orientação profissional", description: "Explicação dos achados e das possíveis etapas de cuidado, sem compromisso", icon: HandHeart },
  { title: "Recibo para reembolso", description: "Documento para solicitar análise ao convênio, conforme contrato e serviço efetivamente prestado", icon: FileText },
];

const STEPS = [
  { number: "01", title: "Contato no WhatsApp", text: "Conte brevemente onde sente dor, dormência ou formigamento. Confira os horários disponíveis." },
  { number: "02", title: "Confirmação do horário", text: "Receba as orientações para sua visita ao consultório na Rua Sergipe, perto do Metrô Higienópolis-Mackenzie." },
  { number: "03", title: "Avaliação + laser (40 min)", text: "Lucy avalia sua sensibilidade e mobilidade, explica a conduta e aplica o laser se houver indicação e segurança." },
];

export default function HomePage() {
  const offer = NOVEMBER_BLUE_OFFER;
  const structuredOffer = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Primeira Sessão Avaliativa com Laser Terapêutico",
    serviceType: "Fisioterapia — avaliação e laser terapêutico quando indicado",
    description: "Primeira sessão avaliativa de 40 minutos com Lucy Aihara, incluindo avaliação individualizada, orientação e aplicação de laser quando clinicamente indicada.",
    provider: {
      "@type": "Physiotherapy",
      name: "Escola de Fasciaterapia e Movimento — Lucy Aihara",
      telephone: "+55-11-99998-6082",
      address: {
        "@type": "PostalAddress",
        streetAddress: CAMPAIGN_INFO.institution.address.street,
        addressLocality: "São Paulo", addressRegion: "SP",
        postalCode: CAMPAIGN_INFO.institution.address.postalCode,
        addressCountry: "BR",
      },
    },
    offers: {
      "@type": "Offer",
      price: "70.00",
      priceCurrency: "BRL",
      priceValidUntil: "2026-11-30",
      url: "https://novembroazul.escoladefasciaterapiaemovimento.com/#especial-novembro-azul",
      availability: "https://schema.org/LimitedAvailability",
      description: "Condição promocional para a primeira sessão de novos atendimentos, sujeita a confirmação de agenda.",
    },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="conteudo-principal" className="flex-1">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredOffer) }} />

        {/* ATENÇÃO: mensagem clínica e ação principal acima da dobra */}
        <section id="inicio" aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-[#EFF5F8] scroll-mt-24">
          <div className="pointer-events-none absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-[#84B7CE]/25 blur-3xl" aria-hidden="true" />
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12 lg:gap-14 lg:px-8 lg:py-20">
            <div className="relative z-10 space-y-6 lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#84B7CE]/50 bg-white px-3 py-2 text-[11px] font-bold uppercase tracking-[0.13em] text-[#17385B] sm:text-xs">
                <HeartPulse className="h-4 w-4 text-[#396B90]" aria-hidden="true" />
                Especial Novembro Azul 2026 • São Paulo
              </span>
              <h1 id="hero-title" className="max-w-3xl font-serif text-[2.15rem] font-semibold leading-[1.13] tracking-tight text-[#17385B] sm:text-5xl lg:text-[3.5rem]">
                Queimação, formigamento ou dor neuropática?
                <span className="mt-2 block text-[#316A8B]">Conheça o Tratamento com Laser como opção de cuidado.</span>
              </h1>
              <p className="max-w-[60ch] text-base leading-7 text-[#37536A] sm:text-lg">
                Do <strong>Dia Mundial do Diabetes (14/11)</strong> à conscientização sobre a
                <strong> saúde integral do homem (17/11)</strong>: um convite ao cuidado individualizado
                com Lucy Aihara, fisioterapeuta com vivência no InCor e no HCFMUSP.
                Atendimento presencial na Consolação / Higienópolis, em São Paulo.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <CampaignWhatsAppLink source="hero" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#176B51] px-6 py-3 text-center text-sm font-bold text-white shadow-lg shadow-emerald-950/10 transition-colors hover:bg-[#11523F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17385B] sm:text-base">
                  <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                  Quero agendar minha 1ª sessão (R$ 70)
                </CampaignWhatsAppLink>
                <Link href="/#especial-novembro-azul" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#91B3C4] px-5 py-3 text-sm font-semibold text-[#17385B] hover:bg-white">
                  Ver o que está incluso <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <p className="text-sm font-medium leading-6 text-[#3C5669]">
                <span className="font-bold text-[#17385B]">De <s>R$ 150,00</s> por R$ 70,00</span> na campanha de novembro.
                <span className="block text-xs font-normal">Duração: 40 minutos • Disponibilidade sujeita à confirmação • Sem pacotes obrigatórios.</span>
              </p>
            </div>
            <div className="relative mx-auto w-full max-w-md lg:col-span-5">
              <div className="relative aspect-[4/4.6] overflow-hidden rounded-[2rem] rounded-tr-[5rem] border-[6px] border-white bg-[#DAEAF1] shadow-xl">
                <Image src="/images/lucy-aihara-hcfmusp.jpg" alt="Lucy Aihara, fisioterapeuta responsável pelo atendimento presencial" fill priority sizes="(max-width: 1024px) 80vw, 430px" className="object-cover object-top" />
              </div>
              <div className="absolute -bottom-5 -left-2 max-w-[240px] rounded-2xl border border-[#D4E4E9] bg-white p-4 shadow-lg sm:-left-8">
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#3A6A82]">
                  <CalendarCheck className="h-4 w-4" aria-hidden="true" /> Sessão Avaliativa
                </span>
                <span className="mt-1 block font-serif text-2xl font-semibold text-[#17385B]">40 minutos</span>
                <span className="text-xs text-[#4C6778]">Acolhimento, avaliação e conduta individualizada</span>
              </div>
            </div>
          </div>
        </section>

        {/* DESEJO: oferta transparente e verificável */}
        <section id="especial-novembro-azul" aria-labelledby="offer-title" className="scroll-mt-24 bg-[#17385B] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-[.16em] text-[#B2DAE9]">Condição especial de Novembro Azul</span>
              <h2 id="offer-title" className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">Dê o primeiro passo para cuidar da sua sensibilidade e da dor.</h2>
              <p className="text-base leading-7 text-[#DDEAF0]">
                Choques, sensação de “areia nos pés”, dormência e hipersensibilidade merecem atenção.
                Esses sintomas podem ter diversas causas, incluindo neuropatia periférica associada ao diabetes
                ou após herpes zoster. A avaliação individual permite entender suas necessidades e verificar
                se o laser de baixa intensidade pode integrar o cuidado.
              </p>
            </div>
            <div className="mt-9 grid overflow-hidden rounded-3xl bg-white text-[#17385B] shadow-2xl lg:grid-cols-12">
              <div className="space-y-5 p-6 sm:p-9 lg:col-span-4 lg:p-10">
                <span className="inline-flex rounded-full bg-[#DCECF4] px-3 py-1.5 text-xs font-bold uppercase tracking-wide">1ª sessão avaliativa + laser*</span>
                <div>
                  <span className="block text-sm text-[#5A7181]">Valor regular informado</span>
                  <span className="text-xl font-semibold text-[#627789] line-through">R$ 150,00</span>
                  <span className="mt-1 block text-sm font-semibold text-[#3B6980]">Condição de novembro</span>
                  <span className="block font-serif text-6xl font-semibold tracking-tight text-[#17385B]">R$ 70<span className="text-2xl">,00</span></span>
                </div>
                <span className="flex items-center gap-2 text-sm font-medium text-[#34526D]"><Clock3 className="h-4 w-4" aria-hidden="true" /> 40 minutos de atendimento</span>
                <CampaignWhatsAppLink source="card_oferta" className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#176B51] px-4 py-3 text-center text-sm font-bold text-white hover:bg-[#11523F]">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" /> Reservar meu horário
                </CampaignWhatsAppLink>
                <p className="text-xs leading-5 text-[#576D79]">Sem obrigação de contratar pacotes. Oferta em novembro de 2026 sujeita a horários disponíveis. *Aplicação conforme indicação e avaliação de segurança.</p>
              </div>
              <div className="space-y-6 border-t border-[#DFE9ED] bg-[#F6FAFB] p-6 sm:p-9 lg:col-span-8 lg:border-l lg:border-t-0 lg:p-10">
                <h3 className="font-serif text-2xl font-semibold">O que está incluso na primeira visita</h3>
                <div className="grid gap-5 sm:grid-cols-2">
                  {BENEFITS.map((benefit) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={benefit.title} className="flex gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E1EDF3]"><Icon className="h-5 w-5 text-[#386D8B]" aria-hidden="true" /></span>
                        <div>
                          <h4 className="font-semibold text-[#17385B]">{benefit.title}</h4>
                          <p className="mt-1 text-sm leading-6 text-[#4A6374]">{benefit.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="rounded-xl border border-[#C4DDE6] bg-white p-5">
                  <div className="flex items-center gap-2 font-semibold text-[#17385B]"><FileText className="h-5 w-5" aria-hidden="true" /> Recibo para solicitação de reembolso</div>
                  <p className="mt-2 text-sm leading-6 text-[#415A77]">
                    É emitido recibo referente ao serviço realmente prestado, com descrição de <strong>Fisioterapia / Eletroterapia</strong> quando pertinente. Você poderá apresentar o documento ao plano de saúde.
                    <strong> A aprovação e o valor reembolsado dependem do contrato e das exigências da operadora.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTERESSE: mecanismo, indicação e limites clínicos */}
        <section id="tratamento-laser" aria-labelledby="laser-title" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-12 lg:gap-12">
            <div className="space-y-5 lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-[.15em] text-[#3A7394]">Ciência e cuidado não invasivo</span>
              <h2 id="laser-title" className="font-serif text-3xl font-semibold text-[#17385B] sm:text-4xl">O que é o Tratamento com Laser (fotobiomodulação)?</h2>
              <p className="text-base leading-8 text-[#40596D]">
                O laser terapêutico utiliza luz de baixa intensidade em comprimentos de onda específicos.
                Essa energia luminosa pode modular respostas biológicas locais e vem sendo estudada como
                recurso complementar em alguns quadros de dor neuropática, alterações teciduais e recuperação funcional.
              </p>
              <p className="text-base leading-8 text-[#40596D]">
                A aplicação é <strong>não invasiva, sem agulhas</strong> e normalmente bem tolerada.
                Os resultados dependem da causa dos sintomas, dos parâmetros utilizados e do quadro clínico.
                Não há garantia de alívio e o recurso não substitui investigação diagnóstica, controle da glicemia,
                medicamentos prescritos nem acompanhamento profissional.
              </p>
              <Link href="/conhecimento/fotobiomodulacao" className="inline-flex min-h-12 items-center gap-2 text-sm font-bold text-[#235F83] underline underline-offset-4 hover:text-[#17385B]">
                Entender a técnica e suas evidências <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="space-y-4 lg:col-span-5">
              <div className="rounded-2xl border border-[#D5E5E9] bg-[#F3F9FB] p-6">
                <h3 className="mb-3 flex items-center gap-2 font-serif text-xl font-semibold text-[#17385B]"><Footprints className="h-5 w-5" aria-hidden="true" /> Sintomas que merecem avaliação</h3>
                <ul className="space-y-2 text-sm leading-6 text-[#40596D]">
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#377A6C]" /> Queimação, choques, dormências e formigamentos</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#377A6C]" /> Suspeita ou diagnóstico de neuropatia diabética</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#377A6C]" /> Neuralgia após herpes zoster e dores crônicas periféricas</li>
                </ul>
                <p className="mt-4 text-xs leading-5 text-[#4C6675]">A presença desses sintomas não define diagnóstico ou indicação automática de laser. Quadros novos ou progressivos exigem avaliação médica.</p>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-[#FFFAF0] p-6">
                <h3 className="flex items-center gap-2 font-semibold text-[#70471F]"><ShieldCheck className="h-5 w-5" aria-hidden="true" /> Segurança em oncologia</h3>
                <p className="mt-2 text-sm leading-6 text-[#745B3B]">Pessoas com diagnóstico atual ou histórico de câncer, incluindo câncer de próstata, devem informar seu histórico à fisioterapeuta. Em tratamento oncológico, qualquer aplicação requer avaliação criteriosa e alinhamento prévio com o médico oncologista responsável.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SIMPLICIDADE: agendamento */}
        <section id="como-funciona" aria-labelledby="steps-title" className="bg-[#F5F2EB] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-9 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[.15em] text-[#3A7394]">Atendimento sem complicações</span>
              <h2 id="steps-title" className="mt-3 font-serif text-3xl font-semibold text-[#17385B] sm:text-4xl">Como funciona sua primeira visita ao consultório</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {STEPS.map((step) => (
                <div key={step.number} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-7">
                  <span className="font-serif text-4xl font-semibold text-[#5A91AC]">{step.number}</span>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-[#17385B]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#435C6C]">{step.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-[#4A6374]"><MapPin className="mr-1 inline h-4 w-4" aria-hidden="true" /> Rua Sergipe, 475, conj. 114 — Consolação / Higienópolis, São Paulo.</p>
              <CampaignWhatsAppLink source="passo_a_passo" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#17385B] px-5 py-3 text-sm font-bold text-white hover:bg-[#265576]"><MessageCircle className="h-4 w-4" aria-hidden="true" /> Agendar pelo WhatsApp</CampaignWhatsAppLink>
            </div>
          </div>
        </section>

        <CampaignThemesSection />
        <LucySummarySection />
        <TestimonialsPreviewSection />
        <LocationSection />
        <AeoKnowledgeFaqSection />

        {/* AÇÃO: encerramento coerente com preço e indicação clínica */}
        <section id="agendamento-final" aria-labelledby="final-title" className="bg-[#17385B] px-4 py-16 text-center text-white sm:px-6 sm:py-20">
          <div className="mx-auto max-w-3xl space-y-5">
            <span className="text-xs font-bold uppercase tracking-[.17em] text-[#B2DAE9]">Sua saúde merece atenção</span>
            <h2 id="final-title" className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">Não normalize a queimação ou o formigamento no dia a dia.</h2>
            <p className="mx-auto max-w-2xl text-base leading-7 text-[#DDEAF0]">Agende sua primeira Sessão Avaliativa com Laser por <strong className="text-white">R$ 70,00</strong> (valor regular informado: R$ 150,00) e conheça uma avaliação fisioterapêutica individualizada, sem compromisso de continuidade.</p>
            <CampaignWhatsAppLink source="final" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#176B51] px-7 py-3 text-sm font-bold text-white hover:bg-[#11523F] sm:text-base"><MessageCircle className="h-5 w-5" aria-hidden="true" /> Agendar minha sessão no WhatsApp</CampaignWhatsAppLink>
            <p className="text-xs leading-5 text-[#C1D5DF]">Condição de novembro de 2026, mediante confirmação de agenda. Aplicação clínica conforme avaliação e segurança individual.</p>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBookingBar />
    </div>
  );
}
