import { Contact } from "@/src/shared/components/Contact";
import { ListSongsWrapper } from "@/src/features/song/list-songs";
import MainLayout from "@/src/shared/components/main-layout";
import { Metadata } from "next";

const canonical =
  `${process.env.NEXT_PUBLIC_URL}/composicoes` ||
  `https://soucompositor.com.br/composicoes`;

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
  authors: [{ name: "Bruno Melo" }],
  openGraph: {
    title: "Compositor Profissional - Hits Inéditos",
    description:
      "Procurando sua próxima música de trabalho? Confira meu portfólio de composições.",
    type: "website",
    locale: "pt_BR",
    images: ["/images/system/compositor.png"],
  },
  alternates: {
    canonical: canonical,
  },
};

export default function Allworks() {
  return (
    <MainLayout>
      <ListSongsWrapper defaultCategory="compositor-sertanejo" />
      <Contact />
    </MainLayout>
  );
}
