import { useEffect, useState } from "react";

export default function MusicPlayer() {
  const [audio] = useState(() => {
    if (typeof window !== "undefined") {
      const a = new Audio("/Simi - Ayo _ (Instrumental) [rUR7OoHJjgA].mp3");
      a.loop = true;
      a.volume = 1.0;
      return a;
    }
    return null;
  });

  useEffect(() => {
    if (!audio) return;

    let hasInteracted = false;

    const playMusic = () => {
      hasInteracted = true;
      audio.play().catch(() => {});
      document.removeEventListener("click", playMusic);
      document.removeEventListener("touchstart", playMusic);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        audio.pause();
      } else {
        // Only resume if the user had already interacted to start the music initially
        if (hasInteracted) {
          audio.play().catch(() => {});
        }
      }
    };

    // Attempt to play immediately
    audio.play().then(() => {
      hasInteracted = true;
    }).catch(() => {
      // If blocked, wait for user interaction
      document.addEventListener("click", playMusic);
      document.addEventListener("touchstart", playMusic);
    });

    // Listen for tab switching or minimizing
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("click", playMusic);
      document.removeEventListener("touchstart", playMusic);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      audio.pause();
    };
  }, [audio]);

  return null;
}