import React from 'react';
import AppLogo from '@/components/ui/AppLogo';


export default function Footer() {
  return (
    <footer className="border-t border-[#1E3A5F] bg-[#0B1F3A] py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Pattern 7: Arc Browser Split */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left: Logo + tagline */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <AppLogo size={32} />
              <span
                className="font-serif text-lg text-white font-semibold tracking-tight"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                DG International
              </span>
            </div>
            <p className="text-xs text-white/30 font-light max-w-70 leading-relaxed">
              Trusted Partner. Reliable Execution. Global Growth.
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: 'Services', href: '#services' },
              { label: 'Presence', href: '#presence' },
              { label: 'Process', href: '#process' },
              { label: 'Contact', href: '#contact' },
              { label: 'Privacy', href: '#' },
              { label: 'Terms', href: '#' },
            ]?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                className="text-sm font-medium text-white/40 hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
              >
                {link?.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 pt-6 border-t border-[#1E3A5F] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/25 font-medium">
            © 2026 DG International. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse-gold" />
            <span className="text-[11px] text-white/25 font-medium tracking-wide">
              India · UAE · ASEAN · Singapore · Hong Kong
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}