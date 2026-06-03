import { useDispatch, useSelector } from "react-redux";
import "./ChoraBubble.scss";
import { ChoraWorlds, mapWorldToData } from "./choraData";
import { useMemo } from "react";
import { selectChoraWorld } from "../../reducers/chora.reducers";
import { getSelectedChoraWorld } from "../../selectors/chora.selectors";

import cn from "classnames"

interface IChoraBubbleProps {
    world: ChoraWorlds;
}

const ChoraBubble = (props: IChoraBubbleProps) => {
    const dispatch = useDispatch();
    const selectedChoraWorld = useSelector(getSelectedChoraWorld);

    const data = useMemo(() => mapWorldToData[props.world],[props.world])

    const onClick = () => {
        const isAlreadySelected = selectedChoraWorld === props.world;
        dispatch(selectChoraWorld(props.world));
        
        // If already selected, scroll to panel
        if (isAlreadySelected) {
            setTimeout(() => {
                const panel = document.querySelector('.chora-info-panel');
                if (panel) {
                    const panelBottom = panel.getBoundingClientRect().bottom + window.scrollY;
                    const scrollPosition = panelBottom - window.innerHeight;
                    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
                }
            }, 0);
        }
    }

    return (
        <div className={cn("chora-bubble", {
            "active": selectedChoraWorld === props.world,
        })}>
            <img draggable="false" onClick={onClick} src={data.image} alt="Chora Bubble" className="chora-bubble__image" />
        </div>
    )
}

export default ChoraBubble;
