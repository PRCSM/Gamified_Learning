'use client';

import { motion } from 'framer-motion';
import { Gamepad2, Eye, Trophy, Zap, Target, BarChart3 } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  { icon: Gamepad2, title: 'Gamified Learning', description: 'Earn points, unlock badges, and level up as you master web development concepts.' },
  { icon: Eye, title: 'Visual Lessons', description: 'Learn through interactive diagrams, code previews, and step-by-step visual explanations.' },
  { icon: Trophy, title: 'Live Leaderboard', description: 'Compete with peers and climb the rankings. See where you stand in real-time.' },
  { icon: Zap, title: 'Instant Feedback', description: 'Get immediate results on quizzes with visual correct/incorrect indicators.' },
  { icon: Target, title: 'Achievement System', description: 'Unlock badges for milestones — first quiz, streak maintenance, and more.' },
  { icon: BarChart3, title: 'Progress Tracking', description: 'Visual dashboard with progress rings, XP bars, and lesson completion metrics.' },
];

export default function FeatureSection() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-haffer mb-4 tracking-tight">
            Everything you need to<br /><span className="text-accent">level up</span>
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto">
            A complete gamified ecosystem for learning web development.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
