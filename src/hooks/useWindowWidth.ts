import { useEffect, useState } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const onWindowResize = () => {
    if (window.innerWidth !== width) {
      setWidth(window.innerWidth);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onWindowResize);

    return () => window.removeEventListener("resize", onWindowResize);
  }, []);

  return width;
};

export default useWindowWidth;
