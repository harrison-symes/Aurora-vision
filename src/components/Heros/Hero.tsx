import * as React from "react";
import useOptimizedBackground from "../../hooks/useOptimisedBackground";

interface IHeroProps {
  /** Low-resolution image, shown until the full one has loaded. */
  imageMin: string;
  image: string;
  title: React.ReactNode;
  /** Small label above the title, e.g. the section name. */
  eyebrow?: string;
}

const Hero = (props: IHeroProps) => {
  const bgImage = useOptimizedBackground(props.imageMin, props.image);

  return (
    <div className="hero-block">
      <div
        className="hero hero--photo"
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
