import React from "react";
import Image from "next/image";
import { ExternalLink, Globe, ShieldCheck } from "lucide-react";
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
          {/* Identificação Institucional com Logo */}
          <div className="md:col-span-5 space-y-4">
            <div className="inline-block bg-white p-2.5 rounded-2xl shadow-sm">
              <Image
                src="/images/logo-escola-fasciaterapia.png"
                alt="Logo da Escola de Fasciaterapia e Movimento"
                width={150}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </div>
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#84B7CE] bg-[#84B7CE]/10 px-3 py-1 rounded-full border border-[#84B7CE]/20 mt-1">
                Campanha Institucional Educativa
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F5F2EB] tracking-tight">
              {CAMPAIGN_INFO.institution.name}
            </h3>
            <p className="text-[#C7D9D2] text-sm sm:text-base leading-relaxed max-w-md">
              Fundada por <strong className="text-white font-medium">{CAMPAIGN_INFO.institution.founder}</strong> (Fisioterapeuta, Educadora Física e Fasciaterapeuta — InCor/HCFMUSP). Um espaço dedicado à percepção corporal, movimento consciente e à construção de uma relação acolhedora com o próprio corpo.
            </p>
            <p className="text-xs text-[#84B7CE]/90 italic">
              &ldquo;{CAMPAIGN_INFO.slogan}&rdquo;
            </p>
          </div>

          {/* Links Oficiais da Escola */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-[#84B7CE]">
              Canais Oficiais
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={CAMPAIGN_INFO.institution.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#C7D9D2] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#84B7CE] rounded"
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
                  className="inline-flex items-center gap-2 text-[#C7D9D2] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#84B7CE] rounded"
                >
                  <InstagramIcon className="w-4 h-4 text-[#84B7CE]" />
                  <span>Instagram @fasciaterapia.fasciavocemesmo</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" aria-hidden="true" />
                </a>
              </li>
              <li className="pt-2 text-xs text-[#C7D9D2]/80 leading-relaxed">
                Atendimento e consultório: Consolação / Higienópolis, São Paulo - SP.
              </li>
            </ul>
          </div>

          {/* Aviso Legal Ético em Saúde */}
          <div className="md:col-span-4 space-y-3 bg-white/5 p-6 rounded-2xl border border-white/10">
            <div className="flex items-center gap-2 text-[#84B7CE]">
              <ShieldCheck className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
              <h4 className="text-xs font-semibold tracking-wider uppercase">
                Aviso de Responsabilidade Ética
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-[#C7D9D2] leading-relaxed">
              As informações contidas nesta página possuem caráter exclusivamente educativo, institucional e de conscientização preventiva. Elas não substituem o diagnóstico, o aconselhamento médico individualizado ou o acompanhamento por profissionais de saúde qualificados. Em caso de dúvidas ou sintomas, consulte uma unidade de saúde.
            </p>
          </div>
        </div>

        {/* Rodapé inferior com copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#C7D9D2]/70">
          <p>
            © {CAMPAIGN_INFO.year} {CAMPAIGN_INFO.institution.name}. Todos os direitos reservados.
          </p>
          <p className="text-center sm:text-right">
            Campanha Novembro Azul: 14 de Novembro (Diabetes) • 17 de Novembro (Câncer de Próstata)
          </p>
        </div>
      </div>
    </footer>
  );
}
