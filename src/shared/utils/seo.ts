
import { Song } from "@/src/entities/song";
import { currentYear } from "@/src/shared/utils/date-helpers";

export function generateSongTitle(title: string, category: string) {
  
  const hooks: Record<string, string> = {
    "Funk": `Letra e Música de Funk Inédita: ${title} ${currentYear}}`,
    "Gospel": `Música Gospel para Gravar: ${title} | Adoração e Worship`,
    "Sertanejo": `Composição Sertaneja: ${title} | Letra e Guia para Duplas`,
    "Pagode": `Pagode Romântico Inédito: ${title} | Guia para Grupos`,
    "Default": `Venda de Composição ${category}: ${title} | Letra Inédita`
  };

  const selectedHook = hooks[category] || hooks["Default"];

  return `${selectedHook} | Bruno Melo`.slice(0, 60);
}

export function generateSongDescription(song: Song) {
  const lyricSnippet = song.lyrics 
    ? song.lyrics.replace(/\n/g, ' ').slice(0, 80).trim() + "..."
    : "";

  const baseDescription = {
    "Funk": `Procurando a próxima música de trabalho? Confira "${song.title}", composição de Funk com letra exclusiva e guia pronta.`,
    "Gospel": `Edifique seu ministério com a canção "${song.title}". Letra de adoração profunda para artistas Gospel.`,
    "Sertanejo": `Hit de Sofrência/Sertanejo: "${song.title}". Letra inédita disponível para gravação imediata.`,
    "Pagode": `Samba/Pagode de qualidade: "${song.title}". Letra inédita com melodia marcante.`,
    "Default": `Confira a composição "${song.title}" de ${song.categories[0].title}. Letras exclusivas de Bruno Melo para artistas profissionais.`
  }[song.categories[0].title] || `Venda de música inédita: ${song.title}.`;

  const fullDescription = `${baseDescription} Trecho: "${lyricSnippet}" Entre em contato para guias e exclusividade.`;

  return fullDescription.slice(0, 155);
}

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();


export const categorySEOConfig: Record<string, { title: string; description: string; keywords: string[] }> = {
  "sertanejo": {
    title: "Compositor de Sertanejo | Letras Inéditas e Hits para Duplas",
    description: "Encontre sua próxima música de trabalho. Letras inéditas de Sertanejo Universitário e Modão com guias exclusivas do compositor Bruno Melo.",
    keywords: ["compositor sertanejo", "comprar música sertaneja", "letras inéditas", "hits para duplas"],
  },
  "gospel-worship": {
    title: "Compositor Gospel e Worship | Canções para Ministérios e Artistas",
    description: "Composições ungidas para o seu ministério. Letras de Adoração e Worship inéditas para gravar. Confira as guias de Bruno Melo.",
    keywords: ["compositor gospel", "músicas para gravar gospel", "letras worship inéditas", "composição cristã"],
  },
  "funk": {
    title: "Compositor de Funk | Letras de Elite e Pique de Hit 2026",
    description: "Procurando hit de Funk? Composições exclusivas, letras de elite e guias prontas para estourar nos fluxos e plataformas.",
    keywords: ["compositor de funk", "letras de funk inéditas", "venda de funk", "hits de funk"],
  },
  "pagode": {
    title: "Compositor de Pagode e Samba | Letras Românticas e Batucada",
    description: "Sua próxima música de trabalho está aqui. Letras inéditas de Pagode e Samba para grupos e artistas solo. Qualidade Bruno Melo.",
    keywords: ["compositor de pagode", "letras de samba inéditas", "composição para grupos de pagode"],
  }
};