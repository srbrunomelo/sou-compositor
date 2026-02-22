import { Song } from "./song";

export interface Playlist {
  id: string;
  title: string;
  description: string;
  slug: string;
  artist: {
    name: string;
    username: string;
  }
  image: {
    url: string;
  };
  song: Song[];
}