import { useEffect, useState } from "react";

export default function MusicPlayer() {
  const [audio] = useState(() => {
    if (typeof window !== "undefined") {
      const a = new Audio("/Victony - SOWETO (Instrumental) - (320 Kbps).mp3");
      a.loop = true;
      a.volume = 1.0; // Set to max volume
      return a;
    }
    return null;
  });

  useEffect(() => {
    if (!audio) return;

    const playMusic = () => {
      audio.play().catch(() => {
        // Autoplay blocked by browser, wait for another interaction
      });
      // Remove listeners once playback is initiated
      document.removeEventListener("click", playMusic);
      document.removeEventListener("touchstart", playMusic);
    };

    // Attempt to play immediately (will likely be blocked until interaction)
    audio.play().catch(() => {
      // If blocked, wait for the user to tap anywhere (like opening the envelope)
      document.addEventListener("click", playMusic);
      document.addEventListener("touchstart", playMusic);
    });

    return () => {
      document.removeEventListener("click", playMusic);
      document.removeEventListener("touchstart", playMusic);
      audio.pause(); // Stop music if the component is ever removed
    };
  }, [audio]);

  // Render nothing to the screen since there is no toggle button
  return null;
}