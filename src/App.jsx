import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Vine from './art/Vine';
import Hero from './sections/Hero';
import About from './sections/About';
import Daily from './sections/Daily';
import Schedule from './sections/Schedule';
import Guests from './sections/Guests';
import Dars from './sections/Dars';
import Register from './sections/Register';
import Venue from './sections/Venue';
import Gallery from './sections/Gallery';
import Faq from './sections/Faq';
import Contact from './sections/Contact';
import Closing from './sections/Closing';
import { initMotion } from './lib/motion';

export default function App() {
  useEffect(() => {
    const lenis = initMotion();
    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] relative selection:bg-[var(--yellow)] selection:text-[var(--bg)] overflow-x-hidden">
      {/* Long winding Vine spine */}
      <Vine />

      {/* Global Navigation Header */}
      <Navbar />

      {/* Floating Quick WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* All 12 Sections */}
      <main className="w-full relative z-10">
        <Hero />
        <About />
        <Daily />
        <Schedule />
        <Guests />
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
