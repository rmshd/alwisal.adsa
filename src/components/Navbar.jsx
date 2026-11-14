import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AlWisalMark from '../art/AlWisalMark';
import Button from './Button';
import { usePreferences } from '../context/PreferencesContext';
import { useT } from '../context/I18nContext';
import { getCurrentUser } from '../lib/auth';
import { Menu, X, SlidersHorizontal, User, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(getCurrentUser());
  const location = useLocation();

  const { openPanel } = usePreferences();
  const { t } = useT();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 40);

      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY && !mobileMenuOpen) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    const handleAuthChange = (e) => {
      setUser(e.detail);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('alwisal_auth_changed', handleAuthChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('alwisal_auth_changed', handleAuthChange);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: t('navHome'), path: '/' },
    { label: t('navAbout'), path: '/about' },
    { label: t('navSchedule'), path: '/schedule' },
    { label: t('navDars'), path: '/dars' },
    { label: t('navGuide'), path: '/guide' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 h-[72px] transition-transform duration-300 font-['Poppins'] ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'bg-[#0B1520]/95 backdrop-blur-md border-b border-white/10 shadow-lg'
            : 'bg-[#0B1520]/60 backdrop-blur-sm'
        }`}
        style={{ paddingInline: 'var(--gutter)' }}
      >
        <div className="w-full h-full flex items-center justify-between max-w-[1400px] mx-auto">
          {/* Brand Link */}
          <Link
            to="/"
            className="flex items-center group focus-visible:outline-none"
            aria-label="Al-Wisal Home"
          >
            <AlWisalMark variant="nav" color="#F28A2E" secondaryColor="#FDB913" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            <ul className="flex items-center gap-1 list-none m-0 p-0">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`text-xs uppercase tracking-widest font-bold px-3 py-2 transition-colors ${
                        isActive
                          ? 'text-[#FDB913]'
                          : 'text-[#9FB0C3] hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Quick Actions */}
            <div className="flex items-center gap-2.5 border-l border-white/15 pl-4">
              {/* Preferences Button */}
              <button
                type="button"
                onClick={openPanel}
                className="p-2 text-[#9FB0C3] hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                title="Preferences (Ctrl+,)"
                aria-label="Open Preferences"
              >
                <SlidersHorizontal size={18} />
              </button>

              {/* Login / Dashboard Link */}
              {user ? (
                <Link
                  to={user.role === 'admin' ? '/admin' : '/dashboard'}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-xs font-bold text-white border border-white/15 transition-colors"
                >
                  <User size={14} className="text-[#FDB913]" />
                  <span>{user.role === 'admin' ? 'Admin Portal' : 'My Pass'}</span>
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="text-xs uppercase tracking-wider font-bold text-[#9FB0C3] hover:text-white px-3 py-2 transition-colors"
                >
                  {t('navLogin')}
                </Link>
              )}

              {/* Primary Register Button */}
              <Button
                href="/#register"
                variant="primary"
                className="h-9 px-5 text-xs font-bold bg-[#F28A2E] text-[#0B1520] hover:brightness-110"
              >
                {t('navRegister')}
              </Button>
            </div>
          </nav>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={openPanel}
              className="p-2 text-[#9FB0C3] hover:text-white"
              aria-label="Open Preferences"
            >
              <SlidersHorizontal size={20} />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/80 hover:text-white focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-[#0B1520] transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full p-6 pt-20">
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <AlWisalMark variant="nav" color="#F28A2E" secondaryColor="#FDB913" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white/80 hover:text-white"
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex-1 py-8">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="block text-2xl uppercase tracking-wider font-extrabold text-white hover:text-[#FDB913] transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="pt-6 border-t border-white/10 space-y-3">
            {user ? (
              <Link
                to={user.role === 'admin' ? '/admin' : '/dashboard'}
                className="w-full h-12 flex items-center justify-center rounded-full bg-white/10 text-white font-bold text-sm border border-white/15"
              >
                {user.role === 'admin' ? 'Open Admin Portal' : 'My Pass Dashboard'}
              </Link>
            ) : (
              <Link
                to="/login"
                className="w-full h-12 flex items-center justify-center rounded-full bg-white/10 text-white font-bold text-sm border border-white/15"
              >
                Student / Admin Login
              </Link>
            )}

            <Button
              href="/#register"
              variant="primary"
              className="w-full h-12 text-sm font-bold bg-[#F28A2E] text-[#0B1520]"
            >
              {t('navRegister')}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
