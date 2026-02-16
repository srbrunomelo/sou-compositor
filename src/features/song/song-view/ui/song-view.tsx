"use client";

import { Song } from "@/src/shared/lib/data";
import { motion } from "framer-motion";
import { Music, Tag, Play } from "lucide-react";
import { Button } from "@/src/shared/components/ui/button";
import { Badge } from "@/src/shared/components/ui/badge";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import Link from "next/link";
import Image from "next/image";
import { generateSongDescription, slugify } from "@/src/shared/utils/seo";
import { usePlayer } from "@/src/app/providers/player";
import { Works } from "@/src/shared/components/Works";

export default function SongViewMain({ song }: { song: Song }) {
  const { state, dispatch } = usePlayer();

  const handlePlayTrack = (track: Song) => {
    if (state.currentTrack?.id === track.id) {
      dispatch({ type: "TOGGLE_PLAY" });
    } else {
      dispatch({ type: "SET_TRACK", payload: track });
    }
  };

  const shareUrl = typeof window !== "undefined" ? window.location : "";
  const shareTitle = `Confira a música "${song.title} - ${song.category}" de nosso compositor!`;

  return (
    <main className="pt-24 container mx-auto px-4 max-w-5xl">
      <div className="grid md:grid-cols-[400px_1fr] gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="aspect-square rounded-2xl overflow-hidden border border-border shadow-2xl relative group">
            <Image
              width={400}
              height={400}
              src={song.coverUrl}
              alt={song.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                size="icon"
                className="w-20 h-20 rounded-full bg-primary text-primary-foreground scale-90 group-hover:scale-100 transition-transform"
                onClick={() => handlePlayTrack(song)}
              >
                <Play className="w-10 h-10 fill-current ml-1" />
              </Button>
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              className="flex-1 bg-primary text-primary-foreground h-12 text-lg shadow-lg"
              onClick={() => handlePlayTrack(song)}
            >
              <Play className="w-5 h-5 mr-2 fill-current" /> Ouvir
            </Button>
          </div>

          <div className="bg-card/50 p-6 rounded-2xl border border-border space-y-6">
            <h3 className="font-serif text-xl border-b border-border pb-4">
              Informações Técnicas
            </h3>

            <div className="space-y-4">
              {/* <div className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Duração:</span>
                <span className="font-mono">{song.duration}</span>
              </div> */}
              <div className="flex items-center gap-3 text-sm">
                <Tag className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Categoria:</span>
                <Link href={`/compositor-${slugify(song.category)}`}>
                  <Badge variant="outline" className="text-xs">
                    {song.category}
                  </Badge>
                </Link>
              </div>
              {/* <div className="flex items-center gap-3 text-sm">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Composição:</span>
                <span>2024</span>
              </div> */}
              <div className="flex items-center gap-3 text-sm">
                <Music className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Arranjo:</span>
                <span>Original</span>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Compartilhar
              </p>
              <div className="flex gap-3">
                <FacebookShareButton url={shareUrl} hashtag="#Compositor">
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl} title={shareTitle}>
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                <WhatsappShareButton url={shareUrl} title={shareTitle}>
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </div>
            </div>
          </div>

          <Link href="/#contact">
            <Button className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 text-lg shadow-lg">
              Solicitar Liberação
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <header className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight">
              {song.title}
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              {generateSongDescription(song)} ...
            </p>
          </header>

          {(song.lyrics && (
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <h2 className="text-3xl font-serif font-bold">Letra</h2>
                <div className="h-px flex-1 bg-border/50" />
              </div>
              <div className="bg-card/30 p-8 md:p-12 rounded-3xl border border-border/50 shadow-inner">
                <div className="whitespace-pre-line text-lg md:text-xl leading-loose font-sans text-foreground/90 italic">
                  {song.lyrics}
                </div>
              </div>
            </section>
          )) || (
            <div className="bg-muted/30 p-12 rounded-3xl border border-dashed border-border text-center">
              <Music className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">
                Esta é uma obra instrumental.
              </p>
            </div>
          )}
        </motion.div>
      </div>

      <Works defaultCategory={song.category} />
    </main>
  );
}
