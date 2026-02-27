import AnimatedSection from "@/components/AnimatedSection";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

const tips = [
  { day: 1, topic: "Color & Visual Identity", desc: "Use a consistent color palette and strong contrast to create a memorable first impression.", link: "https://www.linkedin.com/feed/update/urn:li:activity:7432505226676539392" },
  { day: 2, topic: "Typography", desc: "Choose clean, readable fonts with proper hierarchy for a professional look.", link: "https://www.linkedin.com/feed/update/urn:li:activity:7432841267430109184" },
  { day: 3, topic: "Responsiveness", desc: "Ensure your portfolio looks flawless on mobile, tablet, and desktop screens.", link: "" },
  { day: 4, topic: "Animations & Micro-Interactions", desc: "Use subtle motion effects to enhance user experience without distraction.", link: "" },
  { day: 5, topic: "Project Showcase", desc: "Highlight real impact, tech stack, and live demos instead of just listing features.", link: "" },
  { day: 6, topic: "Performance Optimization", desc: "Optimize images and code to improve loading speed and overall performance.", link: "" },
  { day: 7, topic: "SEO Basics", desc: "Add proper meta tags and headings to make your portfolio discoverable.", link: "" },
  { day: 8, topic: "Personal Branding", desc: "Clearly communicate who you are, your strengths, and what makes you unique.", link: "" },
  { day: 9, topic: "Strong Call-to-Action", desc: "Include clear buttons like Hire Me or View Resume to guide visitors effectively.", link: "" },
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
