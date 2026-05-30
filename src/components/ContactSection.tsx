import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Let's Work Together
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's Build Videos That{" "}
            <span className="gradient-text">Convert</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-4 max-w-xl mx-auto">
            Ready to grow your audience with scroll-stopping content?
          </p>
          <p className="text-xl font-semibold text-foreground mb-10">
            Reach out now!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              asChild
              variant="whatsapp"
              size="xl"
              className="w-full sm:w-auto"
            >
              <a
                href="https://wa.me/8801887387498"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="heroOutline"
              size="xl"
              className="w-full sm:w-auto"
            >
              <a href="mailto:shahriarpro74@gmail.com">
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </Button>
          </div>

          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            <motion.a
              href="https://wa.me/8801887387498"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl glass-card hover:border-[#25D366]/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 mb-4 rounded-xl bg-[#25D366] flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
              <p className="text-muted-foreground text-sm">+880 1887 387498</p>
            </motion.a>

            <motion.a
              href="mailto:shahriarpro74@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl glass-card hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 mb-4 rounded-xl gradient-bg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Email</h3>
              <p className="text-muted-foreground text-sm">shahriarpro74@gmail.com</p>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
