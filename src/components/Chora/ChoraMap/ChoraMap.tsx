import ChoraBubble from "../ChoraBubble/ChoraBubble";
import { ChoraWorlds } from "../choraData";
import "./ChoraMap.scss"

const ChoraMap = () => {
    return (
        <div className="chora-map">
            <div className="chora-map__inner">
                <div className="chora-map__title">
                    <h1>Chōra</h1>
                    <h2>The space between universes</h2>
                </div>
                <div className="chora-map__bubble-row chora-map__bubble-row--1">
                    <ChoraBubble world={ChoraWorlds.Momentum} tooltipDirection="top-right" />
                    <ChoraBubble world={ChoraWorlds.Coherence} tooltipDirection="top-left" />
                </div>
                <div className="chora-map__bubble-row chora-map__bubble-row--2">
                    <ChoraBubble world={ChoraWorlds.SecondGenesis} tooltipDirection="bottom-left" />
                    <ChoraBubble world={ChoraWorlds.Octopod} tooltipDirection="bottom-right" />
                </div>
                <div className="chora-map__bubble-row chora-map__bubble-row--3">
                    <ChoraBubble world={ChoraWorlds.GodComplex} tooltipDirection="top" />
                </div>
            </div>
        </div>
    )
}

export default ChoraMap;