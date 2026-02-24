import AnimatedSection from "@/components/AnimatedSection";
import { Trophy, Medal, Award, Star } from "lucide-react";

const Prizes = () => (
  <section id="prizes" className="py-24 px-4">
    <div className="container mx-auto max-w-5xl">
      <AnimatedSection>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-12 text-gradient">
          Prizes & Rewards
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Winner */}
        <AnimatedSection delay={0.1}>
          <div className="glass rounded-2xl p-8 text-center border-primary/40 neon-glow relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
            <div className="relative">
              <Trophy size={48} className="text-primary mx-auto mb-4" />
              <div className="text-xs uppercase tracking-widest text-primary mb-2 font-display">Winner</div>
              <div className="text-3xl font-display font-bold text-foreground mb-1">₹1500</div>
              <p className="text-sm text-muted-foreground">Cash Prize</p>
            </div>
          </div>
        </AnimatedSection>

        {/* 2nd */}
        <AnimatedSection delay={0.15}>
          <div className="glass rounded-2xl p-8 text-center border-secondary/30 neon-glow-violet relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent" />
            <div className="relative">
              <Medal size={48} className="text-secondary mx-auto mb-4" />
              <div className="text-xs uppercase tracking-widest text-secondary mb-2 font-display">2nd Place</div>
              <div className="text-xl font-display font-bold text-foreground mb-1">Amazing Swags</div>
              <p className="text-sm text-muted-foreground">+ Certificate</p>
            </div>
          </div>
        </AnimatedSection>

        {/* 3rd */}
        <AnimatedSection delay={0.2}>
          <div className="glass rounded-2xl p-8 text-center border-accent/30 neon-glow-cyan relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
            <div className="relative">
              <Award size={48} className="text-accent mx-auto mb-4" />
              <div className="text-xs uppercase tracking-widest text-accent mb-2 font-display">3rd Place</div>
              <div className="text-xl font-display font-bold text-foreground mb-1">Amazing Swags</div>
              <p className="text-sm text-muted-foreground">+ Certificate</p>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.25}>
        <div className="glass rounded-xl p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <Star size={24} className="text-primary shrink-0" />
          <div>
            <p className="text-sm text-foreground font-medium">
              Digital certificates for all valid participants. Top portfolios will be featured on the official page.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default Prizes;
