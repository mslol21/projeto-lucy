import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Globe, ShieldCheck, BookOpen, ArrowRight, HeartHandshake, MapPin, Phone } from "lucide-react";
import { CLINIC_LOCATION, CONTACT_CHANNELS, LUCY_PROFILE } from "@/data/institutional-data";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#1A2421] text-[#FAF8F5] pt-16 pb-12 border-t border-[#25523D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10 items-start">
          {/* Frente 1: Lucy Aihara & Consultório */}
          <div className="md:col-span-4 space-y-4">
            <div className="inline-block bg-white p-3 rounded-2xl shadow-md border border-white/80">
              <Image
                src="/images/logo-horizontal-hd.png"
                alt="Logo da Escola de Fasciaterapia e Movimento"
                width={200}
                height={58}
                className="h-10 w-auto object-contain"
              />
            </div>
            <div>
              <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-[#C5A880] bg-white/5 px-3 py-1 rounded-full border border-white/10">
                Plataforma Institucional Oficial
              </span>
            </div>
            <h3 className="font-serif text-2xl font-normal text-white tracking-tight">
              {LUCY_PROFILE.name}
            </h3>
            <p className="text-[#C7D9D2] text-xs sm:text-sm leading-relaxed">
              {LUCY_PROFILE.shortBio}
            </p>

            <div className="pt-2 text-xs text-[#A2B8AE] space-y-1.5">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880] flex-shrink-0 mt-0.5" />
                <span>{CLINIC_LOCATION.fullAddress}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A880] flex-shrink-0" />
                <span>WhatsApp: {CONTACT_CHANNELS.whatsappDisplay}</span>
              </p>
            </div>
          </div>

          {/* Frente 2: Navegação & Escola */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2 text-[#C5A880]">
              <BookOpen className="w-4 h-4" />
              <h4 className="text-xs font-semibold tracking-wider uppercase">
                Atendimento & Escola
              </h4>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#C7D9D2]">
              <li>
                <Link href="/sobre" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                  <span>Sobre Lucy Aihara (Trajetória & InCor)</span>
                </Link>
              </li>
              <li>
                <Link href="/tratamentos" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                  <span>Abordagens Terapêuticas (Visão Geral)</span>
                </Link>
              </li>
              <li>
                <Link href="/tratamentos/fasciaterapia" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                  <span>Fasciaterapia (Método Danis Bois)</span>
                </Link>
              </li>
              <li>
                <Link href="/fotobiomodulacao" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                  <span>Fotobiomodulação Aplicada</span>
                </Link>
              </li>
              <li>
                <Link href="/escola" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                  <span>Escola de Fasciaterapia e Movimento</span>
                </Link>
              </li>
              <li>
                <Link href="/escola/cursos" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                  <span>Cursos e Formações Profissionais</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Frente 3: Campanhas & Conhecimento */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2 text-[#C5A880]">
              <HeartHandshake className="w-4 h-4" />
              <h4 className="text-xs font-semibold tracking-wider uppercase">
                Campanhas & Transparência
              </h4>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#C7D9D2]">
              <li>
                <Link href="/campanhas" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                  <span>Hub de Campanhas de Conscientização</span>
                </Link>
              </li>
              <li>
                <Link href="/novembro-azul" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                  <span>Especial Novembro Azul 2026 (Oferta 40 min)</span>
                </Link>
              </li>
              <li>
                <Link href="/conhecimento" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                  <span>Central de Conhecimento Científico</span>
                </Link>
              </li>
              <li>
                <Link href="/depoimentos" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                  <span>Depoimentos e Estudos de Caso</span>
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                  <span>Contato e Localização</span>
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidade" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                  <span>Política de Privacidade (LGPD)</span>
                </Link>
              </li>
            </ul>

            {/* Redes e Links Externos */}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <a
                href={CONTACT_CHANNELS.instagramLucy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#C7D9D2] hover:text-[#C5A880] transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Instagram Oficial</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>
        </div>

        {/* Linha Inferior com Aviso Ético em Saúde */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A2B8AE]">
          <p>
            © {new Date().getFullYear()} Lucy Aihara • Escola de Fasciaterapia e Movimento. Todos os direitos reservados.
          </p>
          <p className="text-[11px] text-center md:text-right max-w-xl">
            Aviso legal: O conteúdo disponibilizado possui finalidade informativa e educativa. As abordagens fisioterapêuticas e somáticas atuam como suporte complementar e não substituem o diagnóstico e acompanhamento médico individualizado.
          </p>
        </div>
      </div>
    </footer>
  );
}
