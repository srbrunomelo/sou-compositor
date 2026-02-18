import { Hero } from "@/src/shared/components/Hero";
import { Works } from "@/src/shared/components/Works";
import { Contact } from "@/src/shared/components/Contact";
import { BlogPreview } from "@/src/shared/components/BlogPreview";

import MainLayout from "@/src/shared/components/main-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Compositor Profissional | Sertanejo, Gospel, Funk e Pagode",
    template: "%s | Sou Compositor",
  },
  description:
    "Transforme sua carreira com composições inéditas. Especialista em hits de Sertanejo, letras Gospel ungidas, Funk e Pagode. Entre em contato para guias exclusivas.",
  keywords: [
    "compositor sertanejo",
    "composição gospel",
    "letras de música funk",
    "compositor de pagode",
    "venda de músicas",
  ],
  authors: [{ name: "Bruno Melo" }],
  openGraph: {
    title: "Compositor Profissional - Hits Inéditos",
    description:
      "Procurando sua próxima música de trabalho? Confira meu portfólio de composições.",
    type: "website",
    locale: "pt_BR",
    images: ["/images/cover/gospel.png"],
  },
  alternates: {
    canonical: "https://soucompositor.com.br",
  },
};

export default function Home() {
  return (
    <MainLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Bruno Melo",
            url: "https://soucompositor.com.br",
            jobTitle: "Compositor Musical",
            description:
              "Compositor profissional de hits nos géneros Sertanejo, Gospel, Funk, Pop, rock, Reggae e Pagode.",
            knowsAbout: [
              "Composição Musical",
              "Sertanejo",
              "Gospel",
              "Funk",
              "Pagode",
            ],
            image: "https://soucompositor.com.br/og-image.jpg",
          }),
        }}
      />
      <Hero />
      <Works />
      <BlogPreview />
      <Contact />
    </MainLayout>
  );
}
