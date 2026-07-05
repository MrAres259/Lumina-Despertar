import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionDivider from "@/components/SectionDivider";
import { useCanonical } from "@/hooks/useCanonical";

const Index = () => {
  useCanonical("/");
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    // Wait one frame so the sections are mounted before attempting to scroll.
    requestAnimationFrame(() => {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    });
  }, [hash]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <ServicesSection />
      <SectionDivider />
      <TestimonialsSection />
      <SectionDivider />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
