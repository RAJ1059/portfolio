"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { Building2, MapPin, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative bg-[#080c14] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Sanjay Menon "EXPERIENCE / The journey so far" */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101726] border border-white/10 text-[#38bdf8] text-xs font-mono uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0281e0]" />
            <span>EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white editorial-title">
            The journey so far.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#cbd5e1] max-w-xl">
            From digital consulting to US agency development — two high-impact roles delivering scalable web applications and WordPress platforms.
          </p>
        </motion.div>

        {/* Experience Cards Stack with High Contrast and Rich Hover Motion */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.005 }}
              className="bg-[#101726] hover:bg-[#141d30] rounded-3xl p-6 sm:p-9 border border-white/10 hover:border-[#0281e0]/60 shadow-2xl shadow-black/50 hover:shadow-[#0281e0]/15 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0281e0] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Period, Role & Company Info */}
                <div className="lg:col-span-4 space-y-4">
                  <span className="inline-block px-3.5 py-1 rounded-full bg-[#0a0f1c] border border-white/10 text-xs font-mono text-[#38bdf8] font-bold">
                    {exp.period}
                  </span>

                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>

                  <div className="space-y-1.5 text-sm text-[#cbd5e1]">
                    <div className="flex items-center gap-2 font-semibold text-white">
                      <Building2 className="w-4 h-4 text-[#0281e0]" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#94a3b8]">
                      <MapPin className="w-3.5 h-3.5 text-[#0281e0]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {exp.companyUrl && (
                    <div className="pt-2">
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#090e1a] border border-white/10 hover:border-[#0281e0] text-xs font-semibold text-[#38bdf8] hover:text-white transition-all shadow-sm"
                      >
                        <span>Visit Company Site</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Right Column: Achievements & Responsibilities */}
                <div className="lg:col-span-8 space-y-4">
                  <p className="text-sm sm:text-base text-white leading-relaxed font-medium bg-[#0a0f1c] p-4 rounded-2xl border border-white/5">
                    {exp.description}
                  </p>

                  <ul className="space-y-3">
                    {exp.achievements.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#0281e0] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  <div className="pt-4 flex flex-wrap gap-2 border-t border-white/10">
                    {exp.technologies.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-3 py-1 rounded-lg bg-[#090e1a] text-[#cbd5e1] border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
