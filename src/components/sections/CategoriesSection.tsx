import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    title: "Birthday Cakes",
    description: "Celebrate another year with a custom creation",
    icon: "🎂",
  },
  {
    title: "Wedding Cakes",
    description: "Elegant masterpieces for your special day",
    icon: "💒",
  },
  {
    title: "Anniversary Cakes",
    description: "Mark milestones with sweetness",
    icon: "💝",
  },
  {
    title: "Theme Cakes",
    description: "Bring your imagination to life",
    icon: "🎨",
  },
  {
    title: "Designer Cakes",
    description: "Artistic creations that wow",
    icon: "✨",
  },
  {
    title: "Cupcakes & Desserts",
    description: "Delightful treats for every occasion",
    icon: "🧁",
  },
];

const customizationOptions = [
  { label: "Size", description: "From intimate to grand celebrations" },
  { label: "Flavor", description: "Classic to exotic taste profiles" },
  { label: "Shape", description: "Traditional to unique designs" },
  { label: "Theme", description: "Personalized to your vision" },
  { label: "Message", description: "Custom text and dedications" },
];

const CategoriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="categories" className="section-padding" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-4">
            Our Creations
          </p>
          <h2 className="heading-secondary text-foreground mb-4">
            Cake Categories
          </h2>
          <div className="gold-divider mb-6" />
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Every cake is fully customizable to match your vision and taste
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elegant p-8 text-center group cursor-pointer"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="heading-tertiary text-foreground mb-2">
                {category.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Customization Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-secondary/50 rounded-sm p-8 lg:p-12"
        >
          <h3 className="heading-tertiary text-foreground text-center mb-8">
            Full Customization Available
          </h3>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
            {customizationOptions.map((option) => (
              <div
                key={option.label}
                className="text-center px-6 py-4 bg-background rounded-sm"
              >
                <p className="font-medium text-primary mb-1">{option.label}</p>
                <p className="text-xs text-muted-foreground">{option.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoriesSection;
