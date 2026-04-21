'use client'
import { useState } from 'react'
import PageContainer from '@/components/layout/PageContainer'
import { ChallengeQuestion } from '@/components/challenge/ChallengeQuestion'
import { ChallengeResults } from '@/components/challenge/ChallengeResults'
import { sampleQuizzes } from '@/lib/data/quizzes'
import { Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const TIME_LIMIT = 15
const TOTAL_QUESTIONS = 10

interface Question { question: string; options: string[]; correct: number }

function getRandomQuestions(): Question[] {
  const all: Question[] = sampleQuizzes.flatMap(q =>
    q.questions.map(qq => ({ question: qq.question, options: qq.options, correct: qq.correctAnswer }))
  )
  return all.sort(() => Math.random() - 0.5).slice(0, TOTAL_QUESTIONS)
}

type Phase = 'intro' | 'playing' | 'results'

export default function ChallengePage() {
  const [phase, setPhase] = useState<Phase>('intro')
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQ, setCurrentQ] = useState(0)
  const [score, setScore] = useState(0)
  const [correct, setCorrect] = useState(0)

  function start() {
    setQuestions(getRandomQuestions())
    setCurrentQ(0); setScore(0); setCorrect(0)
    setPhase('playing')
  }

  function handleAnswer(answerIndex: number, timeLeft: number) {
    const q = questions[currentQ]
    if (answerIndex === q.correct) {
      const bonus = Math.round(100 + timeLeft * 10)
      setScore(prev => prev + bonus)
      setCorrect(prev => prev + 1)
    }
    if (currentQ + 1 >= TOTAL_QUESTIONS) setPhase('results')
    else setCurrentQ(prev => prev + 1)
  }

  return (
    <PageContainer>
      <div className="mb-6">
        <h1 className="text-2xl font-bold font-haffer tracking-tight mb-2">Challenge Mode</h1>
        <p className="text-text-muted text-sm">10 questions, 15 seconds each — score bonus for speed</p>
      </div>
      {phase === 'intro' && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-6 max-w-md mx-auto text-center py-12">
          <div className="p-5 bg-[#FC5107]/10 rounded-full"><Zap size={48} className="text-[#FC5107]" /></div>
          <div>
            <h2 className="text-2xl font-bold text-slate-100 mb-2">Ready to challenge yourself?</h2>
            <p className="text-slate-400 text-sm">10 random questions · 15 seconds each · Score bonus for speed</p>
          </div>
          <button onClick={start} className="px-8 py-3 bg-[#FC5107] rounded-xl text-white font-semibold text-lg hover:bg-orange-600 transition-colors">
            Start Challenge
          </button>
        </motion.div>
      )}
      {phase === 'playing' && questions.length > 0 && (
        <ChallengeQuestion
          key={currentQ}
          question={questions[currentQ].question}
          options={questions[currentQ].options}
          questionNumber={currentQ + 1}
          totalQuestions={TOTAL_QUESTIONS}
          timeLimit={TIME_LIMIT}
          onAnswer={handleAnswer}
        />
      )}
      {phase === 'results' && (
        <ChallengeResults score={score} correct={correct} total={TOTAL_QUESTIONS} xpEarned={Math.round(score / 10)} onRestart={start} />
      )}
    </PageContainer>
  )
}
