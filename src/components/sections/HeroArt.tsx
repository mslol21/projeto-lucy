"use client";

import Image from "next/image";
import { useState } from "react";

const HERO_VIDEO = "/gemini_generated_video_44cc0415.mp4";
const HERO_IMAGE = "/images/novembro-azul-hero.webp";

export function HeroArt() {
  const [imageFailed, setImageFailed] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#D8ECFB]">
      {!imageFailed ? (
        <Image
          src={HERO_IMAGE}
          alt="Projeto Lucy e Escola de Fasciaterapia e Movimento. Novembro Azul: Dia Mundial do Diabetes, 14 de novembro, e combate ao câncer de próstata, 17 de novembro."
          fill
          unoptimized
          priority
          sizes="(max-width: 900px) 100vw, 900px"
          className="object-contain"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#F5FBFF] to-[#D8ECFB] px-5 text-center text-[#17385B]">
          <p className="text-xs font-bold uppercase tracking-[.15em]">Escola de Fasciaterapia e Movimento</p>
          <p className="mt-3 font-serif text-3xl font-bold sm:text-5xl">Novembro Azul</p>
          <p className="mt-3 text-sm sm:text-base">Informação, histórias reais e cuidado em saúde</p>
        </div>
      )}
      {!videoFailed && (
        <video
          aria-hidden="true"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={HERO_IMAGE}
          onPlaying={() => setVideoPlaying(true)}
          onError={() => setVideoFailed(true)}
          className={`absolute inset-0 h-full w-full object-contain motion-reduce:hidden transition-opacity duration-500 ${videoPlaying ? "opacity-100" : "opacity-0"}`}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
