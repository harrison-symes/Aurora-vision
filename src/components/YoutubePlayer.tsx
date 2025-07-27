import React from "react";
import useWindowWidth from "../hooks/useWindowWidth";
import YouTube from "react-youtube";

interface IYoutubePlayerProps {
  containerRef: React.RefObject<HTMLDivElement>;
  videoId: string;
}

const YoutubePlayer = (props: IYoutubePlayerProps) => {
  const windowWidth = useWindowWidth();
  const [containerWidth, setContainerWidth] = React.useState(0);

  React.useEffect(() => {
    if (props.containerRef.current !== null) {
      setContainerWidth(props.containerRef.current.offsetWidth ?? 572);
    }
  }, [props.containerRef.current, windowWidth]);

  const isMobile = windowWidth <= 768;

  const width = isMobile ? windowWidth - 48 : containerWidth;
  const height = (width * 3) / 4;

  if (props.containerRef.current === null || containerWidth === 0) {
    return null;
  }

  return (
    <YouTube
      videoId={props.videoId}
      opts={{
        width,
        height,
      }}
    />
  );
};

export default YoutubePlayer;
