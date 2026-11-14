import React, { useState } from 'react';
import { CONFIG, CONTACT } from '../config';
import Button from '../components/Button';
import { CheckCircle2, Calendar, MapPin, Users, ShieldCheck } from 'lucide-react';

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
      className="relative w-full bg-white text-slate-900 font-['Poppins'] py-24 sm:py-32 border-t border-slate-200/80"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/80 pb-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-700">
              Admission
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Camp Registration
            </h2>
          </div>
          <div className="text-right flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold">
              Open Registration
            </span>
            <span className="font-['Noto_Serif_Arabic'] text-xl text-amber-800 font-medium hidden sm:inline" dir="rtl">
              التَّسْجِيلُ
            </span>
          </div>
        </div>

        {/* Form and Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left: Camp Guidelines */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#FAF9F6] border border-slate-200/80 p-8 space-y-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-200">
                Camp Guidelines & Details
              </h3>

              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 text-amber-700 shadow-sm">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                      Dates & Duration
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      December 24 to 30, 2026 · Seven days full-time retreat
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 text-amber-700 shadow-sm">
                    <Users size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                      Eligibility
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Graduated scholars of the SUFFA Dars network
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 text-amber-700 shadow-sm">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                      Venue & Boarding
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Alathurpadi Juma Masjid Campus · Full boarding included
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 text-amber-700 shadow-sm">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                      Review Process
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Applications reviewed individually upon submission
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Registration Form */}
          <div className="lg:col-span-7 rounded-3xl bg-[#FAF9F6] border border-slate-200/80 p-8 sm:p-10 shadow-sm">
            {isSuccess ? (
              <div className="py-12 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 mx-auto flex items-center justify-center">
                  <CheckCircle2 size={32} />
                </div>
                <div className="space-y-2 max-w-md mx-auto">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Registration Submitted
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Alhamdulillah! Your application has been received. Our camp coordination committee will contact you with confirmation and travel details.
                  </p>
                </div>

                {waHref && (
                  <div className="pt-2">
                    <Button
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      className="h-11 px-7 text-xs font-semibold"
                    >
                      Connect on WhatsApp
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                    />
                    {errors.name && (
                      <span className="text-[11px] text-red-600 font-medium block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* District */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700">
                      Home District *
                    </label>
                    <select
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                    >
                      <option value="">Select your District</option>
                      {districtsList.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                    {errors.district && (
                      <span className="text-[11px] text-red-600 font-medium block">
                        {errors.district}
                      </span>
                    )}
                  </div>

                  {/* Student Mobile */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-700">
                      Mobile / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit number"
                      maxLength={10}
                      className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 font-mono"
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-red-600 font-medium block">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Parent Mobile */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-700">
                      Parent / Guardian Mobile *
                    </label>
                    <input
                      type="tel"
                      name="parentPhone"
                      value={formData.parentPhone}
                      onChange={handleChange}
                      placeholder="Guardian number"
                      maxLength={10}
                      className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 font-mono"
                    />
                    {errors.parentPhone && (
                      <span className="text-[11px] text-red-600 font-medium block">
                        {errors.parentPhone}
                      </span>
                    )}
                  </div>

                  {/* Higher Study Interest */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700">
                      Academic Aspirations (Optional)
                    </label>
                    <input
                      type="text"
                      name="higherStudy"
                      value={formData.higherStudy}
                      onChange={handleChange}
                      placeholder="e.g. Hadith Specialisation / Fatwa Studies / Qira'at"
                      className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                    />
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
                  <div className="text-xs text-slate-500 font-normal">
                    Limited seats · Reviewed individually
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto h-11 px-8 text-xs font-semibold"
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
