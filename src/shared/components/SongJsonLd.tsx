import { Song } from "@/src/entities/song";

const NEXT_PUBLIC_SITE_URL =
  process.env.NEXT_PUBLIC_URL || "https://soucompositor.com.br";

export function SongJsonLd({ song }: { song: Song }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicComposition",
    name: song.title,
    description: song.description,
    genre: song.categories[0].title,
    composer: {
      "@type": "Person",
      name: "Bruno Melo",
      jobTitle: "Songwriter",
      url: "https://soucompositor.com.br",
    },
    publisher: {
      "@type": "Person",
      name: song.artist.name,
    },
    // Se a letra estiver disponível, o Google pode indexar trechos dela
    lyrics: {
      "@type": "CreativeWork",
      text: song.lyrics || "",
    },
    // Caso você tenha uma imagem de capa (StaticImageData ou string)
    image:
      typeof song.coverUrl.url === "string"
        ? song.coverUrl.url
        : (song.coverUrl.url as string),
    url: `${NEXT_PUBLIC_SITE_URL}/composicao/${song.categories[0].slug}/${song.slug}`,
  };

  return (
    <script
      id={`soung-${song.id}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
