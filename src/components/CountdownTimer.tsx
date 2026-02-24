import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const DEADLINE = new Date("2026-03-05T23:59:00").getTime();

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(DEADLINE - Date.now(), 0);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-3 sm:gap-4">
      {units.map((u) => (
        <motion.div
          key={u.label}
          whileHover={{ scale: 1.08, boxShadow: "0 0 30px hsl(200 100% 50% / 0.4)" }}
          className="glass rounded-xl px-3 py-3 sm:px-5 sm:py-4 text-center neon-glow min-w-[70px] cursor-default group"
        >
          <AnimatePresence mode="popLayout">
            <motion.div
              key={u.value}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-2xl sm:text-4xl font-display font-bold text-gradient-blue"
            >
              {String(u.value).padStart(2, "0")}
            </motion.div>
          </AnimatePresence>
          <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest mt-1 group-hover:text-primary transition-colors">
            {u.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer;
