import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Calendar, User, HelpCircle, School, ArrowRight } from 'lucide-react';
import { getSchedule, getSpeakers, getFAQs, getDarsList } from '../lib/store';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  const schedule = getSchedule();
  const speakers = getSpeakers();
  const faqs = getFAQs();
  const darsList = getDarsList();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent handles toggle
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchingSessions = q
    ? schedule.filter(
        (s) =>
          s.title?.toLowerCase().includes(q) ||
          s.speaker?.toLowerCase().includes(q) ||
          s.description?.toLowerCase().includes(q)
      )
    : [];

  const matchingSpeakers = q
    ? speakers.filter(
        (sp) =>
          sp.name?.toLowerCase().includes(q) ||
          sp.role?.toLowerCase().includes(q) ||
          sp.topic?.toLowerCase().includes(q)
      )
    : [];

  const matchingFAQs = q
    ? faqs.filter(
        (f) =>
          f.q?.toLowerCase().includes(q) ||
          f.a?.toLowerCase().includes(q)
      )
    : [];

  const matchingDars = q
    ? darsList.filter(
        (d) =>
          d.name?.toLowerCase().includes(q) ||
          d.place?.toLowerCase().includes(q) ||
          d.district?.toLowerCase().includes(q)
      )
    : [];

  const totalMatches =
    matchingSessions.length + matchingSpeakers.length + matchingFAQs.length + matchingDars.length;

  const handleSelect = (hash) => {
    onClose();
    if (hash.startsWith('/')) {
      window.location.href = hash;
    } else {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else window.location.href = `/${hash}`;
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/75 backdrop-blur-md animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-xl rounded-3xl bg-[#121E2D] border border-[#FDB913]/30 shadow-2xl p-5 text-white overflow-hidden">
        {/* Search bar */}
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-2xl bg-white/5 border border-white/10 focus-within:border-[#FDB913]">
          <Search className="w-5 h-5 text-[#FDB913]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sessions, scholars, Dars, FAQs... (Press Esc to close)"
            className="w-full bg-transparent text-sm text-white placeholder-neutral-400 focus:outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-neutral-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-white/10 text-neutral-400">
              ESC
            </kbd>
          )}
        </div>

        {/* Results */}
        <div className="mt-4 max-h-96 overflow-y-auto space-y-4 pr-1">
          {!query && (
            <div className="py-8 text-center text-xs text-neutral-400">
              Type keywords like <span className="text-[#FDB913]">"Bukhari"</span>,{' '}
              <span className="text-[#FDB913]">"Faizy"</span>,{' '}
              <span className="text-[#FDB913]">"Melmuri"</span>, or{' '}
              <span className="text-[#FDB913]">"Schedule"</span>.
            </div>
          )}

          {query && totalMatches === 0 && (
            <div className="py-8 text-center text-xs text-neutral-400">
              No results found for &ldquo;{query}&rdquo;.
            </div>
          )}

          {/* Sessions */}
          {matchingSessions.length > 0 && (
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#FDB913] mb-1.5 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>Sessions ({matchingSessions.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchingSessions.slice(0, 4).map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleSelect('#schedule')}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-[#FDB913]/10 border border-white/5 hover:border-[#FDB913]/30 text-left transition-colors group"
                  >
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-[#FDB913]">
                        {s.title}
                      </div>
                      <div className="text-[11px] text-neutral-400">
                        {s.day} · {s.time} · {s.speaker}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#FDB913] transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Speakers */}
          {matchingSpeakers.length > 0 && (
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#FDB913] mb-1.5 flex items-center gap-1">
                <User className="w-3 h-3" />
                <span>Scholars & Guests ({matchingSpeakers.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchingSpeakers.slice(0, 4).map((sp) => (
                  <button
                    key={sp.id}
                    onClick={() => handleSelect('/about')}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-[#FDB913]/10 border border-white/5 hover:border-[#FDB913]/30 text-left transition-colors group"
                  >
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-[#FDB913]">
                        {sp.name}
                      </div>
                      <div className="text-[11px] text-neutral-400">{sp.role}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#FDB913] transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Dars List */}
          {matchingDars.length > 0 && (
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#FDB913] mb-1.5 flex items-center gap-1">
                <School className="w-3 h-3" />
                <span>SUFFA Dars Network ({matchingDars.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchingDars.slice(0, 4).map((d) => (
                  <button
                    key={d.id}
                    onClick={() => handleSelect('/dars')}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-[#FDB913]/10 border border-white/5 hover:border-[#FDB913]/30 text-left transition-colors group"
                  >
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-[#FDB913]">
                        {d.name}
                      </div>
                      <div className="text-[11px] text-neutral-400">
                        {d.place}, {d.district} · {d.mudarris}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#FDB913] transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* FAQs */}
          {matchingFAQs.length > 0 && (
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#FDB913] mb-1.5 flex items-center gap-1">
                <HelpCircle className="w-3 h-3" />
                <span>FAQs ({matchingFAQs.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchingFAQs.slice(0, 3).map((f) => (
                  <button
                    key={f.id}
                    onClick={() => handleSelect('#faq')}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-[#FDB913]/10 border border-white/5 hover:border-[#FDB913]/30 text-left transition-colors group"
                  >
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-[#FDB913]">
                        {f.q}
                      </div>
                      <div className="text-[11px] text-neutral-400 truncate max-w-sm">{f.a}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#FDB913] transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
