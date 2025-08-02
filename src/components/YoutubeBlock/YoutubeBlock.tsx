import * as react from "react";
import cn from "classnames";
import YoutubePlayer from "../YoutubePlayer";
import { Link } from "react-router-dom";

interface IProps {
  videoId?: string;
  titleImageUrl: string;
  paragraphs: string[];
  credits?: Array<{
    title: string;
    fullName: string;
  }>;
  isReverse?: boolean;
  isGrey?: boolean;
  heightRatio?: number;
  buttonLink?: string;
}

const YoutubeBlock = (props: IProps) => {
  const ref = react.useRef<HTMLDivElement>(null);
  return (
    <div
      className={cn("youtube-block", {
        "youtube-block--reverse": props.isReverse,
        "youtube-block--grey": props.isGrey,
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
        <img src={props.titleImageUrl} className="youtube-block__title-image" />
        <div className="youtube-block__text-container">
          {props.paragraphs.map((p) => (
            <p key={p.slice(10)} className="youtube-block__paragraph">
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
