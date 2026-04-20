'use client';

import React, { useRef } from 'react';

interface Service {
  id: string;
  num: string;
  title: string;
  desc: string;
  whoFor: string;
  tags: string[];
  icon: React.ReactNode;
}

const GoldIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="w-12 h-12 rounded-xl border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-6 group-hover:border-[#D4AF37]/70 transition-colors duration-300">
    {children}
  </div>
);

const services: Service[] = [
  {
    id: 'trade',
    num: '01',
    title: 'Trade Facilitation',
    desc: 'Connecting verified buyers and suppliers across India, UAE, and ASEAN. Commission-only model — we earn when you do.',
    whoFor: 'For exporters, importers, and cross-border traders',
    tags: ['India', 'UAE', 'ASEAN', 'Commission-Only'],
    icon: (
      <GoldIcon>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M3 11h16M11 3l8 8-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="11" cy="11" r="2" fill="currentColor" />
        </svg>
      </GoldIcon>
    ),
  },
  {
    id: 'sourcing',
    num: '02',
    title: 'Global Sourcing Advisory',
    desc: 'Supplier verification, quality control, negotiation support. From manufacturer to final delivery — end-to-end sourcing clarity.',
    whoFor: 'For manufacturers and product businesses',
    tags: ['Verification', 'Quality Control', 'Negotiation'],
    icon: (
      <GoldIcon>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
          <path d="M11 3a8 8 0 010 16M3 11h16" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </GoldIcon>
    ),
  },
  {
    id: 'singapore',
    num: '03',
    title: 'Singapore Structuring',
    desc: 'Holding companies, banking alignment, global revenue flow. Singapore as the apex of your international structure.',
    whoFor: 'For HNIs and businesses expanding globally',
    tags: ['Holding Co.', 'Banking', 'Revenue Flow'],
    icon: (
      <GoldIcon>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect x="3" y="8" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 8V6a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="11" cy="14" r="1.5" fill="currentColor" />
        </svg>
      </GoldIcon>
    ),
  },
  {
    id: 'uae',
    num: '04',
    title: 'UAE & Hong Kong Setup',
    desc: 'Jurisdiction strategy plus full execution. Free zone selection, banking introduction, regulatory compliance.',
    whoFor: 'For businesses entering Middle East and Asia markets',
    tags: ['UAE', 'Hong Kong', 'Free Zone', 'Banking'],
    icon: (
      <GoldIcon>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <polygon points="11,2 20,7 20,15 11,20 2,15 2,7" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M11 2v18M2 7l18 8M20 7L2 15" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        </svg>
      </GoldIcon>
    ),
  },
  {
    id: 'dubai',
    num: '05',
    title: 'Dubai Investment Advisory',
    desc: 'Selective real estate opportunities aligned with your global structuring objectives. Not speculative — strategic.',
    whoFor: 'For HNIs seeking strategic investments',
    tags: ['Real Estate', 'Strategic', 'HNI'],
    icon: (
      <GoldIcon>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M3 19V9l8-6 8 6v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="8" y="13" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </GoldIcon>
    ),
  },
];

export default function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'right' ? 420 : -420, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-[#163A66] relative overflow-hidden">
      <div className="noise-overlay" />

      {/* Dark navy inner section */}
      <div className="bg-[#0D2347] rounded-[2.5rem] mx-4 md:mx-8 overflow-hidden relative border border-[#1E3A5F]">
        <div className="noise-overlay" />

        <div className="px-8 md:px-12 pt-14 pb-10 flex items-end justify-between relative z-10">
          <div>
            <span className="section-label block mb-4">What We Do</span>
            <h2
              className="font-serif text-4xl md:text-5xl font-light tracking-tight text-white"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Our Services
            </h2>
          </div>
          <div className="flex gap-3 pb-2">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:border-[#D4AF37]/60 hover:text-[#D4AF37] transition-colors text-white"
              aria-label="Scroll left"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:border-[#D4AF37]/60 hover:text-[#D4AF37] transition-colors text-white"
              aria-label="Scroll right"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal scroll cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-12 px-8 md:px-12 snap-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((svc, i) => (
            <div
              key={svc.id}
              className="min-w-75 md:min-w-85 snap-center group relative shrink-0"
            >
              <div
                className="relative h-95 bg-[#132F5B] border border-[#1E3A5F] rounded-2xl p-8 flex flex-col justify-between service-card-hover"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Card offset shadow */}
                <div className="absolute top-3 -right-2 w-full h-full border border-[#D4AF37]/10 rounded-2xl -z-10 group-hover:top-1.5 group-hover:-right-1 transition-all duration-300" />

                <div>
                  <div className="flex items-start justify-between mb-2">
                    {svc.icon}
                    <span className="text-[10px] text-white/20 font-bold tracking-widest mt-2">
                      {svc.num}
                    </span>
                  </div>
                  <h3
                    className="font-serif text-xl text-white mb-3 group-hover:translate-x-1 transition-transform duration-400"
                    style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                  >
                    {svc.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed font-light mb-4">
                    {svc.desc}
                  </p>
                  <div className="mb-5">
                    <p className="text-xs text-[#D4AF37]/80 font-medium">
                      {svc.whoFor}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2.5 py-1 rounded-full border border-[#D4AF37]/20 text-[#D4AF37]/70 font-medium tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    Discuss This Service
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}