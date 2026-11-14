import React from 'react';
import { Award, BookOpen, Building2, Users } from 'lucide-react';

const TRUST_ITEMS = [
  {
    icon: Award,
    title: 'ADSA',
    desc: 'ആലത്തൂർപടി ദർസ് സ്റ്റുഡന്റ്സ് അസോസിയേഷൻ',
  },
  {
    icon: Building2,
    title: 'SUFFA DARS NETWORK',
    desc: '30 ദർസുകളുടെ സംയുക്ത ശൃംഖല',
  },
  {
    icon: BookOpen,
    title: 'ആലത്തൂർപടി ദർസ്',
    desc: 'അരനൂറ്റാണ്ടിന്റെ വൈജ്ഞാനിക പാരമ്പര്യം',
  },
  {
    icon: Users,
    title: 'ആദർശ നേതൃത്വം',
    desc: 'സമസ്ത കേരള ജംഇയ്യത്തുൽ ഉലമ',
  },
];

export default function TrustStrip() {
  return (
    <section className="w-full border-y border-white/[0.08] bg-[#222428] py-8" style={{ paddingInline: 'var(--gutter)' }}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center">
        {TRUST_ITEMS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white/80">
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-sora font-semibold text-xs text-white uppercase tracking-wider truncate">
                  {item.title}
                </span>
                <span className="font-body text-xs text-[var(--muted)] truncate">
                  {item.desc}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
