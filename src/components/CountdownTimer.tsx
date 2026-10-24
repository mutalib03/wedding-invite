import { useState, useEffect, useCallback } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TARGET_DATE = new Date("2026-12-12T11:00:00+01:00");

function calculateTimeLeft(): TimeLeft {
  const now = new Date();
  const diff = TARGET_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center group">
      <div
        className="relative w-[76px] h-[80px] sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2"
        style={{
          background: "rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(212, 175, 55, 0.4)",
          boxShadow: "0 15px 35px -10px rgba(107, 33, 168, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
        }}
      >
        <span className="font-playfair font-bold text-4xl sm:text-5xl text-purple-950 tabular-nums drop-shadow-md">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="font-marcellus uppercase tracking-[0.25em] text-[0.65rem] sm:text-xs text-purple-900 mt-3 font-bold transition-all duration-500 group-hover:text-[#d4af37]">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  const updateTime = useCallback(() => {
    setTimeLeft(calculateTimeLeft());
  }, []);

  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [updateTime]);

  if (!timeLeft) return null;

  return (
    <div className="mb-14 text-center">
      <p className="font-marcellus uppercase tracking-[0.3em] text-[0.85rem] text-[#d4af37] mb-8 font-bold flex items-center justify-center gap-4">
        <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[#d4af37]" />
        Counting Down
        <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-[#d4af37]" />
      </p>
      <div className="flex justify-center gap-3 sm:gap-6">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Mins" />
        <TimeUnit value={timeLeft.seconds} label="Secs" />
      </div>
    </div>
  );
}