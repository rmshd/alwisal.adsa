import React, { useState, useEffect } from 'react';
import Button from './Button';
import { smoothScrollTo } from '../lib/motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Daily Routine', href: '#daily', id: 'daily' },
  { label: 'Schedule', href: '#schedule', id: 'schedule' },
  { label: 'Scholars', href: '#guests', id: 'guests' },
  { label: 'Dars Network', href: '#dars', id: 'dars' },
  { label: 'Campus Venue', href: '#venue', id: 'venue' },
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
      setIsScrolled(currentScrollY > 80);
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
    const sectionIds = ['about', 'daily', 'schedule', 'guests', 'dars', 'venue', 'register'];
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
        className={`fixed top-0 left-0 right-0 z-40 h-[76px] transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'bg-[#08090C]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]'
            : 'bg-transparent'
        }`}
        style={{ paddingInline: 'var(--gutter)' }}
      >
        <div className="w-full h-full flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-3.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] rounded-xl py-1 px-1.5"
            aria-label="ADSA Camp Homepage"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-[var(--gold)]/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src="/images/logo.svg"
                alt="ADSA Logo"
                className="w-10 h-10 relative transition-transform duration-300 group-hover:scale-105 shrink-0"
                width="40"
                height="40"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="font-heading font-extrabold text-lg sm:text-xl text-white tracking-tight leading-tight group-hover:text-[var(--gold)] transition-colors">
                  ADSA CAMP
                </span>
                <span className="font-arabic text-sm text-[var(--gold)] opacity-80">
                  مخيم أَدْسَا
                </span>
              </div>
              <span className="text-[10px] font-sans font-semibold text-[var(--sky)] tracking-widest uppercase leading-none">
                SUFFA DARS NETWORK
              </span>
            </div>
          </a>

          {/* Desktop Nav Links (Hidden < 1024px) */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            <ul className="flex items-center gap-1.5 list-none m-0 p-1.5 rounded-full bg-white/[0.03] border border-white/[0.07] backdrop-blur-md">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id} className="relative">
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`relative font-sans text-xs font-semibold py-2 px-4 rounded-full transition-all duration-200 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] ${
                        isActive
                          ? 'text-white bg-white/10 shadow-inner'
                          : 'text-[var(--text)]/75 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] shadow-[0_0_8px_#DFB15B] inline-block"
                          aria-hidden="true"
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Desktop CTA */}
            <Button
              href="#register"
              onClick={(e) => handleLinkClick(e, '#register')}
              variant="primary"
              className="h-[44px] px-6 text-xs tracking-wider uppercase font-bold"
            >
              Register Free
            </Button>
          </nav>

          {/* Mobile Toggle (< 1024px) */}
          <div className="flex items-center gap-3 lg:hidden">
            <Button
              href="#register"
              onClick={(e) => handleLinkClick(e, '#register')}
              variant="primary"
              className="h-[38px] px-4 text-xs font-bold sm:inline-flex hidden"
            >
              Register
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-[#08090C] flex flex-col justify-between transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
        }`}
        style={{ padding: 'max(1.5rem, var(--gutter))' }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img src="/images/logo.svg" alt="ADSA Logo" className="w-10 h-10" />
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg text-white">ADSA CAMP 2026</span>
              <span className="font-arabic text-xs text-[var(--gold)]">المخيم السنوي للطلبة</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
            aria-label="Close menu"
          >
            <X size={20} strokeWidth={1.75} />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex flex-col justify-center gap-4 my-auto py-8">
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{ transitionDelay: `${idx * 40}ms` }}
              className={`font-heading text-2xl font-bold py-2 flex items-center justify-between border-b border-white/5 transition-all ${
                activeSection === link.id ? 'text-[var(--gold)]' : 'text-white/90 hover:text-white'
              }`}
            >
              <span>{link.label}</span>
              <span className="text-xs font-sans text-[var(--sky)] font-normal">0{idx + 1}</span>
            </a>
          ))}
        </nav>

        {/* Drawer Footer CTA */}
        <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
          <Button
            href="#register"
            onClick={(e) => handleLinkClick(e, '#register')}
            variant="primary"
            className="w-full text-sm uppercase tracking-wider font-bold"
          >
            Register Now (Free Entry)
          </Button>
          <p className="text-center text-xs text-[var(--muted)] font-sans">
            SUFFA Dars Network · Dr. C K Abdurahman Faizy Aripra
          </p>
        </div>
      </div>

      {/* Sticky Bottom Mobile Bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-30 p-3 bg-[#08090C]/95 backdrop-blur-md border-t border-white/10 transition-transform duration-300 md:hidden flex items-center justify-between gap-3 ${
          showMobileBottomBar && !mobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex flex-col pl-2">
          <span className="text-xs font-bold text-[var(--gold)]">Admission Free</span>
          <span className="text-[11px] text-[var(--muted)]">Limited Seats Available</span>
        </div>
        <Button
          href="#register"
          onClick={(e) => handleLinkClick(e, '#register')}
          variant="primary"
          className="h-[42px] px-5 text-xs font-bold shrink-0"
        >
          Register Free
        </Button>
      </div>
    </>
  );
}
