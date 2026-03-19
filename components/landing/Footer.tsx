import Link from 'next/link';
import { BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border-primary py-10 px-6">
      <div className="max-w-container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-[5px] bg-accent flex items-center justify-center">
            <BookOpen size={13} className="text-black" />
          </div>
          <span className="text-base font-bold font-haffer tracking-tight">LearnQuest</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-text-muted">
          <Link href="#features" className="hover:text-text-primary transition-colors">Features</Link>
          <Link href="#how-it-works" className="hover:text-text-primary transition-colors">How it Works</Link>
          <Link href="/login" className="hover:text-text-primary transition-colors">Log In</Link>
        </div>
        <p className="text-xs text-text-muted">
          © 2026 LearnQuest. SASTRA University.
        </p>
      </div>
    </footer>
  );
}
