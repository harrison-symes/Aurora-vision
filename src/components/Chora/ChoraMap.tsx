import ChoraBubble from "./ChoraBubble";
import { ChoraWorlds } from "./choraData";
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
                    <ChoraBubble world={ChoraWorlds.Momentum} />
                    <ChoraBubble world={ChoraWorlds.Coherence} />
                </div>
                <div className="chora-map__bubble-row chora-map__bubble-row--2">
                    <ChoraBubble world={ChoraWorlds.SecondGenesis} />
                    <ChoraBubble world={ChoraWorlds.Octopod} />
                </div>
                <div className="chora-map__bubble-row chora-map__bubble-row--3">
                    <ChoraBubble world={ChoraWorlds.GodComplex} />
                </div>
            </div>
        </div>
    )
}

export default ChoraMap;