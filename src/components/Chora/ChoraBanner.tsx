import Button from "../Button/Button";
import "./ChoraBanner.scss"
import ProgressBar from "./FundraiseBanner/ProgressBar";

const ChoraBanner = () => {
    const scrollToChoraMap = () => {
        const choraMap = document.querySelector('.chora-map');

        if (!choraMap) {
            return;
        }

        const rect = choraMap.getBoundingClientRect();
        const targetScroll = rect.bottom + window.scrollY - window.innerHeight;

        window.scrollTo({
            top: Math.max(0, targetScroll),
            behavior: 'smooth',
        });
    };

    return (
        <div className="chora-banner">
            <div className="chora-banner__inner">
                <div className="chora-banner__left">
                    <h1 className="chora-banner__title">Chōra</h1>
                    <h2 className="chora-banner__subtitle">AN AURORAVISION</h2>
                    <h2 className="chora-banner__subtitle">ANTHOLOGY</h2>
                </div>
                <div className="chora-banner__right">
                    <p className="chora-banner__text">An anthology short film that explores five speculative story worlds all connected by Chōra; the space between universes.</p>
                    <div className="chora-banner__buttons">
                        <ProgressBar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChoraBanner;