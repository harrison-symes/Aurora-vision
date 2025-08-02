import * as React from "react";
import TextBlockWithImage from "../components/TextBlockWithImage/TextBlockWithImage";
import ImmersiveBlock from "../components/ImmsersiveBlock/ImmersiveBlock";
import YoutubeBlock from "../components/YoutubeBlock/YoutubeBlock";
import MeetOurCrew from "../components/MeetOurCrew/MeetOurCrew";

import temporalLogo from "../svg/temporal-logo.svg";

const Temporal = () => {
  return (
    <div className="page-container">
      <YoutubeBlock
        titleImageUrl={temporalLogo}
        paragraphs={[
          `"TEMPORAL" is a sci-fi short film that follows a spaceman struggling to survive on a distant alien world after an ion storm brings down his survey ship.`,
          `Determined to find his missing co-pilot, he pushes forward - but soon discovers that there’s something deeply unsettling about this planet.`,
        ]}
        videoId="mqDEVoZMv04"
        heightRatio={9 / 16}
      />
      <TextBlockWithImage
        slowImageUrl="/images/temporal/directors-min.png"
        imageUrl="/images/temporal/directors.png"
        bgColour="grey"
        paragraphs={[
          "JAMES TWEDDLE and WESTON SYMES are longtime creative collaborators with a shared obsession for strange worlds, speculative futures, and stories that bend reality. TEMPORAL marks their latest entry into the realm of genre filmmaking; blending cassette futurism sci-fi, cosmic horror, and isolation into a tightly wound short film.",
          "Their creative history spans short films, music videos, and experimental mixed-media work, often drawing inspiration from cosmic horror, retro-futurism, and the tactile grit of early sci fi cinema.",
          "Their approach to directing is deeply collaborative, not just with each other but with the entire crew—favouring practical effects, found materials, and visual storytelling that rewards a second viewing. TEMPORAL is a testament to that ethos: strange, scrappy, and full of heart.",
        ]}
        title="MEET THE DIRECTORS"
        imageClass="directors-image"
        imageAnimation="fadeInRight"
      />
      <ImmersiveBlock
        bgClass="immersive-block--boots"
        imageUrl="/images/temporal/boots-cutout.png"
        imageUrlSlow="/images/temporal/boots-cutout-min.png"
        bgImageUrl="/images/temporal/boots-background.png"
        bgImageUrlSlow="/images/temporal/boots-background-min.png"
        link=""
        title="BOOTS"
        paragraphs={[
          "Played by CHARLIE JONES, BOOTS is the eager heart of the Aion Scientific Expedition. A former planetside specialist, he earned his call-sign for always pushing to be the first to put boots on the ground during landings.",
        ]}
      />
      <ImmersiveBlock
        bgClass="immersive-block--emmons"
        imageUrl="/images/temporal/emmons-cutout.png"
        imageUrlSlow="/images/temporal/emmons-cutout-min.png"
        bgImageUrl="/images/temporal/emmons-background.png"
        bgImageUrlSlow="/images/temporal/emmons-background-min.png"
        link=""
        title="EMMONS"
        paragraphs={[
          `Played by ALAINA PITT, EMMONS is the tough, seasoned backbone of the Aion Scientific Expedition. A lifelong spacer with a no-nonsense edge, they live for discovery. In Temporal, their disappearance ignites the story and sends BOOTS on a journey into the unknown.`,
        ]}
        isReverse
      />
      <MeetOurCrew />
      <TextBlockWithImage
        imageUrl="/images/temporal/script.png"
        slowImageUrl="/images/temporal/script-min.png"
        bgColour="grey"
        paragraphs={[
          "TEMPORAL was born from a desire to tell a grounded, cosmic sci-fi story. It grew out of a music video collaboration between Weston and James, which featured a simple, pulpy narrative about a lone astronaut exploring an alien world.",
          "That project planted the seed for something darker and more meditative - one that would explore themes of isolation, survival, and the unsettling nature of the cosmic unknown.",
          "Over the year the script developed, it passed through many iterations; at one point Emmons was an AI companion, in another, the entity haunting the story gradually became the astronaut himself across repeating time loops. What stayed consistent was the focus on atmosphere, mystery, and a tactice, analog-futuristic world.",
          "The final film features a fractured cosmic trap and a deeply human story.",
        ]}
        title="THE STORY"
        imageClass="space-ship"
        imageAnimation="fadeIn"
      />
    </div>
  );
};

export default Temporal;
