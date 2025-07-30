import * as React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "./Icons/Instagram";
import YoutubeIcon from "./Icons/Youtube";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__inner">
        <img className="footer__logo" src="/images/logo.png" />
        <div className="footer__credit">Website by Harrison Symes</div>
        <div className="footer__socials">
          <Link
            to="https://www.instagram.com/auroravision.studio"
            className="flex"
          >
            <InstagramIcon containerProps={{ className: "mr1" }} />
            Instagram
          </Link>
          <Link
            to="https://www.youtube.com/@auroravision_"
            className="flex ml3"
          >
            <YoutubeIcon containerProps={{ className: "mr1" }} />
            Youtube
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
