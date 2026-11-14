import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import TrustStrip from './components/TrustStrip';
import Hero from './sections/Hero';
import About from './sections/About';
import Schedule from './sections/Schedule';
import Guests from './sections/Guests';
import Register from './sections/Register';
import Venue from './sections/Venue';
import Gallery from './sections/Gallery';
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
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900 relative selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden font-['Poppins']">
      {/* Subtle Intro Animation */}
      <Intro />

      {/* Top Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[2.5px] z-50 bg-amber-600 origin-left pointer-events-none transition-transform duration-75 ease-out"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />

      {/* Global Navigation Header */}
      <Navbar />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Main Sections */}
      <main className="w-full relative z-10">
        <Hero />
        <TrustStrip />
        <About />
        <Schedule />
        <Guests />
        <Register />
        <Venue />
        <Gallery />
        <Closing />
      </main>
    </div>
  );
}
