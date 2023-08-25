import * as React from "react";

const HomeHero = () => {
  return (
    <div className="home-hero__container">
      <div className="home-hero__logo">
        <img src="/images/logo.png" />
      </div>
      {/* <div> */}
      <svg
        className="home-hero__waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" className="wave--blue" x="48" y="0" />
          <use xlinkHref="#gentle-wave" x="48" y="3" className="wave--green" />
          <use xlinkHref="#gentle-wave" x="48" className="wave--pink" y="5" />
          <use xlinkHref="#gentle-wave" x="48" y="7" className="wave--purple" />
        </g>
      </svg>
      {/* </div> */}
      {/* <div>Bottom text</div> */}
    </div>
  );
};

export default HomeHero;
