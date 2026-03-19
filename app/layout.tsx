import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '@/contexts/AuthContext';

export const metadata: Metadata = {
  title: 'LearnQuest — Gamified Learning Platform',
  description:
    'Master web development through gamified visual lessons, quizzes, and real-time leaderboards. Earn points, unlock badges, and level up your skills.',
  keywords: ['learning', 'gamification', 'web development', 'quiz', 'education'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-haffer antialiased bg-bg-primary text-text-primary">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
