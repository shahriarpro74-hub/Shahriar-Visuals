import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

const portfolioVideos = [
  {
    id: 1,
    videoId: "yC57PDJS1Zo",
    title: "Creative Edit #1",
  },
  {
    id: 2,
    videoId: "821A6qshcnI",
    title: "Creative Edit #1",
  },
  {
    id: 10,
    videoId: "qrq3VdBD9AI",
    title: "Creative Edit #10",
  },
  {
    id: 2,
    videoId: "XNHvvKl4qYw",
    title: "Creative Edit #2",
  },
  {
    id: 3,
    videoId: "BEZu3L50EfY",
    title: "Creative Edit #3",
  },
  {
    id: 4,
    videoId: "59jOw1Aeex0",
    title: "Creative Edit #4",
  },
  {
    id: 5,
    videoId: "W-ZJi9xtq2I",
    title: "Creative Edit #5",
  },
  {
    id: 6,
    videoId: "GUryBFyHxuo",
    title: "Creative Edit #6",
  },
  {
    id: 7,
    videoId: "OOPV7aYl9DM",
    title: "Creative Edit #7",
  },
  {
    id: 8,
    videoId: "ZtPWRz0z510",
    title: "Creative Edit #8",
  },
  {
    id: 9,
    videoId: "bsW4pho6zzE",
    title: "Creative Edit #9",
  },
];

interface VideoCardProps {
  videoId: string;
  title: string;
  index: number;
  landscape?: boolean;
}

const VideoCard = ({ videoId, title, index, landscape = false }: VideoCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const cardInView = useInView(cardRef, { once: true, margin: "200px" });

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&showinfo=0&playsinline=1&enablejsapi=1&iv_load_policy=3&disablekb=1&fs=0&cc_load_policy=0`;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative rounded-2xl overflow-hidden ${landscape ? 'aspect-video' : 'aspect-[9/16]'} w-full shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1`}
    >
      {cardInView ? (
        <>
          <iframe
            key={`${videoId}-${isMuted}`}
            src={embedUrl}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="absolute top-2 right-2 z-20 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center border border-white/20 hover:bg-black/80 transition-colors"
          >
            {isMuted ? (
              <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            ) : (
              <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            )}
          </button>
        </>
      ) : (
        <img src={thumbnailUrl} alt={title} className="w-full h-full object-cover" />
      )}

      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none" />
      <div className="absolute bottom-2 left-2 right-2 z-10 pointer-events-none">
        <span className="inline-block px-2 py-0.5 rounded-full bg-primary/20 backdrop-blur-sm text-primary text-[10px] sm:text-xs font-semibold border border-primary/30">
          Edited by Shahriar
        </span>
      </div>
    </motion.div>
  );
};

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="section-padding relative" ref={ref}>
      {/* Premium Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            My Video <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Watch my latest work — cinematic edits that captivate audiences and drive results.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-6 md:gap-8 max-w-[400px] sm:max-w-none mx-auto">
          {portfolioVideos.map((video, index) => (
            <VideoCard
              key={video.id}
              videoId={video.videoId}
              title={video.title}
              index={index}
            />
          ))}
        </div>

        {/* Featured Video Below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 max-w-full sm:max-w-2xl mx-auto"
        >
          <VideoCard
            videoId="xwI31pdIkaM"
            title="Creative Edit #11"
            index={0}
            landscape
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
