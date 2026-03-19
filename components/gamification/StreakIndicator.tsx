'use client';

import { Flame } from 'lucide-react';

interface StreakIndicatorProps {
  days: number;
}

export default function StreakIndicator({ days }: StreakIndicatorProps) {
  return (
    <div className="flex items-center gap-2">
      <div className={`p-1.5 rounded-[5px] ${days > 0 ? 'bg-orange-50 text-orange-500' : 'bg-bg-tertiary text-text-muted'}`}>
        <Flame size={16} />
      </div>
      <div>
        <span className="text-sm font-semibold font-haffer">{days}</span>
        <span className="text-xs text-text-muted ml-1">day streak</span>
      </div>
    </div>
  );
}
