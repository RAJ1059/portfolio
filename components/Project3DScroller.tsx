"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

// Diagonal 3D "staircase" scroller: screenshot panels stack along a rising,
// receding diagonal and travel along it as you scroll.
const SPEED = 0.32; // cards / second while drifting
const MOMENTUM = 0.8;
const CORNER = 10;
const VISIBLE_BEHIND = 2.2; // how far past the front card still shows
const VISIBLE_AHEAD = 6.2; // how many cards ahead of the front show

const mod = (n: number, m: number) => ((n % m) + m) % m;
const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

export default function Project3DScroller({
  projects,
  onSelect,
}: Project3DScrollerProps) {
  const total = projects.length;

  const [active, setActive] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [dragging, setDragging] = useState(false);
  const [cardW, setCardW] = useState(420);

  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);

  const pos = useRef(0); // fractional index of the front card
  const target = useRef<number | null>(null);
  const vel = useRef(0); // cards / second
  const hovered = useRef(false);
  const drag = useRef({ on: false, x: 0, t: 0, moved: 0 });
  const autoplay = useRef(true);
  const reduced = useRef(false);
  const activeRef = useRef(0);
  const dims = useRef({ w: 420, h: 270 });

  useEffect(() => {
    autoplay.current = isAutoPlaying;
  }, [isAutoPlaying]);

  useEffect(() => {
    const resize = () => {
      const w = window.innerWidth;
      setCardW(w < 480 ? 250 : w < 768 ? 320 : w < 1100 ? 380 : 440);
    };
    resize();
    window.addEventListener("resize", resize);
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return () => window.removeEventListener("resize", resize);
  }, []);

  const cardH = Math.round(cardW * 0.64);
  dims.current = { w: cardW, h: cardH };

  const goTo = useCallback(
    (i: number) => {
      if (!total) return;
      const base = Math.round(pos.current);
      // shortest way round
      let d = mod(i - base, total);
      if (d > total / 2) d -= total;
      target.current = base + d;
      vel.current = 0;
    },
    [total]
  );
  const shift = useCallback(
    (d: number) => {
      target.current = Math.round(pos.current) + d;
      vel.current = 0;
    },
    []
  );

  useEffect(() => {
    pos.current = 0;
    target.current = null;
    activeRef.current = 0;
    setActive(0);
  }, [total]);

  useEffect(() => {
    if (!total) return;
    let raf = 0;
    let last = performance.now();

    const render = () => {
      const { w, h } = dims.current;
      const p = pos.current;
      for (let i = 0; i < total; i++) {
        const tile = tileRefs.current[i];
        if (!tile) continue;
        // signed distance from front card, wrapped so the stack loops
        const d = mod(i - p + VISIBLE_BEHIND + 1, total) - (VISIBLE_BEHIND + 1);

        if (d < -VISIBLE_BEHIND - 1 || d > VISIBLE_AHEAD + 0.8 || total === 0) {
          tile.style.visibility = "hidden";
          continue;
        }
        tile.style.visibility = "visible";

        const x = (d - 2.2) * w * 0.34;
        const y = -(d - 2.2) * h * 0.33 + h * 0.08;
        const z = -d * 150;
        tile.style.transform =
          `perspective(1500px) translate3d(${x}px, ${y}px, ${z}px) rotateY(-34deg) rotateX(7deg) rotateZ(-0.5deg)`;
        tile.style.zIndex = String(500 - Math.round(d * 20));

        // fade in/out at both ends, darken with depth
        const fadeIn = d < 0 ? clamp(1 + (d + 0.2) / 1.6, 0, 1) : 1;
        const fadeOut = d > VISIBLE_AHEAD - 1.4 ? clamp((VISIBLE_AHEAD + 0.8 - d) / 2.2, 0, 1) : 1;
        tile.style.opacity = String(Math.min(fadeIn, fadeOut));
        tile.style.setProperty("--cc-depth", String(clamp(d * 0.09, 0, 0.55)));
        if (Math.abs(d) < 0.5) tile.setAttribute("data-front", "");
        else tile.removeAttribute("data-front");
      }
      const idx = mod(Math.round(p), total);
      if (idx !== activeRef.current) {
        activeRef.current = idx;
        setActive(idx);
      }
    };

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      if (!drag.current.on) {
        if (target.current !== null) {
          const diff = target.current - pos.current;
          pos.current += diff * Math.min(1, dt * 5);
          if (Math.abs(diff) < 0.002) {
            pos.current = target.current;
            target.current = null;
          }
        } else if (Math.abs(vel.current) > 0.15) {
          pos.current += vel.current * dt;
          vel.current *= Math.pow(0.05, dt);
          if (Math.abs(vel.current) <= 0.15) {
            vel.current = 0;
            target.current = Math.round(pos.current);
          }
        } else if (autoplay.current && !hovered.current && !reduced.current && total > 1) {
          pos.current += SPEED * dt;
        }
      }
      render();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [total]);

  // Keyboard
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") shift(-1);
    if (e.key === "ArrowRight") shift(1);
    if (e.key === "Enter") onSelect(projects[activeRef.current]);
  };

  // Drag
  const onPointerDown = (e: React.PointerEvent) => {
    drag.current = { on: true, x: e.clientX, t: performance.now(), moved: 0 };
    target.current = null;
    vel.current = 0;
    setDragging(true);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d.on) return;
    const now = performance.now();
    const dx = e.clientX - d.x;
    const dt = Math.max(1, now - d.t) / 1000;
    d.moved += Math.abs(dx);
    const perCard = dims.current.w * 0.34;
    pos.current -= dx / perCard;
    vel.current = (-dx / perCard / dt) * MOMENTUM;
    d.x = e.clientX;
    d.t = now;
  };
  const onPointerUp = () => {
    const d = drag.current;
    if (!d.on) return;
    d.on = false;
    setDragging(false);
    if (Math.abs(vel.current) <= 0.15 || d.moved < 4) {
      vel.current = 0;
      target.current = Math.round(pos.current);
    }
  };

  const onTileClick = (i: number) => {
    if (drag.current.moved > 6) return;
    if (i === activeRef.current) onSelect(projects[i]);
    else goTo(i);
  };

  if (!total) return null;
  const current = projects[active] ?? projects[0];
  
  return (
    <div
      className="relative w-full max-w-7xl mx-auto flex flex-col items-center select-none"
      onMouseEnter={() => (hovered.current = true)}
      onMouseLeave={() => (hovered.current = false)}
    >
      <div
        className="relative w-full rounded-[28px] border border-white/10 bg-[#0a0a10] overflow-hidden"
        style={{ height: Math.max(520, cardH * 2 + 40) }}
      >
        <div
          className="circular-carousel"
          data-ready=""
          data-draggable=""
          {...(dragging ? { "data-dragging": "" } : {})}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured projects"
          onKeyDown={onKeyDown}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          style={
            {
              "--cc-fade": "#000000",
              "--cc-radius": `${CORNER}px`,
            } as React.CSSProperties
          }
        >
          <div className="circular-carousel__view">
            <div className="circular-carousel__stage">
              <div className="circular-carousel__camera">
                {projects.map((project, i) => (
                  <div
                    key={project.id}
                    className="circular-carousel__tile"
                    ref={(el) => {
                      tileRefs.current[i] = el;
                    }}
                    role="group"
                    aria-label={`${i + 1} of ${total}: ${project.title}`}
                    onClick={() => onTileClick(i)}
                    style={{
                      width: cardW,
                      height: cardH,
                      left: -cardW / 2,
                      top: -cardH / 2,
                      visibility: "hidden",
                    }}
                  >
                    <div className="circular-carousel__frame">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 320px, 440px"
                        draggable={false}
                        className="circular-carousel__photo"
                        priority={i < 4}
                      />
                      <div className="circular-carousel__shade" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => shift(-1)}
          aria-label="Previous project"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/50 backdrop-blur border border-white/15 text-white hover:bg-[#7c5cff] transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => shift(1)}
          aria-label="Next project"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/50 backdrop-blur border border-white/15 text-white hover:bg-[#7c5cff] transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Caption for the front project */}
      <div className="w-full mt-4 flex items-center justify-between gap-4 rounded-2xl bg-[#14141c] border border-white/10 px-5 py-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="min-w-0"
          >
            <h3 className="text-base sm:text-lg font-bold text-white truncate">
              {current.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#94a3b8] truncate">
              {current.projectType} · {current.technologies.slice(0, 3).join(", ")}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center gap-2 shrink-0">
          {current.websiteUrl && (
            <a
              href={current.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live site for ${current.title}`}
              className="p-2.5 rounded-full bg-[#1a1a25] hover:bg-[#7c5cff] border border-white/10 text-[#cbd5e1] hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          <button
            onClick={() => onSelect(current)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7c5cff] hover:bg-[#6a4be8] text-white text-xs sm:text-sm font-semibold transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Explore</span>
          </button>
        </div>
      </div>

      {/* Pagination + autoplay */}
      <div className="mt-5 flex items-center gap-5">
        <div className="flex items-center gap-2">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => goTo(i)}
              aria-label={`Go to ${p.title}`}
              className="py-2"
            >
              <span
                className={`block h-2 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-7 bg-[#7c5cff] shadow-[0_0_14px_rgba(167,139,250,0.8)]"
                    : "w-2 bg-white/25 hover:bg-white/60"
                }`}
              />
            </button>
          ))}
        </div>
        <button
          onClick={() => setIsAutoPlaying((v) => !v)}
          aria-label={isAutoPlaying ? "Pause auto-rotate" : "Resume auto-rotate"}
          className="flex items-center gap-1.5 text-xs font-medium text-[#a78bfa] hover:text-white transition-colors"
        >
          {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          <span>{isAutoPlaying ? "Auto" : "Paused"}</span>
        </button>
        <span className="text-xs text-[#64748b]">
          <span className="text-white font-bold">{String(active + 1).padStart(2, "0")}</span>
          {" / "}
          {String(total).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
