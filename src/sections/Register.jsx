import React, { useState } from 'react';
import { CONFIG, CONTACT } from '../config';
import Button from '../components/Button';
import { CheckCircle2, Calendar, MapPin, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import { addRegistration } from '../lib/store';

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
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.honeypot) return;
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      if (typeof addRegistration === 'function') {
        addRegistration({
          name: formData.name,
          phone: formData.phone,
          parentPhone: formData.parentPhone,
          district: formData.district,
          higherStudy: formData.higherStudy,
          status: 'pending',
          timestamp: new Date().toISOString(),
        });
      }
      setIsSuccess(true);
    } catch (err) {
      console.error('Registration failed:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="register"
      className="relative w-full bg-[#0B1520] text-white font-['Poppins'] py-24 sm:py-32 border-t border-white/5"
      style={{ paddingInline: 'var(--gutter)' }}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#FDB913]">
              Application &amp; Entry
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Camp Registration
            </h2>
          </div>
          <div className="text-right flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-[#FDB913]/15 border border-[#FDB913]/30 text-[#FDB913] text-xs font-semibold">
              Open Registration
            </span>
            <span className="font-arabic text-xl sm:text-2xl text-[#FDB913] font-bold hidden sm:inline" dir="rtl">
              التَّسْجِيلُ
            </span>
          </div>
        </div>

        {/* Form and Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Camp Guidelines */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#121E2D]/80 border border-[#FDB913]/30 p-8 space-y-6 shadow-2xl backdrop-blur-md">
              <h3 className="text-base font-bold text-white pb-3 border-b border-white/10">
                Camp Guidelines &amp; Details
              </h3>

              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#FDB913] shadow-sm">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                      Dates &amp; Duration
                    </h4>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      December 24 to 30, 2026 · Seven days full-time retreat
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#FDB913] shadow-sm">
                    <Users size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                      Eligibility
                    </h4>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Graduated scholars of the SUFFA Dars network
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#FDB913] shadow-sm">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                      Venue &amp; Boarding
                    </h4>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Alathurpadi Dars Campus · Full residential boarding included
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#FDB913] shadow-sm">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                      Admission Process
                    </h4>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Applications reviewed individually upon submission (100 seats limit)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Registration Form */}
          <div className="lg:col-span-7 rounded-3xl bg-[#121E2D]/80 border border-[#FDB913]/30 p-8 sm:p-10 shadow-2xl backdrop-blur-md">
            {isSuccess ? (
              <div className="py-12 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
                  <CheckCircle2 size={32} />
                </div>
                <div className="space-y-2 max-w-md mx-auto">
                  <h3 className="text-2xl font-bold text-white">
                    Registration Submitted
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                    Alhamdulillah! Your application has been received. Our camp coordination committee will contact you with confirmation and boarding details.
                  </p>
                </div>
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
                    <label className="block text-xs font-semibold text-neutral-300">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full bg-[#080E16] border border-white/15 px-4 py-3 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FDB913]"
                    />
                    {errors.name && (
                      <span className="text-[11px] text-red-400 font-medium block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* District */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="block text-xs font-semibold text-neutral-300">
                      Home District *
                    </label>
                    <select
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      className="w-full bg-[#080E16] border border-white/15 px-4 py-3 rounded-xl text-sm text-white focus:outline-none focus:border-[#FDB913]"
                    >
                      <option value="" className="bg-[#080E16]">Select your District</option>
                      {districtsList.map((d) => (
                        <option key={d} value={d} className="bg-[#080E16]">
                          {d}
                        </option>
                      ))}
                    </select>
                    {errors.district && (
                      <span className="text-[11px] text-red-400 font-medium block">
                        {errors.district}
                      </span>
                    )}
                  </div>

                  {/* Student Mobile */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-neutral-300">
                      Mobile / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit number"
                      maxLength={10}
                      className="w-full bg-[#080E16] border border-white/15 px-4 py-3 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FDB913] font-mono"
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-red-400 font-medium block">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Parent Mobile */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-neutral-300">
                      Parent / Guardian Mobile *
                    </label>
                    <input
                      type="tel"
                      name="parentPhone"
                      value={formData.parentPhone}
                      onChange={handleChange}
                      placeholder="Guardian number"
                      maxLength={10}
                      className="w-full bg-[#080E16] border border-white/15 px-4 py-3 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FDB913] font-mono"
                    />
                    {errors.parentPhone && (
                      <span className="text-[11px] text-red-400 font-medium block">
                        {errors.parentPhone}
                      </span>
                    )}
                  </div>

                  {/* Higher Study Interest */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="block text-xs font-semibold text-neutral-300">
                      Academic Aspirations (Optional)
                    </label>
                    <input
                      type="text"
                      name="higherStudy"
                      value={formData.higherStudy}
                      onChange={handleChange}
                      placeholder="e.g. Hadith Specialisation / Fatwa Studies / Qira'at"
                      className="w-full bg-[#080E16] border border-white/15 px-4 py-3 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FDB913]"
                    />
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
                  <div className="text-xs text-neutral-400 font-normal">
                    Capacity 100 scholars · Reviewed individually
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#FDB913] hover:bg-[#FDB913]/90 text-[#0B1520] font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#FDB913]/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
