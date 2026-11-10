import { NextResponse } from "next/server";
type Submission={ name?:unknown; contact?:unknown; consent?:unknown; hp?:unknown };
export async function POST(req:Request) {
  const webhook=process.env.GUIDE_LEAD_WEBHOOK_URL;
  if(!webhook) return NextResponse.json({message:"O guia ainda não está disponível para solicitação. Volte em breve."},{status:503});
  try {
    const body=await req.json() as Submission;
    if(body.hp) return NextResponse.json({message:"Solicitação recebida."});
    const name=typeof body.name==="string"?body.name.trim():"";
    const contact=typeof body.contact==="string"?body.contact.trim():"";
    const validContact=/^(?:[^\s@]+@[^\s@]+\.[^\s@]+|\+?[\d\s().-]{10,20})$/.test(contact);
    if(!name || name.length>100 || !validContact || contact.length>160 || body.consent!==true) return NextResponse.json({message:"Confira o nome, contato e consentimento."},{status:400});
    const endpoint=new URL(webhook);
    if(endpoint.protocol!=="https:") return NextResponse.json({message:"Serviço temporariamente indisponível."},{status:503});
    const res=await fetch(endpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name,contact,consent:true,source:"projeto-lucy-novembro-azul",createdAt:new Date().toISOString()}),cache:"no-store",signal:AbortSignal.timeout(8000)});
    if(!res.ok) return NextResponse.json({message:"Não foi possível registrar a solicitação. Tente novamente mais tarde."},{status:502});
    return NextResponse.json({message:"Solicitação registrada."});
  } catch {return NextResponse.json({message:"Falha ao processar a solicitação."},{status:500});}
}
