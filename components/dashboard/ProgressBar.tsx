'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
  color?: string;
  className?: string;
  showLabel?: boolean;
}

export default function ProgressBar({
  progress,
  color = '#FC5107',
  className = '',
  showLabel = false,
}: ProgressBarProps) {
  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between text-xs text-text-muted mb-1">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
      )}
      <div className="w-full h-1.5 bg-bg-tertiary rounded-[3px] overflow-hidden">
        <motion.div
          className="h-full rounded-[3px]"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
