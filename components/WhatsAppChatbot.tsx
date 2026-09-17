"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";

const quickPrompts = [
  {
    label: "🚀 Discuss a new project",
    message: "Hi Shivraj, I'd like to discuss a new web development project with you.",
  },
  {
    label: "💼 Full-Stack / WordPress inquiry",
    message: "Hi Shivraj, I saw your portfolio and would like to talk about your engineering services.",
  },
  {
    label: "📅 Book a quick call",
    message: "Hi Shivraj, can we schedule a quick discussion about project scope and timelines?",
  },
];

export default function WhatsAppChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const phoneNumber = "919516981528"; // 9516981528 with India country code 91

  const handleSend = (textToSend?: string) => {
    const finalMsg = textToSend || message || "Hi Shivraj, I came across your portfolio and wanted to connect!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMsg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setMessage("");
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* 1. CHATBOT POPUP WINDOW */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="mb-4 w-[320px] sm:w-[360px] rounded-3xl overflow-hidden bg-[#0c1322] border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col z-50"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#128C7E] to-[#25D366] p-4 text-white flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center font-mono font-bold text-sm">
                    SS
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-300 border-2 border-[#128C7E]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm tracking-tight flex items-center gap-1.5">
                    <span>Shivraj Singh</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/20 font-mono">Dev</span>
                  </span>
                  <span className="text-[11px] text-emerald-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-200 animate-pulse" />
                    Typically replies in minutes
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-white/80 hover:text-white hover:bg-black/10 transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 space-y-4 max-h-[380px] overflow-y-auto bg-[#080d18]/95">
              {/* Timestamp */}
              <div className="text-center">
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-[#94a3b8]">
                  WhatsApp Live Assistant
                </span>
              </div>

              {/* Bot Greeting Bubble */}
              <div className="flex flex-col items-start space-y-1">
                <div className="bg-[#131e33] border border-white/10 rounded-2xl rounded-tl-sm p-3 text-xs text-[#e2e8f0] leading-relaxed shadow-sm">
                  <p className="font-semibold text-[#38bdf8] mb-1">👋 Hi there!</p>
                  <p>
                    I&apos;m Shivraj Singh. Looking to build a full-stack MERN app, WordPress corporate portal, or discuss a project? Let&apos;s connect directly on WhatsApp!
                  </p>
                  <div className="mt-2 text-[10px] text-[#64748b] text-right font-mono">
                    +91 9516981528
                  </div>
                </div>
              </div>

              {/* Quick Prompts */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-[#64748b] uppercase tracking-wider block">
                  Quick Topics:
                </span>
                {quickPrompts.map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(prompt.message)}
                    className="w-full text-left p-2.5 rounded-xl bg-[#101726] hover:bg-[#1a263c] border border-white/10 hover:border-[#25D366]/50 text-xs text-[#cbd5e1] hover:text-white transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <span>{prompt.label}</span>
                    <Send className="w-3 h-3 text-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* Input & Direct Send Bar */}
            <div className="p-3 border-t border-white/10 bg-[#0c1322] flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSend();
                }}
                placeholder="Type your message..."
                className="flex-1 bg-[#070b14] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-[#64748b] focus:outline-none focus:border-[#25D366]"
              />
              <button
                onClick={() => handleSend()}
                className="p-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white shadow-md shadow-[#25D366]/30 transition-all cursor-pointer active:scale-95 shrink-0"
                aria-label="Send WhatsApp message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

            {/* One-Click Direct CTA */}
            <div className="px-3 pb-3 bg-[#0c1322]">
              <button
                onClick={() => handleSend()}
                className="w-full py-2.5 px-3 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Open in WhatsApp (+91 9516981528)</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. FLOATING WHATSAPP TRIGGER BUTTON */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative group p-0 bg-transparent transition-all cursor-pointer flex items-center justify-center filter drop-shadow-[0_8px_25px_rgba(37,211,102,0.65)] hover:drop-shadow-[0_10px_35px_rgba(37,211,102,0.9)]"
        aria-label="Chat with Shivraj Singh on WhatsApp"
      >
        {/* Radar Pulse Effect */}
        <span className="absolute inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />

        {/* Original WhatsApp Icon with Speech Bubble Tail & White Phone */}
        <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
          <WhatsAppIcon className="w-full h-full" />
        </div>

        {/* Unread Message Pill Badge */}
        {!isOpen && (
          <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-[#080c14] shadow-md z-20">
            1
          </span>
        )}

        {/* Hover Label Tooltip */}
        <span className="hidden group-hover:flex absolute right-18 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-[#0c1322] border border-white/10 text-white text-xs font-semibold whitespace-nowrap shadow-xl shadow-black/80 items-center gap-1.5 pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span>Chat on WhatsApp (9516981528)</span>
        </span>
      </motion.button>
    </div>
  );
}
