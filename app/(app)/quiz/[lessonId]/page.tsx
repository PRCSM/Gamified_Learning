'use client';

import { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, RotateCcw, Home } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import PageContainer from '@/components/layout/PageContainer';
import Button from '@/components/ui/Button';
import { sampleQuizzes } from '@/lib/data/quizzes';
import { sampleLessons } from '@/lib/data/lessons';
import { completeQuiz } from '@/lib/firebase/firestore';
import Link from 'next/link';

export default function QuizPage() {
  const params = useParams();
  const { firebaseUser, refreshProfile } = useAuth();
  const lessonId = params.lessonId as string;

  const quiz = useMemo(() => sampleQuizzes.find((q) => q.lessonId === lessonId), [lessonId]);
  const lesson = useMemo(() => sampleLessons.find((l) => l.id === lessonId), [lessonId]);

  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!quiz || !lesson) {
    return (
      <PageContainer>
        <div className="text-center py-20 text-text-muted">Quiz not found.</div>
      </PageContainer>
    );
  }

  const question = quiz.questions[currentQ];
  const total = quiz.questions.length;
  const isCorrect = selected === question.correctAnswer;

  const handleSelect = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === question.correctAnswer) setCorrectCount((c) => c + 1);
  };

  const handleNext = async () => {
    if (currentQ < total - 1) {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setFinished(true);
      setSubmitting(true);
      const finalScore = Math.round((correctCount / total) * 100);
      if (firebaseUser) {
        try {
          await completeQuiz(firebaseUser.uid, quiz.id, finalScore);
          await refreshProfile();
        } catch (e) {
          console.error(e);
        }
      }
      setSubmitting(false);
    }
  };

  const handleRetry = () => {
    setCurrentQ(0);
    setSelected(null);
    setAnswered(false);
    setCorrectCount(0);
    setFinished(false);
  };

  const finalScore = Math.round((correctCount / total) * 100);

  if (finished) {
    return (
      <PageContainer>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto text-center"
        >
          <div className="bg-bg-secondary border border-border-primary rounded-[7px] p-10">
            <div className="text-5xl mb-4">{finalScore >= 75 ? '🎉' : finalScore >= 50 ? '👍' : '💪'}</div>
            <h2 className="text-2xl font-bold font-haffer mb-2">Quiz Complete!</h2>
            <p className="text-text-muted mb-6">{lesson.title}</p>
            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="bg-bg-primary border border-border-primary rounded-[7px] p-4">
                <div className="text-2xl font-bold text-text-primary font-haffer">{finalScore}%</div>
                <div className="text-[11px] text-text-muted">Score</div>
              </div>
              <div className="bg-bg-primary border border-border-primary rounded-[7px] p-4">
                <div className="text-2xl font-bold text-emerald-500 font-haffer">{correctCount}</div>
                <div className="text-[11px] text-text-muted">Correct</div>
              </div>
              <div className="bg-bg-primary border border-border-primary rounded-[7px] p-4">
                <div className="text-2xl font-bold text-accent font-haffer">+{Math.round(50 * (finalScore / 100))}</div>
                <div className="text-[11px] text-text-muted">XP Earned</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button onClick={handleRetry} variant="secondary">
                <RotateCcw size={14} /> Retry
              </Button>
              <Link href="/dashboard">
                <Button>
                  <Home size={14} /> Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-text-muted">Question {currentQ + 1} of {total}</span>
            <span className="font-medium font-haffer">{lesson.title}</span>
          </div>
          <div className="w-full h-1.5 bg-bg-tertiary rounded-[3px] overflow-hidden">
            <motion.div
              className="h-full bg-accent rounded-[3px]"
              animate={{ width: `${((currentQ + 1) / total) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQ}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-xl font-semibold font-haffer mb-6">{question.question}</h2>
            <div className="flex flex-col gap-3">
              {question.options.map((option, idx) => {
                let borderColor = 'border-border-primary';
                let bgColor = 'bg-bg-secondary';
                let textColor = '';

                if (answered) {
                  if (idx === question.correctAnswer) {
                    borderColor = 'border-emerald-400';
                    bgColor = 'bg-emerald-50';
                    textColor = 'text-emerald-700';
                  } else if (idx === selected && !isCorrect) {
                    borderColor = 'border-red-400';
                    bgColor = 'bg-red-50';
                    textColor = 'text-red-700';
                  }
                } else if (idx === selected) {
                  borderColor = 'border-accent';
                  bgColor = 'bg-accent/5';
                }

                return (
                  <motion.button
                    key={idx}
                    onClick={() => handleSelect(idx)}
                    whileHover={!answered ? { scale: 1.01 } : {}}
                    whileTap={!answered ? { scale: 0.99 } : {}}
                    animate={
                      answered && idx === selected && !isCorrect
                        ? { x: [0, -8, 8, -4, 4, 0] }
                        : {}
                    }
                    transition={{ duration: 0.4 }}
                    className={`
                      w-full text-left p-4 rounded-[7px] border-2 transition-all
                      ${borderColor} ${bgColor} ${textColor}
                      ${!answered ? 'hover:border-border-hover cursor-pointer' : 'cursor-default'}
                      min-h-[44px]
                    `}
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-[5px] bg-bg-primary border border-border-primary flex items-center justify-center text-sm font-semibold font-haffer flex-shrink-0">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="text-sm font-medium">{option}</span>
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {answered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 flex justify-end"
          >
            <Button onClick={handleNext}>
              {currentQ < total - 1 ? (
                <>Next <ArrowRight size={14} /></>
              ) : (
                'See Results'
              )}
            </Button>
          </motion.div>
        )}
      </div>
    </PageContainer>
  );
}
