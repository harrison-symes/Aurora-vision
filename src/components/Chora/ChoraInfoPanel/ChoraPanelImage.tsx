const random = (min: number, max: number) => {
    const randomNumber = Math.random()
    return Math.round(randomNumber * (max - min)) + min
} 

const getStripHTML = (image: string, top: number, stripHeight: number): React.ReactNode => {
    const duration = random(5, 10);
    const name = `glitch-${duration}`;

    return (
        <div
          className="strip"
          style={{
            height: `${stripHeight}px`,
            width: "100%",
            backgroundPosition: `0 -${top}px`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 200px",
            backgroundImage: `url("${image}")`,
            animationName: name,
            animationDuration: `${duration * 1000}ms`,
            animationDelay: `${random(-2, 2)}s`,
            "--glitch-x-1": `${random(-10, 10)}px`,
            "--glitch-hue-1": `${random(-50, 50)}deg`,
            "--glitch-x-2": `${random(-10, 10)}px`,
            "--glitch-hue-2": `${random(-50, 50)}deg`
          } as React.CSSProperties}
        />
    )
};

const getKeyFrames = (
    name: string,
    glitchPercentageDuration: number,
    steps: number = 3,
    tick: number = 0.1
): string => {
    const percentageStep = 100 / steps;

    const keyframes: {
        keys: number[];
        css: Record<string, string | number>;
    }[] = [];

    // First keyframe
    const baseKeys = [0];

    for (let i = 1; i < steps; i++) {
        const p = i * percentageStep;
        baseKeys.push(p);
        baseKeys.push(p + glitchPercentageDuration);
    }

    // Last keyframe
    baseKeys.push(100);

    keyframes.push({
        keys: baseKeys,
        css: {
            transform: "none",
            filter: "hue-rotate(0) drop-shadow(0 0 0 transparent)" // Hack to force animation in Safari
        }
    });

    for (let i = 1; i < steps; i++) {
        const p = i * percentageStep;

        // Blue / red shadow
        const color =
            Math.random() > 0.5 ? "rgb(255 0 0 / 0.1)" : "rgb(0 0 255 / 0.1)";
        const shadowX = random(-4, 4);
        const shadowY = random(-4, 4);

        keyframes.push({
            keys: [p + tick, p + glitchPercentageDuration - tick],
            css: {
                transform: `translateX(var(--glitch-x-${i}))`,
                filter: `hue-rotate(var(--glitch-hue-${i})) drop-shadow(${shadowX}px ${shadowY}px 0 ${color})`
            }
        });
    }

    const css = keyframes
        .map((keyframe) => {
            const keys = keyframe.keys
                .map((key) => `${key.toFixed(2)}%`)
                .join(",\n  ");

            const content = Object.entries(keyframe.css)
                .map(([key, value]) => `  ${key}: ${value};`)
                .join("\n  ");

            return [keys, "{", content, "}"].join("\n  ");
        })
        .join("\n\n  ");

    return `@keyframes ${name} {\n  ${css}\n}`;
};

const getGlitchHTML = (image: string, height: number): React.ReactNode[] => {
    let i = 0;
    const html: React.ReactNode[] = [];

    while (1) {
        const stripHeight = random(1, 6);

        if (i + stripHeight < height) {
            const strip = getStripHTML(image, i, stripHeight);
            html.push(strip);
        } else {
            // Last strip
            const strip = getStripHTML(image, i, height - i);
            html.push(strip);
            break;
        }

        i = i + stripHeight;
    }

    return html;
};

const ChoraPanelImage = ({ image }: { image: string; }) => {
    const html = getGlitchHTML(image, 200)
    return (
        <div className="chora-info-panel__image">
            {html}
        </div>
    )
}

export default ChoraPanelImage