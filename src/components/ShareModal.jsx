import React, { useState } from 'react';
import { X, Copy, Check, Share2, MessageCircle, ExternalLink } from 'lucide-react';
import { CAMP } from '../config';

export default function ShareModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.origin : 'https://alwisal.pages.dev';
  const shareText = `Al-Wisal '26 — A Transition & Leadership Camp\n"Towards the Beloved"\nDecember 24–30, 2026 at Alathurpadi Dars Campus, Malappuram.\n\nRegister now: ${currentUrl}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(`${shareText}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    "Al-Wisal '26 — Towards the Beloved | Transition & Leadership Camp at Alathurpadi Dars Campus, Dec 24-30, 2026."
  )}&url=${encodeURIComponent(currentUrl)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;

  // QR Code URL using free reliable QR API
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(currentUrl)}&bgcolor=12-30-45&color=253-185-19`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-md rounded-3xl bg-[#121E2D] border border-[#FDB913]/30 shadow-2xl p-6 sm:p-7 text-white overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute -top-20 -right-20 w-44 h-44 bg-[#FDB913]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#FDB913]/15 border border-[#FDB913]/30 flex items-center justify-center text-[#FDB913]">
              <Share2 className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-bold text-base text-[#FDB913]">Share Al-Wisal '26</h2>
              <p className="text-xs text-neutral-400">Invite fellow students to the camp</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Social Share Grid */}
        <div className="mt-5 space-y-4 relative z-10">
          <div className="grid grid-cols-3 gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 text-emerald-400 transition-all hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 mb-1" />
              <span className="text-[11px] font-semibold">WhatsApp</span>
            </a>

            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-sky-500/10 border border-sky-500/30 hover:bg-sky-500/20 text-sky-400 transition-all hover:scale-105"
            >
              <span className="text-lg font-bold mb-1">𝕏</span>
              <span className="text-[11px] font-semibold">Twitter / 𝕏</span>
            </a>

            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-blue-500/10 border border-blue-500/30 hover:bg-blue-500/20 text-blue-400 transition-all hover:scale-105"
            >
              <ExternalLink className="w-6 h-6 mb-1" />
              <span className="text-[11px] font-semibold">Facebook</span>
            </a>
          </div>

          {/* Copy Link Row */}
          <div className="flex items-center gap-2 p-2 rounded-2xl bg-white/5 border border-white/15">
            <input
              type="text"
              readOnly
              value={currentUrl}
              className="w-full bg-transparent px-2 text-xs text-neutral-300 font-mono focus:outline-none"
            />
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-xl bg-[#FDB913] hover:bg-[#FDB913]/90 text-[#0B1520] font-bold text-xs flex items-center gap-1 shrink-0 transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* QR Code */}
          <div className="pt-2 flex flex-col items-center justify-center text-center">
            <div className="p-2.5 rounded-2xl bg-[#0B1520] border border-[#FDB913]/30 shadow-inner">
              <img src={qrUrl} alt="Camp QR Code" className="w-28 h-28 object-contain rounded-lg" />
            </div>
            <p className="text-[11px] text-neutral-400 mt-2">Scan with camera to open on mobile</p>
          </div>
        </div>
      </div>
    </div>
  );
}
