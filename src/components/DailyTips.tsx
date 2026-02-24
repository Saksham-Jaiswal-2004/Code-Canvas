import AnimatedSection from "@/components/AnimatedSection";
import { ExternalLink } from "lucide-react";

const tips = [
  { day: 1, topic: "Color Theory", desc: "Master palettes that make your portfolio pop.", link: "#" },
  { day: 2, topic: "Typography", desc: "Choose fonts that reflect your personality.", link: "#" },
  { day: 3, topic: "Responsiveness", desc: "Ensure pixel-perfect design on every device.", link: "#" },
  { day: 4, topic: "Animations", desc: "Add subtle motion for a premium feel.", link: "#" },
  { day: 5, topic: "Project Showcase", desc: "Present your work with impact and clarity.", link: "#" },
  { day: 6, topic: "Performance", desc: "Optimize load times and core web vitals.", link: "#" },
  { day: 7, topic: "SEO Basics", desc: "Make your portfolio discoverable.", link: "#" },
  { day: 8, topic: "Code Quality", desc: "Write clean, maintainable code.", link: "#" },
  { day: 9, topic: "Final Checklist", desc: "Review everything before submission.", link: "#" },
];

const DailyTips = () => (
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tips.map((tip, i) => (
          <AnimatedSection key={tip.day} delay={i * 0.05}>
            <div className="glass rounded-xl p-5 hover:border-primary/30 hover:neon-glow transition-all duration-300 group h-full flex flex-col">
              <div className="text-xs font-display font-semibold text-primary mb-2 uppercase tracking-widest">
                Day {tip.day}
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1">{tip.topic}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{tip.desc}</p>
              <a
                href={tip.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-secondary transition-colors"
              >
                View on LinkedIn <ExternalLink size={12} />
              </a>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default DailyTips;
