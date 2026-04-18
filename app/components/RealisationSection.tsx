import React from 'react';

const painPoints = [
  {
    num: '01',
    title: 'Capital Stuck in One Jurisdiction',
    desc: 'Revenue generated globally but trapped in a single banking system. No offshore flexibility. No capital efficiency.',
  },
  {
    num: '02',
    title: 'Inefficient Cross-Border Payment Flows',
    desc: 'Wire transfers, currency conversion losses, delayed settlements. The infrastructure hasn\'t caught up with your ambition.',
  },
  {
    num: '03',
    title: 'Misaligned Global Banking',
    desc: 'Operating in UAE or Singapore without the right banking relationships means friction at every transaction.',
  },
  {
    num: '04',
    title: 'Supplier Trust Gaps',
    desc: 'Unverified counterparties, quality inconsistencies, and opaque supply chains erode margins and reputation.',
  },
  {
    num: '05',
    title: 'Fragmented Expansion Strategy',
    desc: 'Each market entry treated as a separate event. No structural coherence. No long-term scalability.',
  },
];

export default function RealisationSection() {
  return (
    <section className="py-24 px-6 md:px-10 bg-[#0B1F3A] relative overflow-hidden">
      <div className="noise-overlay" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Headline */}
          <div className="lg:col-span-5 reveal lg:sticky lg:top-32">
            <span className="section-label block mb-5">The Problem</span>
            <h2
              className="font-serif text-4xl md:text-5xl font-light leading-[1.1] tracking-tight text-white mb-6"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Most Businesses
              <br />
              Expand Globally.
              <br />
              <span className="italic text-white/50">But Stay</span>
              <br />
              <span className="italic text-white/50">Structurally Local.</span>
            </h2>
            <p className="text-sm text-white/50 leading-relaxed font-light max-w-xs">
              The gap between where you operate and how you&apos;re structured
              is costing you capital, time, and market access.
            </p>

            {/* Reframe callout */}
            <div className="mt-10 p-6 border border-[#D4AF37]/20 rounded-2xl bg-[#132F5B]/50">
              <p
                className="font-serif text-lg text-[#D4AF37] italic leading-snug"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                &ldquo;This is not about setup.
                <br />
                This is about structure.&rdquo;
              </p>
            </div>
          </div>

          {/* Right: Pain points list */}
          <div className="lg:col-span-7">
            <ul className="space-y-0">
              {painPoints?.map((point, i) => (
                <li
                  key={point?.num}
                  className="reveal group border-b border-[#1E3A5F] py-8 flex gap-6 items-start cursor-default hover:bg-[#132F5B]/30 transition-colors duration-300 px-2 rounded-lg"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="text-[10px] font-bold text-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-colors duration-300 mt-1 tracking-widest shrink-0 w-8">
                    {point?.num}
                  </span>
                  <div className="flex-1">
                    <h3
                      className="font-serif text-lg text-white mb-2 group-hover:translate-x-2 transition-transform duration-500"
                      style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                    >
                      {point?.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed font-light">
                      {point?.desc}
                    </p>
                  </div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-3 group-hover:translate-x-0 mt-1"
                  >
                    <path d="M4 10h12M10 4l6 6-6 6" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Reframe strip */}
        <div className="mt-20 reveal">
          <div className="bg-[#132F5B] rounded-3xl p-10 md:p-14 grid grid-cols-1 md:grid-cols-3 gap-10 border border-[#1E3A5F]">
            {[
              {
                title: 'Capital Positioning',
                desc: 'Align your capital structure with the jurisdictions that offer the most efficiency — not just the ones you happen to be registered in.',
              },
              {
                title: 'Jurisdiction Leverage',
                desc: 'Singapore, UAE, and Hong Kong exist for a reason. Used correctly, they compound your advantage. Used incorrectly, they add cost.',
              },
              {
                title: 'Long-Term Scalability',
                desc: 'A structure built for today\'s trade volume will break at scale. Design it once. Design it right.',
              },
            ]?.map((item) => (
              <div key={item?.title} className="border-l border-[#D4AF37]/30 pl-6">
                <h4
                  className="font-serif text-lg text-white mb-3"
                  style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                >
                  {item?.title}
                </h4>
                <p className="text-sm text-white/50 leading-relaxed font-light">
                  {item?.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}