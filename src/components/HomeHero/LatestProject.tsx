import * as React from "react"
import YouTube from "react-youtube"

const LatestProject = () => {
    return <div className="latest-project__container">
        <div className="latest-project__heading">Our latest project</div>
        <div className="latest-project__inner">
            <YouTube 
                className="latest-project__video-box"
                videoId="Q-a7B8SJCt0"
                style={{
                    maxWidth: 600
                }}
            />
            <div className="latest-project__details">
                <div className="latest-project__title">Charm the wind - SilvaSpiral (Music Video)</div>
                <div className="latest-project__description">This is the description of the project it was blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</div>
            </div>
        </div>
    </div>}

export default LatestProject