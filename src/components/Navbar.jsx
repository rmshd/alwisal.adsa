import React, { useState, useEffect } from 'react';
import Button from './Button';
import AlWisalMark from '../art/AlWisalMark';
import { smoothScrollTo } from '../lib/motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Camp', href: '#about', id: 'about' },
  { label: 'Routine', href: '#routine', id: 'routine' },
  { label: 'Programme', href: '#programme', id: 'programme' },
  { label: 'Guests', href: '#guests', id: 'guests' },
  { label: 'Dars', href: '#dars', id: 'dars' },
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
      setIsScrolled(currentScrollY > 60);
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
    const sectionIds = ['about', 'routine', 'programme', 'guests', 'dars', 'gallery', 'register'];
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
            ? 'bg-[var(--ink)]/90 backdrop-blur-md border-b border-white/10'
            : 'bg-transparent'
        }`}
        style={{ paddingInline: 'var(--gutter)' }}
      >
        <div className="w-full h-full flex items-center justify-between max-w-[1400px] mx-auto">
          {/* Left: AlWisalMark nav variant + ADSA CAMP */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--yellow)] py-1"
            aria-label="ADSA Camp Homepage"
          >
            <AlWisalMark
              variant="nav"
              color="var(--orange)"
              className="w-24 sm:w-28 h-auto transition-transform duration-200 group-hover:scale-105"
            />
            <div className="flex flex-col border-l border-white/15 pl-3">
              <span className="font-bold text-xs sm:text-sm text-white tracking-widest leading-none">
                ADSA CAMP
              </span>
              <span className="text-[10px] font-medium text-[var(--muted)] tracking-wider mt-0.5">
                2026 EDITION
              </span>
            </div>
          </a>

          {/* Right: desktop nav links + orange Register button */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            <ul className="flex items-center gap-1 list-none m-0 p-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`text-xs uppercase tracking-widest font-semibold px-3 py-2 transition-colors ${
                        isActive
                          ? 'text-[var(--yellow)]'
                          : 'text-[var(--muted)] hover:text-white'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <Button
              href="#register"
              onClick={(e) => handleLinkClick(e, '#register')}
              variant="primary"
              className="h-[38px] px-5 text-xs font-bold"
            >
              Register
            </Button>
          </nav>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              href="#register"
              onClick={(e) => handleLinkClick(e, '#register')}
              variant="primary"
              className="h-[34px] px-4 text-[11px] font-bold sm:inline-flex hidden"
            >
              Register
            </Button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--yellow)]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-50 bg-[var(--ink)] transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col h-full p-6 pt-24 font-['Poppins']">
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <AlWisalMark variant="nav" color="var(--yellow)" className="w-28 h-auto" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white/80 hover:text-white"
              aria-label="Close Menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex-1 py-8">
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block text-xl uppercase tracking-wider font-bold text-white hover:text-[var(--yellow)] transition-colors py-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <Button
              href="#register"
              onClick={(e) => handleLinkClick(e, '#register')}
              variant="primary"
              className="w-full h-12 text-sm font-bold"
            >
              Register Now
            </Button>
            <p className="text-center text-xs text-[var(--muted)] tracking-wider uppercase">
              Free Registration · Dec 20–26, 2026
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom CTA */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-30 p-3 bg-[var(--ink)]/95 border-t border-white/10 transition-transform duration-300 lg:hidden ${
          showMobileBottomBar && !mobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="text-left leading-tight pl-2">
            <span className="block text-xs font-bold text-white uppercase tracking-wider">ADSA Camp 2026</span>
            <span className="text-[10px] text-[var(--yellow)] font-medium">Dec 20–26 · Free Entry</span>
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
