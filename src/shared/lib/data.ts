import { Song } from "@/src/entities/song"; 
export type Category = "Todos" | "Gospel" | "Pagode" | "Sertanejo" | "Funk" | "Pop" | "Reggae";
export const categories: Category[] = ["Todos", "Gospel", "Pagode", "Sertanejo", "Funk", "Pop", "Reggae"];

export const songs: Song[] = [
    {
    id: "6",
    title: "Para de Gracinha",
    categories: [{
      slug: 'compositor-pagode',
      title: 'Pagode'
    }],
    active: true,
    slug: 'para-de-gracinha',
    duration: 234, 
    artist: {
      name: "Bruno Melo",
      username: "brunomelo"
    }, 
    coverUrl: {
      url: '/images/cover/pagode.png'
    },
    audioUrl: {
      url: '/songs-web/para-de-gracinha.mp3'
    },
    description: "",
    lyrics: ``
  }, 
]; 