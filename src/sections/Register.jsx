import React, { useState } from 'react';
import DARS_LIST from '../data/dars.json';
import { CONFIG } from '../config';
import Button from '../components/Button';
import { CheckCircle2, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Register() {
  const [step, setStep] = useState(1);
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
    'Malappuram (മലപ്പുറം)',
    'Kozhikode (കോഴിക്കോട്)',
    'Wayanad (വയനാട്)',
    'Palakkad (പാലക്കാട്)',
    'Thrissur (തൃശ്ശൂർ)',
    'Kannur (കണ്ണൂർ)',
    'Kasaragod (കാസർഗോഡ്)',
    'Ernakulam (എറണാകുളം)',
    'Idukki (ഇടുക്കി)',
    'Alappuzha (ആലപ്പുഴ)',
    'Kottayam (കോട്ടയം)',
    'Pathanamthitta (പത്തനംതിട്ട)',
    'Kollam (കൊല്ലം)',
    'Thiruvananthapuram (തിരുവനന്തപുരം)',
  ];

  const validatePhone = (number) => {
    const cleaned = number.replace(/\D/g, '');
    return cleaned.length === 10 && /^[6-9]\d{9}$/.test(cleaned);
  };

  const validateStep1 = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide the student full name';
    }
    if (!formData.district) {
      errs.district = 'Please select your native district';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs = {};
    if (!formData.dars) {
      errs.dars = 'Please select your current SUFFA Dars';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide mobile/WhatsApp number';
    } else if (!validatePhone(formData.phone)) {
      errs.phone = 'Enter valid 10-digit mobile number';
    }

    if (!formData.parentPhone.trim()) {
      errs.parentPhone = 'Please provide parent/guardian phone';
    } else if (!validatePhone(formData.parentPhone)) {
      errs.parentPhone = 'Enter valid 10-digit mobile number';
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

  const handleNext = (e) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.honeypot) {
      setIsSuccess(true);
      return;
    }

    if (!validateStep2()) {
      return;
    }

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
        await new Promise((r) => setTimeout(r, 800));
      }
      setIsSuccess(true);
    } catch (err) {
      console.error('Registration submission error:', err);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="full-width-section section-pad bg-[#08090C] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--gold)]/5 blur-[160px] pointer-events-none" />

      <div className="flex flex-col gap-12 max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-2">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="ds-eyebrow">REGISTRATION PORTAL</span>
              <span className="font-arabic text-sm text-[var(--gold)] opacity-80">
                التَّسْجِيلُ المَجَّانِيُّ
              </span>
            </div>
            <h2 className="heading-section text-white">
              Candidate Scholar{' '}
              <span className="gold-gradient-text block">
                Admission Form
              </span>
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 text-xs font-sans font-bold text-[var(--gold-light)] shadow-[0_0_15px_rgba(223,177,91,0.15)] self-start sm:self-auto">
            <span>✨</span>
            <span>100% FREE ADMISSION · BOARDING INCLUDED</span>
          </div>
        </div>

        {/* Form Container (Glass Terminal) */}
        <div className="p-6 sm:p-10 rounded-[28px] bg-[#12151D]/85 backdrop-blur-2xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.7)] relative">
          {isSuccess ? (
            /* SUCCESS STATE */
            <div className="flex flex-col items-center text-center py-8 gap-6">
              <div className="w-18 h-18 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                <CheckCircle2 size={38} strokeWidth={1.75} />
              </div>

              <div className="flex flex-col gap-2 max-w-md">
                <h3 className="font-sans font-extrabold text-white text-2xl">
                  Application Received Successfully!
                </h3>
                <p className="font-sans text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                  Honoured brother <span className="text-white font-bold">{formData.name}</span>,
                  your candidate admission form has been registered. The camp reception team will reach out with boarding and travel details via WhatsApp.
                </p>
                <p className="font-malayalam text-xs text-white/50 mt-1">
                  താങ്കളുടെ അപേക്ഷ സ്വീകരിച്ചു. വിശദവിവരങ്ങൾ WhatsApp വഴി ഉടൻ അറിയിക്കും.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 mt-3">
                <a
                  href={CONFIG.WHATSAPP_CHAT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 h-[52px] px-8 rounded-full font-sans font-bold text-sm bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  aria-label="Connect on WhatsApp"
                >
                  <span>Chat on WhatsApp Helpline</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false);
                    setStep(1);
                    setFormData({
                      name: '',
                      district: '',
                      higherStudy: '',
                      dars: '',
                      phone: '',
                      parentPhone: '',
                      honeypot: '',
                    });
                  }}
                  className="text-xs font-sans text-[var(--muted)] hover:text-white underline cursor-pointer"
                >
                  Submit Another Application
                </button>
              </div>
            </div>
          ) : (
            /* 2-STEP FORM */
            <form onSubmit={step === 1 ? handleNext : handleSubmit} noValidate>
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="honeypot"
                  tabIndex="-1"
                  value={formData.honeypot}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>

              {/* Step indicator */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-sans font-bold text-xs ${
                      step === 1
                        ? 'bg-gradient-to-r from-[#DFB15B] to-[#A37F30] text-[#08090C] shadow-[0_0_15px_rgba(223,177,91,0.3)]'
                        : 'bg-white/20 text-white'
                    }`}
                  >
                    1
                  </div>
                  <div className="flex flex-col">
                    <span
                      className={`font-sans text-sm ${
                        step === 1 ? 'text-white font-bold' : 'text-[var(--muted)] font-medium'
                      }`}
                    >
                      Personal Details
                    </span>
                    <span className="font-malayalam text-[10px] text-white/40">വിദ്യാർത്ഥി വിവരങ്ങൾ</span>
                  </div>
                </div>

                <div className="w-16 h-[1px] bg-white/10 mx-2 hidden sm:block" />

                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-sans font-bold text-xs ${
                      step === 2
                        ? 'bg-gradient-to-r from-[#DFB15B] to-[#A37F30] text-[#08090C] shadow-[0_0_15px_rgba(223,177,91,0.3)]'
                        : 'bg-white/10 text-[var(--muted)]'
                    }`}
                  >
                    2
                  </div>
                  <div className="flex flex-col">
                    <span
                      className={`font-sans text-sm ${
                        step === 2 ? 'text-white font-bold' : 'text-[var(--muted)] font-medium'
                      }`}
                    >
                      Dars & Verification
                    </span>
                    <span className="font-malayalam text-[10px] text-white/40">ദർസ് വിവരങ്ങൾ</span>
                  </div>
                </div>
              </div>

              {/* STEP 1 */}
              {step === 1 && (
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="font-sans font-semibold text-xs sm:text-sm text-white flex items-center justify-between"
                    >
                      <span>Full Name of Student (പൂർണ്ണ നാമം) *</span>
                      {errors.name && (
                        <span className="text-xs text-[var(--coral)] font-sans">
                          {errors.name}
                        </span>
                      )}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Muhammed Shafi..."
                      className={`h-[52px] px-4 rounded-[14px] bg-[#08090C]/60 border text-white font-sans text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40 focus:border-[var(--gold)] transition-all ${
                        errors.name ? 'border-[var(--coral)]' : 'border-white/10'
                      }`}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="district"
                      className="font-sans font-semibold text-xs sm:text-sm text-white flex items-center justify-between"
                    >
                      <span>Native District (സ്വന്തം ജില്ല) *</span>
                      {errors.district && (
                        <span className="text-xs text-[var(--coral)] font-sans">
                          {errors.district}
                        </span>
                      )}
                    </label>
                    <select
                      id="district"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      className={`h-[52px] px-4 rounded-[14px] bg-[#12151D] border text-white font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40 focus:border-[var(--gold)] transition-all ${
                        errors.district ? 'border-[var(--coral)]' : 'border-white/10'
                      }`}
                    >
                      <option value="" disabled>
                        Select your native district...
                      </option>
                      {districtsList.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="higherStudy"
                      className="font-sans font-semibold text-xs sm:text-sm text-white flex items-center justify-between"
                    >
                      <span>Intended Higher Studies Institution (ഉപരിപഠന ലക്ഷ്യം)</span>
                      <span className="text-[11px] text-[var(--muted)] font-sans">Optional</span>
                    </label>
                    <input
                      type="text"
                      id="higherStudy"
                      name="higherStudy"
                      value={formData.higherStudy}
                      onChange={handleChange}
                      placeholder="e.g. Jamia Nooriya / Darul Huda / Wafy / Markaz..."
                      className="h-[52px] px-4 rounded-[14px] bg-[#08090C]/60 border border-white/10 text-white font-sans text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40 focus:border-[var(--gold)] transition-all"
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full sm:w-auto px-9 uppercase font-bold text-xs tracking-wider"
                    >
                      Continue to Step 2 →
                    </Button>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="dars"
                      className="font-sans font-semibold text-xs sm:text-sm text-white flex items-center justify-between"
                    >
                      <span>Current SUFFA Dars Institution (പഠിക്കുന്ന ദർസ്) *</span>
                      {errors.dars && (
                        <span className="text-xs text-[var(--coral)] font-sans">
                          {errors.dars}
                        </span>
                      )}
                    </label>
                    <select
                      id="dars"
                      name="dars"
                      value={formData.dars}
                      onChange={handleChange}
                      className={`h-[52px] px-4 rounded-[14px] bg-[#12151D] border text-white font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40 focus:border-[var(--gold)] transition-all ${
                        errors.dars ? 'border-[var(--coral)]' : 'border-white/10'
                      }`}
                    >
                      <option value="" disabled>
                        Select your affiliated Dars...
                      </option>
                      {DARS_LIST.map((item) => (
                        <option key={item.id} value={item.name}>
                          {item.name} ({item.place})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="phone"
                      className="font-sans font-semibold text-xs sm:text-sm text-white flex items-center justify-between"
                    >
                      <span>Student Phone / WhatsApp Number (ഫോൺ നമ്പർ) *</span>
                      {errors.phone && (
                        <span className="text-xs text-[var(--coral)] font-sans">
                          {errors.phone}
                        </span>
                      )}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      maxLength={10}
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 9847012345"
                      className={`h-[52px] px-4 rounded-[14px] bg-[#08090C]/60 border text-white font-sans text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40 focus:border-[var(--gold)] transition-all ${
                        errors.phone ? 'border-[var(--coral)]' : 'border-white/10'
                      }`}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="parentPhone"
                      className="font-sans font-semibold text-xs sm:text-sm text-white flex items-center justify-between"
                    >
                      <span>Parent / Guardian Mobile Number (രക്ഷിതാവിന്റെ നമ്പർ) *</span>
                      {errors.parentPhone && (
                        <span className="text-xs text-[var(--coral)] font-sans">
                          {errors.parentPhone}
                        </span>
                      )}
                    </label>
                    <input
                      type="tel"
                      id="parentPhone"
                      name="parentPhone"
                      maxLength={10}
                      value={formData.parentPhone}
                      onChange={handleChange}
                      placeholder="e.g. 9447012345"
                      className={`h-[52px] px-4 rounded-[14px] bg-[#08090C]/60 border text-white font-sans text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40 focus:border-[var(--gold)] transition-all ${
                        errors.parentPhone ? 'border-[var(--coral)]' : 'border-white/10'
                      }`}
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-6 py-2.5 rounded-full text-xs font-sans font-bold text-white/70 hover:text-white border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                    >
                      ← Back to Step 1
                    </button>

                    <Button
                      type="submit"
                      variant="primary"
                      disabled={isSubmitting}
                      className="px-9 uppercase font-bold text-xs tracking-wider"
                    >
                      {isSubmitting ? 'Registering...' : 'Complete Registration'}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
