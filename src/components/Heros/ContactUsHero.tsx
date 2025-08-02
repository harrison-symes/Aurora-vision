import * as React from "react";
import useOptimizedBackground from "../../hooks/useOptimisedBackground";

const ContactUsHero = () => {
  const bgImage = useOptimizedBackground(
    "/images/contact-us/banner-min.png",
    "/images/contact-us/banner.png"
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
