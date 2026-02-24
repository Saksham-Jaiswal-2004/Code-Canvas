import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const events = [
  { date: "24 Feb", title: "Registrations Open", active: true },
  { date: "24 Feb - 5 Mar", title: "Build Phase", active: true },
  { date: "5 Mar, 11:59 PM", title: "Final Submission", active: false },
  { date: "6-8 Mar", title: "Evaluation", active: false },
  { date: "9 Mar", title: "Results Announcement", active: false },
];

const EventTimeline = () => (
  <section id="timeline" className="py-24 px-4">
    <div className="container mx-auto max-w-5xl">
      <AnimatedSection>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-12 text-gradient">
          Event Timeline
        </h2>
      </AnimatedSection>

      {/* Desktop horizontal */}
      <AnimatedSection delay={0.1}>
        <div className="hidden md:flex items-start justify-between relative">
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-border" />
          <motion.div
            className="absolute top-8 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
            initial={{ width: 0 }}
            whileInView={{ width: `${(events.filter(e => e.active).length / events.length) * 100}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          {events.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.1 }}
              className="relative flex flex-col items-center text-center w-1/5 cursor-default"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center text-base font-display font-bold z-10 transition-all duration-300 ${
                  e.active
                    ? "bg-primary text-primary-foreground neon-glow"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {i + 1}
              </div>
              <div className="mt-5 text-base text-primary font-display font-semibold">{e.date}</div>
              <div className="mt-1 text-sm text-muted-foreground max-w-[180px]">{e.title}</div>
            </motion.div>
          ))}
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden space-y-4">
          {events.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-display font-bold shrink-0 ${
                  e.active
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {i + 1}
              </div>
              <div className="glass rounded-lg p-3 flex-1">
                <div className="text-xs text-primary font-display font-semibold">{e.date}</div>
                <div className="text-sm text-foreground">{e.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default EventTimeline;
