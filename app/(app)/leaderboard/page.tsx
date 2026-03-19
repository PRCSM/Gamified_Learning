'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Crown, Medal, Award } from 'lucide-react';
import PageContainer from '@/components/layout/PageContainer';
import Avatar from '@/components/ui/Avatar';
import { getLeaderboard } from '@/lib/firebase/firestore';
import { LeaderboardEntry } from '@/types';
import { useAuth } from '@/contexts/AuthContext';

const rankIcons = [
  <Crown key={0} size={18} className="text-yellow-500" />,
  <Medal key={1} size={18} className="text-gray-400" />,
  <Award key={2} size={18} className="text-amber-600" />,
];

export default function LeaderboardPage() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const { firebaseUser } = useAuth();

  useEffect(() => {
    getLeaderboard(20)
      .then(setEntries)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const top3 = entries.slice(0, 3);
  const rest = entries.slice(3);

  return (
    <PageContainer title="Leaderboard" description="See who's leading the learning race.">
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-8 h-8 border-3 border-accent border-t-transparent rounded-full animate-spin" />
        </div>
      ) : entries.length === 0 ? (
        <div className="text-center py-20 text-text-muted">
          <p>No leaderboard data yet. Complete lessons and quizzes to appear here!</p>
        </div>
      ) : (
        <>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {top3.map((entry, i) => {
              const order = i === 0 ? 'sm:order-2' : i === 1 ? 'sm:order-1' : 'sm:order-3';
              const scale = i === 0 ? 'sm:scale-105' : '';
              return (
                <motion.div
                  key={entry.userId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`bg-bg-secondary border border-border-primary rounded-[7px] p-6 text-center ${order} ${scale} relative overflow-hidden`}
                >
                  {i === 0 && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
                  )}
                  <div className="flex justify-center mb-3">{rankIcons[i]}</div>
                  <Avatar name={entry.name} size="lg" className="mx-auto mb-3" />
                  <h3 className="text-lg font-semibold font-haffer">{entry.name}</h3>
                  <p className="text-sm text-text-muted">Level {entry.level}</p>
                  <div className="mt-3 text-2xl font-bold font-haffer">
                    {entry.points.toLocaleString()} <span className="text-sm font-normal text-text-muted">XP</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {rest.length > 0 && (
            <div className="bg-bg-secondary border border-border-primary rounded-[7px] overflow-hidden">
              {rest.map((entry, i) => (
                <motion.div
                  key={entry.userId}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className={`
                    flex items-center gap-4 px-6 py-4
                    ${i < rest.length - 1 ? 'border-b border-border-primary' : ''}
                    ${entry.userId === firebaseUser?.uid ? 'bg-accent/5' : ''}
                  `}
                >
                  <span className="w-8 text-center mono-number text-sm text-text-muted">{entry.rank}</span>
                  <Avatar name={entry.name} size="sm" />
                  <span className="flex-1 text-sm font-medium truncate font-haffer">{entry.name}</span>
                  <span className="text-xs text-text-muted">Lvl {entry.level}</span>
                  <span className="text-sm font-semibold font-haffer-mono">{entry.points.toLocaleString()} XP</span>
                </motion.div>
              ))}
            </div>
          )}
        </>
      )}
    </PageContainer>
  );
}
