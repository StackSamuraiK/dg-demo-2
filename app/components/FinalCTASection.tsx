import React from 'react';
import LeadForm from '@/app/components/LeadForm';

export default function FinalCTASection() {
  return (
    <section id="contact" className="py-20 px-6 md:px-10 bg-[#163A66] relative overflow-hidden">
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
                  +91 9997906055
                </a>
                <a
                  href="https://wa.me/919997906055"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-[#D4AF37] transition-colors duration-200 group"
                >
                  WhatsApp Now
                </a>
                <a
                  href="mailto:dhirajgalani@dginternational.in"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  dhirajgalani@dginternational.in
                </a>
              </div>
            </div>

            {/* Address card */}
            <div className="bg-[#0D2347] rounded-3xl p-8 border border-[#1E3A5F]">
              <p className="section-label mb-4">Office</p>
              <div className="flex items-start gap-3">
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