import React from 'react';

interface TrustPoint {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const trustPoints: TrustPoint[] = [
  {
    id: 'india-asean-uae',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="9" stroke="#D4AF37" strokeWidth="1.2" />
        <circle cx="13" cy="13" r="3" stroke="#D4AF37" strokeWidth="1.2" />
        <path d="M13 2v4M13 20v4M2 13h4M20 13h4" stroke="#D4AF37" strokeWidth="1.2" />
        <circle cx="13" cy="7" r="1.5" fill="#D4AF37" />
        <circle cx="18" cy="16" r="1.5" fill="#D4AF37" />
        <circle cx="8" cy="16" r="1.5" fill="#D4AF37" />
      </svg>
    ),
    title: 'India–ASEAN–UAE Experience',
    description: 'Deep operational expertise across three strategic trade corridors with proven execution track record.',
  },
  {
    id: 'on-ground-support',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 3L5 10v10l8 3 8-3V10l-8-7z" stroke="#D4AF37" strokeWidth="1.2" fill="none" />
        <path d="M5 10l8 3 8-3M13 13v10" stroke="#D4AF37" strokeWidth="1.2" />
        <circle cx="13" cy="13" r="2" fill="#D4AF37" />
      </svg>
    ),
    title: 'On-Ground Support',
    description: 'Local teams in every market providing hands-on execution, not remote advisory from afar.',
  },
  {
    id: 'execution-focus',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="4" y="6" width="18" height="14" rx="1" stroke="#D4AF37" strokeWidth="1.2" />
        <path d="M8 12l3 3 7-7" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 9h18" stroke="#D4AF37" strokeWidth="1" />
      </svg>
    ),
    title: 'Execution Focus',
    description: 'We don\'t advise. We execute. Company formation, banking, contracts, and trade flows — done.',
  },
];

export default function TrustElementsSection() {
  return (
    <section className="py-20 px-6 md:px-10 bg-[#0B1F3A] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 reveal">
          <span className="section-label block mb-4">Why Trust Us</span>
          <h2
            className="font-serif text-4xl md:text-5xl font-light tracking-tight text-white"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Proven Ground Presence
          </h2>
        </div>

        {/* Trust Points Grid */}
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustPoints.map((point) => (
            <div
              key={point.id}
              className="bg-[#0B1F3A] rounded-2xl p-10 border border-[#1E3A5F] flex flex-col items-center text-center group hover:bg-[#132F5B] hover:border-[#D4AF37]/20 transition-all duration-300"
            >
              <div className="mb-6 p-4 bg-[#132F5B] rounded-full group-hover:bg-[#1E3A5F] transition-colors duration-300">
                {point.icon}
              </div>
              <h3
                className="font-serif text-xl text-white mb-4"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                {point.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed font-light">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Line */}
        <div className="reveal mt-16 text-center">
          <p className="text-xs text-white/30 font-light tracking-wide uppercase">
            With You From Start To Scale
          </p>
        </div>
      </div>
    </section>
  );
}
