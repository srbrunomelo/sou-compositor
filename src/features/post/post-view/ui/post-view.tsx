"use client";

import { Button } from "@/src/shared/components/ui/button";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import RichText from "@/src/shared/components/RichText";

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import { Post } from "@/src/entities/post";

export default function PostView(post: Post) {
  const shareUrl = `https://soucompositor.com.br/blog/${post.slug}`;
  const shareTitle = `Confira a postagem "${post.title} - ${post.category}" sobre música e composição!`;

  return (
    <main className="pt-15">
      <header className="h-[50vh] relative overflow-hidden">
        <Image
          width={1600}
          height={500}
          src={post.image.url}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-sm text-primary font-mono uppercase tracking-widest">
                <Calendar className="w-4 h-4" />
                {post.date} • {post.category}
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight">
                {post.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 max-w-4xl py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <div className="whitespace-pre-line text-muted-foreground text-xl leading-relaxed font-sans">
            <RichText content={post.content.raw as any} />
          </div>
        </motion.div>

        <div className="mt-16 pt-8 border-t border-border/40 flex justify-between items-center">
          <div className="pt-4 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Compartilhar
            </p>
            <div className="flex gap-3">
              <FacebookShareButton url={shareUrl} hashtag="#Compositor">
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl} title={shareTitle}>
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <WhatsappShareButton
                url={shareUrl}
                title={shareTitle}
                separator=":: "
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            </div>
          </div>
          <Link href="/blog">
            <Button
              variant="outline"
              className="border-primary/20 hover:bg-primary/10 cursor-pointer"
            >
              Ler mais no Blog
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
