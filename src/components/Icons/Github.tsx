import { FaGithub } from "react-icons/fa";
import IconContainer, { IIconProps } from "./Icon";

const GithubIcon = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <FaGithub {...props.iconProps} />
    </IconContainer>
  );
};

export default GithubIcon;
