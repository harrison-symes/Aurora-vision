import * as react from "react";
import cn from "classnames";
import YoutubePlayer from "../YoutubePlayer";
import { Link } from "react-router-dom";

interface IProps {
  videoId?: string;
  titleImageUrl?: string;
  title?: string;
  titleIcon?: string;
  paragraphs: Array<string | React.ReactNode>;
  credits?: Array<{
    title: string;
    fullName: string;
  }>;
  isReverse?: boolean;
  isGrey?: boolean;
  heightRatio?: number;
  buttonLink?: string;
  variant?: "splitWithTitle"
}

const YoutubeBlock = (props: IProps) => {
  const ref = react.useRef<HTMLDivElement>(null);
  return (
    <div
      className={cn("youtube-block", {
        "youtube-block--reverse": props.isReverse,
        "youtube-block--grey": props.isGrey,
        "youtube-block--split": props.variant === "splitWithTitle",
        "youtube-block--no-logo": props.titleImageUrl == null
      })}
    >
      <div className="youtube-block__container">
        <div className="youtube-block__player-container" ref={ref}>
          <YoutubePlayer
            containerRef={ref}
            videoId={props.videoId ?? "Q-a7B8SJCt0"}
            heightRatio={props.heightRatio}
          />
        </div>
        {props.titleImageUrl && <img src={props.titleImageUrl} className="youtube-block__title-image" />}
        <div className="youtube-block__text-container">
          {props.title && (
            <div className="youtube-block__title">
              {props.titleIcon && <img alt={props.title} src={props.titleIcon} className="youtube-block__title__icon" />}
              <h1 className="youtube-block__title__text">{props.title}</h1>
              {props.titleIcon && <div className="youtube-block__title__spacer" />}
            </div>
          )}
          {props.paragraphs.map((p) => (
            <p className="youtube-block__paragraph">
              {p}
            </p>
          ))}
          {props.credits?.length && <hr className="youtube-block__hr" />}
          <div className="youtube-block__credits">
            {props.credits?.map(({ fullName, title }) => (
              <p className="youtube-block__credit" key={title}>
                {title} - {fullName}
              </p>
            ))}
          </div>
          {props.buttonLink && (
            <Link
              to={props.buttonLink}
              className="button button--large youtube-block__button"
            >
              LEARN MORE
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default YoutubeBlock;
