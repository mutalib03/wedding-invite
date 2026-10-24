export default function DetailsCard() {
  const handleAddToCalendar = () => {
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      "SUMMARY:Ololade & Opeyemi Wedding",
      "LOCATION:Shotinoye Street beside OAK VILLA SCHOOL, Papa Ajao, Mushin, Lagos State",
      "DESCRIPTION:Wedding Ceremony of Ololade & Opeyemi.",
      "DTSTART:20261212T100000Z",
      "DTEND:20261212T160000Z",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");
    const blob = new Blob([ics], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Ololade-and-Opeyemi-Wedding.ics";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="relative rounded-3xl p-8 mb-14 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 group"
      style={{
        background: "rgba(255, 255, 255, 0.4)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(212, 175, 55, 0.3)",
        boxShadow: "0 20px 40px -10px rgba(107, 33, 168, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
      }}
    >
      <div className="flex items-center justify-center gap-6 font-marcellus text-purple-950 mb-8 border-b border-[#d4af37]/30 pb-6 relative">
        <span className="text-xl font-medium tracking-widest uppercase">Dec</span>
        <span className="text-6xl font-bold text-[#d4af37] border-x border-[#d4af37]/30 px-6 drop-shadow-sm transition-transform duration-500 group-hover:scale-110">12</span>
        <span className="text-xl font-medium tracking-widest">2026</span>
      </div>

      <div className="flex flex-col gap-7 text-center">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-white/50 border border-[#d4af37]/40 flex items-center justify-center mb-3 shadow-sm">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-[#d4af37]">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <span className="font-playfair font-bold text-xl text-purple-950">11:00 AM</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-white/50 border border-[#d4af37]/40 flex items-center justify-center mb-3 shadow-sm">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-[#d4af37]">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="font-marcellus text-[0.85rem] tracking-wider text-purple-950 leading-relaxed max-w-[280px] font-bold">
            Shotinoye Street beside OAK VILLA SCHOOL,<br/>Papa Ajao, Mushin, Lagos State.
          </span>
        </div>
      </div>

      <div className="mt-10">
        <button
          onClick={handleAddToCalendar}
          className="font-marcellus tracking-[0.15em] uppercase text-[0.75rem] font-bold bg-gradient-to-r from-purple-900 to-purple-800 text-white py-3.5 px-8 rounded-full cursor-pointer transition-all duration-300 hover:shadow-[0_8px_20px_rgba(107,33,168,0.4)] hover:scale-105"
        >
          Add to calendar
        </button>
      </div>
    </div>
  );
}