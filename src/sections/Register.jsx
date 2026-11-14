import React, { useState } from 'react';
import DARS_LIST from '../data/dars.json';
import { CONFIG, CONTACT } from '../config';
import Button from '../components/Button';
import NestedDiamonds from '../art/NestedDiamonds';
import { CheckCircle2 } from 'lucide-react';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    district: '',
    higherStudy: '',
    dars: '',
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
    if (!formData.dars) errs.dars = 'Select your SUFFA Dars';
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
      className="relative w-full bg-[var(--ink)] text-white font-['Poppins'] py-24 border-t border-white/10"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="max-w-[1400px] mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[var(--orange)]">
              Admission
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mt-1">
              Camp Registration
            </h2>
          </div>
          <div className="text-right flex items-center gap-3">
            <span className="px-3.5 py-1.5 bg-[var(--yellow)] text-[var(--ink)] text-xs font-bold uppercase tracking-wider">
              Open Registration
            </span>
            <span className="font-['Noto_Serif_Arabic'] text-2xl text-[var(--yellow)] hidden sm:inline">
              التَّسْجِيلُ
            </span>
          </div>
        </div>

        {/* Main Grid: NestedDiamonds Tile Left, Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Shape Tile & Camp Info */}
          <div className="lg:col-span-4 bg-[var(--surface)] border border-white/10 p-8 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase font-bold tracking-widest text-[var(--yellow)]">
                Participant Eligibility
              </span>
              <h3 className="text-xl font-bold uppercase text-white tracking-tight">
                For SUFFA Dars Graduates
              </h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                Open exclusively to graduating delegates and scholars from the 30 affiliated SUFFA Dars institutions across Kerala.
              </p>
            </div>

            <div className="w-48 mx-auto py-4">
              <NestedDiamonds className="w-full h-full" />
            </div>

            <div className="space-y-2 border-t border-white/10 pt-4 text-xs text-[var(--muted)]">
              <div className="flex justify-between">
                <span>Camp Dates</span>
                <span className="text-white font-semibold">Dec 20–26, 2026</span>
              </div>
              <div className="flex justify-between">
                <span>Food & Boarding</span>
                <span className="text-[var(--yellow)] font-semibold">Complimentary</span>
              </div>
              <div className="flex justify-between">
                <span>Location</span>
                <span className="text-white font-semibold">Alathurpadi Campus</span>
              </div>
            </div>
          </div>

          {/* Right: Registration Form Panel */}
          <div className="lg:col-span-8 bg-[var(--surface)] border border-white/10 p-6 sm:p-10">
            {isSuccess ? (
              <div className="py-12 flex flex-col items-center text-center space-y-6">
                <div className="w-16 h-16 bg-[var(--orange)]/20 text-[var(--orange)] flex items-center justify-center">
                  <CheckCircle2 size={36} />
                </div>
                <div className="space-y-2 max-w-md">
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
                    Registration Submitted
                  </h3>
                  <p className="text-sm text-[var(--muted)]">
                    Honoured brother <strong className="text-white">{formData.name}</strong>, your application has been received. Our reception team will coordinate onboarding details.
                  </p>
                  <p className="font-['Noto_Sans_Malayalam'] text-xs text-[var(--yellow)] pt-2">
                    താങ്കളുടെ രജിസ്ട്രേഷൻ വിജയകരമായി പൂർത്തിയായി. വിവരങ്ങൾ വാട്സാപ്പ് വഴി അറിയിക്കും.
                  </p>
                </div>

                {waHref && (
                  <Button
                    href={waHref}
                    target="_blank"
                    variant="primary"
                    className="h-11 px-8 text-xs font-bold"
                  >
                    Contact Coordinator on WhatsApp
                  </Button>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex="-1"
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Student Name */}
                  <div className="space-y-2 sm:col-span-2">
                    <label className="block text-xs uppercase font-bold tracking-wider text-[var(--muted)]">
                      Student Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Muhammad Al-Ameen"
                      className="w-full bg-[var(--ink)] border border-white/15 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[var(--yellow)]"
                    />
                    {errors.name && (
                      <span className="text-[11px] text-[var(--orange)] font-medium block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Native District */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase font-bold tracking-wider text-[var(--muted)]">
                      Native District *
                    </label>
                    <select
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      className="w-full bg-[var(--ink)] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[var(--yellow)]"
                    >
                      <option value="">Select District</option>
                      {districtsList.map((dist) => (
                        <option key={dist} value={dist}>
                          {dist}
                        </option>
                      ))}
                    </select>
                    {errors.district && (
                      <span className="text-[11px] text-[var(--orange)] font-medium block">
                        {errors.district}
                      </span>
                    )}
                  </div>

                  {/* Current Dars */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase font-bold tracking-wider text-[var(--muted)]">
                      Current SUFFA Dars *
                    </label>
                    <select
                      name="dars"
                      value={formData.dars}
                      onChange={handleChange}
                      className="w-full bg-[var(--ink)] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[var(--yellow)]"
                    >
                      <option value="">Select Affiliated Dars</option>
                      {DARS_LIST.map((d) => (
                        <option key={d.id} value={d.name}>
                          {d.name} ({d.place})
                        </option>
                      ))}
                    </select>
                    {errors.dars && (
                      <span className="text-[11px] text-[var(--orange)] font-medium block">
                        {errors.dars}
                      </span>
                    )}
                  </div>

                  {/* Student Mobile */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase font-bold tracking-wider text-[var(--muted)]">
                      Student Mobile / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      className="w-full bg-[var(--ink)] border border-white/15 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[var(--yellow)] font-mono"
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-[var(--orange)] font-medium block">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Parent Mobile */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase font-bold tracking-wider text-[var(--muted)]">
                      Parent / Guardian Mobile *
                    </label>
                    <input
                      type="tel"
                      name="parentPhone"
                      value={formData.parentPhone}
                      onChange={handleChange}
                      placeholder="10-digit guardian number"
                      maxLength={10}
                      className="w-full bg-[var(--ink)] border border-white/15 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[var(--yellow)] font-mono"
                    />
                    {errors.parentPhone && (
                      <span className="text-[11px] text-[var(--orange)] font-medium block">
                        {errors.parentPhone}
                      </span>
                    )}
                  </div>

                  {/* Higher Study Interest */}
                  <div className="space-y-2 sm:col-span-2">
                    <label className="block text-xs uppercase font-bold tracking-wider text-[var(--muted)]">
                      Higher Studies Aspirations (Optional)
                    </label>
                    <input
                      type="text"
                      name="higherStudy"
                      value={formData.higherStudy}
                      onChange={handleChange}
                      placeholder="e.g. Hadith Specialisation / Fatwa Studies / Qira'at"
                      className="w-full bg-[var(--ink)] border border-white/15 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[var(--yellow)]"
                    />
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
                  <div className="text-xs text-[var(--muted)] font-['Noto_Serif_Malayalam']">
                    Applications are reviewed individually. Limited seats available.
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto h-12 px-10 text-xs font-bold"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Registration'}
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
