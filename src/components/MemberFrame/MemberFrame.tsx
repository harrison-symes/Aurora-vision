import * as React from "react";
import cn from "classnames";

interface IProps {
  variant: "grey" | "white";
  imageUrl: string;
  name: string;
  /** Shown under the name, e.g. "Director". */
  role?: string;
  onImageClick?: () => void;
  imageClass?: string;
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
          onClick={props.onImageClick ? props.onImageClick : undefined}
          className={cn("member-frame__image", props.imageClass)}
          src={props.imageUrl}
          alt={props.name}
        />
        <div className="member-frame__identity">
          <div className="member-frame__name">{props.name}</div>
          {props.role && <div className="member-frame__role">{props.role}</div>}
        </div>
      </div>
    </div>
  );
};

export default MemberFrame;
