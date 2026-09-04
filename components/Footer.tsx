"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUp, Calendar, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { personalInfo } from "@/data/personal";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#060910] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Footer Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-10 border-b border-white/10">
          {/* Brand & Identity */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="w-8 h-8 rounded-xl bg-[#101726] border border-white/15 font-mono text-xs font-bold text-[#38bdf8] flex items-center justify-center shadow-sm">
                {personalInfo.initials}
              </span>
              <span className="text-base font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-[#94a3b8] font-mono">
              Full-Stack &amp; WordPress Developer // Indore, India
            </p>
          </div>

          {/* Book Meeting CTA & Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* Direct Book Meeting Link */}
            <motion.a
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={personalInfo.meetingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#0281e0] via-[#1d6fe6] to-[#38bdf8] hover:from-[#38bdf8] hover:to-[#0281e0] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#0281e0]/30 transition-all cursor-pointer mr-1"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Meeting</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.a>

            <motion.a
              whileHover={{ y: -3, scale: 1.05 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-[#101726] border border-white/10 text-[#cbd5e1] hover:text-white hover:border-[#0281e0]/60 hover:shadow-lg hover:shadow-[#0281e0]/20 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.05 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-[#101726] border border-white/10 text-[#cbd5e1] hover:text-white hover:border-[#0281e0]/60 hover:shadow-lg hover:shadow-[#0281e0]/20 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.05 }}
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-2xl bg-[#101726] border border-white/10 text-[#cbd5e1] hover:text-white hover:border-[#0281e0]/60 hover:shadow-lg hover:shadow-[#0281e0]/20 transition-all"
              aria-label="Email Shivraj Singh"
            >
              <Mail className="w-4 h-4" />
            </motion.a>

            <motion.button
              whileHover={{ y: -3, scale: 1.05 }}
              onClick={scrollToTop}
              className="p-3 rounded-2xl bg-[#0281e0] hover:bg-[#0275cc] text-white shadow-md shadow-[#0281e0]/30 transition-all ml-1 cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Balanced Architectural Watermark (Sanjay Menon Inspired) */}
        <div className="pt-10 pb-6 select-none text-center sm:text-left">
          <p className="text-[10vw] sm:text-[8vw] font-black uppercase leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/20 via-white/10 to-transparent">
            SHIVRAJ SINGH
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#94a3b8] gap-3">
          <span>&copy; 2026 {personalInfo.name}. All rights reserved.</span>
          <span className="flex items-center gap-1.5 text-[#38bdf8]">
            <span className="w-2 h-2 rounded-full bg-[#0281e0] animate-pulse" />
            Available for remote and full-time opportunities.
          </span>
        </div>
      </div>
    </footer>
  );
}
