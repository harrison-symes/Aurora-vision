import * as React from "react";
import cn from "classnames";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useDispatch, useSelector } from "react-redux";
import { getPath } from "../../selectors/router.selectors";

import logo from "../../svg/av-logo.svg";

const NavBar = () => {
  const [isActive, setIsActive] = React.useState<boolean>(false);
  const path = useSelector(getPath);

  React.useEffect(() => {
    setIsActive(false);
  }, [path]);

  return (
    <>
      {isActive && <div className="navbar__screen-block" />}
      <div className="navbar__container">
        <div className="navbar__inner">
          <div className="navbar__top">
            <Link to={"/"}>
              <img src={logo} className="navbar__logo" />
            </Link>
          </div>
          <div className="navbar__bottom">
            <div className="navbar__hamburger">
              <Hamburger
                toggled={isActive}
                onToggle={() => setIsActive((state) => !state)}
              />
            </div>
            <div
              className={cn("navbar__items", {
                "is-active": isActive,
              })}
            >
              <div className="navbar__hamburger">
                <Hamburger
                  toggled={isActive}
                  onToggle={() => setIsActive((state) => !state)}
                />
              </div>
              <NavItem href="/" text="HOME" />
              <NavItem href="/about-us" text="ABOUT US" />
              <NavItem href="/our-work" text="OUR WORK" />
              <NavItem href="/contact" text="CONTACT US" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
