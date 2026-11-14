import React from 'react';
import PatternBg from '../art/PatternBg';
import { CAMP_FACTS } from '../config';
import { Link } from 'react-router-dom';
import { Compass, Calendar, Key, Bell, Globe, Plane, ShieldCheck, MapPin } from 'lucide-react';

export default function GuidePage() {
  return (
    <div className="w-full min-h-screen bg-[#0B1520] text-white pt-24 pb-20 relative font-['Poppins']">
      <PatternBg variant="dark" fadeMask />

      <div className="max-w-[1400px] mx-auto space-y-12 relative z-10" style={{ paddingInline: 'var(--gutter)' }}>

        {/* Header */}
        <div className="border-b border-white/10 pb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FDB913]/15 border border-[#FDB913]/30 text-[#FDB913] text-xs font-bold uppercase tracking-widest">
            Delegate User Manual
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            How to Use This Site & Transit Guide
          </h1>
          <p className="text-sm text-[#9FB0C3]">
            Essential steps to register, download your entry pass, sync schedules, and reach Alathurpadi Dars.
          </p>
        </div>

        {/* 6 Step Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-[#121E2D] border border-white/10 p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#F28A2E]/15 border border-[#F28A2E]/30 text-[#F28A2E] flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="text-base font-bold text-white">Online Registration</h3>
            <p className="text-xs text-[#9FB0C3] leading-relaxed">
              Fill out the registration form before 10 Dec 2026. Select your affiliated SUFFA Dars and enter your 10-digit mobile number.
            </p>
          </div>

          <div className="bg-[#121E2D] border border-white/10 p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FDB913]/15 border border-[#FDB913]/30 text-[#FDB913] flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="text-base font-bold text-white">Digital Pass Download</h3>
            <p className="text-xs text-[#9FB0C3] leading-relaxed">
              Upon approval, access your official digital camp pass with unique reference code (AW26-XXXXXX) via the My Pass dashboard.
            </p>
          </div>

          <div className="bg-[#121E2D] border border-white/10 p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#2B45D9]/20 border border-[#2B45D9]/40 text-[#4FB6E6] flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="text-base font-bold text-white">Calendar & Reminders</h3>
            <p className="text-xs text-[#9FB0C3] leading-relaxed">
              Export the 7-day schedule to Google Calendar or Apple iCal with 15-minute reminders so you never miss dawn sabaq.
            </p>
          </div>

          <div className="bg-[#121E2D] border border-white/10 p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold">
              4
            </div>
            <h3 className="text-base font-bold text-white">Language & Theme</h3>
            <p className="text-xs text-[#9FB0C3] leading-relaxed">
              Switch between English, Malayalam, and Arabic (RTL) anytime by pressing <kbd className="px-1.5 py-0.5 bg-white/10 rounded font-mono text-[10px]">Ctrl+,</kbd> or via the preferences panel.
            </p>
          </div>

          <div className="bg-[#121E2D] border border-white/10 p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-400 flex items-center justify-center font-bold">
              5
            </div>
            <h3 className="text-base font-bold text-white">Transit Coordination</h3>
            <p className="text-xs text-[#9FB0C3] leading-relaxed">
              Volunteer desks operate at Calicut Airport (CCJ) and Tirur Railway on 24 Dec. Coordinate directly with the helpline if needed.
            </p>
          </div>

          <div className="bg-[#121E2D] border border-white/10 p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-500/30 text-teal-400 flex items-center justify-center font-bold">
              6
            </div>
            <h3 className="text-base font-bold text-white">Student Login</h3>
            <p className="text-xs text-[#9FB0C3] leading-relaxed">
              Already registered? Login using your mobile number and password to view your allocated room, schedule notes, and download pass.
            </p>
          </div>

        </div>

        {/* Transit Guide Details */}
        <div className="bg-[#121E2D] border border-white/10 p-8 rounded-2xl space-y-6">
          <div className="border-b border-white/10 pb-4">
            <h2 className="text-xl font-bold uppercase text-white flex items-center gap-2">
              <Compass size={20} className="text-[#F28A2E]" />
              <span>Transit Guide (Alathurpadi Dars, Melmuri)</span>
            </h2>
            <p className="text-xs text-[#FDB913] mt-1">
              {CAMP_FACTS.transit.receptionNote}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#9FB0C3]">
            <div className="space-y-1">
              <span className="text-white font-bold block text-xs uppercase tracking-wider">By Air</span>
              <p>{CAMP_FACTS.transit.airport}</p>
            </div>
            <div className="space-y-1">
              <span className="text-white font-bold block text-xs uppercase tracking-wider">By Rail</span>
              <p>{CAMP_FACTS.transit.railway}</p>
            </div>
            <div className="space-y-1">
              <span className="text-white font-bold block text-xs uppercase tracking-wider">By Road</span>
              <p>{CAMP_FACTS.transit.road}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
