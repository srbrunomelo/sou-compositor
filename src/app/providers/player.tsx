"use client";

import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { PlayerState, PlayerAction } from "@/src/shared/types/types";
import { songs } from "@/src/shared/lib/data"; /// PRECISAMOS LIDAR COM ISSO, PARA QUE AS MUSICA TOQUEM INFINITAMNETE NA APLICACAO

const initialState: PlayerState = {
  currentTrack: null,
  isPlaying: false,
  volume: 0.7,
  progress: 0,
  playlist: [], //songs, /// PRECISAMOS LIDAR COM ISSO, PARA QUE AS MUSICA TOQUEM INFINITAMNETE NA APLICACAO
  isMuted: false,
  shuffle: false,
  repeat: "all",
};

function playerReducer(state: PlayerState, action: PlayerAction): PlayerState {
  switch (action.type) {
    case "SET_TRACK":
      return {
        ...state,
        currentTrack: action.payload,
        isPlaying: true,
        progress: 0,
      };
    case "TOGGLE_PLAY":
      return { ...state, isPlaying: !state.isPlaying };
    case "SET_PLAYING":
      return { ...state, isPlaying: action.payload };
    case "SET_VOLUME":
      return {
        ...state,
        volume: action.payload,
        isMuted: action.payload === 0,
      };
    case "SET_PROGRESS":
      return { ...state, progress: action.payload };
    case "SET_PLAYLIST":
      return { ...state, playlist: action.payload };
    case "TOGGLE_MUTE":
      return { ...state, isMuted: !state.isMuted };
    case "TOGGLE_SHUFFLE":
      return { ...state, shuffle: !state.shuffle };
    case "SET_REPEAT":
      return { ...state, repeat: action.payload };
    case "NEXT_TRACK": {
      if (!state.currentTrack) return state;
      const currentIndex = state.playlist.findIndex(
        (t) => t.id === state.currentTrack?.id,
      );
      let nextIndex = (currentIndex + 1) % state.playlist.length;
      if (state.shuffle) {
        nextIndex = Math.floor(Math.random() * state.playlist.length);
      }
      return {
        ...state,
        currentTrack: state.playlist[nextIndex],
        progress: 0,
        isPlaying: true,
      };
    }
    case "PREV_TRACK": {
      if (!state.currentTrack) return state;
      const currentIndex = state.playlist.findIndex(
        (t) => t.id === state.currentTrack?.id,
      );
      const prevIndex =
        (currentIndex - 1 + state.playlist.length) % state.playlist.length;
      return {
        ...state,
        currentTrack: state.playlist[prevIndex],
        progress: 0,
        isPlaying: true,
      };
    }
    default:
      return state;
  }
}

interface PlayerContextType {
  state: PlayerState;
  dispatch: React.Dispatch<PlayerAction>;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(playerReducer, initialState);

  return (
    <PlayerContext.Provider value={{ state, dispatch }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error("usePlayer must be used within a PlayerProvider");
  }
  return context;
};
