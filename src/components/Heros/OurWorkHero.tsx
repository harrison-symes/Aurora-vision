import * as React from "react";
import useOptimizedBackground from "../../hooks/useOptimisedBackground";
import bannerMin from "../../assets/images/our-work/banner-min.png";
import banner from "../../assets/images/our-work/banner.png";

const OurWorkHero = () => {
  const bgImage = useOptimizedBackground(
    bannerMin,
    banner
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
