import * as React from "react";
import cn from "classnames";
import useOptimizedBackground from "../../hooks/useOptimisedBackground";
import ScrollAnimation from "react-animate-on-scroll";

interface IProps {
  imageUrl: string;
  slowImageUrl?: string;
  title?: string;
  paragraphs: Array<string | React.ReactNode>;
  imageClass?: string;
  bgColour?: "grey" | "white";
  isReverse?: boolean;
  imageAnimation?: string;
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
            <div className="content-block__title">{props.title}</div>
          )}
          {props.paragraphs.map((p) => (
            <p className="content-block__paragraph">{p}</p>
          ))}
        </div>
        {props.imageAnimation ? (
          <ScrollAnimation
            animateIn={props.imageAnimation}
            initiallyVisible={!props.imageAnimation}
          >
            {imageElement}
          </ScrollAnimation>
        ) : (
          imageElement
        )}
      </div>
    </div>
  );
};

export default TextBlockWithImage;
