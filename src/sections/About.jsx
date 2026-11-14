import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { isReducedMotion } from '../lib/motion';
import { BookOpen, GraduationCap, ShieldCheck, Sparkles } from 'lucide-react';

const NUMERALS = [
  { value: 7, suffix: ' Days', label: 'Sacred Immersion', sub: 'Residential hadith & spiritual retreat' },
  { value: 30, suffix: ' Dars', label: 'SUFFA Consortium', sub: 'Affiliated institutions across Kerala' },
  { value: 200, suffix: '+', label: 'Selected Scholars', sub: 'Graduating students convened on campus' },
  { value: 4, suffix: ' Sheikhs', label: 'Mushawara Mentors', sub: 'Senior scholars delivering keynote sessions' },
];

export default function About() {
  const sectionRef = useRef(null);
  const numeralsRef = useRef(null);

  useEffect(() => {
    if (isReducedMotion() || !numeralsRef.current) return;

    const ctx = gsap.context(() => {
      const counters = numeralsRef.current.querySelectorAll('.stat-count');
      counters.forEach((counter) => {
        const target = parseFloat(counter.getAttribute('data-target') || '0');
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: counter,
            start: 'top 85%',
            once: true,
          },
          onUpdate: () => {
            counter.innerText = Math.round(obj.val);
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="full-width-section section-pad bg-[#08090C] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] rounded-full bg-[var(--gold)]/5 blur-[160px] pointer-events-none" />

      <div className="flex flex-col gap-16 lg:gap-24 relative z-10">
        {/* Top: Real Photo Left, Editorial Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Real Photo of Campus (6 cols) */}
          <div className="lg:col-span-6 rounded-[28px] overflow-hidden border border-white/10 aspect-[4/3] bg-[#12151D] relative group shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <img
              src="/images/masjid-real.jpg"
              alt="Alathurpadi Juma Masjid Campus Grounds"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-black/35 to-transparent" />
            
            {/* Top Badge */}
            <div className="absolute top-5 left-5 px-4 py-1.5 rounded-full bg-[#08090C]/85 backdrop-blur-md border border-white/15 text-xs font-sans font-bold text-white flex items-center gap-2">
              <Sparkles size={14} className="text-[var(--gold)]" />
              <span>THE SEAT OF LEARNING</span>
            </div>

            {/* Bottom Caption */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs font-sans text-white/90">
              <span className="font-semibold tracking-wide">ALATHOORPADI JUMA MASJID CAMPUS</span>
              <span className="text-[var(--gold)] font-bold">EST. 50+ YEARS</span>
            </div>
          </div>

          {/* Text Right (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-5 justify-center">
            <div className="flex items-center gap-3">
              <span className="ds-eyebrow">ABOUT THE CAMP</span>
              <span className="font-arabic text-sm text-[var(--gold)] opacity-80">
                رِسَالَةُ المَخَيَّمِ
              </span>
            </div>

            <h2 className="heading-section text-white">
              A Tradition of Sacred Pedagogy{' '}
              <span className="gold-gradient-text block">
                Built on Classical Rigour
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-[var(--muted)] leading-relaxed">
              Organised by the Alathurpadi Dars Students Association (ADSA), this intensive 7-day
              residential sanctuary convenes graduating students from 30 institutions across Kerala.
              Under the direct mentorship of Dr. C.K. Abdurahman Faizy Aripra, scholars engage in continuous
              Hadith recitation, theological discourse, and spiritual brotherhood.
            </p>

            <div className="p-5 rounded-[20px] bg-white/[0.03] border border-white/[0.08] backdrop-blur-md flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/25 flex items-center justify-center text-[var(--gold)] shrink-0">
                <BookOpen size={18} />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-sm text-white">
                  The Bukhari Sanad Tradition
                </span>
                <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed mt-0.5">
                  Direct morning lessons in Sahih al-Bukhari following Fajr, preserving the uninterrupted chain of Islamic scholarly transmission.
                </p>
                <span className="font-malayalam text-[11px] text-white/50 mt-1">
                  സുഫാ ദർസ് ശൃംഖലയിലെ വിദ്യാർത്ഥികൾക്കായി ഉസ്താദ് നേരിട്ട് നയിക്കുന്ന ബുഖാരി സബഖ്.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Below: 4 Large Numerals in Poppins */}
        <div
          ref={numeralsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4"
        >
          {NUMERALS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-[24px] bg-white/[0.025] hover:bg-white/[0.05] border border-white/[0.07] hover:border-[var(--gold)]/35 transition-all duration-300 flex flex-col justify-between group shadow-sm"
            >
              <div className="flex items-baseline gap-1 font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none group-hover:text-[var(--gold)] transition-colors">
                <span className="stat-count text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/75 group-hover:from-[#FFF6E0] group-hover:to-[#DFB15B]" data-target={item.value}>
                  {item.value}
                </span>
                <span className="text-[var(--gold)] text-2xl sm:text-3xl font-bold">{item.suffix}</span>
              </div>
              <div className="mt-4">
                <span className="font-sans font-bold text-base sm:text-lg text-white block">
                  {item.label}
                </span>
                <span className="font-sans text-xs text-[var(--muted)] mt-1 block">
                  {item.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
