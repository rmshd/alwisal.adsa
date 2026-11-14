import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PreferencesModal from './components/PreferencesModal';
import { PreferencesProvider } from './context/PreferencesContext';
import { I18nProvider } from './context/I18nContext';
import { ReminderProvider } from './context/ReminderContext';
import { initMotion } from './lib/motion';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DarsPage from './pages/DarsPage';
import SchedulePage from './pages/SchedulePage';
import GuidePage from './pages/GuidePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminPage from './pages/AdminPage';
import NotFoundPage from './pages/NotFoundPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainLayout() {
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
    <div className="min-h-screen bg-[#0B1520] text-white relative selection:bg-[#FDB913] selection:text-[#0B1520] overflow-x-hidden font-['Poppins'] flex flex-col justify-between">
      <ScrollToTop />

      {/* Top Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[2.5px] z-50 bg-[#FDB913] origin-left pointer-events-none transition-transform duration-75 ease-out"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />

      {/* Global Navbar */}
      <Navbar />

      {/* Preferences Dialog */}
      <PreferencesModal />

      {/* Main Routed Content */}
      <main className="w-full flex-grow relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/dars" element={<DarsPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/guide" element={<GuidePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <PreferencesProvider>
      <I18nProvider>
        <ReminderProvider>
          <BrowserRouter>
            <MainLayout />
          </BrowserRouter>
        </ReminderProvider>
      </I18nProvider>
    </PreferencesProvider>
  );
}
