'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [menuOpen]);

  return (
    <>
      {/* Backdrop overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[90] bg-bg-primary/80 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* WRAPPER — handles centering */}
      <div className="fixed top-4 left-0 right-0 z-[100] flex justify-center px-4">
        <motion.nav
          layout
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            layout: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
            y: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          }}
          className={`
            flex flex-col overflow-hidden
            bg-white border border-border-secondary shadow-lg shadow-black/5 rounded-[10px]
            ${menuOpen ? 'w-full max-w-5xl' : ''}
          `}
        >
          {/* Header row */}
          <div className="h-[56px] shrink-0 flex items-center px-2 md:px-3">
            {/* Left: Hamburger + Menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-[7px] text-text-primary hover:bg-bg-secondary transition-colors group shrink-0"
            >
              <div className="flex flex-col gap-[5px] justify-center w-[18px]">
                <span className={`block h-[2px] bg-text-primary transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block h-[2px] bg-text-primary transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-[2px] w-3.5 bg-text-primary transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px] !w-[18px]' : 'group-hover:w-[18px]'}`} />
              </div>
              <span className="font-medium text-sm hidden sm:block">Menu</span>
            </button>

            {/* Spacer */}
            <div className="flex-1 min-w-[40px] md:min-w-[80px]" />

            {/* Center: Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setMenuOpen(false)}>
              <div className="w-6 h-6 rounded-[4px] bg-accent flex items-center justify-center">
                <BookOpen size={14} className="text-black" />
              </div>
              <span className="text-base font-bold text-text-primary tracking-tight">LearnQuest</span>
            </Link>

            {/* Spacer */}
            <div className="flex-1 min-w-[40px] md:min-w-[80px]" />

            {/* Right: Auth buttons */}
            <div className="flex items-center gap-2 shrink-0">
              <Link href="/login">
                <button className="px-5 py-2 text-sm text-text-primary bg-bg-secondary hover:bg-bg-tertiary rounded-[7px] font-medium transition-colors whitespace-nowrap">
                  Login
                </button>
              </Link>
              <Link href="/register">
                <button className="px-5 py-2 text-sm text-black bg-accent hover:brightness-90 rounded-[7px] font-medium transition-colors whitespace-nowrap">
                  Join
                </button>
              </Link>
            </div>
          </div>

          {/* Dropdown menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full text-text-primary"
              >
                <div className="px-6 md:px-12 pb-12 pt-8 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-border-primary">
                  {/* Navigation links */}
                  <div className="flex flex-col justify-center gap-2">
                    <span className="text-text-muted text-[11px] font-bold tracking-widest uppercase mb-4">Navigation</span>
                    {NAV_LINKS.map((link, i) => (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 + 0.2 }}
                      >
                        <Link
                          href={link.href}
                          className="text-3xl md:text-5xl font-medium hover:text-accent transition-colors py-2 md:py-3 block"
                          onClick={() => setMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Quick actions */}
                  <div className="flex flex-col justify-center md:pt-8">
                    <span className="text-text-muted text-[11px] font-bold tracking-widest uppercase mb-4">Quick Actions</span>
                    <div className="flex flex-col gap-4">
                      <Link href="/login" onClick={() => setMenuOpen(false)}>
                        <button className="w-full p-4 rounded-[7px] text-left text-xl md:text-2xl text-text-primary hover:bg-bg-tertiary transition-colors">
                          Log In
                        </button>
                      </Link>
                      <Link href="/register" onClick={() => setMenuOpen(false)}>
                        <button className="w-full text-left text-xl md:text-2xl text-black bg-accent p-4 rounded-[7px] font-medium hover:brightness-90 transition-colors flex justify-between items-center group">
                          <span>Create Account</span>
                          <span className="group-hover:translate-x-2 transition-transform">→</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </>
  );
}
