import type { Metadata, Viewport } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://projeto-lucy.vercel.app";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#17385B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Novembro Azul 2026: Diabetes e Câncer de Próstata | Escola de Fasciaterapia",
  description:
    "Novembro Azul 2026: informação sobre o Dia Mundial do Diabetes (14/11) e o Dia Nacional de Combate ao Câncer de Próstata (17/11), com a história de Lucy Aihara.",
  keywords: [
    "Novembro Azul 2026",
    "Escola de Fasciaterapia e Movimento",
    "Lucy Aihara",
    "Dia Mundial do Diabetes",
    "Dia Nacional de Combate ao Câncer de Próstata",
    "Saúde Masculina",
    "Educação Somática",
    "Percepção do Movimento",
    "Autocuidado",
    "INCA",
    "Sociedade Brasileira de Diabetes",
  ],
  authors: [{ name: "Escola de Fasciaterapia e Movimento", url: "https://www.escoladefasciaterapiaemovimento.com/" }],
  creator: "Escola de Fasciaterapia e Movimento",
  publisher: "Escola de Fasciaterapia e Movimento",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Novembro Azul 2026: duas datas para cuidar da saúde",
    description:
      "14 de novembro: Dia Mundial do Diabetes. 17 de novembro: Dia Nacional de Combate ao Câncer de Próstata. Conteúdos e histórias sobre saúde.",
    siteName: "Escola de Fasciaterapia e Movimento",
  },
  twitter: {
    card: "summary_large_image",
    title: "Novembro Azul 2026 | Escola de Fasciaterapia e Movimento",
    description: "Cuidar de si é também aprender a se conhecer. Informar também é uma forma de cuidar.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.escoladefasciaterapiaemovimento.com/#organization",
        name: "Escola de Fasciaterapia e Movimento",
        url: "https://www.escoladefasciaterapiaemovimento.com/",
        founder: {
          "@type": "Person",
          name: "Lucy Aihara",
          jobTitle: "Fisioterapeuta e Fasciaterapeuta",
        },
        sameAs: [
          "https://www.instagram.com/fasciaterapia.fasciavocemesmo",
          "https://www.escoladefasciaterapiaemovimento.com/",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "São Paulo",
          addressRegion: "SP",
          addressCountry: "BR",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: "Novembro Azul 2026: diabetes e câncer de próstata",
        description:
          "Cuidar de si é também aprender a se conhecer. Página informativa com dados oficiais do INCA e da Sociedade Brasileira de Diabetes.",
        isPartOf: {
          "@id": "https://www.escoladefasciaterapiaemovimento.com/#organization",
        },
        inLanguage: "pt-BR",
      },
    ],
  };

  return (
    <html lang="pt-BR" className={`${lora.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F5F2EB] text-[#17385B] font-sans antialiased selection:bg-[#84B7CE] selection:text-[#17385B]">
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#17385B] focus:text-[#F5F2EB] focus:rounded-md focus:shadow-lg focus:ring-2 focus:ring-[#84B7CE]"
        >
          Pular para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}
