import { Instagram, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Categories", href: "#categories" },
    { label: "Gallery", href: "#gallery" },
    { label: "Policy", href: "#policy" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Phone,
      href: "tel:+919446794325",
      label: "Phone",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/919446794325",
      label: "WhatsApp",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/_.rekhas/",
      label: "Instagram",
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl mb-4">Rekha's</h3>
            <p className="text-sm opacity-70 leading-relaxed">
              Handcrafted custom cakes made with love and premium ingredients for every special occasion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4 text-sm tracking-wider uppercase opacity-70">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-medium mb-4 text-sm tracking-wider uppercase opacity-70">
              Connect With Us
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 text-center">
          <p className="text-sm opacity-50">
            © {currentYear} Rekha's Confectionery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
