import * as React from "react";
import { Link } from "react-router-dom";

import avLogo from "../svg/av-logo.svg";
import instagram from "../svg/instagram.svg";
import youtube from "../svg/youtube.svg";
import facebook from "../svg/facebook.svg";
import useOptimizedBackground from "../hooks/useOptimisedBackground";

const Footer = () => {
  const bgImage = useOptimizedBackground(
    "/images/footer-min.png",
    "/images/footer.png"
  );
  return (
    <footer
      style={{ backgroundImage: `url(${bgImage})` }}
      className="footer__container"
    >
      <div className="footer__gradient" />
      <div className="footer__inner">
        <img className="footer__logo" src={avLogo} />
        <div className="footer__credit">Website by Harrison Symes</div>
        <div className="footer__right">
          <div className="footer__socials">
            <div className="footer__socials__text">FOLLOW US</div>
            <div className="footer__socials__icons">
              <Link to="https://www.instagram.com/auroravision.studio">
                <img
                  src={instagram}
                  alt="Instagram"
                  className="footer__socials__instagram"
                />
              </Link>
              <Link to="https://www.instagram.com/auroravision.studio">
                <img
                  src={facebook}
                  alt="Facebook"
                  className="footer__socials__facebook"
                />
              </Link>
              <Link to="https://www.youtube.com/@auroravision_">
                <img
                  src={youtube}
                  alt="Youtube"
                  className="footer__socials__youtube"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
