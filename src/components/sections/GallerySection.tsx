import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

// Gallery items with categories
const galleryCategories = [
  { id: 1, title: "Wedding Elegance", category: "Wedding" },
  { id: 2, title: "Birthday Celebration", category: "Birthday" },
  { id: 3, title: "Anniversary Special", category: "Anniversary" },
  { id: 4, title: "Theme Creation", category: "Theme" },
  { id: 5, title: "Designer Masterpiece", category: "Designer" },
  { id: 6, title: "Sweet Cupcakes", category: "Cupcakes" },
];

// Curated collection of beautiful cake images
const curatedCakeImages = [
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop", // chocolate cake
  "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=600&h=600&fit=crop", // wedding cake
  "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=600&h=600&fit=crop", // birthday cake
  "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=600&fit=crop", // elegant cake
  "https://images.unsplash.com/photo-1535141192574-5d4897c12f40?w=600&h=600&fit=crop", // cupcakes
  "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=600&h=600&fit=crop", // decorated cake
  "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&h=600&fit=crop", // pink cake
  "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&h=600&fit=crop", // layer cake
  "https://images.unsplash.com/photo-1557979619-445218f326b9?w=600&h=600&fit=crop", // fruit cake
  "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600&h=600&fit=crop", // cream cake
  "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&h=600&fit=crop", // tiered cake
  "https://images.unsplash.com/photo-1602351447937-745cb720612f?w=600&h=600&fit=crop", // designer cake
];

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Generate gallery items with randomly shuffled cake images
const generateRandomCakeImages = () => {
  const shuffledImages = shuffleArray(curatedCakeImages);
  return galleryCategories.map((item, index) => ({
    ...item,
    imageUrl: shuffledImages[index % shuffledImages.length]
  }));
};

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Generate images once per page load (not on every re-render)
  const galleryItems = useMemo(() => generateRandomCakeImages(), []);

  const selectedItem = galleryItems.find(item => item.id === selectedImage);

  return (
    <section id="gallery" className="section-padding bg-card" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-4">
            Portfolio
          </p>
          <h2 className="heading-secondary text-foreground mb-4">
            Prior Orders
          </h2>
          <div className="gold-divider mb-6" />
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the sweet creations we've crafted for our valued customers
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="relative aspect-square overflow-hidden rounded-sm bg-secondary">
                {/* Random cake image from Unsplash */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-primary-foreground p-4">
                    <h3 className="font-serif text-lg mb-1">{item.title}</h3>
                    <p className="text-sm opacity-80">{item.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-3xl p-0 bg-background border-none">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            {selectedItem && (
              <div className="aspect-square bg-secondary overflow-hidden">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;

