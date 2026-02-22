"use client";

import { Music } from "lucide-react";
import Footer from "@/src/shared/components/Footer";
import Link from "next/link";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/"
            aria-label="Home"
            title="Home"
            rel="noopener noreferrer"
            target="_self"
            data-slot="logo"
            data-variant="default"
            data-size="default"
            data-testid="home-link"
            data-cy="home-link"
            data-qa="home-link"
            className="flex items-center gap-2 font-serif font-bold text-xl tracking-tight"
          >
            <Music className="w-6 h-6 text-primary" />
            <span>SOU COMPOSITOR</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <button
              aria-label="Ir para o topo"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Início
            </button>
            <Link
              title="Composições"
              aria-label="Todas as composições"
              href="/composicoes"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Composições
            </Link>
            <Link
              href="/blog"
              title="Blog - Noticias sobre o mercado"
              aria-label="Blog - Noticias sobre o mercado"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Notícias
            </Link>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Contato
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-16">{children}</main>

      <Footer />
    </div>
  );
}
