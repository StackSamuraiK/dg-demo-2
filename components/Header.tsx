'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Presence', href: '#presence' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[#0B1F3A]/95 backdrop-blur-md border-b border-[#1E3A5F] shadow-lg shadow-black/20'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <AppLogo
              size={36}
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span
                className="font-serif text-lg font-semibold text-white leading-tight tracking-tight"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                DG International
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium leading-none">
                Global Advisory
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 tracking-wide"
              >
                {link?.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="gold-fill-btn px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide"
            >
              Book Consultation
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 w-0' : 'w-4'}`}
            />
            <span
              className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B1F3A]/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks?.map((link) => (
            <a
              key={link?.label}
              href={link?.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-serif text-white hover:text-[#D4AF37] transition-colors duration-200"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              {link?.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="gold-fill-btn px-8 py-3 rounded-full text-base font-semibold mt-4"
          >
            Book Consultation
          </a>
        </div>
      )}
    </>
  );
}