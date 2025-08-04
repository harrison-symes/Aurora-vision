import * as React from "react";
import cn from "classnames";
import useOptimizedBackground from "../../hooks/useOptimisedBackground";
import ScrollAnimation from "react-animate-on-scroll";
import { useSelector } from "react-redux";
import { getAreAllJeremyLettersClicked } from "../../selectors/jeremy.selectors";

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
  const areAllLettersClicked = useSelector(getAreAllJeremyLettersClicked);

  let imageUrl = useOptimizedBackground(
    props.imageUrlSlow ?? props.imageUrl,
    props.imageUrl
  );
  let bgImage = useOptimizedBackground(
    props.bgImageUrlSlow ?? props.bgImageUrl,
    props.bgImageUrl
  );

  if (areAllLettersClicked) {
    imageUrl = "/images/about-us/jeremy-mode.png";
  }

  return (
    <div
      className={cn("immersive-block", props.bgClass, {
        "immersive-block--reverse": props.isReverse,
      })}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="immersive-block__container">
        <img src={imageUrl} className="immersive-block__image" />
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
