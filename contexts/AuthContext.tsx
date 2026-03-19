'use client';

import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';
import { User as FirebaseUser, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase/config';
import { getUserData, createUserProfile } from '@/lib/firebase/firestore';
import { User } from '@/types';

interface AuthContextType {
  firebaseUser: FirebaseUser | null;
  userProfile: User | null;
  loading: boolean;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  firebaseUser: null,
  userProfile: null,
  loading: true,
  refreshProfile: async () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [userProfile, setUserProfile] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = useCallback(async (user: FirebaseUser) => {
    try {
      let profile = await getUserData(user.uid);

      // Auto-create profile for new users
      if (!profile) {
        await createUserProfile(user.uid, user.displayName || user.email?.split('@')[0] || 'User', user.email || '');
        profile = await getUserData(user.uid);
      }

      setUserProfile(profile);

      // Set cookie for middleware route protection
      const secure = window.location.protocol === 'https:' ? '; Secure' : '';
      document.cookie = `firebase-auth-token=1; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax${secure}`;
    } catch (e) {
      console.error('Error fetching profile:', e);
    }
  }, []);

  const refreshProfile = useCallback(async () => {
    if (firebaseUser) {
      await fetchProfile(firebaseUser);
    }
  }, [firebaseUser, fetchProfile]);

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setFirebaseUser(user);
      if (user) {
        await fetchProfile(user);
      } else {
        setUserProfile(null);
        // Clear cookie on logout
        document.cookie = 'firebase-auth-token=; path=/; max-age=0';
      }
      setLoading(false);
    });

    return unsubscribe;
  }, [fetchProfile]);

  return (
    <AuthContext.Provider value={{ firebaseUser, userProfile, loading, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
}
