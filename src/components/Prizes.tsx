import AnimatedSection from "@/components/AnimatedSection";
import { Trophy, Medal, Award, Star, Gift } from "lucide-react";
import { motion } from "framer-motion";

const Prizes = () => (
  <section id="prizes" className="py-24 px-4 relative overflow-hidden">
    {/* Background particles for prizes */}
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/20"
          style={{ left: `${10 + Math.random() * 80}%`, top: `${10 + Math.random() * 80}%` }}
          animate={{ y: [-15, 15, -15], opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: 3 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
        />
      ))}
    </div>

    <div className="container mx-auto max-w-5xl relative">
      <AnimatedSection>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-16 text-gradient">
          Prizes & Rewards
        </h2>
      </AnimatedSection>

      {/* Podium layout: 2nd - 1st - 3rd */}
      <div className="flex flex-col md:flex-row items-end justify-center gap-6 mb-12">
        {/* 2nd Place */}
        <AnimatedSection delay={0.15} className="order-2 md:order-1 w-full md:w-1/3">
          <motion.div
            whileHover={{ scale: 1.04, y: -6 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="glass rounded-2xl p-8 text-center border-secondary/30 neon-glow-violet relative overflow-hidden group cursor-default"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <Medal size={40} className="text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-xs uppercase tracking-widest text-secondary mb-2 font-display">2nd Place</div>
              <div className="text-xl font-display font-bold text-foreground mb-1">Amazing Swags</div>
              <p className="text-sm text-muted-foreground">+ Certificate</p>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Winner - Larger, elevated */}
        <AnimatedSection delay={0.1} className="order-1 md:order-2 w-full md:w-[38%]">
          <motion.div
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="glass rounded-2xl p-10 text-center border-primary/50 relative overflow-hidden group cursor-default"
            style={{
              boxShadow: "0 0 40px hsl(200 100% 50% / 0.3), 0 0 80px hsl(200 100% 50% / 0.1), 0 20px 60px hsl(0 0% 0% / 0.3)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Trophy size={56} className="text-primary mx-auto mb-4" />
              </motion.div>
              <div className="text-xs uppercase tracking-widest text-primary mb-2 font-display font-bold">🏆 Winner</div>
              <div className="text-4xl font-display font-bold text-foreground mb-1">₹2000</div>
              <p className="text-sm text-muted-foreground">Cash Prize</p>
              <div className="mt-4 flex justify-center gap-2">
                <Gift size={14} className="text-primary/60 animate-pulse-glow" />
                <Gift size={14} className="text-secondary/60 animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
                <Gift size={14} className="text-accent/60 animate-pulse-glow" style={{ animationDelay: "1s" }} />
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* 3rd Place */}
        <AnimatedSection delay={0.2} className="order-3 w-full md:w-1/3">
          <motion.div
            whileHover={{ scale: 1.04, y: -6 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="glass rounded-2xl p-8 text-center border-accent/30 neon-glow-cyan relative overflow-hidden group cursor-default"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <Award size={40} className="text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-xs uppercase tracking-widest text-accent mb-2 font-display">3rd Place</div>
              <div className="text-xl font-display font-bold text-foreground mb-1">Amazing Swags</div>
              <p className="text-sm text-muted-foreground">+ Certificate</p>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.25}>
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="glass rounded-xl p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
        >
          <Star size={24} className="text-primary shrink-0 animate-pulse-glow" />
          <div>
            <p className="text-sm text-foreground font-medium">
              Digital certificates for all valid participants. Top portfolios will be featured on the official page.
            </p>
          </div>
        </motion.div>
      </AnimatedSection>
    </div>
  </section>
);

export default Prizes;
