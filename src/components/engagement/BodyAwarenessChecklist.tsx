"use client";
import { useMemo, useState } from "react";
import { CheckSquare, Download, MessageCircle } from "lucide-react";

const symptoms = [
  { id: "sede", label: "Sede constante ou acima do habitual" },
  { id: "urina", label: "Necessidade de urinar com frequência" },
  { id: "cansaco", label: "Cansaço persistente sem explicação" },
  { id: "formigamento", label: "Formigamento ou perda de sensibilidade nos pés" },
  { id: "pelve", label: "Desconforto ou dor na região pélvica" },
  { id: "rigidez", label: "Rigidez articular ao acordar" },
] as const;
type SymptomId = (typeof symptoms)[number]["id"];
const campaign = "https://projeto-lucy.vercel.app";

export function BodyAwarenessChecklist() {
  const [selected, setSelected] = useState<SymptomId[]>([]);
  const summary = useMemo(() => symptoms.filter((item) => selected.includes(item.id)).map((item) => item.label), [selected]);
  const text = `Minhas observações para conversar com um profissional de saúde:\n${summary.length ? summary.map((s)=>"- "+s).join("\n") : "Nenhum dos sinais da lista foi marcado."}\n\nEste registro não é diagnóstico. Campanha: ${campaign}`;
  const download = () => {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const href = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href=href; a.download="minhas-observacoes-novembro-azul.txt"; a.click();
    URL.revokeObjectURL(href);
  };

  return (
    <section id="checklist" aria-labelledby="checklist-title" className="scroll-mt-24 bg-[#F1F6F8] py-16 text-[#17385B] sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="text-xs font-bold uppercase tracking-[.16em] text-[#426C84]">Pausa de atenção ao corpo</p>
        <h2 id="checklist-title" className="mt-3 font-serif text-3xl sm:text-4xl">Checklist de percepção corporal e sinais de atenção</h2>
        <p className="mt-4 max-w-3xl leading-7 text-[#435D6D]">Marque o que percebe em seu cotidiano. Esta lista é apenas um registro pessoal; não identifica doenças e não substitui uma avaliação profissional.</p>
        <fieldset className="mt-8 grid gap-3 sm:grid-cols-2">
          <legend className="sr-only">Sinais observados</legend>
          {symptoms.map((item) => {
            const checked = selected.includes(item.id);
            return (
              <label key={item.id} className={`flex min-h-16 cursor-pointer items-center gap-3 border px-4 py-3 text-sm font-medium focus-within:ring-2 focus-within:ring-[#245C83] ${checked ? "border-[#276C98] bg-[#E3F0F6]" : "border-[#D1E0E7] bg-white"}`}>
                <input type="checkbox" checked={checked} onChange={() => setSelected((prev) => checked ? prev.filter((s)=>s!==item.id) : [...prev,item.id])} className="size-5 accent-[#245C83]"/>
                {item.label}
              </label>
            );
          })}
        </fieldset>
        <div aria-live="polite" className="mt-7 border-l-4 border-[#3A7BA5] bg-white p-5">
          <p className="flex items-center gap-2 font-semibold"><CheckSquare size={19} aria-hidden="true"/> {selected.length} {selected.length === 1 ? "sinal assinalado" : "sinais assinalados"}</p>
          <p className="mt-2 leading-7 text-[#435D6D]">{selected.length === 0 ? "Atenção à saúde é importante mesmo sem sintomas. Mantenha o acompanhamento e converse com profissionais sobre os cuidados e exames indicados para sua situação." : "Corpo em diálogo: você assinalou sinais que merecem um olhar atento. Recomendamos conversar com seu médico de confiança e avaliar a necessidade de exames."}</p>
          <p className="mt-2 text-sm text-[#536E7B]">Se tiver sintomas súbitos ou intensos, procure atendimento sem esperar por uma consulta de rotina.</p>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <button type="button" onClick={download} className="inline-flex min-h-12 items-center gap-2 bg-[#17385B] px-5 py-3 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2"><Download size={17} aria-hidden="true"/> Baixar minhas observações</button>
          <a href={`https://wa.me/?text=${encodeURIComponent(text)}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 border border-[#7295A9] px-5 py-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2"><MessageCircle size={17} aria-hidden="true"/> Enviar para meu WhatsApp</a>
        </div>
        <p className="mt-4 text-xs text-[#526B78]">As marcações permanecem nesta página durante o uso. Não são enviadas à escola nem armazenadas em servidor. O compartilhamento ocorre apenas se você escolher essa opção.</p>
      </div>
    </section>
  );
}
