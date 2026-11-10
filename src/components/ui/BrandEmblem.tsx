import React from "react";

export function BrandEmblem({
  className = "w-10 h-10",
  blueColor = "#527fae",
  darkColor = "#17385B",
}: {
  className?: string;
  blueColor?: string;
  darkColor?: string;
}) {
  return (
    <svg
      className={`select-none ${className}`}
      viewBox="0 0 100 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Bloco azul característico com canto superior direito arredondado em arco amplo */}
      <path
        d="M10 0 H50 C77.6 0 100 22.4 100 50 V115 H10 V0 Z"
        fill={blueColor}
      />
      {/* Círculo branco central */}
      <circle cx="50" cy="48" r="19" fill="#FFFFFF" />
      {/* Símbolo escuro inferior caligráfico / somático */}
      {/* Braço superior */}
      <path
        d="M0 64 H82 V76 H0 V64 Z"
        fill={darkColor}
      />
      {/* Hastes verticais conectivas */}
      <path
        d="M26 64 V92 H38 V64 H26 Z"
        fill={darkColor}
      />
      <path
        d="M54 64 V92 H66 V64 H54 Z"
        fill={darkColor}
      />
      {/* Arco inferior em W somático */}
      <path
        d="M16 88 L34 126 H46 L30 92 H16 Z"
        fill={darkColor}
      />
      <path
        d="M44 92 L60 126 H72 L86 88 H74 L66 112 L56 92 H44 Z"
        fill={darkColor}
      />
    </svg>
  );
}

export function AcrylicCard({
  children,
  className = "",
  cornerCut = true,
}: {
  children: React.ReactNode;
  className?: string;
  cornerCut?: boolean;
}) {
  return (
    <div
      className={`relative bg-white/85 backdrop-blur-md border border-white/70 shadow-[0_10px_35px_-5px_rgba(23,56,91,0.06),0_2px_10px_-2px_rgba(23,56,91,0.04)] transition-all duration-300 ${
        cornerCut ? "rounded-3xl rounded-tr-[52px]" : "rounded-3xl"
      } ${className}`}
    >
      {/* Parafusos espaçadores sutis estilo placa acrílica nos 4 cantos */}
      <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-stone-300/60 shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] pointer-events-none" />
      <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-stone-300/60 shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-stone-300/60 shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-stone-300/60 shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] pointer-events-none" />
      {children}
    </div>
  );
}
