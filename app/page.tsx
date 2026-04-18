import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import RealisationSection from '@/app/components/RealisationSection';
import ServicesSection from '@/app/components/ServicesSection';
import GlobalPresenceSection from '@/app/components/GlobalPresenceSection';
import ProcessSection from '@/app/components/ProcessSection';
import WhyDGSection from '@/app/components/WhyDGSection';
import FinalCTASection from '@/app/components/FinalCTASection';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';

export default function HomePage() {
  return (
    <main className="bg-[#0B1F3A] text-white overflow-x-hidden">
      <Header />
      <ScrollRevealInit />
      <HeroSection />
      <RealisationSection />
      <ServicesSection />
      <GlobalPresenceSection />
      <ProcessSection />
      <WhyDGSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}