import AnimatedSection from "@/components/AnimatedSection";
import { AlertTriangle, CheckCircle2, ArrowRight, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  "Register for the competition",
  "Sign-Up on v0.dev",
  "Go to profile section",
  "Click on credits",
  "Go to Billing",
  "Redeem a usage code (INVICTUS-V0)",
  "Enter the code",
  "Click Redeem",
];

const creditFaqs = [
  // { q: "What if I already have credits?", a: "You can still use the provided credits. They stack with your existing balance." },
  { q: "What if I face issues claiming credits?", a: "Contact the organisers via email or WhatsApp. Support is available during the build phase." },
];

const V0DevSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="v0dev" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-4 text-gradient">
            Mandatory Use of v0.dev
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8 text-sm sm:text-base">
            Participants must use v0.dev to generate at least part of their portfolio UI. 
            Proof of usage must be submitted, and your GitHub repo must show integration.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="glass rounded-xl p-6 border-primary/30 neon-glow mb-16 flex items-start gap-4"
          >
            <AlertTriangle size={24} className="text-primary shrink-0 mt-0.5 animate-pulse-glow" />
            <div>
              <p className="font-display font-semibold text-foreground mb-1">Important Notice</p>
              <p className="text-sm text-muted-foreground">
                v0.dev credits will be provided by the organizers. No purchase necessary.
              </p>
            </div>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-center mb-8 text-foreground">
            How to Claim Your v0.dev Credits
          </h3>
        </AnimatedSection>

        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={0.1 + i * 0.08}>
              <motion.div
                whileHover={{ x: 8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass rounded-lg p-4 flex items-center gap-4 group hover:border-primary/30 hover:neon-glow transition-all duration-300 cursor-default"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-display font-bold text-sm shrink-0 group-hover:bg-primary/30 group-hover:scale-110 transition-all">
                  {i + 1}
                </div>
                <p className="text-sm text-foreground">{step}</p>
                {i < steps.length - 1 && (
                  <ArrowRight size={14} className="text-muted-foreground ml-auto hidden sm:block group-hover:text-primary group-hover:translate-x-1 transition-all" />
                )}
                {i === steps.length - 1 && (
                  <CheckCircle2 size={16} className="text-accent ml-auto" />
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Mini FAQ */}
        <AnimatedSection delay={0.3}>
          <div className="space-y-2">
            {creditFaqs.map((faq, i) => (
              <div key={i} className="glass rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center gap-3 p-4 text-left hover:bg-muted/30 transition-colors group"
                >
                  <HelpCircle size={16} className="text-secondary shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-foreground flex-1">{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`text-muted-foreground transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pl-11 text-sm text-muted-foreground">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default V0DevSection;
