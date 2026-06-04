import { useDispatch, useSelector } from "react-redux";
import "./ChoraBubble.scss";
import { ChoraWorlds, mapWorldToData } from "../choraData";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { selectChoraWorld } from "../../../reducers/chora.reducers";
import { getSelectedChoraWorld } from "../../../selectors/chora.selectors";

import cn from "classnames"
import WorldTooltip from "./WorldTooltip";

interface IChoraBubbleProps {
    world: ChoraWorlds;
    tooltipDirection: "bottom-left" | "bottom-right" | "top-left" | "top-right" | "top";
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

    const bubbleRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);

    const [line, setLine] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });

    const SVG_PADDING = 200;

    const updateLine = useCallback(() => {
        if (!bubbleRef.current || !imageRef.current || !tooltipRef.current) return;

        const wrapper = bubbleRef.current.getBoundingClientRect();
        const image = imageRef.current.getBoundingClientRect();
        const tooltip = tooltipRef.current.getBoundingClientRect();

        const x1 = image.left + image.width / 2 - wrapper.left + SVG_PADDING;
        const y1 = image.top + image.height / 2 - wrapper.top + SVG_PADDING;

        const x2 = tooltip.left + tooltip.width / 2 - wrapper.left + SVG_PADDING;
        const y2 = tooltip.top + tooltip.height / 2 - wrapper.top + SVG_PADDING;

        setLine({ x1, y1, x2, y2 });
    }, [props.tooltipDirection]);

    useLayoutEffect(() => {
        updateLine();

        const raf = requestAnimationFrame(updateLine);

        window.addEventListener("resize", updateLine);
        window.addEventListener("scroll", updateLine, true);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", updateLine);
            window.removeEventListener("scroll", updateLine, true);
        };
    }, [updateLine]);

    useEffect(() => {
        window.addEventListener("resize", updateLine);
        return () => window.removeEventListener("resize", updateLine);
    }, [updateLine]);

    return (
        <div ref={bubbleRef} className={cn("chora-bubble", {
            "active": selectedChoraWorld === props.world,
        })}>
            <img
                ref={imageRef}
                draggable="false"
                onClick={onClick}
                onLoad={updateLine}
                src={data.image}
                alt="Chora Bubble"
                className="chora-bubble__image"
            />
            <svg className="chora-bubble__line" aria-hidden="true">
                <line
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                />
            </svg>
            <WorldTooltip
                direction={props.tooltipDirection}
                worldData={data}
                ref={tooltipRef}
            />
        </div>
    )
}

export default ChoraBubble;
