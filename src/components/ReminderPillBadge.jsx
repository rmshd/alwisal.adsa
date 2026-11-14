import React from 'react';
import { Bell } from 'lucide-react';
import { useReminders } from '../context/ReminderContext';

export default function ReminderPillBadge({ compact = false }) {
  const { openReminderModal, activeCount } = useReminders();

  return (
    <button
      onClick={() => openReminderModal()}
      className="relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:text-[#FDB913] hover:bg-white/5 border border-white/10 hover:border-[#FDB913]/30 transition-all focus:outline-none"
      title="Set Camp Reminders"
      aria-label="Camp Reminders"
    >
      <Bell className="w-3.5 h-3.5 text-[#FDB913]" />
      {!compact && <span className="hidden lg:inline text-[11px]">Reminders</span>}
      {activeCount > 0 && (
        <span className="w-4 h-4 rounded-full bg-[#FDB913] text-[#0B1520] font-bold text-[10px] flex items-center justify-center -ml-0.5">
          {activeCount}
        </span>
      )}
    </button>
  );
}
