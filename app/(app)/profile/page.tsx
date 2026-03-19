'use client';

import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import PageContainer from '@/components/layout/PageContainer';
import Avatar from '@/components/ui/Avatar';
import ProgressRing from '@/components/dashboard/ProgressRing';
import AchievementBadge from '@/components/gamification/AchievementBadge';
import StreakIndicator from '@/components/gamification/StreakIndicator';
import { getProgressToNextLevel } from '@/types';
import { BADGES } from '@/lib/utils/badges';
import { sampleLessons } from '@/lib/data/lessons';

export default function ProfilePage() {
  const { userProfile } = useAuth();

  const points = userProfile?.points ?? 0;
  const level = userProfile?.level ?? 1;
  const progress = getProgressToNextLevel(points);
  const completed = userProfile?.completedLessons?.length ?? 0;
  const streak = userProfile?.streak ?? 0;
  const userBadges = userProfile?.badges ?? [];

  const allBadgeIds = Object.keys(BADGES) as (keyof typeof BADGES)[];

  return (
    <PageContainer title="Profile">
      <div className="max-w-3xl mx-auto">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-bg-secondary border border-border-primary rounded-[7px] p-8 mb-4"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Avatar name={userProfile?.name || 'User'} size="lg" />
            <div className="text-center sm:text-left flex-1">
              <h2 className="text-2xl font-bold font-haffer">{userProfile?.name || 'User'}</h2>
              <p className="text-text-muted text-sm">{userProfile?.email}</p>
              <div className="mt-2">
                <StreakIndicator days={streak} />
              </div>
            </div>
            <ProgressRing progress={progress} size={100} label={`${level}`} sublabel="Level" />
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4"
        >
          {[
            { label: 'Total Points', value: points.toLocaleString(), color: '#FC5107' },
            { label: 'Current Level', value: level, color: '#3B82F6' },
            { label: 'Lessons Done', value: `${completed}/${sampleLessons.length}`, color: '#8B5CF6' },
            { label: 'Badges Earned', value: userBadges.length, color: '#F97316' },
          ].map((stat) => (
            <div key={stat.label} className="bg-bg-secondary border border-border-primary rounded-[7px] p-4 text-center">
              <div className="text-xl font-bold font-haffer" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-[11px] text-text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-bg-secondary border border-border-primary rounded-[7px] p-6"
        >
          <h3 className="text-base font-semibold font-haffer mb-4">Achievements</h3>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {allBadgeIds.map((badgeId) => {
              const badge = BADGES[badgeId];
              const unlocked = userBadges.includes(badgeId);
              return (
                <AchievementBadge
                  key={badgeId}
                  icon={badge.icon}
                  title={badge.title}
                  unlocked={unlocked}
                  color={badge.color}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </PageContainer>
  );
}
