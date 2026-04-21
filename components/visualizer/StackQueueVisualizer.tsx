'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

type Mode = 'stack' | 'queue'
interface Item { id: number; value: number }
let itemId = 200

export function StackQueueVisualizer() {
  const [mode, setMode] = useState<Mode>('stack')
  const [items, setItems] = useState<Item[]>([{ id: 201, value: 10 }, { id: 202, value: 20 }, { id: 203, value: 30 }])
  const [inputVal, setInputVal] = useState('')
  const [message, setMessage] = useState('Push a value onto the stack, or pop the top element.')

  function push() {
    const val = parseInt(inputVal)
    if (isNaN(val)) return
    const item = { id: ++itemId, value: val }
    setItems(prev => [...prev, item])
    setMessage(`${mode === 'stack' ? 'Pushed' : 'Enqueued'} ${val}. ${mode === 'stack' ? 'It sits on top of the stack.' : 'It joins the back of the queue.'}`)
    setInputVal('')
  }

  function pop() {
    if (items.length === 0) return setMessage(`${mode === 'stack' ? 'Stack' : 'Queue'} is empty.`)
    if (mode === 'stack') {
      const top = items[items.length - 1]
      setItems(prev => prev.slice(0, -1))
      setMessage(`Popped ${top.value} from the top of the stack (LIFO).`)
    } else {
      const front = items[0]
      setItems(prev => prev.slice(1))
      setMessage(`Dequeued ${front.value} from the front of the queue (FIFO).`)
    }
  }

  const isStack = mode === 'stack'

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {(['stack', 'queue'] as Mode[]).map(m => (
          <button key={m} onClick={() => { setMode(m); setItems([{ id: ++itemId, value: 10 }, { id: ++itemId, value: 20 }, { id: ++itemId, value: 30 }]); setMessage(m === 'stack' ? 'Push a value onto the stack, or pop the top element.' : 'Enqueue a value, or dequeue from the front.') }}
            className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${mode === m ? 'bg-[#FC5107] text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}
          >{m}</button>
        ))}
        <input value={inputVal} onChange={e => setInputVal(e.target.value)} onKeyDown={e => e.key === 'Enter' && push()}
          className="w-20 px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-sm text-slate-200 font-mono ml-auto" placeholder="Value" />
        <button onClick={push} className="flex items-center gap-1 px-3 py-2 bg-[#FC5107] rounded-lg text-sm text-white hover:bg-orange-600">
          <Plus size={14} /> {isStack ? 'Push' : 'Enqueue'}
        </button>
        <button onClick={pop} className="flex items-center gap-1 px-3 py-2 bg-slate-700 rounded-lg text-sm text-slate-200 hover:bg-red-900 hover:text-red-300">
          <Minus size={14} /> {isStack ? 'Pop' : 'Dequeue'}
        </button>
      </div>

      {isStack ? (
        <div className="flex flex-col-reverse items-center gap-1 min-h-52 bg-slate-900 rounded-xl p-4 border-2 border-slate-700 relative">
          <div className="absolute bottom-2 left-4 text-xs text-slate-500 font-mono">bottom</div>
          <div className="absolute top-2 right-4 text-xs text-[#FC5107] font-mono">← TOP</div>
          <AnimatePresence>
            {items.map((item, i) => (
              <motion.div key={item.id}
                initial={{ opacity: 0, scaleY: 0 }} animate={{ opacity: 1, scaleY: 1 }} exit={{ opacity: 0, x: 60, transition: { duration: 0.25 } }}
                className={`w-48 py-3 rounded-lg text-center text-lg font-bold border-2 transition-colors ${i === items.length - 1 ? 'bg-[#FC5107]/20 border-[#FC5107] text-[#FC5107]' : 'bg-slate-800 border-slate-600 text-slate-200'}`}
              >{item.value}</motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="flex items-center gap-1 min-h-24 bg-slate-900 rounded-xl p-4 border-2 border-slate-700 overflow-x-auto relative">
          <div className="absolute top-2 left-4 text-xs text-[#FC5107] font-mono">FRONT →</div>
          <div className="flex items-center gap-2 mt-6">
            <AnimatePresence>
              {items.map((item, i) => (
                <motion.div key={item.id}
                  initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -60, transition: { duration: 0.25 } }}
                  className={`w-16 h-16 rounded-lg text-center flex items-center justify-center text-lg font-bold border-2 flex-shrink-0 transition-colors ${i === 0 ? 'bg-[#FC5107]/20 border-[#FC5107] text-[#FC5107]' : 'bg-slate-800 border-slate-600 text-slate-200'}`}
                >{item.value}</motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}

      <div className="p-3 bg-slate-800/60 border border-slate-700 rounded-xl text-sm text-slate-300">{message}</div>
    </div>
  )
}
