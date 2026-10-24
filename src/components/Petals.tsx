import { useEffect, useRef } from "react";

export default function Petals() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    // Increased particle count for a richer, more magical effect
    const count = window.innerWidth < 600 ? 20 : 35;
    
    // Theme colors: White, Light Purple, Deep Purple, Gold
    const colors = ['#ffffff', '#e9d5ff', '#6b21a8', '#d4af37'];
    const shapes = ['heart'];

    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      const size = 12 + Math.random() * 15; // Slightly larger sizes
      const color = colors[Math.floor(Math.random() * colors.length)];
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      
      p.style.position = "absolute";
      p.style.top = "-10vh";
      p.style.left = `${Math.random() * 100}vw`;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.opacity = `${0.3 + Math.random() * 0.6}`;
      
      if (shape === 'petal') {
        p.style.background = color;
        p.style.borderRadius = "70% 0 70% 0";
        p.style.boxShadow = `0 0 8px ${color}60`; // Soft glow
      } else {
        // SVG Heart
        const svgHeart = encodeURIComponent(`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        `);
        p.style.backgroundImage = `url("data:image/svg+xml;utf8,${svgHeart}")`;
        p.style.backgroundSize = "contain";
        p.style.backgroundRepeat = "no-repeat";
      }

      // Randomize animation duration, delay, and style
      const duration = 10 + Math.random() * 15;
      const delay = Math.random() * 12;
      const animType = Math.random() > 0.5 ? 'driftFall' : 'spinFall';
      
      p.style.animation = `${animType} ${duration}s ease-in-out ${delay}s infinite`;
      container.appendChild(p);
    }

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes driftFall {
          0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          50% { transform: translateY(50vh) translateX(30px) rotate(180deg); }
          90% { opacity: 1; }
          100% { transform: translateY(110vh) translateX(-30px) rotate(360deg); opacity: 0; }
        }
        @keyframes spinFall {
          0% { transform: translateY(0) translateX(0) rotateY(0deg) rotateZ(0deg); opacity: 0; }
          10% { opacity: 1; }
          50% { transform: translateY(50vh) translateX(-25px) rotateY(180deg) rotateZ(90deg); }
          90% { opacity: 1; }
          100% { transform: translateY(110vh) translateX(25px) rotateY(360deg) rotateZ(180deg); opacity: 0; }
        }
      `}</style>
      <div
        ref={containerRef}
        className="fixed inset-0 pointer-events-none z-[1] overflow-hidden"
        aria-hidden="true"
      />
    </>
  );
}