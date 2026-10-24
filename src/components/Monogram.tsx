interface MonogramProps {
  small?: boolean;
}

export default function Monogram({ small = false }: MonogramProps) {
  const sizeClasses = small
    ? "w-16 h-16 text-xl mt-2"
    : "w-[110px] h-[110px] text-[2.4rem] mb-3.5";

  return (
    <div
      className={`font-playfair font-semibold text-purple-950 border-[1.5px] border-[#d4af37] rounded-full flex items-center justify-center mx-auto ${sizeClasses}`}
      style={{
        background: "radial-gradient(circle, #fdfafc, #f4e9f0)",
        boxShadow: "0 20px 45px -20px rgba(107, 33, 168, 0.25)",
      }}
    >
      O
      <span className="inline-flex items-center justify-center px-1 text-[#d4af37] text-[0.9em] -translate-y-[1px]">
        ∞
      </span>
      O
    </div>
  );
}