'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface DashboardStatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color: string;
  index: number;
}

export default function DashboardStatsCard({ title, value, icon: Icon, color, index }: DashboardStatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="bg-bg-secondary border border-border-primary rounded-[7px] p-5"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-text-muted font-medium">{title}</span>
        <div
          className="w-9 h-9 rounded-[7px] flex items-center justify-center"
          style={{ backgroundColor: `${color}18` }}
        >
          <Icon size={18} style={{ color }} />
        </div>
      </div>
      <div className="text-2xl font-bold font-haffer">{value}</div>
    </motion.div>
  );
}
