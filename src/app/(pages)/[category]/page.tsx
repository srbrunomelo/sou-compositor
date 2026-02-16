import { Works } from "@/src/shared/components/Works";
import { Contact } from "@/src/shared/components/Contact";

import MainLayout from "@/src/shared/components/main-layout";
import { Metadata } from "next";
import { categorySEOConfig } from "@/src/shared/utils/seo";
import { getCategoryBySlug } from "@/src/shared/lib/data";

type Props = {
  params: { category: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const slug = category.replace("compositor-", "");

  const config = categorySEOConfig[slug as keyof typeof categorySEOConfig];

  if (!config) {
    return {
      title: "Composições Inéditas | Bruno Melo",
      description:
        "Explore o portfólio de composições inéditas de Bruno Melo em diversos gêneros.",
    };
  }

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
      title: config.title,
      description: config.description,
      type: "website",
      images: [`/images/og-categories/${slug}.jpg`],
    },
  };
}

export default async function Allworks({ params }: Props) {
  const { category } = await params;
  const slug = category.replace("compositor-", "");

  const config = getCategoryBySlug(slug);

  console.log("config", config);

  return (
    <MainLayout>
      <Works defaultCategory={config} />
      <Contact />
    </MainLayout>
  );
}
