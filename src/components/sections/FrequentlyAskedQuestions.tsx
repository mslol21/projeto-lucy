import Link from "next/link";

const questions = [
  { question: "O que é o Novembro Azul?", answer: "É uma campanha de conscientização sobre saúde. Neste especial, abordamos o Dia Mundial do Diabetes, em 14 de novembro, e a saúde masculina, incluindo o câncer de próstata, em 17 de novembro.", href: "/visao-geral" },
  { question: "Quais são os sinais de neuropatia diabética?", answer: "Pode haver dor, queimação, formigamento, dormência ou perda de sensibilidade, especialmente nos pés. O diagnóstico e o acompanhamento devem ser feitos por profissionais habilitados.", href: "/neuropatia-e-sna" },
  { question: "Todo homem precisa fazer PSA e toque retal anualmente?", answer: "Não existe uma recomendação universal de rastreamento anual para todos os homens sem sintomas. A decisão deve considerar riscos, benefícios e a avaliação individual com um profissional de saúde.", href: "/cancer-de-prostata" },
  { question: "A Fasciaterapia substitui tratamento médico?", answer: "Não. A Fasciaterapia é apresentada aqui como abordagem complementar. Relatos individuais não demonstram eficácia clínica e não substituem diagnóstico, medicamentos ou acompanhamento médico.", href: "/fascia-e-cuidado" },
];

export function FrequentlyAskedQuestions() {
  return <section aria-labelledby="perguntas-frequentes" className="bg-white px-5 py-14 text-[#17385B] sm:px-8">
    <div className="mx-auto max-w-5xl">
      <p className="text-xs font-bold uppercase tracking-widest text-[#427996]">Perguntas frequentes</p>
      <h2 id="perguntas-frequentes" className="mt-3 font-serif text-3xl font-bold">Respostas rápidas para começar</h2>
      <div className="mt-7 grid gap-4 md:grid-cols-2">
        {questions.map(({ question, answer, href }) => <article key={question} className="rounded-xl border border-[#D9E5E8] bg-[#F7FAFB] p-5">
          <h3 className="font-semibold leading-6">{question}</h3>
          <p className="mt-3 text-sm leading-7 text-[#405B6B]">{answer}</p>
          <Link href={href} className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-[#245C7D] underline underline-offset-4">Aprofundar o assunto</Link>
        </article>)}
      </div>
      <p className="mt-6 text-xs leading-6 text-[#526E7E]">Conteúdo educativo. Não substitui orientação médica individualizada.</p>
    </div>
  </section>;
}
