import cn from "classnames";
import { IconBaseProps } from "react-icons";

interface IIconContainerProps {
  className?: string;
  children?: React.ReactNode;
}

export interface IIconProps {
  className?: string;
  containerProps?: IIconContainerProps;
  iconProps?: IconBaseProps;
}

const IconContainer = (props: IIconContainerProps) => {
  return (
    <div className={cn("icon flex items-center", props.className)}>
      {props.children}
    </div>
  );
};

export default IconContainer;
