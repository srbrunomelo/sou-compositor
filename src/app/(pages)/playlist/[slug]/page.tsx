import { Button } from "@/src/shared/components/ui/button";
import { ChevronLeft, Music } from "lucide-react";
import Link from "next/link";

import { fetchHygraphQuery } from "@/src/shared/lib/fetch-hygraph-query";
import { playlistBySlug } from "@/src/shared/query/playlist";
import { Playlist } from "@/src/entities/playlist";
import { Metadata } from "next";
import { PlaylistView } from "@/src/features/playlist/playlist-view";
import { Contact } from "@/src/shared/components/Contact";
import Footer from "@/src/shared/components/Footer";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const response = await fetchHygraphQuery(
    playlistBySlug(slug),
    `playlist-${slug}}`,
  );

  const playlist = response.playlist as Playlist;

  return {
    title: playlist.title,
    description: playlist.description,
    keywords: ["compositor", "composição", "lançamento", "composição musical"],
    openGraph: {
      title: playlist.title,
      description: playlist.description,
      type: "website",
      images: [playlist.image.url],
    },
  } as Metadata;
}

export default async function PlaylistPage({ params }: Props) {
  const { slug } = await params;

  const response = await fetchHygraphQuery(
    playlistBySlug(slug),
    `playlist-${slug}}`,
  );

  const playlist = response.playlist as Playlist;

  if (!playlist) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Playlist não encontrada</h2>
          <Link href="/compositor">
            <Button variant="default">Voltar ao site</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-32">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/composicoes">
            <Button
              variant="ghost"
              className="gap-2 text-muted-foreground hover:text-primary"
            >
              <ChevronLeft className="w-4 h-4" />
              Voltar ao site
            </Button>
          </Link>
          <div className="flex items-center gap-2 font-serif font-bold text-lg">
            <Music className="w-5 h-5 text-primary" />
            <span>{playlist.artist?.name || "Playlist"}</span>
          </div>
        </div>
      </nav>
      <PlaylistView playlist={playlist} />

      <Contact />
      <Footer />
    </div>
  );
}
