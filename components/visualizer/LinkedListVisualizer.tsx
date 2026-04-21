'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Trash2, ArrowRight } from 'lucide-react'

interface ListNode { id: number; value: number }

let nodeIdCounter = 100

export function LinkedListVisualizer() {
  const [nodes, setNodes] = useState<ListNode[]>([
    { id: 1, value: 10 }, { id: 2, value: 20 }, { id: 3, value: 30 }
  ])
  const [inputVal, setInputVal] = useState('')
  const [highlight, setHighlight] = useState<number | null>(null)
  const [message, setMessage] = useState('Click Add to append a node, or Remove to delete the last node.')

  function addNode() {
    const val = parseInt(inputVal)
    if (isNaN(val)) return
    const newNode: ListNode = { id: ++nodeIdCounter, value: val }
    setNodes(prev => [...prev, newNode])
    setHighlight(newNode.id)
    setMessage(`Appended node with value ${val} to the end of the list.`)
    setInputVal('')
    setTimeout(() => setHighlight(null), 1200)
  }

  function removeNode() {
    if (nodes.length === 0) return
    const last = nodes[nodes.length - 1]
    setMessage(`Removed node with value ${last.value} from the end.`)
    setNodes(prev => prev.slice(0, -1))
  }

  function prependNode() {
    const val = parseInt(inputVal)
    if (isNaN(val)) return
    const newNode: ListNode = { id: ++nodeIdCounter, value: val }
    setNodes(prev => [newNode, ...prev])
    setHighlight(newNode.id)
    setMessage(`Prepended node with value ${val} to the front of the list.`)
    setInputVal('')
    setTimeout(() => setHighlight(null), 1200)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center flex-wrap">
        <input
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addNode()}
          className="w-24 px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-sm text-slate-200 font-mono"
          placeholder="Value"
        />
        <button onClick={prependNode} className="flex items-center gap-1 px-3 py-2 bg-slate-700 rounded-lg text-sm text-slate-200 hover:bg-slate-600">
          <Plus size={14} /> Prepend
        </button>
        <button onClick={addNode} className="flex items-center gap-1 px-3 py-2 bg-[#FC5107] rounded-lg text-sm text-white hover:bg-orange-600">
          <Plus size={14} /> Append
        </button>
        <button onClick={removeNode} className="flex items-center gap-1 px-3 py-2 bg-slate-700 rounded-lg text-sm text-slate-200 hover:bg-red-900 hover:text-red-300">
          <Trash2 size={14} /> Remove Last
        </button>
      </div>

      <div className="flex items-center gap-1 flex-wrap min-h-24 bg-slate-900 rounded-xl p-6 overflow-x-auto">
        <AnimatePresence>
          {nodes.length === 0 && (
            <span className="text-slate-500 text-sm">Empty list — add a node to begin</span>
          )}
          {nodes.map((node, i) => (
            <motion.div key={node.id} className="flex items-center gap-1"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`flex flex-col items-center border-2 rounded-lg overflow-hidden transition-all duration-300 ${highlight === node.id ? 'border-[#FC5107] shadow-lg shadow-orange-500/30' : 'border-slate-600'}`}>
                <div className={`px-4 py-2 text-lg font-bold transition-colors ${highlight === node.id ? 'bg-[#FC5107]/20 text-[#FC5107]' : 'bg-slate-800 text-slate-200'}`}>
                  {node.value}
                </div>
                <div className="px-2 py-1 bg-slate-700/50 text-xs text-slate-400 font-mono w-full text-center">
                  {i === nodes.length - 1 ? 'null' : `→ next`}
                </div>
              </div>
              {i < nodes.length - 1 && (
                <ArrowRight size={20} className="text-slate-500 flex-shrink-0" />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="p-3 bg-slate-800/60 border border-slate-700 rounded-xl text-sm text-slate-300">
        {message}
      </div>
    </div>
  )
}
