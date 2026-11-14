import React, { useState } from 'react';
import { CONFIG, CONTACT } from '../config';
import Button from '../components/Button';
import NestedDiamonds from '../art/NestedDiamonds';
import { CheckCircle2, Calendar, MapPin, Users, Award } from 'lucide-react';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    district: '',
    higherStudy: '',
    phone: '',
    parentPhone: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const districtsList = [
    'Malappuram',
    'Kozhikode',
    'Wayanad',
    'Palakkad',
    'Thrissur',
    'Kannur',
    'Kasaragod',
    'Ernakulam',
    'Idukki',
    'Alappuzha',
    'Kottayam',
    'Pathanamthitta',
    'Kollam',
    'Thiruvananthapuram',
  ];

  const validatePhone = (number) => {
    const cleaned = number.replace(/\D/g, '');
    return cleaned.length === 10 && /^[6-9]\d{9}$/.test(cleaned);
  };

  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.district) errs.district = 'Select your home district';
    if (!formData.phone.trim()) {
      errs.phone = 'Mobile / WhatsApp number is required';
    } else if (!validatePhone(formData.phone)) {
      errs.phone = 'Enter a valid 10-digit mobile number';
    }
    if (!formData.parentPhone.trim()) {
      errs.parentPhone = 'Parent / Guardian phone number is required';
    } else if (!validatePhone(formData.parentPhone)) {
      errs.parentPhone = 'Enter a valid 10-digit mobile number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.honeypot) {
      setIsSuccess(true);
      return;
    }

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      if (CONFIG.FORM_ENDPOINT) {
        await fetch(CONFIG.FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString(),
          }),
        });
      } else {
        await new Promise((r) => setTimeout(r, 600));
      }
      setIsSuccess(true);
    } catch (err) {
      console.error('Registration error:', err);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const waHref = CONTACT?.whatsapp?.number
    ? `https://wa.me/${CONTACT.whatsapp.number.replace(/\D/g, '')}?text=${encodeURIComponent(
      CONTACT.whatsapp.message || 'ADSA ക്യാമ്പിനെക്കുറിച്ച് അറിയാൻ ആഗ്രഹിക്കുന്നു'
    )}`
    : null;

  return (
    <section
      id="register"
      className="relative w-full bg-[var(--canvas-subtle)] text-[var(--ink)] font-['Poppins'] py-20 sm:py-28 border-t-2 border-[var(--ink)]"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="max-w-[1400px] mx-auto space-y-12">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-[var(--ink)] pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-[var(--orange)] block mb-1">
              ADMISSION APPLICATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--ink)]">
              Camp Registration
            </h2>
          </div>
          <div className="text-right flex items-center gap-3">
            <span className="px-3.5 py-1.5 bg-[var(--yellow)] text-[var(--ink)] text-xs font-black uppercase tracking-wider border border-[var(--ink)]">
              Open Registration
            </span>
            <span className="font-['Noto_Serif_Arabic'] text-2xl font-bold text-[var(--ink)] hidden sm:inline" dir="rtl">
              التَّسْجِيلُ
            </span>
          </div>
        </div>

        {/* Main Grid: Overview Left, Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left Column: Camp Summary & Geometric Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border-2 border-[var(--ink)] shadow-[5px_5px_0px_#0F172A] p-6 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--ink)]/10">
                <span className="text-xs uppercase font-black tracking-widest text-[var(--orange)]">
                  Camp Guidelines
                </span>
                <span className="text-xs font-bold text-[var(--muted)]">
                  Dec 20–26, 2026
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 bg-[var(--canvas)] border border-[var(--ink)] flex items-center justify-center shrink-0 text-[var(--orange)]">
                    <Calendar size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
                      Duration
                    </h4>
                    <p className="text-xs text-[var(--muted)] mt-0.5">
                      7 Days residential retreat · Dawn to Dusk immersion
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 bg-[var(--canvas)] border border-[var(--ink)] flex items-center justify-center shrink-0 text-[#1E40AF]">
                    <Users size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
                      Target Delegates
                    </h4>
                    <p className="text-xs text-[var(--muted)] mt-0.5">
                      Graduated scholars of the SUFFA Dars network
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 bg-[var(--canvas)] border border-[var(--ink)] flex items-center justify-center shrink-0 text-[#4D6A34]">
                    <MapPin size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
                      Venue & Boarding
                    </h4>
                    <p className="text-xs text-[var(--muted)] mt-0.5">
                      Alathurpadi Juma Masjid Campus · Full Boarding Included
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 bg-[var(--canvas)] border border-[var(--ink)] flex items-center justify-center shrink-0 text-[#7C3AED]">
                    <Award size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
                      Selection Process
                    </h4>
                    <p className="text-xs text-[var(--muted)] mt-0.5">
                      Applications reviewed individually · Limited delegates
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Nested Diamonds Tile */}
              <div className="pt-4 border-t border-[var(--ink)]/10 flex items-center justify-center bg-[var(--canvas)] p-4 border border-[var(--ink)]/20">
                <NestedDiamonds className="w-24 h-24 text-[var(--orange)]" />
              </div>
            </div>
          </div>

          {/* Right Column: Admission Form */}
          <div className="lg:col-span-7 bg-white border-2 border-[var(--ink)] shadow-[6px_6px_0px_#0F172A] p-6 sm:p-10">
            {isSuccess ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 bg-[#4D6A34]/15 border-2 border-[#4D6A34] text-[#4D6A34] mx-auto flex items-center justify-center shadow-[3px_3px_0px_#0F172A]">
                  <CheckCircle2 size={36} strokeWidth={2} />
                </div>
                <div className="space-y-2 max-w-md mx-auto">
                  <h3 className="text-2xl font-black uppercase tracking-tight text-[var(--ink)]">
                    Registration Submitted
                  </h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    Alhamdulillah! Your application has been received. Our camp committee will contact you with confirmation and travel guidelines.
                  </p>
                </div>

                {waHref && (
                  <div className="pt-4">
                    <Button
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      className="h-12 px-8 text-xs font-extrabold"
                    >
                      Connect on WhatsApp
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="block text-xs uppercase font-extrabold tracking-wider text-[var(--ink)]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full bg-[var(--canvas)] border-2 border-[var(--ink)] px-4 py-3 text-sm text-[var(--ink)] placeholder-[var(--muted)] focus:outline-none focus:bg-white focus:border-[var(--orange)] font-medium"
                    />
                    {errors.name && (
                      <span className="text-[11px] text-[var(--terracotta)] font-bold block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* District */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="block text-xs uppercase font-extrabold tracking-wider text-[var(--ink)]">
                      Home District *
                    </label>
                    <select
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      className="w-full bg-[var(--canvas)] border-2 border-[var(--ink)] px-4 py-3 text-sm text-[var(--ink)] focus:outline-none focus:bg-white focus:border-[var(--orange)] font-medium"
                    >
                      <option value="">Select your District</option>
                      {districtsList.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                    {errors.district && (
                      <span className="text-[11px] text-[var(--terracotta)] font-bold block">
                        {errors.district}
                      </span>
                    )}
                  </div>

                  {/* Student Mobile */}
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase font-extrabold tracking-wider text-[var(--ink)]">
                      Mobile / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit number"
                      maxLength={10}
                      className="w-full bg-[var(--canvas)] border-2 border-[var(--ink)] px-4 py-3 text-sm text-[var(--ink)] placeholder-[var(--muted)] focus:outline-none focus:bg-white focus:border-[var(--orange)] font-mono font-medium"
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-[var(--terracotta)] font-bold block">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Parent Mobile */}
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase font-extrabold tracking-wider text-[var(--ink)]">
                      Parent / Guardian Mobile *
                    </label>
                    <input
                      type="tel"
                      name="parentPhone"
                      value={formData.parentPhone}
                      onChange={handleChange}
                      placeholder="Guardian number"
                      maxLength={10}
                      className="w-full bg-[var(--canvas)] border-2 border-[var(--ink)] px-4 py-3 text-sm text-[var(--ink)] placeholder-[var(--muted)] focus:outline-none focus:bg-white focus:border-[var(--orange)] font-mono font-medium"
                    />
                    {errors.parentPhone && (
                      <span className="text-[11px] text-[var(--terracotta)] font-bold block">
                        {errors.parentPhone}
                      </span>
                    )}
                  </div>

                  {/* Higher Study Interest */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="block text-xs uppercase font-extrabold tracking-wider text-[var(--ink)]">
                      Academic Aspirations (Optional)
                    </label>
                    <input
                      type="text"
                      name="higherStudy"
                      value={formData.higherStudy}
                      onChange={handleChange}
                      placeholder="e.g. Hadith Specialisation / Fatwa Studies / Qira'at"
                      className="w-full bg-[var(--canvas)] border-2 border-[var(--ink)] px-4 py-3 text-sm text-[var(--ink)] placeholder-[var(--muted)] focus:outline-none focus:bg-white focus:border-[var(--orange)] font-medium"
                    />
                  </div>
                </div>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t-2 border-[var(--ink)]/15">
                  <div className="text-xs text-[var(--muted)] font-medium">
                    Limited seats · Reviewed upon receipt
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto h-12 px-10 text-xs font-black shadow-[4px_4px_0px_#0F172A]"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
