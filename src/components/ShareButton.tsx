import { useCallback } from "react";

export default function ShareButton() {
  const handleShare = useCallback(async () => {
   const shareData = {
      title: "Ololade & Opeyemi - Introduction Ceremony",
      text: "You are cordially invited to the Introduction Ceremony of Ololade & Opeyemi on December 12, 2026!",
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      } catch {
        // Clipboard failed
      }
    }
  }, []);

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 font-marcellus tracking-[0.15em] font-bold uppercase text-[0.72rem] bg-white/50 backdrop-blur-md border border-[#d4af37]/60 text-purple-950 py-3 px-6 rounded-full cursor-pointer transition-all duration-300 hover:bg-[#d4af37] hover:text-white hover:shadow-[0_5px_15px_rgba(212,175,55,0.3)] hover:-translate-y-0.5"
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
      Share Invitation
    </button>
  );
}