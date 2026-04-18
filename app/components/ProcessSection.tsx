import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Diagnose',
    subtitle: 'Business Model Analysis',
    desc: 'We map your current structure — capital flows, jurisdictions, counterparties, and gaps. No assumptions. Fact-based.',
  },
  {
    num: '02',
    title: 'Design',
    subtitle: 'Structure & Sourcing Plan',
    desc: 'A bespoke cross-border structure tailored to your trade volume, capital base, and expansion horizon.',
  },
  {
    num: '03',
    title: 'Execute',
    subtitle: 'With Verified Partners',
    desc: 'Legal, banking, supplier, and regulatory execution through our vetted network across all five jurisdictions.',
  },
  {
    num: '04',
    title: 'Advise',
    subtitle: 'Ongoing Advisory',
    desc: 'Markets shift. Regulations change. We stay engaged — not transactional. Your structure evolves with your business.',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 px-6 md:px-10 bg-[#0B1F3A] relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          {/* Left label */}
          <div className="lg:col-span-4 reveal lg:sticky lg:top-32">
            <span className="section-label block mb-5">How We Work</span>
            <h2
              className="font-serif text-4xl md:text-5xl font-light tracking-tight text-white leading-[1.05] mb-6"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Four Phases.
              <br />
              <span className="italic text-white/50">One</span>
              <br />
              <span className="italic text-white/50">Outcome.</span>
            </h2>
            <p className="text-sm text-white/50 leading-relaxed font-light max-w-xs">
              Methodical. Not rushed. We invest time in understanding before we
              recommend.
            </p>
          </div>

          {/* Right: Steps */}
          <div className="lg:col-span-8 space-y-0">
            {steps?.map((step, i) => (
              <div
                key={step?.num}
                className="reveal group border-b border-[#1E3A5F] py-10 grid grid-cols-12 gap-4 items-start hover:bg-[#132F5B]/20 transition-colors duration-300 px-3 rounded-lg cursor-default"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="col-span-2 md:col-span-1">
                  <span
                    className="font-serif text-3xl text-[#D4AF37]/20 group-hover:text-[#D4AF37]/60 transition-colors duration-300 font-light"
                    style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                  >
                    {step?.num}
                  </span>
                </div>
                <div className="col-span-10 md:col-span-11">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3
                      className="font-serif text-2xl text-white group-hover:translate-x-1 transition-transform duration-400"
                      style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                    >
                      {step?.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-widest text-[#D4AF37]/50 font-bold">
                      {step?.subtitle}
                    </span>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed font-light max-w-lg">
                    {step?.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}