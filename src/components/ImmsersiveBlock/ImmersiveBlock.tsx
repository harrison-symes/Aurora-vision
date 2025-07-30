import * as React from "react";
import cn from "classnames";

interface IProps {
  bgClass: string;
  imageUrl: string;
  title: string;
  paragraphs: string[];
  link: string;
  isReverse?: boolean;
}

const ImmersiveBlock = (props: IProps) => {
  return (
    <div
      className={cn("immersive-block", props.bgClass, {
        "immersive-block--reverse": props.isReverse,
      })}
    >
      <div className="immersive-block__container">
        <img src={props.imageUrl} className="immersive-block__image" />
        <div className="immersive-block__text-container">
          <div className="immersive-block__title">{props.title}</div>
          {props.paragraphs.map((p) => (
            <div key={p.slice(10)} className="immersive-block__paragraph">
              {p}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImmersiveBlock;
