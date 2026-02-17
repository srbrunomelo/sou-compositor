"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/src/shared/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { blogPosts } from "../lib/blogData";

export function BlogPreview() {
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

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-card border-border/50 overflow-hidden h-full flex flex-col group hover:border-primary/30 transition-colors">
                <div className="aspect-video overflow-hidden">
                  <Image
                    width={400}
                    height={350}
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-primary font-mono uppercase tracking-wider">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <h3 className="text-xl font-serif font-bold leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="mt-auto pt-4">
                  <Link href={`/blog/${post.slug}`}>
                    <Button
                      variant="link"
                      className="p-0 text-primary font-bold cursor-pointer"
                    >
                      Ler mais →
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
