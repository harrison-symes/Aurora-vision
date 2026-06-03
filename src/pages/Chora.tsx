import ChoraBanner from "../components/Chora/ChoraBanner";
import ChoraInfoPanel from "../components/Chora/ChoraInfoPanel/ChoraInfoPanel";
import ChoraMap from "../components/Chora/ChoraMap";

const Chora = () => {
    return (
        <div>
            <ChoraBanner />
            <ChoraMap />
            <ChoraInfoPanel />
        </div>
    )
}

export default Chora;