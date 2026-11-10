import Image from "next/image";
import Link from "next/link";

export function CampaignIdentitySection() {
  return (
    <section aria-labelledby="identidade-campanha-titulo" className="border-b border-[#DCE9EF] bg-[#F7FBFD] py-12 sm:py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-7 px-5 sm:px-8 md:grid-cols-[180px_1fr] lg:gap-12">
        <div className="mx-auto flex h-[180px] w-[180px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_12px_30px_rgba(26,67,110,.07)] ring-1 ring-[#DEEBF2]">
          <Image
            src="/images/emblema-novembro-azul-lucy.svg"
            width={160}
            height={160}
            alt="Emblema especial do Novembro Azul da Escola de Fasciaterapia e Movimento: círculo azul do diabetes, bigode azul da saúde masculina e logo da escola ao centro"
            sizes="160px"
            className="h-[160px] w-[160px] object-contain"
          />
        </div>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[.13em] text-[#386B89]">Nossa identidade nesta campanha</p>
          <h2 id="identidade-campanha-titulo" className="mt-3 font-serif text-[clamp(1.8rem,3.4vw,2.65rem)] leading-[1.16] text-[#17385B]">
            Dois símbolos, uma mensagem: cuidar da vida.
          </h2>
          <p className="mt-4 text-base leading-8 text-[#405B6B]">
            O círculo azul representa a conscientização sobre o diabetes. O bigode azul remete ao Novembro Azul e à saúde masculina. No centro, a Escola de Fasciaterapia e Movimento reforça seu convite à informação e ao acolhimento.
          </p>
          <Link href="/#datas" className="mt-5 inline-flex min-h-11 items-center border-b border-[#2F7299] text-sm font-semibold text-[#235577] hover:text-[#17385B]">
            Conhecer as duas datas
          </Link>
        </div>
      </div>
    </section>
  );
}
