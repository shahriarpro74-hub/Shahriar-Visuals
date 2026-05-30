import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Youtube, Film, Instagram, Mic, Share2, Video } from "lucide-react";

const services = [
  {
    icon: Youtube,
    title: "YouTube Video Editing",
    description: "Professional long-form content editing with engaging intros, transitions, color grading, and motion graphics.",
  },
  {
    icon: Film,
    title: "Short-Form Video Editing",
    description: "Eye-catching edits for Reels, TikTok, and Shorts with trendy effects, captions, and hooks.",
  },
  {
    icon: Instagram,
    title: "Reels & TikTok Editing",
    description: "Viral-ready content with perfect pacing, trending audio sync, and scroll-stopping visuals.",
  },
  {
    icon: Mic,
    title: "Podcast Video Editing",
    description: "Clean, professional podcast edits with dynamic layouts, captions, and highlight reels.",
  },
  {
    icon: Share2,
    title: "Social Media Content",
    description: "Platform-optimized content that drives engagement across all major social networks.",
  },
  {
    icon: Video,
    title: "Brand Promo Videos",
    description: "Cinematic promotional videos that tell your brand story and convert viewers into customers.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Video Editing Services{" "}
            <span className="gradient-text">Tailored For You</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From YouTube long-form to viral short-form content, I deliver edits that 
            captivate your audience and grow your brand.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 md:p-8 rounded-2xl glass-card hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 mb-6 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
