import * as React from "react";
import Hero from "./Hero";
import bannerMin from "../../assets/images/contact-us/banner-min.webp";
import banner from "../../assets/images/contact-us/banner.webp";

const ContactUsHero = () => (
  <Hero
    imageMin={bannerMin}
    image={banner}
    eyebrow="Get in touch"
    title="Contact us"
  />
);

export default ContactUsHero;
