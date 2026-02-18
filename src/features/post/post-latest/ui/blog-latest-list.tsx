"use client";

import { BlogPost } from "@/src/shared/lib/blogData";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/src/shared/components/ui/card";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/src/shared/components/ui/button";
import Image from "next/image";

type BlogLatestListProps = {
  latestPosts: BlogPost[];
};

export default function BlogLatestList({ latestPosts }: BlogLatestListProps) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {latestPosts.map((post, index) => (
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
                src={post.image.url}
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
  );
}
