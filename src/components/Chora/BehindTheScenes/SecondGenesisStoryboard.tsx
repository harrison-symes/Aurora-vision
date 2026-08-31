import storyboard_1 from "../../../assets/images/chora/second_genesis/storyboard_1.webp";
import storyboard_2 from "../../../assets/images/chora/second_genesis/storyboard_2.webp";
import storyboard_3 from "../../../assets/images/chora/second_genesis/storyboard_3.webp";
import storyboard_4 from "../../../assets/images/chora/second_genesis/storyboard_4.webp";

import "./SecondGenesisStoryboard.scss"

const SecondGenesisStoryboard = () => {
    return (
        <div className="sg-storyboard">
            <div className="sg-storyboard__inner">
                <h2 className="sg-storyboard__title"><span className="chora-pink">Second Genesis</span> storyboard concepts</h2>
                <div className="sg-storyboard__grid">
                    <img src={storyboard_1} alt="Second Genesis Storyboard 1" className="sg-storyboard__image" />
                    <img src={storyboard_2} alt="Second Genesis Storyboard 2" className="sg-storyboard__image" />
                    <img src={storyboard_3} alt="Second Genesis Storyboard 3" className="sg-storyboard__image" />
                    <img src={storyboard_4} alt="Second Genesis Storyboard 4" className="sg-storyboard__image" />
                </div>
            </div>
        </div>
    )
}

export default SecondGenesisStoryboard