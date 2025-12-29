import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Instagram, MessageCircle, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Integrate with email service (Resend)
    // For now, show a placeholder message
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message received!",
      description: "We'll get back to you soon. For immediate assistance, please use WhatsApp.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactLinks = [
    {
      icon: Phone,
      label: "Phone",
      value: "94467 94325",
      href: "tel:+919446794325",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with us",
      href: "https://wa.me/919446794325",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@_.rekhas",
      href: "https://www.instagram.com/_.rekhas/",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-card" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-4">
            Get In Touch
          </p>
          <h2 className="heading-secondary text-foreground mb-4">
            Contact Us
          </h2>
          <div className="gold-divider mb-6" />
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Ready to order or have questions? Reach out and let's create something special together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-border focus:border-primary"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background border-border focus:border-primary"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background border-border focus:border-primary resize-none"
                  placeholder="Tell us about your cake requirements..."
                />
              </div>
              <Button
                type="submit"
                className="btn-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="heading-tertiary text-foreground mb-6">
                Other Ways to Reach Us
              </h3>
              <div className="space-y-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-background rounded-sm hover:bg-secondary transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <link.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                      <p className="font-medium text-foreground">{link.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-primary/5 border border-primary/20 rounded-sm p-6 text-center">
              <MessageCircle className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="font-serif text-lg text-foreground mb-2">
                Prefer Instant Communication?
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                WhatsApp is the fastest way to discuss your order
              </p>
              <a
                href="https://wa.me/919446794325"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
