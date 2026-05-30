import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Calendar, FolderOpen, Star } from "lucide-react";

const stats = [
  { icon: Calendar, value: 2, suffix: "+", label: "Years Experience" },
  { icon: FolderOpen, value: 150, suffix: "+", label: "Projects Completed" },
  { icon: Star, value: 4.9, suffix: "⭐", label: "Client Rating" },
];

const AnimatedCounter = ({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Number(current.toFixed(1)));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span className="gradient-text">
      {value % 1 !== 0 ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-20 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 md:p-8 rounded-2xl glass-card group hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="font-display text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
              </div>
              <p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
