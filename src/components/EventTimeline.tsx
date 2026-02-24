import AnimatedSection from "@/components/AnimatedSection";

const events = [
  { date: "24 Feb", title: "Registrations Open", active: true },
  { date: "24 Feb – 5 Mar", title: "Build Phase", active: true },
  { date: "5 Mar, 11:59 PM", title: "Final Submission", active: false },
  { date: "6–7 Mar", title: "Evaluation", active: false },
  { date: "8 Mar", title: "Results Announcement", active: false },
];

const EventTimeline = () => (
  <section id="timeline" className="py-24 px-4">
    <div className="container mx-auto max-w-4xl">
      <AnimatedSection>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-12 text-gradient">
          Event Timeline
        </h2>
      </AnimatedSection>

      {/* Desktop horizontal */}
      <AnimatedSection delay={0.1}>
        <div className="hidden md:flex items-start justify-between relative">
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-border" />
          <div
            className="absolute top-5 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
            style={{ width: `${(events.filter(e => e.active).length / events.length) * 100}%` }}
          />
          {events.map((e, i) => (
            <div key={i} className="relative flex flex-col items-center text-center w-1/5">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-display font-bold z-10 ${
                  e.active
                    ? "bg-primary text-primary-foreground neon-glow"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {i + 1}
              </div>
              <div className="mt-3 text-xs text-primary font-display font-semibold">{e.date}</div>
              <div className="mt-1 text-xs text-muted-foreground max-w-[120px]">{e.title}</div>
            </div>
          ))}
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden space-y-4">
          {events.map((e, i) => (
            <div key={i} className="flex items-center gap-4">
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
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default EventTimeline;
