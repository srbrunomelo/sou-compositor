"use client";

import { motion } from "framer-motion";

import { Button } from "@/src/shared/components/ui/button";
import { Badge } from "@/src/shared/components/ui/badge";
import { ArrowDown, Play, Star } from "lucide-react";

import { songs } from "@/src/shared/lib/data";
import Link from "next/link";
import Image from "next/image";
import { usePlayer } from "@/src/app/providers/player";
import { slugify } from "@/src/shared/utils/seo";

import { event } from "@/src/shared/lib/gtag";
import { Song } from "@/src/entities/song";

export function Hero() {
  const { state, dispatch } = usePlayer();
  const song = songs[0];

  const scrollToWorks = () => {
    const worksSection = document.getElementById("works");
    worksSection?.scrollIntoView({ behavior: "smooth" });
  };

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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          width={2500}
          height={400}
          src="/images/system/hero-bg.png"
          alt="Background"
          className="w-full h-full object-cover opacity-40 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-left"
        >
          <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-primary text-sm font-medium backdrop-blur-sm">
            <Star className="w-4 h-4 fill-primary" />
            <span>Compositor & Designer Sonoro</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-foreground tracking-tight leading-[0.9]">
              <span className="text-primary italic">sou </span>
              Compositor
              <br />
              <span className="text-primary italic">de Hits</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-xl leading-relaxed">
              Letras Inéditas de Sertanejo, Gospel, Worship, Reggae, Pop, Funk e
              Pagode
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              size="lg"
              className="text-lg px-10 py-7 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
              onClick={scrollToWorks}
            >
              Explorar Obras
            </Button>
            <div className="flex -space-x-4">
              <Image
                width={500}
                height={500}
                src="/images/system/composer-avatar.png"
                className="w-14 h-14 rounded-full border-2 border-background object-cover"
                alt="Profile"
              />
              <div className="w-14 h-14 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-xs font-bold text-muted-foreground">
                10+
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-purple-500/50 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-card border border-white/10 rounded-[2rem] p-6 shadow-2xl backdrop-blur-xl">
            <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
              <Image
                width={500}
                height={500}
                src={song.coverUrl.url}
                title={song.title}
                alt="Featured"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  onClick={() => handlePlayTrack(song)}
                  size="icon"
                  className="w-16 h-16 rounded-full bg-primary text-primary-foreground scale-90 group-hover:scale-100 transition-transform"
                >
                  <Play className="w-8 h-8 fill-current ml-1" />
                </Button>
              </div>
              <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">
                Obra em Destaque
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-serif font-bold text-foreground">
                    {song.title}
                  </h2>
                  <p className="text-primary font-medium text-sm">
                    {song.categories[0].title}
                  </p>
                </div>
                <Badge variant="outline" className="font-mono text-xs">
                  {song.duration}
                </Badge>
              </div>
              <p className="text-muted-foreground line-clamp-2">
                {song.description}
              </p>
              <Link
                href={`/composicao/${slugify(song.categories[0].slug)}/${slugify(song.title)}`}
              >
                <Button
                  variant="link"
                  className="p-0 text-primary hover:text-primary/80 h-auto font-bold text-lg  cursor-pointer"
                >
                  Ouvir agora & ver detalhes →
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/30 cursor-pointer hover:text-primary transition-colors hidden lg:block"
        onClick={scrollToWorks}
      >
        <ArrowDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
