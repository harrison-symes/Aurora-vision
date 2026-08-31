import * as react from "react";
import cn from "classnames";
import YoutubePlayer from "../YoutubePlayer";
import { Link } from "react-router-dom";

interface IProps {
  videoId?: string;
  titleImageUrl?: string;
  /** Film name for the wordmark image; it carries the title visually. */
  titleImageAlt?: string;
  title?: string;
  titleIcon?: string;
  paragraphs: Array<string | React.ReactNode>;
  credits?: Array<{
    title: string;
    fullName: string;
  }>;
  isReverse?: boolean;
  isGrey?: boolean;
  buttonLink?: string;
  /** Defaults to "Learn more". */
  buttonText?: string;
  variant?: "splitWithTitle"
}

const YoutubeBlock = (props: IProps) => {
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
        <div className="youtube-block__player-container">
          <YoutubePlayer
            videoId={props.videoId ?? "Q-a7B8SJCt0"}
            title={props.title ? `Play ${props.title}` : undefined}
          />
        </div>
        {props.titleImageUrl && (
          <img
            src={props.titleImageUrl}
            alt={props.titleImageAlt ?? ""}
            className="youtube-block__title-image"
          />
        )}
        <div className="youtube-block__text-container">
          {props.title && (
            <div className="youtube-block__title">
              {props.titleIcon && <img alt={props.title} src={props.titleIcon} className="youtube-block__title__icon" />}
              <h2 className="youtube-block__title__text">{props.title}</h2>
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
          {props.buttonLink &&
            // Absolute URLs leave the site, so they get a real anchor with
            // target and rel rather than the router's Link, which builds
            // client-side navigation for somewhere it cannot navigate.
            (props.buttonLink.startsWith("http") ? (
              <a
                href={props.buttonLink}
                target="_blank"
                rel="noreferrer"
                className="button button--large youtube-block__button"
              >
                {props.buttonText ?? "Learn more"}
              </a>
            ) : (
              <Link
                to={props.buttonLink}
                className="button button--large youtube-block__button"
              >
                {props.buttonText ?? "Learn more"}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default YoutubeBlock;
