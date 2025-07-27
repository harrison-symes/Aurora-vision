import * as React from "react";
import TextBlockWithImage from "../components/TextBlockWithImage/TextBlockWithImage";
import ImmersiveBlock from "../components/ImmsersiveBlock/ImmersiveBlock";
import YoutubeBlock from "../components/YoutubeBlock/YoutubeBlock";

const Temporal = () => {
  return (
    <div className="page__container">
      <YoutubeBlock
        titleImageUrl="/images/temporal_logo.png"
        paragraphs={[
          `"TEMPORAL" is a sci-fi short film that follows a spaceman struggling to survive on a distant alien world after an ion storm brings down is survey ship.`,
          "Determined to find his missing co-pilot, he pushes forward—but soon discovers that there’s something deeply unsettling about this planet.",
        ]}
      />
      <TextBlockWithImage
        imageUrl="/images/directors.png"
        bgColour="grey"
        paragraphs={[
          "JAMES TWEDDLE and WESTON SYMES are longtime creative collaborators with a shared obsession for strange worlds, speculative futures, and stories that bend reality. TEMPORAL marks their latest entry into the realm of genre filmmaking; blend",
          "Their creative history spans short films, music videos, and experimental mixed-media work, often drawing inspiration from cosmic horror, retro-futurism, and the tactile grit of early sci fi cinema.",
          "Their approach to directing is deeply collaborative, not just with each other but with the entire crew—favouring practical effects, found materials, and visual storytelling that rewards a second viewing. TEMPORAL is a testament to that ethos: strange, scrappy, and full of heart.",
        ]}
        title="MEET THE DIRECTORS"
        imageClass="directors-image"
      />
      <ImmersiveBlock
        bgClass="immersive-block--boots"
        imageUrl="/images/boots_cutout.png"
        link=""
        title="BOOTS"
        paragraphs={[
          "Played by CHARLIE JONES, BOOTS is the eager heart of the Aion Scientific Expedition. A former planetside specialist, he earned his call-sign for always pushing to be the first to put boots on the ground during landings.",
        ]}
      />
      <ImmersiveBlock
        bgClass="immersive-block--emmons"
        imageUrl="/images/emmons_cutout.png"
        link=""
        title="EMMONS"
        paragraphs={[
          "Played by ALAINA PITT, EMMONS is the tough, seasoned backbone of the Aion Expedition. A lifelong spacer with a no-nonsense edge, they live for discovery. In Temporal, their disappearance ignites the story and sends BOOTS on a journey into the unknown.",
        ]}
        isReverse
      />
    </div>
  );
};

export default Temporal;
