import AnimatedSection from "@/components/AnimatedSection";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "Is v0.dev mandatory?", a: "Yes, participants must use v0.dev to generate at least part of their portfolio UI. Proof of usage is required." },
  { q: "Can I participate in a team?", a: "This is an individual competition. Each participant must build and submit their own portfolio." },
  { q: "Can I use other frameworks?", a: "Yes, you can use any frontend framework. However, v0.dev must be used for at least part of the UI generation." },
  { q: "What happens if I miss the deadline?", a: "Late submissions will not be accepted. The deadline is 5th March, 11:59 PM sharp." },
  { q: "Will certificates be provided?", a: "Yes, digital certificates will be provided to all participants who make a valid submission." },
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-12 text-gradient">
            Frequently Asked Questions
          </h2>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="glass rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/20 transition-colors group"
                >
                  <span className="text-sm font-medium text-foreground pr-4 group-hover:text-primary transition-colors">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-muted-foreground shrink-0 transition-all duration-300 ${
                      openIdx === i ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIdx === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-sm text-muted-foreground">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
