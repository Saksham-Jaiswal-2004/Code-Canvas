import AnimatedSection from "@/components/AnimatedSection";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

const tips = [
  { day: 1, topic: "Color Theory", desc: "Master palettes that make your portfolio pop.", link: "" },
  { day: 2, topic: "Typography", desc: "Choose fonts that reflect your personality.", link: "" },
  { day: 3, topic: "Responsiveness", desc: "Ensure pixel-perfect design on every device.", link: "" },
  { day: 4, topic: "Animations", desc: "Add subtle motion for a premium feel.", link: "" },
  { day: 5, topic: "Project Showcase", desc: "Present your work with impact and clarity.", link: "" },
  { day: 6, topic: "Performance", desc: "Optimize load times and core web vitals.", link: "" },
  { day: 7, topic: "SEO Basics", desc: "Make your portfolio discoverable.", link: "" },
  { day: 8, topic: "Code Quality", desc: "Write clean, maintainable code.", link: "" },
  { day: 9, topic: "Final Checklist", desc: "Review everything before submission.", link: "" },
];

const DailyTips = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="tips" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-4 text-gradient">
            Daily Tips & Tricks
          </h2>
          <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12 text-sm">
            Follow our daily tips for building winning portfolios.
          </p>
        </AnimatedSection>

        {/* Mobile horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex sm:hidden gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
        >
          {tips.map((tip, i) => (
            <motion.div
              key={tip.day}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass rounded-xl p-5 hover:border-primary/30 hover:neon-glow transition-all duration-300 group snap-center min-w-[260px] flex flex-col"
            >
              <div className="text-xs font-display font-semibold text-primary mb-2 uppercase tracking-widest">
                Day {tip.day}
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1">{tip.topic}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{tip.desc}</p>
              <a
                href={tip.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${tip.link === "" ? "text-gray-700 hover:text-gray-700 cursor-not-allowed pointer-events-none" : "text-primary hover:text-secondary"} inline-flex items-center gap-1.5 text-xs transition-colors group-hover:translate-x-1`}
              >
                View Details <ExternalLink size={12} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Desktop grid */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-4">
          {tips.map((tip, i) => (
            <AnimatedSection key={tip.day} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass rounded-xl p-5 hover:border-primary/30 hover:neon-glow transition-all duration-300 group h-full flex flex-col cursor-default"
              >
                <div className="text-xs font-display font-semibold text-primary mb-2 uppercase tracking-widest">
                  Day {tip.day}
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-gradient transition-all">{tip.topic}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{tip.desc}</p>
                <a
                  href={tip.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${tip.link === "" ? "text-gray-700 hover:text-gray-700 cursor-not-allowed pointer-events-none" : "text-primary hover:text-secondary"}  inline-flex items-center gap-1.5 text-xs transition-all group-hover:translate-x-1 duration-300`}
                >
                  View Details <ExternalLink size={12} />
                </a>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailyTips;
