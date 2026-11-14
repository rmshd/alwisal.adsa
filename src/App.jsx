import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import TrustStrip from './components/TrustStrip';
import Vine from './art/Vine';
import Hero from './sections/Hero';
import About from './sections/About';
import Daily from './sections/Daily';
import Schedule from './sections/Schedule';
import Guests from './sections/Guests';
import Organisers from './sections/Organisers';
import Dars from './sections/Dars';
import Register from './sections/Register';
import Venue from './sections/Venue';
import Gallery from './sections/Gallery';
import Faq from './sections/Faq';
import Contact from './sections/Contact';
import Closing from './sections/Closing';
import { initMotion } from './lib/motion';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const lenis = initMotion();

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(Math.min(1, Math.max(0, window.scrollY / totalScroll)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] relative selection:bg-[var(--yellow)] selection:text-[var(--bg)] overflow-x-hidden">
      {/* Thin Top Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[2.5px] z-50 bg-[var(--yellow)] origin-left pointer-events-none transition-transform duration-75 ease-out"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />

      {/* Subtle Film Grain Texture Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50 bg-grain select-none"
        aria-hidden="true"
      />

      {/* Long winding Vine spine */}
      <Vine />

      {/* Global Navigation Header */}
      <Navbar />

      {/* Floating Quick WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Main Sections */}
      <main className="w-full relative z-10">
        <Hero />
        <TrustStrip />
        <About />
        <Daily />
        <Schedule />
        <Guests />
        <Organisers />
        <Dars />
        <Register />
        <Venue />
        <Gallery />
        <Faq />
        <Contact />
        <Closing />
      </main>
    </div>
  );
}
