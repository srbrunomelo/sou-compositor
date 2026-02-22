"use client";

import { Playlist } from "@/src/entities/playlist";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/src/shared/components/ui/button";
import { Play, Pause, Clock } from "lucide-react";
import { usePlayer } from "@/src/app/providers/player";
import { event } from "@/src/shared/lib/gtag";
import { Song } from "@/src/entities/song";

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const NEXT_PUBLIC_URL =
  process.env.NEXT_PUBLIC_URL || "https://soucompositor.com.br";

type PlaylistViewProps = {
  playlist: Playlist;
};

export default function PlaylistView({ playlist }: PlaylistViewProps) {
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

  const shareUrl = `${NEXT_PUBLIC_URL}/playlist/${playlist.slug}`;
  const shareTitle = `Confira a playlist "${playlist.title}" de nosso compositor ${playlist.artist.name}!`;

  return (
    <main className="pt-24 container mx-auto px-4 max-w-5xl mb-20">
      <section className="mb-12 flex flex-col md:flex-row gap-8 items-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full md:w-64 aspect-square rounded-[2rem] overflow-hidden shadow-2xl border border-border shrink-0"
        >
          <Image
            src={playlist.image.url}
            alt={playlist.title}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="flex-1 space-y-4 pb-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-xs">
              Playlist Selecionada
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mt-2">
              {playlist.title}
            </h1>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
              {playlist.description}
            </p>
          </motion.div>
          <div className="flex flex-wrap items-center gap-6 pt-4">
            {/* <Button
              size="lg"
              className="rounded-full px-10 h-14 bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/20 gap-3 text-lg font-bold"
              // onClick={playAll}
            >
              <Play className="w-6 h-6 fill-current" /> Reproduzir Tudo
            </Button> */}
            {/* <div className="flex items-center gap-4 text-muted-foreground">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full border border-border"
              >
                <Share2 className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full border border-border"
              >
                <MoreHorizontal className="w-5 h-5" />
              </Button>
            </div> */}

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
      </section>
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-border/50 pb-4 text-muted-foreground text-sm font-medium px-4">
          <div className="flex items-center gap-6">
            <span className="w-8 text-center">#</span>
            <span>Título</span>
          </div>
          <div className="flex items-center gap-12">
            <span className="hidden md:block w-32 text-center">Plays</span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> Duração
            </span>
          </div>
        </div>
        <div className="space-y-1">
          <AnimatePresence mode="popLayout">
            {playlist.song.map((song, index) => {
              if (!song) return null;

              const isActive = state.currentTrack?.id === song.id;
              return (
                <motion.div
                  onClick={() => handlePlayTrack(song)}
                  key={index}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`group flex items-center justify-between p-4 rounded-2xl transition-all border cursor-pointer ${
                    isActive
                      ? "bg-primary/5 border-primary/20"
                      : "hover:bg-card border-transparent hover:border-border"
                  }`}
                >
                  <div className="flex items-center gap-6 min-w-0">
                    <div className="w-8 text-center text-muted-foreground font-mono text-sm group-hover:hidden">
                      {index + 1}
                    </div>
                    <div className="w-8 hidden group-hover:flex justify-center">
                      {state.currentTrack?.id === song.id ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4 fill-current" />
                      )}
                    </div>
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 shadow-sm md:hidden lg:block">
                        <Image
                          src={song.coverUrl.url}
                          alt={song.title}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <h4
                          className={`font-bold truncate ${isActive ? "text-primary" : "text-foreground"}`}
                        >
                          {song.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {song.categories[0].title}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-12">
                    <div className="hidden md:block w-32 text-center text-sm text-muted-foreground">
                      -{/* {song.plays.toLocaleString()} */}
                    </div>
                    <div className="w-16 text-right text-muted-foreground font-mono text-sm">
                      {song.duration}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
