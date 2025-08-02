import * as React from "react";
import useOptimizedBackground from "../../hooks/useOptimisedBackground";

const AboutUsHero = () => {
  const bgImage = useOptimizedBackground(
    "/images/about-us/banner-min.png",
    "/images/about-us/banner.png"
  );

  return (
    <div className="about-us-hero__container">
      <div
        className="hero hero--about-us"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="hero__container">
          <div className="hero__text-container hero__text-container--top-right">
            <div className="hero__text">WHO IS</div>
            <div className="hero__text">AURORAVISION?</div>
          </div>
        </div>
      </div>
      <div className="hero--overlay">
        <img src="/images/about-us/crew-banner.png" />
      </div>
    </div>
  );
};

export default AboutUsHero;
