import * as React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

interface IButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  colour: "purple" | "pink" | "blue" | "green" | "black" | "white";
  children: React.ReactNode;
}

const Button = (props: IButtonProps) => {
  const className = cn("button", props.className, {
    "button--purple": props.colour === "purple",
    "button--blue": props.colour === "blue",
    "button--pink": props.colour === "pink",
    "button--green": props.colour === "green",
    "button--black": props.colour === "black",
    "button--white": props.colour === "white",
  });

  if (typeof props.href !== "undefined") {
    return (
      <Link className={className} to={props.href}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={className} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
