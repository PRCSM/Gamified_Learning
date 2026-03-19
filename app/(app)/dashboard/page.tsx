'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useState, useEffect } from 'react';
import { Star, BookOpen, Flame, TrendingUp } from 'lucide-react';
import PageContainer from '@/components/layout/PageContainer';
import DashboardStatsCard from '@/components/dashboard/DashboardStatsCard';
import ProgressRing from '@/components/dashboard/ProgressRing';
import RecommendedLessonCard from '@/components/dashboard/RecommendedLessonCard';
import LeaderboardPreview from '@/components/dashboard/LeaderboardPreview';
import XPProgressBar from '@/components/gamification/XPProgressBar';
import { getProgressToNextLevel, LeaderboardEntry } from '@/types';
import { sampleLessons } from '@/lib/data/lessons';
import { getLeaderboard } from '@/lib/firebase/firestore';

export default function DashboardPage() {
  const { userProfile } = useAuth();
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    getLeaderboard(5).then(setLeaderboard).catch(() => {});
  }, []);

  const points = userProfile?.points ?? 0;
  const level = userProfile?.level ?? 1;
  const completed = userProfile?.completedLessons?.length ?? 0;
  const streak = userProfile?.streak ?? 0;
  const progress = getProgressToNextLevel(points);

  const nextLesson = sampleLessons.find(
    (l) => !userProfile?.completedLessons?.includes(l.id)
  ) || sampleLessons[0];

  const stats = [
    { title: 'Total Points', value: points.toLocaleString(), icon: Star, color: '#FC5107' },
    { title: 'Current Level', value: `Level ${level}`, icon: TrendingUp, color: '#3B82F6' },
    { title: 'Lessons Done', value: `${completed}/${sampleLessons.length}`, icon: BookOpen, color: '#8B5CF6' },
    { title: 'Day Streak', value: streak, icon: Flame, color: '#F97316' },
  ];

  return (
    <PageContainer title="Dashboard" description={`Welcome back, ${userProfile?.name || 'Learner'}. Keep up the great work.`}>
      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s, i) => (
          <DashboardStatsCard key={s.title} {...s} index={i} />
        ))}
      </div>

      {/* Main content grid */}
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 flex flex-col gap-4">
          {/* Level Progress */}
          <div className="bg-bg-secondary border border-border-primary rounded-[7px] p-6 flex items-center gap-8">
            <ProgressRing progress={progress} label={`${level}`} sublabel="Level" />
            <div>
              <h3 className="font-semibold font-haffer text-lg mb-1">Level {level} Progress</h3>
              <p className="text-sm text-text-muted mb-3">
                {progress}% to Level {level + 1}
              </p>
              <div className="w-64 h-1.5 bg-bg-tertiary rounded-[3px] overflow-hidden">
                <div
                  className="h-full bg-accent rounded-[3px] transition-all duration-large"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* XP Progress Bar */}
          <XPProgressBar currentXP={points} />

          <RecommendedLessonCard
            title={nextLesson.title}
            difficulty={nextLesson.difficulty}
            estimatedTime={nextLesson.estimatedTime}
            lessonId={nextLesson.id}
          />
        </div>

        <LeaderboardPreview entries={leaderboard} />
      </div>
    </PageContainer>
  );
}
