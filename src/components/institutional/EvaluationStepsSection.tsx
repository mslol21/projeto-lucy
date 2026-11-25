import { Clock, HeartHandshake, Compass, ShieldCheck, Sparkles, MessageCircle } from "lucide-react";
import { getWhatsAppLink, CLINIC_LOCATION } from "@/data/institutional-data";

export function EvaluationStepsSection() {
  const whatsappUrl = getWhatsAppLink("painTreatment");

  const steps = [
    {
      step: "01",
      title: "Escuta Acolhedora da História de Dor",
      description:
        "Dedicamos tempo exclusivo para ouvir quando a dor começou, em quais momentos piora, suas rotinas de trabalho e o impacto no seu sono e bem-estar.",
    },
    {
      step: "02",
      title: "Exame Palpatório e Avaliação Fascial",
      description:
        "Com toques manuais lentos e gentis, investigamos as zonas de rigidez e falta de deslizamento na fáscia, além da mobilidade das articulações envolvidas.",
    },
    {
      step: "03",
      title: "Alívio Imediato e Conduta Terapêutica",
      description:
        "Iniciamos o trabalho manual e somático para reduzir o tônus do espasmo muscular, traçando um plano de cuidado realista e sem promessas exageradas.",
    },
    {
      step: "04",
      title: "Orientações para o Cotidiano",
      description:
        "Você aprende movimentos sensoriais simples e ajustes ergonômicos para manter os tecidos hidratados e protegidos durante a sua rotina.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#EADBC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C0D8FF]/30 text-[#065176] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#5C88C5]/30">
            <Clock className="w-3.5 h-3.5 text-[#065176]" />
            <span>Primeira Consulta</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#065176] font-normal tracking-tight">
            Como funciona a sua avaliação fisioterapêutica?
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Sessão individual de 50 minutos centrada no paciente, sem pressa e com escuta integral.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-[#EADBC8] shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-3xl text-[#845924] font-normal block mb-3">
                  {item.step}
                </span>
                <h3 className="font-serif text-lg text-[#065176] font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#EADBC8] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-lg text-[#065176]">
              Pronto para iniciar o cuidado da sua dor?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600">
              Atendimentos de segunda a sexta, das 8h às 12h e das 14h às 18h, na Rua Sergipe, 475.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-[#065176] font-bold text-xs sm:text-sm shadow-xs transition-transform active:scale-95 flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Solicitar Horário no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
