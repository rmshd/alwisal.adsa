import React, { useState } from 'react';
import { CAMP_FACTS } from '../config';
import { X, Calendar as CalendarIcon, Download, ExternalLink, Check, Copy } from 'lucide-react';

export default function CalendarModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const eventTitle = `${CAMP_FACTS.name} '26 — ${CAMP_FACTS.tagline}`;
  const eventDesc = `A seven-day residential knowledge intensive organized by ADSA for graduating students of SUFFA Dars under Dr. C. K. Abdurahman Faizy Aripra.\n\nDates: Dec 24–30, 2026\nVenue: ${CAMP_FACTS.venueFull}\nWebsite: ${CAMP_FACTS.contact.website}`;
  const location = CAMP_FACTS.venueFull;

  // Google Calendar URL
  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    eventTitle
  )}&dates=20261224T033000Z/20261230T153000Z&details=${encodeURIComponent(
    eventDesc
  )}&location=${encodeURIComponent(location)}`;

  // Outlook URL
  const outlookUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(
    eventTitle
  )}&startdt=2026-12-24T09:00:00+05:30&enddt=2026-12-30T17:00:00+05:30&body=${encodeURIComponent(
    eventDesc
  )}&location=${encodeURIComponent(location)}`;

  // Download iCal (.ics)
  const downloadIcs = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//ADSA//Al-Wisal 2026//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:alwisal-2026-${Date.now()}@alathurpadidars.in`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
      'DTSTART;TZID=Asia/Kolkata:20261224T090000',
      'DTEND;TZID=Asia/Kolkata:20261230T170000',
      `SUMMARY:${eventTitle}`,
      `DESCRIPTION:${eventDesc.replace(/\n/g, '\\n')}`,
      `LOCATION:${location}`,
      'STATUS:CONFIRMED',
      'BEGIN:VALARM',
      'TRIGGER:-P1D',
      'ACTION:DISPLAY',
      'DESCRIPTION:Al-Wisal Camp commences tomorrow at Alathurpadi Dars',
      'END:VALARM',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'al-wisal-2026.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyDetails = () => {
    navigator.clipboard.writeText(`${eventTitle}\n${CAMP_FACTS.startDate} to ${CAMP_FACTS.endDate}\n${location}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-md bg-[#121E2D] border border-white/15 rounded-2xl p-6 text-white font-['Poppins'] shadow-2xl space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-[#FDB913]/15 text-[#FDB913] border border-[#FDB913]/30">
              <CalendarIcon size={18} />
            </span>
            <h3 className="text-base font-bold text-white">
              Add to Your Calendar
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-white/60 hover:text-white rounded-lg hover:bg-white/10"
          >
            <X size={18} />
          </button>
        </div>

        <div className="space-y-2 text-xs text-[#9FB0C3]">
          <p>
            Sync <strong className="text-white">Al-Wisal 2026</strong> directly to your preferred calendar platform with automated alarms.
          </p>
        </div>

        <div className="space-y-2.5">
          <a
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs transition-colors"
          >
            <span>Google Calendar (Web & Android)</span>
            <ExternalLink size={14} className="text-[#FDB913]" />
          </a>

          <button
            type="button"
            onClick={downloadIcs}
            className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#F28A2E]/15 hover:bg-[#F28A2E]/25 border border-[#F28A2E]/30 text-white font-semibold text-xs transition-colors cursor-pointer"
          >
            <span>Apple / Outlook / Samsung (.ics File)</span>
            <Download size={14} className="text-[#F28A2E]" />
          </button>

          <a
            href={outlookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs transition-colors"
          >
            <span>Outlook Live / Office 365</span>
            <ExternalLink size={14} className="text-[#4FB6E6]" />
          </a>
        </div>

        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-[#9FB0C3]">
          <button
            type="button"
            onClick={copyDetails}
            className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white cursor-pointer"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            <span>{copied ? 'Copied to clipboard' : 'Copy event summary'}</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-xs"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
