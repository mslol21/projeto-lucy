"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

const milestones = [
  { period: "1980", title: "O começo de uma convivência", description: "O diabetes tipo 1 passou a fazer parte da vida de Lucy. Em seu relato, ela reconhece nessa experiência uma influência importante para sua escolha profissional." },
  { period: "O movimento", title: "A curiosidade se transforma em estudo", description: "Ela se formou em Educação Física e estudou condicionamento físico aplicado à prevenção e à reabilitação cardíaca no InCor/HCFMUSP." },
  { period: "Novos caminhos", title: "A reabilitação se torna profissão", description: "Sua experiência com o valor da reabilitação a levou a cursar Fisioterapia, ampliando as possibilidades de escuta e cuidado." },
  { period: "2010", title: "O encontro com a fasciaterapia", description: "Já atuava como fasciaterapeuta em 2010. Posteriormente, foi professora e coordenadora por quase dez anos de uma formação em São Paulo com Armand Angibaud." },
  { period: "2020", title: "Compartilhar também é cuidar", description: "Durante a pandemia, desenvolveu o projeto Fáscia Você Mesmo, voltado à educação para a percepção corporal e o autocuidado." },
  { period: "Hoje", title: "Uma história que continua", description: "Na Escola de Fasciaterapia e Movimento, Lucy reúne sua trajetória pessoal e profissional em uma proposta de ensino, movimento e acolhimento." },
];

export function LucyStorySection() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="historia" aria-labelledby="historia-titulo" className="relative scroll-mt-20 overflow-hidden bg-[#F5F0E8] py-16 text-[#17385B] sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-16">
          <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[.22em] text-[#426b8a]">A história por trás da escola</p>
            <h2 id="historia-titulo" className="mt-4 max-w-[22ch] font-serif text-[clamp(2.1rem,3.2vw,3.65rem)] leading-[1.13] tracking-[-0.025em] [text-wrap:balance] lg:max-w-none">
              <span className="lg:block">A vida acontece</span>{" "}
              <span className="lg:block">muito além de</span>{" "}
              <span className="lg:block">um diagnóstico.</span>
            </h2>
            <p className="mt-5 max-w-[55ch] text-base leading-8 text-[#415A77]">
              Não é uma história sobre vencer uma doença. É sobre continuar aprendendo, fazendo escolhas e encontrando novos significados para o movimento.
            </p>
            <div className="relative mt-7 aspect-[5/3] max-w-lg overflow-hidden rounded-2xl bg-[#d2dfdf]">
              <Image src="/images/placa-acrilica-consultorio.jpg" fill sizes="(max-width: 1024px) 90vw, 450px" alt="Identidade da Escola de Fasciaterapia e Movimento no consultório" className="object-cover" />
            </div>
          </div>
          <ol className="relative ml-3 border-l border-[#84B7CE]/65 pl-7 sm:ml-5 sm:pl-12">
            {milestones.map((item, i) => (
              <motion.li
                key={item.title}
                initial={reducedMotion ? false : { opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: 0.04, ease: "easeOut" }}
                className="relative pb-14 last:pb-0 sm:pb-20"
              >
                <span className="absolute -left-[35px] top-2 h-3 w-3 rounded-full border-[3px] border-[#F5F0E8] bg-[#285c82] ring-1 ring-[#285c82] sm:-left-[55px]" aria-hidden="true" />
                <p className="text-xs font-bold uppercase tracking-[.18em] text-[#426b8a]">{item.period}</p>
                <h3 className="mt-3 font-serif text-2xl leading-snug sm:text-3xl">{item.title}</h3>
                <p className="mt-4 max-w-xl text-base leading-8 text-[#415A77]">{item.description}</p>
                {i === 3 && (
                  <Link href="/conhecimento/metodo-danis-bois" className="mt-4 inline-flex min-h-11 items-center border-b border-[#285c82] text-sm font-semibold text-[#17385B] hover:text-[#527fae]">
                    Conhecer o Método Danis Bois
                  </Link>
                )}
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function ReflectionSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section aria-labelledby="reflexao-titulo" className="relative isolate overflow-hidden bg-[#102b47] px-5 py-28 text-center text-white sm:py-40">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#28577c_0%,#102b47_65%)]" />
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9 }}
        className="relative mx-auto max-w-5xl"
      >
        <p className="mb-7 text-xs font-semibold uppercase tracking-[.24em] text-[#B6D6EA]">Um convite à reflexão</p>
        <h2 id="reflexao-titulo" className="font-serif text-[clamp(2.75rem,7vw,6.5rem)] leading-[1.12] tracking-tight">
          Você é muito mais do que aquilo que enfrenta.
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-[#d7e5ee]">
          Cada trajetória é única. Informação, apoio e cuidado fazem parte do caminho — e ninguém precisa percorrê-lo sozinho.
        </p>
      </motion.div>
    </section>
  );
}
