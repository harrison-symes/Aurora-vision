import * as React from "react";
import cn from "classnames";
import useOptimizedBackground from "../../hooks/useOptimisedBackground";
import ScrollAnimation from "react-animate-on-scroll";

interface IProps {
  imageUrl: string;
  slowImageUrl?: string;
  title?: string;
  paragraphs: string[];
  imageClass?: string;
  bgColour?: "grey";
  imageAnimation?: string;
}

const TextBlockWithImage = (props: IProps) => {
  const imageUrl = useOptimizedBackground(
    props.slowImageUrl ?? props.imageUrl,
    props.imageUrl
  );

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
            <p key={p.slice(10)} className="content-block__paragraph">
              {p}
            </p>
          ))}
        </div>
        <ScrollAnimation
          animateIn={props.imageAnimation}
          initiallyVisible={!props.imageAnimation}
        >
          <img
            src={imageUrl}
            className={cn("content-block__image", props.imageClass)}
            alt="alt"
          />
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default TextBlockWithImage;
