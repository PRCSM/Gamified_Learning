'use client';

import { motion } from 'framer-motion';

interface AchievementBadgeProps {
  icon: string;
  title: string;
  unlocked: boolean;
  color: string;
}

export default function AchievementBadge({ icon, title, unlocked, color }: AchievementBadgeProps) {
  return (
    <motion.div
      initial={unlocked ? { scale: 0.8, opacity: 0 } : {}}
      animate={unlocked ? { scale: [0.8, 1.05, 1], opacity: 1 } : {}}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`
        flex flex-col items-center gap-2 p-4 rounded-[7px] text-center
        ${unlocked ? 'bg-bg-secondary border border-border-primary' : 'bg-bg-tertiary/50 opacity-40'}
      `}
    >
      <div className="text-2xl">{icon}</div>
      <span className={`text-[11px] font-medium font-haffer ${unlocked ? 'text-text-primary' : 'text-text-muted'}`}>
        {title}
      </span>
      {!unlocked && <span className="text-[10px] text-text-muted">Locked</span>}
    </motion.div>
  );
}
