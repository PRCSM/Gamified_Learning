'use client'
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useAnimationStepper } from '@/hooks/useAnimationStepper'
import { VisualizerControls } from './VisualizerControls'
import { StepExplainer } from './StepExplainer'

interface SearchStep {
  array: number[]
  low: number
  high: number
  mid: number | null
  found: number | null
  target: number
  explanation: string
}

function generateBinarySearchSteps(arr: number[], target: number): SearchStep[] {
  const sorted = [...arr].sort((a, b) => a - b)
  const steps: SearchStep[] = []
  let low = 0, high = sorted.length - 1

  steps.push({ array: sorted, low, high, mid: null, found: null, target, explanation: `Searching for ${target} in sorted array. Start: low=0, high=${high}` })

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    steps.push({ array: sorted, low, high, mid, found: null, target, explanation: `mid = (${low}+${high})/2 = ${mid}. Checking index ${mid}: value is ${sorted[mid]}` })

    if (sorted[mid] === target) {
      steps.push({ array: sorted, low, high, mid, found: mid, target, explanation: `Found ${target} at index ${mid}!` })
      break
    } else if (sorted[mid] < target) {
      low = mid + 1
      steps.push({ array: sorted, low, high, mid: null, found: null, target, explanation: `${sorted[mid]} < ${target}, search right half. New low = ${low}` })
    } else {
      high = mid - 1
      steps.push({ array: sorted, low, high, mid: null, found: null, target, explanation: `${sorted[mid]} > ${target}, search left half. New high = ${high}` })
    }
  }

  if (steps[steps.length - 1].found === null) {
    steps.push({ array: sorted, low, high, mid: null, found: null, target, explanation: `${target} not found in the array.` })
  }

  return steps
}

const DEFAULT_ARRAY = [2, 5, 8, 12, 16, 23, 38, 45, 56, 72]

export function BinarySearchVisualizer() {
  const [inputVal, setInputVal] = useState(DEFAULT_ARRAY.join(', '))
  const [targetVal, setTargetVal] = useState('23')
  const [inputArray, setInputArray] = useState(DEFAULT_ARRAY)
  const [target, setTarget] = useState(23)

  const steps = useMemo(() => generateBinarySearchSteps(inputArray, target), [inputArray, target])
  const { currentStep, isPlaying, speed, play, pause, reset, stepForward, setSpeed } = useAnimationStepper({ totalSteps: steps.length })

  const frame = steps[currentStep]

  function applyInput() {
    const nums = inputVal.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n)).slice(0, 16)
    const t = parseInt(targetVal)
    if (nums.length >= 2 && !isNaN(t)) { setInputArray(nums); setTarget(t); reset() }
  }

  function cellColor(i: number) {
    if (frame.found === i) return 'bg-[#FC5107] text-white'
    if (frame.mid === i) return 'bg-yellow-400 text-slate-900'
    if (i >= frame.low && i <= frame.high) return 'bg-slate-600 text-white'
    return 'bg-slate-800 text-slate-500'
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 flex-wrap">
        <input value={inputVal} onChange={e => setInputVal(e.target.value)} className="flex-1 min-w-40 px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-sm text-slate-200 font-mono" placeholder="Array values" />
        <input value={targetVal} onChange={e => setTargetVal(e.target.value)} className="w-24 px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-sm text-slate-200 font-mono" placeholder="Target" />
        <button onClick={applyInput} className="px-4 py-2 bg-slate-700 rounded-lg text-sm text-slate-200 hover:bg-slate-600">Apply</button>
      </div>

      <div className="flex gap-1 flex-wrap bg-slate-900 rounded-xl p-4">
        {frame.array.map((val, i) => (
          <motion.div
            key={i}
            className={`w-12 h-12 rounded-lg flex items-center justify-center text-sm font-bold transition-colors duration-300 ${cellColor(i)}`}
            animate={{ scale: frame.mid === i || frame.found === i ? 1.15 : 1 }}
          >
            {val}
          </motion.div>
        ))}
      </div>

      <div className="flex gap-4 text-xs text-slate-400">
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-yellow-400 inline-block" /> Mid</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-slate-600 inline-block" /> Search range</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-[#FC5107] inline-block" /> Found</span>
      </div>

      <StepExplainer step={currentStep} explanation={frame.explanation} />
      <VisualizerControls isPlaying={isPlaying} speed={speed} onPlay={play} onPause={pause} onStep={stepForward} onReset={reset} onSpeedChange={setSpeed} />
    </div>
  )
}
