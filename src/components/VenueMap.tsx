export default function VenueMap() {
  const mapQuery = encodeURIComponent("OAK VILLA SCHOOL, Papa Ajao, Mushin, Lagos State");

  return (
    <div className="mb-14 text-center">
      <p className="font-marcellus uppercase tracking-[0.3em] text-[0.85rem] text-[#d4af37] mb-6 font-bold flex items-center justify-center gap-4">
        <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[#d4af37]" />
        Venue
        <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-[#d4af37]" />
      </p>

      <div
        className="rounded-3xl overflow-hidden mb-6 p-2 transition-all duration-500 hover:shadow-xl"
        style={{
          background: "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(212, 175, 55, 0.4)",
          boxShadow: "0 15px 35px -10px rgba(107, 33, 168, 0.2)",
        }}
      >
        <iframe
          title="Venue Map"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${mapQuery}&zoom=16`}
          width="100%"
          height="260"
          style={{ border: 0, borderRadius: "1.2rem" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block grayscale-[20%] contrast-125"
        />
      </div>

      <a
        href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-marcellus tracking-[0.15em] uppercase text-[0.75rem] font-bold bg-white/60 backdrop-blur-md border border-[#d4af37] text-purple-950 py-3 px-7 rounded-full cursor-pointer transition-all duration-300 hover:bg-[#d4af37] hover:text-white hover:shadow-[0_8px_20px_rgba(212,175,55,0.3)] no-underline"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        Get Directions
      </a>
    </div>
  );
}