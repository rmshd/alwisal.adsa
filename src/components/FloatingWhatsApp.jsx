import React, { useState, useEffect } from 'react';
import { CONFIG } from '../config';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!CONFIG.CONTACT?.whatsapp?.number) {
    return null;
  }

  return (
    <aside
      aria-label="WhatsApp Helpdesk"
      className={`fixed z-30 transition-all duration-300 ${
        isVisible ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-75 pointer-events-none'
      } bottom-6 right-5 md:right-8 flex items-center gap-3`}
    >
      {/* Label Pill on Desktop */}
      <span className="hidden lg:inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-medium shadow-md pointer-events-none select-none">
        WhatsApp Helpdesk
      </span>

      {/* Floating Button */}
      <a
        href={CONFIG.WHATSAPP_CHAT_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-none cursor-pointer"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.33C9.33 7.33 9.04 7.4 8.78 7.68C8.52 7.96 7.78 8.65 7.78 10.05C7.78 11.45 8.8 12.8 8.94 13C9.08 13.2 10.96 16.07 13.84 17.31C14.52 17.61 15.06 17.79 15.48 17.92C16.17 18.14 16.8 18.11 17.3 18.04C17.85 17.96 18.99 17.35 19.23 16.68C19.47 16 19.47 15.43 19.4 15.31C19.33 15.19 19.14 15.12 18.84 14.97C18.55 14.83 17.11 14.12 16.84 14.02C16.57 13.92 16.38 13.87 16.18 14.17C15.98 14.46 15.42 15.12 15.25 15.31C15.08 15.51 14.91 15.53 14.62 15.39C14.33 15.24 13.39 14.93 12.27 13.93C11.4 13.15 10.81 12.19 10.64 11.9C10.47 11.61 10.62 11.45 10.77 11.31C10.9 11.18 11.06 10.97 11.21 10.8C11.36 10.63 11.41 10.51 11.51 10.31C11.61 10.11 11.56 9.94 11.48 9.79C11.41 9.65 10.81 8.18 10.56 7.59C10.32 7.02 10.07 7.09 9.89 7.09C9.72 7.08 9.53 7.08 9.33 7.08L9.53 7.33Z" />
        </svg>
      </a>
    </aside>
  );
}
