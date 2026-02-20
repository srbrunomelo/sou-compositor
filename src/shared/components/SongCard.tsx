"use client";

import { motion } from "framer-motion";
import { Play, MoreVertical, ExternalLink } from "lucide-react";
import { Button } from "@/src/shared/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/src/shared/components/ui/dropdown-menu";
import { Song } from "@/src/shared/lib/data";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import { Badge } from "@/src/shared/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { usePlayer } from "@/src/app/providers/player";

import { event } from "@/src/shared/lib/gtag";

interface SongCardProps {
  song: Song;
}

export function SongCard({ song }: SongCardProps) {
  const { state, dispatch } = usePlayer();

  const handlePlayTrack = (track: Song) => {
    if (state.currentTrack?.id === track.id) {
      dispatch({ type: "TOGGLE_PLAY" });

      event({
        action: "play_music",
        category: "Music Player",
        label: `${track.artist} - (${track.id})`,
      });
    } else {
      dispatch({ type: "SET_TRACK", payload: track });
    }
  };

  const shareUrl =
    typeof window !== "undefined"
      ? `${window.location}/composicao/${song.categorySlug}/${song.slug}`
      : "";
  const shareTitle = `Confira a música "${song.title} - ${song.category}" de ${song.artist}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-colors shadow-lg hover:shadow-primary/10"
    >
      <div className="aspect-square relative overflow-hidden">
        <Image
          width={400}
          height={400}
          src={song.coverUrl}
          alt={song.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
          <Button
            size="icon"
            className="rounded-full h-12 w-12 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-110 transition-transform"
            onClick={() => handlePlayTrack(song)}
          >
            <Play className="h-6 w-6 ml-1" />
          </Button>
        </div>
        <Badge className="absolute top-3 right-3 bg-black/80 text-white backdrop-blur-md border-white/10">
          {song.category}
        </Badge>
      </div>

      <div className="p-4 space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <Link href={`/composicao/${song.categorySlug}/${song.slug}`}>
              <h3 className="font-serif text-lg font-semibold leading-tight group-hover:text-primary transition-colors cursor-pointer">
                {song.title}
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {song.description}
            </p>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 -mr-2 text-muted-foreground hover:text-foreground"
              >
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-popover border-border"
            >
              <div className="p-2 text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                Compartilhar
              </div>
              <div className="flex gap-2 p-2">
                <FacebookShareButton url={shareUrl} hashtag="#NovaMusica">
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl} title={shareTitle}>
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                <WhatsappShareButton url={shareUrl} title={shareTitle}>
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xs font-mono text-muted-foreground">
            {song.duration}
          </span>

          <Link href={`/composicao/${song.categorySlug}/${song.slug}`}>
            <Button
              variant="outline"
              size="sm"
              className="h-8 cursor-pointer text-xs gap-2 hover:bg-primary/10 hover:text-primary hover:border-primary/50"
            >
              <ExternalLink className="h-3 w-3" />
              Detalhes
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
