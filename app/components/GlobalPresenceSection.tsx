import React from 'react';
import AppImage from '@/components/ui/AppImage';

const markets = [
{ name: 'India', role: 'Trade Origin & Capital Base', x: '68%', y: '52%' },
{ name: 'UAE', role: 'Structuring & Distribution Hub', x: '55%', y: '45%' },
{ name: 'Singapore', role: 'Holding & Banking Apex', x: '78%', y: '60%' },
{ name: 'Hong Kong', role: 'APAC Access Point', x: '83%', y: '46%' },
{ name: 'ASEAN', role: 'Manufacturing & Sourcing Belt', x: '80%', y: '57%' }];


const industries = [
'Chemicals', 'Pharma & APIs', 'Engineering Goods',
'Food Products', 'Textiles', 'IT Services'];


const stats = [
{ value: '5', label: 'Active Jurisdictions' },
{ value: '12+', label: 'Industries Served' },
{ value: '500+', label: 'Trade Connections' },
{ value: '8+', label: 'Years of Execution' }];


export default function GlobalPresenceSection() {
  return (
    <section id="presence" className="py-20 px-4 md:px-8 bg-[#0B1F3A] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 reveal">
          <span className="section-label block mb-4">Global Presence</span>
          <h2
            className="font-serif text-4xl md:text-5xl font-light tracking-tight text-white"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            
            Where We Operate
          </h2>
        </div>

        {/* BENTO GRID AUDIT:
             Array: [MapImage(large), IndiaUAE, Singapore, ASEAN]
             Row 1: [col-1+2: MapImage cs-2 rs-2] [col-3: IndiaUAE cs-1 rs-1] [col-4: Singapore cs-1 rs-2]
             Row 2: [col-1+2: MapImage cont.] [col-3: ASEAN cs-1 rs-1] [col-4: Singapore cont.]
             Placed 4/4 ✓
          */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 h-105 md:h-130 mb-12 reveal">
          {/* Large map cell — col-span-2 row-span-2 */}
          <div className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl group border border-[#1E3A5F]">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_1302e099e-1768939886664.png"
              alt="Dark atmospheric world map with glowing blue network connections, deep space aesthetic, dark background with minimal light"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105 brightness-75"
              sizes="(max-width: 768px) 100vw, 50vw" />
            
            <div className="absolute inset-0 bg-linear-to-t from-[#0B1F3A]/70 via-transparent to-transparent" />

            {/* Gold nodes on map */}
            {markets?.map((m) =>
            <div
              key={m?.name}
              className="absolute flex flex-col items-center"
              style={{ left: m?.x, top: m?.y, transform: 'translate(-50%, -50%)' }}>
              
                <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse-gold shadow-[0_0_8px_#D4AF37]" />
                <span className="text-[9px] text-[#D4AF37] font-bold tracking-wide mt-1 whitespace-nowrap hidden md:block">
                  {m?.name}
                </span>
              </div>
            )}

            {/* SVG connection lines */}
            <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 600 500" preserveAspectRatio="xMidYMid slice">
              <line x1="408" y1="260" x2="330" y2="225" stroke="#D4AF37" strokeWidth="0.8" strokeDasharray="4,4" />
              <line x1="408" y1="260" x2="468" y2="300" stroke="#D4AF37" strokeWidth="0.8" strokeDasharray="4,4" />
              <line x1="468" y1="300" x2="498" y2="230" stroke="#D4AF37" strokeWidth="0.8" strokeDasharray="4,4" />
              <line x1="468" y1="300" x2="480" y2="285" stroke="#D4AF37" strokeWidth="0.8" strokeDasharray="4,4" />
            </svg>

            <div className="absolute bottom-5 left-5">
              <p className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold mb-1">Coverage</p>
              <p className="text-white/60 text-xs">5 Strategic Jurisdictions</p>
            </div>
          </div>

          {/* India + UAE cell */}
          <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl group border border-[#1E3A5F]">
            <AppImage
              src="https://images.unsplash.com/photo-1587959133322-6f38bf3d21ad"
              alt="Mumbai city skyline at night, dark atmospheric, deep navy blue lighting, financial district"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105 brightness-60"
              sizes="(max-width: 768px) 50vw, 25vw" />
            
            <div className="absolute inset-0 bg-linear-to-t from-[#0B1F3A]/80 via-[#0B1F3A]/30 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p
                className="font-serif text-base text-white font-light"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                
                India · UAE
              </p>
              <p className="text-[10px] text-white/50 tracking-wide">Trade Origin</p>
            </div>
          </div>

          {/* Singapore cell — row-span-2 */}
          <div className="col-span-1 row-span-2 relative overflow-hidden rounded-2xl group border border-[#1E3A5F]">
            <AppImage
              src="https://images.unsplash.com/photo-1598256860205-bfea7fe9fa7b"
              alt="Singapore skyline at dusk, dark moody sky, city lights reflecting on water, atmospheric dim lighting"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105 brightness-60"
              sizes="(max-width: 768px) 50vw, 25vw" />
            
            <div className="absolute inset-0 bg-linear-to-t from-[#0B1F3A]/80 via-[#0B1F3A]/20 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p
                className="font-serif text-base text-white font-light"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                
                Singapore
              </p>
              <p className="text-[10px] text-white/50 tracking-wide">Holding Apex</p>
            </div>
          </div>

          {/* ASEAN cell */}
          <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl group border border-[#1E3A5F]">
            <AppImage
              src="https://images.unsplash.com/photo-1724402864510-d425582edcfb"
              alt="Industrial port at night with shipping containers, dark atmospheric, minimal lighting, deep shadows"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105 brightness-60"
              sizes="(max-width: 768px) 50vw, 25vw" />
            
            <div className="absolute inset-0 bg-linear-to-t from-[#0B1F3A]/80 via-[#0B1F3A]/30 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p
                className="font-serif text-base text-white font-light"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                
                ASEAN
              </p>
              <p className="text-[10px] text-white/50 tracking-wide">Sourcing Belt</p>
            </div>
          </div>
        </div>

        {/* Industries */}
        <div className="reveal mb-12">
          <p className="section-label mb-5">Industries We Serve</p>
          <div className="flex flex-wrap gap-3">
            {industries?.map((ind) =>
            <span
              key={ind}
              className="px-4 py-2 rounded-full border border-[#1E3A5F] text-sm text-white/60 font-medium hover:border-[#D4AF37]/40 hover:text-white/80 transition-colors duration-200">
              
                {ind}
              </span>
            )}
          </div>
        </div>

        {/* Stats row */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1E3A5F] border border-[#1E3A5F] rounded-2xl overflow-hidden">
          {stats?.map((stat) =>
          <div
            key={stat?.label}
            className="bg-[#0B1F3A] p-8 text-center hover:bg-[#132F5B] transition-colors duration-300">
            
              <div
              className="text-4xl font-serif text-[#D4AF37] mb-2"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              
                {stat?.value}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-medium">
                {stat?.label}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}