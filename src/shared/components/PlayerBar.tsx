"use client";

import React, { useRef } from "react";
import { usePlayer } from "@/src/app/providers/player";
import Image from "next/image";

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

const PlayerBar: React.FC = () => {
  const { state, dispatch } = usePlayer();
  const progressRef = useRef<HTMLDivElement>(null);

  if (!state.currentTrack) return null;

  const handlePlayPause = () => {
    dispatch({ type: "TOGGLE_PLAY" });
  };

  const handleNext = () => {
    dispatch({ type: "NEXT_TRACK" });
  };

  const handlePrev = () => {
    dispatch({ type: "PREV_TRACK" });
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current) return;
    const rect = progressRef.current.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const newTime = pos * state.currentTrack!.duration;

    // Manual seeking by directly setting current time in audio element via state
    // We need to trigger the actual audio element too, so we'll look for it in the DOM
    // or just let the AudioEngine sync it if we enhance it.
    const audioEl = document.querySelector("audio");
    if (audioEl) audioEl.currentTime = newTime;
    dispatch({ type: "SET_PROGRESS", payload: newTime });
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_VOLUME", payload: parseFloat(e.target.value) });
  };

  const progressPercent = (state.progress / state.currentTrack.duration) * 100;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-24 bg-slate-900/80 backdrop-blur-2xl border-t border-slate-800/50 flex items-center px-4 md:px-8 z-50">
      {/* Current Track Info */}
      <div className="flex items-center w-1/4 min-w-[200px]">
        <Image
          width={150}
          height={150}
          src={state.currentTrack.coverUrl.url}
          alt={state.currentTrack.title}
          className="w-14 h-14 rounded-lg shadow-lg object-cover"
        />
        <div className="ml-4 truncate">
          <h4 className="text-sm font-semibold text-slate-100 truncate">
            {state.currentTrack.title}
          </h4>
          <p className="text-xs text-slate-400 truncate">
            {state.currentTrack.artist.name}
          </p>
        </div>
        {/* <button className="ml-4 text-slate-400 hover:text-pink-500 transition-colors">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button> */}
      </div>

      {/* Controls & Progress */}
      <div className="flex-1 flex flex-col items-center max-w-2xl px-4">
        <div className="flex items-center space-x-6 mb-2">
          {/* <button
            onClick={() => dispatch({ type: "TOGGLE_SHUFFLE" })}
            className={`transition-colors ${state.shuffle ? "text-indigo-400" : "text-slate-500 hover:text-slate-300"}`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              />
            </svg>
          </button> */}

          {/* <button
            onClick={handlePrev}
            className="text-slate-300 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8.445 14.832A1 1 0 0010 14V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4zM16.445 14.832A1 1 0 0018 14V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
            </svg>
          </button> */}

          <button
            onClick={handlePlayPause}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-105 transition-transform shadow-lg shadow-white/10"
          >
            {state.isPlaying ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>

          {/* <button
            onClick={handleNext}
            className="text-slate-300 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4.555 6.168A1 1 0 003 7v10a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4zM12.555 6.168A1 1 0 0011 7v10a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4z" />
            </svg>
          </button> */}

          {/* <button
            onClick={() =>
              dispatch({
                type: "SET_REPEAT",
                payload:
                  state.repeat === "all"
                    ? "one"
                    : state.repeat === "one"
                      ? "none"
                      : "all",
              })
            }
            className={`transition-colors ${state.repeat !== "none" ? "text-indigo-400" : "text-slate-500 hover:text-slate-300"}`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            {state.repeat === "one" && (
              <span className="absolute text-[8px] -mt-2.5 ml-1 font-bold">
                1
              </span>
            )}
          </button> */}
        </div>

        <div className="w-full flex items-center space-x-3 text-xs text-slate-500 font-medium">
          <span>{formatTime(state.progress)}</span>
          <div
            ref={progressRef}
            onClick={handleSeek}
            className="flex-1 h-1 bg-slate-800 rounded-full cursor-pointer relative group"
          >
            <div
              className="absolute top-0 left-0 h-full bg-indigo-500 rounded-full group-hover:bg-indigo-400"
              style={{ width: `${progressPercent}%` }}
            />
            <div
              className="absolute top-1/2 w-3 h-3 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1/2 -translate-x-1/2"
              style={{ left: `${progressPercent}%` }}
            />
          </div>
          <span>{formatTime(state.currentTrack.duration)}</span>
        </div>
      </div>

      {/* Right side controls */}
      <div className="w-1/4 min-w-[150px] flex items-center justify-end space-x-4">
        {/* <button className="text-slate-400 hover:text-slate-100">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button> */}
        <div className="flex items-center space-x-2 group">
          <button
            onClick={() => dispatch({ type: "TOGGLE_MUTE" })}
            className="text-slate-400 hover:text-slate-100"
          >
            {state.isMuted || state.volume === 0 ? (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              </svg>
            )}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={state.isMuted ? 0 : state.volume}
            onChange={handleVolumeChange}
            className="w-24 accent-indigo-500 h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerBar;
