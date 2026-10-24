import { useState, useEffect, useCallback } from "react";

const SCRIPTURES = [
  { text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.", reference: "1 Corinthians 13:4" },
  { text: "And now these three remain: faith, hope and love. But the greatest of these is love.", reference: "1 Corinthians 13:13" },
  { text: "I have found the one whom my soul loves.", reference: "Song of Solomon 3:4" },
  { text: "Therefore what God has joined together, let no one separate.", reference: "Mark 10:9" }
];

export default function LoveScripture() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animState, setAnimState] = useState<"in" | "out">("in");

  const cycleScripture = useCallback(() => {
    setAnimState("out");
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % SCRIPTURES.length);
      setAnimState("in");
    }, 800);
  }, []);

  useEffect(() => {
    const interval = setInterval(cycleScripture, 8000);
    return () => clearInterval(interval);
  }, [cycleScripture]);

  const scripture = SCRIPTURES[currentIndex];

  return (
    <div className="mb-14 px-2.5 text-center">
      <div
        className="relative rounded-3xl p-8 sm:p-10 min-h-[200px] flex flex-col items-center justify-center transition-all duration-500 hover:shadow-2xl"
        style={{
          background: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(212, 175, 55, 0.3)",
          boxShadow: "0 20px 40px -10px rgba(107, 33, 168, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
        }}
      >
        <span className="absolute top-4 left-6 font-great-vibes text-7xl text-[#d4af37] opacity-40 leading-none select-none">
          "
        </span>
        <div
          className="transition-all duration-800 ease-in-out z-10"
          style={{
            opacity: animState === "in" ? 1 : 0,
            transform: animState === "in" ? "translateY(0)" : "translateY(10px)",
          }}
        >
          <p className="font-playfair italic text-[1.15rem] sm:text-xl leading-relaxed text-purple-950 mb-4 font-medium drop-shadow-sm">
            {scripture.text}
          </p>
          <p className="font-marcellus text-[0.75rem] tracking-[0.2em] uppercase text-[#d4af37] font-bold">
            {scripture.reference}
          </p>
        </div>
        
        <div className="flex gap-2 mt-6">
          {SCRIPTURES.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (i === currentIndex) return;
                setAnimState("out");
                setTimeout(() => {
                  setCurrentIndex(i);
                  setAnimState("in");
                }, 400);
              }}
              className={`h-1.5 rounded-full transition-all duration-500 border-none cursor-pointer p-0 ${
                i === currentIndex ? "bg-[#d4af37] w-6" : "bg-purple-900/20 hover:bg-[#d4af37]/60 w-1.5"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}