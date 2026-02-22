
import { Song } from "@/src/entities/song";
import { currentYear } from "@/src/shared/utils/date-helpers";


/**
 * Gera um título otimizado para SEO baseado nos dados da música
 * @param {Object} songData - Dados da música
 * @returns {string} Título otimizado para SEO
 */
export function generateSongTitle(song: Song) { 
    const { title, artist, categories } = song;
  const artistName = artist?.name || 'Artista';
  const genre = categories?.[0]?.title || 'Música';
  
  const titlePatterns = [
    `${title} - ${artistName} | ${genre} Inédito`,
    `${title} (Composição) - ${artistName} | Letra e Áudio`,
    `${title} - ${artistName} | Música ${genre} para Ouvir`,
    `${title} - ${artistName} | Composição Original de ${genre}`,
    `${title}: ${genre} de ${artistName} | Letra Completa`
  ];
  
  const bestTitle = titlePatterns.find(pattern => pattern.length <= 60) || titlePatterns[0];
  
  return bestTitle.length > 60 ? bestTitle.substring(0, 57) + '...' : bestTitle;
}

/**
 * Gera uma descrição otimizada para SEO baseada nos dados da música
 * @param {Object} songData - Dados da música
 * @returns {string} Descrição otimizada para SEO
 */
export function generateSongDescription(song: Song) {
  // const lyricSnippet = song.lyrics 
  //   ? song.lyrics.replace(/\n/g, ' ').slice(0, 80).trim() + "..."
  //   : "";

  // const baseDescription = {
  //   "Funk": `Procurando a próxima música de trabalho? Confira "${song.title}", composição de Funk com letra exclusiva e guia pronta.`,
  //   "Gospel": `Edifique seu ministério com a canção "${song.title}". Letra de adoração profunda para artistas Gospel.`,
  //   "Sertanejo": `Hit de Sofrência/Sertanejo: "${song.title}". Letra inédita disponível para gravação imediata.`,
  //   "Pagode": `Samba/Pagode de qualidade: "${song.title}". Letra inédita com melodia marcante.`,
  //   "Default": `Confira a composição "${song.title}" de ${song.categories[0].title}. Letras exclusivas de Bruno Melo para artistas profissionais.`
  // }[song.categories[0].title] || `Venda de música inédita: ${song.title}.`;

  // const fullDescription = `${baseDescription} Trecho: "${lyricSnippet}" Entre em contato para guias e exclusividade.`;

  // return fullDescription.slice(0, 155);

  const { title, description, lyrics, artist, categories, duration } = song;
  const artistName = artist?.name || 'Bruno Melo';
  const genre = categories?.[0]?.title || 'samba/pagode';
  
  // Extrai um trecho da letra (primeiros 100 caracteres)
  const lyricsExcerpt = lyrics?.substring(0, 100).replace(/\n/g, ' ').trim() || '';
  
  // Formata a duração
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  const formattedDuration = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  
  // Array de padrões de descrição
  const descriptionPatterns = [
    `🎵 ${title} - Composição de ${artistName}. ${description || `Gênero: ${genre}.`} Ouça agora e confira a letra completa. Duração: ${formattedDuration}.`,
    
    `Descubra "${title}", composição original de ${artistName} no gênero ${genre}. ${lyricsExcerpt ? `Trecho: "${lyricsExcerpt}..."` : ''} Disponível com letra e áudio.`,
    
    `Música inédita: ${title} - ${artistName}. ${genre} de qualidade com letra marcante. ${lyricsExcerpt ? `"${lyricsExcerpt}..."` : ''} Ouça completa (${formattedDuration}).`,
    
    `🎤 ${title} - Nova composição de ${artistName}. ${genre} autêntico com melodia envolvente. Confira a letra completa e o áudio original.`
  ];
  
  // Escolhe a melhor descrição (ideal: 150-160 caracteres)
  let bestDescription = descriptionPatterns.find(desc => desc.length >= 150 && desc.length <= 160) || descriptionPatterns[0];
  
  // Garante que não ultrapasse 160 caracteres
  if (bestDescription.length > 160) {
    bestDescription = bestDescription.substring(0, 157) + '...';
  }
  
  return bestDescription;
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
    description: "Encontre sua próxima música de trabalho. Letras inéditas de Sertanejo Universitário e Modão com guias exclusivas.",
    keywords: ["compositor sertanejo", "comprar música sertaneja", "letras inéditas", "hits para duplas"],
  },
  "gospel": {
    title: "Compositor Gospel e Worship | Canções para Ministérios e Artistas",
    description: "Composições ungidas para o seu ministério. Letras de Adoração e Worship inéditas para gravar. Confira as guias perfeitas.",
    keywords: ["compositor gospel", "músicas para gravar gospel", "letras worship inéditas", "composição cristã"],
  },
  "funk": {
    title: "Compositor de Funk | Letras de Elite e Pique de Hit 2026",
    description: "Procurando hit de Funk? Composições exclusivas, letras de elite e guias prontas para estourar nos fluxos e plataformas.",
    keywords: ["compositor de funk", "letras de funk inéditas", "venda de funk", "hits de funk"],
  },
  "pagode": {
    title: "Compositor de Pagode e Samba | Letras Românticas e Batucada",
    description: "Sua próxima música de trabalho está aqui. Letras inéditas de Pagode e Samba para grupos e artistas solo.",
    keywords: ["compositor de pagode", "letras de samba inéditas", "composição para grupos de pagode"],
  }
};