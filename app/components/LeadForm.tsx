'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const services = [
  'Trade Facilitation',
  'Global Sourcing Advisory',
  'Singapore Structuring',
  'UAE & Hong Kong Setup',
  'Dubai Investment Advisory',
  'General Enquiry',
];

// International phone number validation
const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

// Email validation
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    country: '',
    service: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<{
    email?: string;
    whatsapp?: string;
  }>({});
  const [touched, setTouched] = useState<{
    email?: boolean;
    whatsapp?: boolean;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }

    // Real-time validation for email and whatsapp
    if (name === 'email' && touched.email) {
      if (!validateEmail(value)) {
        setErrors((prev) => ({ ...prev, email: 'Please enter a valid email address' }));
      }
    }
    if (name === 'whatsapp' && touched.whatsapp) {
      const cleanPhone = value.replace(/[\s\-\(\)]/g, '');
      if (cleanPhone && !validatePhone(value)) {
        setErrors((prev) => ({
          ...prev,
          whatsapp: 'Please enter a valid international number (e.g., +91 9876543210)',
        }));
      }
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    if (name === 'email' && value && !validateEmail(value)) {
      setErrors((prev) => ({ ...prev, email: 'Please enter a valid email address' }));
    }
    if (name === 'whatsapp' && value && !validatePhone(value)) {
      setErrors((prev) => ({
        ...prev,
        whatsapp: 'Please enter a valid international number (e.g., +91 9876543210)',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: typeof errors = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!validatePhone(formData.whatsapp)) {
      newErrors.whatsapp = 'Please enter a valid international number (e.g., +91 9876543210)';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({ email: true, whatsapp: true });
      return;
    }

    setLoading(true);
    setSubmitError(null);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

      if (!serviceId || !templateId || serviceId === 'your_service_id_here' || templateId === 'your_template_id_here') {
        throw new Error('EmailJS is not configured. Please set up your environment variables.');
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        whatsapp: formData.whatsapp,
        country: formData.country,
        service: formData.service,
      };

      await emailjs.send(serviceId, templateId, templateParams);

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        whatsapp: '',
        country: '',
        service: '',
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="glass-card rounded-3xl p-10 text-center">
        <svg className="mx-auto mb-4" width="48" height="48" viewBox="0 0 48 48" fill="none">
          <polygon points="24,4 44,24 24,44 4,24" fill="none" stroke="#D4AF37" strokeWidth="2" />
          <path d="M16 24l6 6 10-12" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3
          className="font-serif text-2xl text-white mb-3"
          style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
        >
          Message Received
        </h3>
        <p className="text-sm text-white/50 font-light">
          Message received! We'll respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 md:p-10 space-y-5" noValidate>
      <h3
        className="font-serif text-2xl text-white mb-2"
        style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
      >
        Start the Conversation
      </h3>
      <p className="text-xs text-white/40 font-light mb-6 tracking-wide">
        We respond within 24 hours. No commitment required.
      </p>

      {submitError && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-center animate-fade-in">
          <p className="text-sm text-red-400 font-light flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {submitError}
          </p>
        </div>
      )}

      {/* Name Field */}
      <div className="animate-fade-in" style={{ animationDelay: '0ms' }}>
        <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-white/40 font-bold block mb-2">
          Full Name <span className="text-[#D4AF37]/60">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g., Arjun Mehta"
          required
          aria-required="true"
          className="w-full bg-white/5 border border-[#1E3A5F] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all duration-300 font-light hover:border-[#D4AF37]/30"
        />
      </div>

      {/* Email Field */}
      <div className="animate-fade-in" style={{ animationDelay: '50ms' }}>
        <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-white/40 font-bold block mb-2">
          Email Address <span className="text-[#D4AF37]/60">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="e.g., arjun@company.com"
          required
          aria-required="true"
          aria-invalid={touched.email && !!errors.email}
          aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
          className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:ring-1 transition-all duration-300 font-light hover:border-[#D4AF37]/30 ${
            touched.email && errors.email
              ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500'
              : 'border-[#1E3A5F] focus:border-[#D4AF37] focus:ring-[#D4AF37]'
          }`}
        />
        {touched.email && errors.email && (
          <p id="email-error" className="text-[10px] text-red-400 mt-1.5 flex items-center gap-1 animate-slide-down">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.email}
          </p>
        )}
      </div>

      {/* WhatsApp Field */}
      <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
        <label htmlFor="whatsapp" className="text-[10px] uppercase tracking-widest text-white/40 font-bold block mb-2">
          WhatsApp Number <span className="text-[#D4AF37]/60">*</span>
        </label>
        <input
          type="tel"
          id="whatsapp"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="e.g., +91 9876543210"
          required
          aria-required="true"
          aria-invalid={touched.whatsapp && !!errors.whatsapp}
          aria-describedby={touched.whatsapp && errors.whatsapp ? 'whatsapp-error' : 'whatsapp-hint'}
          className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:ring-1 transition-all duration-300 font-light hover:border-[#D4AF37]/30 ${
            touched.whatsapp && errors.whatsapp
              ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500'
              : 'border-[#1E3A5F] focus:border-[#D4AF37] focus:ring-[#D4AF37]'
          }`}
        />
        {touched.whatsapp && errors.whatsapp ? (
          <p id="whatsapp-error" className="text-[10px] text-red-400 mt-1.5 flex items-center gap-1 animate-slide-down">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.whatsapp}
          </p>
        ) : (
          <p id="whatsapp-hint" className="text-[9px] text-white/30 mt-1.5 italic">
            Include country code for international format
          </p>
        )}
      </div>

      {/* Country Field */}
      <div className="animate-fade-in" style={{ animationDelay: '150ms' }}>
        <label htmlFor="country" className="text-[10px] uppercase tracking-widest text-white/40 font-bold block mb-2">
          Country <span className="text-[#D4AF37]/60">*</span>
        </label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="e.g., India"
          required
          aria-required="true"
          className="w-full bg-white/5 border border-[#1E3A5F] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all duration-300 font-light hover:border-[#D4AF37]/30"
        />
      </div>

      {/* Service Dropdown */}
      <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
        <label htmlFor="service" className="text-[10px] uppercase tracking-widest text-white/40 font-bold block mb-2">
          Service Required <span className="text-[#D4AF37]/60">*</span>
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          aria-required="true"
          className="w-full bg-[#163A66] border border-[#1E3A5F] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all duration-300 font-light appearance-none cursor-pointer hover:border-[#D4AF37]/30"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%23D4AF37' strokeWidth='1.5' fill='none' strokeLinecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
        >
          <option value="" disabled className="text-white/40">
            Select a service...
          </option>
          {services.map((svc) => (
            <option key={svc} value={svc} className="bg-[#163A66]">
              {svc}
            </option>
          ))}
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="gold-fill-btn w-full py-4 rounded-xl text-sm font-bold tracking-widest uppercase mt-2 animate-fade-in hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        style={{ animationDelay: '250ms' }}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          'Submit Enquiry'
        )}
      </button>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }
      `}</style>
    </form>
  );
}