import cn from "classnames"

export interface ISplitContentBlock {
    title: string;
    titleIcon?: string;
    paragraphs: Array<string | React.ReactNode>;
}

interface IProps {
    className?: string;
    content: ISplitContentBlock
}

const SplitContentBlock = (props: IProps) => {
    return (
        <div className={cn("split-text-panel__content", props.className)}>
            <div className="split-text-panel__content__inner">
                {props.content.title && (
                <div className={cn("split-text-panel__title", {
                    "split-text-panel__title--with-icon": props.content.titleIcon
                })}>
                    {props.content.titleIcon && <img alt={props.content.title} src={props.content.titleIcon} className="split-text-panel__title__icon" />}
                    <h1 className="split-text-panel__title__text">{props.content.title}</h1>
                    {props.content.titleIcon && <div className="split-text-panel__title__spacer" />}
                </div>
                )}
                {props.content.paragraphs.map((p) => (
                    <p className="split-text-panel__paragraph">{p}</p>
                ))}
            </div>
        </div>
    )
}

export default SplitContentBlock