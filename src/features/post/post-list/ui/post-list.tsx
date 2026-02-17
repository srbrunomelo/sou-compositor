"use client";

import Link from "next/link";

import { Button } from "@/src/shared/components/ui/button";
import { Card } from "@/src/shared/components/ui/card";
import { blogPosts } from "@/src/shared/lib/blogData";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PostList() {
  return (
    <main className="pt-32 container mx-auto px-4 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 space-y-4"
      >
        <h1 className="text-5xl md:text-6xl font-serif font-bold">Blog</h1>
        <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
          Explorações sonoras e reflexões sobre a arte da composição.
        </p>
      </motion.div>

      <div className="grid gap-12">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-card border-border/50 overflow-hidden group hover:border-primary/30 transition-colors">
              <div className="grid md:grid-cols-[400px_1fr]">
                <div className="aspect-video md:aspect-auto overflow-hidden">
                  <Image
                    width={1600}
                    height={550}
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center space-y-4">
                  <div className="flex items-center gap-2 text-xs text-primary font-mono uppercase tracking-wider">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <h2 className="text-3xl font-serif font-bold group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`}>
                    <Button
                      variant="outline"
                      className="w-fit border-primary/20 hover:bg-primary/10 cursor-pointer"
                    >
                      Ler postagem completa
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
