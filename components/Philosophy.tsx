"use client";

import React from "react";
import { motion } from "framer-motion";
import { philosophyPillars } from "@/data/workflow";
import { UserCheck, Layers, Target, TrendingUp } from "lucide-react";

const iconsMap: Record<string, React.ElementType> = {
  UserCheck,
  Layers,
  Target,
  TrendingUp,
};

export default function Philosophy() {
  return (
    <section className="py-28 relative bg-[#080c14] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101726] border border-white/10 text-[#38bdf8] text-xs font-mono uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0281e0]" />
            <span>ENGINEERING PRINCIPLES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white editorial-title">
            Code with purpose.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#cbd5e1] max-w-xl">
            Four foundational values guiding every architectural decision, line of code, and client delivery.
          </p>
        </motion.div>

        {/* 4 Pillars Grid with High Contrast Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophyPillars.map((pillar, index) => {
            const IconComponent = iconsMap[pillar.iconName] || Layers;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-[#101726] hover:bg-[#141d30] rounded-3xl p-6 sm:p-7 relative flex flex-col justify-between border border-white/10 hover:border-[#0281e0]/60 shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-[#0281e0]/15 transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#090e1a] border border-white/10 flex items-center justify-center text-[#0281e0] mb-5 shadow-sm">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <p className="text-xs font-mono uppercase tracking-wider text-[#38bdf8] mb-1.5 font-bold">
                    {pillar.tagline}
                  </p>
                  <h3 className="text-lg font-bold text-white tracking-tight mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-white/10 text-xs font-mono text-[#94a3b8]">
                  Principle 0{index + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
