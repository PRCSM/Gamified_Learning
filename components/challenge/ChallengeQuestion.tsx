'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Props {
  question: string
  options: string[]
  questionNumber: number
  totalQuestions: number
  timeLimit: number
  onAnswer: (index: number, timeLeft: number) => void
}

export function ChallengeQuestion({ question, options, questionNumber, totalQuestions, timeLimit, onAnswer }: Props) {
  const [timeLeft, setTimeLeft] = useState(timeLimit)
  const [answered, setAnswered] = useState<number | null>(null)

  useEffect(() => {
    setTimeLeft(timeLimit)
    setAnswered(null)
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) { clearInterval(interval); onAnswer(-1, 0); return 0 }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [question])

  function handleAnswer(i: number) {
    if (answered !== null) return
    setAnswered(i)
    setTimeout(() => onAnswer(i, timeLeft), 400)
  }

  const pct = (timeLeft / timeLimit) * 100
  const ringColor = pct > 50 ? '#4ade80' : pct > 25 ? '#facc15' : '#FC5107'

  return (
    <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-400">Question {questionNumber} of {totalQuestions}</span>
        <div className="relative w-14 h-14">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 56 56">
            <circle cx="28" cy="28" r="24" fill="none" stroke="#334155" strokeWidth="4" />
            <circle cx="28" cy="28" r="24" fill="none" stroke={ringColor} strokeWidth="4"
              strokeDasharray={`${2 * Math.PI * 24}`}
              strokeDashoffset={`${2 * Math.PI * 24 * (1 - pct / 100)}`}
              className="transition-all duration-1000"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-slate-200">{timeLeft}</span>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-black">{question}</h2>

      <div className="grid grid-cols-1 gap-3">
        {options.map((opt, i) => (
          <button key={i} onClick={() => handleAnswer(i)}
            className={`text-left px-5 py-4 rounded-xl border-2 text-sm font-medium transition-all ${answered === i ? 'border-[#FC5107] bg-[#FC5107]/10 text-[#FC5107]' : 'border-slate-700 bg-slate-800 text-slate-300 hover:border-slate-500 hover:bg-slate-700'}`}
          >
            <span className="font-mono text-slate-500 mr-3">{String.fromCharCode(65 + i)}.</span>{opt}
          </button>
        ))}
      </div>
    </motion.div>
  )
}
