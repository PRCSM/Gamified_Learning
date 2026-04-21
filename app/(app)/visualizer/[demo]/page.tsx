'use client'
import { notFound } from 'next/navigation'
import PageContainer from '@/components/layout/PageContainer'
import { BubbleSortVisualizer } from '@/components/visualizer/BubbleSortVisualizer'
import { BinarySearchVisualizer } from '@/components/visualizer/BinarySearchVisualizer'
import { LinkedListVisualizer } from '@/components/visualizer/LinkedListVisualizer'
import { StackQueueVisualizer } from '@/components/visualizer/StackQueueVisualizer'

const DEMOS: Record<string, { title: string; description: string; component: React.ReactNode }> = {
  'bubble-sort': { title: 'Bubble Sort', description: 'Step through each comparison and swap', component: <BubbleSortVisualizer /> },
  'binary-search': { title: 'Binary Search', description: 'Watch the search range narrow each step', component: <BinarySearchVisualizer /> },
  'linked-list': { title: 'Linked List', description: 'Add and remove nodes with animated pointers', component: <LinkedListVisualizer /> },
  'stack-queue': { title: 'Stack & Queue', description: 'Push, pop, enqueue, and dequeue visually', component: <StackQueueVisualizer /> },
}

export default function DemoPage({ params }: { params: { demo: string } }) {
  const demo = DEMOS[params.demo]
  if (!demo) notFound()
  return (
    <PageContainer>
      <div className="mb-6">
        <h1 className="text-2xl font-bold font-haffer tracking-tight mb-2">{demo.title}</h1>
        <p className="text-text-muted text-sm">{demo.description}</p>
      </div>
      <div className="max-w-3xl bg-slate-800/40 border border-slate-700 rounded-2xl p-6">
        {demo.component}
      </div>
    </PageContainer>
  )
}
