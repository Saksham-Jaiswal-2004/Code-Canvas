import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";
import { CalendarClock } from "lucide-react";
import { useRef, useEffect, useState, useCallback } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [particles] = useState<Particle[]>(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 3,
    }))
  );

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center bg-gradient-hero bg-grid overflow-hidden">
      {/* Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/30"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [-20, 20, -20], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Parallax orbs */}
      <motion.div style={{ y: y1 }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <motion.div style={{ y: y2 }} className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" />
      <motion.div style={{ y: y1 }} className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" />

      <motion.div style={{ opacity }} className="relative z-10 container mx-auto px-4 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-2 text-sm text-muted-foreground"
          >
            <img src="/GDG-LOGO Bg Transparent.png" alt="GDG Logo" className="w-72 h-auto" />
          </motion.div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6">
            <motion.span
              className="text-gradient inline-block"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Code Canvas
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl text-secondary font-display font-medium mb-4 tracking-wide"
          >
            Your Skills Are the Weapon. Your Portfolio is the Proof.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-2xl mx-auto text-muted-foreground mb-6 text-sm sm:text-base"
          >
            Build a powerful personal portfolio using v0.dev and showcase your digital identity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="inline-flex items-center gap-2 glass rounded-lg px-4 py-2 mb-10 text-sm group cursor-default"
          >
            <span className="text-muted-foreground">Final Submission:</span>
            <span className="text-primary font-semibold group-hover:animate-pulse-glow transition-all">5th March, 11:59 PM</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center mb-12"
          >
            <CountdownTimer />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="neon" size="lg" className="text-base px-8 group" asChild>
              <a href="https://forms.gle/YzNrdNs2bu2HECzD7">
                <span className="group-hover:scale-105 inline-block transition-transform">Register Now</span>
              </a>
            </Button>
            <Button variant="neon-outline" size="lg" className="text-base px-8 group" asChild>
              <a href="https://forms.gle/PWiKCK6vYxcdpbLi7">
                <span className="group-hover:scale-105 inline-block transition-transform">Submit Project</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
