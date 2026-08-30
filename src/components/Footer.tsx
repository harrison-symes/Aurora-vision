import * as React from "react";
import { Link } from "react-router-dom";

import avLogo from "../svg/av-logo.svg";
import jerryMe from "../assets/images/about-us/jerry-me.webp";
import footerMin from "../assets/images/footer-min.webp";
import footer from "../assets/images/footer.webp";
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
      src={jerryMe}
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
    footerMin,
    footer
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
            <p className="footer__socials__label">Follow us</p>
            <ul className="footer__socials__links">
              <li>
                <a
                  className="footer__social footer__social--instagram"
                  href="https://www.instagram.com/auroravision.nz"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="footer__social footer__social--youtube"
                  href="https://www.youtube.com/@auroravision_"
                  target="_blank"
                  rel="noreferrer"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
