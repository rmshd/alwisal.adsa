import React, { useState, useEffect } from 'react';
import Button from './Button';
import { smoothScrollTo } from '../lib/motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Camp', href: '#about', id: 'about' },
  { label: 'Programme', href: '#programme', id: 'programme' },
  { label: 'Scholars', href: '#guests', id: 'guests' },
  { label: 'Venue', href: '#venue', id: 'venue' },
  { label: 'Gallery', href: '#gallery', id: 'gallery' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          isScrolled
            ? 'bg-white/85 backdrop-blur-md border-b border-slate-200/70 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
            : 'bg-transparent'
        }`}
        style={{ paddingInline: 'var(--gutter)' }}
      >
        <div className="w-full h-full flex items-center justify-between max-w-6xl mx-auto">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-3 group focus-visible:outline-none"
            aria-label="ADSA Camp"
          >
            <img
              src="/images/logo.png"
              alt="ADSA Camp Logo"
              className="h-10 w-auto object-contain transition-transform group-hover:scale-102"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            <ul className="flex items-center gap-6 list-none m-0 p-0">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-amber-700 font-semibold'
                          : 'text-slate-600 hover:text-slate-900'
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
              className="h-10 px-5 text-xs font-semibold"
            >
              Register
            </Button>
          </nav>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <Button
              href="#register"
              onClick={(e) => handleLinkClick(e, '#register')}
              variant="primary"
              className="h-9 px-4 text-xs font-semibold"
            >
              Register
            </Button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-50 bg-[#FAF9F6] transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full p-6 pt-20">
          <div className="flex items-center justify-between pb-6 border-b border-slate-200">
            <img src="/images/logo.png" alt="ADSA Camp Logo" className="h-9 w-auto" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-slate-700 hover:text-slate-900"
              aria-label="Close Menu"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="flex-1 py-8">
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block text-xl font-medium text-slate-800 hover:text-amber-700 transition-colors py-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="pt-6 border-t border-slate-200 space-y-3">
            <Button
              href="#register"
              onClick={(e) => handleLinkClick(e, '#register')}
              variant="primary"
              className="w-full h-11 text-sm font-semibold"
            >
              Register for Camp
            </Button>
            <p className="text-center text-xs text-slate-500 font-medium">
              December 20–26, 2026 · Alathurpadi
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
