import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const MobileConsultButton = () => {
  return (
    <motion.a
      href="https://wa.me/919446794325"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 md:hidden"
    >
      <div className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full shadow-lg hover:opacity-90 transition-opacity">
        <MessageCircle className="w-5 h-5" />
        <span className="font-medium text-sm">Consult Now</span>
      </div>
    </motion.a>
  );
};

export default MobileConsultButton;
