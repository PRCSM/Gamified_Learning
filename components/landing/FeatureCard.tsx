'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -2 }}
      className="bg-bg-secondary border border-border-primary rounded-[7px] p-6 hover:border-border-hover transition-colors cursor-pointer"
    >
      <div className="w-10 h-10 rounded-[7px] bg-bg-tertiary flex items-center justify-center mb-4">
        <Icon size={20} className="text-text-primary" />
      </div>
      <h3 className="text-base font-semibold font-haffer mb-2">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
    </motion.div>
  );
}
