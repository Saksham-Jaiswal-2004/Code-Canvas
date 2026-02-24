import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Upload, Link2, Github, FileCheck } from "lucide-react";
import { motion } from "framer-motion";

const RegisterSubmit = () => (
  <section id="submit" className="py-24 px-4">
    <div className="container mx-auto max-w-3xl">
      <AnimatedSection>
        <div className="glass rounded-2xl border border-primary/20 bg-background/40 backdrop-blur-xl p-8 sm:p-10 text-center shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Upload size={44} className="text-secondary mx-auto mb-4" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-3 text-gradient">
            Submit Your Portfolio
          </h2>
          <p className="text-muted-foreground mb-6 text-sm sm:text-base">
            Deadline: <span className="text-primary font-semibold">5th March, 11:59 PM</span>
          </p>

          <div className="mx-auto mb-8 w-fit rounded-xl border border-primary/20 bg-black/20 py-5 lg:px-16 md:px-8 sm:px-2 text-left">
            <p className="text-sm text-muted-foreground mb-3 font-medium">Submission requires:</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Link2 size={14} className="text-primary" />
                Portfolio Deployed Link
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Github size={14} className="text-primary" />
                GitHub Repository Link
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <FileCheck size={14} className="text-primary" />
                v0.dev Project Link
              </div>
            </div>
          </div>

          <Button variant="neon" size="lg" className="text-base px-10 group" asChild>
            <a href="https://forms.gle/PWiKCK6vYxcdpbLi7" target="_blank" rel="noopener noreferrer">
              <span className="group-hover:scale-105 inline-block transition-transform">Submit Final Project</span>
            </a>
          </Button>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default RegisterSubmit;
