// User types
export interface User {
  uid: string;
  name: string;
  email: string;
  points: number;
  level: number;
  badges: BadgeId[];
  completedLessons: string[];
  streak: number;
  rank?: number;
}

// Lesson types
export interface Lesson {
  id: string;
  title: string;
  content: LessonContent[];
  quizId: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: number; // minutes
  order: number;
}

export interface LessonContent {
  type: 'text' | 'code' | 'diagram' | 'step' | 'live-editor' | 'showcase' | 'practice' | 'explorer' | 'box-model' | 'heading-hierarchy';
  title?: string;
  body?: string;
  code?: string;
  language?: string;
  steps?: Step[];
  diagramType?: string;
  // Live editor
  initialCode?: string;
  // Showcase
  showcaseSteps?: ShowcaseStep[];
  // Practice
  practiceLabel?: string;
  exercises?: PracticeExercise[];
  // Explorer
  tree?: ExplorerTreeNode;
  codeLines?: ExplorerCodeLine[];
}

export interface ShowcaseStep {
  title: string;
  description: string;
  code: string;
  highlightLines?: number[];
}

export interface PracticeExercise {
  title: string;
  description: string;
  code: string;
  hint?: string;
  expectedOutput?: string;
}

export interface ExplorerTreeNode {
  tag: string;
  children?: ExplorerTreeNode[];
  codeLine: number;
}

export interface ExplorerCodeLine {
  line: number;
  content: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

// Quiz types
export interface Quiz {
  id: string;
  lessonId: string;
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // index
}

export interface QuizResult {
  quizId: string;
  userId: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  completedAt: Date;
}

// Gamification types
export type BadgeId =
  | 'beginner'
  | 'learner'
  | 'achiever'
  | 'champion'
  | 'scholar'
  | 'streaker';

export interface Badge {
  id: BadgeId;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface LeaderboardEntry {
  userId: string;
  name: string;
  points: number;
  level: number;
  rank: number;
  badges: BadgeId[];
}

// Level config
export const LEVEL_THRESHOLDS = [0, 100, 200, 400, 800, 1600];
export const POINTS_PER_QUIZ = 50;
export const POINTS_PER_LESSON = 20;

export function getLevelFromPoints(points: number): number {
  let level = 1;
  for (let i = 0; i < LEVEL_THRESHOLDS.length; i++) {
    if (points >= LEVEL_THRESHOLDS[i]) level = i + 1;
    else break;
  }
  return level;
}

export function getProgressToNextLevel(points: number): number {
  const level = getLevelFromPoints(points);
  const current = LEVEL_THRESHOLDS[level - 1] ?? 0;
  const next = LEVEL_THRESHOLDS[level] ?? LEVEL_THRESHOLDS[level - 1];
  if (current === next) return 100;
  return Math.round(((points - current) / (next - current)) * 100);
}
