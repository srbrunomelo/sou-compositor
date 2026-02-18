export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: {
    raw: string;
  }
  date: string;
  image: {
    url: string;
  };
  category: string;
}