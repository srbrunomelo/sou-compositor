"use client";

import React, { useEffect, useRef } from "react";
import { usePlayer } from "@/src/app/providers/player";

const AudioEngine: React.FC = () => {
  const { state, dispatch } = usePlayer();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (state.isPlaying) {
        audioRef.current
          .play()
          .catch((e) => console.error("Playback failed:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [state.isPlaying, state.currentTrack]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = state.isMuted ? 0 : state.volume;
    }
  }, [state.volume, state.isMuted]);

  const onTimeUpdate = () => {
    if (audioRef.current) {
      dispatch({ type: "SET_PROGRESS", payload: audioRef.current.currentTime });
    }
  };

  const onEnded = () => {
    if (state.repeat === "one") {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    } else {
      dispatch({ type: "NEXT_TRACK" });
    }
  };

  // Sync seek if progress is updated from UI (drag bar)
  // We handle manual seeking by comparing state.progress with audioRef.current.currentTime
  // but to avoid loops, UI seeking should probably call a direct seek function.
  // For simplicity, we just sync one way here and handle manual seek in the UI.

  return (
    <audio
      ref={audioRef}
      src={state.currentTrack?.audioUrl}
      onTimeUpdate={onTimeUpdate}
      onEnded={onEnded}
    />
  );
};

export default AudioEngine;
