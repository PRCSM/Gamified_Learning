'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, ChevronDown, Eye, EyeOff, Lightbulb } from 'lucide-react';

interface Exercise {
  title: string;
  description: string;
  code: string;
  hint?: string;
  expectedOutput?: string;
}

interface VisualPracticeProps {
  sectionLabel: string;
  exercises: Exercise[];
}

export default function VisualPractice({ sectionLabel, exercises }: VisualPracticeProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [revealedSet, setRevealedSet] = useState<Set<number>>(new Set());
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const toggleReveal = (idx: number) => {
    setRevealedSet((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const copyCode = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1500);
  };

  return (
    <div className="bg-bg-secondary border border-border-primary rounded-[7px] overflow-hidden">
      {/* Header */}
      <div className="px-5 py-3.5 border-b border-border-primary bg-bg-tertiary/30 flex items-center gap-3">
        <span className="w-7 h-7 rounded-[5px] bg-accent/10 text-accent flex items-center justify-center text-sm">
          ✍️
        </span>
        <div>
          <h4 className="text-sm font-semibold font-haffer">Practice — {sectionLabel}</h4>
          <p className="text-[11px] text-text-muted">Try coding first, then check the answer</p>
        </div>
      </div>

      {/* Exercises */}
      <div className="divide-y divide-border-primary">
        {exercises.map((ex, i) => {
          const isOpen = openIdx === i;
          const isRevealed = revealedSet.has(i);

          return (
            <div key={i}>
              <button
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className="w-full text-left px-5 py-3.5 flex items-center gap-3 hover:bg-bg-tertiary/30 transition-colors group"
              >
                <span className="w-6 h-6 rounded-full bg-bg-tertiary border border-border-primary text-[11px] font-bold text-text-muted flex items-center justify-center shrink-0 font-haffer-mono">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{ex.title}</p>
                  <p className="text-[11px] text-text-muted truncate mt-0.5">{ex.description}</p>
                </div>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-text-muted shrink-0"
                >
                  <ChevronDown size={14} />
                </motion.span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5">
                      {/* Expected output preview */}
                      {ex.expectedOutput && (
                        <div className="bg-white rounded-[7px] border border-gray-200 mb-3 overflow-hidden">
                          <div className="px-3 py-1.5 bg-gray-50 border-b border-gray-200 flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-400/50" />
                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/50" />
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400/50" />
                            <span className="text-[9px] text-gray-400 ml-1.5 font-medium">Expected Output</span>
                          </div>
                          <iframe
                            srcDoc={`<!DOCTYPE html><html><head><style>body{font-family:system-ui,sans-serif;padding:8px;margin:0;font-size:14px;}</style></head><body>${ex.expectedOutput}</body></html>`}
                            sandbox=""
                            title="Expected output"
                            className="w-full border-0"
                            style={{ minHeight: '60px', height: '80px' }}
                          />
                        </div>
                      )}

                      {/* Code block — blurred by default */}
                      <div className="relative">
                        <div
                          className="bg-[#1e1e2e] rounded-[7px] p-4 transition-all duration-300"
                          style={{
                            filter: isRevealed ? 'none' : 'blur(6px)',
                            pointerEvents: isRevealed ? 'auto' : 'none',
                            userSelect: isRevealed ? 'auto' : 'none',
                          }}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-1.5">
                              <div className="w-2 h-2 rounded-full bg-red-400/50" />
                              <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
                              <div className="w-2 h-2 rounded-full bg-green-400/50" />
                              <span className="text-white/25 text-[10px] ml-2 font-haffer-mono">answer</span>
                            </div>
                            {isRevealed && (
                              <button
                                onClick={() => copyCode(ex.code, i)}
                                className="text-[10px] text-white/30 hover:text-white/70 transition-colors px-2 py-0.5 rounded border border-white/10 hover:border-white/25 flex items-center gap-1"
                              >
                                {copiedIdx === i ? <><Check size={10} /> Copied</> : <><Copy size={10} /> Copy</>}
                              </button>
                            )}
                          </div>
                          <pre className="text-[#a6e3a1] text-xs leading-relaxed whitespace-pre-wrap overflow-x-auto font-haffer-mono">
                            {ex.code}
                          </pre>
                        </div>

                        {/* Reveal overlay */}
                        {!isRevealed && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <button
                              onClick={() => toggleReveal(i)}
                              className="bg-text-primary text-white px-5 py-2.5 rounded-[7px] text-sm font-semibold hover:bg-text-primary/80 transition-colors flex items-center gap-2 shadow-lg"
                            >
                              <Eye size={14} /> Show Answer
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Hide button */}
                      {isRevealed && (
                        <button
                          onClick={() => toggleReveal(i)}
                          className="mt-2 text-[11px] text-text-muted hover:text-text-secondary transition-colors flex items-center gap-1"
                        >
                          <EyeOff size={10} /> Hide answer
                        </button>
                      )}

                      {/* Hint */}
                      {ex.hint && isRevealed && (
                        <p className="mt-3 text-xs text-text-muted flex items-center gap-1.5">
                          <Lightbulb size={12} className="text-yellow-500 shrink-0" /> {ex.hint}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
