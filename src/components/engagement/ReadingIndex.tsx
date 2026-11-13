"use client";
import { useEffect, useState } from "react";
const sections = [
  { id: "conteudo-principal", label: "Visão geral" },
  { id: "diabetes", label: "14 Nov: Diabetes" },
  { id: "saude-masculina", label: "17 Nov: Próstata" },
  { id: "fascia-cuidado", label: "Fáscia e cuidado" },
  { id: "historia", label: "Trajetória de Lucy" },
  { id: "neuropatia-sna", label: "Neuropatia e SNA" },
  { id: "checklist", label: "Checklist corporal" },
] as const;
export function ReadingIndex() {
  const [active,setActive] = useState<string>("conteudo-principal");
  useEffect(() => {
    const elements = sections.map((item)=>document.getElementById(item.id)).filter((el):el is HTMLElement=>Boolean(el));
    const observer = new IntersectionObserver((entries)=>{
      const hits=entries.filter((entry)=>entry.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);
      if(hits.length) setActive(hits[0].target.id);
    }, {rootMargin:"-15% 0px -65% 0px", threshold:0});
    elements.forEach((el)=>observer.observe(el));
    return ()=>observer.disconnect();
  }, []);
  return (
    <nav aria-label="Índice da leitura" className="fixed right-3 top-1/2 z-30 hidden w-36 -translate-y-1/2 border border-[#D2E1E8] bg-white/95 p-3 shadow-sm backdrop-blur-md 2xl:block 2xl:right-3">
      <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-[#526D7E]">Nesta edição</p>
      <ol className="space-y-1">
        {sections.map((s,i)=><li key={s.id}><a href={`/#${s.id}`} aria-current={active===s.id?"location":undefined} className={`flex gap-2 border-l-2 px-2 py-2 text-[11px] leading-4 focus-visible:outline-2 focus-visible:outline-offset-2 ${active===s.id?"border-[#2A72A3] bg-[#EBF3F8] font-bold text-[#17385B]":"border-transparent text-[#587081] hover:border-[#90B5CA]"}`}><span>{String(i+1).padStart(2,"0")}.</span>{s.label}</a></li>)}
      </ol>
    </nav>
  );
}
