"use client";

import { useState } from "react";
import { songs, categories, Category } from "@/src/shared/lib/data";
import { SongCard } from "@/src/shared/components/SongCard";
import { Button } from "@/src/shared/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Works({
  defaultCategory = "Todos",
}: {
  defaultCategory?: Category;
}) {
  const [activeCategory, setActiveCategory] =
    useState<Category>(defaultCategory);

  const filteredSongs =
    activeCategory === "Todos"
      ? songs
      : songs.filter((song) => song.category === activeCategory);

  return (
    <section
      id="works"
      className="py-24 px-4 md:px-6 container mx-auto max-w-7xl"
    >
      <div className="flex flex-col items-center mb-16 space-y-4 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold">
          Compositor de Músicas Inéditas para Artistas
        </h1>
        <div className="h-1 w-20 bg-primary rounded-full" />
        <p className="text-muted-foreground max-w-xl">
          Navegue por categorias para encontrar a sonoridade perfeita para seu
          projeto.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={activeCategory === cat ? "default" : "outline"}
            onClick={() => setActiveCategory(cat)}
            className={`
              rounded-full px-6 transition-all duration-300
              ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                  : "text-muted-foreground hover:text-foreground hover:border-primary/30 bg-transparent"
              }
            `}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredSongs.map((song) => (
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

      {filteredSongs.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          Nenhuma obra encontrada nesta categoria.
        </div>
      )}
    </section>
  );
}
