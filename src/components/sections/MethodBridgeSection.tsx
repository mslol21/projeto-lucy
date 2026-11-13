"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, HandHeart, MoveUpRight } from "lucide-react";

export function MethodBridgeSection() {
  const reducedMotion = useReducedMotion();

  const animation = {
    initial: reducedMotion ? false : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.55, ease: "easeOut" as const },
  };

  return (
    <section
      id="metodo"
      aria-labelledby="metodo-titulo"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#EAF1F3] py-14 text-[#17385B] sm:py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute -right-36 -top-44 size-[420px] rounded-full border-[50px] border-[#84B7CE]/15" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 sm:px-8 md:grid-cols-[1.06fr_0.94fr] md:gap-10 lg:gap-14">
        <motion.div {...animation} className="min-w-0">
          <p className="flex max-w-lg items-center gap-2 text-[11px] font-bold uppercase leading-5 tracking-[.12em] text-[#426B82] sm:text-xs">
            <HandHeart size={18} className="shrink-0" aria-hidden="true" />
            Um encontro com outra forma de perceber o corpo
          </p>

          <h2
            id="metodo-titulo"
            className="mt-4 max-w-[19ch] font-serif text-[clamp(2rem,3.7vw,3.55rem)] leading-[1.12] tracking-[-.025em]"
          >
            O movimento também pode ser uma forma de escuta.
          </h2>

          <p className="mt-5 max-w-[59ch] text-[15px] leading-[1.8] text-[#405C6E] sm:text-base">
            Em sua trajetória, Lucy conheceu a fasciaterapia pelo Método Danis Bois, uma abordagem de origem francesa que reúne toque suave, percepção corporal e atenção ao movimento.
          </p>
          <p className="mt-3 max-w-[59ch] text-[15px] leading-[1.8] text-[#405C6E] sm:text-base">
            Essa experiência passou a fazer parte do seu trabalho como fisioterapeuta e educadora, inspirando sua forma de ensinar e acolher.
          </p>

          <Link
            href="/conhecimento/metodo-danis-bois"
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#17385B] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#28577c] focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            Conhecer o Método Danis Bois
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </motion.div>

        <motion.div
          {...animation}
          className="relative flex min-h-[250px] items-center overflow-hidden rounded-[2rem] bg-[#17385B] p-7 text-white shadow-[0_14px_40px_rgba(23,56,91,.1)] sm:min-h-[300px] sm:p-9 md:min-h-[340px] lg:min-h-[360px] lg:p-10"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_25%,#396e93_0%,#17385B_58%,#102842_100%)]" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-24 h-80 w-44 rotate-[24deg] rounded-[100%] border-[26px] border-[#B6D6EA]/15" />
          <div aria-hidden="true" className="pointer-events-none absolute -left-20 bottom-[-120px] h-72 w-44 -rotate-[29deg] rounded-[100%] border-[20px] border-[#B6D6EA]/12" />

          <div className="relative z-10 max-w-md">
            <MoveUpRight aria-hidden="true" className="mb-5 text-[#B6D6EA]" size={29} strokeWidth={1.5} />
            <p className="font-serif text-[clamp(1.8rem,2.8vw,2.7rem)] leading-[1.25] tracking-[-.015em]">
              Um corpo.<br />Muitas histórias.<br />Novas possibilidades.
            </p>
            <p className="mt-5 max-w-[36ch] text-sm leading-7 text-[#DEEBF3]">
              Uma trajetória de conhecimento, atenção ao movimento e cuidado.
            </p>
          </div>
        </motion.div>
      </div>

      <p className="relative mx-auto mt-7 max-w-6xl px-5 text-xs leading-6 text-[#526D7E] sm:px-8">
        A fasciaterapia não substitui tratamentos médicos para diabetes ou neuropatia diabética. Sua efetividade específica para essas condições ainda requer investigação científica mais robusta.
      </p>
    </section>
  );
}
