import { useState, useCallback, useRef } from 'react'

export function useVoiceNarrator() {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [speed, setSpeed] = useState(1)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  const speak = useCallback((text: string) => {
    if (!window.speechSynthesis) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = speed
    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)
    utteranceRef.current = utterance
    window.speechSynthesis.speak(utterance)
  }, [speed])

  const pause = useCallback(() => {
    window.speechSynthesis?.pause()
    setIsSpeaking(false)
  }, [])

  const resume = useCallback(() => {
    window.speechSynthesis?.resume()
    setIsSpeaking(true)
  }, [])

  const stop = useCallback(() => {
    window.speechSynthesis?.cancel()
    setIsSpeaking(false)
  }, [])

  return { isSpeaking, speed, setSpeed, speak, pause, resume, stop }
}
