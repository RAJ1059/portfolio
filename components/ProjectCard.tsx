"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({
  project,
  index,
  onSelect,
}: ProjectCardProps) {
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="bg-[#14141c] hover:bg-[#1b1b27] rounded-3xl p-6 sm:p-8 flex flex-col justify-between group border border-white/10 hover:border-[#7c5cff]/60 shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-[#7c5cff]/15 transition-all duration-300 relative overflow-hidden"
    >
      {/* Subtle top card glow line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#7c5cff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div>
        {/* Top Header: Step Number & Category Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="font-mono text-3xl font-black text-[#64748b] group-hover:text-[#a78bfa] transition-colors">
            {formattedIndex}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#0e0e15] border border-white/10 text-[#cbd5e1] font-medium">
              {project.category}
            </span>
            {project.metricsOrOutcome && (
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#7c5cff]/15 border border-[#7c5cff]/35 text-[#a78bfa] font-semibold">
                {project.metricsOrOutcome}
              </span>
            )}
          </div>
        </div>

        {/* Project Image Banner */}
        {project.imageUrl && (
          <div className="relative w-full aspect-[16/9.5] rounded-2xl overflow-hidden mb-5 bg-[#0a0a0f] border border-white/10 group-hover:border-[#7c5cff]/40 transition-colors">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14141c] via-transparent to-transparent opacity-60" />
          </div>
        )}

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#a78bfa] transition-colors mb-3">
          {project.title}
        </h3>

        {/* Short Summary */}
        <p className="text-sm text-[#cbd5e1] leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Key Highlight Preview */}
        {project.highlights && project.highlights[0] && (
          <div className="mb-6 p-3 rounded-xl bg-[#0d0d14] border border-white/5 flex items-start gap-2 text-xs text-[#94a3b8]">
            <CheckCircle2 className="w-4 h-4 text-[#7c5cff] shrink-0 mt-0.5" />
            <span className="leading-snug">{project.highlights[0]}</span>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2.5 py-1 rounded-lg bg-[#0d0d14] text-[#cbd5e1] border border-white/10 group-hover:border-[#7c5cff]/25 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-5 border-t border-white/10 flex items-center justify-between gap-3">
        <button
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#cbd5e1] hover:text-white transition-colors cursor-pointer px-3 py-2 rounded-xl hover:bg-white/5"
        >
          <Layers className="w-4 h-4 text-[#7c5cff]" />
          <span>Case Details</span>
        </button>

        {project.websiteUrl && (
          <a
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#7c5cff] hover:bg-[#6a4be8] text-white font-semibold text-xs transition-all shadow-md shadow-[#7c5cff]/30 hover:scale-[1.02] active:scale-[0.98] group/btn"
          >
            <span>Live Site</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
