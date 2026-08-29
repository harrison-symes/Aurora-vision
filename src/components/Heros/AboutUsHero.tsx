import * as React from "react";
import Hero from "./Hero";
import bannerMin from "../../assets/images/about-us/banner-min.webp";
import banner from "../../assets/images/about-us/banner.webp";
import crewBanner from "../../assets/images/about-us/crew-banner.webp";

const AboutUsHero = () => (
  <Hero
    className="about-us-hero__container"
    imageMin={bannerMin}
    image={banner}
    eyebrow="About us"
    title="Who is AuroraVision?"
  >
    <div className="hero--overlay">
      <img src={crewBanner} alt="The AuroraVision crew on location" />
    </div>
  </Hero>
);

export default AboutUsHero;
