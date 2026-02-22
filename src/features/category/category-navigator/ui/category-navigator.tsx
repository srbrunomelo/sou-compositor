import { fetchHygraphQuery } from "@/src/shared/lib/fetch-hygraph-query";
import { categoriesForNavigator } from "@/src/shared/query/category";

import { Button } from "@/src/shared/components/ui/button";
import { Category } from "@/src/entities/category";
import Link from "next/link";

export default async function CategoryNavigator({
  initialCategory = "compositor-sertanejo",
}: {
  initialCategory: string;
}) {
  const { categories } = await fetchHygraphQuery(
    categoriesForNavigator,
    "categories-navigator",
  );

  if (!categories) return null;
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {categories.map((category: Category) => (
        <Link key={category.slug} href={`/${category.slug}`}>
          <Button
            key={category.slug}
            variant={initialCategory === category.slug ? "default" : "outline"}
            className={`
              rounded-full px-6 transition-all duration-300 cursor-pointer
              ${
                initialCategory === category.slug
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                  : "text-muted-foreground hover:text-foreground hover:border-primary/30 bg-transparent"
              }
            `}
          >
            {category.title}
          </Button>
        </Link>
      ))}
    </div>
  );
}
