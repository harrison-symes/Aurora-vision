import * as React from "react";
import { Link } from "react-router-dom";

import avLogo from "../svg/av-logo.svg";
import instagram from "../svg/instagram.svg";
import youtube from "../svg/youtube.svg";
import facebook from "../svg/facebook.svg";
import useOptimizedBackground from "../hooks/useOptimisedBackground";
import cn from "classnames";
import { useSelector } from "react-redux";
import {
  getAreAllJeremyLettersClicked,
  getAreAllJerrysFound,
  getIsJeremyCodeSubmitted,
} from "../selectors/jeremy.selectors";

interface IJerryProps {
  alt: string;
  isFound: boolean;
}

const Jerry = (props: IJerryProps) => {
  return (
    <img
      className={cn("footer__jerry", {
        "footer__jerry--found": props.isFound,
      })}
      alt={props.alt}
      src="/images/about-us/jerry-me.png"
      title={props.alt}
    />
  );
};

const JerryCounter = () => {
  const hasFoundAllJerrys = useSelector(getAreAllJerrysFound);
  const hasSubmittedCode = useSelector(getIsJeremyCodeSubmitted);
  const areAllLettersClicked = useSelector(getAreAllJeremyLettersClicked);

  if (!hasFoundAllJerrys && !hasSubmittedCode && !areAllLettersClicked) {
    return null;
  }

  return (
    <div className="footer__jerry-container">
      {hasFoundAllJerrys && hasSubmittedCode && areAllLettersClicked && (
        <div className="footer__jerry-reward">
          You found all the secret Jeremys! Go to the{" "}
          <Link to="/our-work">OUR WORK</Link> page for your reward
        </div>
      )}
      <Jerry alt={"Find all the Jerry's"} isFound={hasFoundAllJerrys} />
      <Jerry alt={"Home page J E R E M Y"} isFound={areAllLettersClicked} />
      <Jerry alt={"Contact Jeremy Brow"} isFound={hasSubmittedCode} />
    </div>
  );
};

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
        <JerryCounter />
        <img className="footer__logo" src={avLogo} />
        <div className="footer__credit">Website by Harrison Symes</div>
        <div className="footer__right">
          <div className="footer__socials">
            <div className="footer__socials__text">FOLLOW US</div>
            <div className="footer__socials__icons">
              <Link to="https://www.instagram.com/auroravision.nz">
                <img
                  src={instagram}
                  alt="Instagram"
                  className="footer__socials__instagram"
                />
              </Link>
              {/* <Link to="https://www.instagram.com/auroravision.studio">
                <img
                  src={facebook}
                  alt="Facebook"
                  className="footer__socials__facebook"
                />
              </Link> */}
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
