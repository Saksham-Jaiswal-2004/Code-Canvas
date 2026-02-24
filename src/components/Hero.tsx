import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";
import { CalendarClock } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero bg-grid overflow-hidden">
    {/* Animated orbs */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
    <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />

    <div className="relative z-10 container mx-auto px-4 text-center py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 text-sm text-muted-foreground">
          <CalendarClock size={16} className="text-primary" />
          <span>Portfolio Making Competition</span>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6">
          <span className="text-gradient">Code Canvas</span>
        </h1>

        <p className="text-lg sm:text-xl text-secondary font-display font-medium mb-4 tracking-wide">
          Your Skills Are the Weapon. Your Portfolio is the Proof.
        </p>

        <p className="max-w-2xl mx-auto text-muted-foreground mb-6 text-sm sm:text-base">
          Build a powerful personal portfolio using v0.dev and showcase your digital identity.
        </p>

        <div className="inline-flex items-center gap-2 glass rounded-lg px-4 py-2 mb-10 text-sm">
          <span className="text-muted-foreground">Final Submission:</span>
          <span className="text-primary font-semibold">5th March, 11:59 PM</span>
        </div>

        <div className="flex justify-center mb-12">
          <CountdownTimer />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="neon" size="lg" className="text-base px-8" asChild>
            <a href="#register">Register Now</a>
          </Button>
          <Button variant="neon-outline" size="lg" className="text-base px-8" asChild>
            <a href="#submit">Submit Project</a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
