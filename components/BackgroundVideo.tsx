"use client";

import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Mountain } from "lucide-react";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsPlaying(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, []);

  const togglePlayback = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none"
      aria-hidden="true"
    >
      {/* High-Resolution Himalayas Mountain Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ${isPlaying ? "opacity-35 scale-105" : "opacity-15 scale-100"
          } mix-blend-luminosity filter contrast-125 brightness-75 saturate-110`}
      >
        <source src="/videos/himalayas-bg-fast.webm" type="video/webm" />
        <source src="/videos/himalayas-bg.webm" type="video/webm" />
      </video>

      {/* Cinematic Color Wash — Deep Slate Obsidian with Subtle Crimson Atmosphere */}
      <div className="absolute inset-0 bg-[#0b0f17]/60 mix-blend-multiply" />

      {/* Gradient Fade Top & Bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f17]/90 via-transparent to-[#0b0f17]" />

      {/* Radial Vignette: keeps center text and live terminal 100% legible */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 15%, rgba(11, 15, 23, 0.7) 55%, #0b0f17 95%)",
        }}
      />

      {/* Subtle Developer Grid / Scanlines Overlay */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 32, 86, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(69, 85, 108, 0.15) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Floating Ambient Himalayas Motion Controller */}
      <div className="absolute bottom-6 right-6 z-20 pointer-events-auto hidden sm:block">
        <button
          onClick={togglePlayback}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131b2a]/90 hover:bg-[#1a2538] border border-[#314158]/70 hover:border-[#ff2056]/50 text-[#90a1b9] hover:text-white text-[11px] font-mono shadow-xl shadow-black/50 backdrop-blur-md transition-all cursor-pointer"
          title={isPlaying ? "Pause Himalayas background video" : "Play Himalayas background video"}
          aria-label={isPlaying ? "Pause Himalayas video" : "Play Himalayas video"}
        >
          <span className="relative flex h-2 w-2">
            <span
              className={`absolute inline-flex h-full w-full rounded-full bg-[#ff2056] ${isPlaying ? "animate-ping opacity-75" : "opacity-0"
                }`}
            />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff2056]" />
          </span>
          <span className="flex items-center gap-1.5">
            <Mountain className="w-3.5 h-3.5 text-[#ff637e]" />
            <span>{isPlaying ? "Himalayas Live" : "Play Mountain BG"}</span>
            {isPlaying ? (
              <Pause className="w-3 h-3 text-[#90a1b9] ml-1" />
            ) : (
              <Play className="w-3 h-3 text-[#ff637e] ml-1" />
            )}
          </span>
        </button>
      </div>
    </div>
  );
}
