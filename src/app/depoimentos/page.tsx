import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VideoTestimonialsSection } from "@/components/sections/VideoTestimonialsSection";

export const metadata: Metadata = {
  title: "Depoimentos e relatos de caso | Projeto Lucy",
  description: "Conheça depoimentos, vídeos e o relato de caso sobre neuropatia diabética e Fasciaterapia do Projeto Lucy.",
  alternates: { canonical: "/depoimentos" },
};

export default function DepoimentosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="conteudo-principal" className="flex-1 pt-20">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
          <Link href="/" className="text-sm font-semibold text-[#245C7D] hover:underline">← Voltar à campanha</Link>
        </div>
        <VideoTestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
