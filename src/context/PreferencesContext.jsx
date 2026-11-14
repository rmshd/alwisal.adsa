import React, { createContext, useContext, useState, useEffect } from 'react';

const PREFS_KEY = 'alwisal_preferences';

const DEFAULT_PREFS = {
  theme: 'dark', // 'dark' (navy #0B1520), 'light' (cream #FBF4DC), 'system'
  reducedMotion: false,
  audioEnabled: false,
};

const PreferencesContext = createContext(null);

export function PreferencesProvider({ children }) {
  const [preferences, setPreferences] = useState(() => {
    if (typeof window === 'undefined') return DEFAULT_PREFS;
    try {
      const raw = localStorage.getItem(PREFS_KEY);
      return raw ? { ...DEFAULT_PREFS, ...JSON.parse(raw) } : DEFAULT_PREFS;
    } catch {
      return DEFAULT_PREFS;
    }
  });

  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const updatePreference = (key, value) => {
    setPreferences((prev) => {
      const updated = { ...prev, [key]: value };
      if (typeof window !== 'undefined') {
        localStorage.setItem(PREFS_KEY, JSON.stringify(updated));
      }
      return updated;
    });
  };

  // Keyboard shortcut: Ctrl+, or Cmd+,
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === ',') {
        e.preventDefault();
        setIsPanelOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Theme application
  useEffect(() => {
    const root = document.documentElement;
    let effectiveTheme = preferences.theme;
    
    if (effectiveTheme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      effectiveTheme = prefersDark ? 'dark' : 'light';
    }

    if (effectiveTheme === 'light') {
      root.classList.add('theme-cream');
      root.classList.remove('theme-dark');
      root.style.setProperty('--bg-canvas', '#FBF4DC');
      root.style.setProperty('--text-main', '#0B1520');
    } else {
      root.classList.add('theme-dark');
      root.classList.remove('theme-cream');
      root.style.setProperty('--bg-canvas', '#0B1520');
      root.style.setProperty('--text-main', '#FFFFFF');
    }
  }, [preferences.theme]);

  // Reduced motion application
  useEffect(() => {
    if (preferences.reducedMotion) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }
  }, [preferences.reducedMotion]);

  return (
    <PreferencesContext.Provider
      value={{
        preferences,
        updatePreference,
        isPanelOpen,
        openPanel: () => setIsPanelOpen(true),
        closePanel: () => setIsPanelOpen(false),
        togglePanel: () => setIsPanelOpen((prev) => !prev),
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const ctx = useContext(PreferencesContext);
  if (!ctx) {
    return {
      preferences: DEFAULT_PREFS,
      updatePreference: () => {},
      isPanelOpen: false,
      openPanel: () => {},
      closePanel: () => {},
      togglePanel: () => {},
    };
  }
  return ctx;
}
