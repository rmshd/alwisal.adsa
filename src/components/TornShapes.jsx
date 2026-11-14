import React from 'react';

/**
 * TornPaperTicket: An authentic torn-edge paper card (yellow/amber)
 * for the countdown "XX DAYS TO GO".
 */
export function TornPaperTicket({ days, label = "DAYS TO GO", className = "" }) {
  return (
    <div className={`relative inline-block select-none rotate-[-1.5deg] hover:rotate-0 transition-transform duration-300 ${className}`}>
      {/* SVG Container with ripped paper silhouette */}
      <div className="relative bg-[#FFBA08] text-[#111318] px-7 py-5 sm:px-9 sm:py-6 shadow-[0_15px_30px_rgba(0,0,0,0.45)] [clip-path:polygon(0%_2%,3%_0%,7%_2%,12%_1%,16%_3%,21%_0%,26%_2%,31%_1%,37%_3%,42%_0%,48%_2%,54%_1%,59%_3%,65%_0%,71%_2%,77%_1%,83%_3%,88%_0%,93%_2%,98%_0%,100%_4%,98%_8%,100%_14%,99%_20%,100%_26%,98%_32%,100%_38%,99%_45%,100%_52%,98%_59%,100%_66%,99%_73%,100%_80%,98%_87%,100%_93%,98%_98%,94%_100%,89%_98%,84%_100%,79%_99%,74%_100%,68%_98%,63%_100%,57%_99%,51%_100%,46%_98%,40%_100%,35%_98%,29%_100%,23%_98%,17%_100%,11%_99%,6%_100%,1%_98%,0%_94%,2%_88%,0%_82%,1%_76%,0%_70%,2%_63%,0%_56%,1%_49%,0%_42%,2%_35%,0%_28%,1%_21%,0%_15%,2%_8%)]">
        {/* Subtle paper grain texture */}
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <span className="font-sans font-black text-5xl sm:text-6xl md:text-7xl leading-none tracking-tight text-[#0D0E12]">
            {days}
          </span>
          <span className="font-sans font-black text-xs sm:text-sm tracking-widest text-[#1A1D24] uppercase mt-1">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * RippedDateStrip: A vibrant red torn-edge horizontal banner
 * exactly matching the user's reference image.
 */
export function RippedDateStrip({ text, className = "" }) {
  return (
    <div className={`relative inline-block select-none ${className}`}>
      <div className="bg-[#E62E2D] text-white font-sans font-extrabold text-base sm:text-lg md:text-xl px-5 sm:px-7 py-2 sm:py-2.5 shadow-md tracking-tight [clip-path:polygon(0%_4%,2%_0%,5%_6%,8%_1%,12%_5%,17%_0%,22%_4%,27%_1%,32%_5%,38%_0%,43%_4%,49%_1%,55%_5%,61%_0%,67%_4%,73%_1%,79%_5%,85%_0%,90%_4%,95%_1%,99%_5%,97%_22%,100%_38%,97%_55%,100%_72%,98%_90%,100%_96%,97%_100%,92%_95%,86%_100%,81%_96%,75%_100%,69%_95%,63%_100%,57%_96%,51%_100%,45%_95%,39%_100%,33%_95%,27%_100%,21%_95%,15%_100%,9%_95%,4%_100%,0%_95%,3%_77%,0%_58%,3%_40%,0%_22%)]">
        {text}
      </div>
    </div>
  );
}

/**
 * ReferenceStyleEventHeader: The vertical bar + label + date strip + location
 * directly matching the user's reference image!
 */
export function ReferenceStyleEventHeader({
  editionLabel = "Annual Edition:",
  dateText = "May 01–07, 2026",
  locationText = "Alathurpadi Juma Masjid, Melmuri",
  className = "",
}) {
  return (
    <div className={`flex items-stretch gap-3 sm:gap-4 ${className}`}>
      {/* Crisp vertical white accent bar */}
      <div className="w-[3.5px] bg-white rounded-full shrink-0 shadow-sm" />

      {/* Info Stack */}
      <div className="flex flex-col justify-between py-0.5 gap-2">
        <span className="font-sans font-semibold text-xs sm:text-sm text-white/90 tracking-wide">
          {editionLabel}
        </span>

        {/* Red Ripped Date Strip */}
        <div>
          <RippedDateStrip text={dateText} />
        </div>

        <span className="font-sans font-medium text-xs sm:text-sm text-white/80 tracking-wide">
          {locationText}
        </span>
      </div>
    </div>
  );
}
