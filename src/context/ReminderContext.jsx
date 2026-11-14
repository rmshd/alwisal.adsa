import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'alwisal_reminders_v1';

const ReminderContext = createContext();

export function ReminderProvider({ children }) {
  const [reminders, setReminders] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const [isReminderModalOpen, setIsReminderModalOpen] = useState(false);
  const [modalTarget, setModalTarget] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(reminders));
    } catch (e) {
      console.warn('Failed to save reminders', e);
    }
  }, [reminders]);

  const activeCount = reminders.filter((r) => r.status !== 'dismissed').length;

  const openReminderModal = useCallback((target = null) => {
    setModalTarget(target);
    setIsReminderModalOpen(true);
  }, []);

  const closeReminderModal = useCallback(() => {
    setIsReminderModalOpen(false);
    setModalTarget(null);
  }, []);

  const addReminder = useCallback((reminderData) => {
    const newReminder = {
      id: `rem_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      createdAt: new Date().toISOString(),
      status: 'active',
      ...reminderData,
    };
    setReminders((prev) => [newReminder, ...prev]);

    // Request notification permission if supported
    if (typeof window !== 'undefined' && 'Notification' in window) {
      if (Notification.permission === 'default') {
        Notification.requestPermission();
      }
    }

    return newReminder;
  }, []);

  const removeReminder = useCallback((id) => {
    setReminders((prev) => prev.filter((r) => r.id !== id));
  }, []);

  return (
    <ReminderContext.Provider
      value={{
        reminders,
        activeCount,
        isReminderModalOpen,
        modalTarget,
        openReminderModal,
        closeReminderModal,
        addReminder,
        removeReminder,
      }}
    >
      {children}
    </ReminderContext.Provider>
  );
}

export function useReminders() {
  const ctx = useContext(ReminderContext);
  if (!ctx) {
    return {
      reminders: [],
      activeCount: 0,
      isReminderModalOpen: false,
      modalTarget: null,
      openReminderModal: () => {},
      closeReminderModal: () => {},
      addReminder: () => {},
      removeReminder: () => {},
    };
  }
  return ctx;
}
