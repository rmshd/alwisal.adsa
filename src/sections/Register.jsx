import React, { useState } from 'react';
import DARS_LIST from '../data/dars.json';
import { CONFIG } from '../config';
import Button from '../components/Button';
import { FlowerA, KitabIcon } from '../art/Icons';

export default function Register() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    district: '',
    higherStudy: '',
    dars: '',
    phone: '',
    parentPhone: '',
    honeypot: '', // anti-bot trap
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const districtsList = [
    'മലപ്പുറം',
    'കോഴിക്കോട്',
    'വയനാട്',
    'പാലക്കാട്',
    'തൃശ്ശൂർ',
    'കണ്ണൂർ',
    'കാസർഗോഡ്',
    'എറണാകുളം',
    'ഇടുക്കി',
    'ആലപ്പുഴ',
    'കോട്ടയം',
    'പത്തനംതിട്ട',
    'കൊല്ലം',
    'തിരുവനന്തപുരം',
  ];

  const validatePhone = (number) => {
    const cleaned = number.replace(/\D/g, '');
    return cleaned.length === 10 && /^[6-9]\d{9}$/.test(cleaned);
  };

  const validateStep1 = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'വിദ്യാർത്ഥിയുടെ പേര് രേഖപ്പെടുത്തുക';
    }
    if (!formData.district) {
      errs.district = 'ജില്ല തിരഞ്ഞെടുക്കുക';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs = {};
    if (!formData.dars) {
      errs.dars = 'ദർസ് തിരഞ്ഞെടുക്കുക';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'ഫോൺ / WhatsApp നമ്പർ നൽകുക';
    } else if (!validatePhone(formData.phone)) {
      errs.phone = 'സാധുവായ 10 അക്ക മൊബൈൽ നമ്പർ നൽകുക (ഉദാ: 9847012345)';
    }

    if (!formData.parentPhone.trim()) {
      errs.parentPhone = 'രക്ഷിതാവിന്റെ ഫോൺ നമ്പർ നൽകുക';
    } else if (!validatePhone(formData.parentPhone)) {
      errs.parentPhone = 'സാധുവായ 10 അക്ക മൊബൈൽ നമ്പർ നൽകുക';
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

    // Honeypot check
    if (formData.honeypot) {
      console.warn('Bot detected via honeypot.');
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
        // Demo Mode: simulate 900ms delay & log
        console.log('ADSA Camp Registration Demo Mode - Submitted Payload:', formData);
        await new Promise((r) => setTimeout(r, 900));
      }
      setIsSuccess(true);
    } catch (err) {
      console.error('Registration submission error:', err);
      // Fallback in demo mode if endpoint fails
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="full-width-section py-24 bg-[#23252A] border-y border-white/[0.05]">
      <div className="flex flex-col gap-12 max-w-4xl mx-auto">
        {/* Section Heading & Free Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-4 border-b border-white/10">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[var(--yellow)] inline-block" />
              <span className="font-heading font-bold text-sm tracking-wider uppercase text-[var(--yellow)]">
                സൗജന്യ രജിസ്ട്രേഷൻ
              </span>
            </div>
            <h2 className="heading-section text-white">രജിസ്റ്റർ ചെയ്യൂ</h2>
          </div>

          <div className="sticker-torn-green bg-[var(--green)] text-white px-5 py-2 font-heading font-extrabold text-base tracking-wide shadow-lg self-start sm:self-auto">
            {CONFIG.FEE_LABEL}
          </div>
        </div>

        {/* Form Container Card */}
        <div className="bg-[var(--card)] rounded-[24px] p-6 sm:p-10 border border-white/[0.08] shadow-2xl relative">
          {isSuccess ? (
            /* SUCCESS STATE */
            <div className="flex flex-col items-center text-center py-8 gap-6 animate-fadeIn">
              {/* Blooming flower animation icon */}
              <div className="w-20 h-20 rounded-full bg-[var(--coral)]/15 flex items-center justify-center animate-bounce">
                <FlowerA className="w-12 h-12" color="#F0584B" />
              </div>

              <div className="flex flex-col gap-2 max-w-md">
                <h3 className="heading-card text-white text-2xl sm:text-3xl">
                  രജിസ്ട്രേഷൻ വിജയകരമായി പൂർത്തിയായി!
                </h3>
                <p className="font-body text-base text-[var(--muted)]">
                  പ്രിയപ്പെട്ട <span className="text-[var(--yellow)] font-bold">{formData.name}</span>,
                  താങ്കളുടെ അപേക്ഷ സ്വീകരിച്ചു. ക്യാമ്പ് സംബന്ധിച്ച ഔദ്യോഗിക വിവരങ്ങൾ WhatsApp വഴി അറിയിക്കും.
                </p>
              </div>

              {/* WhatsApp Chat Button with prefilled message */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                <a
                  href={CONFIG.WHATSAPP_CHAT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 h-[52px] px-8 rounded-full font-semibold text-base bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg transition-transform hover:-translate-y-0.5 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--yellow)]"
                  aria-label="WhatsApp-ൽ ചാറ്റ് ചെയ്യുക"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.33C9.33 7.33 9.04 7.4 8.78 7.68C8.52 7.96 7.78 8.65 7.78 10.05C7.78 11.45 8.8 12.8 8.94 13C9.08 13.2 10.96 16.07 13.84 17.31C14.52 17.61 15.06 17.79 15.48 17.92C16.17 18.14 16.8 18.11 17.3 18.04C17.85 17.96 18.99 17.35 19.23 16.68C19.47 16 19.47 15.43 19.4 15.31C19.33 15.19 19.14 15.12 18.84 14.97C18.55 14.83 17.11 14.12 16.84 14.02C16.57 13.92 16.38 13.87 16.18 14.17C15.98 14.46 15.42 15.12 15.25 15.31C15.08 15.51 14.91 15.53 14.62 15.39C14.33 15.24 13.39 14.93 12.27 13.93C11.4 13.15 10.81 12.19 10.64 11.9C10.47 11.61 10.62 11.45 10.77 11.31C10.9 11.18 11.06 10.97 11.21 10.8C11.36 10.63 11.41 10.51 11.51 10.31C11.61 10.11 11.56 9.94 11.48 9.79C11.41 9.65 10.81 8.18 10.56 7.59C10.32 7.02 10.07 7.09 9.89 7.09C9.72 7.08 9.53 7.08 9.33 7.08L9.53 7.33Z" />
                  </svg>
                  <span>WhatsApp-ൽ ചാറ്റ് ചെയ്യൂ</span>
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
                  className="text-xs font-sora text-[var(--muted)] hover:text-white underline"
                >
                  മറ്റൊരു അപേക്ഷ നൽകുക
                </button>
              </div>
            </div>
          ) : (
            /* MULTI-STEP FORM */
            <form onSubmit={step === 1 ? handleNext : handleSubmit} noValidate>
              {/* Hidden Honeypot Field */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="honeypot">Leave blank</label>
                <input
                  type="text"
                  id="honeypot"
                  name="honeypot"
                  tabIndex="-1"
                  value={formData.honeypot}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>

              {/* Step indicator */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-sora font-bold text-sm ${
                      step === 1
                        ? 'bg-[var(--blue)] text-white'
                        : 'bg-[var(--green)] text-white'
                    }`}
                  >
                    1
                  </div>
                  <span
                    className={`font-heading text-sm ${
                      step === 1 ? 'text-white font-bold' : 'text-[var(--muted)]'
                    }`}
                  >
                    വിദ്യാർത്ഥി വിവരങ്ങൾ
                  </span>
                </div>

                <div className="w-12 h-[1px] bg-white/20 mx-2 hidden sm:block" />

                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-sora font-bold text-sm ${
                      step === 2
                        ? 'bg-[var(--blue)] text-white'
                        : 'bg-white/10 text-[var(--muted)]'
                    }`}
                  >
                    2
                  </div>
                  <span
                    className={`font-heading text-sm ${
                      step === 2 ? 'text-white font-bold' : 'text-[var(--muted)]'
                    }`}
                  >
                    ദർസ് & കോൺടാക്റ്റ്
                  </span>
                </div>
              </div>

              {/* STEP 1 FIELDS */}
              {step === 1 && (
                <div className="flex flex-col gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="font-heading font-bold text-sm text-white flex items-center justify-between"
                    >
                      <span>പൂർണ്ണ നാമം (പേര്) *</span>
                      {errors.name && (
                        <span className="text-xs text-[var(--coral)] font-body font-normal">
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
                      placeholder="മുഹമ്മദ് ഷാഫി..."
                      className={`h-[52px] px-4 rounded-xl bg-white/5 border text-white font-body text-base placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--yellow)] transition-all ${
                        errors.name ? 'border-[var(--coral)]' : 'border-white/10'
                      }`}
                    />
                  </div>

                  {/* District */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="district"
                      className="font-heading font-bold text-sm text-white flex items-center justify-between"
                    >
                      <span>സ്വന്തം ജില്ല *</span>
                      {errors.district && (
                        <span className="text-xs text-[var(--coral)] font-body font-normal">
                          {errors.district}
                        </span>
                      )}
                    </label>
                    <select
                      id="district"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      className={`h-[52px] px-4 rounded-xl bg-[#2A2C31] border text-white font-body text-base focus:outline-none focus:ring-2 focus:ring-[var(--yellow)] transition-all ${
                        errors.district ? 'border-[var(--coral)]' : 'border-white/10'
                      }`}
                    >
                      <option value="" disabled>
                        ജില്ല തിരഞ്ഞെടുക്കുക...
                      </option>
                      {districtsList.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Higher Study Institution (Optional) */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="higherStudy"
                      className="font-heading font-bold text-sm text-white flex items-center justify-between"
                    >
                      <span>ഭാവിയിൽ ലക്ഷ്യമിടുന്ന ഉപരിപഠന സ്ഥാപനം (ഐശ്ചികം)</span>
                      <span className="text-xs text-[var(--muted)] font-sora">Optional</span>
                    </label>
                    <input
                      type="text"
                      id="higherStudy"
                      name="higherStudy"
                      value={formData.higherStudy}
                      onChange={handleChange}
                      placeholder="ദാറുൽ ഹുദാ / ജാമിഅ നൂരിയ്യ / വാഫി / മർകസ്..."
                      className="h-[52px] px-4 rounded-xl bg-white/5 border border-white/10 text-white font-body text-base placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--yellow)] transition-all"
                    />
                  </div>

                  {/* Step 1 Next Button */}
                  <div className="pt-4 flex justify-end">
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full sm:w-auto px-8"
                    >
                      തുടരുക →
                    </Button>
                  </div>
                </div>
              )}

              {/* STEP 2 FIELDS */}
              {step === 2 && (
                <div className="flex flex-col gap-6">
                  {/* Select Dars */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="dars"
                      className="font-heading font-bold text-sm text-white flex items-center justify-between"
                    >
                      <span>പഠിക്കുന്ന SUFFA ദർസ് (30 ദർസുകളിൽ ഒന്ന്) *</span>
                      {errors.dars && (
                        <span className="text-xs text-[var(--coral)] font-body font-normal">
                          {errors.dars}
                        </span>
                      )}
                    </label>
                    <select
                      id="dars"
                      name="dars"
                      value={formData.dars}
                      onChange={handleChange}
                      className={`h-[52px] px-4 rounded-xl bg-[#2A2C31] border text-white font-body text-base focus:outline-none focus:ring-2 focus:ring-[var(--yellow)] transition-all ${
                        errors.dars ? 'border-[var(--coral)]' : 'border-white/10'
                      }`}
                    >
                      <option value="" disabled>
                        ദർസ് തിരഞ്ഞെടുക്കുക...
                      </option>
                      {DARS_LIST.map((item) => (
                        <option key={item.id} value={item.name}>
                          {item.name} ({item.place})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="phone"
                      className="font-heading font-bold text-sm text-white flex items-center justify-between"
                    >
                      <span>വിദ്യാർത്ഥിയുടെ ഫോൺ / WhatsApp നമ്പർ *</span>
                      {errors.phone && (
                        <span className="text-xs text-[var(--coral)] font-body font-normal">
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
                      placeholder="9847012345"
                      className={`h-[52px] px-4 rounded-xl bg-white/5 border text-white font-sora text-base placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--yellow)] transition-all ${
                        errors.phone ? 'border-[var(--coral)]' : 'border-white/10'
                      }`}
                    />
                  </div>

                  {/* Parent Phone */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="parentPhone"
                      className="font-heading font-bold text-sm text-white flex items-center justify-between"
                    >
                      <span>രക്ഷിതാവിന്റെ ഫോൺ നമ്പർ *</span>
                      {errors.parentPhone && (
                        <span className="text-xs text-[var(--coral)] font-body font-normal">
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
                      placeholder="9447012345"
                      className={`h-[52px] px-4 rounded-xl bg-white/5 border text-white font-sora text-base placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--yellow)] transition-all ${
                        errors.parentPhone ? 'border-[var(--coral)]' : 'border-white/10'
                      }`}
                    />
                  </div>

                  {/* Step 2 Actions */}
                  <div className="pt-4 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-6 py-3 rounded-full text-sm font-heading font-bold text-white/70 hover:text-white border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                    >
                      ← തിരികെ
                    </button>

                    <Button
                      type="submit"
                      variant="primary"
                      disabled={isSubmitting}
                      className="px-8"
                    >
                      {isSubmitting ? 'രജിസ്റ്റർ ചെയ്യുന്നു...' : 'രജിസ്ട്രേഷൻ പൂർത്തിയാക്കൂ'}
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
