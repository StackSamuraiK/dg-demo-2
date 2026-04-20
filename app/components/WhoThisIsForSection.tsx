'use client';

import React from 'react';

const targetFor = [
  'Exporters with international markets',
  'SaaS founders expanding globally',
  'Agencies with global clients',
  'Cross-border traders',
  'HNI Investors',
];

const notFor = [
  'Local-only businesses',
  'Early-stage without clarity',
  'Price-sensitive clients',
  'One-time transactions',
];

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <polygon points="7,0 14,7 7,14 0,7" fill="#D4AF37" />
  </svg>
);

const CrossIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 2l8 8M10 2l-8 8" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function WhoThisIsForSection() {
  return (
    <section className="py-20 px-6 md:px-10 bg-[#0B1F3A] relative">
      <div className="noise-overlay" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <span className="section-label block mb-4">Who We Work With</span>
          <h2
            className="font-serif text-4xl md:text-5xl font-light tracking-tight text-white"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Who This Is For
          </h2>
        </div>

        {/* Who it's for / not for grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Who This Is For */}
          <div className="bg-[#132F5B] rounded-2xl p-8 border border-[#1E3A5F] hover:border-[#D4AF37]/30 transition-colors duration-300">
            <p className="section-label mb-6">This Is For</p>
            <ul className="space-y-4">
              {targetFor.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/70 font-light">
                  <span className="flex-shrink-0">
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Not For */}
          <div className="bg-[#0D1E33] rounded-2xl p-8 border border-[#1E3A5F] hover:border-[#6B7280]/30 transition-colors duration-300">
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-6">
              This Is Not For
            </p>
            <ul className="space-y-4">
              {notFor.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/30 font-light">
                  <span className="flex-shrink-0">
                    <CrossIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
