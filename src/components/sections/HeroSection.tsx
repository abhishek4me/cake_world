import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Transform scroll progress to blur value (4px to 20px) - starts with slight blur
  const blurValue = useTransform(scrollYProgress, [0, 1], [4, 20]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with scroll-based blur - isolated to not affect other sections */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 scale-110"
          style={{
            filter: useTransform(blurValue, (v) => `blur(${v}px)`)
          }}
        >
          <img
            src="https://i.ibb.co/VYdsXCTz/Gemini-Generated-Image-yr7y9wyr7y9wyr7y.png"
            alt="Cake background"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Subtle background gradient overlay */}
      <div className="absolute inset-0 opacity-30 z-[1]">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent" />
      </div>

      <div className="section-container relative z-10 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Logo placeholder - user will upload */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="heading-primary text-white mb-2 drop-shadow-lg">
              Rekha's
            </h1>
            <p className="text-lg tracking-[0.3em] uppercase text-white/80 font-light drop-shadow-md">
              Confectionery
            </p>
          </motion.div>

          {/* Gold divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="gold-divider bg-white/60"
          />

          {/* Tagline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="heading-secondary text-white max-w-3xl mx-auto text-balance drop-shadow-lg"
          >
            Custom Cakes Made with Love for Every Occasion
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="body-large text-white/90 max-w-xl mx-auto drop-shadow-md"
          >
            Handcrafted with premium ingredients, designed to make your celebrations unforgettable
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="pt-4"
          >
            <Button
              onClick={scrollToContact}
              className="btn-primary text-base px-10 py-6"
              size="lg"
            >
              Book a Consultation
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-white/70 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
