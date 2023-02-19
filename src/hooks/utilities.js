import {useState, useEffect} from "react";

// Responsive Detail
export const useResize = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth > 1200);

  function updateSize() {
    setWindowSize(window.innerWidth > 1200);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  });

  return windowSize;
}
