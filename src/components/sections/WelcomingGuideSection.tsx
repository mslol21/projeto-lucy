import Link from "next/link";
import { ArrowRight, BookOpen, HeartHandshake, ShieldCheck } from "lucide-react";

const paths = [
  {
    href: "/#diabetes",
    label: "14 de novembro",
    title: "Quero entender o diabetes",
    description: "Uma explicação clara sobre tipos, sinais de atenção e acompanhamento.",
    Icon: BookOpen,
  },
  {
    href: "/#saude-masculina",
    label: "17 de novembro",
    title: "Quero saber sobre saúde masculina",
    description: "Informações para conversar sobre sintomas e cuidados sem constrangimento.",
    Icon: ShieldCheck,
  },
  {
    href: "/#historia",
    label: "Uma história real",
    title: "Quero conhecer a Lucy",
    description: "Sua trajetória com diabetes, movimento e trabalho na fasciaterapia.",
    Icon: HeartHandshake,
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
        <nav aria-label="Escolha um tema para começar" className="mt-9 grid gap-4 md:grid-cols-3">
          {paths.map(({ href, label, title, description, Icon }) => (
            <Link
              key={href}
              href={href}
              className="group flex min-h-60 flex-col rounded-2xl border border-[#D7E2E5] bg-white p-6 shadow-[0_8px_26px_rgba(23,56,91,.035)] transition-colors duration-200 hover:border-[#8FB8CA] hover:bg-[#F7FBFD] focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[.1em] text-[#416C80]">{label}</span>
                <Icon size={22} strokeWidth={1.7} className="text-[#327A9A]" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-serif text-[1.45rem] leading-snug text-[#17385B]">{title}</h3>
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
