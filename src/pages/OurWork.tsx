import * as React from "react";
import OurWorkHero from "../components/Heros/OurWorkHero";
import YoutubeBlock from "../components/YoutubeBlock/YoutubeBlock";

const OurWork = () => {
  return (
    <div>
      <OurWorkHero />
      <YoutubeBlock
        titleImageUrl="/images/temporal_logo.png"
        paragraphs={[
          `"TEMPORAL" is a sci-fi short film that follows a spaceman struggling to survive on a distant alien world after an ion storm brings down is survey ship.`,
          "Determined to find his missing co-pilot, he pushes forward—but soon discovers that there’s something deeply unsettling about this planet.",
        ]}
        videoId="Gh5c3q6LorE"
        heightRatio={9 / 16}
      />
      <YoutubeBlock
        videoId="Q-a7B8SJCt0"
        titleImageUrl="/images/charm_the_wind_logo.png"
        isGrey
        isReverse
        paragraphs={[
          "Charm the Wind was created in collaboration with friend and artist Ekholaliah, bringing their haunting and intimate track to life through a shared visual vision.",
          "Shot over several weekends, the video blends natural light, grungey textures, and complimentary visual effects to evoke a feeling of otherworldly drifting - between memory, emotion, and atmosphere.",
          "Rooted in trust and experimentation, Charm the Wind is a quiet portrait of vulnerability, guided by Ekholaliah’s distinct sonic world.",
        ]}
        heightRatio={3 / 4}
      />
      <YoutubeBlock
        videoId="C70IB3ZnWGU"
        titleImageUrl="/images/life_been_strange_logo.png"
        paragraphs={[
          "Life Been Strange is our first music video with artist MumuDuB - a chaotic, vibrant collage of colour, distortion, and dense visual texture. Warped lenses, shifting clones, and lo-fi grain reflect the unreality of a life lived at the edges.",
          "A deeply rewarding collaboration with one of Pōneke’s most original voices, this project celebrates what’s possible when local artists come together to make something weird, raw, and entirely their own.",
        ]}
        heightRatio={9 / 16}
      />
      <YoutubeBlock
        videoId="ZFmLSYxPrhY"
        titleImageUrl="/images/outcast_logo.png"
        paragraphs={[
          "OUTCAST is a music video for friend, collaborator and artist MumuDub. We follow MumuDub on a journey across Te Whanganui a Tara as they weave an endless rope of blue and orange bandannas through the city, marking space, claiming presence, and leaving traces where they’ve felt erased.",
          "Blending vulnerability with defiance, OUTCAST is a visual anthem for those caught between worlds - too queer, too Māori, too much.",
        ]}
        isGrey
        isReverse
        heightRatio={9 / 16}
      />
    </div>
  );
};

export default OurWork;
