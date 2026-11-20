"use client";

import React from "react";
import { motion } from "framer-motion";
import { certifications, achievements } from "@/data/certifications";
import { Award, Trophy, Sparkles } from "lucide-react";

export default function Certifications() {
  return (
    <section className="py-28 relative bg-[#0a0a0f] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Certifications */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-start mb-8"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14141c] border border-white/10 text-[#a78bfa] text-xs font-mono uppercase tracking-wider mb-3 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7c5cff]" />
                <span>VERIFIED CREDENTIALS</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white editorial-title">
                Professional Certifications
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.35, delay: index * 0.07 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="bg-[#14141c] hover:bg-[#1b1b27] p-6 rounded-3xl border border-white/10 hover:border-[#7c5cff]/60 shadow-xl shadow-black/50 transition-all duration-300 flex items-start gap-4"
                >
                  <div className="p-3 rounded-2xl bg-[#0d0d14] border border-white/10 text-[#7c5cff] shrink-0 mt-0.5 shadow-sm">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#94a3b8] font-semibold">
                        {cert.category}
                      </span>
                      <span className="text-xs font-mono text-[#a78bfa] bg-[#7c5cff]/15 border border-[#7c5cff]/35 px-2.5 py-0.5 rounded-full font-bold">
                        {cert.badge}
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white tracking-tight mt-1.5 truncate">
                      {cert.name}
                    </h4>
                    <p className="text-xs font-semibold text-[#7c5cff] mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Achievements */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-start mb-8"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14141c] border border-white/10 text-[#a78bfa] text-xs font-mono uppercase tracking-wider mb-3 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7c5cff]" />
                <span>ATHLETIC DISCIPLINE</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white editorial-title">
                Key Achievement
              </h3>
            </motion.div>

            {achievements.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="bg-[#14141c] p-7 rounded-3xl border border-white/10 shadow-xl shadow-black/50 relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0d0d14] border border-white/10 text-[#7c5cff] flex items-center justify-center mb-5 shadow-sm">
                  <Trophy className="w-6 h-6" />
                </div>

                <span className="text-xs font-mono text-[#a78bfa] uppercase tracking-wide block mb-1 font-bold">
                  {item.organization}
                </span>

                <h4 className="text-lg font-bold text-white tracking-tight mb-2.5">
                  {item.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed mb-5">
                  {item.significance}
                </p>

                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-[#94a3b8]">
                  <Sparkles className="w-4 h-4 text-[#7c5cff]" />
                  <span>Discipline, Consistency &amp; Focus</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
