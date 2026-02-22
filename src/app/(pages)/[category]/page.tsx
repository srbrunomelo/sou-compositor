import { Contact } from "@/src/shared/components/Contact";
import { ListSongsWrapper } from "@/src/features/song/list-songs";

import MainLayout from "@/src/shared/components/main-layout";
import { Metadata } from "next";
import { categorySEOConfig } from "@/src/shared/utils/seo";

type Props = {
  params: { category: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const slug = category.replace("compositor-", "");

  const config = categorySEOConfig[slug as keyof typeof categorySEOConfig];

  if (!config) {
    return {
      title: `Composições Inéditas de ${slug}`,
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
      images: [`/images/system/compositor.png`],
    },
  };
}

export default async function Allworks({ params }: Props) {
  const { category } = await params;

  return (
    <MainLayout>
      <ListSongsWrapper defaultCategory={category} />
      <Contact />
    </MainLayout>
  );
}
