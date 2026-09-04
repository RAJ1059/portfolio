"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import {
  Code,
  Server,
  Database,
  Globe,
  Wrench,
  Users,
  Check,
} from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  "Frontend Engineering": Code,
  "Backend & APIs": Server,
  "Database Management": Database,
  "CMS & E-Commerce": Globe,
  "Tools & Infrastructure": Wrench,
  "Professional Soft Skills": Users,
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative bg-[#080c14] border-t border-white/10">
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
            <span>WHAT I BUILD WITH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white editorial-title">
            Technologies &amp; Toolkit.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#cbd5e1] max-w-xl">
            A production-proven technology stack honed through client deployments, custom theme builds, and full-stack MERN applications.
          </p>
        </motion.div>

        {/* Skills Grid with High Contrast Cards & Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const IconComponent = categoryIcons[category.title] || Code;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="bg-[#101726] hover:bg-[#141d30] rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-white/10 hover:border-[#0281e0]/60 shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-[#0281e0]/15 transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="p-3 rounded-2xl bg-[#090e1a] border border-white/10 text-[#0281e0] shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#cbd5e1] mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05 }}
                        className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all duration-200 ${
                          skill.highlight
                            ? "bg-[#090e1a] border-white/15 text-white shadow-sm hover:border-[#0281e0]"
                            : "bg-[#080c16] border-white/5 text-[#cbd5e1] hover:border-white/20 hover:text-white"
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0281e0] shrink-0" />
                        <span>{skill.name}</span>
                        {skill.levelBadge && (
                          <span className="text-[10px] font-mono text-[#94a3b8] ml-1 group-hover:text-[#38bdf8]">
                            ({skill.levelBadge})
                          </span>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Footer status indicator */}
                <div className="pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#94a3b8]">
                  <span>{category.skills.length} proficiencies</span>
                  <span className="text-[#38bdf8] font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-[#0281e0]" /> Verified Experience
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
