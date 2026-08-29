import * as React from "react";
import Hero from "./Hero";
import bannerMin from "../../assets/images/our-work/banner-min.webp";
import banner from "../../assets/images/our-work/banner.webp";

const OurWorkHero = () => (
  <Hero
    imageMin={bannerMin}
    image={banner}
    eyebrow="Portfolio"
    title="Our work"
  />
);

export default OurWorkHero;
