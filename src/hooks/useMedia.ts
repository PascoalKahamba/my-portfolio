import { useState, useEffect } from "react";

export default function useMedia(media: string) {
  const [match, setMatch] = useState(false);

  useEffect(() => {
    function showMediaQuery() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }

    window.addEventListener("resize", showMediaQuery);
    return () => window.removeEventListener("resize", showMediaQuery);
  }, [media]);

  return match;
}
