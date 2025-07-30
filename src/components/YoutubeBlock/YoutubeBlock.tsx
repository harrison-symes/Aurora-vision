import * as react from "react";
import cn from "classnames";
import YoutubePlayer from "../YoutubePlayer";

interface IProps {
  videoId?: string;
  titleImageUrl: string;
  paragraphs: string[];
  isReverse?: boolean;
  isGrey?: boolean;
  heightRatio?: number;
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
            <div className="youtube-block__paragraph">{p}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YoutubeBlock;
