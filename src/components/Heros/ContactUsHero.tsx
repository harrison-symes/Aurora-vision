import * as React from "react";
import useOptimizedBackground from "../../hooks/useOptimisedBackground";
import bannerMin from "../../assets/images/contact-us/banner-min.webp";
import banner from "../../assets/images/contact-us/banner.webp";

const ContactUsHero = () => {
  const bgImage = useOptimizedBackground(
    bannerMin,
    banner
  );

  return (
    <div className="contact-us-hero__container">
      <div
        className="hero hero--contact-us"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="hero__container">
          <div className="hero__text-container hero__text-container--bottom-center">
            <div className="hero__text">CONTACT US</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsHero;
