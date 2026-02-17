import { PostListWrapper } from "@/src/features/post/post-list";
import { Contact } from "@/src/shared/components/Contact";
import { ArrowLeft } from "lucide-react";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Notícias sobre o mercado musical | Sou Compositor",
    template: "%s | soucompositor.com.br",
  },
};

export default function PostList() {
  return (
    <>
      <div className="min-h-screen bg-background pb-24">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
          <div className="container mx-auto px-4 h-16 flex items-center">
            <Link href={`/`}>
              <button className="flex items-center cursor-pointer gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                <ArrowLeft className="w-4 h-4" />
                Voltar ao Início
              </button>
            </Link>
          </div>
        </nav>

        <PostListWrapper />
        <Contact />
      </div>
    </>
  );
}
