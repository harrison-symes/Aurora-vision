import * as React from "react";
import useOptimizedBackground from "../../hooks/useOptimisedBackground";

const OurWorkHero = () => {
  const bgImage = useOptimizedBackground(
    "/images/our-work/banner-min.png",
    "/images/our-work/banner.png"
  );

  return (
    <div>
      <div
        className="hero hero--our-work"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="hero__container">
          <div className="hero__text-container hero__text-container--bottom-center">
            <div className="hero__text">OUR WORK</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorkHero;
