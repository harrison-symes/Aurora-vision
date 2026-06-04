import Button from "../../Button/Button"

import "./FundraiseBanner.scss"

const FundraiseBanner = () => {
    return (
        <div className="fundraise-banner">
            <h1 className="fundraise-banner__title">Help us make this film</h1>
            <Button className="fundraise-banner__button">Support the project</Button>
        </div>
    )
}

export default FundraiseBanner