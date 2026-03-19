'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Avatar from '@/components/ui/Avatar';
import { LeaderboardEntry } from '@/types';

interface LeaderboardPreviewProps {
  entries: LeaderboardEntry[];
}

export default function LeaderboardPreview({ entries }: LeaderboardPreviewProps) {
  const top5 = entries.slice(0, 5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.35 }}
      className="bg-bg-secondary border border-border-primary rounded-[7px] p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold font-haffer">Leaderboard</h3>
        <Link href="/leaderboard" className="text-xs text-text-muted hover:text-text-primary transition-colors">
          View All →
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        {top5.map((entry, i) => (
          <div key={entry.userId} className="flex items-center gap-3">
            <span className="mono-number text-sm w-5 text-text-muted">{i + 1}</span>
            <Avatar name={entry.name} size="sm" />
            <span className="text-sm font-medium flex-1 truncate font-haffer">{entry.name}</span>
            <span className="text-xs text-text-muted font-haffer-mono">{entry.points} XP</span>
          </div>
        ))}
        {top5.length === 0 && (
          <p className="text-sm text-text-muted text-center py-4">No data yet</p>
        )}
      </div>
    </motion.div>
  );
}
