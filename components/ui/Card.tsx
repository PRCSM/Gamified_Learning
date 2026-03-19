'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  hoverable?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Card({
  children,
  hoverable = false,
  className = '',
  onClick,
}: CardProps) {
  if (hoverable) {
    return (
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
        className={`bg-bg-secondary border border-border-primary rounded-[7px] p-6 hover:border-border-hover cursor-pointer transition-colors ${className}`}
        onClick={onClick}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div
      className={`bg-bg-secondary border border-border-primary rounded-[7px] p-6 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
