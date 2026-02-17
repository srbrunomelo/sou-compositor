import { getSongsBySlug } from "@/src/shared/lib/data";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/src/shared/components/ui/button";

import Link from "next/link";
import { SongJsonLd } from "@/src/shared/components/SongJsonLd";
import { SongViewMain } from "@/src/features/song/song-view";
import {
  generateSongDescription,
  generateSongTitle,
} from "@/src/shared/utils/seo";

type PageProps = {
  params: {
    slug: string;
    category: string;
  };
};

export const generateMetadata = async ({ params }: PageProps) => {
  const { slug } = await params;

  const song = getSongsBySlug(slug);

  if (song) {
    return {
      title: generateSongTitle(song.title, song.category),
      description: generateSongDescription(song),
      keywords: [song.category, song.title, "Composição Musical", "lançamento"],
      openGraph: {
        title: generateSongTitle(song.title, song.category),
        description: generateSongDescription(song),
        images: [song.coverUrl],
      },
    };
  }
};

export default async function MusicView({ params }: PageProps) {
  const { slug } = await params;

  const song = getSongsBySlug(slug);

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
            <Link href={`/compositor-${song.categorySlug}`}>
              <button className="flex items-center cursor-pointer gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                <ArrowLeft className="w-4 h-4" />
                Ver todas composições de {song.category}
              </button>
            </Link>
          </div>
        </nav>

        <SongViewMain song={song} />
      </div>
    </>
  );
}
