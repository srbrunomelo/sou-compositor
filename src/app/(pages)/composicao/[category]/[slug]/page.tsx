import { ArrowLeft } from "lucide-react";
import { Button } from "@/src/shared/components/ui/button";

import Link from "next/link";
import { SongJsonLd } from "@/src/shared/components/SongJsonLd";
import { SongViewMain } from "@/src/features/song/song-view";
import {
  generateSongDescription,
  generateSongTitle,
} from "@/src/shared/utils/seo";

import { fetchHygraphQuery } from "@/src/shared/lib/fetch-hygraph-query";
import { songBySlug } from "@/src/shared/query/song";
import { Song } from "@/src/entities/song";

type PageProps = {
  params: {
    slug: string;
    category: string;
  };
};

export const generateMetadata = async ({ params }: PageProps) => {
  const { slug } = await params;

  const response = await fetchHygraphQuery(songBySlug(slug), `song-${slug}`);
  const song = response.song as Song;

  const canonical =
    `${process.env.NEXT_PUBLIC_URL}/composicao/${song.categories[0].slug}/${song.slug}` ||
    `https://soucompositor.com.br/composicao/${song.categories[0].slug}/${song.slug}`;

  if (song) {
    return {
      title: generateSongTitle(song),
      description: song.description || generateSongDescription(song),
      keywords: [
        song.categories[0].title,
        song.title,
        "Composição Musical",
        "lançamento",
        "musica inedita disponível para gravação",
      ],
      openGraph: {
        title: generateSongTitle(song),
        description: generateSongDescription(song),
        images: song.coverUrl?.url
          ? [
              {
                url: song.coverUrl.url,
                width: 1200,
                height: 630,
                alt: song.title,
              },
            ]
          : [`/images/system/compositor.png`],
      },
      alternates: {
        canonical: canonical,
      },
    };
  }
};

export default async function MusicView({ params }: PageProps) {
  const { slug } = await params;

  const response = await fetchHygraphQuery(songBySlug(slug), `song-${slug}`);
  const song = response.song as Song;

  if (!song) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Música não encontrada</h1>
          <Link href={"/"}>
            <Button variant="default">Voltar ao Início</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SongJsonLd song={song} />
      <div className="min-h-screen bg-background pb-24">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
          <div className="container mx-auto px-4 h-16 flex items-center">
            <Link href={`/${song.categories[0].slug}`}>
              <button className="flex items-center cursor-pointer gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                <ArrowLeft className="w-4 h-4" />
                Ver todas composições de{" "}
                <span className="font-extrabold">
                  {song.categories[0].title}
                </span>
              </button>
            </Link>
          </div>
        </nav>

        <SongViewMain song={song} />
      </div>
    </>
  );
}
