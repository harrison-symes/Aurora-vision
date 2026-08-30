import "./ProgressBar.scss";

const PROGRESS = 100;

const ProgressBar = () => (
    <div className="progress">
        <div className="progress__inner">
            <div
                className="progress__fill"
                style={{ "--progress": `${PROGRESS}%` } as React.CSSProperties}
            />
        </div>
        <h2 className="progress__text">{PROGRESS}% funded!</h2>
    </div>
);

export default ProgressBar;
