"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ExternalLink,
  Pause,
  Play,
} from "lucide-react";
import { Project } from "@/data/projects";

interface Project3DScrollerProps {
  projects: Project[];
  onSelect: (project: Project) => void;
}

export default function Project3DScroller({
  projects,
  onSelect,
}: Project3DScrollerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const total = projects.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (idx: number) => {
    setActiveIndex(idx);
  };

  // Autoplay interval
  useEffect(() => {
    if (!isAutoPlaying || isHovered || total <= 1) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, isHovered, nextSlide, total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div
      className="relative w-full max-w-7xl mx-auto flex flex-col items-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. TOP PAGINATION INDICATOR (Matching Reference Image) */}
      <div className="flex items-center justify-center gap-2.5 mb-8 sm:mb-10">
        {projects.map((p, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={p.id}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}: ${p.title}`}
              className="relative py-2 px-1 focus:outline-none cursor-pointer group"
            >
              <motion.div
                layout
                animate={{
                  width: isActive ? 28 : 8,
                  backgroundColor: isActive ? "#0281e0" : "rgba(255, 255, 255, 0.25)",
                  boxShadow: isActive
                    ? "0 0 16px rgba(56, 189, 248, 0.9), 0 0 6px rgba(2, 129, 224, 0.8)"
                    : "none",
                }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="h-2 rounded-full group-hover:bg-white/60 transition-colors"
              />
            </button>
          );
        })}
      </div>

      {/* 2. 3D COVERFLOW STACK STAGE */}
      <div
        className="relative w-full h-[540px] sm:h-[590px] md:h-[620px] flex items-center justify-center overflow-visible"
        style={{ perspective: 1200 }}
      >
        {projects.map((project, idx) => {
          // Circular offset calculation
          let offset = (idx - activeIndex) % total;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          const isCenter = offset === 0;
          const isVisible = Math.abs(offset) <= 2;

          if (!isVisible) return null;

          // Responsive offsets:
          const xOffsetMobile = offset * 210;
          const xOffsetDesktop = offset * 330;
          const rotateY = offset * -26;
          const scale = isCenter ? 1 : 0.84 - Math.abs(offset) * 0.06;
          const zIndex = 30 - Math.abs(offset) * 10;
          const opacity = isCenter ? 1 : Math.max(0.2, 0.72 - Math.abs(offset) * 0.25);

          return (
            <motion.div
              key={project.id}
              onClick={() => {
                if (!isCenter) {
                  goToSlide(idx);
                }
              }}
              animate={{
                x: typeof window !== "undefined" && window.innerWidth < 640 ? xOffsetMobile : xOffsetDesktop,
                rotateY,
                scale,
                zIndex,
                opacity,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 26,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className={`absolute top-0 bottom-0 my-auto w-[310px] sm:w-[380px] md:w-[410px] h-[500px] sm:h-[540px] rounded-[28px] p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 ${
                isCenter
                  ? "bg-[#0d1422] border-2 border-[#0281e0]/80 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(2,129,224,0.3)] ring-1 ring-[#38bdf8]/40"
                  : "bg-[#0b101c]/90 border border-white/10 shadow-xl shadow-black/60 cursor-pointer hover:border-white/30 hover:opacity-90"
              }`}
            >
              {/* Top Image Banner */}
              <div>
                <div className="relative w-full aspect-[16/9.5] rounded-2xl overflow-hidden bg-[#070b14] border border-white/10 group/img">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 310px, 410px"
                    className={`object-cover transition-transform duration-700 ease-out ${
                      isCenter ? "group-hover/img:scale-105" : "brightness-75 contrast-90"
                    }`}
                    priority={idx === 0 || idx === 1}
                  />

                  {/* Vignette gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1422] via-transparent to-transparent opacity-60" />

                  {/* Badge pill */}
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono font-medium text-[#38bdf8] uppercase tracking-wider">
                    {project.category}
                  </div>
                </div>

                {/* Project Title (All Caps Bold as in Reference) */}
                <h3 className="mt-4 text-lg sm:text-xl font-extrabold text-white tracking-wider uppercase line-clamp-1">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="mt-2 text-xs sm:text-sm text-[#cbd5e1] leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Technology Badges (Rounded Pills as in Reference) */}
                <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono uppercase tracking-wider bg-[#131d2e] border border-white/10 text-[#cbd5e1]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 rounded-full text-[10px] font-mono text-[#64748b] bg-[#090e1a] border border-white/5">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                {/* EXPLORE Button - Glowing Blue Gradient Pill (Exact Reference Style) */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelect(project);
                  }}
                  className={`relative cursor-pointer rounded-full font-extrabold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                    isCenter
                      ? "px-8 py-3 bg-gradient-to-r from-[#0281e0] via-[#1d6fe6] to-[#38bdf8] text-white shadow-[0_0_24px_rgba(2,129,224,0.65)] hover:shadow-[0_0_35px_rgba(56,189,248,0.9)] hover:scale-[1.04] active:scale-[0.97]"
                      : "px-5 py-2 bg-white/10 text-white/80 hover:bg-[#0281e0] hover:text-white"
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>EXPLORE</span>
                </button>

                {/* Live Link Icon */}
                {project.websiteUrl && isCenter && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2.5 rounded-full bg-[#131d2e] hover:bg-[#0281e0] border border-white/10 hover:border-transparent text-[#cbd5e1] hover:text-white transition-all shadow-md"
                    aria-label={`Open live site for ${project.title}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 3. BOTTOM CONTROLS & AUTO-SCROLL STATUS */}
      <div className="mt-8 flex items-center justify-between w-full max-w-md px-4">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous project"
          className="p-3 rounded-full bg-[#101726] border border-white/15 text-white hover:bg-[#0281e0] hover:border-transparent transition-all shadow-lg shadow-black/50 cursor-pointer active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Center Indicators & Autoplay Toggle */}
        <div className="flex items-center gap-4 bg-[#101726] px-4 py-2 rounded-full border border-white/10">
          <button
            onClick={() => setIsAutoPlaying((prev) => !prev)}
            className="flex items-center gap-1.5 text-xs font-mono text-[#38bdf8] hover:text-white transition-colors cursor-pointer"
            aria-label={isAutoPlaying ? "Pause auto-scroll" : "Resume auto-scroll"}
          >
            {isAutoPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">LIVE SCROLL</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">PAUSED</span>
              </>
            )}
          </button>

          <span className="text-xs font-mono text-[#64748b]">
            <span className="text-white font-bold">{String(activeIndex + 1).padStart(2, "0")}</span>
            {" / "}
            {String(total).padStart(2, "0")}
          </span>
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          aria-label="Next project"
          className="p-3 rounded-full bg-[#101726] border border-white/15 text-white hover:bg-[#0281e0] hover:border-transparent transition-all shadow-lg shadow-black/50 cursor-pointer active:scale-95"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
