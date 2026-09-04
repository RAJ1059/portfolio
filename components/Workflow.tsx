"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { workflowSteps } from "@/data/workflow";
import {
  CheckCircle2,
  Compass,
  Layout,
  Code2,
  Cpu,
  Rocket,
  Sparkles,
  ArrowRight,
  ArrowDown,
  Zap,
  Play,
  Pause,
  Layers,
} from "lucide-react";

const stepIcons = [Compass, Layout, Code2, Cpu, Rocket, Sparkles];

const phaseLabels = [
  "PHASE 01 // DISCOVERY",
  "PHASE 02 // ARCHITECTURE",
  "PHASE 03 // DEVELOPMENT",
  "PHASE 04 // INTEGRATION",
  "PHASE 05 // DEPLOYMENT",
  "PHASE 06 // OPTIMIZATION",
];

const phaseFlowMeta = [
  { input: "Client Vision & Goals", output: "Technical Blueprint" },
  { input: "Wireframes & Tokens", output: "Interactive Prototypes" },
  { input: "Design Specifications", output: "Production Codebase" },
  { input: "APIs & Databases", output: "Unified System Platform" },
  { input: "Staging Validation", output: "Zero-Downtime Live Release" },
  { input: "Analytics & Telemetry", output: "Peak Speed & Scalability" },
];

export default function Workflow() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoFlow, setIsAutoFlow] = useState(false);

  // Auto-flow step simulation
  useEffect(() => {
    if (!isAutoFlow) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoFlow]);

  return (
    <section id="workflow" className="py-24 sm:py-28 relative bg-[#080c14] border-t border-white/10 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#0281e0]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Pipeline Status */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16"
        >
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101726] border border-white/10 text-[#38bdf8] text-xs font-mono uppercase tracking-wider mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0281e0] animate-ping" />
              <span>DELIVERY PIPELINE // CONTINUOUS FLOW</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white editorial-title">
              How I Build.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#cbd5e1] max-w-xl">
              A 6-stage engineering lifecycle engineered for predictability, clean modular code, and zero-defect deployments.
            </p>
          </div>

          {/* Flow Controls */}
          <div className="flex items-center gap-3 bg-[#101726] p-2 rounded-2xl border border-white/10 shadow-lg shadow-black/40">
            <button
              onClick={() => setIsAutoFlow((prev) => !prev)}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0a0f1d] hover:bg-[#0281e0] text-[#cbd5e1] hover:text-white text-xs font-mono font-medium transition-colors border border-white/10 cursor-pointer"
            >
              {isAutoFlow ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>PAUSE FLOW</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>SIMULATE PIPELINE</span>
                </>
              )}
            </button>

            <span className="text-xs font-mono text-[#64748b] px-2 hidden sm:inline">
              STAGE {String(activeStep + 1).padStart(2, "0")} / 06
            </span>
          </div>
        </motion.div>

        {/* 1. HORIZONTAL PIPELINE STEPPER HIGHWAY */}
        <div className="mb-12 sm:mb-14 overflow-x-auto pb-4 scrollbar-none">
          <div className="min-w-[700px] flex items-center justify-between relative px-6">
            {/* Connecting Track Line */}
            <div className="absolute left-10 right-10 top-5 h-1 bg-[#101726] border-t border-b border-white/10 z-0">
              {/* Active Progress Beam */}
              <motion.div
                className="h-full bg-gradient-to-r from-[#0281e0] via-[#38bdf8] to-[#0281e0] shadow-[0_0_12px_#38bdf8]"
                initial={false}
                animate={{
                  width: `${(activeStep / (workflowSteps.length - 1)) * 100}%`,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>

            {/* Stepper Nodes */}
            {workflowSteps.map((step, idx) => {
              const Icon = stepIcons[idx] || Zap;
              const isActive = idx === activeStep;
              const isCompleted = idx < activeStep;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center group relative z-10 focus:outline-none cursor-pointer"
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1.15 : 1,
                      backgroundColor: isActive ? "#0281e0" : isCompleted ? "#0c1527" : "#0a0f1c",
                      borderColor: isActive ? "#38bdf8" : isCompleted ? "#0281e0" : "rgba(255, 255, 255, 0.15)",
                      boxShadow: isActive
                        ? "0 0 20px rgba(56, 189, 248, 0.8), 0 0 40px rgba(2, 129, 224, 0.4)"
                        : "none",
                    }}
                    transition={{ duration: 0.25 }}
                    className="w-10 h-10 rounded-2xl border-2 flex items-center justify-center text-white transition-all duration-300"
                  >
                    <Icon className={`w-4 h-4 ${isActive ? "text-white" : isCompleted ? "text-[#38bdf8]" : "text-[#64748b] group-hover:text-white"}`} />
                  </motion.div>

                  <span className={`mt-3 font-mono text-xs font-bold transition-colors ${isActive ? "text-[#38bdf8]" : "text-[#64748b] group-hover:text-white"}`}>
                    {step.step}. {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. CONNECTED PROCESS FLOW GRID WITH DIRECTIONAL CONDUITS */}
        <div className="relative">
          {/* Mobile Vertical Pipe Line (Hidden on Desktop) */}
          <div className="md:hidden absolute left-5 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#0281e0] via-[#38bdf8] to-[#0281e0] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {workflowSteps.map((step, index) => {
              const Icon = stepIcons[index] || Zap;
              const isActive = index === activeStep;
              const meta = phaseFlowMeta[index];
              const isLastInRow1 = index === 2;
              const isLastStep = index === 5;

              return (
                <motion.div
                  key={step.step}
                  onClick={() => setActiveStep(index)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  whileHover={{ y: -5 }}
                  className={`rounded-3xl p-6 sm:p-7 relative flex flex-col justify-between border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#0d1527] border-[#0281e0] shadow-[0_15px_40px_rgba(2,129,224,0.25)] ring-1 ring-[#38bdf8]/40"
                      : "bg-[#101726]/90 hover:bg-[#131d2f] border-white/10 hover:border-white/25 shadow-xl shadow-black/40"
                  }`}
                >
                  {/* Top Ambient Flow Beam Indicator */}
                  {isActive && (
                    <div className="absolute -top-[1px] left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent shadow-[0_0_10px_#38bdf8]" />
                  )}

                  <div>
                    {/* Step Stage & Phase Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                            isActive
                              ? "bg-[#0281e0] text-white shadow-[0_0_12px_#38bdf8]"
                              : "bg-[#090e1a] text-[#38bdf8] border border-white/10"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-mono text-2xl font-black text-white">
                          {step.step}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#080d18] border border-white/10 text-[#38bdf8] font-semibold">
                          {phaseLabels[index].split("//")[1]?.trim() || `P${index + 1}`}
                        </span>
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-[#38bdf8] transition-colors flex items-center gap-2">
                      <span>{step.title}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
                      )}
                    </h3>

                    {/* Summary Description */}
                    <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed mb-4">
                      {step.summary}
                    </p>

                    {/* Input/Output Flow Conduit Badge */}
                    <div className="mb-5 p-2.5 rounded-xl bg-[#090e1a]/80 border border-white/5 flex flex-col gap-1 text-[11px] font-mono">
                      <div className="flex items-center justify-between text-[#94a3b8]">
                        <span className="text-[#64748b]">IN:</span>
                        <span className="text-[#e2e8f0] truncate ml-1">{meta.input}</span>
                      </div>
                      <div className="flex items-center justify-between text-[#38bdf8]">
                        <span className="text-[#0281e0]">OUT:</span>
                        <span className="text-[#38bdf8] font-semibold truncate ml-1">{meta.output}</span>
                      </div>
                    </div>
                  </div>

                  {/* Deliverable Checkpoints */}
                  <div className="pt-4 border-t border-white/10 space-y-2">
                    {step.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#e2e8f0]">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            isActive ? "text-[#38bdf8]" : "text-[#0281e0]"
                          }`}
                        />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Directional Flow Link */}
                  <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#64748b]">
                    <span>STATUS: READY</span>
                    {!isLastStep ? (
                      <span className="flex items-center gap-1 text-[#38bdf8] font-semibold">
                        <span>STEP 0{index + 2}</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                        <span>LIVE SYSTEM</span>
                        <CheckCircle2 className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 3. FLOW SUMMARY FOOTER BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-5 sm:p-6 rounded-2xl bg-[#0d1424] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg"
        >
          <div className="flex items-center gap-3 text-sm text-[#cbd5e1]">
            <div className="w-8 h-8 rounded-lg bg-[#0281e0]/20 border border-[#0281e0]/40 flex items-center justify-center text-[#38bdf8] shrink-0">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-white">Full Process Traceability:</span> Every project progresses from business discovery to post-launch optimization with automated checkpoints.
            </div>
          </div>

          <a
            href="#contact"
            className="px-5 py-2 rounded-xl bg-[#0281e0] hover:bg-[#0275cc] text-white text-xs font-semibold whitespace-nowrap transition-all shadow-md shadow-[#0281e0]/30 hover:scale-[1.02] cursor-pointer"
          >
            Start A Project Flow →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

