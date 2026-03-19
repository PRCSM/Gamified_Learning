'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import Badge from '@/components/ui/Badge';

interface RecommendedLessonCardProps {
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: number;
  lessonId: string;
}

const difficultyVariant = {
  beginner: 'success' as const,
  intermediate: 'warning' as const,
  advanced: 'purple' as const,
};

export default function RecommendedLessonCard({ title, difficulty, estimatedTime, lessonId }: RecommendedLessonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="bg-bg-secondary border border-border-primary rounded-[7px] p-6"
    >
      <div className="text-xs font-medium text-text-muted mb-1">Recommended Next</div>
      <h3 className="text-lg font-semibold font-haffer mb-3">{title}</h3>
      <div className="flex items-center gap-3 mb-4">
        <Badge variant={difficultyVariant[difficulty]}>{difficulty}</Badge>
        <span className="flex items-center gap-1 text-xs text-text-muted">
          <Clock size={12} /> {estimatedTime} min
        </span>
      </div>
      <Link
        href={`/lessons/${lessonId}`}
        className="inline-flex items-center gap-2 text-sm font-medium text-text-primary hover:text-accent transition-colors font-haffer"
      >
        Start Lesson <ArrowRight size={14} />
      </Link>
    </motion.div>
  );
}
