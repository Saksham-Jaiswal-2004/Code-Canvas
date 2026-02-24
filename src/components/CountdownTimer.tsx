import { useState, useEffect } from "react";

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
        <div key={u.label} className="glass rounded-xl px-3 py-3 sm:px-5 sm:py-4 text-center neon-glow min-w-[70px]">
          <div className="text-2xl sm:text-4xl font-display font-bold text-gradient-blue">
            {String(u.value).padStart(2, "0")}
          </div>
          <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest mt-1">
            {u.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
