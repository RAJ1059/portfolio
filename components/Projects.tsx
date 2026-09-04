"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import Project3DScroller from "@/components/Project3DScroller";
import { Sparkles, LayoutGrid } from "lucide-react";

const categories = [
  { id: "all", label: "All Work" },
  { id: "Full-Stack", label: "Full-Stack & MERN" },
  { id: "WordPress", label: "WordPress & CMS" },
  { id: "Frontend", label: "Healthcare & Front-End" },
  { id: "Software", label: "Software & Python" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<"3d" | "grid">("3d");

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "all") return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-24 sm:py-28 relative bg-[#080c14] border-t border-white/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#0281e0]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Sanjay Menon "SELECTED WORK" Aesthetic with High Contrast */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14"
        >
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101726] border border-white/10 text-[#38bdf8] text-xs font-mono uppercase tracking-wider mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0281e0]" />
              <span>SELECTED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white editorial-title">
              Featured Engineering
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#cbd5e1] max-w-xl">
              Live interactive showcases and production systems I&apos;ve built with modern full-stack architectures.
            </p>
          </div>

          {/* Controls: Category Filter + 3D/Grid Switcher */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {/* View Mode Switcher */}
            <div className="flex items-center gap-1 bg-[#101726] p-1.5 rounded-2xl border border-white/10 shadow-lg shadow-black/40">
              <button
                onClick={() => setViewMode("3d")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  viewMode === "3d"
                    ? "bg-[#0281e0] text-white shadow-md shadow-[#0281e0]/30"
                    : "text-[#94a3b8] hover:text-white hover:bg-white/5"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>3D Scroller</span>
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  viewMode === "grid"
                    ? "bg-[#0281e0] text-white shadow-md shadow-[#0281e0]/30"
                    : "text-[#94a3b8] hover:text-white hover:bg-white/5"
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid</span>
              </button>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 bg-[#101726] p-1.5 rounded-2xl border border-white/10 shadow-lg shadow-black/40">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    activeCategory === cat.id
                      ? "bg-[#0281e0] text-white shadow-md shadow-[#0281e0]/30"
                      : "text-[#94a3b8] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Dynamic Display: 3D Coverflow or Grid */}
        {viewMode === "3d" ? (
          <Project3DScroller
            projects={filteredProjects}
            onSelect={(p) => setSelectedProject(p)}
          />
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={idx}
                  onSelect={(p) => setSelectedProject(p)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Interactive Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
