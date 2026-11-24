import { MessageCircle, MapPin, Calendar, Clock, Sparkles } from "lucide-react";
import { CLINIC_LOCATION, getWhatsAppLink } from "@/data/institutional-data";

export function InstitutionalFinalCta() {
  const whatsappUrl = getWhatsAppLink("clinicEvaluation");

  return (
    <section className="py-16 sm:py-24 bg-[#183B2B] text-white relative overflow-hidden">
      {/* Detalhes de luz suave */}
      <div
        className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#4A6B5D]/25 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-[350px] h-[350px] bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#C5A880] border border-white/20 text-xs font-semibold tracking-wider uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Atendimento Individualizado</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Dê o primeiro passo para habitar seu corpo com leveza e liberdade de movimento.
        </h2>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[#D2DFD8] max-w-2xl mx-auto font-sans leading-relaxed">
          Agende sua avaliação fisioterapêutica individual com Lucy Aihara no consultório da Rua Sergipe,
          Consolação / Higienópolis. Atendimento acolhedor, calmo e centrado nas suas necessidades reais.
        </p>

        {/* Informações de Apoio */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-xs text-[#C7D9D2] text-left">
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-[#C5A880] flex-shrink-0" />
            <span>Sessões individuais de 50 min</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
            <Calendar className="w-4 h-4 text-[#C5A880] flex-shrink-0" />
            <span>Segunda a Sexta com hora marcada</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-[#C5A880] flex-shrink-0" />
            <span>350m do Metrô Mackenzie</span>
          </div>
        </div>

        {/* Botão de Agendamento */}
        <div className="mt-8 flex justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-[#073322] font-semibold text-sm sm:text-base shadow-lg transition-transform active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-current flex-shrink-0" />
            <span>Agendar Avaliação via WhatsApp</span>
          </a>
        </div>

        <p className="mt-4 text-xs text-[#A2B8AE]">
          Horário comercial: resposta rápida e agendamento direto com nossa equipe.
        </p>
      </div>
    </section>
  );
}
