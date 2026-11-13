import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MenHealthSection } from "@/components/sections/MenHealthSection";

export const metadata: Metadata = { title: "17 Nov: Próstata | Projeto Lucy — Novembro Azul", description: "Saúde masculina, informações e decisões compartilhadas.", alternates: { canonical: "/cancer-de-prostata" } };

export default function TopicPage() {
 return <div className="flex min-h-screen flex-col"><Header /><main id="conteudo-principal" className="flex-1"><div className="mx-auto max-w-6xl px-5 py-8 sm:px-8"><Link href="/" className="text-sm font-semibold text-[#245C7D] hover:underline">← Voltar ao início</Link><p className="mt-5 text-xs font-bold uppercase tracking-widest text-[#427996]">Especial Novembro Azul</p><h1 className="mt-2 font-serif text-3xl font-bold text-[#17385B] sm:text-4xl">17 Nov: Próstata</h1><p className="mt-3 max-w-2xl text-[#405B6B]">Saúde masculina, informações e decisões compartilhadas.</p></div><MenHealthSection /><div className="mx-auto max-w-6xl px-5 py-8"><Link href="/" className="inline-flex rounded-full bg-[#17385B] px-5 py-3 text-sm font-semibold text-white">Voltar aos 7 temas</Link></div></main><Footer /></div>;
}
