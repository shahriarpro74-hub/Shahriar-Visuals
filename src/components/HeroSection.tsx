import { motion } from "framer-motion";
import { MessageCircle, Mail, Play } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-[85vh] flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-border mb-6"
          >
            <Play className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Professional Video Editor</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
          >
            I Create{" "}
            <span className="gradient-text">Scroll-Stopping Videos</span>{" "}
            That Grow Audiences
          </motion.h1>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              variant="whatsapp"
              size="xl"
              className="w-full sm:w-auto text-lg px-8 py-6 shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all"
            >
              <a
                href="https://wa.me/8801887387498"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-6 h-6" />
                Hire Me on WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-border hover:border-primary/50 hover:bg-primary/5"
            >
              <a href="mailto:shahriarpro74@gmail.com">
                <Mail className="w-5 h-5" />
                Email Me
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
