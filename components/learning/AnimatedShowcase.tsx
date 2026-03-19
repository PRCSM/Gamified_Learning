'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface ShowcaseStep {
  title: string;
  description: string;
  code: string;
  highlightLines?: number[];
}

interface AnimatedShowcaseProps {
  title: string;
  steps: ShowcaseStep[];
}

export default function AnimatedShowcase({ title, steps }: AnimatedShowcaseProps) {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);

  const step = steps[current];
  const codeLines = step.code.split('\n');

  const next = () => setCurrent((c) => Math.min(steps.length - 1, c + 1));
  const prev = () => setCurrent((c) => Math.max(0, c - 1));

  // Auto-play
  useState(() => {
    if (!playing) return;
    const timer = setInterval(() => {
      setCurrent((c) => {
        if (c >= steps.length - 1) {
          setPlaying(false);
          return c;
        }
        return c + 1;
      });
    }, 2000);
    return () => clearInterval(timer);
  });

  return (
    <div className="bg-bg-secondary border border-border-primary rounded-[7px] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border-primary">
        <div>
          <h4 className="text-sm font-semibold font-haffer">{title}</h4>
          <p className="text-[11px] text-text-muted mt-0.5">
            Step {current + 1} of {steps.length}
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setPlaying(!playing)}
            className="p-1.5 rounded-[5px] text-text-muted hover:text-text-primary hover:bg-bg-tertiary transition-colors"
          >
            {playing ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <button
            onClick={prev}
            disabled={current === 0}
            className="p-1.5 rounded-[5px] text-text-muted hover:text-text-primary hover:bg-bg-tertiary transition-colors disabled:opacity-30"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={next}
            disabled={current === steps.length - 1}
            className="p-1.5 rounded-[5px] text-text-muted hover:text-text-primary hover:bg-bg-tertiary transition-colors disabled:opacity-30"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex gap-1 px-4 py-2 border-b border-border-primary bg-bg-tertiary/30">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? 'w-6 bg-accent' : i < current ? 'w-1.5 bg-accent/40' : 'w-1.5 bg-border-primary'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border-primary">
        {/* Step info */}
        <div className="p-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-[5px] bg-accent/10 text-accent text-xs font-bold flex items-center justify-center font-haffer-mono">
                  {current + 1}
                </span>
                <h5 className="font-semibold font-haffer text-sm">{step.title}</h5>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Code panel */}
        <div className="bg-[#1e1e2e] p-4 overflow-x-auto min-h-[160px]">
          <div className="flex items-center gap-1.5 mb-3">
            <div className="w-2 h-2 rounded-full bg-red-400/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
            <div className="w-2 h-2 rounded-full bg-green-400/50" />
          </div>
          <AnimatePresence mode="wait">
            <motion.pre
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-sm leading-relaxed"
            >
              {codeLines.map((line, i) => (
                <div
                  key={i}
                  className={`px-2 -mx-2 rounded transition-colors duration-200 ${
                    step.highlightLines?.includes(i + 1)
                      ? 'bg-white/10 border-l-2 border-accent'
                      : 'border-l-2 border-transparent'
                  }`}
                >
                  <span className="inline-block w-6 text-right mr-3 text-white/20 select-none text-xs font-haffer-mono">
                    {i + 1}
                  </span>
                  <span className="text-[#e2e8f0] font-haffer-mono">{line}</span>
                </div>
              ))}
            </motion.pre>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
