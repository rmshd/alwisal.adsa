import React from 'react';

// Flat Vector Art System - 21 Icon Shapes in ONE Consistent Style

export function KitabIcon({ className = "w-8 h-8", color = "#FFC93C" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 36C12 33 20 34 24 37C28 34 36 33 44 36V14C36 11 28 12 24 15C20 12 12 11 4 14V36Z" fill={color} />
      <path d="M24 15V37" stroke="#1E1F22" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M10 21C14 19 18 19 21 21" stroke="#1E1F22" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M27 21C30 19 34 19 38 21" stroke="#1E1F22" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function RihalIcon({ className = "w-8 h-8", color = "#2F6BFF" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Wooden Quran Stand Crossed Legs */}
      <path d="M8 38L24 22L40 38H33L24 29L15 38H8Z" fill={color} />
      <path d="M8 14L24 30L40 14H33L24 23L15 14H8Z" fill={color} />
      <circle cx="24" cy="26" r="2.5" fill="#FFC93C" />
    </svg>
  );
}

export function QalamIcon({ className = "w-8 h-8", color = "#FFC93C" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M38 6L42 10L14 38L6 42L10 34L38 6Z" fill={color} />
      <path d="M10 34L14 38" stroke="#1E1F22" strokeWidth="2" />
      <path d="M6 42L11 37" stroke="#1E1F22" strokeWidth="1.5" />
    </svg>
  );
}

export function InkpotIcon({ className = "w-8 h-8", color = "#1B3A8A" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 10H32V16H16V10Z" fill="#6CB4FF" />
      <path d="M10 16H38L42 38C42 41 39 42 36 42H12C9 42 6 41 6 38L10 16Z" fill={color} />
      <circle cx="24" cy="28" r="5" fill="#FFC93C" />
    </svg>
  );
}

export function MasjidIcon({ className = "w-8 h-8", color = "#27A66B" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Kerala Style Sloped Roof Dars Mosque */}
      <path d="M24 6L6 20H42L24 6Z" fill={color} />
      <path d="M24 16L10 26H38L24 16Z" fill="#FFC93C" />
      <rect x="12" y="26" width="24" height="16" fill="#F4F2EC" />
      <path d="M20 42V32C20 30 22 28 24 28C26 28 28 30 28 32V42H20Z" fill={color} />
      <circle cx="24" cy="4" r="2" fill="#FFC93C" />
    </svg>
  );
}

export function MinaretIcon({ className = "w-8 h-8", color = "#6CB4FF" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4L18 12H30L24 4Z" fill="#FFC93C" />
      <rect x="19" y="12" width="10" height="4" fill="#2F6BFF" />
      <rect x="20" y="16" width="8" height="26" fill={color} />
      <path d="M16 42H32V44H16V42Z" fill="#FFC93C" />
      <circle cx="24" cy="22" r="1.5" fill="#1E1F22" />
      <circle cx="24" cy="30" r="1.5" fill="#1E1F22" />
    </svg>
  );
}

export function LampIcon({ className = "w-8 h-8", color = "#FFC93C" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4V14" stroke="#A9ABB3" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 14H32L36 28L24 38L12 28L16 14Z" fill={color} />
      <circle cx="24" cy="26" r="4" fill="#F0584B" />
      <path d="M24 38V44" stroke="#FFC93C" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function CompassIcon({ className = "w-8 h-8", color = "#2F6BFF" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="18" fill={color} />
      <circle cx="24" cy="24" r="14" fill="#F4F2EC" />
      {/* Needle pointing north */}
      <polygon points="24,14 28,24 24,22" fill="#F0584B" />
      <polygon points="24,34 28,24 24,22" fill="#1B3A8A" />
      <polygon points="24,14 20,24 24,22" fill="#F0584B" />
      <polygon points="24,34 20,24 24,22" fill="#1B3A8A" />
      <circle cx="24" cy="24" r="2.5" fill="#FFC93C" />
    </svg>
  );
}

export function StarIcon({ className = "w-8 h-8", color = "#FFC93C" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 8-Point Rub el Hizb Geometric Star */}
      <rect x="12" y="12" width="24" height="24" rx="2" fill={color} />
      <rect x="12" y="12" width="24" height="24" rx="2" transform="rotate(45 24 24)" fill={color} opacity="0.85" />
      <circle cx="24" cy="24" r="3.5" fill="#1E1F22" />
    </svg>
  );
}

export function PalmIcon({ className = "w-8 h-8", color = "#27A66B" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Trunk */}
      <path d="M22 44C23 34 27 26 24 18" stroke="#FFC93C" strokeWidth="3" strokeLinecap="round" />
      {/* Palm Fronds */}
      <path d="M24 18C16 16 8 20 6 26C11 26 18 24 24 18Z" fill={color} />
      <path d="M24 18C20 12 12 10 6 12C10 16 16 18 24 18Z" fill={color} />
      <path d="M24 18C24 9 20 4 14 2C18 7 21 13 24 18Z" fill={color} />
      <path d="M24 18C26 9 32 4 38 4C34 8 29 13 24 18Z" fill={color} />
      <path d="M24 18C30 14 38 14 42 18C36 20 30 20 24 18Z" fill={color} />
      <path d="M24 18C32 18 38 24 40 30C35 28 29 25 24 18Z" fill={color} />
      {/* Coconuts */}
      <circle cx="22" cy="19" r="2" fill="#FFC93C" />
      <circle cx="25" cy="20" r="2" fill="#FFC93C" />
    </svg>
  );
}

export function BananaLeafIcon({ className = "w-8 h-8", color = "#27A66B" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 40C16 38 28 26 38 8C30 18 16 28 8 40Z" fill={color} />
      <path d="M38 8C26 14 16 26 10 38" stroke="#1E1F22" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M26 20L20 18" stroke="#1E1F22" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <path d="M21 26L15 24" stroke="#1E1F22" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function DatesIcon({ className = "w-8 h-8", color = "#F0584B" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 6V18" stroke="#27A66B" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="18" cy="18" r="5" fill={color} />
      <circle cx="28" cy="19" r="5" fill={color} />
      <circle cx="23" cy="26" r="5.5" fill="#FFC93C" />
      <circle cx="16" cy="32" r="5" fill={color} />
      <circle cx="27" cy="34" r="5" fill={color} />
      <circle cx="22" cy="40" r="4.5" fill="#E85DA0" />
    </svg>
  );
}

export function TasbihIcon({ className = "w-8 h-8", color = "#FFC93C" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="20" r="14" stroke={color} strokeWidth="3" strokeDasharray="3 3" />
      <circle cx="24" cy="34" r="3" fill="#F0584B" />
      <path d="M24 37V44" stroke="#F0584B" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M22 44H26" stroke="#F0584B" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function TeaGlassIcon({ className = "w-8 h-8", color = "#F0584B" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Kerala Dars Chai Glass */}
      <path d="M14 12H34L30 38H18L14 12Z" fill="#2A2C31" stroke="#F4F2EC" strokeWidth="2" />
      {/* Tea Fill */}
      <path d="M16 22H32L29.5 36H18.5L16 22Z" fill={color} />
      {/* Foam Top */}
      <rect x="15" y="19" width="18" height="3" rx="1.5" fill="#FFC93C" />
    </svg>
  );
}

export function BookStackIcon({ className = "w-8 h-8", color = "#2F6BFF" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Book 1 (Bukhari) */}
      <rect x="10" y="34" width="28" height="8" rx="2" fill="#1B3A8A" />
      <rect x="36" y="35" width="2" height="6" fill="#FFC93C" />
      {/* Book 2 */}
      <rect x="12" y="24" width="26" height="8" rx="2" fill={color} />
      <rect x="36" y="25" width="2" height="6" fill="#F4F2EC" />
      {/* Book 3 */}
      <rect x="14" y="14" width="22" height="8" rx="2" fill="#27A66B" />
      <rect x="34" y="15" width="2" height="6" fill="#FFC93C" />
    </svg>
  );
}

export function SunriseIcon({ className = "w-8 h-8", color = "#FFC93C" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Small Dawn Sun over horizon */}
      <path d="M8 34H40" stroke="#6CB4FF" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M14 34A10 10 0 0 1 34 34Z" fill={color} />
      <line x1="24" y1="14" x2="24" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="13" y1="20" x2="16" y2="23" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="35" y1="20" x2="32" y2="23" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function FlowerA({ className = "w-8 h-8", color = "#F0584B" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 5-Petal Red Blossom */}
      <circle cx="24" cy="14" r="7" fill={color} />
      <circle cx="34" cy="21" r="7" fill={color} />
      <circle cx="30" cy="33" r="7" fill={color} />
      <circle cx="18" cy="33" r="7" fill={color} />
      <circle cx="14" cy="21" r="7" fill={color} />
      <circle cx="24" cy="24" r="5" fill="#FFC93C" />
    </svg>
  );
}

export function FlowerB({ className = "w-8 h-8", color = "#FFC93C" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 8-Petal Yellow Kerala Star Flower */}
      <circle cx="24" cy="12" r="5" fill={color} />
      <circle cx="32" cy="16" r="5" fill={color} />
      <circle cx="36" cy="24" r="5" fill={color} />
      <circle cx="32" cy="32" r="5" fill={color} />
      <circle cx="24" cy="36" r="5" fill={color} />
      <circle cx="16" cy="32" r="5" fill={color} />
      <circle cx="12" cy="24" r="5" fill={color} />
      <circle cx="16" cy="16" r="5" fill={color} />
      <circle cx="24" cy="24" r="6" fill="#F0584B" />
    </svg>
  );
}

export function FlowerC({ className = "w-8 h-8", color = "#E85DA0" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 4-Petal Pink & Sky Blossom */}
      <circle cx="24" cy="14" r="8" fill={color} />
      <circle cx="34" cy="24" r="8" fill={color} />
      <circle cx="24" cy="34" r="8" fill={color} />
      <circle cx="14" cy="24" r="8" fill={color} />
      <circle cx="24" cy="24" r="5" fill="#6CB4FF" />
    </svg>
  );
}

export function LeafA({ className = "w-8 h-8", color = "#27A66B" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 36C12 20 24 10 36 12C36 28 24 38 12 36Z" fill={color} />
      <path d="M12 36C22 28 28 22 36 12" stroke="#1E1F22" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function LeafB({ className = "w-8 h-8", color = "#27A66B" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 40C16 32 20 18 40 8C30 28 22 34 8 40Z" fill={color} />
    </svg>
  );
}
