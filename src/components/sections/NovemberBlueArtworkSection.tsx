import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export function NovemberBlueArtworkSection() {
  return (
    <section aria-labelledby="arte-novembro-azul" className="bg-[#F4F8FC] py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.17em] text-[#326E9C]">Campanha especial • 2026</p>
            <h2 id="arte-novembro-azul" className="mt-2 font-serif text-2xl text-[#17385B] sm:text-3xl">Novembro Azul: informação que aproxima.</h2>
          </div>
          <Image
            src="/images/logo-horizontal-hd.png"
            alt="Identidade oficial da Escola de Fasciaterapia e Movimento"
            width={242}
            height={68}
            sizes="(max-width: 640px) 180px, 242px"
            className="h-auto w-[180px] object-contain sm:w-[242px]"
          />
        </div>
        <figure className="overflow-hidden border border-[#D0E4F0] bg-white shadow-[0_12px_38px_rgba(20,65,105,.08)]">
          <Image
            src="/images/especial-novembro-azul-2026.svg"
            width={1600}
            height={880}
            alt="Arte Novembro Azul com laço azul, Dia Mundial do Diabetes em 14 de novembro e Dia Nacional de Combate ao Câncer de Próstata em 17 de novembro."
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="h-auto w-full"
          />
          <figcaption className="border-t border-[#D7E7F0] bg-white px-5 py-4 text-sm leading-6 text-[#415A77]">
            Uma iniciativa da Escola de Fasciaterapia e Movimento para incentivar informação, diálogo e acompanhamento em saúde.
          </figcaption>
        </figure>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-2xl text-sm leading-6 text-[#415A77]">14/11: Dia Mundial do Diabetes. 17/11: Dia Nacional de Combate ao Câncer de Próstata.</p>
          <Link href="/#datas" className="inline-flex min-h-11 items-center gap-2 border-b border-[#17385B] text-sm font-semibold text-[#17385B] transition-colors hover:text-[#326E9C]">
            Explore os conteúdos da campanha <ArrowDown size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
