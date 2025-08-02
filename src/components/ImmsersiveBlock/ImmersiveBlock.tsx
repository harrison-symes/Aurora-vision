import * as React from "react";
import cn from "classnames";
import useOptimizedBackground from "../../hooks/useOptimisedBackground";
import ScrollAnimation from "react-animate-on-scroll";

interface IProps {
  bgClass: string;
  imageUrl: string;
  imageUrlSlow: string;
  bgImageUrl: string;
  bgImageUrlSlow: string;
  title: string;
  paragraphs: string[];
  link: string;
  isReverse?: boolean;
}

const ImmersiveBlock = (props: IProps) => {
  const imageUrl = useOptimizedBackground(
    props.imageUrlSlow ?? props.imageUrl,
    props.imageUrl
  );
  const bgImage = useOptimizedBackground(
    props.bgImageUrlSlow ?? props.bgImageUrl,
    props.bgImageUrl
  );

  return (
    <div
      className={cn("immersive-block", props.bgClass, {
        "immersive-block--reverse": props.isReverse,
      })}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="immersive-block__container">
        {/* <ScrollAnimation animateIn="fadeIn" delay={0.5}> */}
        <img src={imageUrl} className="immersive-block__image" />
        {/* </ScrollAnimation> */}
        <div className="immersive-block__text-container">
          <div className="immersive-block__title">{props.title}</div>
          {props.paragraphs.map((p) => (
            <p key={p.slice(10)} className="immersive-block__paragraph">
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImmersiveBlock;
