// hooks/useAnimationStepper.ts
import { useState, useEffect, useRef, useCallback } from 'react'

interface UseAnimationStepperOptions {
  totalSteps: number
  onComplete?: () => void
}

export function useAnimationStepper({ totalSteps, onComplete }: UseAnimationStepperOptions) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState(1)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  const stop = useCallback(() => {
    setIsPlaying(false)
    clearTimer()
  }, [clearTimer])

  const reset = useCallback(() => {
    stop()
    setCurrentStep(0)
  }, [stop])

  const stepForward = useCallback(() => {
    setCurrentStep(prev => {
      if (prev >= totalSteps - 1) {
        stop()
        onComplete?.()
        return prev
      }
      return prev + 1
    })
  }, [totalSteps, stop, onComplete])

  const play = useCallback(() => {
    if (currentStep >= totalSteps - 1) reset()
    setIsPlaying(true)
  }, [currentStep, totalSteps, reset])

  const pause = useCallback(() => {
    setIsPlaying(false)
    clearTimer()
  }, [clearTimer])

  useEffect(() => {
    if (!isPlaying) return
    clearTimer()
    const ms = 1000 / speed
    intervalRef.current = setInterval(stepForward, ms)
    return clearTimer
  }, [isPlaying, speed, stepForward, clearTimer])

  return { currentStep, isPlaying, speed, play, pause, stop, reset, stepForward, setSpeed }
}
