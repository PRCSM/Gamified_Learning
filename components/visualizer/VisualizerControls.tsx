'use client'
import { Play, Pause, SkipForward, RotateCcw } from 'lucide-react'

interface Props {
  isPlaying: boolean
  speed: number
  onPlay: () => void
  onPause: () => void
  onStep: () => void
  onReset: () => void
  onSpeedChange: (speed: number) => void
}

export function VisualizerControls({ isPlaying, speed, onPlay, onPause, onStep, onReset, onSpeedChange }: Props) {
  return (
    <div className="flex items-center gap-3 p-3 bg-slate-800 rounded-xl border border-slate-700">
      <button
        onClick={isPlaying ? onPause : onPlay}
        className="flex items-center gap-2 px-4 py-2 bg-[#FC5107] rounded-lg text-white text-sm font-medium hover:bg-orange-600 transition-colors"
      >
        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        {isPlaying ? 'Pause' : 'Play'}
      </button>

      <button
        onClick={onStep}
        className="flex items-center gap-2 px-3 py-2 bg-slate-700 rounded-lg text-slate-200 text-sm hover:bg-slate-600 transition-colors"
      >
        <SkipForward size={16} /> Step
      </button>

      <button
        onClick={onReset}
        className="flex items-center gap-2 px-3 py-2 bg-slate-700 rounded-lg text-slate-200 text-sm hover:bg-slate-600 transition-colors"
      >
        <RotateCcw size={16} /> Reset
      </button>

      <div className="flex items-center gap-2 ml-auto">
        <span className="text-xs text-slate-400">Speed</span>
        <input
          type="range"
          min={0.5}
          max={2}
          step={0.25}
          value={speed}
          onChange={e => onSpeedChange(Number(e.target.value))}
          className="w-20 accent-[#FC5107]"
        />
        <span className="text-xs text-slate-300 w-8">{speed}x</span>
      </div>
    </div>
  )
}
