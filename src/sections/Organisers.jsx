import React from 'react';
import { ShieldCheck, UserCheck } from 'lucide-react';

const ORGANISERS = [
  {
    role: 'മുഖ്യ രക്ഷാധികാരി & ചെയർമാൻ',
    name: 'ഡോ. സി.കെ അബ്ദുറഹ്മാൻ ഫൈസി അരിപ്ര',
    title: 'കേന്ദ്ര മുശാവറ അംഗം, സമസ്ത & ചീഫ് മുദരിസ്',
    icon: ShieldCheck,
    isChief: true,
  },
  {
    role: 'പ്രസിഡന്റ്, ADSA',
    name: 'ഹാഫിള് മുഹമ്മദ് റമീസ് കട്ടുപ്പാറ',
    title: 'ആലത്തൂർപടി ദർസ് വിദ്യാർത്ഥി യൂണിയൻ',
    icon: UserCheck,
  },
  {
    role: 'ജനറൽ സെക്രട്ടറി, ADSA',
    name: 'ഹാഫിള് മുഹമ്മദ് ജുമൈൽ പാറക്കണ്ണി',
    title: 'ആലത്തൂർപടി ദർസ് വിദ്യാർത്ഥി യൂണിയൻ',
    icon: UserCheck,
  },
  {
    role: 'ട്രഷറർ, ADSA',
    name: 'സയ്യിദ് നസീൽ അഹമ്മദ്',
    title: 'ആലത്തൂർപടി ദർസ് വിദ്യാർത്ഥി യൂണിയൻ',
    icon: UserCheck,
  },
];

export default function Organisers() {
  return (
    <section id="organisers" className="full-width-section section-pad bg-[#0B0D12] relative overflow-hidden">
      <div className="flex flex-col gap-12 lg:gap-14 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="ds-eyebrow">നേതൃത്വം</span>

          <h2 className="heading-h2 text-white">
            ക്യാമ്പ്{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC93C] via-[#FFE27D] to-[#F59E0B]">
              സംഘാടകർ
            </span>
          </h2>

          <p className="body-editorial">
            ആലത്തൂർപടി ദർസ് സ്റ്റുഡന്റ്സ് അസോസിയേഷൻ (ADSA) നേതൃത്വത്തിലാണ് ക്യാമ്പ് ഒരുക്കുന്നത്.
          </p>
        </div>

        {/* Organisers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ORGANISERS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-[22px] bg-[#141722]/80 backdrop-blur-xl border ${
                  item.isChief ? 'border-amber-400/35 shadow-[0_10px_30px_rgba(255,201,60,0.1)]' : 'border-white/[0.08]'
                } hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className={`w-11 h-11 rounded-2xl ${item.isChief ? 'bg-amber-400/15 text-amber-400 border border-amber-400/30' : 'bg-white/5 text-white/80 border border-white/10'} flex items-center justify-center mb-5`}>
                    <Icon size={20} strokeWidth={1.75} />
                  </div>

                  <span className="text-xs font-sora font-semibold text-[var(--sky)] uppercase tracking-wider block mb-2">
                    {item.role}
                  </span>

                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-[var(--yellow)] transition-colors">
                    {item.name}
                  </h3>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.07] text-xs font-body text-[var(--muted)]">
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
