import { motion } from "framer-motion";
import { Youtube, Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50 relative">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Shahriar Logo" className="w-10 h-10 rounded-full" />
            <div>
              <span className="font-display font-bold text-lg">
                SHAHRIAR <span className="text-muted-foreground font-normal">| VIDEO EDITOR</span>
              </span>
              <p className="text-muted-foreground text-sm">
                Freelance Video Editing Services Worldwide
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://youtube.com/@shahriarvideoedotor?si=qG8Y7bieHUnngElS"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-red-500 hover:bg-muted/80 transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/shahriar.editor?igsh=MXQwNDVmdDFlanF3Yg=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-pink-500 hover:bg-muted/80 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/8801887387498"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-green-500 hover:bg-muted/80 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="mailto:shahriarpro74@gmail.com"
              className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Shahriar. All rights reserved. Crafted with passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
