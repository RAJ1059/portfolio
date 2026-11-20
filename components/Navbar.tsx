"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, FileText, ArrowUpRight, Calendar } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

const navLinks = [
  { name: "Work", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "projects", "about", "experience", "skills", "education", "contact"];
      const scrollPos = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape and lock body scroll while open
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileMenuOpen]);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Identity */}
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
            aria-label="Back to top"
          >
            <span className="w-8 h-8 rounded-lg bg-[#111111] border border-[#242424] font-mono text-xs font-bold text-[#7c5cff] flex items-center justify-center group-hover:border-[#7c5cff] transition-colors">
              {personalInfo.initials}
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white group-hover:text-[#7c5cff] transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[10px] font-mono text-[#737373]">
                Full-Stack &amp; WordPress
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0a0a0a]/90 px-3 py-1.5 rounded-full border border-[#1a1a1a] shadow-inner">
            {navLinks.map((link) => {
              const targetId = link.href.replace("#", "");
              const isActive = activeSection === targetId;
              return (
                <button
                  key={link.name}
                  onClick={() => scrollTo(targetId)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#161616] text-[#ffffff] shadow-sm border border-[#2a2a2a]"
                      : "text-[#a3a3a3] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right CTA Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[#737373] hover:text-white hover:bg-white/5 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[#737373] hover:text-white hover:bg-white/5 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href="/Shivraj_Singh_Resume.pdf"
              download="Shivraj_Singh_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0f0f0f] border border-[#222222] hover:border-[#7c5cff]/60 text-xs font-medium text-white transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-[#7c5cff]" />
              <span>Resume</span>
            </a>

            <a
              href={personalInfo.meetingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#7c5cff] to-[#5b3df5] hover:from-[#a78bfa] hover:to-[#7c5cff] text-xs font-semibold text-white transition-all shadow-md shadow-[#7c5cff]/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Meeting</span>
            </a>

            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-1 px-4 py-1.5 rounded-lg bg-[#1b1b27] hover:bg-[#222233] border border-white/10 text-xs font-semibold text-white transition-all cursor-pointer"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={personalInfo.meetingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#7c5cff] text-xs font-semibold text-white shadow-sm"
            >
              <Calendar className="w-3 h-3" />
              <span>Book</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-[#14141c] border border-white/10 text-[#cbd5e1] hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden max-h-[calc(100vh-4.5rem)] overflow-y-auto px-4 pt-3 pb-6 space-y-1 mt-3 border-t border-white/10"
        >
          {navLinks.map((link) => {
            const targetId = link.href.replace("#", "");
            return (
              <button
                key={link.name}
                onClick={() => scrollTo(targetId)}
                className="w-full text-left px-3 py-3 rounded-lg text-sm font-medium text-[#cbd5e1] hover:text-white hover:bg-white/5"
              >
                {link.name}
              </button>
            );
          })}
          <div className="pt-3 pb-1">
            <a
              href={personalInfo.meetingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#7c5cff] text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-[#7c5cff]/30"
            >
              <Calendar className="w-4 h-4" />
              <span>Book A 1-on-1 Meeting</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="pt-4 border-t border-[#1a1a1a] flex items-center justify-between">
            <a
              href="/Shivraj_Singh_Resume.pdf"
              download
              className="inline-flex items-center gap-2 text-xs font-medium text-[#7c5cff]"
            >
              <FileText className="w-4 h-4" /> Download Resume
            </a>
            <div className="flex items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#737373]">
                <GithubIcon className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#737373]">
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
