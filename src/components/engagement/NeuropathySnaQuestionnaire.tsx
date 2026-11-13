"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Download, HeartPulse, RotateCcw } from "lucide-react";

type Frequency = "nao" | "as-vezes" | "frequente";
type Answer = Frequency | undefined;
type Question = { id: string; label: string };
type Group = { id: string; title: string; subtitle: string; questions: Question[] };

const groups: Group[] = [
  {
    id: "dor",
    title: "1. Neuropatia periférica com dor",
    subtitle: "Sensações dolorosas, especialmente nos pés e nas pernas",
    questions: [
      { id: "queimacao", label: "Sinto queimação, ardência ou dor em choque nos pés ou nas pernas." },
      { id: "agulhadas", label: "Sinto agulhadas, pontadas ou dor que piora à noite." },
      { id: "toque", label: "Sinto dor ou desconforto intenso com um toque leve, como o lençol." },
    ],
  },
  {
    id: "sensibilidade",
    title: "2. Neuropatia periférica sem dor",
    subtitle: "A ausência de dor não significa necessariamente ausência de alteração nervosa",
    questions: [
      { id: "dormencia", label: "Percebo dormência ou perda de sensibilidade nos pés." },
      { id: "temperatura", label: "Tenho dificuldade em perceber frio, calor ou pequenos machucados nos pés." },
      { id: "equilibrio-sensitivo", label: "Sinto insegurança ao caminhar, principalmente no escuro ou em superfícies irregulares." },
    ],
  },
  {
    id: "sna-circulacao",
    title: "3. SNA: pressão, circulação e equilíbrio",
    subtitle: "O sistema nervoso autônomo participa do ajuste da pressão e dos batimentos conforme a situação",
    questions: [
      { id: "tontura-levantar", label: "Sinto tontura, escurecimento da visão ou fraqueza quando me levanto." },
      { id: "desmaio", label: "Já senti que ia desmaiar ou desmaiei ao mudar de posição." },
      { id: "palpitacoes", label: "Percebo coração acelerado em repouso ou dificuldade incomum para tolerar esforços." },
    ],
  },
  {
    id: "sna-urinario",
    title: "4. SNA: bexiga e queixas urinárias",
    subtitle: "Alterações da bexiga têm diferentes causas e merecem investigação individualizada",
    questions: [
      { id: "urgencia", label: "Sinto urgência para urinar ou preciso urinar muitas vezes, inclusive à noite." },
      { id: "esvaziamento", label: "Tenho dificuldade para começar a urinar, jato fraco ou sensação de esvaziamento incompleto." },
      { id: "perdas-urina", label: "Tenho escapes involuntários de urina." },
    ],
  },
  {
    id: "sna-intestino",
    title: "5. SNA: intestino e controle anal",
    subtitle: "Queixas intestinais e anais podem ter causas neurológicas, musculares, medicamentosas ou digestivas",
    questions: [
      { id: "constipacao", label: "Apresento prisão de ventre persistente ou alternância com diarreia." },
      { id: "diarreia-noturna", label: "Tenho episódios de diarreia, especialmente à noite." },
      { id: "perdas-fezes", label: "Tenho dificuldade de segurar fezes ou episódios de escape fecal." },
      { id: "sensacao-evacuar", label: "Percebo mudanças na sensação de necessidade de evacuar." },
    ],
  },
  {
    id: "sna-outros",
    title: "6. Outros sinais que merecem conversa",
    subtitle: "Sinais digestivos e de sudorese também podem aparecer em disfunções autonômicas",
    questions: [
      { id: "saciedade", label: "Sinto saciedade muito rápida, estufamento ou náusea recorrente após comer." },
      { id: "suor", label: "Percebo suor excessivo ou muito reduzido sem explicação aparente." },
      { id: "hipo", label: "Em episódios de glicose baixa, deixei de perceber os sinais habituais de alerta." },
    ],
  },
];

const labels: Record<Frequency, string> = {
  nao: "Não percebo",
  "as-vezes": "Às vezes",
  frequente: "Frequentemente",
};

const questions = groups.flatMap((group) => group.questions);
const home = "https://projeto-lucy.vercel.app/#neuropatia-sna";

export function NeuropathySnaQuestionnaire() {
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const answered = questions.filter((q) => answers[q.id] !== undefined).length;
  const selected = useMemo(
    () => groups.map((g) => ({
      ...g,
      observations: g.questions.filter((q) => answers[q.id] === "as-vezes" || answers[q.id] === "frequente"),
    })).filter((g) => g.observations.length > 0),
    [answers],
  );
  const count = selected.reduce((sum, group) => sum + group.observations.length, 0);
  const complete = answered === questions.length;
  const summary = [
    "MINHAS OBSERVAÇÕES — NEUROPATIA E SISTEMA NERVOSO AUTÔNOMO",
    "Material de apoio para conversar com profissional de saúde. Não é teste diagnóstico.",
    "",
    ...groups.flatMap((group) => [
      group.title,
      ...group.questions.map((q) => "- " + q.label + " — " + (answers[q.id] ? labels[answers[q.id] as Frequency] : "Não respondido")),
      "",
    ]),
    "Questionário informativo, não validado como escala clínica; sintomas têm diversas causas.",
    home,
  ].join("\n");

  const exportTxt = () => {
    const objectUrl = URL.createObjectURL(new Blob([summary], { type: "text/plain;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = objectUrl;
    a.download = "observacoes-neuropatia-sna.txt";
    a.click();
    URL.revokeObjectURL(objectUrl);
  };

  return (
    <section id="neuropatia-sna" aria-labelledby="sna-title" className="scroll-mt-24 border-t border-[#D3E4EB] bg-[#F3F8FA] py-16 text-[#17385B] sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[.14em] text-[#326D8B]">Percepção corporal · Diabetes e sistema nervoso</p>
          <h2 id="sna-title" className="mt-3 font-serif text-[clamp(2rem,4vw,3.25rem)] leading-tight">Questionário de observação: neuropatia diabética e SNA</h2>
          <p className="mt-4 text-base leading-8 text-[#425E6F]">
            A neuropatia diabética pode causar dor, mas também perda de sensibilidade sem dor.
            Quando o sistema nervoso autônomo (SNA) é afetado, funções como pressão arterial,
            digestão, bexiga e controle intestinal podem apresentar alterações.
            Marque o que percebe no cotidiano para conversar com sua equipe de saúde.
          </p>
        </div>
        <aside className="mt-7 rounded-xl border-l-4 border-[#3C87A9] bg-white p-5 text-sm leading-7 text-[#405B6B]">
          <p className="font-semibold text-[#17385B]">O que significa disautonomia?</p>
          <p className="mt-1">
            É uma alteração na regulação de funções automáticas do organismo.
            Em algumas pessoas, o SNA não ajusta adequadamente a pressão arterial ao levantar,
            o que pode causar tontura e instabilidade. Perder o equilíbrio também pode ocorrer
            por alterações de sensibilidade dos pés, sem necessariamente haver disautonomia.
          </p>
          <p className="mt-3"><strong>Este questionário não é um teste clínico validado.</strong> Respostas isoladas não diagnosticam neuropatia, disautonomia, doença da próstata ou problemas renais.</p>
        </aside>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 text-sm text-[#426276]">
          <p aria-live="polite"><strong className="text-[#17385B]">{answered} de {questions.length}</strong> observações respondidas</p>
          <button type="button" onClick={() => setAnswers({})} className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#9BB8C8] px-4 font-semibold hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2">
            <RotateCcw size={16} aria-hidden="true" /> Limpar respostas
          </button>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#D8E7EE]" role="progressbar" aria-valuemin={0} aria-valuemax={questions.length} aria-valuenow={answered} aria-label="Progresso do questionário">
          <div className="h-full bg-[#397D9F] transition-[width] motion-reduce:transition-none" style={{ width: (answered / questions.length * 100) + "%" }} />
        </div>

        <div className="mt-8 space-y-6">
          {groups.map((group) => (
            <fieldset key={group.id} className="min-w-0 rounded-2xl border border-[#DAE6EB] bg-white p-5 sm:p-7">
              <legend className="px-1 font-serif text-xl font-semibold leading-7 text-[#17385B] sm:text-2xl">{group.title}</legend>
              <p className="mb-6 mt-1 text-sm leading-7 text-[#536E7D]">{group.subtitle}</p>
              <div className="space-y-5">
                {group.questions.map((q) => (
                  <div key={q.id} className="border-t border-[#E5EEF1] pt-4 first:border-t-0 first:pt-0">
                    <p id={"question-" + q.id} className="mb-3 text-[15px] font-medium leading-7">{q.label}</p>
                    <div role="radiogroup" aria-labelledby={"question-" + q.id} className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                      {(["nao", "as-vezes", "frequente"] as const).map((frequency) => (
                        <label key={frequency} className={"flex min-h-11 cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#2A688C] " + (answers[q.id] === frequency ? "border-[#397D9F] bg-[#EAF5FA] font-semibold" : "border-[#D6E4E9] bg-[#FAFCFD]")}>
                          <input type="radio" name={q.id} value={frequency} checked={answers[q.id] === frequency} onChange={() => setAnswers((previous) => ({ ...previous, [q.id]: frequency }))} className="size-4 accent-[#235D82]" />
                          {labels[frequency]}
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </fieldset>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-[#BFD9E3] bg-white p-6 sm:p-8" aria-live="polite">
          <div className="flex items-center gap-2"><CheckCircle2 size={21} className="text-[#397D9F]" aria-hidden="true" /><h3 className="font-serif text-2xl">Resumo para sua conversa de saúde</h3></div>
          <p className="mt-3 text-sm leading-7 text-[#425E6F]">
            {!complete
              ? "Você pode responder no seu ritmo. O resumo considera apenas as observações marcadas e não calcula risco ou diagnóstico."
              : count === 0
                ? "Nenhum dos sinais foi assinalado como presente. Mesmo sem sintomas, mantenha o acompanhamento recomendado para pessoas com diabetes."
                : "Você assinalou algumas observações que merecem atenção. Converse com sua equipe de saúde, principalmente sobre alterações urinárias, intestinais, de sensibilidade ou tonturas ao levantar."}
          </p>
          {count > 0 && (
            <div className="mt-5 space-y-3">
              {selected.map((group) => (
                <div key={group.id} className="rounded-lg bg-[#F1F7F9] p-4">
                  <p className="font-semibold text-[#17385B]">{group.title}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-[#486474]">
                    {group.observations.map((q) => <li key={q.id}>{q.label} — {labels[answers[q.id] as Frequency]}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          )}
          <p className="mt-5 text-sm leading-7 text-[#425E6F]">
            <strong>Atenção:</strong> incapacidade súbita de urinar, perda nova de controle urinário ou fecal com fraqueza nas pernas ou alteração de sensibilidade na região íntima, desmaio com lesão ou sintomas súbitos intensos exigem avaliação urgente.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button type="button" onClick={exportTxt} className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#17385B] px-4 py-3 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2"><Download size={17} aria-hidden="true" /> Baixar respostas (.txt)</button>
            <Link href="/conhecimento/neuropatia-diabetica" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#8CB0C3] px-4 py-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2">
              Ler sobre neuropatia <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-4 text-xs leading-6 text-[#597282]">Privacidade: as respostas ficam apenas nesta página e não são enviadas à escola. Se quiser compartilhá-las, baixe o arquivo e escolha pessoalmente para quem enviá-lo.</p>
        </div>

        <div className="mt-8 rounded-xl bg-[#E6F0F5] p-5 text-sm leading-7 text-[#405C6E]">
          <div className="flex items-center gap-2 font-semibold text-[#17385B]"><HeartPulse size={19} aria-hidden="true" /> Referências para orientar a conversa</div>
          <p className="mt-2">Perguntas educativas elaboradas a partir das manifestações descritas pela American Diabetes Association (Standards of Care 2026, capítulo 12) e pelo NIDDK. Não reproduzem um instrumento de triagem validado.</p>
          <div className="mt-3 flex flex-wrap gap-4">
            <a href="https://diabetesjournals.org/care/article/49/Supplement_1/S261/163919/" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">Diretriz ADA 2026</a>
            <a href="https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/nerve-damage-diabetic-neuropathies/autonomic-neuropathy" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">NIDDK: neuropatia autonômica</a>
          </div>
        </div>
      </div>
    </section>
  );
}
