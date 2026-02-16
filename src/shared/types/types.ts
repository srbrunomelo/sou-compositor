import { StaticImageData } from "next/image";
import { Category } from "../lib/data";

export interface Track {
  id: string;
  title: string;
  artist: string; 
  coverUrl: string | StaticImageData;
  audioUrl: string;
  duration: number;
  category: Category;
  lyrics?: string;
  description: string;
  categorySlug: string;
  slug: string
}

export interface PlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
  volume: number;
  progress: number;
  playlist: Track[];
  isMuted: boolean;
  shuffle: boolean;
  repeat: 'none' | 'one' | 'all';
}

export type PlayerAction =
  | { type: 'SET_TRACK'; payload: Track }
  | { type: 'TOGGLE_PLAY' }
  | { type: 'SET_PLAYING'; payload: boolean }
  | { type: 'SET_VOLUME'; payload: number }
  | { type: 'SET_PROGRESS'; payload: number }
  | { type: 'SET_PLAYLIST'; payload: Track[] }
  | { type: 'TOGGLE_MUTE' }
  | { type: 'TOGGLE_SHUFFLE' }
  | { type: 'SET_REPEAT'; payload: 'none' | 'one' | 'all' }
  | { type: 'NEXT_TRACK' }
  | { type: 'PREV_TRACK' };
