'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { LucideIcon } from 'lucide-react'

interface Props {
  slug: string
  title: string
  description: string
  icon: LucideIcon
  category: 'DS' | 'DAA'
  color: string
}

export function VisualizerCard({ slug, title, description, icon: Icon, category, color }: Props) {
  return (
    <motion.div whileHover={{ y: -4, scale: 1.02 }} transition={{ duration: 0.2 }}>
      <Link href={`/visualizer/${slug}`} className="block p-6 bg-slate-800/60 border border-slate-700 rounded-2xl hover:border-slate-500 transition-colors group">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl`} style={{ backgroundColor: `${color}20` }}>
            <Icon size={24} style={{ color }} />
          </div>
          <span className={`text-xs font-mono px-2 py-1 rounded-full`} style={{ backgroundColor: `${color}20`, color }}>
            {category}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-white">{title}</h3>
        <p className="text-sm text-slate-400">{description}</p>
        <div className="mt-4 text-xs text-[#FC5107] font-medium">Open Visualizer →</div>
      </Link>
    </motion.div>
  )
}
