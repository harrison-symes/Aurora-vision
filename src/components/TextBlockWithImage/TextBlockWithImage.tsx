import * as React from "react";
import cn from "classnames";
import useOptimizedBackground from "../../hooks/useOptimisedBackground";
import Reveal, { RevealAnimation } from "../Reveal/Reveal";

interface IProps {
  imageUrl: string;
  slowImageUrl?: string;
  title?: string;
  titleIcon?: string;
  paragraphs: Array<string | React.ReactNode>;
  imageClass?: string;
  bgColour?: "grey" | "white";
  isReverse?: boolean;
  imageAnimation?: RevealAnimation;
}

const TextBlockWithImage = (props: IProps) => {
  const imageUrl = useOptimizedBackground(
    props.slowImageUrl ?? props.imageUrl,
    props.imageUrl
  );

  const imageElement = (
    <img
      src={imageUrl}
      className={cn("content-block__image", props.imageClass)}
      alt="alt"
    />
  );

  return (
    <div
      className={cn("content-block", {
        "content-block--grey": props.bgColour === "grey",
        "content-block--verse": props.isReverse,
      })}
    >
      <div
        className={cn("content-block__container", {
          "content-block__container--reverse": props.isReverse,
        })}
      >
        <div className="content-block__text-container">
          {props.title && (
            <div className={cn("content-block__title", {
              "content-block__title--with-icon": props.titleIcon
            })}>
              {props.titleIcon && <img alt={props.title} src={props.titleIcon} className="content-block__title__icon" />}
              <h2 className="content-block__title__text">{props.title}</h2>
              {props.titleIcon && <div className="content-block__title__spacer" />}
            </div>
          )}
          {props.paragraphs.map((p) => (
            <p className="content-block__paragraph">{p}</p>
          ))}
        </div>
        {props.imageAnimation ? (
          <Reveal animation={props.imageAnimation}>{imageElement}</Reveal>
        ) : (
          imageElement
        )}
      </div>
    </div>
  );
};

export default TextBlockWithImage;
