import * as React from "react";
import YoutubePlayer from "../YoutubePlayer";

const LatestProject = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="latest-project__container">
      <h1 className="latest-project__heading">
        Charm the Wind - SilvaSpiral (Music Video)
      </h1>
      <div className="latest-project__inner">
        <div className="latest-project__video-box" ref={containerRef}>
          <YoutubePlayer containerRef={containerRef} videoId="Q-a7B8SJCt0" />
        </div>
        <div className="latest-project__details">
          <div className="latest-project__description">
            This is the description of the project it was blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProject;
