import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FasciaConnectionSection } from "@/components/engagement/FasciaConnectionSection";
import { MethodBridgeSection } from "@/components/sections/MethodBridgeSection";
import { BodyAwarenessSection } from "@/components/sections/BodyAwarenessSection";

export const metadata: Metadata = { title: "Fáscia e cuidado | Projeto Lucy — Novembro Azul", description: "Movimento, percepção corporal e abordagens complementares.", alternates: { canonical: "/fascia-e-cuidado" } };

export default function TopicPage() {
 return <div className="flex min-h-screen flex-col"><Header /><main id="conteudo-principal" className="flex-1"><div className="mx-auto max-w-6xl px-5 py-8 sm:px-8"><Link href="/" className="text-sm font-semibold text-[#245C7D] hover:underline">← Voltar ao início</Link><p className="mt-5 text-xs font-bold uppercase tracking-widest text-[#427996]">Especial Novembro Azul</p><h1 className="mt-2 font-serif text-3xl font-bold text-[#17385B] sm:text-4xl">Fáscia e cuidado</h1><p className="mt-3 max-w-2xl text-[#405B6B]">Movimento, percepção corporal e abordagens complementares.</p></div><FasciaConnectionSection /><MethodBridgeSection /><BodyAwarenessSection /><div className="mx-auto max-w-6xl px-5 py-8"><Link href="/" className="inline-flex rounded-full bg-[#17385B] px-5 py-3 text-sm font-semibold text-white">Voltar aos 7 temas</Link></div></main><Footer /></div>;
}
