import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Hospital, Award, MapPin, ArrowRight } from "lucide-react";

export function LucySummarySection() {
  return (
    <section id="sobre-lucy" aria-labelledby="lucy-title" className="py-16 sm:py-20 bg-white border-b border-stone-200/80 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Foto Oficial Original à Esquerda ou Centro */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative rounded-3xl rounded-tr-[56px] overflow-hidden border-4 border-white shadow-lg bg-[#17385B] w-full max-w-xs aspect-[4/5]">
              <Image
                src="/images/lucy-aihara-hcfmusp.jpg"
                alt="Fotografia original de Lucy Aihara com jaleco oficial do Instituto Central do HCFMUSP"
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Texto Resumido à Direita */}
          <div className="md:col-span-7 space-y-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#527fae]">
              Fundadora e Terapeuta Responsável
            </span>

            <h2 id="lucy-title" className="font-serif text-3xl sm:text-4xl text-[#17385B] font-normal leading-tight">
              Lucy Aihara
            </h2>

            <p className="text-base text-[#415A77] leading-relaxed">
              Fisioterapeuta e Educadora Física com consolidada vivência clínica no Instituto Central do Hospital das Clínicas da FMUSP (IC-HCFMUSP) e no Instituto do Coração (InCor).
            </p>

            <p className="text-sm text-[#415A77] leading-relaxed">
              Fundadora da <strong>Escola de Fasciaterapia e Movimento</strong>, dedica sua prática à reeducação somática, à biofotônica e ao acolhimento de pessoas que buscam alívio de tensões, reabilitação e qualidade de vida através de uma relação afetuosa com o próprio corpo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#17385B]">
              <div className="flex items-center gap-2">
                <Hospital className="w-4 h-4 text-[#527fae] flex-shrink-0" />
                <span>Experiência InCor / HCFMUSP</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#527fae] flex-shrink-0" />
                <span>Higienópolis / Consolação — SP</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/conhecimento/lucy-aihara"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F5F2EB] hover:bg-stone-200/80 text-[#17385B] font-medium text-xs sm:text-sm transition-colors border border-stone-300 group"
              >
                <span>Conhecer a trajetória profissional completa</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
