import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Search,
  Share2,
  Globe,
  Sun,
  Moon,
  Laptop,
  SlidersHorizontal,
  Compass,
  LogIn,
  User,
  Menu,
  X,
  Calendar,
  Building2,
  BookOpen,
} from 'lucide-react';
import AudioPill from './AudioPill';
import ReminderPillBadge from './ReminderPillBadge';
import SearchModal from './SearchModal';
import ShareModal from './ShareModal';
import UnifiedLoginModal from './UnifiedLoginModal';
import PreferencesModal from './PreferencesModal';
import { usePreferences } from '../context/PreferencesContext';
import { useI18n } from '../context/I18nContext';
import { getCurrentUser } from '../lib/auth';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [user, setUser] = useState(getCurrentUser());
  const location = useLocation();

  const { preferences, setPreferences, isPanelOpen, openPanel, closePanel } = usePreferences();
  const { lang, setLang, t, isRTL } = useI18n();

  useEffect(() => {
    const handleAuthChange = (e) => setUser(e.detail);
    window.addEventListener('alwisal_auth_changed', handleAuthChange);
    return () => window.removeEventListener('alwisal_auth_changed', handleAuthChange);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleRegisterClick = (e) => {
    const regEl = document.getElementById('register');
    if (regEl) {
      e.preventDefault();
      regEl.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname !== '/') {
      window.location.href = '/#register';
    }
  };

  return (
    <>
      {/* FLOATING PILL NAVBAR - DESKTOP & TABLET */}
      <header
        role="banner"
        className="fixed top-4 left-1/2 -translate-x-1/2 z-40 hidden md:inline-flex items-center gap-2 lg:gap-2.5 px-3.5 py-1.5 rounded-full bg-[#121E2D]/85 backdrop-blur-md shadow-2xl shadow-black/40 border border-[#FDB913]/35 hover:border-[#FDB913]/60 transition-all duration-300 w-auto max-w-fit"
      >
        {/* Brand / Logo + Title */}
        <Link
          to="/"
          className="flex items-center gap-2 group focus:outline-none rounded-full px-1 py-0.5 hover:opacity-90 transition-opacity shrink-0"
          aria-label="Al-Wisal '26 Home"
        >
          <div className="relative w-7 h-7 rounded-full overflow-hidden flex items-center justify-center bg-[#0B1520] p-1 shadow-inner border border-[#FDB913]/30 group-hover:border-[#FDB913] transition-colors">
            <img
              src="/images/favicon.png"
              alt="Al-Wisal Logo"
              className="w-5 h-5 object-contain"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-['Poppins'] font-bold text-xs tracking-wide text-white leading-tight">
              AL-WISAL ’26
            </span>
            <span className="font-arabic text-[10px] text-[#FDB913] font-medium leading-none">
              الوصال
            </span>
          </div>
        </Link>

        {/* Subtle Vertical Hairline Separator */}
        <div className="w-[1px] h-4 bg-white/15 mx-0.5 shrink-0" />

        {/* Tools Cluster: Search, Share, Audio, Reminders, Lang, Theme, Settings, Guide, Login, Register */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          {/* Global Search Button */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 rounded-full text-neutral-300 hover:text-[#FDB913] hover:bg-white/5 transition-colors focus:outline-none"
            aria-label="Search camp details (Cmd+K)"
            title="Search camp details (Cmd+K)"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Share Hub Button */}
          <button
            onClick={() => setIsShareOpen(true)}
            className="p-2 rounded-full text-neutral-300 hover:text-[#FDB913] hover:bg-white/5 transition-colors focus:outline-none"
            aria-label="Share Al-Wisal '26"
            title="Share Al-Wisal '26"
          >
            <Share2 className="w-4 h-4" />
          </button>

          {/* Background Audio / Nasheed Pill */}
          <AudioPill />

          {/* Camp Reminders Pill */}
          <ReminderPillBadge />

          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setIsLangOpen(!isLangOpen);
                setIsThemeOpen(false);
              }}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:bg-white/5 transition-colors focus:outline-none"
              aria-label="Change Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#FDB913]" />
              <span className="uppercase text-[11px] font-semibold">{lang}</span>
            </button>

            {isLangOpen && (
              <div className="absolute top-full mt-2.5 right-0 w-32 py-1.5 rounded-2xl bg-[#121E2D] shadow-2xl border border-[#FDB913]/30 flex flex-col z-50 animate-scale-in">
                <button
                  onClick={() => {
                    setLang('en');
                    setIsLangOpen(false);
                  }}
                  className={`px-3 py-1.5 text-xs text-left hover:bg-[#FDB913]/15 transition-colors ${
                    lang === 'en' ? 'font-bold text-[#FDB913]' : 'text-neutral-300'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => {
                    setLang('ml');
                    setIsLangOpen(false);
                  }}
                  className={`px-3 py-1.5 text-xs text-left hover:bg-[#FDB913]/15 transition-colors ${
                    lang === 'ml' ? 'font-bold text-[#FDB913]' : 'text-neutral-300'
                  }`}
                >
                  മലയാളം
                </button>
                <button
                  onClick={() => {
                    setLang('ar');
                    setIsLangOpen(false);
                  }}
                  className={`px-3 py-1.5 text-xs text-left font-arabic hover:bg-[#FDB913]/15 transition-colors ${
                    lang === 'ar' ? 'font-bold text-[#FDB913]' : 'text-neutral-300'
                  }`}
                >
                  العربية
                </button>
              </div>
            )}
          </div>

          {/* Theme Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setIsThemeOpen(!isThemeOpen);
                setIsLangOpen(false);
              }}
              className="p-2 rounded-full text-neutral-300 hover:text-[#FDB913] hover:bg-white/5 transition-colors focus:outline-none"
              aria-label="Toggle Theme"
              title="Toggle Theme"
            >
              {preferences.theme === 'light' ? (
                <Sun className="w-4 h-4 text-[#FDB913]" />
              ) : preferences.theme === 'system' ? (
                <Laptop className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4 text-[#FDB913]" />
              )}
            </button>

            {isThemeOpen && (
              <div className="absolute top-full mt-2.5 right-0 w-28 py-1.5 rounded-2xl bg-[#121E2D] shadow-2xl border border-[#FDB913]/30 flex flex-col z-50 animate-scale-in">
                <button
                  onClick={() => {
                    setPreferences({ theme: 'dark' });
                    setIsThemeOpen(false);
                  }}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs text-neutral-300 hover:bg-[#FDB913]/15 transition-colors"
                >
                  <Moon className="w-3.5 h-3.5 text-[#FDB913]" /> Dark
                </button>
                <button
                  onClick={() => {
                    setPreferences({ theme: 'light' });
                    setIsThemeOpen(false);
                  }}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs text-neutral-300 hover:bg-[#FDB913]/15 transition-colors"
                >
                  <Sun className="w-3.5 h-3.5 text-amber-500" /> Light
                </button>
                <button
                  onClick={() => {
                    setPreferences({ theme: 'system' });
                    setIsThemeOpen(false);
                  }}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs text-neutral-300 hover:bg-[#FDB913]/15 transition-colors"
                >
                  <Laptop className="w-3.5 h-3.5" /> System
                </button>
              </div>
            )}
          </div>

          {/* Global Preferences / Settings Button */}
          <button
            onClick={openPanel}
            className="p-2 rounded-full text-neutral-300 hover:text-[#FDB913] hover:bg-white/5 transition-colors focus:outline-none"
            aria-label="Preferences (Ctrl+,)"
            title="Preferences (Ctrl+,)"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>

          {/* Interactive Guide Link */}
          <Link
            to="/guide"
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-semibold text-[#FDB913] hover:text-[#FDB913]/80 bg-[#FDB913]/10 hover:bg-[#FDB913]/20 border border-[#FDB913]/30 transition-colors focus:outline-none"
            title="Interactive Guide & Experience Manual"
          >
            <Compass className="w-3.5 h-3.5" />
            <span className="hidden xl:inline">Guide</span>
          </Link>

          {/* Unified Login Button */}
          {user ? (
            <Link
              to={user.role === 'admin' ? '/admin' : '/dashboard'}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-white hover:text-[#FDB913] bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              title="Open Portal"
            >
              <User className="w-3.5 h-3.5 text-[#FDB913]" />
              <span className="hidden lg:inline">{user.name?.split(' ')[0]}</span>
            </Link>
          ) : (
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-neutral-200 hover:text-[#FDB913] hover:bg-white/5 transition-colors border border-white/10"
              title="Portal Login (Student & Admin)"
            >
              <LogIn className="w-3.5 h-3.5 text-[#FDB913]" />
              <span className="hidden lg:inline">Login</span>
            </button>
          )}

          {/* Register Action CTA Button (Gold Pill) */}
          <a
            href="#register"
            onClick={handleRegisterClick}
            className="px-4 py-1.5 rounded-full text-xs font-semibold bg-[#FDB913] hover:bg-[#FDB913]/90 text-[#0B1520] shadow-sm hover:shadow transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Register
          </a>
        </div>
      </header>

      {/* MOBILE COMPACT FLOATING BAR */}
      <header className="fixed top-3 left-4 right-4 z-40 md:hidden flex items-center justify-between px-3.5 py-2 rounded-full bg-[#121E2D]/90 backdrop-blur-md shadow-2xl border border-[#FDB913]/35 text-white">
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/favicon.png" alt="Logo" className="w-6 h-6 object-contain" />
          <span className="font-['Poppins'] font-bold text-xs text-white">AL-WISAL ’26</span>
        </Link>

        <div className="flex items-center gap-1">
          <AudioPill compact={true} />
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-1.5 rounded-full text-neutral-300 hover:text-[#FDB913]"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-full text-neutral-300 hover:text-[#FDB913]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-16 z-40 md:hidden p-5 rounded-3xl bg-[#121E2D] border border-[#FDB913]/30 shadow-2xl space-y-4 text-white animate-scale-in">
          <nav className="flex flex-col space-y-2 text-sm font-semibold">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-white/5"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-white/5"
            >
              About Camp &amp; Ustad
            </Link>
            <Link
              to="/schedule"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-white/5"
            >
              7-Day Schedule
            </Link>
            <Link
              to="/dars"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-white/5"
            >
              SUFFA Dars Directory
            </Link>
            <Link
              to="/guide"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-white/5 text-[#FDB913]"
            >
              Interactive Guide
            </Link>
          </nav>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsLoginModalOpen(true);
              }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 text-xs text-neutral-200"
            >
              <LogIn className="w-3.5 h-3.5 text-[#FDB913]" />
              <span>Portal Login</span>
            </button>

            <a
              href="#register"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleRegisterClick(e);
              }}
              className="px-5 py-2 rounded-full bg-[#FDB913] text-[#0B1520] font-bold text-xs"
            >
              Register Now
            </a>
          </div>
        </div>
      )}

      {/* Global Modals */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
      <UnifiedLoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      <PreferencesModal isOpen={isPanelOpen} onClose={closePanel} />
    </>
  );
}
