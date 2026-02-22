import { fetchHygraphQuery } from "@/src/shared/lib/fetch-hygraph-query";
import { songsByCategory } from "@/src/shared/query/song";
import ListSongs from "./list-songs";
import { CategoryNavigator } from "@/src/features/category/category-navigator";
import { categorySEOConfig } from "@/src/shared/utils/seo";
export default async function ListSongsWrapper({
  defaultCategory = "compositor-sertanejo",
}: {
  defaultCategory?: string;
}) {
  const { songs } = await fetchHygraphQuery(
    songsByCategory(defaultCategory),
    `songs-${defaultCategory}`,
  );

  const config =
    categorySEOConfig[
      defaultCategory.replace(
        "compositor-",
        "",
      ) as keyof typeof categorySEOConfig
    ];

  return (
    <section
      id="works"
      className="py-24 px-4 md:px-6 container mx-auto max-w-7xl"
    >
      <div className="flex flex-col items-center mb-16 space-y-4 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold">
          {config.title || "Compositor de Músicas Inéditas para Artistas"}
        </h1>
        <div className="h-1 w-20 bg-primary rounded-full" />
        <p className="text-muted-foreground max-w-xl">
          {config.description ||
            "Navegue por categorias para encontrar a sonoridade perfeita para seu projeto."}
        </p>
      </div>
      <CategoryNavigator initialCategory={defaultCategory} />
      <ListSongs songs={songs} />
    </section>
  );
}
