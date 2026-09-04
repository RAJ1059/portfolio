"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  MapPin,
  Briefcase,
  Layers,
  Code2,
  Terminal,
  Database,
  Globe,
} from "lucide-react";
import { personalInfo } from "@/data/personal";
import LiveCodeTerminal from "@/components/LiveCodeTerminal";

const techBadges = [
  { name: "React", icon: Code2, color: "text-[#38bdf8] border-[#0281e0]/30 bg-[#101726]", delay: 0 },
  { name: "Node.js", icon: Terminal, color: "text-white border-white/10 bg-[#101726]", delay: 0.1 },
  { name: "MongoDB", icon: Database, color: "text-[#60a5fa] border-[#0281e0]/30 bg-[#101726]", delay: 0.2 },
  { name: "WordPress", icon: Globe, color: "text-[#cbd5e1] border-white/10 bg-[#101726]", delay: 0.3 },
  { name: "TypeScript", icon: Code2, color: "text-[#38bdf8] border-[#0281e0]/30 bg-[#101726]", delay: 0.4 },
  { name: "Tailwind CSS", icon: Layers, color: "text-[#cbd5e1] border-white/10 bg-[#101726]", delay: 0.5 },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-[#080c14]"
    >
      {/* Developer Coding Background Image - Clear & Vividly Visible */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/code-bg.png"
          alt="Developer Code Screen Background"
          className="w-full h-full object-cover object-center sm:object-right opacity-65 sm:opacity-75 select-none"
        />
        {/* Vignette Overlay for High Contrast & Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080c14]/60 via-[#080c14]/35 to-[#080c14]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080c14]/85 via-[#080c14]/40 to-transparent" />
      </div>

      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] hero-glow-1 rounded-full pointer-events-none blur-3xl opacity-50" />
      <div className="absolute top-1/3 right-10 w-[420px] h-[420px] hero-glow-2 rounded-full pointer-events-none blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Sanjay Menon Editorial Style Headline & Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Friendly Greeting Pill with Clear Visibility */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#101726] border border-white/10 shadow-lg shadow-black/40 mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0281e0] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0281e0]" />
              </span>
              <span className="text-xs font-semibold text-white tracking-wide">
                👋 Hey, I&apos;m Shivraj
              </span>
              <span className="text-xs text-[#64748b]">|</span>
              <span className="text-xs font-medium text-[#38bdf8]">
                Full-Stack &amp; WordPress Dev
              </span>
            </motion.div>

            {/* Giant Editorial Display Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight text-white editorial-title mb-6 lowercase">
              full-stack <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#38bdf8]">
                developer
              </span>
            </h1>

            {/* Core Positioning Narrative */}
            <p className="text-base sm:text-lg text-[#cbd5e1] max-w-2xl leading-relaxed mb-8">
              I turn complex real-world problems into software people actually understand — interfaces that feel obvious, systems that scale, and code that quietly does the work.
            </p>

            {/* Metadata Badges Strip with High-Contrast Boxes */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#cbd5e1] mb-9">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#101726] border border-white/10 shadow-sm">
                <MapPin className="w-4 h-4 text-[#0281e0]" />
                <span>BASED IN: INDORE, INDIA</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#101726] border border-white/10 shadow-sm">
                <Briefcase className="w-4 h-4 text-[#0281e0]" />
                <span>EMBTEL WEB SOLUTIONS</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#101726] border border-[#0281e0]/30 text-[#38bdf8] font-semibold">
                <span>CREATE &gt; CONSUME</span>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo("projects")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-[#0281e0] hover:bg-[#0275cc] text-white font-bold text-sm shadow-xl shadow-[#0281e0]/30 transition-all cursor-pointer"
              >
                <span>Check Out My Work</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo("contact")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-[#101726] hover:bg-[#151e33] text-white font-bold text-sm border border-white/10 hover:border-[#0281e0]/50 transition-all shadow-lg cursor-pointer"
              >
                <span>Get in Touch</span>
                <Sparkles className="w-4 h-4 text-[#38bdf8]" />
              </motion.button>
            </div>

            {/* Impact Metric Counter Row with High Contrast Boxes */}
            <div className="pt-6 border-t border-white/10 w-full grid grid-cols-2 sm:grid-cols-3 gap-4">
              <motion.div
                whileHover={{ y: -2 }}
                className="p-4 rounded-2xl bg-[#101726] border border-white/10 shadow-md"
              >
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">
                  2+
                </span>
                <span className="text-xs text-[#cbd5e1] leading-snug">
                  Years engineering full-stack platforms, APIs &amp; WordPress
                </span>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                className="p-4 rounded-2xl bg-[#101726] border border-white/10 shadow-md"
              >
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">
                  10+
                </span>
                <span className="text-xs text-[#cbd5e1] leading-snug">
                  Production websites delivered across US &amp; global clients
                </span>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-[#101726] border border-white/10 shadow-md"
              >
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">
                  100%
                </span>
                <span className="text-xs text-[#cbd5e1] leading-snug">
                  On-time delivery, clean code &amp; responsive compliance
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Live Written Code Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative w-full"
          >
            {/* Live Typing Code Terminal with Visible Elevation */}
            <LiveCodeTerminal />

            {/* Floating Technology Badges with Framer Motion */}
            <div className="mt-5 grid grid-cols-3 gap-3">
              {techBadges.map((badge) => {
                const IconComponent = badge.icon;
                return (
                  <motion.div
                    key={badge.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + badge.delay }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-2xl border text-xs font-semibold shadow-md transition-all ${badge.color}`}
                  >
                    <IconComponent className="w-4 h-4 shrink-0" />
                    <span className="font-mono tracking-tight truncate">{badge.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
