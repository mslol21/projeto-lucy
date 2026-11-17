import type { Metadata, Viewport } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";

const siteUrl = "https://novembroazul.escoladefasciaterapiaemovimento.com";

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
  title: {
    default: "Tratamento com Laser e Sessão Avaliativa R$ 70 | Lucy Aihara",
    template: "%s | Lucy Aihara",
  },
  description:
    "Sessão Avaliativa de Entrada com Laser Terapêutico por R$ 70 (40 min) em novembro de 2026. Lucy Aihara, fisioterapeuta, Consolação / Higienópolis, São Paulo. Aplicação conforme avaliação clínica.",
  keywords: [
    "Novembro Azul 2026",
    "Lucy Aihara",
    "Escola de Fasciaterapia e Movimento",
    "Tratamento com Laser São Paulo",
    "Fasciaterapia Higienópolis Consolação",
    "Dia Mundial do Diabetes",
    "Dia Nacional de Combate ao Câncer de Próstata",
    "Dor neuropática Consolação",
    "Educação Somática",
    "Percepção do Movimento",
    "Autocuidado",
    "INCA",
    "Sociedade Brasileira de Diabetes",
  ],
  authors: [
    {
      name: "Lucy Aihara — Escola de Fasciaterapia e Movimento",
      url: "https://www.escoladefasciaterapiaemovimento.com/",
    },
  ],
  creator: "Lucy Aihara",
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
    canonical: siteUrl,
  },
  openGraph: {
    images: [
      {
        url: "/images/novembro-azul-hero.webp",
        width: 1200,
        height: 675,
        alt: "Campanha Novembro Azul 2026 — Lucy Aihara",
      },
    ],
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Tratamento com Laser e Sessão Avaliativa R$ 70 | Lucy Aihara",
    description:
      "Sessão Avaliativa de Entrada com Laser Terapêutico por R$ 70 (40 min) em novembro de 2026. Lucy Aihara, fisioterapeuta, Consolação / Higienópolis, São Paulo. Aplicação conforme avaliação clínica.",
    siteName: "Escola de Fasciaterapia e Movimento — Lucy Aihara",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/novembro-azul-hero.webp"],
    title: "Tratamento com Laser e Sessão Avaliativa R$ 70 | Lucy Aihara",
    description:
      "Sessão Avaliativa de Entrada com Laser Terapêutico por R$ 70 (40 min) em novembro de 2026. Lucy Aihara, fisioterapeuta, Consolação / Higienópolis, São Paulo. Aplicação conforme avaliação clínica.",
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
        "@type": "Physiotherapy",
        "@id": `${siteUrl}/#localbusiness`,
        name: "Escola de Fasciaterapia e Movimento — Lucy Aihara",
        url: siteUrl,
        telephone: "+55-11-99998-6082",
        priceRange: "$$",
        image: `${siteUrl}/images/logo-horizontal-hd.png`,
        description:
          "Atendimento individualizado de fisioterapia, Fasciaterapia e tratamento com laser terapêutico quando indicado, com Lucy Aihara em São Paulo.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rua Sergipe, 475, conjunto 114",
          addressLocality: "São Paulo",
          addressRegion: "SP",
          postalCode: "01243-912",
          addressCountry: "BR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -23.5489,
          longitude: -46.6575,
        },
        founder: {
          "@type": "Person",
          name: "Lucy Aihara",
          jobTitle: "Fisioterapeuta, Fasciaterapeuta e Educadora Física",
          sameAs: [
            "https://www.instagram.com/fasciaterapia.fasciavocemesmo",
            "https://www.escoladefasciaterapiaemovimento.com/",
          ],
        },
        sameAs: [
          "https://www.escoladefasciaterapiaemovimento.com/",
          "https://www.instagram.com/fasciaterapia.fasciavocemesmo",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Campanha Novembro Azul 2026 | Lucy Aihara",
        description:
          "Campanha Novembro Azul 2026: sessão avaliativa de entrada por R$ 70, educação em saúde e tratamento com laser terapêutico conforme indicação.",
        publisher: {
          "@id": `${siteUrl}/#localbusiness`,
        },
        inLanguage: "pt-BR",
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: "Tratamento com Laser e Sessão Avaliativa R$ 70 | Lucy Aihara",
        description:
          "Sessão Avaliativa de Entrada com Laser Terapêutico por R$ 70 (40 min) em novembro de 2026. Lucy Aihara, fisioterapeuta, Consolação / Higienópolis, São Paulo. Aplicação conforme avaliação clínica.",
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#localbusiness`,
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
