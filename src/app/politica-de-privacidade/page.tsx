import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/knowledge/Breadcrumbs";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";
import { CONTACT_CHANNELS, CLINIC_LOCATION } from "@/data/institutional-data";

export const metadata: Metadata = {
  title: "Política de Privacidade e Proteção de Dados (LGPD) | Lucy Aihara",
  description:
    "Política de privacidade, termos de uso e proteção de dados da plataforma institucional de Lucy Aihara e Escola de Fasciaterapia e Movimento, em conformidade com a LGPD.",
  alternates: {
    canonical: "/politica-de-privacidade",
  },
};

export default function PoliticaPrivacidadePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#1A2421]">
      <Header />

      <div className="bg-white/80 border-b border-[#EADBC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs items={[{ label: "Política de Privacidade" }]} />
        </div>
      </div>

      <main className="flex-1 py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-10 pb-6 border-b border-[#EADBC8]">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#C0D8FF]/30 text-[#065176] border border-[#5C88C5]/30">
              Transparência & Conformidade Legal
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#065176] font-normal">
              Política de Privacidade e Proteção de Dados
            </h1>
            <p className="text-xs sm:text-sm text-[#718096]">
              Última atualização: Novembro de 2026 • Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD)
            </p>
          </div>

          <div className="space-y-8 text-sm text-[#4A5568] leading-relaxed font-sans">
            <section className="space-y-3">
              <h2 className="font-serif text-xl text-[#1A2421]">1. Compromisso com a sua Privacidade</h2>
              <p>
                O consultório de <strong>Lucy Aihara</strong> e a <strong>Escola de Fasciaterapia e Movimento</strong>{" "}
                assumem o compromisso permanente com a privacidade, confidencialidade e segurança das informações
                pessoais de seus pacientes, alunos e visitantes deste website institucional.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl text-[#1A2421]">2. Dados Coletados e Finalidades</h2>
              <p>
                Nosso website foi projetado com o princípio do <em>Privacy by Design</em> (minimização da coleta).
                Não solicitamos senhas, dados de cartão de crédito nem dados bancários nesta plataforma.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-[#556370]">
                <li>
                  <strong>Dados de contato espontâneo:</strong> Ao clicar em botões para envio de mensagens via WhatsApp
                  ou preencher eventuais formulários de solicitação de guias, você nos fornece voluntariamente seu nome
                  e número de telefone para que possamos responder à sua solicitação de agendamento ou dúvida pedagógica.
                </li>
                <li>
                  <strong>Dados de navegação e métricas anônimas:</strong> Coletamos dados estatísticos agregados
                  (como tempo de permanência, páginas mais lidas e tipo de dispositivo) exclusivamente para otimizar
                  a velocidade, legibilidade e acessibilidade do site, sem identificação individualizada do usuário.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl text-[#1A2421]">3. Sigilo Clínico e Dados de Saúde</h2>
              <p>
                Em conformidade com o Código de Ética Profissional da Fisioterapia e a Resolução do COFFITO/CREFITO,
                qualquer informação sobre saúde, sintomas ou histórico clínico compartilhado durante a consulta
                presencial é estritamente confidencial e guardada em prontuário clínico protegido sob sigilo profissional.
                Essas informações jamais são compartilhadas, vendidas ou cedidas a terceiros.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl text-[#1A2421]">4. Uso de Cookies</h2>
              <p>
                Utilizamos cookies estritamente necessários para o funcionamento técnico do site e cookies
                analíticos para monitorar o desempenho das páginas de campanhas. Você pode configurar seu
                navegador a qualquer momento para desativar cookies se desejar.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl text-[#1A2421]">5. Direitos do Titular de Dados</h2>
              <p>
                Conforme o artigo 18 da LGPD, você tem o direito de solicitar a confirmação da existência de tratamento,
                acesso aos dados, correção de dados incompletos ou a eliminação de dados fornecidos para contato comercial.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl text-[#1A2421]">6. Canal do Encarregado e Contato</h2>
              <p>
                Para dúvidas sobre nossa política de privacidade ou para exercer seus direitos como titular de dados,
                entre em contato conosco:
              </p>
              <div className="p-4 rounded-xl bg-white border border-[#E2DBD0] text-xs space-y-1">
                <p><strong>Responsável:</strong> Lucy Aihara / Escola de Fasciaterapia e Movimento</p>
                <p><strong>Endereço:</strong> {CLINIC_LOCATION.fullAddress}</p>
                <p><strong>E-mail:</strong> {CONTACT_CHANNELS.email}</p>
                <p><strong>WhatsApp:</strong> {CONTACT_CHANNELS.whatsappDisplay}</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
