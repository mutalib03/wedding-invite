import { useEffect, useRef } from "react";

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "header" | "footer" | "div";
  delay?: number;
}

export default function RevealSection({
  children,
  className = "",
  as: Tag = "section",
  delay = 0,
}: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0) scale(1)";
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0) scale(1)";
            }, delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    io.observe(el);
    return () => io.unobserve(el);
  }, [delay]);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(30px) scale(0.96)",
        transition: `opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}