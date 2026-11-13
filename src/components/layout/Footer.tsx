import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Globe, ShieldCheck, BookOpen, ArrowRight } from "lucide-react";
import { CAMPAIGN_INFO } from "@/data/campaign-data";

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
    <footer className="bg-[#17385B] text-[#F5F2EB] pt-16 pb-12 border-t border-[#84B7CE]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10 items-start">
          {/* Identificação Institucional com Logo HD em Acrílico */}
          <div className="md:col-span-4 space-y-4">
            <div className="inline-block bg-white p-3 rounded-2xl rounded-tr-[36px] shadow-md border border-white/80">
              <Image
                src="/images/logo-horizontal-hd.png"
                alt="Logo da Escola de Fasciaterapia e Movimento"
                width={200}
                height={58}
                className="h-10 w-auto object-contain"
              />
            </div>
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#84B7CE] bg-[#84B7CE]/10 px-3 py-1 rounded-full border border-[#84B7CE]/20 mt-1">
                Campanha & Centro de Conhecimento
              </span>
            </div>
            <h3 className="font-serif text-2xl font-normal text-[#F5F2EB] tracking-tight">
              {CAMPAIGN_INFO.institution.name}
            </h3>
            <p className="text-[#C7D9D2] text-sm leading-relaxed max-w-sm">
              Fundada por <strong className="text-white font-medium">{CAMPAIGN_INFO.institution.founder}</strong> (Fisioterapeuta, Educadora Física e Fasciaterapeuta — InCor/HCFMUSP). Espaço dedicado à percepção corporal, movimento consciente e escuta do tecido fascial.
            </p>
            <p className="text-xs text-[#84B7CE]/90 italic">
              &ldquo;{CAMPAIGN_INFO.slogan}&rdquo;
            </p>
          </div>

          {/* Links do Centro de Conhecimento */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2 text-[#84B7CE]">
              <BookOpen className="w-4 h-4" />
              <h4 className="text-xs font-semibold tracking-wider uppercase">
                Centro de Conhecimento
              </h4>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/conhecimento"
                  className="text-[#C7D9D2] hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#84B7CE]" />
                  <span>Índice do Centro de Conhecimento</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/conhecimento/metodo-danis-bois"
                  className="text-[#C7D9D2] hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#84B7CE]" />
                  <span>O Método Danis Bois (Origem & Prática)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/conhecimento/neuropatia-diabetica"
                  className="text-[#C7D9D2] hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#84B7CE]" />
                  <span>Neuropatia Diabética & Sensibilidade</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/conhecimento/fasciaterapia-e-dor"
                  className="text-[#C7D9D2] hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#84B7CE]" />
                  <span>A Fáscia e as Dores Crônicas</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/conhecimento/evidencias-cientificas"
                  className="text-[#C7D9D2] hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#84B7CE]" />
                  <span>Metodologia & Níveis de Evidência</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/conhecimento/fotobiomodulacao"
                  className="text-[#C7D9D2] hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#84B7CE]" />
                  <span>Fotobiomodulação & Evidências</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/conhecimento/lucy-aihara"
                  className="text-[#C7D9D2] hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#84B7CE]" />
                  <span>Trajetória de Lucy Aihara</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Canais Oficiais e Atendimento */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#84B7CE]">
              Canais Oficiais & Consultório
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <a
                  href={CAMPAIGN_INFO.institution.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#C7D9D2] hover:text-white transition-colors"
                >
                  <Globe className="w-4 h-4 text-[#84B7CE]" aria-hidden="true" />
                  <span>Site Oficial da Escola</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={CAMPAIGN_INFO.institution.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#C7D9D2] hover:text-white transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-[#84B7CE]" />
                  <span>Instagram @fasciaterapia.fasciavocemesmo</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" aria-hidden="true" />
                </a>
              </li>
              <li className="pt-2 text-xs text-[#C7D9D2]/90 leading-relaxed border-t border-white/10 space-y-1">
                <p>
                  <strong className="text-white font-medium">Consultório:</strong> {CAMPAIGN_INFO.institution.address.fullAddress}
                </p>
                <p className="text-[#84B7CE]">
                  {CAMPAIGN_INFO.institution.address.metroReference}
                </p>
                <p className="text-white/90">
                  Tel/WhatsApp: {CAMPAIGN_INFO.institution.telephone}
                </p>
              </li>
            </ul>

            {/* Selo Ético */}
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2 text-xs text-[#C7D9D2]">
              <div className="flex items-center gap-2 text-[#84B7CE]">
                <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                <span className="font-semibold uppercase tracking-wider text-[10px]">
                  Compromisso Ético em Saúde
                </span>
              </div>
              <p className="leading-relaxed">
                Este portal tem caráter puramente educativo e não substitui a consulta médica individualizada ou fisioterapia para doenças crônicas.
              </p>
            </div>
          </div>
        </div>

        {/* Linha Inferior com Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#C7D9D2]/70">
          <p>
            © {CAMPAIGN_INFO.year} {CAMPAIGN_INFO.institution.name}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-white transition-colors">
              Campanha Novembro Azul 2026
            </Link>
            <span>•</span>
            <Link href="/#especial-novembro-azul" className="hover:text-white transition-colors text-[#84B7CE] font-medium">
              Primeiro Atendimento Gratuito
            </Link>
            <span>•</span>
            <Link href="/conhecimento" className="hover:text-white transition-colors">
              Centro de Conhecimento
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
