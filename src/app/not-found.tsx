import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Home, ArrowRight, BookOpen, MessageCircle, Sparkles } from "lucide-react";
import { NOVEMBER_BLUE_OFFER } from "@/data/campaign-data";

export default function NotFound() {
  const offer = NOVEMBER_BLUE_OFFER;
  const whatsappUrl = `https://wa.me/${offer.whatsappNumber}?text=${encodeURIComponent(
    "Olá, Lucy! Acessei uma página não encontrada no site da campanha e gostaria de orientações."
  )}`;

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB] text-[#17385B]">
      <Header />
      <main className="flex-1 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full text-center space-y-8 bg-white/80 backdrop-blur-md p-8 sm:p-12 rounded-3xl rounded-tr-[52px] border border-stone-200/90 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17385B]/10 text-[#17385B] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#527fae]" />
            <span>Página Não Encontrada • Erro 404</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#17385B]">
            Conteúdo não localizado
          </h1>

          <p className="text-sm sm:text-base text-[#415A77] leading-relaxed max-w-lg mx-auto">
            O endereço que você tentou acessar pode ter sido movido, renomeado ou não está mais disponível. Você pode navegar pelos atalhos abaixo ou falar diretamente com Lucy Aihara.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#17385B] hover:bg-[#122A45] text-white font-medium text-xs sm:text-sm shadow-md transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Página Inicial</span>
            </Link>

            <Link
              href="/atendimento"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-stone-50 text-[#17385B] font-medium text-xs sm:text-sm border border-stone-300 shadow-xs transition-all"
            >
              <span>Atendimento Gratuito</span>
              <ArrowRight className="w-4 h-4 text-[#527fae]" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-[#073322] font-semibold text-xs sm:text-sm shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="pt-4 border-t border-stone-200/80">
            <Link
              href="/conhecimento"
              className="inline-flex items-center gap-1.5 text-xs text-[#527fae] hover:text-[#17385B] font-medium transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Explorar o Centro de Conhecimento e Artigos Científicos</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
