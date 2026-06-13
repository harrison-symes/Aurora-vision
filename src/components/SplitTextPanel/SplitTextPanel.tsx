import cn from "classnames"
import "./SplitTextPanel.scss"
import SplitContentBlock, { ISplitContentBlock } from "./SplitContentBlock";

interface IProps {
    leftContent: ISplitContentBlock;
    rightContent: ISplitContentBlock;
}

const SplitTextPanel = (props: IProps) => {
    return (
        <div className="split-text-panel">
            <div className="split-text-panel__inner">
                <SplitContentBlock content={props.leftContent} />
                <SplitContentBlock content={props.rightContent} className="split-text-panel__content--grey" />
            </div>
        </div>
    )
}

export default SplitTextPanel