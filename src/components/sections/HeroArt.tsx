"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const HERO_VIDEO = "/gemini_generated_video_44cc0415.mp4";
const HERO_IMAGE = "/images/novembro-azul-hero.webp";

export function HeroArt() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [imageFailed, setImageFailed] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [playBlocked, setPlayBlocked] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    const tryPlay = () => {
      video.play().then(() => setPlayBlocked(false)).catch(() => setPlayBlocked(true));
    };
    tryPlay();
  }, []);

  const startVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().then(() => setPlayBlocked(false)).catch(() => setPlayBlocked(true));
  };

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
          ref={videoRef}
          aria-label="Animação da campanha Novembro Azul"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={HERO_IMAGE}
          onLoadedData={() => setVideoLoaded(true)}
          onPlaying={() => { setVideoLoaded(true); setPlayBlocked(false); }}
          onError={() => setVideoFailed(true)}
          className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
      )}
      {playBlocked && !videoFailed && (
        <button
          type="button"
          onClick={startVideo}
          className="absolute bottom-4 right-4 z-10 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#17385B] px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-[#28577C] focus-visible:outline-2 focus-visible:outline-offset-2"
          aria-label="Reproduzir animação do Novembro Azul"
        >
          <Play size={16} aria-hidden="true" /> Reproduzir vídeo
        </button>
      )}
    </div>
  );
}
