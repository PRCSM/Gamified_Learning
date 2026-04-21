'use client'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  step: number
  explanation: string
}

export function StepExplainer({ step, explanation }: Props) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2 }}
        className="p-4 bg-slate-800/60 border border-slate-700 rounded-xl text-sm text-slate-300"
      >
        <span className="text-xs font-mono text-[#FC5107] mr-2">Step {step + 1}</span>
        {explanation}
      </motion.div>
    </AnimatePresence>
  )
}
