import Link from "next/link";
import { Button } from "@/src/shared/components/ui/button";
import { PostViewWrapper } from "@/src/features/post/post-view";
import { ArrowLeft, Music } from "lucide-react";

import { fetchHygraphQuery } from "@/src/shared/lib/fetch-hygraph-query";
import { postBySlug } from "@/src/shared/query/post";

type PageProps = {
  params: {
    id: string;
    slug: string;
  };
};

export const generateMetadata = async ({ params }: PageProps) => {
  const { slug } = await params;

  const data = await fetchHygraphQuery(postBySlug(slug), `post-${slug}`);
  const post = data.post;

  if (post) {
    return {
      title: post.title,
      description: post.excerpt,
      keywords: [post.category, "Composição Musical", "lançamento"],
      openGraph: {
        title: post.title,
        description: post.excerpt,
        images: [post.image],
      },
    };
  }
};

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const data = await fetchHygraphQuery(postBySlug(slug), `post-${slug}`);
  const post = data.post;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Postagem não encontrada</h1>
          <Link href="/blog">
            <Button variant="default">Voltar ao Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-32">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 font-serif font-bold text-xl tracking-tight cursor-pointer">
              <Music className="w-6 h-6 text-primary" />
              <span>SOU COMPOSITOR</span>
            </div>
          </Link>
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" /> Voltar ao Blog
            </Button>
          </Link>
        </div>
      </nav>

      <PostViewWrapper {...post} />
    </div>
  );
}
