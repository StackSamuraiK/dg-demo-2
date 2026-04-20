'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';


export default function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef?.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.06}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="relative w-full min-h-screen pt-28 pb-16 px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end max-w-7xl mx-auto"
      id="hero">
      
      {/* Rotating Badge */}
      <div className="absolute top-28 right-6 md:right-10 z-20 pointer-events-none hidden md:block">
        <div className="relative w-24 h-24 flex items-center justify-center">
          <svg className="animate-spin-slow w-full h-full" viewBox="0 0 100 100">
            <path
              id="heroBadgePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="transparent" />

            <text
              fontSize="9"
              fontFamily="DM Sans, sans-serif"
              fontWeight="600"
              letterSpacing="2.5px"
              fill="#D4AF37">

              <textPath href="#heroBadgePath" startOffset="0%">
                GLOBAL ADVISORY · DG INTERNATIONAL ·
              </textPath>
            </text>
          </svg>
          {/* Diamond center */}
          <svg width="16" height="16" viewBox="0 0 16 16" className="absolute" fill="#D4AF37">
            <polygon points="8,0 16,8 8,16 0,8" />
          </svg>
        </div>
      </div>
      {/* Left Content */}
      <div className="lg:col-span-5 flex flex-col justify-center relative z-10 order-2 lg:order-1 pt-8 lg:pt-0">
        <div className="mb-10">
          <span className="section-label block mb-5">
            India · UAE · ASEAN · Singapore · Hong Kong
          </span>

          <h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight text-white mb-6"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>

            Cross-Border Structuring &amp; Trade Facilitation for India, UAE &amp; ASEAN Markets
          </h1>

          <p className="text-base md:text-lg text-white/70 leading-relaxed border-l border-[#D4AF37]/40 pl-5 mb-8 max-w-md font-light">
            We don&apos;t just set up companies. We align your structure with how your business actually operates.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="gold-fill-btn px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide text-center">

              Book Strategy Call
            </a>
            <a
              href="#services"
              className="gold-outline-btn px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide text-center">

              Discuss Your Business Structure
            </a>
          </div>
        </div>

      </div>
      {/* Right Arch Image + Form */}
      <div className="lg:col-span-7 h-[55vh] lg:h-[88vh] relative order-1 lg:order-2 z-10">
        <div className="absolute inset-0 arch-container overflow-hidden shadow-2xl border border-[#1E3A5F]">
          <div ref={parallaxRef} className="absolute inset-0 w-full h-[115%] -top-[7%]">
            <AppImage
              src="https://images.unsplash.com/photo-1634482895955-712847090dfd"
              alt="Dark atmospheric aerial view of city lights at night, deep shadows, urban financial district, low-key lighting"
              fill
              className="object-cover object-center"
              priority />
            
          </div>
          {/* Scrim for text legibility */}
          <div className="absolute inset-0 bg-linear-to-t from-[#163A66]/80 via-[#163A66]/30 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-br from-[#163A66]/40 via-transparent to-transparent" />

          {/* Gold connection lines SVG overlay */}
          <svg
            className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
            viewBox="0 0 700 800"
            fill="none"
            preserveAspectRatio="xMidYMid slice">

            <line x1="100" y1="200" x2="600" y2="600" stroke="#D4AF37" strokeWidth="0.8" />
            <circle cx="350" cy="400" r="6" fill="#D4AF37" className="animate-pulse-gold" />
            <circle cx="100" cy="200" r="3" fill="#D4AF37" />
            <circle cx="600" cy="600" r="3" fill="#D4AF37" />
          </svg>

          {/* Floating info card */}
          <div className="absolute bottom-8 left-8 glass-card p-5 rounded-2xl max-w-55 hidden md:block animate-float">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-white tracking-wide">Structure First</span>
            </div>
            <p className="text-[11px] text-white/60 leading-relaxed">
              Capital positioning · Jurisdiction leverage · Trade alignment
            </p>
          </div>
        </div>
      </div>
    </header>);

}