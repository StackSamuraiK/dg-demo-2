'use client';

import React, { useState } from 'react';

const services = [
  'Trade Facilitation',
  'Global Sourcing Advisory',
  'Singapore Structuring',
  'UAE & Hong Kong Setup',
  'Dubai Investment Advisory',
  'General Enquiry',
];

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    country: '',
    service: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend integration point
    setSubmitted(true);
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
          Dheeraj will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 md:p-10 space-y-5">
      <h3
        className="font-serif text-2xl text-white mb-2"
        style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
      >
        Start the Conversation
      </h3>
      <p className="text-xs text-white/40 font-light mb-6 tracking-wide">
        We respond within 24 hours. No commitment required.
      </p>

      {[
        { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Arjun Mehta' },
        { name: 'email', label: 'Email Address', type: 'email', placeholder: 'arjun@company.com' },
        { name: 'whatsapp', label: 'WhatsApp Number', type: 'tel', placeholder: '+91 9876543210' },
        { name: 'country', label: 'Country', type: 'text', placeholder: 'India' },
      ].map((field) => (
        <div key={field.name}>
          <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold block mb-2">
            {field.label}
          </label>
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name as keyof typeof formData]}
            onChange={handleChange}
            placeholder={field.placeholder}
            required
            className="w-full bg-white/5 border border-[#1E3A5F] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#D4AF37]/50 transition-colors duration-200 font-light"
          />
        </div>
      ))}

      <div>
        <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold block mb-2">
          Service Required
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full bg-[#0B1F3A] border border-[#1E3A5F] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]/50 transition-colors duration-200 font-light appearance-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%23D4AF37' strokeWidth='1.5' fill='none' strokeLinecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
        >
          <option value="" disabled>Select a service</option>
          {services.map((svc) => (
            <option key={svc} value={svc} className="bg-[#0B1F3A]">
              {svc}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="gold-fill-btn w-full py-4 rounded-xl text-sm font-bold tracking-widest uppercase mt-2"
      >
        Submit Enquiry
      </button>
    </form>
  );
}