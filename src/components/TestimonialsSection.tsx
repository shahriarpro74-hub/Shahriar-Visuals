import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "YouTube Creator (500K+ Subs)",
    content: "Shahriar transformed my content completely. My watch time increased by 40% after working with him. He understands pacing and storytelling like no other editor I've worked with.",
    rating: 5,
    avatar: "AJ",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Brand Marketing Manager",
    content: "Professional, creative, and incredibly reliable. Our promo videos have never looked better. He delivered on time and exceeded all expectations.",
    rating: 5,
    avatar: "SC",
  },
  {
    id: 3,
    name: "Mike Rodriguez",
    role: "Fitness Influencer",
    content: "My Reels engagement went through the roof! Shahriar knows exactly what works on social media. Quick turnaround and amazing quality every time.",
    rating: 5,
    avatar: "MR",
  },
  {
    id: 4,
    name: "Emma Wilson",
    role: "Podcast Host",
    content: "The best podcast editor I've ever worked with. Clean edits, great audio work, and the highlight clips he creates always perform well on social.",
    rating: 5,
    avatar: "EW",
  },
  {
    id: 5,
    name: "David Park",
    role: "E-commerce Brand Owner",
    content: "Our product videos finally look premium. Shahriar has an eye for detail and understands brand aesthetics. Highly recommend for any business.",
    rating: 4,
    avatar: "DP",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Clients{" "}
            <span className="gradient-text">Say About Me</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-primary fill-primary" />
              ))}
            </div>
            <span className="text-foreground font-bold">4.9</span>
            <span className="text-muted-foreground">average rating</span>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 md:p-8 rounded-2xl glass-card relative ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-muted" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center font-bold text-primary-foreground">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
