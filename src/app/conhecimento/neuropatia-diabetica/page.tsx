import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/knowledge/ArticleLayout";
import { getArticleBySlug } from "@/data/knowledge-data";

export async function generateMetadata(): Promise<Metadata> {
  const article = getArticleBySlug("neuropatia-diabetica");
  if (!article) return { title: "Artigo não encontrado" };

  return {
    title: `${article.title} | Escola de Fasciaterapia`,
    description: article.summary,
    alternates: {
      canonical: `https://projeto-lucy.vercel.app/conhecimento/${article.slug}`
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://projeto-lucy.vercel.app/conhecimento/${article.slug}`,
      type: "article",
      publishedTime: "2026-11-01T00:00:00.000Z",
      modifiedTime: "2026-11-09T00:00:00.000Z"
    }
  };
}

export default function NeuropatiaDiabeticaPage() {
  const article = getArticleBySlug("neuropatia-diabetica");
  if (!article) notFound();

  return <ArticleLayout article={article} />;
}
