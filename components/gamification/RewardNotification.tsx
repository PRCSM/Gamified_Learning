'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState, createContext, useContext, ReactNode } from 'react';

interface Notification {
  id: string;
  title: string;
  message: string;
  icon?: string;
}

interface NotificationContextType {
  showNotification: (notif: Omit<Notification, 'id'>) => void;
}

const NotificationContext = createContext<NotificationContextType>({
  showNotification: () => {},
});

export function useNotification() {
  return useContext(NotificationContext);
}

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const showNotification = (notif: Omit<Notification, 'id'>) => {
    const id = Date.now().toString();
    setNotifications((prev) => [...prev, { ...notif, id }]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 4000);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <AnimatePresence>
          {notifications.map((n) => (
            <motion.div
              key={n.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-bg-secondary rounded-[7px] border border-border-primary p-4 flex items-start gap-3 min-w-[280px]"
            >
              <div className="w-9 h-9 rounded-[7px] bg-accent/15 flex items-center justify-center text-lg flex-shrink-0">
                {n.icon || '🏆'}
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold font-haffer">{n.title}</div>
                <div className="text-xs text-text-muted mt-0.5">{n.message}</div>
              </div>
              <button
                onClick={() => setNotifications((prev) => prev.filter((x) => x.id !== n.id))}
                className="text-text-muted hover:text-text-primary"
              >
                <X size={14} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </NotificationContext.Provider>
  );
}
