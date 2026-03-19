'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { loginUser } from '@/lib/firebase/auth';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await loginUser(email, password);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Login failed.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 justify-center mb-10">
          <div className="w-8 h-8 rounded-[5px] bg-accent flex items-center justify-center">
            <BookOpen size={18} className="text-black" />
          </div>
          <span className="text-xl font-bold font-haffer tracking-tight">LearnQuest</span>
        </Link>

        <div className="bg-bg-secondary border border-border-primary rounded-[7px] p-8">
          <h1 className="text-2xl font-bold font-haffer mb-1">Log in</h1>
          <p className="text-sm text-text-muted mb-6">Enter your credentials to continue.</p>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <Input
              label="Email"
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="text-xs text-red-500">{error}</p>}
            <Button type="submit" loading={loading} className="w-full mt-2">
              Log In
            </Button>
          </form>

          <p className="text-sm text-text-secondary mt-6 text-center">
            Don't have an account?{' '}
            <Link href="/register" className="text-text-primary font-medium hover:text-accent transition-colors">
              Create one
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
