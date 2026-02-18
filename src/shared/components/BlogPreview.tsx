import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { fetchHygraphQuery } from "../lib/fetch-hygraph-query";
import { latest } from "@/src/shared/query/post";
import { BlogLatestList } from "@/src/features/post/post-latest";

export async function BlogPreview() {
  const data = await fetchHygraphQuery(latest(3), "posts-latest");

  return (
    <section id="blog-preview" className="py-24 px-4 md:px-6 bg-secondary/10">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Blog & Reflexões
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
            <p className="text-muted-foreground max-w-xl">
              Pensamentos sobre música, cinema e o processo criativo por trás
              das obras.
            </p>
          </div>
          <Link href="/blog">
            <Button
              variant="outline"
              className="group border-primary/20 hover:bg-primary/10 cursor-pointer"
            >
              Ver todas as postagens{" "}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <BlogLatestList latestPosts={data.posts} />
      </div>
    </section>
  );
}
