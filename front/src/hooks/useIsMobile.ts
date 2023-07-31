import { useState, useEffect } from "react";

export default function useIsMobile() {
  const MOBILE_SIZE = 900;
  const [isMobile, setIsMobile] = useState(false);
  const [windowSize, setWindowSize] = useState(0);
  const handleResize = () => {
    setWindowSize(
      Math.min(document.documentElement.clientWidth, window.innerWidth)
    );
    setIsMobile(
      Math.min(document.documentElement.clientWidth, window.innerWidth) <=
        MOBILE_SIZE
    );
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return { isMobile, windowSize };
}
