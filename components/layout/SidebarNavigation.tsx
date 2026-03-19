'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  BookOpen,
  HelpCircle,
  Trophy,
  User,
  LogOut,
  ChevronLeft,
} from 'lucide-react';
import { useState } from 'react';
import { logoutUser } from '@/lib/firebase/auth';
import { useRouter } from 'next/navigation';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/lessons', label: 'Lessons', icon: BookOpen },
  { href: '/quiz', label: 'Quizzes', icon: HelpCircle },
  { href: '/leaderboard', label: 'Leaderboard', icon: Trophy },
  { href: '/profile', label: 'Profile', icon: User },
];

export default function SidebarNavigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = async () => {
    await logoutUser();
    router.push('/login');
  };

  return (
    <aside
      className={`
        fixed left-0 top-0 h-screen bg-bg-secondary border-r border-border-primary z-40
        flex flex-col transition-all duration-standard ease-smooth
        ${collapsed ? 'w-[72px]' : 'w-sidebar'}
      `}
    >
      {/* Logo */}
      <div className="h-14 flex items-center px-5 border-b border-border-primary">
        <div className="w-8 h-8 rounded-[5px] bg-accent flex items-center justify-center flex-shrink-0">
          <BookOpen size={16} className="text-black" />
        </div>
        {!collapsed && (
          <span className="ml-2.5 text-base font-bold font-haffer whitespace-nowrap tracking-tight">
            LearnQuest
          </span>
        )}
      </div>

      {/* Nav Items */}
      <nav className="flex-1 py-4 px-3 flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center gap-3 px-3 py-2.5 rounded-[7px] text-sm font-medium
                transition-all duration-micro ease-smooth min-h-[40px]
                ${isActive
                  ? 'bg-accent/15 text-text-primary'
                  : 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary'
                }
              `}
            >
              <item.icon size={18} className={isActive ? 'text-text-primary' : ''} />
              {!collapsed && <span className="font-haffer">{item.label}</span>}
              {isActive && !collapsed && (
                <motion.div
                  layoutId="activeNav"
                  className="ml-auto w-1.5 h-1.5 rounded-full bg-accent"
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="p-3 border-t border-border-primary flex flex-col gap-1">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2.5 rounded-[7px] text-sm text-text-secondary hover:text-red-500 hover:bg-red-50 transition-all min-h-[40px]"
        >
          <LogOut size={18} />
          {!collapsed && <span className="font-haffer">Log Out</span>}
        </button>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center justify-center p-2 rounded-[7px] text-text-secondary hover:bg-bg-tertiary transition-all min-h-[40px]"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <ChevronLeft size={16} className={`transition-transform ${collapsed ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </aside>
  );
}
