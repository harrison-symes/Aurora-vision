import Chevron from "react-chevron";
import "./ChoraInfoPanel.scss";
import { getSelectedChoraWorld } from "../../../selectors/chora.selectors";
import { useDispatch, useSelector } from "react-redux";
import { clearChoraWorld } from "../../../reducers/chora.reducers";
import { useEffect, useMemo, useRef, useState } from "react";
import { mapWorldToData, ChoraData } from "../choraData";

import cn from "classnames";

const ANIMATION_DURATION = 100;

const ChoraInfoPanel = () => {
    const dispatch = useDispatch();
    const selectedChoraWorld = useSelector(getSelectedChoraWorld);
    const [visibleData, setVisibleData] = useState<ChoraData | null>(null);
    const [displayedData, setDisplayedData] = useState<ChoraData | null>(null);
    const [isActive, setIsActive] = useState(false);
    const [isContentVisible, setIsContentVisible] = useState(false);
    const [maxHeight, setMaxHeight] = useState(0);
    const closeTimeout = useRef<number | null>(null);
    const panelRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    
    const nextData = useMemo(
        () => (selectedChoraWorld ? mapWorldToData[selectedChoraWorld] : null),
        [selectedChoraWorld]
    );

    // Measure and update max-height when content changes
    useEffect(() => {
        if (isActive && contentRef.current) {
            const height = panelRef.current?.scrollHeight || 0;
            setMaxHeight(height);
        }
    }, [isActive, displayedData]);

    // Recalculate height when the browser resizes
    useEffect(() => {
        const handleResize = () => {
            if (isActive && panelRef.current) {
                setMaxHeight(panelRef.current.scrollHeight);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isActive]);

    // Handle opening from closed state
    useEffect(() => {
        if (!visibleData && nextData) {
            // Opening from closed
            setVisibleData(nextData);
            setDisplayedData(nextData);
            requestAnimationFrame(() => {
                setIsActive(true);
                requestAnimationFrame(() => setIsContentVisible(true));
            });
            return;
        }

        if (visibleData && !nextData) {
            // Closing from open
            setIsContentVisible(false);
            setIsActive(false);
            closeTimeout.current = window.setTimeout(() => {
                setVisibleData(null);
                setDisplayedData(null);
                // Scroll to ChoraMap bottom after panel closes
                const choraMap = document.querySelector('.chora-map');
                if (choraMap) {
                    const mapBottom = choraMap.getBoundingClientRect().bottom + window.scrollY;
                    const scrollPosition = mapBottom - window.innerHeight;
                    window.scrollTo({ top: Math.max(0, scrollPosition), behavior: 'smooth' });
                }
            }, ANIMATION_DURATION);
            return () => {
                if (closeTimeout.current) {
                    window.clearTimeout(closeTimeout.current);
                }
            };
        }

        if (visibleData && nextData && visibleData.name !== nextData.name) {
            // Switching between worlds while open
            setIsContentVisible(false);
            closeTimeout.current = window.setTimeout(() => {
                setDisplayedData(nextData);
                setVisibleData(nextData);
                requestAnimationFrame(() => setIsContentVisible(true));
            }, 500); // Wait for 0.5s fade out to complete
            return () => {
                if (closeTimeout.current) {
                    window.clearTimeout(closeTimeout.current);
                }
            };
        }
    }, [nextData, visibleData]);

    // Scroll to panel bottom after opening or switching animation completes
    useEffect(() => {
        if (isActive && displayedData && isContentVisible) {
            setTimeout(() => {
                if (panelRef.current) {
                    const panelBottom = panelRef.current.offsetTop + panelRef.current.offsetHeight;
                    const scrollPosition = panelBottom - window.innerHeight;
                    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
                }
            }, ANIMATION_DURATION);
        }
    }, [isActive, isContentVisible, displayedData]);

    useEffect(() => {
        return () => {
            if (closeTimeout.current) {
                window.clearTimeout(closeTimeout.current);
            }
        };
    }, []);

    if (!visibleData) {
        return null;
    }

    const onClose = () => {
        setIsContentVisible(false);
        setIsActive(false);
        // Scroll immediately to ChoraMap
        const choraMap = document.querySelector('.chora-map');
        if (choraMap) {
            const mapBottom = choraMap.getBoundingClientRect().bottom + window.scrollY;
            const scrollPosition = mapBottom - window.innerHeight;
            window.scrollTo({ top: Math.max(0, scrollPosition), behavior: 'smooth' });
        }
        closeTimeout.current = window.setTimeout(() => {
            dispatch(clearChoraWorld());
        }, ANIMATION_DURATION);
    }

    return (
        <div 
            ref={panelRef}
            className={cn("chora-info-panel", { "active": isActive })}
            style={{ maxHeight: isActive ? `${maxHeight}px` : '0px' }}
        >
            <div className="chora-info-panel__chevron" onClick={onClose}>
                <Chevron direction="up" />
            </div>
            {
                displayedData && (
                    <div 
                        ref={contentRef}
                        className={cn("chora-info-panel__content", { "visible": isContentVisible })}
                    >
                        <img className="chora-info-panel__image" src={displayedData.image} />
                        <div className="chora-info-panel__text">
                            <h3>Project: {displayedData.name}</h3>
                            <h3>Synopsis: {displayedData.description}</h3>
                            <h3>Status: {displayedData.status}</h3>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ChoraInfoPanel;