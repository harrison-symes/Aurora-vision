import Chevron from "react-chevron";
import "./ChoraInfoPanel.scss";
import { getSelectedChoraWorld } from "../../../selectors/chora.selectors";
import { useDispatch, useSelector } from "react-redux";
import { clearChoraWorld } from "../../../reducers/chora.reducers";
import { useEffect, useMemo, useRef, useState, isValidElement, ReactNode } from "react";
import { mapWorldToData, ChoraData } from "../choraData";

import cn from "classnames";

const getTextFromNode = (node: ReactNode): string => {
    if (node == null || node === false) {
        return "";
    }

    if (typeof node === "string" || typeof node === "number") {
        return String(node);
    }

    if (Array.isArray(node)) {
        return node.map(getTextFromNode).join("");
    }

    if (isValidElement(node)) {
        return getTextFromNode(node.props.children);
    }

    return "";
};

const ANIMATION_DURATION = 400;
const TEXT_CHAR_DELAY = 28;
const LINE_START_DELAY = 120;

const createAnimatedChars = (text: string, idPrefix: string, startDelay = 0) =>
    text.split("").map((char, index) => (
        <span
            key={`${idPrefix}-${index}`}
            className="chora-info-panel__char"
            style={{ animationDelay: `${startDelay + index * TEXT_CHAR_DELAY}ms` }}
        >
            {char}
        </span>
    ));

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

    const descriptionText = useMemo(() => {
        if (!displayedData) {
            return "";
        }

        return typeof displayedData.description === "string"
            ? displayedData.description
            : getTextFromNode(displayedData.description);
    }, [displayedData]);

    const projectText = displayedData ? `Project: ${displayedData.name}` : "";
    const synopsisText = displayedData ? `Synopsis: ${descriptionText}` : "";
    const statusText = displayedData ? `Status: ${displayedData.status}` : "";

    const animationKey = useMemo(
        () => (displayedData ? displayedData.name.replace(/\s+/g, "-").toLowerCase() : ""),
        [displayedData?.name]
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

        if (visibleData && nextData && visibleData.name === nextData.name && !isActive) {
            // Reopen the same world while the panel is closing
            if (closeTimeout.current) {
                window.clearTimeout(closeTimeout.current);
                closeTimeout.current = null;
            }
            setIsActive(true);
            requestAnimationFrame(() => setIsContentVisible(true));
            return;
        }

        if (visibleData && !nextData) {
            // Closing from open
            setIsContentVisible(false);
            setIsActive(false);
            closeTimeout.current = window.setTimeout(() => {
                setVisibleData(null);
                setDisplayedData(null);
            }, ANIMATION_DURATION);
            return () => {
                if (closeTimeout.current) {
                    window.clearTimeout(closeTimeout.current);
                }
            };
        }

        if (visibleData && nextData && visibleData.name !== nextData.name) {
            // Switching between worlds while open
            // Scroll immediately as soon as selection changes
            if (panelRef.current) {
                const panelBottom = panelRef.current.offsetTop + panelRef.current.offsetHeight;
                const scrollPosition = panelBottom - window.innerHeight;
                window.scrollTo({ top: scrollPosition, behavior: 'auto' });
            }

            setIsContentVisible(false);
            closeTimeout.current = window.setTimeout(() => {
                setDisplayedData(nextData);
                setVisibleData(nextData);

                // Then fade in the new content
                requestAnimationFrame(() => setIsContentVisible(true));
            }, 500); // Wait for 0.5s fade out to complete
            return () => {
                if (closeTimeout.current) {
                    window.clearTimeout(closeTimeout.current);
                }
            };
        }
    }, [nextData, visibleData, isActive]);

    useEffect(() => {
        if (isActive && displayedData && isContentVisible) {
            const scrollTimeout = window.setTimeout(() => {
                if (panelRef.current) {
                    const panelBottom = panelRef.current.offsetTop + panelRef.current.offsetHeight;
                    const scrollPosition = panelBottom - window.innerHeight;
                    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
                }
            }, ANIMATION_DURATION);

            return () => window.clearTimeout(scrollTimeout);
        }
    }, [isActive, isContentVisible, displayedData]);

    useEffect(() => {
        return () => {
            if (closeTimeout.current) {
                window.clearTimeout(closeTimeout.current);
            }
        };
    }, []);

    const onClose = () => {
        // Cancel any pending operations
        if (closeTimeout.current) {
            window.clearTimeout(closeTimeout.current);
            closeTimeout.current = null;
        }

        // Hide content immediately
        setIsContentVisible(false);

        // Clear selection immediately to avoid re-open races
        dispatch(clearChoraWorld());

        // Scroll immediately to ChoraMap
        const choraMap = document.querySelector('.chora-map');
        if (choraMap) {
            const mapBottom = choraMap.getBoundingClientRect().bottom + window.scrollY;
            const scrollPosition = mapBottom - window.innerHeight;
            window.scrollTo({ top: Math.max(0, scrollPosition), behavior: 'smooth' });
        }

        // Collapse the panel after a short delay so the scroll feels natural
        closeTimeout.current = window.setTimeout(() => {
            setIsActive(false);
            // Remove content and visible data after collapse animation
            closeTimeout.current = window.setTimeout(() => {
                setVisibleData(null);
                setDisplayedData(null);
                closeTimeout.current = null;
            }, ANIMATION_DURATION);
        }, 180);
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
                        <div className="chora-info-panel__image-wrapper">
                            <img className="chora-info-panel__image" src={displayedData.image} />
                        </div>
                        <div className="chora-info-panel__text">
                            <h3>{createAnimatedChars(projectText, `project-${animationKey}`, 0)}</h3>
                            <h3>{createAnimatedChars(synopsisText, `synopsis-${animationKey}`, projectText.length * TEXT_CHAR_DELAY + LINE_START_DELAY)}</h3>
                            <h3>{createAnimatedChars(statusText, `status-${animationKey}`, (projectText.length + synopsisText.length) * TEXT_CHAR_DELAY + LINE_START_DELAY * 2)}</h3>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ChoraInfoPanel;