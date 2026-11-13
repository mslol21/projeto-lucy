"use client";
import { MessageCircle, BookOpen, Share2 } from "lucide-react";

const url = "https://www.escoladefasciaterapiaemovimento.com";
const message = `Oi! Vi esse material especial de Novembro Azul sobre diabetes e saúde masculina no Projeto Lucy e lembrei de você: ${url}`;
const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

export function ShareActions({ variant = "mobile" }: { variant?: "mobile" | "desktop" }) {
  if (variant === "desktop") return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 whitespace-nowrap bg-[#314FA1] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#233E87] focus-visible:outline-2 focus-visible:outline-offset-2"><Share2 size={16} aria-hidden="true"/> Compartilhar com a família</a>
  );
  return (
    <>
      <nav aria-label="Ações rápidas da campanha" className="fixed inset-x-0 bottom-0 z-50 border-t border-[#C6D6E0] bg-white/95 px-3 pt-2 pb-[calc(env(safe-area-inset-bottom)+8px)] shadow-[0_-5px_25px_rgba(15,35,60,.1)] backdrop-blur-xl lg:hidden">
        <div className="mx-auto flex max-w-lg gap-2">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 flex-[1.5] items-center justify-center gap-2 bg-[#176B53] px-3 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2"><MessageCircle size={17} aria-hidden="true"/> Compartilhar no WhatsApp</a>
          <a href="/#temas" className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 border border-[#7A9DAF] bg-white px-3 text-sm font-semibold text-[#17385B] focus-visible:outline-2 focus-visible:outline-offset-2"><BookOpen size={16} aria-hidden="true"/> Conteúdo</a>
        </div>
      </nav>
    </>
  );
}
