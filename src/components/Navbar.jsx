import React, { useState, useEffect } from 'react';
import Button from './Button';
import { smoothScrollTo } from '../lib/motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'ക്യാമ്പ്', href: '#about', id: 'about' },
  { label: 'ദിനചര്യ', href: '#daily', id: 'daily' },
  { label: 'ഷെഡ്യൂൾ', href: '#schedule', id: 'schedule' },
  { label: 'അതിഥികൾ', href: '#guests', id: 'guests' },
  { label: 'ദർസുകൾ', href: '#dars', id: 'dars' },
  { label: 'ഗാലറി', href: '#gallery', id: 'gallery' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMobileBottomBar, setShowMobileBottomBar] = useState(false);

  // Handle scroll events for navbar style and hide/show direction
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolled state
      setIsScrolled(currentScrollY > 80);

      // Mobile bottom bar visibility (after hero)
      setShowMobileBottomBar(currentScrollY > 400);

      // Hide/Show navbar on scroll direction
      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY && !mobileMenuOpen) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
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

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['about', 'daily', 'schedule', 'guests', 'dars', 'gallery', 'register'];
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

  // Lock scroll when mobile menu is open & listen for Esc
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
            ? 'bg-[#0B0D12]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
        }`}
        style={{ paddingInline: 'var(--gutter)' }}
      >
        <div className="w-full h-full flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-3.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--yellow)] rounded-xl py-1 px-1.5"
            aria-label="ADSA ക്യാമ്പ് ഹോംപേജ്"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-[var(--yellow)]/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src="/images/logo.svg"
                alt="ADSA Logo"
                className="w-10 h-10 relative transition-transform duration-300 group-hover:scale-105 shrink-0"
                width="40"
                height="40"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl text-white tracking-tight leading-tight group-hover:text-[var(--yellow)] transition-colors">
                ADSA ക്യാമ്പ്
              </span>
              <span className="text-[10px] font-sora font-semibold text-[var(--sky)] tracking-widest uppercase leading-none">
                SUFFA DARS
              </span>
            </div>
          </a>

          {/* Desktop Nav Links (Hidden < 1024px) */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            <ul className="flex items-center gap-2 list-none m-0 p-1 rounded-full bg-white/[0.03] border border-white/[0.07] backdrop-blur-md">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id} className="relative">
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`relative font-body text-sm py-2 px-4 rounded-full transition-all duration-200 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--yellow)] ${
                        isActive
                          ? 'text-white font-semibold bg-white/10 shadow-inner'
                          : 'text-[var(--text)]/75 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-[var(--yellow)] shadow-[0_0_8px_#FFC93C] inline-block"
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
              className="h-[44px] px-6 text-xs tracking-wide"
            >
              രജിസ്റ്റർ ചെയ്യൂ
            </Button>
          </nav>

          {/* Mobile Hamburger Toggle (< 1024px) */}
          <div className="flex items-center gap-3 lg:hidden">
            <Button
              href="#register"
              onClick={(e) => handleLinkClick(e, '#register')}
              variant="primary"
              className="h-[38px] px-4 text-xs font-semibold sm:inline-flex hidden"
            >
              രജിസ്റ്റർ
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)]"
              aria-label={mobileMenuOpen ? 'മെനു അടയ്ക്കുക' : 'മെനു തുറക്കുക'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer (< 1024px) */}
      <div
        className={`fixed inset-0 z-50 bg-[var(--bg)] flex flex-col justify-between transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
        }`}
        style={{ padding: 'max(1.5rem, var(--gutter))' }}
        role="dialog"
        aria-modal="true"
        aria-label="മൊബൈൽ മെനു"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img src="/images/logo.svg" alt="ADSA Logo" className="w-9 h-9" />
            <span className="font-heading font-extrabold text-lg text-white">ADSA ക്യാമ്പ്</span>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)]"
            aria-label="മെനു അടയ്ക്കുക"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex flex-col justify-center gap-5 my-auto py-8">
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{ transitionDelay: `${idx * 40}ms` }}
              className={`font-heading text-2xl font-bold py-2 flex items-center justify-between border-b border-white/5 transition-all ${
                activeSection === link.id ? 'text-[var(--yellow)]' : 'text-white/90 hover:text-white'
              }`}
            >
              <span>{link.label}</span>
              <span className="text-xs font-sora text-[var(--sky)] font-normal">0{idx + 1}</span>
            </a>
          ))}
        </nav>

        {/* Drawer Footer CTA */}
        <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
          <Button
            href="#register"
            onClick={(e) => handleLinkClick(e, '#register')}
            variant="primary"
            className="w-full text-sm"
          >
            രജിസ്റ്റർ ചെയ്യൂ (സൗജന്യം)
          </Button>
          <p className="text-center text-xs text-[var(--muted)] font-sora">
            SUFFA Dars Network · Dr. C K Abdurahman Faizy
          </p>
        </div>
      </div>

      {/* Sticky Bottom Mobile Bar (shows after Hero) */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-30 p-3 bg-[#1E1F22]/95 backdrop-blur-md border-t border-white/10 transition-transform duration-300 md:hidden flex items-center justify-between gap-3 ${
          showMobileBottomBar && !mobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex flex-col pl-2">
          <span className="text-xs font-semibold text-[var(--yellow)]">രജിസ്ട്രേഷൻ സൗജന്യം</span>
          <span className="text-[11px] text-[var(--muted)]">സീറ്റുകൾ പരിമിതം</span>
        </div>
        <Button
          href="#register"
          onClick={(e) => handleLinkClick(e, '#register')}
          variant="primary"
          className="h-[42px] px-5 text-xs shrink-0"
        >
          രജിസ്റ്റർ ചെയ്യൂ
        </Button>
      </div>
    </>
  );
}
