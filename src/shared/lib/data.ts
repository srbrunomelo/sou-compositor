import { Track } from "../types/types";
import { slugify } from "../utils/seo";
export type Category = "Todos" | "Gospel" | "Pagode" | "Sertanejo" | "Funk";
export type Song = Track
export const categories: Category[] = ["Todos", "Gospel", "Pagode", "Sertanejo", "Funk"];

export const songs: Song[] = [
  {
    id: "6",
    title: "Para de Gracinha",
    category: "Pagode",
    categorySlug: slugify('Pagode'),  
    slug: slugify('Para de Gracinha'),
    duration: 234, 
    artist: "Bruno Melo", 
    coverUrl: '/images/cover/pagode.png',
    audioUrl: '/songs-web/para-de-gracinha.mp3',
    description: "",
    lyrics: `
      Olha nos meus olhos ce vai perceber
      O quanto sua falta já me fez sofrer
      estou te ligando aqui pra te pedir perdão
      tente entender

      sua insegurança, me fez perceber
      O quanto é importante, sempre te dizer 
      Que sem você a vida perde a razão
      Volta pra mim, Não faz assim 

      Eu te quero baby, para de gracinha
      Eu te quero baby, você toda minha
      (Ah-ah-ah)
      Eu te quero baby, para de gracinha
      Eu te quero baby, você toda minha
      `
  },
  {
    id: "1",
    title: "Feito Louca",
    category: "Funk",
    categorySlug: slugify('Funk'),  
    slug: slugify('Feito Louca'),
    duration: 234, 
    artist: "Bruno Melo", 
    coverUrl: '/images/cover/funk.png',
    audioUrl: '/songs-web/feito-louca.mp3',
    description: "",
    lyrics: `
      Feito Louca, vem beijando a minha boca
      vem botando mo pressão neste negão

      num pique quente essa mina é envolvente
      vou meter logo pião nesse mundão

      dentro do barraco o bicho pega
      ela vem sem frescura
      nunca duvide do poder de uma mulher

      ela vai por cima dominando
      é uma loucura
      to viciado e sei bem o que ela quer

      feito louca, vem beijando minha boca
      feito louca
      me leva pra onde ce quiser
      feito louca, vem beijando minha boca
      feito louca 
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
  {
    id: "3",
    title: "Coincidência",
    category: "Sertanejo",
    categorySlug: slugify('Sertanejo'),  
    slug: slugify('Coincidência'),
    duration: 205, 
    artist: "Bruno Melo", 
    coverUrl: '/images/cover/sertanejo.png',
    audioUrl: '/songs-web/coincidencia.mp3',
    description: "",
    lyrics: ` 
        Não quero acreditar que foi coincidência
        Você é meu destino,  apesar  dessa ausencia
        é minha estrela guia é minha paixão

        Não é  medo de te perder pro seu passado
        É o medo de não ter você aqui do lado
        nem sei como seria essa solidão
        
        Foi amooor, 
        agora estou sofrendo
        hoje Eu vivo bebendoo
        pensando nelaa.

        Oi amor,  eu vou gritar bem alto
        eu so quero que entendar

        não foi coincidencia
      `
  },
  {
    id: "4",
    title: "Memorias",
    category: "Sertanejo",
    categorySlug: slugify('Sertanejo'),  
    slug: slugify('Memorias'),
    duration: 205, 
    artist: "Bruno Melo", 
    coverUrl: '/images/cover/sertanejo.png',
    audioUrl: '/songs-web/memorias.mp3',
    description: "",
    lyrics: `
      Você anda por aí brincando de fazer amor
      Mas eu sei em mim foi que você pensou
      Quando ele não fez o que você queria
      Sempre fui eu
      Sei todos mistérios desse corpo seu
      Tudo era perfeito só você e eu
      Mas acabou
      Só resta dor

      Eu sei, sei que ainda lembra dos versos de amor
      Sei que ainda o sonho não se acabou
      Sei que quando você vai dormir me chama

      Não tem como apagar o que a gente viveu
      Era tão perfeito só você e eu
      Ficou gravado na memória
      Nem tentando eu consigo te esquecer
      Você se faz presente em cada amanhecer
      Em cada verso
      Não tem como apagar este amor
      `
  },
  {
    id: "5",
    title: "Eu Te Quero Além de Tudo",
    category: "Gospel",
    categorySlug: slugify('Gospel'),  
    slug: slugify('Eu Te Quero Além de Tudo'),
    duration: 205, 
    artist: "Bruno Melo", 
    coverUrl: '/images/cover/gospel.png',
    audioUrl: '/songs-web/eu-te-quero-alem-de-tudo.mp3',
    description: "",
    lyrics: ` 
      Eu te quero mais que tudo
      Eu te quero além de tudo
      
      Toda terra  e mar
      mais que o respirar
      Eu te quero além de tudo
      Eu te quero mais que tudo

      Toda terra  e mar
      mais que o respirar
      Eu te quero além de tudo
      Eu te quero mais que tudo
      
      Eu não quero te deixar
      Sem seu toque, eu não vou mais ficar
      porque te quero além de tudo
      Eu te quero além de tudo

      Toda terra  e mar
      mais que o respirar
      Eu te quero além de tudo
      Eu te quero mais que tudo

      Eu não quero te soltar
      Eu não quero te soltar
      Eu não quero te soltar
      Eu te quero além de tudo
      `
  },
    
];

export const getCategoryBySlug = (slug: string) => { 
  return categories.find((category) => slugify(category)  === slug);
}

export const getSongsBySlug = (slug: string) => {
  return songs.find((song) => song.slug === slug);
}