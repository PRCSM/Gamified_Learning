'use client';

import { motion } from 'framer-motion';
import { LEVEL_THRESHOLDS, getLevelFromPoints } from '@/types';

interface XPProgressBarProps {
  currentXP: number;
}

export default function XPProgressBar({ currentXP }: XPProgressBarProps) {
  const level = getLevelFromPoints(currentXP);
  const currentThreshold = LEVEL_THRESHOLDS[level - 1] ?? 0;
  const nextThreshold = LEVEL_THRESHOLDS[level] ?? currentThreshold;
  const xpInLevel = currentXP - currentThreshold;
  const xpNeeded = nextThreshold - currentThreshold;
  const percent = xpNeeded > 0 ? Math.min(100, Math.round((xpInLevel / xpNeeded) * 100)) : 100;

  return (
    <div className="bg-bg-secondary border border-border-primary rounded-[7px] p-5">
      <div className="flex items-center justify-between mb-3">
        <div>
          <span className="text-sm font-semibold font-haffer">Level {level}</span>
          <span className="text-xs text-text-muted ml-2">→ Level {level + 1}</span>
        </div>
        <span className="text-xs text-text-muted font-haffer-mono">
          {xpInLevel} / {xpNeeded} XP
        </span>
      </div>
      <div className="w-full h-2.5 bg-bg-tertiary rounded-[3px] overflow-hidden">
        <motion.div
          className="h-full bg-accent rounded-[3px]"
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-[11px] text-text-muted">{currentThreshold} XP</span>
        <span className="text-[11px] text-text-muted">{nextThreshold} XP</span>
      </div>
    </div>
  );
}
