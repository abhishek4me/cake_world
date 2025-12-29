import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";


const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });


  return (
    <section id="about" className="section-padding bg-card" ref={ref}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 order-2 lg:order-1"
          >
            <div className="space-y-4">
              <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium">
                About Me
              </p>
              <h2 className="heading-secondary text-foreground">
                Crafting Sweet Memories Since 2018
              </h2>
              <div className="gold-divider !mx-0" />
            </div>


            <div className="space-y-4 body-regular text-muted-foreground text-justify">
              <p>
                I am a certified professional cake artist with over 8+ years of industry experience,
                specializing in luxury custom cakes and unique desserts.
                Throughout my journey, I have been able to fulfill a multitude of custom orders,
                which has led me to be the most trusted choice by a big number of loyal and happy customers.
              </p>
              <p>
                My work is built on three core principles: <span className="text-foreground font-medium">quality,
                  consistency, and customization</span>. Every cake is 100% homemade, freshly baked, and
                crafted by hand to meet precise client requirements.
              </p>
              <p>
                Ingredient quality is non-negotiable. I use premium, high-grade ingredients, with a
                majority being imported, to ensure consistent flavor, texture, and presentation. All
                production takes place in a highly hygienic, controlled environment, following strict
                cleanliness and food-safety standards.
              </p>
              <p>
                All orders are handled through a consultation-first approach. This ensures clear
                communication, accurate customization, and timely execution. Each project is planned
                after confirming design feasibility, ingredient availability, and delivery timelines which allows
                me to maintain quality without compromise.
              </p>
            </div>
          </motion.div>


          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="aspect-[4/5] bg-secondary rounded-sm overflow-hidden">
                <img
                  src="https://i.ibb.co/FkG962SQ/IMG-20251225-WA0050.jpg"
                  alt="Rekha - Cake Artist"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-sm -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default AboutSection;
