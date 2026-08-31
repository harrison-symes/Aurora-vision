import * as React from "react";
import cn from "classnames";

export type RevealAnimation = "fadeIn" | "fadeInRight" | "fadeInLeft";

interface IRevealProps {
  animation?: RevealAnimation;
  children: React.ReactNode;
  className?: string;
}

/**
 * Reveals its children when they first scroll into view.
 *
 * The content is visible by default and is only hidden once this has mounted
 * and armed itself, so it can never end up stuck at opacity 0 — which is what
 * happened with the scroll-event library when a block was already in view on
 * arrival and no scroll ever fired.
 */
const Reveal = (props: IRevealProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isArmed, setIsArmed] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useLayoutEffect(() => {
    const element = ref.current;
    if (!element || !props.animation) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      return;
    }

    setIsArmed(true);

    // Fires on first observation too, so a block already in view on arrival
    // reveals immediately rather than waiting for a scroll.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [props.animation]);

  return (
    // The transform lives on the inner element so the outer box never moves;
    // a transform on the wrapper itself pushed it past the viewport, and its
    // own overflow cannot clip that.
    <div ref={ref} className={cn("reveal", props.className)}>
      <div
        className={cn("reveal__inner", {
          [`reveal__inner--${props.animation}`]: props.animation && isArmed,
          "is-visible": isVisible,
        })}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Reveal;
