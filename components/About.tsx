"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";

const coreCapabilities = [
  {
    title: "Full-Stack MERN Architecture",
    description: "End-to-end web apps with React, Node.js, Express, and structured MongoDB data pipelines.",
  },
  {
    title: "WordPress & CMS Customization",
    description: "Bespoke theme development, Elementor architecture, and high-conversion lead funnels.",
  },
  {
    title: "RESTful APIs & Integrations",
    description: "Secure data pipelines, third-party services, payment gateways, and robust schemas.",
  },
  {
    title: "Performance & Responsive Design",
    description: "Sub-second Core Web Vitals, cross-browser compatibility, and mobile accessibility.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative bg-[#080c14] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative Story in Sanjay Menon Editorial Style with High Contrast */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Header with Profile Picture */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 pb-2">
              <div className="relative group shrink-0">
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#0281e0] via-[#38bdf8]/40 to-transparent rounded-2xl blur-md opacity-40 group-hover:opacity-75 transition duration-500" />
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border border-white/15 bg-[#101726] shadow-xl shadow-black/50">
                  <img
                    src="/shivraj-profile.jpg"
                    alt="Shivraj Singh - Full-Stack & WordPress Developer"
                    className="w-full h-full object-cover object-center contrast-110 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="absolute -bottom-2 -right-1.5 bg-[#101726]/90 backdrop-blur-sm border border-[#0281e0]/40 rounded-full px-2.5 py-0.5 text-[10px] font-mono text-[#38bdf8] flex items-center gap-1.5 shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0281e0] animate-pulse" />
                  <span>Shivraj</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101726] border border-white/10 text-[#38bdf8] text-xs font-mono uppercase tracking-wider shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0281e0]" />
                  <span>ABOUT ME</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white editorial-title">
                  A little about myself.
                </h2>
              </div>
            </div>

            <div className="space-y-5 text-base sm:text-lg text-[#cbd5e1] leading-relaxed">
              <p>
                My journey into software engineering began with a passion for turning ideas into working digital realities. I spent years mastering the fundamentals — starting from core Python and algorithmic programming to scalable full-stack JavaScript architectures and modern CMS ecosystems.
              </p>
              <p>
                Today, at <span className="text-white font-bold bg-[#0281e0]/10 px-2 py-0.5 rounded border border-[#0281e0]/30">Embtel Web Solutions</span> and through consulting for international businesses at <span className="text-white font-bold bg-[#0281e0]/10 px-2 py-0.5 rounded border border-[#0281e0]/30">TekPlus</span>, I engineer high-performance web applications and custom WordPress architectures. I enjoy solving problems at the intersection of complex backend logic, responsive design, and business conversion goals.
              </p>
              <p>
                Whether building a multi-step custom portal, optimizing Core Web Vitals to sub-second load times, or structuring clean RESTful API pipelines, I believe in software that simply works — clean, maintainable, and built to scale.
              </p>
            </div>

            {/* Signature Sign-Off */}
            <div className="pt-4 flex items-center gap-3">
              <p className="text-3xl font-serif italic text-[#38bdf8]">
                Shivraj.
              </p>
              <span className="text-xs font-mono text-[#94a3b8]">
                {"// Full-Stack & WordPress Engineer"}
              </span>
            </div>
          </motion.div>

          {/* Right Column: Structured Capabilities Card with Clear High-Contrast Elevation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="bg-[#101726] p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl shadow-black/60 relative overflow-hidden">
              {/* Card top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0281e0] to-transparent" />

              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-[#0281e0]" />
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#cbd5e1] font-bold">
                  Core Engineering Capabilities
                </h3>
              </div>

              <div className="space-y-3.5">
                {coreCapabilities.map((cap) => (
                  <motion.div
                    key={cap.title}
                    whileHover={{ x: 4 }}
                    className="p-4 rounded-2xl bg-[#090e1a] border border-white/10 hover:border-[#0281e0]/50 hover:bg-[#0c1424] transition-all duration-200"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-[#0281e0] shrink-0" />
                      <h4 className="text-sm font-bold text-white tracking-tight">
                        {cap.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#cbd5e1] leading-relaxed pl-6">
                      {cap.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#94a3b8]">
                <span>Status: Active Senior Engineer</span>
                <span className="text-[#38bdf8] font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#0281e0] animate-pulse" />
                  Open to Projects
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
