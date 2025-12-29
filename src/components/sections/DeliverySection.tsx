import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Truck, MapPin, Shield } from "lucide-react";

const DeliverySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Truck,
      title: "Home Delivery",
      description: "Available for all orders",
    },
    {
      icon: MapPin,
      title: "Delivery Radius",
      description: "Within 8 km from Karamana",
    },
    {
      icon: Shield,
      title: "Safe Handling",
      description: "Careful delivery guaranteed",
    },
  ];

  return (
    <section id="delivery" className="section-padding bg-primary text-primary-foreground" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.2em] uppercase opacity-80 font-medium mb-4">
            Delivery
          </p>
          <h2 className="heading-secondary mb-4">
            We Deliver to Your Doorstep
          </h2>
          <div className="h-px w-16 mx-auto bg-primary-foreground/30" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl mb-2">{feature.title}</h3>
              <p className="text-sm opacity-80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
