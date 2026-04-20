import React from 'react';

/* BENTO GRID AUDIT:
   Array has 4 cards: [Execution, BothSides, Networks, StructureFirst]
   Row 1: [col-1: Execution cs-1] [col-2: BothSides cs-1]
   Row 2: [col-1: Networks cs-1] [col-2: StructureFirst cs-1]
   Placed 4/4 ✓
*/
const whyItems = [
  {
    id: 'execution',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 2L2 8v10l11 6 11-6V8L13 2z" stroke="#D4AF37" strokeWidth="1.2" fill="none" />
        <path d="M13 2v16M2 8l11 6 11-6" stroke="#D4AF37" strokeWidth="1.2" />
      </svg>
    ),
    title: 'Cross-Border Execution',
    desc: 'Not advisory on paper. We execute — company formation, banking, supplier contracts, and trade flows.',
  },
  {
    id: 'bothsides',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M4 13h18M4 13l6-6M4 13l6 6M22 13l-6-6M22 13l-6 6" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Both Sides of Trade',
    desc: 'We operate as buyer, seller, and advisor simultaneously — giving us ground-level intelligence most consultants lack.',
  },
  {
    id: 'networks',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="3" stroke="#D4AF37" strokeWidth="1.2" />
        <circle cx="4" cy="6" r="2" stroke="#D4AF37" strokeWidth="1.2" />
        <circle cx="22" cy="6" r="2" stroke="#D4AF37" strokeWidth="1.2" />
        <circle cx="4" cy="20" r="2" stroke="#D4AF37" strokeWidth="1.2" />
        <circle cx="22" cy="20" r="2" stroke="#D4AF37" strokeWidth="1.2" />
        <path d="M6 7l5 5M20 7l-5 5M6 19l5-5M20 19l-5-5" stroke="#D4AF37" strokeWidth="1" />
      </svg>
    ),
    title: 'Verified Networks',
    desc: 'Buyers, suppliers, bankers, and legal partners — pre-vetted across all five jurisdictions. No cold introductions.',
  },
  {
    id: 'structurefirst',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="3" y="3" width="8" height="8" stroke="#D4AF37" strokeWidth="1.2" />
        <rect x="15" y="3" width="8" height="8" stroke="#D4AF37" strokeWidth="1.2" />
        <rect x="3" y="15" width="8" height="8" stroke="#D4AF37" strokeWidth="1.2" />
        <rect x="15" y="15" width="8" height="8" stroke="#D4AF37" strokeWidth="1.2" />
        <path d="M11 7h4M19 11v4M15 19h-4M7 15v-4" stroke="#D4AF37" strokeWidth="1" strokeDasharray="2,2" />
      </svg>
    ),
    title: 'Structure-First Thinking',
    desc: 'We don\'t sell services. We solve structural problems. Every recommendation is driven by your long-term architecture.',
  },
];

const targetFor = [
  'Exporters & Importers', 'SaaS Founders', 'Cross-Border Traders',
  'HNI Investors', 'Consultants Scaling Globally',
];

const notFor = [
  'Local-only businesses', 'Price-sensitive clients', 'Early-stage without clarity',
];

export default function WhyDGSection() {
  return (
    <section className="py-20 px-6 md:px-10 bg-[#163A66] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 reveal">
          <span className="section-label block mb-4">Why DG International</span>
          <h2
            className="font-serif text-4xl md:text-5xl font-light tracking-tight text-white"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Built for Serious Businesses
          </h2>
        </div>

        {/* Pixel-gap grid — 2x2 */}
        <div className="reveal pixel-gap-grid grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-[#1E3A5F] mb-16">
          {whyItems?.map((item) => (
            <div
              key={item?.id}
              className="bg-[#163A66] p-10 flex flex-col justify-between min-h-60 group hover:bg-[#132F5B] transition-colors duration-300"
            >
              <div className="mb-auto">
                {item?.icon}
              </div>
              <div className="mt-6">
                <h4
                  className="font-serif text-xl text-white mb-3"
                  style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                >
                  {item?.title}
                </h4>
                <p className="text-sm text-white/50 leading-relaxed font-light">
                  {item?.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Who it's for / not for */}
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#132F5B] rounded-2xl p-8 border border-[#1E3A5F]">
            <p className="section-label mb-5">This Is For</p>
            <ul className="space-y-3">
              {targetFor?.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/70 font-light">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#0D1E33] rounded-2xl p-8 border border-[#1E3A5F]">
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-5">
              This Is Not For
            </p>
            <ul className="space-y-3">
              {notFor?.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/30 font-light">
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