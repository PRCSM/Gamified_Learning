// lib/utils/badges.ts
import { Badge, BadgeId } from '@/types';

export const BADGES: Record<BadgeId, Badge> = {
  beginner: {
    id: 'beginner',
    title: 'Beginner',
    description: 'Completed your first quiz',
    icon: '🎯',
    color: '#C8F31D',
  },
  learner: {
    id: 'learner',
    title: 'Learner',
    description: 'Completed 5 lessons',
    icon: '📚',
    color: '#3B82F6',
  },
  achiever: {
    id: 'achiever',
    title: 'Achiever',
    description: 'Earned 100 points',
    icon: '⭐',
    color: '#FF8A4C',
  },
  champion: {
    id: 'champion',
    title: 'Champion',
    description: 'Reached top 3 on the leaderboard',
    icon: '🏆',
    color: '#8B5CF6',
  },
  scholar: {
    id: 'scholar',
    title: 'Scholar',
    description: 'Completed all lessons',
    icon: '🎓',
    color: '#7EE6B8',
  },
  streaker: {
    id: 'streaker',
    title: 'On Fire',
    description: '7-day learning streak',
    icon: '🔥',
    color: '#FF8A4C',
  },
};
