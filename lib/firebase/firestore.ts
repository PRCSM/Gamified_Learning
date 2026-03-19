// lib/firebase/firestore.ts
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  query,
  orderBy,
  getDocs,
  limit,
  increment,
  arrayUnion,
} from 'firebase/firestore';
import { db } from './config';
import {
  User,
  Lesson,
  Quiz,
  LeaderboardEntry,
  BadgeId,
  getLevelFromPoints,
  POINTS_PER_QUIZ,
  POINTS_PER_LESSON,
} from '@/types';

// ─── User ──────────────────────────────────────────────────────────

export async function getUserData(uid: string): Promise<User | null> {
  const snap = await getDoc(doc(db, 'users', uid));
  if (!snap.exists()) return null;
  return { uid, ...snap.data() } as User;
}

export async function createUserProfile(uid: string, name: string, email: string): Promise<void> {
  const userRef = doc(db, 'users', uid);
  await setDoc(userRef, {
    name,
    email,
    points: 0,
    level: 1,
    badges: [],
    completedLessons: [],
    streak: 0,
    lastActiveDate: new Date().toISOString().split('T')[0],
  });
}

// ─── Lessons ───────────────────────────────────────────────────────

export async function getLessons(): Promise<Lesson[]> {
  const snap = await getDocs(
    query(collection(db, 'lessons'), orderBy('order', 'asc'))
  );
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Lesson));
}

export async function getLesson(id: string): Promise<Lesson | null> {
  const snap = await getDoc(doc(db, 'lessons', id));
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() } as Lesson;
}

// ─── Quiz ──────────────────────────────────────────────────────────

export async function getQuiz(id: string): Promise<Quiz | null> {
  const snap = await getDoc(doc(db, 'quizzes', id));
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() } as Quiz;
}

// ─── Gamification Engine ───────────────────────────────────────────

export async function completeLesson(uid: string, lessonId: string): Promise<void> {
  const userRef = doc(db, 'users', uid);
  const userSnap = await getDoc(userRef);
  if (!userSnap.exists()) return;

  const user = userSnap.data() as User;
  if (user.completedLessons?.includes(lessonId)) return;

  const newPoints = (user.points ?? 0) + POINTS_PER_LESSON;
  const newLevel = getLevelFromPoints(newPoints);
  const newBadges: BadgeId[] = [...(user.badges ?? [])];

  // Learner badge: 5 lessons
  if (
    (user.completedLessons?.length ?? 0) + 1 >= 5 &&
    !newBadges.includes('learner')
  ) {
    newBadges.push('learner');
  }

  await updateDoc(userRef, {
    points: newPoints,
    level: newLevel,
    completedLessons: arrayUnion(lessonId),
    badges: newBadges,
  });

  await updateLeaderboard(uid, newPoints);
}

export async function completeQuiz(uid: string, quizId: string, score: number): Promise<{ newBadges: BadgeId[] }> {
  const userRef = doc(db, 'users', uid);
  const userSnap = await getDoc(userRef);
  if (!userSnap.exists()) return { newBadges: [] };

  const user = userSnap.data() as User;
  const earnedPoints = Math.round(POINTS_PER_QUIZ * (score / 100));
  const newPoints = (user.points ?? 0) + earnedPoints;
  const newLevel = getLevelFromPoints(newPoints);
  const newBadges: BadgeId[] = [...(user.badges ?? [])];
  const prevBadges = [...newBadges];

  // Beginner badge: first quiz
  if (!newBadges.includes('beginner')) newBadges.push('beginner');
  // Achiever badge: 100 points
  if (newPoints >= 100 && !newBadges.includes('achiever')) newBadges.push('achiever');

  await updateDoc(userRef, {
    points: newPoints,
    level: newLevel,
    badges: newBadges,
  });

  await updateLeaderboard(uid, newPoints);

  const justUnlocked = newBadges.filter((b) => !prevBadges.includes(b));
  return { newBadges: justUnlocked };
}

export async function updateStreak(uid: string): Promise<number> {
  const userRef = doc(db, 'users', uid);
  const snap = await getDoc(userRef);
  if (!snap.exists()) return 0;

  const data = snap.data();
  const today = new Date().toISOString().split('T')[0];
  const lastActive = data.lastActiveDate || '';

  if (lastActive === today) return data.streak ?? 0;

  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  const newStreak = lastActive === yesterday ? (data.streak ?? 0) + 1 : 1;

  const newBadges = [...(data.badges ?? [])];
  if (newStreak >= 7 && !newBadges.includes('streaker')) {
    newBadges.push('streaker');
  }

  await updateDoc(userRef, {
    streak: newStreak,
    lastActiveDate: today,
    badges: newBadges,
  });

  return newStreak;
}

async function updateLeaderboard(uid: string, points: number): Promise<void> {
  const ref = doc(db, 'leaderboard', uid);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    await updateDoc(ref, { points });
  }
}

// ─── Leaderboard ───────────────────────────────────────────────────

export async function getLeaderboard(count = 10): Promise<LeaderboardEntry[]> {
  const snap = await getDocs(
    query(
      collection(db, 'users'),
      orderBy('points', 'desc'),
      limit(count)
    )
  );
  return snap.docs.map((d, i) => ({
    userId: d.id,
    name: d.data().name,
    points: d.data().points,
    level: d.data().level,
    badges: d.data().badges ?? [],
    rank: i + 1,
  }));
}
