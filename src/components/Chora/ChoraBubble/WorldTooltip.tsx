import cn from "classnames"
import { ChoraData } from "../choraData";
import { forwardRef, useEffect, useRef, useState } from "react";

interface IProps {
    direction: "bottom-left" | "bottom-right" | "top-left" | "top-right" | "top";
    worldData: ChoraData;
}

const WorldTooltip = forwardRef<HTMLDivElement, IProps>((props, ref) => {
    return (
        <>
            <div ref={ref} className={cn("world-tooltip", {
                "world-tooltip--bottom-left": props.direction === "bottom-left",
                "world-tooltip--bottom-right": props.direction === "bottom-right",
                "world-tooltip--top-left": props.direction === "top-left",
                "world-tooltip--top-right": props.direction === "top-right",
                "world-tooltip--top": props.direction === "top",
            })}>
                <div className="world-tooltip__text">
                    <p>
                        {props.worldData.name}
                    </p>
                    {/* <p>Status: {props.worldData.status}</p> */}
                </div>
            </div>

        </>
    )
})

export default WorldTooltip

