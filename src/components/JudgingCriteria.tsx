import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const criteria = [
  { label: "Effective & Creative Use of v0.dev", pct: 25 },
  { label: "UI/UX Design & Visual Appeal", pct: 20 },
  { label: "Technical Implementation", pct: 15 },
  { label: "Project Presentation & Content Quality", pct: 10 },
  { label: "Responsiveness (Mobile-First Design)", pct: 10 },
  { label: "Creativity & Originality", pct: 10 },
  { label: "Performance & Optimization", pct: 5 },
  { label: "Code Structure & GitHub Quality", pct: 5 },
];

const JudgingCriteria = () => (
  <section id="judging" className="py-24 px-4">
    <div className="container mx-auto max-w-5xl">
      <AnimatedSection>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-12 text-gradient">
          How You'll Be Evaluated
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {criteria.map((c, i) => (
          <AnimatedSection key={c.label} delay={i * 0.05}>
            <motion.div
              whileHover={{ scale: 1.02, x: 4 }}
              className="glass rounded-lg p-4 group cursor-default hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{c.label}</span>
                <span className="text-xs font-display font-bold text-primary">{c.pct}%</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${c.pct * 4}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default JudgingCriteria;
