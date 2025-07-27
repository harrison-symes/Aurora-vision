import * as React from "react";
import cn from "classnames";

interface IProps {
  variant: "grey" | "white";
  imageUrl: string;
  name: string;
}

const MemberFrame = (props: IProps) => {
  return (
    <div
      className={cn("member-frame", {
        "member-frame--grey": props.variant === "grey",
      })}
    >
      <div className="member-frame__container">
        <img
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
