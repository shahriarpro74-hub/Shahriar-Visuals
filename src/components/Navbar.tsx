import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="Shahriar Logo" className="w-10 h-10 rounded-full" />
            <span className="font-display font-bold text-sm sm:text-lg">
              SHAHRIAR <span className="text-muted-foreground font-normal">| VIDEO EDITOR</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/8801887387498"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-5 py-2 rounded-lg font-semibold text-sm hover:scale-105 transition-transform"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-border/50"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/8801887387498"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-5 py-3 rounded-lg font-semibold text-sm text-center hover:scale-105 transition-transform"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
