import * as React from "react";

const AboutUsHero = () => {
  return (
    <div>
      <div className="hero hero--about-us">
        <div className="hero__container">
          <div className="hero__text-container hero__text-container--top-right">
            <div className="hero__text">WHO IS</div>
            <div className="hero__text">AURORAVISION?</div>
          </div>
        </div>
      </div>
      <div className="hero--overlay bg-grey">
        <img src="/images/character-banner.png" />
      </div>
    </div>
  );
};

export default AboutUsHero;
