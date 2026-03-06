import { Hero } from "@/src/shared/components/Hero";
import { Contact } from "@/src/shared/components/Contact";
import { BlogPreview } from "@/src/shared/components/BlogPreview";
import { AboutComposer } from "@/src/shared/components/AboutComposer";

import MainLayout from "@/src/shared/components/main-layout";
import { Metadata } from "next";
import { ListSongsWrapper } from "@/src/features/song/list-songs";

export const metadata: Metadata = {
  title: "Compositor Profissional | Sertanejo, Gospel, Funk e Pagode",
  description:
    "Transforme sua carreira com composições inéditas. Especialista em hits de Sertanejo, letras Gospel ungidas, Funk e Pagode. Entre em contato para guias exclusivas.",
  keywords: [
    "compositor",
    "compositor profissional",
    "compositor sertanejo",
    "composição gospel",
    "letras de música funk",
    "compositor de pagode",
    "venda de músicas",
    "compositores",
    "sou compositor",
    "hits de sucesso",
    "comprar letras de música",
    "compositor brasileiro",
  ],
  authors: [{ name: "Bruno Melo" }],
  openGraph: {
    title: "Compositor Profissional - Hits Inéditos | Sou Compositor",
    description:
      "Procurando sua próxima música de trabalho? Confira o portfólio de composições inéditas de Bruno Melo — compositor profissional de Sertanejo, Gospel, Funk e Pagode.",
    type: "website",
    locale: "pt_BR",
    images: ["/images/cover/gospel.png"],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_URL || "https://soucompositor.com.br",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bruno Melo",
  url: "https://soucompositor.com.br",
  jobTitle: "Compositor Musical",
  description:
    "Compositor profissional de hits nos géneros Sertanejo, Gospel, Funk, Pop, Rock, Reggae e Pagode. Atua na criação de letras e melodias inéditas para artistas, duplas e ministérios.",
  image: "https://soucompositor.com.br/images/system/compositor.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vitória",
    addressRegion: "Espírito Santo",
    addressCountry: "BR",
  },
  knowsAbout: [
    "Composição Musical",
    "Sertanejo",
    "Gospel",
    "Funk",
    "Pagode",
    "Reggae",
    "Pop",
    "Rock",
  ],
  sameAs: [
    "https://www.instagram.com/sou.compositor",
    "https://open.spotify.com/artist/0KmAFSBD0ULxJfyYRCFo73",
  ],
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Composição Musical Profissional",
      description:
        "Criação de letras e melodias inéditas para artistas nos gêneros Sertanejo, Gospel, Funk, Pagode, Reggae, Pop e Rock. Inclui guia de gravação exclusiva.",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O que faz um compositor profissional?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Um compositor profissional cria letras e melodias originais para artistas, duplas e ministérios. Além de escrever a letra, o compositor grava uma guia — demo com a melodia e o arranjo base — para que o artista possa gravar com sua própria voz. Bruno Melo atua nessa área há anos, com composições nos gêneros Sertanejo, Gospel, Funk, Pagode e mais.",
      },
    },
    {
      "@type": "Question",
      name: "Como comprar uma composição inédita?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para adquirir uma composição inédita, basta entrar em contato pelo WhatsApp ou explorar o portfólio disponível no site. Cada música vem com guia exclusiva e direitos de gravação. O processo é simples: escolha a música, negocie os detalhes e receba a letra com a guia gravada.",
      },
    },
    {
      "@type": "Question",
      name: "Quais gêneros musicais o compositor atende?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bruno Melo é compositor nos gêneros Sertanejo Universitário, Sertanejo Modão, Gospel, Worship, Funk, Pagode, Samba, Reggae, Pop e Rock. Cada gênero tem suas particularidades de linguagem, melodia e estrutura que são respeitadas em cada composição.",
      },
    },
    {
      "@type": "Question",
      name: "O compositor trabalha com artistas iniciantes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Muitos artistas que buscam um compositor estão começando a carreira e precisam de músicas de trabalho de qualidade para se apresentar ao mercado. Bruno Melo atende tanto artistas iniciantes quanto duplas e grupos já estabelecidos na cena musical brasileira.",
      },
    },
  ],
};

export default function Home() {
  return (
    <MainLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <ListSongsWrapper defaultCategory="compositor-gospel" />
      <AboutComposer />
      <BlogPreview />
      <Contact />
    </MainLayout>
  );
}
