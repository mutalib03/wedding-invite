import { useState, useCallback } from "react";
import Petals from "@/components/Petals";
import Envelope from "@/components/Envelope";
import Monogram from "@/components/Monogram";
import RevealSection from "@/components/RevealSection";
import DetailsCard from "@/components/DetailsCard";
import CountdownTimer from "@/components/CountdownTimer";
import DressCode from "@/components/DressCode";
import VenueMap from "@/components/VenueMap";
import RsvpSection from "@/components/RsvpSection";
import MusicPlayer from "@/components/MusicPlayer";
import ShareButton from "@/components/ShareButton";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showInvite, setShowInvite] = useState(false);
  const [stageHidden, setStageHidden] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    setTimeout(() => setStageHidden(true), 650);
    setTimeout(() => {
      setShowInvite(true);
      window.scrollTo(0, 0);
    }, 1350);
  }, []);

  return (
    <>
      <Petals />
      <MusicPlayer />

      {!showInvite && (
        <section
          className="relative min-h-screen flex flex-col items-center justify-center gap-7 p-6 z-[2] transition-all duration-700 ease-in-out bg-[#fdfafc]"
          style={{
            opacity: stageHidden ? 0 : 1,
            transform: stageHidden ? "scale(0.96)" : "scale(1)",
            pointerEvents: stageHidden ? "none" : "auto",
          }}
        >
          <p className="font-playfair font-medium italic tracking-wide text-purple-900 text-[1.15rem] text-center opacity-85">
            You have a letter from Ololade &amp; Opeyemi
          </p>
          <Envelope isOpen={isOpen} onOpen={handleOpen} />
          <p
            className="font-marcellus tracking-[0.25em] uppercase text-[0.72rem] text-purple-900 transition-opacity duration-400 ease-in-out"
            style={{ opacity: isOpen ? 0 : 0.65 }}
          >
            tap the seal to open
          </p>
        </section>
      )}

      {showInvite && (
        <main
          className="relative z-[2] min-h-screen flex justify-center py-16 px-5 pb-24 animate-fade-in-up bg-cover bg-center bg-fixed bg-no-repeat"
          style={{ backgroundImage: "url('/img/purple-bg.jpg')" }}
          id="invite"
        >
          {/* Overlay to ensure text readability against the background */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-0" />
          
          <div className="w-full max-w-[520px] text-center z-10 relative bg-white/60 p-6 sm:p-10 rounded-3xl shadow-2xl border border-white/50 backdrop-blur-md">
            
            <RevealSection as="header" className="mb-8">
              <Monogram />
              <p className="font-marcellus uppercase tracking-[0.2em] text-[0.65rem] text-purple-900/80 mb-2">
                IN THE NAME OF ALLAH,
                <br />THE MOST BENEFICENT, THE MOST MERCIFUL.
              </p>
            </RevealSection>

            <RevealSection className="mb-10" delay={100}>
              <p className="font-playfair italic font-medium text-lg text-purple-800 m-0 mb-3">
                Both the families of
              </p>
              <p className="text-[1.2rem] font-marcellus tracking-widest text-purple-950 m-0 mb-3 uppercase">
                Adebayo and Lawal
              </p>
              <p className="text-sm text-purple-900/80 m-0 mt-4 leading-relaxed font-playfair max-w-[85%] mx-auto">
                humbly invite you to take part in our children's first step to a lifetime of joy and happiness.
              </p>
            </RevealSection>

            <RevealSection className="mb-10" delay={200}>
              <h1
                className="font-great-vibes font-normal text-purple-950 m-0 leading-[1.1]"
                style={{ fontSize: "clamp(3.5rem, 15vw, 5rem)", textShadow: "2px 2px 10px rgba(255,255,255,0.8)" }}
              >
                <span className="block">Ololade</span>
                <span className="block text-[0.4em] text-[#d4af37] -my-2 font-playfair">&amp;</span>
                <span className="block">Opeyemi</span>
              </h1>
              <p className="font-marcellus uppercase tracking-[0.2em] text-[0.7rem] text-[#d4af37] mt-6 font-bold">
                #TILLINFINITYWITHMT#
              </p>
            </RevealSection>

            <RevealSection delay={300}>
              <CountdownTimer />
            </RevealSection>

            <RevealSection delay={400}>
              <DetailsCard />
            </RevealSection>

            <RevealSection delay={100}>
              <DressCode />
            </RevealSection>

            <RevealSection className="mb-12 px-2.5 py-8 border-y border-[#d4af37]/30" delay={100}>
              <p className="font-playfair italic text-[1.15rem] leading-relaxed text-purple-950 font-medium">
                "And your lord will give you, and you shall be satisfied."
              </p>
              <p className="font-marcellus text-sm text-purple-800 mt-2">(Q93:5)</p>
            </RevealSection>

            <RevealSection delay={100}>
              <VenueMap />
            </RevealSection>

            <RevealSection delay={100}>
              <RsvpSection />
            </RevealSection>

            <RevealSection className="mb-10" delay={100}>
              <ShareButton />
            </RevealSection>

            <RevealSection as="footer" className="opacity-90 mt-12">
              <Monogram small />
            </RevealSection>
          </div>
        </main>
      )}
    </>
  );
}