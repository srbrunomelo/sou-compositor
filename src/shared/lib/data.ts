import { Track } from "../types/types";
import { slugify } from "../utils/seo";
export type Category = "Todos" | "Gospel" | "Pagode" | "Sertanejo" | "Funk";
export type Song = Track
export const categories: Category[] = ["Todos", "Gospel", "Pagode", "Sertanejo", "Funk"];

export const songs: Song[] = [
  {
    id: "1",
    title: "Feito Louca",
    category: "Funk",
    categorySlug: slugify('Funk'),  
    slug: slugify('Feito Louca'),
    duration: 234, 
    artist: "Bruno Melo", 
    coverUrl: '/images/cover/funk.png',
    audioUrl: '/songs/feito-louca.mp3',
    description: "",
    lyrics: `
      Feito Louca, vem beijando a minha boca
      vem botando mo pressão neste negão 
      `
  },
  {
    id: "2",
    title: "Amor Profundo",
    category: "Gospel",
    categorySlug: slugify('Gospel'),  
    slug: slugify('Amor Profundo'),
    duration: 205, 
    artist: "Bruno Melo", 
    coverUrl: '/images/cover/gospel.png',
    audioUrl: '/songs-web/amor-profundo.mp3',
    description: "",
    lyrics: `
      Se entregou por mim naquela cruz
      Sem merecer, morreu em meu lugar

      Sua graça é luz na escuridão
      Sua voz emana perdão
      Mesmo eu, tão pecador
      Me acolheu com teu amor
 
      Encheu-me com tua glória
      Amor profundo, meu Jesus
      Amado Jesus

      Hoje sou livre
      Tua vitória
      Livre em ti
      Livre em ti
      `
  },

];

export const getCategoryBySlug = (slug: string) => { 
  return categories.find((category) => slugify(category)  === slug);
}

export const getSongsBySlug = (slug: string) => {
  return songs.find((song) => song.slug === slug);
}