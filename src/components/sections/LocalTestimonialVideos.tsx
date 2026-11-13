"use client";

import { useEffect, useState } from "react";
import { Film } from "lucide-react";

type VideoFile = { src: string; label: string };

export function LocalTestimonialVideos({
  videos,
  title,
}: {
  videos: readonly VideoFile[];
  title: string;
}) {
  const [available, setAvailable] = useState<string[]>([]);
  const [checking, setChecking] = useState(true);
  const [failed, setFailed] = useState<string[]>([]);

  useEffect(() => {
    let live = true;
    Promise.all(
      videos.map(async (video) => {
        try {
          const response = await fetch(video.src, { method: "HEAD", cache: "no-store" });
          const type = response.headers.get("content-type") || "";
          return response.ok && (type.includes("video/") || type.includes("application/octet-stream"))
            ? video.src : null;
        } catch {
          return null;
        }
      }),
    ).then((paths) => {
      if (live) {
        setAvailable(paths.filter((path): path is string => Boolean(path)));
        setChecking(false);
      }
    });
    return () => { live = false; };
  }, [videos]);

  const ready = videos.filter((video) => available.includes(video.src) && !failed.includes(video.src));

  if (checking || ready.length === 0) {
    return (
      <div className="flex aspect-video flex-col items-center justify-center gap-3 bg-[#EAF2F5] px-5 text-center" role="status">
        <div className="flex size-16 items-center justify-center rounded-full border border-[#BCD5E1] bg-white text-[#427996]">
          <Film size={27} strokeWidth={1.6} aria-hidden="true" />
        </div>
        <p className="text-sm font-semibold text-[#355B72]">Espaço reservado para vídeo</p>
        <p className="max-w-[34ch] text-xs leading-5 text-[#526E7E]">
          {checking ? "Verificando vídeos disponíveis…" : "Arquivo ainda não publicado. O vídeo aparecerá aqui automaticamente após o envio."}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 bg-[#EAF2F5] p-3 sm:p-4">
      {ready.map((video) => (
        <div key={video.src}>
          {ready.length > 1 && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#355B72]">{video.label}</p>
          )}
          <video
            controls
            playsInline
            preload="metadata"
            className="aspect-video w-full rounded-lg bg-[#17385B] object-contain"
            aria-label={title + " — " + video.label}
            onError={() => setFailed((previous) => [...previous, video.src])}
          >
            <source src={video.src} type="video/mp4" />
            Seu navegador não suporta a reprodução deste vídeo.
          </video>
        </div>
      ))}
    </div>
  );
}
