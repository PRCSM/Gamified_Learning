'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Trophy, RotateCcw, Home } from 'lucide-react'

interface Props {
  score: number
  correct: number
  total: number
  xpEarned: number
  onRestart: () => void
}

export function ChallengeResults({ score, correct, total, xpEarned, onRestart }: Props) {
  const pct = Math.round((correct / total) * 100)
  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center gap-6 max-w-md mx-auto text-center">
      <div className="p-5 bg-[#FC5107]/10 rounded-full">
        <Trophy size={48} className="text-[#FC5107]" />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-slate-100 mb-1">{score.toLocaleString()}</h2>
        <p className="text-slate-400 text-sm">Final Score</p>
      </div>
      <div className="grid grid-cols-3 gap-4 w-full">
        {[['Correct', `${correct}/${total}`], ['Accuracy', `${pct}%`], ['XP Earned', `+${xpEarned}`]].map(([label, val]) => (
          <div key={label} className="bg-slate-800 rounded-xl p-3 border border-slate-700">
            <div className="text-xl font-bold text-slate-100">{val}</div>
            <div className="text-xs text-slate-400 mt-1">{label}</div>
          </div>
        ))}
      </div>
      <div className="flex gap-3">
        <button onClick={onRestart} className="flex items-center gap-2 px-5 py-2.5 bg-[#FC5107] rounded-xl text-white text-sm font-medium hover:bg-orange-600">
          <RotateCcw size={16} /> Try Again
        </button>
        <Link href="/dashboard" className="flex items-center gap-2 px-5 py-2.5 bg-slate-700 rounded-xl text-slate-200 text-sm font-medium hover:bg-slate-600">
          <Home size={16} /> Dashboard
        </Link>
      </div>
    </motion.div>
  )
}
