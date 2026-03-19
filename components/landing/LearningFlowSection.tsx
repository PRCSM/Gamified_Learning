'use client';

import { motion } from 'framer-motion';
import { BookOpen, HelpCircle, Award } from 'lucide-react';

const steps = [
  { number: '01', icon: BookOpen, title: 'Learn Visually', description: 'Read interactive visual lessons with code previews, diagrams, and step-by-step guides.' },
  { number: '02', icon: HelpCircle, title: 'Take Quizzes', description: 'Test your knowledge with multiple-choice quizzes and get instant score feedback.' },
  { number: '03', icon: Award, title: 'Earn Rewards', description: 'Earn XP, level up, unlock badges, and compete on the global leaderboard.' },
];

export default function LearningFlowSection() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-bg-secondary border-y border-border-primary">
      <div className="max-w-container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-haffer mb-4 tracking-tight">
            How it <span className="text-accent">works</span>
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto">
            Three simple steps to start your gamified learning journey.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-4 relative">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-bg-primary border border-border-primary rounded-[7px] p-6 text-center"
            >
              <div className="mono-number text-4xl text-bg-hover mb-3">{step.number}</div>
              <div className="w-10 h-10 rounded-[7px] bg-bg-tertiary flex items-center justify-center mx-auto mb-4">
                <step.icon size={20} className="text-text-primary" />
              </div>
              <h3 className="text-base font-semibold font-haffer mb-2">{step.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
