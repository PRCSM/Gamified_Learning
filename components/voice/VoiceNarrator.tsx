'use client'
import { Volume2, VolumeX, Square } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useVoiceNarrator } from '@/hooks/useVoiceNarrator'

interface Props { text: string }

export function VoiceNarrator({ text }: Props) {
  const { isSpeaking, speed, setSpeed, speak, pause, stop } = useVoiceNarrator()

  if (typeof window !== 'undefined' && !window.speechSynthesis) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-slate-800 border border-slate-600 rounded-2xl px-4 py-3 shadow-xl"
    >
      <AnimatePresence>
        {isSpeaking && (
          <motion.div initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: 'auto' }} exit={{ opacity: 0, width: 0 }}
            className="flex gap-0.5 items-end h-5 overflow-hidden"
          >
            {[1, 2, 3, 4].map(i => (
              <motion.div key={i} className="w-1 bg-[#FC5107] rounded-full"
                animate={{ height: ['40%', '100%', '40%'] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <span className="text-xs text-slate-400">Listen</span>

      <button
        onClick={() => isSpeaking ? pause() : speak(text)}
        className="p-2 rounded-lg bg-[#FC5107] text-white hover:bg-orange-600 transition-colors"
      >
        {isSpeaking ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>

      {isSpeaking && (
        <button onClick={stop} className="p-2 rounded-lg bg-slate-700 text-slate-300 hover:bg-slate-600 transition-colors">
          <Square size={14} />
        </button>
      )}

      <select
        value={speed}
        onChange={e => setSpeed(Number(e.target.value))}
        className="text-xs bg-slate-700 text-slate-300 border border-slate-600 rounded-lg px-2 py-1"
      >
        <option value={0.75}>0.75x</option>
        <option value={1}>1x</option>
        <option value={1.5}>1.5x</option>
      </select>
    </motion.div>
  )
}
