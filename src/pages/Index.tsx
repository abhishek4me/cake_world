import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import GallerySection from "@/components/sections/GallerySection";
import PolicySection from "@/components/sections/PolicySection";
import DeliverySection from "@/components/sections/DeliverySection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import MobileConsultButton from "@/components/MobileConsultButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <GallerySection />
      <PolicySection />
      <DeliverySection />
      <ContactSection />
      <Footer />
      <MobileConsultButton />
    </main>
  );
};

export default Index;
