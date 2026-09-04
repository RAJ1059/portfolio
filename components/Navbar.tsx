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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        isScrolled
          ? "bg-[#000000]/85 backdrop-blur-xl border-b border-[#1a1a1a] py-3.5"
          : "bg-transparent py-5"
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
            <span className="w-8 h-8 rounded-lg bg-[#111111] border border-[#242424] font-mono text-xs font-bold text-[#0281e0] flex items-center justify-center group-hover:border-[#0281e0] transition-colors">
              {personalInfo.initials}
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white group-hover:text-[#0281e0] transition-colors">
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
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0f0f0f] border border-[#222222] hover:border-[#0281e0]/60 text-xs font-medium text-white transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-[#0281e0]" />
              <span>Resume</span>
            </a>

            <a
              href={personalInfo.meetingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#0281e0] to-[#2563eb] hover:from-[#38bdf8] hover:to-[#0281e0] text-xs font-semibold text-white transition-all shadow-md shadow-[#0281e0]/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Meeting</span>
            </a>

            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-1 px-4 py-1.5 rounded-lg bg-[#141d2e] hover:bg-[#1a263c] border border-white/10 text-xs font-semibold text-white transition-all cursor-pointer"
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
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#0281e0] text-xs font-semibold text-white shadow-sm"
            >
              <Calendar className="w-3 h-3" />
              <span>Book</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#111111] border border-[#222222] text-[#a3a3a3] hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-[#1a1a1a] px-4 pt-3 pb-6 space-y-2 mt-2">
          {navLinks.map((link) => {
            const targetId = link.href.replace("#", "");
            return (
              <button
                key={link.name}
                onClick={() => scrollTo(targetId)}
                className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-[#a3a3a3] hover:text-white hover:bg-white/5"
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
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0281e0] text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-[#0281e0]/30"
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
              className="inline-flex items-center gap-2 text-xs font-medium text-[#0281e0]"
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
