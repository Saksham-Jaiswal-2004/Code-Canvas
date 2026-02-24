import AnimatedSection from "@/components/AnimatedSection";
import { Target, Palette, Code2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Palette, title: "Creativity", desc: "Showcase your unique design sense and personal brand." },
  { icon: Code2, title: "Technical Skills", desc: "Demonstrate modern web development practices." },
  { icon: Target, title: "UI/UX Focus", desc: "Build intuitive, user-centric portfolio experiences." },
  { icon: Sparkles, title: "AI Integration", desc: "Leverage AI tools like v0.dev in your workflow." },
];

const About = () => (
  <section id="about" className="py-24 px-4">
    <div className="container mx-auto max-w-5xl">
      <AnimatedSection>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-4 text-gradient">
          About Code Canvas
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 text-sm sm:text-base">
          Code Canvas is a portfolio-building competition designed to encourage students to create professional, 
          standout portfolios. We focus on creativity, UI/UX, technical skills, and AI integration - promoting 
          modern web development practices. All portfolios must be freshly built during the competition period.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map((f, i) => (
          <AnimatedSection key={f.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass rounded-xl p-6 hover:border-primary/40 hover:neon-glow transition-all duration-300 group h-full cursor-default"
            >
              <f.icon size={28} className="text-primary mb-3 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300" />
              <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-gradient transition-all">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default About;
