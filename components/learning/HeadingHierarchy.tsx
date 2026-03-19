'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const HEADINGS = [
  { tag: 'h1', size: 36, use: 'Page title — one per page', weight: 800 },
  { tag: 'h2', size: 28, use: 'Section headings', weight: 700 },
  { tag: 'h3', size: 22, use: 'Subsection headings', weight: 700 },
  { tag: 'h4', size: 18, use: 'Card titles, smaller sections', weight: 600 },
  { tag: 'h5', size: 16, use: 'Fine details, labels', weight: 600 },
  { tag: 'h6', size: 14, use: 'Smallest heading — rare use', weight: 600 },
];

export default function HeadingHierarchy() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="bg-bg-secondary border border-border-primary rounded-[7px] overflow-hidden">
      <div className="px-4 py-3 border-b border-border-primary">
        <h4 className="text-sm font-semibold font-haffer">Heading Hierarchy</h4>
        <p className="text-[11px] text-text-muted mt-0.5">Click any heading to see its typical use case</p>
      </div>

      <div className="p-5 flex flex-col gap-3">
        {HEADINGS.map((h, i) => (
          <motion.button
            key={h.tag}
            onClick={() => setActive(active === i ? null : i)}
            whileHover={{ x: 4 }}
            className={`text-left w-full flex items-center gap-4 p-3 rounded-[7px] border transition-all cursor-pointer ${
              active === i
                ? 'border-accent bg-accent/5'
                : 'border-border-primary hover:border-border-hover bg-bg-primary/50'
            }`}
          >
            {/* Tag badge */}
            <span className="w-12 shrink-0 text-center font-haffer-mono text-xs font-bold text-accent">
              &lt;{h.tag}&gt;
            </span>

            {/* Scale bar */}
            <div className="flex-1">
              <motion.div
                className="h-5 bg-accent/15 rounded-[3px] flex items-center px-2"
                animate={{ width: `${(h.size / 36) * 100}%` }}
                transition={{ duration: 0.3 }}
              >
                <span
                  className="text-text-primary truncate font-haffer"
                  style={{ fontSize: Math.max(12, h.size * 0.5), fontWeight: h.weight }}
                >
                  {h.tag === 'h1' ? 'Main Title' : h.tag === 'h2' ? 'Section' : h.tag === 'h3' ? 'Subsection' : 'Heading'}
                </span>
              </motion.div>

              {/* Use case (shown when active) */}
              {active === i && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[11px] text-text-muted mt-1.5 ml-1"
                >
                  <span className="font-medium text-text-primary">{h.size}px</span> — {h.use}
                </motion.p>
              )}
            </div>

            {/* Size label */}
            <span className="text-xs text-text-muted font-haffer-mono shrink-0">{h.size}px</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
