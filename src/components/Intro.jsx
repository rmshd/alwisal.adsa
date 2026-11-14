import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import AlWisalMark from '../art/AlWisalMark';
import PetalCircle from '../art/PetalCircle';
import NestedDiamonds from '../art/NestedDiamonds';
import Star8 from '../art/Star8';
import Checker from '../art/Checker';

export default function Intro({ onComplete }) {
  const containerRef = useRef(null);
  const markRef = useRef(null);
  const tilesRef = useRef(null);
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

      // 0 to 0.8s: mark appears / draws
      tl.fromTo(
        markRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.7, ease: 'power2.out' }
      );

      // 0.8 to 1.3s: mini mosaic tiles assemble around mark
      tl.fromTo(
        tilesRef.current.children,
        { opacity: 0, scale: 0.5, y: 15 },
        { opacity: 1, scale: 1, y: 0, stagger: 0.08, duration: 0.45, ease: 'back.out(1.5)' },
        '-=0.2'
      );

      // 1.4 to 1.8s: whole container fades out
      tl.to(containerRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.inOut',
        delay: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-[var(--ink)] flex flex-col items-center justify-center p-6 select-none"
      onClick={() => {
        sessionStorage.setItem('adsa_intro_seen', 'true');
        setVisible(false);
        if (onComplete) onComplete();
      }}
    >
      <div className="flex flex-col items-center max-w-sm text-center">
        {/* Kufic wordmark */}
        <div ref={markRef} className="w-56 md:w-64 mb-6">
          <AlWisalMark variant="hero" color="var(--yellow)" className="w-full h-auto" />
        </div>

        {/* 4 Mini assembling geometric tiles */}
        <div ref={tilesRef} className="grid grid-cols-4 gap-2 w-48 mb-6">
          <div className="aspect-square bg-[var(--surface)] p-1">
            <PetalCircle className="w-full h-full" />
          </div>
          <div className="aspect-square bg-[var(--surface)] p-1">
            <NestedDiamonds className="w-full h-full" />
          </div>
          <div className="aspect-square bg-[var(--surface)] p-1">
            <Star8 className="w-full h-full" />
          </div>
          <div className="aspect-square bg-[var(--surface)] p-1">
            <Checker className="w-full h-full" />
          </div>
        </div>

        <p className="text-xs uppercase tracking-widest text-[var(--muted)] font-['Poppins']">
          ADSA CAMP 2026 · AL-WISAL
        </p>
      </div>

      <button
        type="button"
        onClick={() => {
          sessionStorage.setItem('adsa_intro_seen', 'true');
          setVisible(false);
          if (onComplete) onComplete();
        }}
        className="absolute bottom-8 text-[11px] text-[var(--muted)] hover:text-white uppercase tracking-widest"
      >
        Click to enter
      </button>
    </div>
  );
}
