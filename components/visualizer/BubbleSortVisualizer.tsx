'use client'
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useAnimationStepper } from '@/hooks/useAnimationStepper'
import { VisualizerControls } from './VisualizerControls'
import { StepExplainer } from './StepExplainer'

interface SortStep {
  array: number[]
  comparing: [number, number] | null
  swapped: [number, number] | null
  sorted: number[]
  explanation: string
}

function generateBubbleSortSteps(input: number[]): SortStep[] {
  const steps: SortStep[] = []
  const arr = [...input]
  const sorted: number[] = []

  steps.push({ array: [...arr], comparing: null, swapped: null, sorted: [], explanation: 'Starting bubble sort. We compare adjacent elements and swap if out of order.' })

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      steps.push({ array: [...arr], comparing: [j, j + 1], swapped: null, sorted: [...sorted], explanation: `Comparing ${arr[j]} and ${arr[j + 1]}` })
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        steps.push({ array: [...arr], comparing: null, swapped: [j, j + 1], sorted: [...sorted], explanation: `${arr[j + 1]} > ${arr[j]}, swapping them` })
      }
    }
    sorted.push(arr.length - 1 - i)
  }
  sorted.push(0)
  steps.push({ array: [...arr], comparing: null, swapped: null, sorted: arr.map((_, i) => i), explanation: 'Array is fully sorted!' })
  return steps
}

const DEFAULT_ARRAY = [64, 34, 25, 12, 22, 11, 90]
const MAX_VAL = 100

export function BubbleSortVisualizer() {
  const [inputVal, setInputVal] = useState(DEFAULT_ARRAY.join(', '))
  const [inputArray, setInputArray] = useState(DEFAULT_ARRAY)

  const steps = useMemo(() => generateBubbleSortSteps(inputArray), [inputArray])
  const { currentStep, isPlaying, speed, play, pause, reset, stepForward, setSpeed } = useAnimationStepper({ totalSteps: steps.length })

  const frame = steps[currentStep]

  function applyInput() {
    const nums = inputVal.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n)).slice(0, 12)
    if (nums.length >= 2) { setInputArray(nums); reset() }
  }

  function barColor(i: number) {
    if (frame.sorted.includes(i)) return '#FC5107'
    if (frame.swapped && (frame.swapped[0] === i || frame.swapped[1] === i)) return '#4ade80'
    if (frame.comparing && (frame.comparing[0] === i || frame.comparing[1] === i)) return '#facc15'
    return '#475569'
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <input
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
          className="flex-1 px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-sm text-slate-200 font-mono"
          placeholder="Enter numbers: 64, 34, 25, 12"
        />
        <button onClick={applyInput} className="px-4 py-2 bg-slate-700 rounded-lg text-sm text-slate-200 hover:bg-slate-600 transition-colors">Apply</button>
      </div>

      <div className="flex items-end gap-1 h-48 bg-slate-900 rounded-xl p-4">
        {frame.array.map((val, i) => (
          <motion.div
            key={i}
            layout
            className="flex-1 rounded-t-md flex items-end justify-center pb-1"
            style={{ height: `${(val / MAX_VAL) * 100}%`, backgroundColor: barColor(i), minHeight: '8px' }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-xs text-white font-bold" style={{ fontSize: '10px' }}>{val}</span>
          </motion.div>
        ))}
      </div>

      <div className="flex gap-4 text-xs text-slate-400">
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-yellow-400 inline-block" /> Comparing</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-green-400 inline-block" /> Swapped</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-[#FC5107] inline-block" /> Sorted</span>
      </div>

      <StepExplainer step={currentStep} explanation={frame.explanation} />
      <VisualizerControls isPlaying={isPlaying} speed={speed} onPlay={play} onPause={pause} onStep={stepForward} onReset={reset} onSpeedChange={setSpeed} />
    </div>
  )
}
