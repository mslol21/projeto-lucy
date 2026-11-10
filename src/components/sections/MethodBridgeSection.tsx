"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, HandHeart, MoveUpRight } from "lucide-react";

export function MethodBridgeSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="metodo" aria-labelledby="metodo-titulo" className="relative isolate overflow-hidden bg-[#EAF1F3] py-24 text-[#17385B] sm:py-32">
      <div className="pointer-events-none absolute -right-48 top-[-160px] size-[600px] rounded-full border-[75px] border-[#84B7CE]/20" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-40 bottom-[-190px] size-[440px] rounded-full border-[55px] border-[#C7D9D2]/50" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.2em] text-[#426b8a]">
            <HandHeart size={19} aria-hidden="true" /> Um encontro com outra forma de perceber o corpo
          </p>
          <h2 id="metodo-titulo" className="mt-6 max-w-[13ch] font-serif text-[clamp(2.7rem,5.5vw,5.2rem)] leading-[1.06] tracking-tight">
            O movimento também pode ser uma forma de escuta.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#415A77]">
            Em sua trajetória, Lucy conheceu a fasciaterapia pelo Método Danis Bois, uma abordagem de origem francesa que reúne toque suave, percepção corporal e atenção ao movimento.
          </p>
          <p className="mt-4 max-w-xl text-base leading-8 text-[#415A77]">
            Essa experiência passou a fazer parte do seu trabalho como fisioterapeuta e educadora. Aqui, o convite é conhecer essa história e descobrir como ela inspira a maneira de ensinar e acolher.
          </p>
          <Link href="/conhecimento/metodo-danis-bois" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#17385B] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#28577c] focus-visible:outline-2 focus-visible:outline-offset-4">
            Conhecer a abordagem <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </motion.div>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="relative flex min-h-[400px] items-center justify-center overflow-hidden rounded-[45%_18%_45%_18%] bg-[#17385B] p-8 text-white shadow-[0_25px_75px_rgba(23,56,91,.15)] sm:min-h-[520px]"
        >
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,#396e93_0%,#17385B_55%,#081629_100%)]" />
          <div aria-hidden="true" className="absolute -right-10 -top-20 h-[420px] w-[210px] rotate-[25deg] rounded-[100%] border-[35px] border-[#B6D6EA]/25" />
          <div aria-hidden="true" className="absolute left-12 top-32 h-[420px] w-[170px] -rotate-[30deg] rounded-[100%] border-[24px] border-[#B6D6EA]/15" />
          <div className="relative z-10 max-w-sm">
            <MoveUpRight aria-hidden="true" className="mb-10 text-[#B6D6EA]" size={43} strokeWidth={1.2} />
            <p className="font-serif text-[clamp(2.2rem,4vw,3.8rem)] leading-tight">
              Um corpo. Muitas histórias. Novas possibilidades.
            </p>
            <p className="mt-7 text-sm leading-7 text-[#D6E9F3]">
              A percepção do movimento como parte de uma trajetória de conhecimento e cuidado.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="relative mx-auto mt-14 max-w-7xl px-5 text-xs leading-relaxed text-[#526D7E] sm:px-8">
        A fasciaterapia não substitui tratamentos médicos para diabetes ou neuropatia diabética. Sua efetividade específica para essas condições ainda requer investigação científica mais robusta.
      </div>
    </section>
  );
}
