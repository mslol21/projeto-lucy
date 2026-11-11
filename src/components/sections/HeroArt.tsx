"use client";
import Image from "next/image";
import { useState } from "react";

export function HeroArt() {
  const [failed, setFailed] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  if (failed) {
    return (
      <div className="relative flex aspect-[1672/941] min-h-[280px] w-full flex-col items-center justify-center gap-5 overflow-hidden bg-gradient-to-b from-[#F5FBFF] to-[#D8ECFB] px-4 py-8 text-center text-[#17385B]">
        <div aria-hidden="true" className="absolute -left-16 -top-20 size-64 rounded-full bg-[#9DCEED]/20 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-36 right-0 size-96 rounded-full bg-[#67B4E7]/25 blur-3xl" />
        <div className="relative max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#31709D]">Escola de Fasciaterapia e Movimento</p>
          <h2 className="mt-3 font-serif text-[clamp(2.3rem,5vw,4.8rem)] leading-tight">Novembro Azul</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#476578] sm:text-lg">Informação e cuidado para quem faz parte da nossa vida.</p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-7">
            <div className="border-t-2 border-[#3682B4] bg-white/80 p-4 sm:p-6">
              <p className="font-serif text-3xl font-bold sm:text-5xl">14/11</p>
              <p className="mt-2 text-xs font-semibold sm:text-base">Dia Mundial do Diabetes</p>
            </div>
            <div className="border-t-2 border-[#3682B4] bg-white/80 p-4 sm:p-6">
              <p className="font-serif text-3xl font-bold sm:text-5xl">17/11</p>
              <p className="mt-2 text-xs font-semibold sm:text-base">Combate ao Câncer de Próstata</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div className="relative h-full w-full overflow-hidden">
    <Image
    src="/images/novembro-azul-hero.webp"
    alt="Projeto Lucy e Escola de Fasciaterapia e Movimento. Laço azul em destaque. 14 de novembro: Dia Mundial do Diabetes. 17 de novembro: Dia Nacional de Combate ao Câncer de Próstata."
    fill
    unoptimized
    priority
    sizes="100vw"
    className="object-contain"
    onError={() => setFailed(true)}
  />
    {!videoFailed && <video
      aria-hidden="true"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/images/novembro-azul-hero.webp"
      onCanPlay={() => setVideoReady(true)}
      onError={() => setVideoFailed(true)}
      className={`absolute inset-0 h-full w-full object-cover motion-reduce:hidden transition-opacity duration-700 ${videoReady ? "opacity-100" : "opacity-0"}`}
    >
      <source src="/Gemini_generated_,video_44cc0415.mp4" type="video/mp4" />
    </video>}
  </div>;
}
