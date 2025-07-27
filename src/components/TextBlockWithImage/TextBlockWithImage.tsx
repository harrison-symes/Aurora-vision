import * as React from "react";
import cn from "classnames";

interface IProps {
  imageUrl: string;
  title?: string;
  paragraphs: string[];
  imageClass?: string;
  bgColour?: "grey";
}

const TextBlockWithImage = (props: IProps) => {
  return (
    <div
      className={cn("content-block", {
        "content-block--grey": props.bgColour === "grey",
      })}
    >
      <div className="content-block__container">
        <div className="content-block__text-container">
          {props.title && (
            <div className="content-block__title">{props.title}</div>
          )}
          {props.paragraphs.map((p) => (
            <div className="content-block__paragraph">{p}</div>
          ))}
        </div>
        <img
          src={props.imageUrl}
          className={cn("content-block__image", props.imageClass)}
          alt="alt"
        />
      </div>
    </div>
  );
};

export default TextBlockWithImage;
