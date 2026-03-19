'use client';

import { motion } from 'framer-motion';
import { Step } from '@/types';

interface StepCardProps {
  step: Step;
  index: number;
}

export default function StepCard({ step, index }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="flex gap-4 items-start"
    >
      <div className="flex-shrink-0 w-9 h-9 rounded-[7px] bg-bg-tertiary flex items-center justify-center mono-number text-sm text-text-primary">
        {step.number}
      </div>
      <div className="flex-1 pb-5 border-b border-border-primary last:border-0">
        <h4 className="text-sm font-semibold font-haffer mb-1">{step.title}</h4>
        <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  );
}
