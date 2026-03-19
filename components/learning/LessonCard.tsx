'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import ProgressBar from '@/components/dashboard/ProgressBar';
import { Lesson } from '@/types';

interface LessonCardProps {
  lesson: Lesson;
  completedLessons: string[];
  index: number;
}

const difficultyVariant = {
  beginner: 'success' as const,
  intermediate: 'warning' as const,
  advanced: 'purple' as const,
};

export default function LessonCard({ lesson, completedLessons, index }: LessonCardProps) {
  const isCompleted = completedLessons.includes(lesson.id);
  const progress = isCompleted ? 100 : 0;

  return (
    <Link href={`/lessons/${lesson.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -2 }}
        className="bg-bg-secondary border border-border-primary rounded-[7px] p-6 cursor-pointer h-full flex flex-col hover:border-border-hover transition-colors"
      >
        <div className="flex items-center gap-2 mb-3">
          <Badge variant={difficultyVariant[lesson.difficulty]}>{lesson.difficulty}</Badge>
          <span className="flex items-center gap-1 text-xs text-text-muted">
            <Clock size={12} /> {lesson.estimatedTime} min
          </span>
        </div>
        <h3 className="text-base font-semibold font-haffer mb-2">{lesson.title}</h3>
        <div className="mt-auto pt-4">
          <ProgressBar progress={progress} showLabel />
        </div>
        {isCompleted && (
          <div className="mt-2 text-xs text-emerald-600 font-medium">✓ Completed</div>
        )}
      </motion.div>
    </Link>
  );
}
