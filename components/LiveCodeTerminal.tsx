"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { Terminal, CheckCircle2, RotateCcw } from "lucide-react";

interface CodeToken {
  text: string;
  color: string;
}

interface CodeLine {
  tokens: CodeToken[];
}

const CODE_LINES: CodeLine[] = [
  {
    tokens: [
      { text: "// Full-Stack & WordPress Architecture", color: "text-[#525252] italic" },
    ],
  },
  {
    tokens: [],
  },
  {
    tokens: [
      { text: "interface ", color: "text-[#0281e0]" },
      { text: "SoftwareEngineer ", color: "text-white" },
      { text: "{", color: "text-slate-400" },
    ],
  },
  {
    tokens: [
      { text: "  name", color: "text-[#a3a3a3]" },
      { text: ": ", color: "text-slate-500" },
      { text: '"Shivraj Singh"', color: "text-[#93c5fd]" },
      { text: ";", color: "text-slate-500" },
    ],
  },
  {
    tokens: [
      { text: "  role", color: "text-[#a3a3a3]" },
      { text: ": ", color: "text-slate-500" },
      { text: '"Full-Stack & WordPress Dev"', color: "text-[#93c5fd]" },
      { text: ";", color: "text-slate-500" },
    ],
  },
  {
    tokens: [
      { text: "  location", color: "text-[#a3a3a3]" },
      { text: ": ", color: "text-slate-500" },
      { text: '"Indore, India"', color: "text-[#93c5fd]" },
      { text: ";", color: "text-slate-500" },
    ],
  },
  {
    tokens: [
      { text: "  coreStack", color: "text-[#a3a3a3]" },
      { text: ": [", color: "text-slate-400" },
      { text: '"React"', color: "text-[#38bdf8]" },
      { text: ", ", color: "text-slate-500" },
      { text: '"Node.js"', color: "text-[#38bdf8]" },
      { text: ", ", color: "text-slate-500" },
      { text: '"MongoDB"', color: "text-[#38bdf8]" },
      { text: ", ", color: "text-slate-500" },
      { text: '"WordPress"', color: "text-[#38bdf8]" },
      { text: "];", color: "text-slate-400" },
    ],
  },
  {
    tokens: [
      { text: "  delivery", color: "text-[#a3a3a3]" },
      { text: ": ", color: "text-slate-500" },
      { text: "true", color: "text-[#0281e0]" },
      { text: ";", color: "text-slate-500" },
    ],
  },
  {
    tokens: [
      { text: "}", color: "text-slate-400" },
    ],
  },
  {
    tokens: [],
  },
  {
    tokens: [
      { text: "export async function ", color: "text-[#0281e0]" },
      { text: "buildSolution", color: "text-white" },
      { text: "(", color: "text-slate-400" },
      { text: "project", color: "text-[#a3a3a3]" },
      { text: ": ", color: "text-slate-500" },
      { text: "ClientGoal", color: "text-[#38bdf8]" },
      { text: ") {", color: "text-slate-400" },
    ],
  },
  {
    tokens: [
      { text: "  return await ", color: "text-[#0281e0]" },
      { text: "engineerPipeline", color: "text-white" },
      { text: ".", color: "text-slate-500" },
      { text: "deploy", color: "text-[#0281e0]" },
      { text: "({", color: "text-slate-400" },
    ],
  },
  {
    tokens: [
      { text: "    ux", color: "text-[#a3a3a3]" },
      { text: ": ", color: "text-slate-500" },
      { text: '"Responsive & High-Conversion"', color: "text-[#93c5fd]" },
      { text: ",", color: "text-slate-500" },
    ],
  },
  {
    tokens: [
      { text: "    apis", color: "text-[#a3a3a3]" },
      { text: ": ", color: "text-slate-500" },
      { text: '"Secure REST & MERN"', color: "text-[#93c5fd]" },
      { text: ",", color: "text-slate-500" },
    ],
  },
  {
    tokens: [
      { text: "    performance", color: "text-[#a3a3a3]" },
      { text: ": ", color: "text-slate-500" },
      { text: '"Optimized Core Web Vitals"', color: "text-[#93c5fd]" },
    ],
  },
  {
    tokens: [
      { text: "  });", color: "text-slate-400" },
    ],
  },
  {
    tokens: [
      { text: "}", color: "text-slate-400" },
    ],
  },
];

export default function LiveCodeTerminal() {
  const totalCharacters = useMemo(() => {
    return CODE_LINES.reduce((sum, line) => {
      if (line.tokens.length === 0) return sum + 1;
      return sum + line.tokens.reduce((acc, t) => acc + t.text.length, 0) + 1;
    }, 0);
  }, []);

  const [charIndex, setCharIndex] = useState(0);
  const isTyping = charIndex < totalCharacters;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetAndType = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCharIndex(0);
  };

  useEffect(() => {
    if (charIndex < totalCharacters) {
      let delay = 18 + Math.random() * 16;
      if (charIndex % 35 === 0) delay = 90;
      if (charIndex === 40 || charIndex === 160 || charIndex === 260) delay = 180;

      timerRef.current = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, delay);
    } else {
      timerRef.current = setTimeout(() => {
        resetAndType();
      }, 8000);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [charIndex, totalCharacters]);

  let currentAccumulator = 0;
  let cursorRendered = false;

  return (
    <div className="relative rounded-2xl bg-[#080808] border border-[#1e1e1e] shadow-2xl shadow-black/95 overflow-hidden backdrop-blur-xl">
      {/* Terminal Window Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0e0e0e] border-b border-[#1c1c1c] select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#262626] hover:bg-[#ff5f56] transition-colors" />
          <div className="w-3 h-3 rounded-full bg-[#262626] hover:bg-[#ffbd2e] transition-colors" />
          <div className="w-3 h-3 rounded-full bg-[#262626] hover:bg-[#27c93f] transition-colors" />
        </div>

        <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#a3a3a3]">
          <Terminal className="w-3.5 h-3.5 text-[#0281e0]" />
          <span>fullstack-architecture.ts</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={resetAndType}
            title="Replay live typing"
            className="p-1 rounded text-[#737373] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Replay typing animation"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-1.5">
            <span
              className={`inline-block w-2 h-2 rounded-full ${
                isTyping
                  ? "bg-[#0281e0] animate-ping"
                  : "bg-[#0281e0]"
              }`}
            />
            <span className="text-[10px] font-mono text-[#93c5fd]">
              {isTyping ? "writing..." : "ready"}
            </span>
          </div>
        </div>
      </div>

      {/* Code Editor Surface with Line Numbers */}
      <div className="p-4 sm:p-5 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto bg-[#070707] min-h-[385px]">
        <div className="table w-full">
          {CODE_LINES.map((line, lineIdx) => {
            const lineNum = lineIdx + 1;
            const lineTokens = line.tokens;

            const lineStartChar = currentAccumulator;
            const lineTotalChars =
              lineTokens.length === 0
                ? 1
                : lineTokens.reduce((sum, t) => sum + t.text.length, 0) + 1;

            const isCurrentLine =
              charIndex >= lineStartChar && charIndex < lineStartChar + lineTotalChars;

            return (
              <div
                key={lineIdx}
                className={`table-row transition-colors ${
                  isCurrentLine ? "bg-white/[0.03]" : ""
                }`}
              >
                {/* Line number gutter */}
                <div className="table-cell pr-4 text-right select-none text-[11px] text-[#404040] font-mono w-6">
                  {lineNum}
                </div>

                {/* Code content */}
                <div className="table-cell pl-2 whitespace-pre">
                  {lineTokens.length === 0 ? (
                    <span>
                      {isCurrentLine && !cursorRendered && (
                        <span className="inline-block w-1.5 h-3.5 bg-[#0281e0] ml-0.5 animate-pulse align-middle" />
                      )}
                    </span>
                  ) : (
                    lineTokens.map((token, tokenIdx) => {
                      const tokenStart = currentAccumulator;
                      const tokenLength = token.text.length;
                      currentAccumulator += tokenLength;

                      if (charIndex <= tokenStart) {
                        return null;
                      }

                      if (charIndex >= tokenStart + tokenLength) {
                        return (
                          <span key={tokenIdx} className={token.color}>
                            {token.text}
                          </span>
                        );
                      }

                      const visiblePortion = token.text.slice(
                        0,
                        charIndex - tokenStart
                      );
                      cursorRendered = true;

                      return (
                        <span key={tokenIdx} className={token.color}>
                          {visiblePortion}
                          <span className="inline-block w-1.5 h-3.5 bg-[#0281e0] ml-0.5 animate-pulse align-middle" />
                        </span>
                      );
                    })
                  )}

                  {isCurrentLine && !cursorRendered && (
                    <span className="inline-block w-1.5 h-3.5 bg-[#0281e0] ml-0.5 animate-pulse align-middle" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Terminal Footer Status Bar */}
      <div className="px-4 py-2 bg-[#0c0c0c] border-t border-[#1c1c1c] flex items-center justify-between text-[11px] font-mono text-[#737373]">
        <div className="flex items-center gap-2">
          <span className="text-[#0281e0]">git:(main)</span>
          <span>•</span>
          <span className="flex items-center gap-1 text-[#a3a3a3]">
            <CheckCircle2 className="w-3 h-3 text-[#0281e0]" />
            {isTyping ? "compiling AST..." : "All systems ready"}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[#525252]">UTF-8</span>
          <span>TypeScript 5.x</span>
        </div>
      </div>
    </div>
  );
}
