"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  FileText,
  CheckCircle2,
  Copy,
  Check,
  MessageSquare,
} from "lucide-react";
import { personalInfo } from "@/data/personal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Please enter your name (at least 2 characters).";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = "Subject must be at least 3 characters.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    }, 1000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-28 relative bg-[#080c14] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Sanjay Menon Iconic Stacked Punchline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101726] border border-white/10 text-[#38bdf8] text-xs font-mono uppercase tracking-wider mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0281e0]" />
            <span>START A CONVERSATION</span>
          </div>

          <div className="space-y-1 select-none">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight editorial-title lowercase">
              let&apos;s
            </h2>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#94a3b8] tracking-tight editorial-title lowercase">
              design.
            </h2>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#cbd5e1] tracking-tight editorial-title lowercase">
              build.
            </h2>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#38bdf8] tracking-tight editorial-title lowercase">
              launch.
            </h2>
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight pt-2">
              incredible work together.
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#0281e0] hover:bg-[#0275cc] text-white font-bold text-xs shadow-lg shadow-[#0281e0]/30 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Send An Email</span>
            </a>
            <a
              href="/Shivraj_Singh_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#101726] hover:bg-[#151e33] text-white font-semibold text-xs border border-white/10 hover:border-[#0281e0]/50 transition-all shadow-md"
            >
              <FileText className="w-4 h-4 text-[#38bdf8]" />
              <span>Download Resume</span>
            </a>
          </div>
        </motion.div>

        {/* Contact Channels & Direct Form Grid with Visible Elevated Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Direct Channels Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Email Card */}
            <div className="bg-[#101726] hover:bg-[#141d30] p-7 rounded-3xl border border-white/10 shadow-xl shadow-black/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#94a3b8] font-semibold">
                  Direct Email
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 text-xs font-mono text-[#38bdf8] hover:text-white transition-colors p-1"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-[#0281e0]" />
                      <span className="text-[#38bdf8] font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-base sm:text-lg font-bold text-white hover:text-[#38bdf8] transition-colors break-all"
              >
                {personalInfo.email}
              </a>
              <p className="text-xs text-[#cbd5e1] mt-2">
                Fastest way to reach me for project inquiries and full-stack contracts.
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-[#101726] hover:bg-[#141d30] p-7 rounded-3xl border border-white/10 shadow-xl shadow-black/50 transition-all duration-300">
              <span className="text-xs font-mono uppercase tracking-wider text-[#94a3b8] block mb-2 font-semibold">
                Direct Line &amp; WhatsApp
              </span>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-base sm:text-lg font-bold text-white hover:text-[#38bdf8] transition-colors"
              >
                {personalInfo.phoneDisplay}
              </a>
              <p className="text-xs text-[#cbd5e1] mt-2">
                Available for discovery calls and instant WhatsApp messaging.
              </p>
            </div>

            {/* Location Card */}
            <div className="bg-[#101726] hover:bg-[#141d30] p-7 rounded-3xl border border-white/10 shadow-xl shadow-black/50 transition-all duration-300">
              <span className="text-xs font-mono uppercase tracking-wider text-[#94a3b8] block mb-2 font-semibold">
                Base Location
              </span>
              <div className="flex items-center gap-2 text-base font-bold text-white">
                <MapPin className="w-5 h-5 text-[#0281e0]" />
                <span>{personalInfo.location}</span>
              </div>
              <p className="text-xs text-[#cbd5e1] mt-2">
                Open to on-site roles across India and remote engagements worldwide.
              </p>
            </div>
          </motion.div>

          {/* Right: Functional Form Styled with Clearly Visible Input Boxes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#101726] rounded-3xl p-7 sm:p-10 border border-white/10 shadow-2xl shadow-black/60">
              <div className="flex items-center gap-2.5 mb-8">
                <div className="p-2.5 rounded-xl bg-[#090e1a] border border-white/10 text-[#0281e0]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-[#94a3b8]">
                    Fill in your project details and I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              </div>

              {status === "success" ? (
                <div className="p-8 rounded-2xl bg-[#0281e0]/10 border border-[#0281e0]/30 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#38bdf8] mx-auto" />
                  <h4 className="text-lg font-bold text-white">
                    Message Dispatched
                  </h4>
                  <p className="text-sm text-[#cbd5e1] leading-relaxed max-w-md mx-auto">
                    Thank you! Your message has been received. Shivraj will review your inquiry and follow up promptly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 px-5 py-2.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono text-[#cbd5e1] mb-2 font-semibold"
                      >
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-4 py-3 rounded-2xl bg-[#090e1a] border text-sm text-white placeholder-[#64748b] focus:outline-none focus:ring-2 transition-all ${
                          errors.name
                            ? "border-red-500 focus:ring-red-500"
                            : "border-white/10 focus:border-[#0281e0] focus:ring-[#0281e0]/30"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 mt-1.5">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono text-[#cbd5e1] mb-2 font-semibold"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-3 rounded-2xl bg-[#090e1a] border text-sm text-white placeholder-[#64748b] focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? "border-red-500 focus:ring-red-500"
                            : "border-white/10 focus:border-[#0281e0] focus:ring-[#0281e0]/30"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1.5">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-mono text-[#cbd5e1] mb-2 font-semibold"
                    >
                      Subject / Project Scope *
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="e.g. WordPress Redesign or Full-Stack Web App"
                      className={`w-full px-4 py-3 rounded-2xl bg-[#090e1a] border text-sm text-white placeholder-[#64748b] focus:outline-none focus:ring-2 transition-all ${
                        errors.subject
                          ? "border-red-500 focus:ring-red-500"
                          : "border-white/10 focus:border-[#0281e0] focus:ring-[#0281e0]/30"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-400 mt-1.5">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono text-[#cbd5e1] mb-2 font-semibold"
                    >
                      Project Details / Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Share an overview of your requirements, timeline, or goals..."
                      className={`w-full px-4 py-3 rounded-2xl bg-[#090e1a] border text-sm text-white placeholder-[#64748b] focus:outline-none focus:ring-2 transition-all resize-none ${
                        errors.message
                          ? "border-red-500 focus:ring-red-500"
                          : "border-white/10 focus:border-[#0281e0] focus:ring-[#0281e0]/30"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1.5">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#0281e0] hover:bg-[#0275cc] text-white font-bold text-xs shadow-lg shadow-[#0281e0]/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Note...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Transmission</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
