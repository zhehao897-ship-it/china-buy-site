import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/landing/LanguageToggle";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import WhySection from "@/components/landing/WhySection";
import ExpertSection from "@/components/landing/ExpertSection";
import SevenQuestionsSection from "@/components/landing/SevenQuestionsSection";
import HeartfeltSection from "@/components/landing/HeartfeltSection";
import PricingSection from "@/components/landing/PricingSection";
import ContactSection from "@/components/landing/ContactSection";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen text-foreground">
        <LanguageToggle />
        <Navbar />
        <HeroSection />
        <WhySection />
        <ExpertSection />
        <SevenQuestionsSection />
        <HeartfeltSection />
        <PricingSection />
        <ContactSection />

        <div className="px-5 py-8 text-center border-t border-border">
          <p className="text-xs text-muted-foreground">
            © 2026 사입지키미 (Safe-China-Buy). All rights reserved.
          </p>
        </div>
      </div>
    </LanguageProvider>
  );
};

export default Index;
