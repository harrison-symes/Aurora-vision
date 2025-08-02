import React, { useEffect, useState } from "react";

const useOptimizedBackground = (slowUrl: string, fastUrl: string) => {
  const [backgroundImage, setBackgroundImage] = useState(slowUrl);

  useEffect(() => {
    const connection =
      (navigator as any).connection ||
      (navigator as any).mozConnection ||
      (navigator as any).webkitConnection;

    const isSlow =
      connection?.effectiveType?.includes("2g") || connection?.saveData;

    const chosenImage = isSlow ? slowUrl : fastUrl;

    // Optional preload for fast image
    const img = new Image();
    img.src = chosenImage;
    img.onload = () => {
      setBackgroundImage(chosenImage);
    };
  }, [slowUrl, fastUrl]);

  return backgroundImage;
};

export default useOptimizedBackground;
