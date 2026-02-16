import { Works } from "@/src/shared/components/Works";
import { Contact } from "@/src/shared/components/Contact";

import MainLayout from "@/src/shared/components/main-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Compositor Profissional | Sertanejo, Gospel, Funk e Pagode",
    template: "%s | Nome do Compositor",
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
  authors: [{ name: "Seu Nome" }],
  openGraph: {
    title: "Compositor Profissional - Hits Inéditos",
    description:
      "Procurando sua próxima música de trabalho? Confira meu portfólio de composições.",
    type: "website",
    locale: "pt_BR",
    images: ["/og-image.jpg"], // Imagem que aparece no WhatsApp/Instagram
  },
};

export default function Allworks() {
  return (
    <MainLayout>
      <Works />
      <Contact />
    </MainLayout>
  );
}
