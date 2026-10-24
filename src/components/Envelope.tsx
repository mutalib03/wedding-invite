interface EnvelopeProps {
  isOpen: boolean;
  onOpen: () => void;
}

export default function Envelope({ isOpen, onOpen }: EnvelopeProps) {
  return (
    <div
      className="w-[min(340px,85vw)] relative transition-all duration-700 hover:scale-105"
      style={{
        aspectRatio: "3 / 2",
        perspective: "1500px",
        filter: "drop-shadow(0 30px 40px rgba(59, 7, 100, 0.4))",
      }}
    >
      {/* Back (Inside of Envelope) - Soft Cream */}
      <div
        className="absolute inset-0 rounded-lg"
        style={{
          background: "linear-gradient(160deg, #fdfafc, #f4e9f0)",
          boxShadow: "inset 0 0 0 2px rgba(212, 175, 55, 0.4)",
        }}
      />
      {/* Front (Bottom Flap) - Deep Purple */}
      <div
        className="absolute left-0 bottom-0 w-full rounded-b-lg z-[2]"
        style={{
          height: "78%",
          background: "linear-gradient(155deg, #581c87, #3b0764)",
          clipPath: "polygon(0 100%, 0 22%, 50% 58%, 100% 22%, 100% 100%)",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)",
        }}
      >
        {/* Elegant Gold Trim */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[80%] h-[2px] opacity-80"
          style={{
            top: "13%",
            background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
          }}
        />
      </div>
      {/* Top Flap */}
      <div
        className="absolute top-0 left-0 w-full z-[3]"
        style={{
          height: "58%",
          background: "linear-gradient(200deg, #6b21a8, #4c1d95)",
          clipPath: "polygon(0 0, 100% 0, 50% 100%)",
          transformOrigin: "top center",
          transformStyle: "preserve-3d",
          transform: isOpen ? "rotateX(180deg)" : "rotateX(0deg)",
          boxShadow: "inset 0 -1px 0 rgba(212, 175, 55, 0.5)",
          transition: "transform 1.2s cubic-bezier(0.6, -0.2, 0.2, 1.2)",
        }}
      />
      {/* Gold Wax Seal Button */}
      <button
        onClick={onOpen}
        disabled={isOpen}
        aria-label="Open the invitation"
        className="absolute z-[5] cursor-pointer flex items-center justify-center p-0 border-none transition-all duration-700 ease-in-out hover:brightness-110"
        style={{
          top: "40%",
          left: "50%",
          transform: isOpen
            ? "translate(-50%, -50%) scale(0) rotate(90deg)"
            : "translate(-50%, -50%) scale(1) rotate(0deg)",
          width: "84px",
          height: "84px",
          borderRadius: "50%",
          background: "radial-gradient(circle at 35% 30%, #fde08b, #d4af37 60%, #997a15)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.5), inset 0 0 0 3px rgba(255,255,255,0.4)",
          opacity: isOpen ? 0 : 1,
          pointerEvents: isOpen ? "none" : "auto",
        }}
      >
        <span className="font-great-vibes font-normal text-3xl text-purple-950 tracking-wide drop-shadow-sm">
          O&amp;O
        </span>
      </button>
    </div>
  );
}