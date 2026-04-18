import React from 'react';
import LeadForm from '@/app/components/LeadForm';

export default function FinalCTASection() {
  return (
    <section id="contact" className="py-20 px-6 md:px-10 bg-[#0B1F3A] relative overflow-hidden">
      <div className="noise-overlay" />

      {/* Background glow */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-[#D4AF37]/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-[#132F5B]/80 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* CTA Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-label block mb-5">Get Started</span>
          <h2
            className="font-serif text-4xl md:text-6xl font-light tracking-tight text-white leading-[1.05] mb-5"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Serious About Structuring
            <br />
            <span className="italic text-white/50">Your Global Business?</span>
          </h2>
          <p className="text-sm text-white/50 font-light max-w-md mx-auto leading-relaxed">
            We structure global businesses and facilitate cross-border trade with
            clarity, trust, and execution.
          </p>
        </div>

        {/* Two column: Form + Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Lead Form */}
          <div className="reveal">
            <LeadForm />
          </div>

          {/* Contact Details */}
          <div className="reveal flex flex-col gap-6 justify-center" style={{ transitionDelay: '150ms' }}>
            {/* Direct contact card */}
            <div className="bg-[#132F5B] rounded-3xl p-8 border border-[#1E3A5F]">
              <p className="section-label mb-5">Direct Contact</p>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="7" r="4" stroke="#D4AF37" strokeWidth="1.5" />
                    <path d="M2 18c0-4 3.6-7 8-7s8 3 8 7" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p
                    className="font-serif text-lg text-white"
                    style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                  >
                    Dheeraj Galani
                  </p>
                  <p className="text-xs text-white/40 tracking-wide">Founder, DG International</p>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:+919997906055"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-200 group"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#D4AF37]">
                    <path d="M3 2h3l1.5 4-2 1.5c1 2 3 4 5 5L12 10.5l4 1.5v3c0 1.1-.9 2-2 2C5.4 17 -1 10.6-1 2.5A2 2 0 011 .5L3 2z" stroke="currentColor" strokeWidth="1.2" fill="none" />
                  </svg>
                  +91 9997906055
                </a>
                <a
                  href="https://wa.me/919997906055"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-[#D4AF37] transition-colors duration-200 group"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#D4AF37]">
                    <path d="M13.6 2.4A7.8 7.8 0 002.4 13.6L1 15l1.4-1.4A7.8 7.8 0 0013.6 2.4z" stroke="currentColor" strokeWidth="1.2" fill="none" />
                    <path d="M6 6.5c.5 1 1 2 2 2.5l.8-.8c.2-.2.4-.2.6 0l1.2 1.2c.2.2.2.4 0 .6L9.5 11c-2.5-.5-4.5-2.5-5-5l1-.8c.2-.2.5-.2.6 0L7.3 6.4c.2.2.2.4-.3.6l-.8.5z" stroke="currentColor" strokeWidth="1" />
                  </svg>
                  WhatsApp Now
                </a>
                <a
                  href="mailto:dhirajgalani@dginternational.in"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#D4AF37]">
                    <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
                    <path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                  dhirajgalani@dginternational.in
                </a>
              </div>
            </div>

            {/* Address card */}
            <div className="bg-[#0D2347] rounded-3xl p-8 border border-[#1E3A5F]">
              <p className="section-label mb-4">Office</p>
              <div className="flex items-start gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#D4AF37] mt-0.5 shrink-0">
                  <path d="M8 1C5.2 1 3 3.2 3 6c0 3.8 5 9 5 9s5-5.2 5-9c0-2.8-2.2-5-5-5z" stroke="currentColor" strokeWidth="1.2" fill="none" />
                  <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
                </svg>
                <div>
                  <p className="text-sm text-white/60 font-light leading-relaxed">
                    402, Rose Queen Building
                    <br />
                    15th Road, Khar West
                    <br />
                    Mumbai 400052, India
                  </p>
                </div>
              </div>
            </div>

            {/* Positioning line */}
            <div className="border-l border-[#D4AF37]/30 pl-6">
              <p
                className="font-serif text-base text-white/70 italic leading-relaxed"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                &ldquo;Trusted Partner. Reliable Execution.
                <br />
                Global Growth.&rdquo;
              </p>
              <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mt-2">
                DG International
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}