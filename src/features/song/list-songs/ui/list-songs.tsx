"use client";

import { Song } from "@/src/entities/song";

import { SongCard } from "@/src/shared/components/SongCard";
import { motion, AnimatePresence } from "framer-motion";

type ListSongsProps = {
  songs: Song[];
};

export default function ListSongs({ songs }: ListSongsProps) {
  return (
    <>
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {songs.map((song) => (
            <motion.div
              key={song.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <SongCard song={song} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {songs.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          Nenhuma obra encontrada nesta categoria.
        </div>
      )}
    </>
  );
}
