import React, { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';

export default function InstallAppPill() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsVisible(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsVisible(false);
      }
      setDeferredPrompt(null);
    } else {
      alert("To install AL-WISAL '26 on your device: Tap the Share button in your browser and select 'Add to Home Screen'.");
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 left-5 z-40 hidden sm:inline-flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#121E2D]/90 backdrop-blur-md border border-[#FDB913]/30 shadow-xl text-xs text-white animate-fade-in">
      <Download className="w-4 h-4 text-[#FDB913]" />
      <span className="font-medium text-neutral-200">Install AL-WISAL '26 App</span>
      <button
        onClick={handleInstall}
        className="px-2.5 py-1 rounded-xl bg-[#FDB913] hover:bg-[#FDB913]/90 text-[#0B1520] font-bold text-[11px] transition-all"
      >
        Install
      </button>
      <button
        onClick={() => setIsVisible(false)}
        className="text-neutral-400 hover:text-white p-0.5 rounded transition-colors"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
