import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import WhoThisIsForSection from '@/app/components/WhoThisIsForSection';
import TrustElementsSection from '@/app/components/TrustElementsSection';
import ServicesSection from '@/app/components/ServicesSection';
import HowItWorksSection from '@/app/components/HowItWorksSection';
import GlobalPresenceSection from '@/app/components/GlobalPresenceSection';
import ProcessSection from '@/app/components/ProcessSection';
import WhyDGSection from '@/app/components/WhyDGSection';
import OwnerVisionSection from '@/app/components/OwnerVisionSection';
import FinalCTASection from '@/app/components/FinalCTASection';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function HomePage() {
  return (
    <main className="bg-[#163A66] text-white overflow-x-hidden">
      <Header />
      <ScrollRevealInit />
      <HeroSection />
      <WhoThisIsForSection />
      <TrustElementsSection />
      <ServicesSection />
      <HowItWorksSection />
      <GlobalPresenceSection />
      <ProcessSection />
      <WhyDGSection />
      <OwnerVisionSection />
      <FinalCTASection />
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
