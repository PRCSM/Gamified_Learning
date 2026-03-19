'use client';

import PageContainer from '@/components/layout/PageContainer';
import LessonCard from '@/components/learning/LessonCard';
import { useAuth } from '@/contexts/AuthContext';
import { sampleLessons } from '@/lib/data/lessons';

export default function LessonsPage() {
  const { userProfile } = useAuth();
  const completedLessons = userProfile?.completedLessons ?? [];

  return (
    <PageContainer title="Lessons" description="Choose a lesson to start learning. Complete lessons to earn XP.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sampleLessons.map((lesson, i) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            completedLessons={completedLessons}
            index={i}
          />
        ))}
      </div>
    </PageContainer>
  );
}
