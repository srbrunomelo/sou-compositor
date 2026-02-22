import { Category } from "@/src/entities/category";

export interface Song {
  id: string;
  title: string;
  slug: string;
  description: string;
  active: boolean;
  duration: number;
  lyrics: string;
  coverUrl: {
    url : string
  };
  audioUrl: {
    url : string
  };
  categories: Pick<Category, 'title' | 'slug'>[];
  artist: {
    name: string;
    username: string;
  };
}

export type SongForSitemap =  {
  slug: string
  categories: Pick<Category, 'slug'>[]
}