import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Search,
  Share2,
  Sun,
  Moon,
  Laptop,
  SlidersHorizontal,
  LogIn,
  User,
  Menu,
  X,
  Bell,
} from 'lucide-react';
import ReminderPillBadge from './ReminderPillBadge';
import SearchModal from './SearchModal';
import ShareModal from './ShareModal';
import UnifiedLoginModal from './UnifiedLoginModal';
import PreferencesModal from './PreferencesModal';
import { usePreferences } from '../context/PreferencesContext';
import { getCurrentUser } from '../lib/auth';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(getCurrentUser());
  const location = useLocation();

  const { preferences, setPreferences, isPanelOpen, openPanel, closePanel } = usePreferences();

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

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Camp', path: '/about' },
    { label: 'Schedule', path: '/schedule' },
    { label: 'SUFFA Dars', path: '/dars' },
  ];

  return (
    <>
      {/* CREATIVE FLOATING GLASS NAVBAR (DESKTOP & TABLET) */}
      <header
        role="banner"
        className="fixed top-4 inset-x-0 mx-auto z-40 hidden md:flex items-center justify-between max-w-5xl px-5 py-2 rounded-full bg-[#0B1520]/85 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.5)] border border-[#FDB913]/30 hover:border-[#FDB913]/50 transition-all duration-300"
      >
        {/* Left: Official Al-Wisal Logo image with light rounded pill so black text is clear */}
        <Link
          to="/"
          className="flex items-center shrink-0 focus:outline-none group"
          aria-label="Al-Wisal 2026 Home"
        >
          <div className="bg-white/95 hover:bg-white px-3.5 py-1 rounded-full shadow-sm flex items-center transition-all group-hover:scale-105">
            <img
              src="/images/logo.png"
              alt="Al-Wisal 2026 Logo"
              className="h-6 lg:h-7 w-auto object-contain"
            />
          </div>
        </Link>

        {/* Center: Clean Nav Links */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                  isActive
                    ? 'text-[#0B1520] bg-[#FDB913] font-bold shadow-sm'
                    : 'text-neutral-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Tools: Search, Share, Reminders, Theme, Preferences, Login, Register */}
        <div className="flex items-center gap-1.5 lg:gap-2 shrink-0">
          {/* Global Search */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 rounded-full text-neutral-300 hover:text-[#FDB913] hover:bg-white/5 transition-colors focus:outline-none"
            aria-label="Search camp details (Cmd+K)"
            title="Search camp details (Cmd+K)"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Share */}
          <button
            onClick={() => setIsShareOpen(true)}
            className="p-2 rounded-full text-neutral-300 hover:text-[#FDB913] hover:bg-white/5 transition-colors focus:outline-none"
            aria-label="Share Al-Wisal '26"
            title="Share Al-Wisal '26"
          >
            <Share2 className="w-4 h-4" />
          </button>

          {/* Camp Reminders */}
          <ReminderPillBadge compact={true} />

          {/* Theme Quick Toggle */}
          <button
            onClick={() =>
              setPreferences({
                theme: preferences.theme === 'dark' ? 'light' : 'dark',
              })
            }
            className="p-2 rounded-full text-neutral-300 hover:text-[#FDB913] hover:bg-white/5 transition-colors focus:outline-none"
            aria-label="Toggle Theme"
            title={`Switch to ${preferences.theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {preferences.theme === 'dark' ? (
              <Moon className="w-4 h-4 text-[#FDB913]" />
            ) : (
              <Sun className="w-4 h-4 text-amber-500" />
            )}
          </button>

          {/* Preferences Settings */}
          <button
            onClick={openPanel}
            className="p-2 rounded-full text-neutral-300 hover:text-[#FDB913] hover:bg-white/5 transition-colors focus:outline-none"
            aria-label="Preferences (Ctrl+,)"
            title="Preferences (Ctrl+,)"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>

          {/* Hairline divider */}
          <div className="w-[1px] h-4 bg-white/20 mx-1 shrink-0" />

          {/* Unified Login Button */}
          {user ? (
            <Link
              to={user.role === 'admin' ? '/admin' : '/dashboard'}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white hover:text-[#FDB913] bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              title="Open Portal"
            >
              <User className="w-3.5 h-3.5 text-[#FDB913]" />
              <span className="hidden xl:inline">{user.name?.split(' ')[0]}</span>
            </Link>
          ) : (
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-neutral-200 hover:text-[#FDB913] hover:bg-white/5 transition-colors border border-white/15"
              title="Portal Login"
            >
              <LogIn className="w-3.5 h-3.5 text-[#FDB913]" />
              <span>Login</span>
            </button>
          )}

          {/* Register Action CTA Button */}
          <a
            href="#register"
            onClick={handleRegisterClick}
            className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#FDB913] hover:bg-[#FDB913]/90 text-[#0B1520] shadow-md shadow-[#FDB913]/25 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Register
          </a>
        </div>
      </header>

      {/* MOBILE FLOATING BAR */}
      <header className="fixed top-3 inset-x-4 z-40 md:hidden flex items-center justify-between px-3.5 py-2 rounded-full bg-[#0B1520]/90 backdrop-blur-md shadow-2xl border border-[#FDB913]/35 text-white">
        <Link to="/" className="flex items-center">
          <div className="bg-white/95 px-2.5 py-0.5 rounded-full shadow-sm flex items-center">
            <img src="/images/logo.png" alt="Al-Wisal Logo" className="h-5 w-auto object-contain" />
          </div>
        </Link>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-1.5 rounded-full text-neutral-300 hover:text-[#FDB913]"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsLoginModalOpen(true)}
            className="p-1.5 rounded-full text-neutral-300 hover:text-[#FDB913]"
            aria-label="Login"
          >
            <LogIn className="w-4 h-4" />
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
              className="px-3.5 py-2 rounded-xl hover:bg-white/5 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2 rounded-xl hover:bg-white/5 transition-colors"
            >
              About Camp &amp; Ustad
            </Link>
            <Link
              to="/schedule"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2 rounded-xl hover:bg-white/5 transition-colors"
            >
              7-Day Academic Schedule
            </Link>
            <Link
              to="/dars"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2 rounded-xl hover:bg-white/5 transition-colors"
            >
              39+ SUFFA Dars Directory
            </Link>
          </nav>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsLoginModalOpen(true);
              }}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 text-xs text-neutral-200"
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
              className="px-5 py-2 rounded-full bg-[#FDB913] text-[#0B1520] font-bold text-xs shadow-md shadow-[#FDB913]/20"
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
