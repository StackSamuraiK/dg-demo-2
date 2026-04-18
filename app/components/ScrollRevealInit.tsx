'use client';

import { useEffect } from 'react';
import { initSmoothScroll } from '@/lib/smooth-scroll';

export default function ScrollRevealInit() {
  useEffect(() => {
    // Reveal animations
    const elements = document.querySelectorAll('.reveal');
    elements?.forEach((el) => {
      el?.classList?.add('hidden-init');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            entry.target.classList.remove('hidden-init');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    elements?.forEach((el) => observer?.observe(el));

    // Initialize smooth scroll
    initSmoothScroll();

    return () => observer?.disconnect();
  }, []);

  return null;
}