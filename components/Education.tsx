"use client";

import React from "react";
import { motion } from "framer-motion";
import { educationList } from "@/data/education";
import { GraduationCap, Calendar, MapPin, Building } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-28 relative bg-[#0a0a0f] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14141c] border border-white/10 text-[#a78bfa] text-xs font-mono uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7c5cff]" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white editorial-title">
            Education.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#cbd5e1] max-w-xl">
            Strong academic foundations in Information Technology and scientific methodology.
          </p>
        </motion.div>

        {/* Education Timeline Cards with High Contrast Visibility */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationList.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-[#14141c] hover:bg-[#1b1b27] rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-white/10 hover:border-[#7c5cff]/60 shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-[#7c5cff]/15 transition-all duration-300"
            >
              <div>
                {/* Degree icon & Score pill */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-[#0d0d14] border border-white/10 flex items-center justify-center text-[#7c5cff] shadow-sm">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-[#94a3b8] uppercase block font-semibold">
                      {item.scoreLabel}
                    </span>
                    <span className="text-sm font-mono font-bold text-[#a78bfa]">
                      {item.score}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2">
                  {item.degree}
                </h3>

                <p className="text-sm font-semibold text-[#e2e8f0] mb-3 flex items-center gap-1.5">
                  <Building className="w-4 h-4 shrink-0 text-[#7c5cff]" />
                  <span>{item.institution}</span>
                </p>

                <div className="flex items-center gap-3 text-xs font-mono text-[#94a3b8] mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#7c5cff]" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#7c5cff]" />
                    {item.location}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed mb-4">
                  {item.details}
                </p>
              </div>

              {item.boardOrAuthority && (
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#94a3b8]">
                  <span>Board / Authority:</span>
                  <span className="text-white font-bold">{item.boardOrAuthority}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
