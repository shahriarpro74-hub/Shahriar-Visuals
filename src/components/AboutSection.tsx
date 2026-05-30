import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Film, Sparkles, Zap, Award } from "lucide-react";

const skills = [
  { icon: Film, label: "YouTube Videos" },
  { icon: Zap, label: "Short-Form Content" },
  { icon: Sparkles, label: "Cinematic Edits" },
  { icon: Award, label: "Brand Stories" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              About Me
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Crafting Visual Stories That{" "}
              <span className="gradient-text">Connect & Convert</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm Shahriar, a professional video editor with over 2 years of experience 
              transforming raw footage into compelling visual content. I specialize in 
              creating videos that not only look stunning but also drive engagement and results.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              From YouTube long-form content to viral TikTok and Instagram Reels, 
              I understand the nuances of each platform and craft edits that resonate 
              with your target audience. My goal is to help creators and brands tell 
              their story in the most impactful way possible.
            </p>

            {/* Skills */}
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl glass-card"
                >
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                    <skill.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-medium text-foreground">{skill.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative glass-card rounded-3xl p-8 h-full flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center">
                      <Film className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold">Video Editor</h3>
                      <p className="text-muted-foreground">Creative Professional</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">YouTube Editing</span>
                      <span className="text-primary font-semibold">Expert</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "95%" } : {}}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full gradient-bg rounded-full"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Short-Form Videos</span>
                      <span className="text-primary font-semibold">Expert</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "98%" } : {}}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="h-full gradient-bg rounded-full"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Motion Graphics</span>
                      <span className="text-primary font-semibold">Advanced</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "85%" } : {}}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="h-full gradient-bg rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
