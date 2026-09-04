"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle,
  Clock,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-[#0c0c0c] border border-[#222222] rounded-3xl shadow-2xl shadow-black overflow-hidden flex flex-col z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#1c1c1c] bg-[#0f0f0f]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0281e0]" />
              <span className="text-xs font-mono text-[#a3a3a3] uppercase tracking-wider">
                {project.category} // Architecture Breakdown
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#737373] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            {project.imageUrl && (
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-[#070b14] border border-white/10 shadow-lg">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-[#a3a3a3] mt-2 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Core Deliverable / Technical Solution Highlight */}
            {project.metricsOrOutcome && (
              <div className="p-4 rounded-xl bg-[#0281e0]/10 border border-[#0281e0]/25 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#38bdf8] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[#38bdf8]">
                    Production Result &amp; Classification
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 mt-1 font-medium">
                    {project.metricsOrOutcome}
                  </p>
                </div>
              </div>
            )}

            {/* Architecture Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#737373] mb-3">
                  Key Engineering Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.highlights.map((point, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-[#070707] border border-[#1a1a1a] flex items-start gap-2.5"
                    >
                      <CheckCircle className="w-4 h-4 text-[#0281e0] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#a3a3a3] leading-relaxed">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies Used */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#737373] mb-2.5">
                Technologies &amp; Libraries
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-[#141414] border border-[#222222] text-[#a3a3a3]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Action Links */}
          <div className="p-4 sm:px-8 border-t border-[#1c1c1c] bg-[#0f0f0f] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#737373]">
              <Clock className="w-3.5 h-3.5" />
              <span>Production Deployed</span>
            </div>

            <div className="flex items-center gap-3">
              {project.websiteUrl && (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0281e0] hover:bg-[#0275cc] text-white text-xs font-semibold shadow-md shadow-[#0281e0]/25 transition-all"
                >
                  <span>Open Live Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
