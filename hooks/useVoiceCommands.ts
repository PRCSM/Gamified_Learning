import { useState, useCallback, useRef } from 'react'
import { useRouter } from 'next/navigation'

type CommandHandler = () => void

export function useVoiceCommands() {
  const [isListening, setIsListening] = useState(false)
  const [lastCommand, setLastCommand] = useState<string | null>(null)
  const [isSupported] = useState(() => typeof window !== 'undefined' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window))
  const recognitionRef = useRef<any>(null)
  const router = useRouter()

  const commands: Array<{ patterns: string[]; label: string; action: CommandHandler }> = [
    { patterns: ['next lesson', 'go next', 'next'], label: 'Going to next lesson...', action: () => router.push('/lessons') },
    { patterns: ['previous lesson', 'go back', 'previous'], label: 'Going back...', action: () => router.back() },
    { patterns: ['start quiz', 'open quiz', 'quiz'], label: 'Opening quiz...', action: () => router.push('/quiz') },
    { patterns: ['visual lab', 'visualizer', 'open visualizer'], label: 'Opening Visual Lab...', action: () => router.push('/visualizer') },
    { patterns: ['dashboard', 'go home', 'home'], label: 'Going to dashboard...', action: () => router.push('/dashboard') },
    { patterns: ['leaderboard', 'rankings'], label: 'Opening leaderboard...', action: () => router.push('/leaderboard') },
  ]

  const startListening = useCallback(() => {
    if (!isSupported) return
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    recognition.continuous = false
    recognition.interimResults = false
    recognition.lang = 'en-US'

    recognition.onstart = () => setIsListening(true)
    recognition.onend = () => setIsListening(false)
    recognition.onerror = () => setIsListening(false)

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript.toLowerCase().trim()
      const match = commands.find(cmd => cmd.patterns.some(p => transcript.includes(p)))
      if (match) {
        setLastCommand(match.label)
        setTimeout(() => setLastCommand(null), 2500)
        match.action()
      } else {
        setLastCommand(`"${transcript}" — command not recognized`)
        setTimeout(() => setLastCommand(null), 2500)
      }
    }

    recognitionRef.current = recognition
    recognition.start()
  }, [isSupported, commands, router])

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop()
    setIsListening(false)
  }, [])

  return { isListening, isSupported, lastCommand, startListening, stopListening }
}
