import React, { useState } from 'react';
import { X, Bell, Check, Calendar, Clock, Trash2 } from 'lucide-react';
import { useReminders } from '../context/ReminderContext';
import { CAMP } from '../config';

export default function ReminderModal() {
  const { isReminderModalOpen, closeReminderModal, reminders, addReminder, removeReminder } = useReminders();
  const [selectedTiming, setSelectedTiming] = useState('1_day_before');
  const [note, setNote] = useState('');
  const [justAdded, setJustAdded] = useState(false);

  if (!isReminderModalOpen) return null;

  const handleCreate = (e) => {
    e.preventDefault();
    const timingMap = {
      '1_day_before': '1 Day Before Camp (Dec 23, 2026 at 9:00 AM)',
      '2_hours_before': '2 Hours Before (Dec 24, 2026 at 7:00 AM)',
      'morning_of': 'Morning of Camp (Dec 24, 2026 at 6:00 AM)',
      'registration_deadline': 'Before Registration Deadline (Dec 9, 2026)',
    };

    addReminder({
      title: "Al-Wisal '26 — Towards the Beloved",
      timing: timingMap[selectedTiming] || selectedTiming,
      preset: selectedTiming,
      note: note.trim() || 'Alathurpadi Dars Campus, Melmuri, Malappuram',
      date: '2026-12-24T09:00:00+05:30',
    });

    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      setNote('');
    }, 1500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeReminderModal();
      }}
    >
      <div className="relative w-full max-w-lg rounded-3xl bg-[#121E2D] border border-[#FDB913]/30 shadow-2xl p-6 sm:p-7 text-white overflow-hidden">
        {/* Glow */}
        <div className="absolute -top-20 -right-20 w-44 h-44 bg-[#FDB913]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#FDB913]/15 border border-[#FDB913]/30 flex items-center justify-center text-[#FDB913]">
              <Bell className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-bold text-base text-[#FDB913]">Camp Reminders</h2>
              <p className="text-xs text-neutral-400">Never miss the transition & leadership camp</p>
            </div>
          </div>
          <button
            onClick={closeReminderModal}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-5 space-y-5 relative z-10">
          <form onSubmit={handleCreate} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                Notify Me
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { id: '1_day_before', label: '1 Day Before', desc: 'Dec 23, 2026' },
                  { id: 'morning_of', label: 'Morning of Camp', desc: 'Dec 24, 6:00 AM' },
                  { id: '2_hours_before', label: '2 Hours Before', desc: 'Dec 24, 7:00 AM' },
                  { id: 'registration_deadline', label: 'Deadline Alert', desc: 'Dec 9, 2026' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedTiming(opt.id)}
                    className={`flex flex-col text-left p-3 rounded-xl border text-xs transition-all ${
                      selectedTiming === opt.id
                        ? 'border-[#FDB913] bg-[#FDB913]/15 text-[#FDB913]'
                        : 'border-white/10 bg-white/5 text-neutral-300 hover:border-white/20'
                    }`}
                  >
                    <span className="font-semibold">{opt.label}</span>
                    <span className="text-[11px] text-neutral-400 mt-0.5">{opt.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                Personal Note (optional)
              </label>
              <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="e.g. Bring registration ticket, notebooks, and travel kit"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FDB913]"
              />
            </div>

            <button
              type="submit"
              disabled={justAdded}
              className="w-full py-2.5 rounded-full bg-[#FDB913] hover:bg-[#FDB913]/90 text-[#0B1520] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-md shadow-[#FDB913]/20"
            >
              {justAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Reminder Saved!</span>
                </>
              ) : (
                <>
                  <Bell className="w-4 h-4" />
                  <span>Set This Reminder</span>
                </>
              )}
            </button>
          </form>

          {/* Active reminders list */}
          {reminders.length > 0 && (
            <div className="pt-4 border-t border-white/10">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                Your Saved Reminders ({reminders.length})
              </h3>
              <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                {reminders.map((r) => (
                  <div
                    key={r.id}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs"
                  >
                    <div>
                      <div className="font-semibold text-neutral-200">{r.timing}</div>
                      {r.note && <div className="text-[11px] text-neutral-400 truncate max-w-xs">{r.note}</div>}
                    </div>
                    <button
                      onClick={() => removeReminder(r.id)}
                      className="p-1 rounded text-neutral-400 hover:text-red-400 hover:bg-white/5 transition-colors"
                      title="Remove reminder"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
