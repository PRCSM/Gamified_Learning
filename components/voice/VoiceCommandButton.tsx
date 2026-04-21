'use client'
import { Mic, MicOff } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useVoiceCommands } from '@/hooks/useVoiceCommands'

export function VoiceCommandButton() {
  const { isListening, isSupported, lastCommand, startListening, stopListening } = useVoiceCommands()
  if (!isSupported) return null

  return (
    <div className="relative">
      <button
        onClick={isListening ? stopListening : startListening}
        className={`relative p-2 rounded-xl transition-colors ${isListening ? 'bg-[#FC5107]/20 text-[#FC5107]' : 'bg-slate-700 text-slate-400 hover:text-slate-200'}`}
        title="Voice commands"
      >
        {isListening ? (
          <>
            <Mic size={18} />
            <motion.span
              className="absolute inset-0 rounded-xl border-2 border-[#FC5107]"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
          </>
        ) : (
          <MicOff size={18} />
        )}
      </button>

      <AnimatePresence>
        {lastCommand && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute top-full right-0 mt-2 w-56 bg-slate-800 border border-slate-600 rounded-xl px-3 py-2 text-xs text-slate-300 shadow-xl z-50 whitespace-nowrap"
          >
            🎤 {lastCommand}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
