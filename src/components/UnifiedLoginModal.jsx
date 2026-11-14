import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Lock, ShieldCheck, Building2, UserCheck, ArrowRight } from 'lucide-react';

export default function UnifiedLoginModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg rounded-3xl bg-[#121E2D] border border-[#FDB913]/30 shadow-2xl p-6 sm:p-8 text-white overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FDB913]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#FDB913]/15 border border-[#FDB913]/30 flex items-center justify-center text-[#FDB913]">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-lg text-white">Al-Wisal Portal Access</h2>
              <p className="text-xs text-neutral-400">Select your destination portal</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Portal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-6 relative z-10">
          {/* Student Pass Portal */}
          <Link
            to="/login"
            onClick={onClose}
            className="group flex flex-col justify-between p-4 rounded-2xl border border-white/10 hover:border-[#FDB913]/50 bg-white/5 hover:bg-[#FDB913]/10 transition-all shadow-sm hover:scale-[1.02]"
          >
            <div>
              <div className="w-9 h-9 rounded-xl bg-[#FDB913]/15 border border-[#FDB913]/30 flex items-center justify-center text-[#FDB913] mb-3">
                <UserCheck className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm text-white group-hover:text-[#FDB913]">
                Student &amp; Pass Portal
              </h3>
              <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                Access your digital pass, QR check-in, and camp documents.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold text-[#FDB913]">
              <span>Enter Portal</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Admin & Desk Portal */}
          <Link
            to="/admin/login"
            onClick={onClose}
            className="group flex flex-col justify-between p-4 rounded-2xl border border-white/10 hover:border-[#FDB913]/50 bg-white/5 hover:bg-[#FDB913]/10 transition-all shadow-sm hover:scale-[1.02]"
          >
            <div>
              <div className="w-9 h-9 rounded-xl bg-[#FDB913]/15 border border-[#FDB913]/30 flex items-center justify-center text-[#FDB913] mb-3">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm text-white group-hover:text-[#FDB913]">
                ADSA Admin Portal
              </h3>
              <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                Registration verification, check-in scanner, analytics &amp; export.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold text-[#FDB913]">
              <span>Admin Login</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>

        {/* SUFFA Dars Directory footer card */}
        <div className="mt-4 pt-4 border-t border-white/10 relative z-10 flex items-center justify-between">
          <Link
            to="/dars"
            onClick={onClose}
            className="flex items-center gap-2 text-xs text-neutral-300 hover:text-[#FDB913] transition-colors"
          >
            <Building2 className="w-4 h-4 text-[#FDB913]" />
            <span>Browse 39+ SUFFA Dars Directory</span>
          </Link>
          <span className="text-[10px] font-mono text-neutral-500">v1.0 (Demo Mode)</span>
        </div>
      </div>
    </div>
  );
}
