// src/shared/components/SongJsonLd.tsx
import { Song } from "@/src/shared/lib/data";

export function SongJsonLd({ song }: { song: Song }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicComposition",
    name: song.title,
    description: song.description,
    genre: song.category,
    composer: {
      "@type": "Person",
      name: "Bruno Melo",
      jobTitle: "Songwriter",
      url: "https://soucompositor.com.br",
    },
    publisher: {
      "@type": "Person",
      name: "Bruno Melo",
    },
    // Se a letra estiver disponível, o Google pode indexar trechos dela
    lyrics: {
      "@type": "CreativeWork",
      text: song.lyrics || "",
    },
    // Caso você tenha uma imagem de capa (StaticImageData ou string)
    image:
      typeof song.coverUrl === "string"
        ? song.coverUrl
        : (song.coverUrl as any).src,
    url: `https://soucompositor.com.br/composicao/${song.id}`, // Use seu helper de slug se preferir
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
