import * as React from "react";
import TextBlockWithImage from "../components/TextBlockWithImage/TextBlockWithImage";
import ImmersiveBlock from "../components/ImmsersiveBlock/ImmersiveBlock";
import YoutubeBlock from "../components/YoutubeBlock/YoutubeBlock";
import MeetOurCrew from "../components/MeetOurCrew/MeetOurCrew";

import temporalLogo from "../svg/temporal-logo.svg";
import JeremyLetter from "../components/Jeremy/JeremyLetter";
import { useSelector } from "react-redux";
import { getAreAllJeremyLettersClicked } from "../selectors/jeremy.selectors";

const Temporal = () => {
  const areAllLettersClicked = useSelector(getAreAllJeremyLettersClicked);

  const directorsText = areAllLettersClicked
    ? [
        <span>
          <span className="jeremy-letter--clicked">JEREMY</span> is a longtime
          menace to linear storytelling, common sense, and the space-time
          continuum. Known for going absolutely Jeremy Mode at the drop of a hat
          (or the sound of a distant synth), his work blurs the lines between
          reality, fever dream, and whatever he had for lunch.
        </span>,
        <span>
          JEREMY MODE marks his latest descent into narrative chaos—blending
          unexplainable dance moves, cosmic absurdity, and the eerie hum of an
          off-brand VHS player left on overnight. It’s strange, it’s scrappy,
          and it’s undeniably Jeremy.
        </span>,
        <span>
          His creative history spans short films, forbidden sketches, whispered
          legends, and several public transportation bans. He draws inspiration
          from cursed media, late-night infomercials, and the feeling you get
          when you accidentally enter a broom closet at a party but decide to
          stay.
        </span>,
        <span>
          Jeremy’s directing style is collaborative, anarchic, and occasionally
          prophetic—favouring cardboard sets, practical illusions, and
          storytelling that gets weirder the more you watch it. JEREMY MODE is a
          love letter to doing too much, knowing too little, and making it work
          anyway.
        </span>,
      ]
    : [
        <span>
          <JeremyLetter letterString="J" letterCode="j" />
          AMES TWEDDLE and WESTON SYMES ar
          <JeremyLetter letterString="e" letterCode="e" /> longtime c
          <JeremyLetter letterCode="r" letterString="r" />
          <JeremyLetter letterString="e" letterCode="e2" />
          ative collaborators with a shared obsession for strange worlds,
          speculative futures, and stories that bend reality. TEMPORAL{" "}
          <JeremyLetter letterCode="m" letterString="m" />
          arks their latest entr
          <JeremyLetter letterCode="y" letterString="y" /> into the realm of
          genre filmmaking; blending cassette futurism sci-fi, cosmic horror,
          and isolation into a tightly wound short film.",
        </span>,
        "Their creative history spans short films, music videos, and experimental mixed-media work, often drawing inspiration from cosmic horror, retro-futurism, and the tactile grit of early sci fi cinema.",
        "Their approach to directing is deeply collaborative, not just with each other but with the entire crew—favouring practical effects, found materials, and visual storytelling that rewards a second viewing. TEMPORAL is a testament to that ethos: strange, scrappy, and full of heart.",
      ];

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
        slowImageUrl={
          areAllLettersClicked
            ? "images/about-us/jerry-me.png"
            : "/images/temporal/directors-min.png"
        }
        imageUrl={
          areAllLettersClicked
            ? "images/about-us/jerry-me.png"
            : "/images/temporal/directors.png"
        }
        bgColour="grey"
        paragraphs={directorsText}
        title={areAllLettersClicked ? "MEET JEREMY" : "MEET THE DIRECTORS"}
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
          `Played by ${
            areAllLettersClicked ? "JEREMY BROW" : "CHARLIE JONES"
          }, BOOTS is the eager heart of the Aion Scientific Expedition. A former planetside specialist, he earned his call-sign for always pushing to be the first to put boots on the ground during landings.`,
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
          `Played by ${
            areAllLettersClicked ? "JEREMY BROW" : "ALAINA PITT"
          }, EMMONS is the tough, seasoned backbone of the Aion Scientific Expedition. A lifelong spacer with a no-nonsense edge, they live for discovery. In Temporal, their disappearance ignites the story and sends BOOTS on a journey into the unknown.`,
        ]}
        isReverse
      />
      <MeetOurCrew />
      <TextBlockWithImage
        imageUrl={
          areAllLettersClicked
            ? "/images/temporal/jeremy-script.png"
            : "/images/temporal/script.png"
        }
        slowImageUrl={
          areAllLettersClicked
            ? "/images/temporal/jeremy-script.png"
            : "/images/temporal/script-min.png"
        }
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
