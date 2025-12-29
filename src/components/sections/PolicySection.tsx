import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, MessageCircle, CheckCircle } from "lucide-react";

const policies = [
  {
    icon: Clock,
    title: "Advance Order Notice",
    items: [
      "All cakes must be ordered 1–2 days in advance of pickup or delivery",
      "Custom desserts (non-cake items) must be ordered 4–5 days in advance",
    ],
  },
  {
    icon: MessageCircle,
    title: "Consultation First",
    items: [
      "All orders are appointment-based only",
      "Every order begins with a personal consultation",
      "Orders are confirmed only after consultation to ensure premium quality",
    ],
  },
  {
    icon: CheckCircle,
    title: "What We Discuss",
    items: [
      "Design, flavor, size, and customization options",
      "Ingredient availability and special requirements",
      "Preparation timeline and delivery schedule",
    ],
  },
];

const PolicySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="policy" className="section-padding" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-4">
            How It Works
          </p>
          <h2 className="heading-secondary text-foreground mb-4">
            Ordering & Consultation
          </h2>
          <div className="gold-divider mb-6" />
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Our consultation-first approach ensures every creation meets your expectations perfectly
          </p>
        </motion.div>

        {/* Policy Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {policies.map((policy, index) => (
            <motion.div
              key={policy.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="card-elegant p-8"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <policy.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="heading-tertiary text-foreground mb-4">
                {policy.title}
              </h3>
              <ul className="space-y-3">
                {policy.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolicySection;
