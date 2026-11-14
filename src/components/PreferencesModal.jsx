import React from 'react';
import { usePreferences } from '../context/PreferencesContext';
import { useT } from '../context/I18nContext';
import { resetDemoData } from '../lib/store';
import { X, Moon, Sun, Monitor, Languages, Zap, Volume2, RotateCcw } from 'lucide-react';

export default function PreferencesModal() {
  const { preferences, updatePreference, isPanelOpen, closePanel } = usePreferences();
  const { language, setLanguage, t } = useT();

  if (!isPanelOpen) return null;

  const handleResetData = () => {
    if (window.confirm('Reset all demo data (registrations, sessions, speakers, settings) to default state?')) {
      resetDemoData();
      window.location.reload();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="User Preferences"
    >
      <div className="relative w-full max-w-lg p-6 bg-[#121E2D] border border-white/15 rounded-2xl shadow-2xl text-white font-['Poppins']">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#FDB913]">
              <Languages size={18} />
            </span>
            <div>
              <h3 className="text-base font-bold text-white tracking-wide">
                Preferences & Settings
              </h3>
              <p className="text-xs text-[#9FB0C3]">
                Customise language, theme and accessibility
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closePanel}
            className="p-2 text-white/60 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close preferences"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="py-5 space-y-6">

          {/* Language Selector */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider font-semibold text-[#9FB0C3]">
              Language / ഭാഷ / اللغة
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { code: 'en', label: 'English', sub: 'Default' },
                { code: 'ml', label: 'മലയാളം', sub: 'Malayalam' },
                { code: 'ar', label: 'العربية', sub: 'RTL Mode' },
              ].map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setLanguage(item.code)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    language === item.code
                      ? 'border-[#F28A2E] bg-[#F28A2E]/15 text-white font-bold shadow-sm'
                      : 'border-white/10 bg-white/5 text-white/80 hover:bg-white/10'
                  }`}
                >
                  <span className="block text-sm leading-tight">{item.label}</span>
                  <span className="block text-[10px] text-[#9FB0C3] mt-0.5">{item.sub}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Theme Selector */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider font-semibold text-[#9FB0C3]">
              Appearance Theme
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'dark', label: 'Dark Navy', icon: Moon, desc: '#0B1520 Default' },
                { id: 'light', label: 'Cream Light', icon: Sun, desc: '#FBF4DC Cream' },
                { id: 'system', label: 'System', icon: Monitor, desc: 'Auto Match' },
              ].map((item) => {
                const Icon = item.icon;
                const isActive = preferences.theme === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => updatePreference('theme', item.id)}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 text-center transition-all ${
                      isActive
                        ? 'border-[#FDB913] bg-[#FDB913]/15 text-[#FDB913] font-bold'
                        : 'border-white/10 bg-white/5 text-white/80 hover:bg-white/10'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="text-xs font-semibold">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Accessibility Toggles */}
          <div className="space-y-3 pt-2 border-t border-white/10">
            {/* Reduced motion */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Zap size={16} className="text-[#4FB6E6]" />
                <div>
                  <span className="text-xs font-semibold text-white block">Reduced Motion</span>
                  <span className="text-[11px] text-[#9FB0C3]">Disable smooth scroll & GSAP reveals</span>
                </div>
              </div>
              <input
                type="checkbox"
                checked={preferences.reducedMotion}
                onChange={(e) => updatePreference('reducedMotion', e.target.checked)}
                className="w-4 h-4 accent-[#F28A2E] cursor-pointer"
              />
            </div>

            {/* Audio */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Volume2 size={16} className="text-[#FDB913]" />
                <div>
                  <span className="text-xs font-semibold text-white block">Ambient Audio</span>
                  <span className="text-[11px] text-[#9FB0C3]">Off by default · Manual toggle only</span>
                </div>
              </div>
              <input
                type="checkbox"
                checked={preferences.audioEnabled}
                onChange={(e) => updatePreference('audioEnabled', e.target.checked)}
                className="w-4 h-4 accent-[#FDB913] cursor-pointer"
              />
            </div>
          </div>

          {/* Reset Demo Data Button */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <span className="text-[11px] text-[#9FB0C3]">
              Need to start clean?
            </span>
            <button
              type="button"
              onClick={handleResetData}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-semibold transition-colors"
            >
              <RotateCcw size={14} />
              <span>Reset Demo Data</span>
            </button>
          </div>

        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#9FB0C3]">
          <span>Tip: Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded font-mono text-[10px]">Ctrl+,</kbd> anytime</span>
          <button
            type="button"
            onClick={closePanel}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
