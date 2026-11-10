import Link from "next/link";
import { ArrowRight, BookOpen, HeartHandshake, ShieldCheck, Activity, ClipboardCheck, HeartPulse } from "lucide-react";

const paths = [
  {
    href: "/#diabetes",
    label: "14 de novembro",
    title: "Diabetes",
    description: "Conheça os sinais e os cuidados com a saúde.",
    Icon: BookOpen,
  },
  {
    href: "/#saude-masculina",
    label: "17 de novembro",
    title: "Saúde masculina",
    description: "Entenda a prevenção e os cuidados com a próstata.",
    Icon: ShieldCheck,
  },
  {
    href: "/conhecimento/fascia-renal",
    label: "Saúde renal",
    title: "Fáscia e rins",
    description: "Anatomia renal e acompanhamento no diabetes.",
    Icon: HeartPulse,
  },
  {
    href: "/#fascia-cuidado",
    label: "Corpo e movimento",
    title: "Fasciaterapia",
    description: "Percepção corporal e abordagem francesa.",
    Icon: Activity,
  },
  {
    href: "/#historia",
    label: "Uma história real",
    title: "Trajetória de Lucy",
    description: "Conheça a profissional por trás da escola.",
    Icon: HeartHandshake,
  },
  {
    href: "/#checklist",
    label: "Atividade opcional",
    title: "Checklist corporal",
    description: "Registre observações para conversar com seu médico.",
    Icon: ClipboardCheck,
  },
];

export function WelcomingGuideSection() {
  return (
    <section aria-labelledby="comecar-titulo" className="border-y border-[#E0E7E8] bg-[#FBFAF7] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-xs font-bold uppercase tracking-[.14em] text-[#416C80]">Um espaço para você</p>
        <h2 id="comecar-titulo" className="mt-3 max-w-3xl font-serif text-[clamp(2rem,3.8vw,3.25rem)] leading-[1.16] text-[#17385B]">
          Cada pessoa chega aqui com uma pergunta diferente.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[#405B69]">
          Não é preciso ler tudo de uma vez. Escolha o assunto que faz sentido para você agora.
          Os conteúdos são educativos e podem ajudar a preparar uma conversa com profissionais de saúde.
        </p>
        <nav aria-label="Escolha um tema para começar" className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {paths.map(({ href, label, title, description, Icon }) => (
            <Link
              key={href}
              href={href}
              className="group flex min-h-48 flex-col rounded-2xl border border-[#D7E2E5] bg-white p-6 shadow-[0_8px_26px_rgba(23,56,91,.035)] transition-colors duration-200 hover:border-[#8FB8CA] hover:bg-[#F7FBFD] focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[.1em] text-[#416C80]">{label}</span>
                <Icon size={22} strokeWidth={1.7} className="text-[#327A9A]" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-serif text-[1.45rem] leading-snug text-[#17385B]">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-[#486271]">{description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#23577A]">
                Começar por aqui <ArrowRight size={16} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
