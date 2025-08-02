import React, { useEffect, useRef, useState } from "react";
import useWindowWidth from "../hooks/useWindowWidth";
import YouTube, { YouTubeProps, YouTubeEvent } from "react-youtube";
import cn from "classnames";

interface IYoutubePlayerProps {
  containerRef: React.RefObject<HTMLDivElement>;
  videoId: string;
  heightRatio?: number;
}

const YoutubePlayer = (props: IYoutubePlayerProps) => {
  const windowWidth = useWindowWidth();
  const [containerWidth, setContainerWidth] = useState(0);
  const playerReadyRef = useRef<YouTubeEvent<any>>();
  const playerRef = useRef<YouTube | null>(null);
  const isMountedRef = useRef(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (props.containerRef.current !== null) {
      setContainerWidth(props.containerRef.current.offsetWidth ?? 572);
    }
  }, [props.containerRef, windowWidth]);

  const width = containerWidth;
  const height = width * (props.heightRatio ?? 3 / 4);

  const onPlayerReady = (event: YouTubeEvent<any>) => {
    if (!isMountedRef.current) return;
    playerReadyRef.current = event;
    setIsLoaded(true);
  };

  const onError: YouTubeProps["onError"] = (event) => {
    console.warn("YouTube Player Error:", event);
  };

  if (
    !isMountedRef.current ||
    props.containerRef.current === null ||
    containerWidth === 0
  ) {
    return null;
  }

  return (
    <YouTube
      className={cn("react-player", {
        "react-player--loading": !isLoaded,
      })}
      videoId={props.videoId}
      opts={{
        width,
        height,
      }}
      onReady={onPlayerReady}
      onError={onError}
    />
  );
};

export default YoutubePlayer;
