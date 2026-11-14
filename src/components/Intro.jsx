import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Intro({ onComplete }) {
  const containerRef = useRef(null);
  const markRef = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Only run if not previously shown in this session
    const seen = sessionStorage.getItem('adsa_intro_seen');
    if (seen) {
      setVisible(false);
      if (onComplete) onComplete();
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem('adsa_intro_seen', 'true');
          setVisible(false);
          if (onComplete) onComplete();
        },
      });

      // 0 to 0.7s: logo gently reveals
      tl.fromTo(
        markRef.current,
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 0.7, ease: 'power2.out' }
      );

      // 0.8 to 1.3s: container fades smoothly
      tl.to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        delay: 0.4,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-[#FAF9F6] flex flex-col items-center justify-center p-6 select-none"
      onClick={() => {
        sessionStorage.setItem('adsa_intro_seen', 'true');
        setVisible(false);
        if (onComplete) onComplete();
      }}
    >
      <div ref={markRef} className="flex flex-col items-center max-w-sm text-center space-y-4">
        {/* Brand logo */}
        <img
          src="/images/logo.png"
          alt="ADSA Camp"
          className="h-14 w-auto object-contain"
        />

        <div className="space-y-1">
          <p className="font-['Noto_Serif_Arabic'] text-lg text-amber-800 font-medium" dir="rtl">
            مُخَيَّمُ أَدْسَا العِلْمِيُّ السَّنَوِيُّ
          </p>
          <p className="text-xs uppercase tracking-widest font-semibold text-slate-500 font-['Poppins']">
            ADSA CAMP 2026 · ALATHURPADI
          </p>
        </div>
      </div>
    </div>
  );
}
