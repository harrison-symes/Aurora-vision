import * as React from "react";
import GithubIcon from "./Icons/Github";
import { Link } from "react-router-dom";
import InstagramIcon from "./Icons/Instagram";
import YoutubeIcon from "./Icons/Youtube";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__inner">
        <div className="footer__socials">
          <Link
            to="https://www.instagram.com/auroravision.studi"
            className="flex"
          >
            <InstagramIcon containerProps={{ className: "mr1" }} />
            Instagram
          </Link>
          <Link
            to="https://www.youtube.com/@auroravision6992"
            className="flex ml3"
          >
            <YoutubeIcon containerProps={{ className: "mr1" }} />
            Youtube
          </Link>
        </div>
        <div className="footer__github">
          <div>
            Website by Harrison Symes <span className="dn dib-ns mh1 ">-</span>
          </div>
          <div className="flex">
            View the code on
            <Link to="https://github.com/harrison-symes/Aurora-vision">
              <GithubIcon containerProps={{ className: "ml2 mr1" }} /> Github
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
