import React, { useEffect, useRef } from "react";
import useWindowWidth from "../hooks/useWindowWidth";
import YouTube from "react-youtube";

interface IYoutubePlayerProps {
  containerRef: React.RefObject<HTMLDivElement>;
  videoId: string;
  heightRatio?: number;
}

const YoutubePlayer = (props: IYoutubePlayerProps) => {
  const windowWidth = useWindowWidth();
  const [containerWidth, setContainerWidth] = React.useState(0);
  const playerRef = useRef<YouTube>(null);

  React.useEffect(() => {
    if (props.containerRef.current !== null) {
      setContainerWidth(props.containerRef.current.offsetWidth ?? 572);
    }
  }, [props.containerRef.current, windowWidth]);

  useEffect(() => {
    // playerRef.current?.forceUpdate();
    // playerRef.current?.resetPlayer();
  }, [containerWidth]);

  useEffect(() => {
    return () => {
      playerRef.current?.destroyPlayer();
    };
  }, []);

  const isMobile = windowWidth <= 768;

  const width = containerWidth;
  const height = width * (props.heightRatio ?? 3 / 4);
  console.log(height, props.heightRatio);

  if (props.containerRef.current === null || containerWidth === 0) {
    return null;
  }

  return (
    <YouTube
      className="react-player"
      ref={playerRef}
      videoId={props.videoId}
      opts={{
        width,
        height,
      }}
    />
  );
};

export default YoutubePlayer;
