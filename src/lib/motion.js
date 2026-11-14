import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

let lenisInstance = null;

export function isReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function initMotion() {
  if (typeof window === 'undefined') return null;

  if (isReducedMotion()) {
    return null;
  }

  if (lenisInstance) return lenisInstance;

  try {
    lenisInstance = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenisInstance.on('scroll', ScrollTrigger.update);

    const tickerCb = (time) => {
      lenisInstance.raf(time * 1000);
    };

    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    return lenisInstance;
  } catch (err) {
    console.warn('Lenis init warning:', err);
    return null;
  }
}

export function getLenis() {
  return lenisInstance;
}

export function smoothScrollTo(target, options = {}) {
  if (typeof window === 'undefined') return;

  if (isReducedMotion() || !lenisInstance) {
    if (typeof target === 'string') {
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    return;
  }

  lenisInstance.scrollTo(target, {
    offset: options.offset ?? -72,
    duration: options.duration ?? 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    ...options,
  });
}

/**
 * useReveal hook:
 * Animates child elements with reveal-up (opacity 0->1, y 40->0, 0.8s, power3.out)
 * triggered when 85% in viewport.
 */
export function useReveal(targetRef, options = {}) {
  useEffect(() => {
    if (isReducedMotion() || !targetRef.current) return;

    const ctx = gsap.context(() => {
      const targets = options.selector
        ? targetRef.current.querySelectorAll(options.selector)
        : targetRef.current.children.length > 0
        ? targetRef.current.children
        : targetRef.current;

      gsap.fromTo(
        targets,
        {
          opacity: 0,
          y: options.y ?? 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: options.duration ?? 0.8,
          ease: 'power3.out',
          stagger: options.stagger ?? 0.08,
          scrollTrigger: {
            trigger: targetRef.current,
            start: options.start ?? 'top 85%',
            once: true,
          },
        }
      );
    }, targetRef);

    return () => ctx.revert();
  }, [targetRef, options.selector, options.start, options.y, options.duration, options.stagger]);
}

/**
 * <Reveal> wrapper component
 */
export function Reveal({
  children,
  className = '',
  selector,
  stagger = 0.08,
  y = 40,
  duration = 0.8,
  start = 'top 85%',
  as: Component = 'div',
  ...props
}) {
  const containerRef = useRef(null);

  useReveal(containerRef, { selector, stagger, y, duration, start });

  return React.createElement(
    Component,
    {
      ref: containerRef,
      className,
      ...props,
    },
    children
  );
}
