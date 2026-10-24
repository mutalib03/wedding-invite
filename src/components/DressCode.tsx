export default function DressCode() {
  return (
    <div className="mb-10 text-center">
      <p className="font-marcellus uppercase tracking-[0.25em] text-[0.75rem] text-purple-900 mb-5 relative">
        <span className="inline-block w-[26px] h-px bg-[#d4af37] align-middle mr-2.5" />
        Color of the day
        <span className="inline-block w-[26px] h-px bg-[#d4af37] align-middle ml-2.5" />
      </p>
      <div className="flex items-center justify-center gap-6">
        <div className="flex flex-col items-center gap-2.5">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 shadow-md" />
            <div className="w-10 h-10 rounded-full bg-purple-800 border-2 border-purple-900 shadow-md" />
          </div>
          <div className="font-playfair italic text-lg text-purple-950 mt-1">
            White and Purple
          </div>
        </div>
      </div>
    </div>
  );
}