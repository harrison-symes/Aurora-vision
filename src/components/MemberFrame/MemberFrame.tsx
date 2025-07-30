import * as React from "react";
import cn from "classnames";
import { useNavigate } from "react-router-dom";

interface IProps {
  variant: "grey" | "white";
  imageUrl: string;
  name: string;
}

const MemberFrame = (props: IProps) => {
  const navigate = useNavigate();

  const onClick = () => {
    if (props.name === "JEREMY BROW") {
      navigate("/jerry-me");
    }
  };

  return (
    <div
      className={cn("member-frame", {
        "member-frame--grey": props.variant === "grey",
      })}
    >
      <div className="member-frame__container">
        <img
          onClick={onClick}
          className="member-frame__image"
          src={props.imageUrl}
          alt={props.name}
        />
        <div className="member-frame__name">{props.name}</div>
      </div>
    </div>
  );
};

export default MemberFrame;
