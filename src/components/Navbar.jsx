import React, { useState, useEffect } from 'react';
import Button from './Button';
import { smoothScrollTo } from '../lib/motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Camp', href: '#about', id: 'about' },
  { label: 'Programme', href: '#programme', id: 'programme' },
  { label: 'Guests', href: '#guests', id: 'guests' },
  { label: 'Venue', href: '#venue', id: 'venue' },
  { label: 'Gallery', href: '#gallery', id: 'gallery' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMobileBottomBar, setShowMobileBottomBar] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 40);
      setShowMobileBottomBar(currentScrollY > 400);

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const sectionIds = ['about', 'programme', 'guests', 'venue', 'gallery', 'register'];
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('mobile-menu-state', { detail: { open: mobileMenuOpen } })
      );
    }

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    smoothScrollTo(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 h-[72px] transition-all duration-300 font-['Poppins'] ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'bg-[var(--canvas)]/90 backdrop-blur-md border-b border-[var(--ink)]/10 shadow-sm'
            : 'bg-transparent'
        }`}
        style={{ paddingInline: 'var(--gutter)' }}
      >
        <div className="w-full h-full flex items-center justify-between max-w-[1400px] mx-auto">
          {/* Left: Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--yellow)] py-1"
            aria-label="ADSA Camp Homepage"
          >
            <img
              src="/images/logo.png"
              alt="ADSA Camp Logo"
              className="h-10 w-auto transition-transform duration-200 group-hover:scale-105"
            />
          </a>

          {/* Right: Desktop nav links + Register button */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            <ul className="flex items-center gap-1 list-none m-0 p-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`text-xs uppercase tracking-widest font-semibold px-3 py-2 transition-all relative ${
                        isActive
                          ? 'text-[var(--orange)] font-bold'
                          : 'text-[var(--ink)]/70 hover:text-[var(--ink)]'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[var(--orange)] rounded-full" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <Button
              href="#register"
              onClick={(e) => handleLinkClick(e, '#register')}
              variant="primary"
              className="h-[40px] px-6 text-xs font-bold"
            >
              Register
            </Button>
          </nav>

          {/* Mobile buttons */}
          <div className="flex items-center gap-3 lg:hidden">
            <Button
              href="#register"
              onClick={(e) => handleLinkClick(e, '#register')}
              variant="primary"
              className="h-[36px] px-4 text-[11px] font-bold sm:inline-flex hidden"
            >
              Register
            </Button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[var(--ink)] hover:text-[var(--orange)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--yellow)] cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-50 bg-[var(--canvas)] transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col h-full p-6 pt-20 font-['Poppins']">
          <div className="flex items-center justify-between pb-6 border-b border-[var(--ink)]/10">
            <img src="/images/logo.png" alt="ADSA Camp Logo" className="h-10 w-auto" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[var(--ink)] hover:text-[var(--orange)] cursor-pointer"
              aria-label="Close Menu"
            >
              <X size={24} strokeWidth={2} />
            </button>
          </div>

          <nav className="flex-1 py-8">
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block text-2xl uppercase tracking-wider font-extrabold text-[var(--ink)] hover:text-[var(--orange)] transition-colors py-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="pt-6 border-t border-[var(--ink)]/10 space-y-3">
            <Button
              href="#register"
              onClick={(e) => handleLinkClick(e, '#register')}
              variant="primary"
              className="w-full h-12 text-sm font-bold"
            >
              Register Now
            </Button>
            <p className="text-center text-xs text-[var(--muted)] tracking-wider uppercase font-semibold">
              Dec 20–26, 2026 · Alathurpadi
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-30 p-3 bg-[var(--canvas)]/95 backdrop-blur-md border-t border-[var(--ink)]/10 shadow-lg transition-transform duration-300 lg:hidden ${
          showMobileBottomBar && !mobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
          <div className="text-left leading-tight pl-2">
            <span className="block text-xs font-extrabold text-[var(--ink)] uppercase tracking-wider">ADSA Camp 2026</span>
            <span className="text-[10px] text-[var(--orange)] font-bold uppercase">Dec 20–26 · 7 Days</span>
          </div>
          <Button
            href="#register"
            onClick={(e) => handleLinkClick(e, '#register')}
            variant="primary"
            className="h-10 px-6 text-xs font-bold"
          >
            Register
          </Button>
        </div>
      </div>
    </>
  );
}
