import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot, User, MessageSquare } from 'lucide-react';
import { CAMP } from '../config';
import { getSchedule, getSpeakers, getFAQs } from '../lib/store';
import { useI18n } from '../context/I18nContext';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: "Assalamu Alaikum! I am the Al-Wisal '26 Assistant. Ask me anything about camp dates, registration, the Ustad, daily routine, or transit directions to Alathurpadi.",
    },
  ]);
  const messagesEndRef = useRef(null);
  const { lang } = useI18n();

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const schedule = getSchedule();
  const speakers = getSpeakers();
  const faqs = getFAQs();

  const getAssistantAnswer = (text) => {
    const q = text.toLowerCase().trim();

    // Check FAQs first
    for (const f of faqs) {
      if (q.includes(f.q.toLowerCase().slice(0, 15))) {
        return f.a;
      }
    }

    // Dates
    if (q.includes('when') || q.includes('date') || q.includes('time') || q.includes('എപ്പോൾ') || q.includes('തിയ്യതി') || q.includes('متى')) {
      return `Al-Wisal '26 will take place from December 24 to December 30, 2026 (7 days). Daily morning sessions commence after Fajr and Qur'an recitation at Alathurpadi Dars Campus.`;
    }

    // Venue
    if (q.includes('where') || q.includes('venue') || q.includes('place') || q.includes('location') || q.includes('സ്ഥലം') || q.includes('വേദി') || q.includes('أين') || q.includes('مكان')) {
      return `The camp venue is ${CAMP.venue}. It is located in Melmuri, Malappuram district, Kerala. You can easily reach it via Calicut Airport (CCJ) or Tirur / Kozhikode railway stations.`;
    }

    // Eligibility / Who can attend
    if (q.includes('who') || q.includes('eligible') || q.includes('attend') || q.includes('suffa') || q.includes('join') || q.includes('ആർക്ക്') || q.includes('പങ്കെടുക്കാം') || q.includes('من يحق')) {
      return `Al-Wisal '26 is curated specially for graduating students from SUFFA Dars (Alathurpadi Dars Students Union) moving into higher university education and professional careers. Total capacity is capped at 100 students.`;
    }

    // Ustad / Patron
    if (q.includes('ustad') || q.includes('faizy') || q.includes('patron') || q.includes('ഉസ്താദ്') || q.includes('ഫ ground') || q.includes('الشيخ')) {
      return `The Camp Patron is ${CAMP.patron}. He will lead the core spiritual mentoring and Hadith study (Sahih al-Bukhari) sessions every day during the camp.`;
    }

    // Registration & Fee
    if (q.includes('fee') || q.includes('register') || q.includes('cost') || q.includes('free') || q.includes('രജിസ്റ്റർ') || q.includes('تسجيل')) {
      return `Registration deadline is December 10, 2026. Accommodation and food are fully arranged on campus for all selected 100 participants. Head to the Register section to submit your details.`;
    }

    // Daily routine
    if (q.includes('routine') || q.includes('daily') || q.includes('schedule') || q.includes('റൂട്ടീൻ') || q.includes('സമയം')) {
      return `The daily rhythm starts at Fajr followed by 30 minutes of Qur'an recitation, Sahih al-Bukhari with the Ustad, breakfast, intensive transition lectures, interactive workshops, and evening spiritual circles.`;
    }

    // Contact
    if (q.includes('contact') || q.includes('phone') || q.includes('whatsapp') || q.includes('help') || q.includes('നമ്പർ') || q.includes('اتصال')) {
      return `You can reach the ADSA Helpdesk via WhatsApp or Call at ${CAMP.contact.phone}, or email ${CAMP.contact.email}.`;
    }

    return `Thank you for asking! For comprehensive details, please check our Schedule and Guide pages, or reach out directly to the ADSA Helpdesk via WhatsApp (+91 90745 25205).`;
  };

  const handleSend = (textToSend = input) => {
    if (!textToSend.trim()) return;

    const userMsg = { role: 'user', text: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      const reply = getAssistantAnswer(textToSend);
      setMessages((prev) => [...prev, { role: 'assistant', text: reply }]);
    }, 400);
  };

  return (
    <>
      {/* Floating launcher button in bottom right */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-[#FDB913] hover:bg-[#FDB913]/90 text-[#0B1520] font-bold text-xs uppercase tracking-wider shadow-2xl shadow-[#FDB913]/30 hover:scale-105 active:scale-95 transition-all"
        title="Ask Al-Wisal AI Assistant"
      >
        <Sparkles className="w-4 h-4 fill-current" />
        <span className="font-semibold">Ask Al-Wisal AI</span>
      </button>

      {/* Chat modal dialog */}
      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-20 sm:right-6 sm:w-96 sm:h-[520px] z-50 flex flex-col rounded-3xl bg-[#121E2D] border border-[#FDB913]/30 shadow-2xl text-white overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-[#0B1520]/80 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#FDB913]/20 border border-[#FDB913]/40 flex items-center justify-center text-[#FDB913]">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-[#FDB913] leading-tight">Al-Wisal AI</h3>
                <span className="text-[10px] text-neutral-400">Official Camp Guide</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Prompt Chips */}
          <div className="px-4 py-2 border-b border-white/5 flex gap-1.5 overflow-x-auto text-[11px] no-scrollbar">
            {['Camp dates?', 'Venue location?', 'Daily routine?', 'Contact?'].map((chip) => (
              <button
                key={chip}
                onClick={() => handleSend(chip)}
                className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-[#FDB913]/20 hover:text-[#FDB913] border border-white/10 whitespace-nowrap transition-colors"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs leading-relaxed">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-[#FDB913]/20 text-[#FDB913] flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[82%] ${
                    m.role === 'user'
                      ? 'bg-[#FDB913] text-[#0B1520] font-medium rounded-tr-none'
                      : 'bg-white/5 border border-white/10 text-neutral-200 rounded-tl-none'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-[#0B1520]/80 border-t border-white/10 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about the camp..."
              className="flex-1 px-3 py-2 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FDB913]"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2 rounded-xl bg-[#FDB913] hover:bg-[#FDB913]/90 text-[#0B1520] disabled:opacity-40 transition-all"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
