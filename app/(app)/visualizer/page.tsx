import PageContainer from '@/components/layout/PageContainer'
import { VisualizerCard } from '@/components/visualizer/VisualizerCard'
import { Link2, Layers, BarChart2, Search } from 'lucide-react'

const DEMOS = [
  { slug: 'linked-list', title: 'Linked List', description: 'Add and remove nodes. See pointer connections animate in real time.', icon: Link2, category: 'DS' as const, color: '#818cf8' },
  { slug: 'stack-queue', title: 'Stack & Queue', description: 'Push, pop, enqueue, and dequeue. See LIFO vs FIFO in action.', icon: Layers, category: 'DS' as const, color: '#34d399' },
  { slug: 'bubble-sort', title: 'Bubble Sort', description: 'Watch adjacent elements compare and swap step by step.', icon: BarChart2, category: 'DAA' as const, color: '#facc15' },
  { slug: 'binary-search', title: 'Binary Search', description: 'See the search space halve with each comparison.', icon: Search, category: 'DAA' as const, color: '#FC5107' },
]

export default function VisualizerPage() {
  return (
    <PageContainer>
      <div className="mb-6">
        <h1 className="text-2xl font-bold font-haffer tracking-tight mb-2">Visual Lab</h1>
        <p className="text-text-muted text-sm">Interactive Data Structures &amp; Algorithm Visualizers</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {DEMOS.map(demo => <VisualizerCard key={demo.slug} {...demo} />)}
      </div>
    </PageContainer>
  )
}
