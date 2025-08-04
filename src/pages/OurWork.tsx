import * as React from "react";
import OurWorkHero from "../components/Heros/OurWorkHero";
import YoutubeBlock from "../components/YoutubeBlock/YoutubeBlock";

import temporalLogo from "../svg/temporal-logo.svg";
import { useSelector } from "react-redux";
import { getAreAllSecretsFound } from "../selectors/jeremy.selectors";

const OurWork = () => {
  const areAllSecretsFound = useSelector(getAreAllSecretsFound);
  return (
    <div>
      <OurWorkHero />
      {areAllSecretsFound && (
        <>
          <YoutubeBlock
            titleImageUrl="/images/our-work/quest.png"
            paragraphs={[
              "A couple of boys decide are on a ride, but one that will change their lives forever. After following a trail of clues they discover an old fort and get separated in the process of exploring it. But the two discover that an adventure isn't all fun and games.",
            ]}
            credits={[
              {
                fullName: "JEREMY BROW",
                title: "The star of the show",
              },
              {
                fullName: "JAMES TWEDDLE",
                title: "Later learned he is better behind the camera",
              },
            ]}
            videoId="lExjHGeXTiE"
            heightRatio={3 / 4}
            buttonLink="https://www.youtube.com/@ExplosiveBananaPRO"
          />
          <YoutubeBlock
            titleImageUrl="/images/our-work/backwards.png"
            paragraphs={[
              "Just clips of my friend and i, doing epic stuff in reverse! lots of lolz! thanks to the gummi bear people for the music!",
            ]}
            credits={[
              {
                fullName: "JEREMY BROW",
                title: "Producer",
              },
              {
                fullName: "JAMES TWEDDLE",
                title: "Producer",
              },
              {
                fullName: "A plastic bag",
                title: "Helper",
              },
              {
                fullName: "A wharf",
                title: "Helper",
              },
              {
                fullName: "A banana",
                title: "Helper",
              },
              {
                fullName: "A Magazine",
                title: "Helper",
              },
            ]}
            videoId="YSE-Nfg8sS8"
            heightRatio={3 / 4}
            isGrey
            isReverse
            buttonLink="https://www.youtube.com/@ExplosiveBananaPRO"
          />
        </>
      )}
      <YoutubeBlock
        titleImageUrl={temporalLogo}
        paragraphs={[
          `"TEMPORAL" is a sci-fi short film that follows a spaceman struggling to survive on a distant alien world after an ion storm brings down his survey ship.`,
          `Determined to find his missing co-pilot, he pushes forward - but soon discovers that there’s something deeply unsettling about this planet.`,
        ]}
        videoId="mqDEVoZMv04"
        heightRatio={9 / 16}
        buttonLink="/"
      />
      <YoutubeBlock
        videoId="ZFmLSYxPrhY"
        titleImageUrl="/images/our-work/outcast-logo.png"
        paragraphs={[
          `OUTCAST is a music video for friend, collaborator and artist MumuDub.  OUTCAST is a visual anthem for those caught between worlds - too queer, too Māori, too much.`,
        ]}
        credits={[
          {
            fullName: "James Tweddle",
            title: "DIRECTOR & EDITOR",
          },
          {
            fullName: "Weston Symes",
            title: "VISUAL EFFECTS",
          },
          {
            fullName: "Charlie Jones",
            title: "CAMERA ASSIST",
          },
        ]}
        isGrey
        isReverse
        heightRatio={9 / 16}
      />
      <YoutubeBlock
        videoId="C70IB3ZnWGU"
        titleImageUrl="/images/our-work/life-been-strange-logo.png"
        paragraphs={[
          `Life Been Strange is our first music video with artist MumuDuB - a chaotic, vibrant collage of colour, distortion, and dense visual texture. Warped lenses, shifting clones, and lo-fi grain reflect the unreality of a life lived at the edges.`,
        ]}
        credits={[
          {
            fullName: "James Tweddle",
            title: "DIRECTOR & EDITOR",
          },
          {
            fullName: "Weston Symes",
            title: "VISUAL EFFECTS",
          },
          {
            fullName: "Charlie Jones",
            title: "CAMERA ASSIST",
          },
        ]}
        heightRatio={9 / 16}
      />
      <YoutubeBlock
        videoId="Q-a7B8SJCt0"
        titleImageUrl="/images/our-work/charm-the-wind-logo.png"
        isGrey
        isReverse
        paragraphs={[
          `Charm the Wind was created in collaboration with friend and artist Ekholaliah, bringing their haunting and intimate track to life through a shared visual vision. The video blends natural light, grungey textures, and complimentary visual effects to evoke a feeling of otherworldly drifting - between memory, emotion, and atmosphere.`,
        ]}
        credits={[
          {
            fullName: "James Tweddle",
            title: "DIRECTOR & EDITOR",
          },
          {
            fullName: "Weston Symes",
            title: "VISUAL EFFECTS",
          },
          {
            fullName: "Charlie Jones",
            title: "PRODUCTION ASSIST",
          },
        ]}
        heightRatio={3 / 4}
      />
    </div>
  );
};

export default OurWork;
