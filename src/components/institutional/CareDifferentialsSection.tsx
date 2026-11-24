import { ShieldCheck, HeartHandshake, Compass, Clock, Sparkles } from "lucide-react";
import { LUCY_PROFILE } from "@/data/institutional-data";

export function CareDifferentialsSection() {
  const differentials = [
    {
      title: "Atendimento 1 a 1 Exclusivo",
      description:
        "Sessões individuais de 50 minutos dedicadas exclusivamente a você. Sem atendimento simultâneo ou interrupções, garantindo foco total no seu processo.",
      icon: Clock,
    },
    {
      title: "Toque Manual Sutil e Profundo",
      description:
        "Mobilização respeitosa da rede fascial que alivia restrições sem dor agressiva, dialogando com o sistema nervoso para desacelerar o ciclo de tensão.",
      icon: HeartHandshake,
    },
    {
      title: "Educação para o Autocuidado",
      description:
        "O paciente aprende a reconhecer os próprios sinais de sobrecarga e posturas viciosas, desenvolvendo recursos práticos para manter o bem-estar no cotidiano.",
      icon: Compass,
    },
    {
      title: "Ambiente Calmo e Privativo",
      description:
        "Consultório acolhedor e silencioso no coração de Higienópolis/Consolação, planejado para oferecer segurança, privacidade e desaceleração do ritmo urbano.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F4EFEA] border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#183B2B]/10 text-[#183B2B] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#183B2B]/15">
            <Sparkles className="w-3.5 h-3.5 text-[#4A6B5D]" />
            <span>Diferenciais do Atendimento</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A2421] font-normal tracking-tight">
            Por que o atendimento individualizado faz toda a diferença?
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#556370] leading-relaxed">
            A dor e a rigidez corporal não são apenas mecânicas: refletem hábitos, ritmos de vida e
            respostas ao estresse. Nosso compromisso é com o paciente em sua integridade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E2DBD0] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E2DBD0] flex items-center justify-center text-[#183B2B] mb-5">
                    <Icon className="w-6 h-6 text-[#183B2B]" />
                  </div>
                  <h3 className="font-serif text-lg text-[#1A2421] font-normal mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#556370] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
