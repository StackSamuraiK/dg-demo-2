'use client';

import React from 'react';

interface OwnerVisionSectionProps {
  className?: string;
}

export default function OwnerVisionSection({ className = '' }: OwnerVisionSectionProps) {
  return (
    <section className={`py-20 px-6 md:px-10 bg-[#0B1F3A] relative ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 reveal">
          <span className="section-label block mb-4">About the Founder</span>
          <h2
            className="font-serif text-4xl md:text-5xl font-light tracking-tight text-white"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Vision for Cross-Border Excellence
          </h2>
        </div>

        {/* Glass Card with Owner Image and Vision */}
        <div className="reveal glass-card bg-[#132F5B]/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-[#1E3A5F] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Side - Owner Image */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#D4AF37]/30 shadow-2xl relative">
                {/* Placeholder image - professional business portrait */}
                <img
                  src="/hero-image.jpeg"
                  alt="DG International Founder - Professional portrait"
                  className="w-full h-full object-cover object-center"
                />

                {/* Scrim overlay for subtle darkening */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/60 via-transparent to-transparent" />

                {/* Gold accent frame */}
                <div className="absolute inset-0 border-4 border-[#D4AF37]/10 rounded-2xl pointer-events-none" />
              </div>

              {/* Decorative diamond badge */}
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-[#0B1F3A] rounded-full flex items-center justify-center border-2 border-[#D4AF37]/30 shadow-xl">
                <svg width="20" height="20" viewBox="0 0 20 20" className="text-[#D4AF37]">
                  <polygon points="10,0 20,10 10,20 0,10" fill="#D4AF37" />
                </svg>
              </div>
            </div>

            {/* Right Side - Vision Statement */}
            <div className="order-1 lg:order-2">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <svg width="20" height="20" viewBox="0 0 20 20" className="text-[#D4AF37]">
                    <polygon points="10,0 20,10 10,20 0,10" fill="#D4AF37" />
                  </svg>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                    Founder's Vision
                  </span>
                </div>

                <h3
                  className="font-serif text-3xl md:text-4xl font-light text-white mb-6 leading-tight"
                  style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                >
                  Building Bridges, Not Barriers
                </h3>
              </div>

              <div className="space-y-5">
                <p className="text-base md:text-lg text-white/80 leading-relaxed font-light">
                  Cross-border advisory isn't about paperwork — it's about understanding how businesses actually operate across jurisdictions.
                </p>

                <p className="text-base md:text-lg text-white/80 leading-relaxed font-light">
                  My vision is simple: create structures that work in practice, not just in theory. We align capital positioning, jurisdiction leverage, and trade flows to build businesses that scale seamlessly across India, UAE, ASEAN, Singapore, and Hong Kong.
                </p>

                <p className="text-base md:text-lg text-white/70 leading-relaxed font-light italic">
                  "Every recommendation we make is driven by one question: Does this serve the client's long-term architecture?"
                </p>
              </div>

              {/* Signature-style closing */}
              <div className="mt-8 pt-6 border-t border-[#1E3A5F]/60">
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-[#D4AF37]/50" />
                  <div>
                    <p className="text-white font-semibold text-sm">DG International</p>
                    <p className="text-white/50 text-xs uppercase tracking-wider">Founder & Principal Advisor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
