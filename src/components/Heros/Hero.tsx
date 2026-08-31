import * as React from "react";
import cn from "classnames";
import useOptimizedBackground from "../../hooks/useOptimisedBackground";

interface IHeroProps {
  /** Low-resolution image, shown until the full one has loaded. */
  imageMin: string;
  image: string;
  title: React.ReactNode;
  /** Small label above the title, e.g. the section name. */
  eyebrow?: string;
  /** Desaturates the still, to match the site's black-and-white photography. */
  mono?: boolean;
}

const Hero = (props: IHeroProps) => {
  const bgImage = useOptimizedBackground(props.imageMin, props.image);

  return (
    <div className="hero-block">
      <div
        className={cn("hero hero--photo", { "hero--mono": props.mono })}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="hero__container">
          {props.eyebrow && <p className="hero__eyebrow">{props.eyebrow}</p>}
          <h1 className="hero__title">{props.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
