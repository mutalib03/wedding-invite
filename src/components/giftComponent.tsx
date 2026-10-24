export default function GiftRegistry() {
  return (
    <div className="mb-14 text-center">
      <p className="font-marcellus uppercase tracking-[0.3em] text-[0.85rem] text-[#d4af37] mb-6 font-bold flex items-center justify-center gap-4">
        <span className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[#d4af37]" />
        Wedding Gift
        <span className="w-8 h-[2px] bg-gradient-to-l from-transparent to-[#d4af37]" />
      </p>
      <div className="rounded-3xl p-8 bg-white/40 backdrop-blur-[12px] border border-[#d4af37]/30 shadow-[0_15px_35px_-10px_rgba(107,33,168,0.15)] text-purple-950">
        <p className="font-playfair italic text-[1.1rem] mb-6 leading-relaxed">
          We are so grateful for your presence. If you would like to bless us with a gift, kindly use the transfer narration "Wedding Gift".
        </p>
        <div className="flex flex-col gap-4 text-[0.9rem] font-marcellus tracking-wider">
          <div className="p-4 bg-white/60 rounded-xl border border-[#d4af37]/30 transition-all hover:scale-[1.02]">
            <p className="font-bold text-purple-900 mb-1">Lawal Ololade</p>
            <p>Access Bank &middot; 0080374513</p>
          </div>
          <div className="p-4 bg-white/60 rounded-xl border border-[#d4af37]/30 transition-all hover:scale-[1.02]">
            <p className="font-bold text-purple-900 mb-1">Adebayo Opeyemi</p>
            <p>First Bank &middot; 3034996349</p>
          </div>
        </div>
      </div>
    </div>
  );
}