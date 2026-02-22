import { MetadataRoute } from 'next';
import { slugify } from '@/src/shared/utils/seo'; 

import { postsForSiteMap } from "@/src/shared/query/post";
import { categoriesForSiteMap } from "@/src/shared/query/category";
import { songForSiteMap } from '@/src/shared/query/song';
import { playlistsForSiteMap } from '@/src/shared/query/playlist';
import { fetchHygraphQuery } from "@/src/shared/lib/fetch-hygraph-query";

import { Category } from '@/src/entities/category';
import { Post } from '@/src/entities/post';
import type { SongForSitemap } from '@/src/entities/song';
import { Playlist } from '@/src/entities/playlist';

const { posts } = await fetchHygraphQuery(postsForSiteMap, "posts-sitemap");
const { categories }  = await fetchHygraphQuery(categoriesForSiteMap, "categories-sitemap");
const { songs }  = await fetchHygraphQuery(songForSiteMap, "songs-sitemap");
const { playlists }  = await fetchHygraphQuery(playlistsForSiteMap, "playlists-sitemap");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://soucompositor.com.br';

  const staticRoutes = [{
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1,
  },{
    url: `${baseUrl}/blog`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }];

  const categoryRoutes = categories
    .map((category: Pick<Category, 'slug'>) => ({
      url: `${baseUrl}/${slugify(category.slug)}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

  const songRoutes = songs.map((song: SongForSitemap) => {
    const firstCategorySlug = song.categories[0].slug.replace('compositor-', '');

    return {
      url: `${baseUrl}/composicao/${firstCategorySlug}/${song.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    };
  });

  const blogRoutes = posts.map((post: Pick<Post, 'slug'>) => {
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    };
  });

  const playlistsRoutes = playlists.map((playlist: Pick<Playlist, 'slug'>) => {
    return {
      url: `${baseUrl}/playlist/${playlist.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    };
  });

  return [...staticRoutes, ...categoryRoutes, ...songRoutes, ...blogRoutes, ...playlistsRoutes];
}