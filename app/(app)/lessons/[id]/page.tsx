'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import PageContainer from '@/components/layout/PageContainer';
import Button from '@/components/ui/Button';
import CodePreview from '@/components/learning/CodePreview';
import StepCard from '@/components/learning/StepCard';
import InteractiveDiagram from '@/components/learning/InteractiveDiagram';
import LiveCodeEditor from '@/components/learning/LiveCodeEditor';
import AnimatedShowcase from '@/components/learning/AnimatedShowcase';
import VisualPractice from '@/components/learning/VisualPractice';
import ElementExplorer from '@/components/learning/ElementExplorer';
import BoxModelVisualizer from '@/components/learning/BoxModelVisualizer';
import HeadingHierarchy from '@/components/learning/HeadingHierarchy';
import { sampleLessons } from '@/lib/data/lessons';
import { completeLesson } from '@/lib/firebase/firestore';
import { Lesson } from '@/types';
import { VoiceNarrator } from '@/components/voice/VoiceNarrator';

export default function LessonViewerPage() {
  const params = useParams();
  const { firebaseUser, userProfile, refreshProfile } = useAuth();
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [completing, setCompleting] = useState(false);

  const lessonId = params.id as string;

  useEffect(() => {
    const found = sampleLessons.find((l) => l.id === lessonId);
    setLesson(found || null);
  }, [lessonId]);

  const isCompleted = userProfile?.completedLessons?.includes(lessonId);

  const handleComplete = async () => {
    if (!firebaseUser || isCompleted) return;
    setCompleting(true);
    try {
      await completeLesson(firebaseUser.uid, lessonId);
      await refreshProfile();
    } catch (e) {
      console.error(e);
    }
    setCompleting(false);
  };

  if (!lesson) {
    return (
      <PageContainer>
        <div className="text-center py-20 text-text-muted">Lesson not found.</div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Link href="/lessons" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary mb-6 transition-colors">
        <ArrowLeft size={14} /> Back to Lessons
      </Link>

      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-2xl font-bold font-haffer tracking-tight mb-2">{lesson.title}</h1>
          <div className="flex items-center gap-3 text-sm text-text-muted">
            <span>{lesson.estimatedTime} min</span>
            <span>•</span>
            <span className="capitalize">{lesson.difficulty}</span>
            <span>•</span>
            <span>+20 XP</span>
          </div>
        </motion.div>

        {lesson.content.map((block, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            {block.type === 'text' && (
              <div className="bg-bg-secondary border border-border-primary rounded-[7px] p-6">
                {block.title && <h3 className="text-base font-semibold font-haffer mb-3">{block.title}</h3>}
                <p className="text-text-secondary leading-relaxed">{block.body}</p>
              </div>
            )}

            {block.type === 'code' && block.code && (
              <div>
                {block.title && <h3 className="text-sm font-semibold font-haffer mb-3">{block.title}</h3>}
                <CodePreview code={block.code} language={block.language} />
              </div>
            )}

            {block.type === 'step' && block.steps && (
              <div className="bg-bg-secondary border border-border-primary rounded-[7px] p-6">
                {block.title && <h3 className="text-base font-semibold font-haffer mb-4">{block.title}</h3>}
                <div className="flex flex-col gap-4">
                  {block.steps.map((step, j) => (
                    <StepCard key={j} step={step} index={j} />
                  ))}
                </div>
              </div>
            )}

            {block.type === 'diagram' && (
              <InteractiveDiagram title={block.title || 'Diagram'} diagramType={block.diagramType} />
            )}

            {block.type === 'live-editor' && block.initialCode && (
              <LiveCodeEditor
                initialCode={block.initialCode}
                language={block.language}
                title={block.title}
              />
            )}

            {block.type === 'showcase' && block.showcaseSteps && (
              <AnimatedShowcase
                title={block.title || 'Showcase'}
                steps={block.showcaseSteps}
              />
            )}

            {block.type === 'practice' && block.exercises && (
              <VisualPractice
                sectionLabel={block.practiceLabel || block.title || 'Practice'}
                exercises={block.exercises}
              />
            )}

            {block.type === 'explorer' && block.tree && block.codeLines && (
              <ElementExplorer
                tree={block.tree}
                codeLines={block.codeLines}
                title={block.title}
              />
            )}

            {block.type === 'box-model' && (
              <BoxModelVisualizer title={block.title} />
            )}

            {block.type === 'heading-hierarchy' && (
              <HeadingHierarchy />
            )}
          </motion.div>
        ))}

        <div className="flex flex-wrap items-center gap-3 mt-4 pb-8">
          {!isCompleted ? (
            <Button onClick={handleComplete} loading={completing}>
              <CheckCircle size={16} /> Mark as Complete (+20 XP)
            </Button>
          ) : (
            <div className="flex items-center gap-2 text-emerald-600 font-medium text-sm">
              <CheckCircle size={16} /> Lesson Completed
            </div>
          )}
          <Link href={`/quiz/${lesson.id}`}>
            <Button variant="secondary">
              Take Quiz <ArrowRight size={14} />
            </Button>
          </Link>
        </div>
      </div>
      <VoiceNarrator text={lesson ? lesson.content.map((b: any) => b.text || b.content || b.description || '').filter(Boolean).join('. ') : ''} />
    </PageContainer>
  );
}
