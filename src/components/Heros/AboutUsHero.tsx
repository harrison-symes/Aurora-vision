import * as React from "react";
import Hero from "./Hero";
import bannerMin from "../../assets/images/about-us/banner-min.webp";
import banner from "../../assets/images/about-us/banner.webp";

const AboutUsHero = () => (
  <Hero
    imageMin={bannerMin}
    image={banner}
    eyebrow="About us"
    title="Who is AuroraVision?"
  />
);

export default AboutUsHero;
