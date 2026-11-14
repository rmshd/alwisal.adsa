import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PatternBg from '../art/PatternBg';
import { getCurrentUser, logout } from '../lib/auth';
import { CAMP_FACTS } from '../config';
import { User, Award, Calendar, MapPin, Download, LogOut, CheckCircle2 } from 'lucide-react';

export default function DashboardPage() {
  const [user, setUser] = useState(getCurrentUser());
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) return null;

  return (
    <div className="w-full min-h-screen bg-[#0B1520] text-white pt-24 pb-20 relative font-['Poppins']">
      <PatternBg variant="dark" fadeMask />

      <div className="max-w-4xl mx-auto space-y-10 relative z-10" style={{ paddingInline: 'var(--gutter)' }}>

        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest font-bold text-[#F28A2E]">
              Delegate Pass Portal
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
              Welcome, {user.name}
            </h1>
            <p className="text-xs text-[#9FB0C3]">
              SUFFA Dars Graduate · Registered Delegate
            </p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold text-white border border-white/15 transition-colors self-start sm:self-auto cursor-pointer"
          >
            <LogOut size={14} />
            <span>Sign Out</span>
          </button>
        </div>

        {/* Digital Camp Pass Card */}
        <div className="bg-gradient-to-br from-[#121E2D] to-[#0E1724] border-2 border-[#FDB913]/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#FDB913] block">
                OFFICIAL ENTRY PASS · AL-WISAL 2026
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase text-white mt-0.5">
                {user.name}
              </h2>
              <p className="text-xs text-[#9FB0C3] mt-0.5 font-medium">
                {user.dars} · {user.district || 'Malappuram'}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-xs font-bold">
                <CheckCircle2 size={14} />
                <span>Status: {user.status || 'Confirmed'}</span>
              </span>
            </div>
          </div>

          {/* Pass Details Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="space-y-1">
              <span className="text-[#9FB0C3] block uppercase tracking-wider text-[10px]">Reference</span>
              <span className="text-white font-mono font-bold block">{user.ref || 'AW26-784219'}</span>
            </div>

            <div className="space-y-1">
              <span className="text-[#9FB0C3] block uppercase tracking-wider text-[10px]">Dates</span>
              <span className="text-white font-bold block">Dec 24 – 30, 2026</span>
            </div>

            <div className="space-y-1">
              <span className="text-[#9FB0C3] block uppercase tracking-wider text-[10px]">Venue</span>
              <span className="text-white font-bold block">Alathurpadi Dars</span>
            </div>

            <div className="space-y-1">
              <span className="text-[#9FB0C3] block uppercase tracking-wider text-[10px]">Boarding</span>
              <span className="text-[#FDB913] font-bold block">Full Residential</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <span className="text-[11px] text-[#9FB0C3]">
              Show this digital pass at the Alathurpadi reception desk on 24 Dec.
            </span>

            <button
              type="button"
              onClick={() => alert(`Pass downloaded for ${user.name} (${user.ref || 'AW26-784219'})`)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F28A2E] text-[#0B1520] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-md"
            >
              <Download size={15} />
              <span>Download Pass (PNG)</span>
            </button>
          </div>
        </div>

        {/* Quick Links for Student */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            to="/schedule"
            className="p-5 rounded-2xl bg-[#121E2D] border border-white/10 hover:border-[#F28A2E] transition-colors space-y-2 block"
          >
            <Calendar size={20} className="text-[#F28A2E]" />
            <h4 className="text-sm font-bold text-white">Full Schedule</h4>
            <p className="text-xs text-[#9FB0C3]">View 7-day dawn-to-dusk sessions breakdown.</p>
          </Link>

          <Link
            to="/guide"
            className="p-5 rounded-2xl bg-[#121E2D] border border-white/10 hover:border-[#FDB913] transition-colors space-y-2 block"
          >
            <MapPin size={20} className="text-[#FDB913]" />
            <h4 className="text-sm font-bold text-white">Transit Directions</h4>
            <p className="text-xs text-[#9FB0C3]">Airport, railway, and road route details.</p>
          </Link>

          <a
            href={CAMP_FACTS.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-[#121E2D] border border-white/10 hover:border-[#4FB6E6] transition-colors space-y-2 block"
          >
            <Award size={20} className="text-[#4FB6E6]" />
            <h4 className="text-sm font-bold text-white">Google Maps Pin</h4>
            <p className="text-xs text-[#9FB0C3]">Live GPS navigation to Alathurpadi Juma Masjid.</p>
          </a>
        </div>

      </div>
    </div>
  );
}
