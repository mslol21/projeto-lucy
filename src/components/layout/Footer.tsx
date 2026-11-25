import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, BookOpen, ArrowRight, HeartHandshake, MapPin, Phone, Clock } from "lucide-react";
import { CLINIC_LOCATION, CONTACT_CHANNELS, LUCY_PROFILE } from "@/data/institutional-data";

function SocialIcon({ name, className = "w-4 h-4" }: { name: "instagram" | "facebook" | "linkedin" | "youtube"; className?: string }) {
  if (name === "instagram") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    );
  }
  if (name === "facebook") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    );
  }
  if (name === "linkedin") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#1A2421] text-[#FAF8F5] pt-16 pb-12 border-t border-[#25523D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10 items-start">
          {/* Coluna 1: Lucy Mie Aihara & Consultório */}
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
                Fisioterapia, Dor e Movimento
              </span>
            </div>
            <h3 className="font-serif text-2xl font-normal text-white tracking-tight">
              {LUCY_PROFILE.name}
            </h3>
            <p className="text-[#C7D9D2] text-xs sm:text-sm leading-relaxed">
              {LUCY_PROFILE.shortBio}
            </p>

            <div className="pt-2 text-xs text-[#A2B8AE] space-y-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880] flex-shrink-0 mt-0.5" />
                <span>{CLINIC_LOCATION.fullAddress}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#C5A880] flex-shrink-0" />
                <span>{CLINIC_LOCATION.officeHours.display}</span>
              </p>
              <div className="space-y-1 pt-1">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#C5A880] flex-shrink-0" />
                  <span>Principal: {CONTACT_CHANNELS.phoneMainDisplay}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#C5A880] flex-shrink-0" />
                  <span>Secundário: {CONTACT_CHANNELS.phoneSecondaryDisplay}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Coluna 2: Condições Atendidas & Tratamentos */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2 text-[#C5A880]">
              <BookOpen className="w-4 h-4" />
              <h4 className="text-xs font-semibold tracking-wider uppercase">
                Tratamentos & Condições
              </h4>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#C7D9D2]">
              <li>
                <Link href="/tratamentos/dor" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                  <span>Fisioterapia para Dor</span>
                </Link>
              </li>
              <li>
                <Link href="/tratamentos/dor-lombar" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                  <span>Dor Lombar (Lombalgia)</span>
                </Link>
              </li>
              <li>
                <Link href="/tratamentos/dor-cervical" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                  <span>Dor Cervical e Tensão no Pescoço</span>
                </Link>
              </li>
              <li>
                <Link href="/tratamentos/dor-cronica" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                  <span>Dor Crônica e Sensibilização</span>
                </Link>
              </li>
              <li>
                <Link href="/tratamentos/reabilitacao-ortopedica" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                  <span>Reabilitação Ortopédica</span>
                </Link>
              </li>
              <li>
                <Link href="/tratamentos/fisioterapia-pelvica" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                  <span>Fisioterapia Pélvica</span>
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
            </ul>
          </div>

          {/* Coluna 3: Institucional, Escola & Redes Oficiais */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2 text-[#C5A880]">
              <HeartHandshake className="w-4 h-4" />
              <h4 className="text-xs font-semibold tracking-wider uppercase">
                Institucional & Conexões
              </h4>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#C7D9D2]">
              <li>
                <Link href="/sobre" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                  <span>Sobre Lucy Mie Aihara</span>
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
                  <span>Formações e Cursos Profissionais</span>
                </Link>
              </li>
              <li>
                <Link href="/campanhas" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                  <span>Campanhas de Saúde & Prevenção</span>
                </Link>
              </li>
              <li>
                <Link href="/novembro-azul" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                  <span>Especial Novembro Azul 2026</span>
                </Link>
              </li>
              <li>
                <Link href="/conhecimento" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                  <span>Central de Conhecimento Científico</span>
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                  <span>Contato e Agendamentos</span>
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidade" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                  <span>Política de Privacidade (LGPD)</span>
                </Link>
              </li>
            </ul>

            {/* Redes Sociais Oficiais Confirmadas */}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <span className="text-[11px] uppercase font-semibold text-[#C5A880] tracking-wider block">
                Redes Sociais Oficiais
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={CONTACT_CHANNELS.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#C7D9D2] hover:text-[#C5A880] transition-colors border border-white/10"
                  aria-label="Instagram Oficial de Lucy Aihara"
                >
                  <SocialIcon name="instagram" className="w-4 h-4" />
                </a>
                <a
                  href={CONTACT_CHANNELS.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#C7D9D2] hover:text-[#C5A880] transition-colors border border-white/10"
                  aria-label="Facebook Oficial de Lucy Aihara"
                >
                  <SocialIcon name="facebook" className="w-4 h-4" />
                </a>
                <a
                  href={CONTACT_CHANNELS.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#C7D9D2] hover:text-[#C5A880] transition-colors border border-white/10"
                  aria-label="LinkedIn Oficial de Lucy Aihara"
                >
                  <SocialIcon name="linkedin" className="w-4 h-4" />
                </a>
                <a
                  href={CONTACT_CHANNELS.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#C7D9D2] hover:text-[#C5A880] transition-colors border border-white/10"
                  aria-label="YouTube Oficial de Lucy Aihara"
                >
                  <SocialIcon name="youtube" className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Linha Inferior com Aviso Ético em Saúde */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A2B8AE]">
          <p>
            © {new Date().getFullYear()} {LUCY_PROFILE.name} • {LUCY_PROFILE.siteTitle}. Todos os direitos reservados.
          </p>
          <p className="text-[11px] text-center md:text-right max-w-xl">
            Aviso legal: O conteúdo disponibilizado possui finalidade informativa e educativa. Os procedimentos fisioterapêuticos e somáticos atuam como suporte e recuperação funcional complementar, sem substituir o acompanhamento médico individualizado.
          </p>
        </div>
      </div>
    </footer>
  );
}
