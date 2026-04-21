'use client';

import { Search, Bell } from 'lucide-react';
import Avatar from '@/components/ui/Avatar';
import { useAuth } from '@/contexts/AuthContext';
import { VoiceCommandButton } from '@/components/voice/VoiceCommandButton';

export default function TopNavigation() {
  const { userProfile } = useAuth();

  return (
    <header className="h-14 bg-bg-secondary border-b border-border-primary flex items-center justify-between px-6 sticky top-0 z-30">
      {/* Search */}
      <div className="relative max-w-md w-full">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
        <input
          type="text"
          placeholder="Search lessons, quizzes..."
          className="w-full pl-10 pr-4 py-2.5 rounded-[7px] border border-border-primary bg-bg-primary text-sm
            focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent
            transition-all duration-micro placeholder:text-text-muted"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <VoiceCommandButton />
        <button className="relative p-2 rounded-[7px] hover:bg-bg-tertiary transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center">
          <Bell size={18} className="text-text-secondary" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full" />
        </button>
        <div className="flex items-center gap-3">
          <Avatar
            name={userProfile?.name || 'User'}
            size="sm"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-medium font-haffer">{userProfile?.name || 'User'}</p>
            <p className="text-xs text-text-muted">Level {userProfile?.level || 1}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
