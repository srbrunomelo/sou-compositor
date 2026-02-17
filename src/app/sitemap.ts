import { MetadataRoute } from 'next';
import { songs, categories } from "@/src/shared/lib/data"; 
import { slugify } from '@/src/shared/utils/seo';
import { blogPosts } from '../shared/lib/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://soucompositor.com.br';

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
    .filter((cat) => cat !== "Todos")
    .map((cat) => ({
      url: `${baseUrl}/compositor-${slugify(cat)}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

  const songRoutes = songs.map((song) => {
    const catSlug = slugify(song.category.replace('/', '-'));
    const songSlug = slugify(song.title);
    
    return {
      url: `${baseUrl}/composicao/${catSlug}/${songSlug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    };
  });

  const blogRoutes = blogPosts.map((post) => {
    const postSlug = slugify(post.title);

    return {
      url: `${baseUrl}/blog/${postSlug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    };

  });

  return [...staticRoutes, ...categoryRoutes, ...songRoutes, ...blogRoutes];
}