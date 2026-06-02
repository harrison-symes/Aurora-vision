import * as React from "react";
import useOptimizedBackground from "../../hooks/useOptimisedBackground";
import bannerMin from "../../assets/images/about-us/banner-min.webp";
import banner from "../../assets/images/about-us/banner.webp";
import crewBanner from "../../assets/images/about-us/crew-banner.webp";

const AboutUsHero = () => {
  const bgImage = useOptimizedBackground(
    bannerMin,
    banner
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
        <img src={crewBanner} />
      </div>
    </div>
  );
};

export default AboutUsHero;
