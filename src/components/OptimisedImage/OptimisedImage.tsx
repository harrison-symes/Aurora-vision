import useOptimizedBackground from "../../hooks/useOptimisedBackground";

interface IProps
  extends Exclude<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> {
  imageUrlSlow: string;
  imageUrl: string;
  alt: string;
}

const OptimisedImage = ({
  imageUrlSlow: imageSmall,
  imageUrl: imageLarge,
  ...props
}: IProps) => {
  const image = useOptimizedBackground(imageSmall, imageLarge);
  return <img {...props} src={image} alt={props.alt} />;
};

export default OptimisedImage;
