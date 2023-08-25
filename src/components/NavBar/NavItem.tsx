import * as React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPath } from "../../selectors/router.selectors";
import cn from "classnames";

interface INavItemProps {
  href: string;
  text: string;
}

const NavItem = (props: INavItemProps) => {
  const path = useSelector(getPath);

  return (
    <Link
      to={props.href}
      className={cn("navbar__item", {
        "is-active": path === props.href,
      })}
    >
      {props.text}
    </Link>
  );
};

export default NavItem;
