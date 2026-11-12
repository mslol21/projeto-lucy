import type { MetadataRoute } from "next";

const baseUrl = "https://www.escoladefasciaterapiaemovimento.com";
const routes = [
  "",
  "visao-geral",
  "diabetes",
  "cancer-de-prostata",
  "fascia-e-cuidado",
  "trajetoria-de-lucy",
  "neuropatia-e-sna",
  "checklist-corporal",
  "depoimentos",
  "conhecimento",
  "conhecimento/metodo-danis-bois",
  "conhecimento/neuropatia-diabetica",
  "conhecimento/fasciaterapia-e-dor",
  "conhecimento/fascia-renal",
  "conhecimento/evidencias-cientificas",
  "conhecimento/lucy-aihara"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: path ? `${baseUrl}/${path}` : baseUrl,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.startsWith("conhecimento/") ? 0.7 : 0.8,
  }));
}
