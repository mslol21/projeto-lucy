"use client";
import { useState, type FormEvent } from "react";
import { Download, LoaderCircle } from "lucide-react";
export function GuideLeadCard() {
  const [name,setName]=useState("");
  const [contact,setContact]=useState("");
  const [consent,setConsent]=useState(false);
  const [loading,setLoading]=useState(false);
  const [feedback,setFeedback]=useState("");
  const [honeypot,setHoneypot]=useState("");
  const submit=async(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    setFeedback("");
    if(!name.trim() || !contact.trim() || !consent) { setFeedback("Preencha os campos e confirme o consentimento.");return; }
    setLoading(true);
    try {
      const res=await fetch("/api/guia",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name,contact,consent,hp:honeypot})});
      const data: { message?: string }=await res.json();
      if(!res.ok) throw new Error(data.message || "Não foi possível concluir a solicitação.");
      setFeedback("Solicitação enviada. Você receberá as orientações pelo contato informado.");
      setName("");setContact("");setConsent(false);
    } catch(err) {setFeedback(err instanceof Error?err.message:"Ocorreu um problema. Tente novamente.");}
    finally {setLoading(false);}
  };
  return (
    <section id="guia" aria-labelledby="guia-title" className="bg-[#17385B] py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-9 px-5 sm:px-8 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.15em] text-[#B6D6EA]">Material educativo</p>
          <h2 id="guia-title" className="mt-3 max-w-xl font-serif text-3xl leading-tight sm:text-4xl">Receba o Guia Completo de Percepção Corporal e Saúde Integrativa (PDF)</h2>
          <p className="mt-5 max-w-lg leading-7 text-[#DEEAF2]">Um material para aprofundar a conversa sobre atenção ao corpo e cuidado individualizado. Inscreva-se para receber o guia quando a disponibilização estiver ativa.</p>
        </div>
        <form onSubmit={submit} className="space-y-4 border border-white/20 bg-white/10 p-6 sm:p-8">
          <div><label htmlFor="lead-name" className="mb-2 block text-sm font-semibold">Nome</label><input id="lead-name" required maxLength={100} autoComplete="name" value={name} onChange={e=>setName(e.target.value)} className="min-h-12 w-full bg-white px-4 text-[#17385B]" placeholder="Seu nome"/></div>
          <div><label htmlFor="lead-contact" className="mb-2 block text-sm font-semibold">WhatsApp ou e-mail</label><input id="lead-contact" required maxLength={160} value={contact} onChange={e=>setContact(e.target.value)} className="min-h-12 w-full bg-white px-4 text-[#17385B]" placeholder="Seu contato"/></div>
          <div className="sr-only" aria-hidden="true"><label htmlFor="lead-company">Não preencher</label><input id="lead-company" value={honeypot} tabIndex={-1} autoComplete="off" onChange={e=>setHoneypot(e.target.value)}/></div>
          <label className="flex items-start gap-3 text-xs leading-5 text-[#E2EDF4]"><input type="checkbox" required checked={consent} onChange={e=>setConsent(e.target.checked)} className="mt-1 size-4 accent-[#8BBCE0]"/> Autorizo o uso do meu nome e contato exclusivamente para responder à solicitação do guia. Não serão solicitadas informações sobre minha saúde.</label>
          <button disabled={loading} type="submit" className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-[#E5F0F5] px-5 font-semibold text-[#17385B] disabled:opacity-60">{loading?<LoaderCircle className="animate-spin" size={18} aria-hidden="true"/>:<Download size={18} aria-hidden="true"/>}{loading?"Enviando...":"Solicitar meu guia"}</button>
          <p role="status" aria-live="polite" className="min-h-5 text-sm text-white">{feedback}</p>
          <p className="text-xs leading-5 text-[#DAE8F0]">A solicitação somente é confirmada quando o serviço de entrega está configurado. Não utilizamos suas respostas do checklist neste formulário.</p>
        </form>
      </div>
    </section>
  );
}
