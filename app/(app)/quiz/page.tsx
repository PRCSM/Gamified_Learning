'use client';

import PageContainer from '@/components/layout/PageContainer';
import LessonCard from '@/components/learning/LessonCard';
import { useAuth } from '@/contexts/AuthContext';
import { sampleLessons } from '@/lib/data/lessons';

export default function QuizListPage() {
  const { userProfile } = useAuth();

  return (
    <PageContainer title="Quizzes" description="Select a lesson to take its quiz. Earn up to 50 XP per quiz.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sampleLessons.map((lesson, i) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            completedLessons={userProfile?.completedLessons ?? []}
            index={i}
          />
        ))}
      </div>
    </PageContainer>
  );
}
