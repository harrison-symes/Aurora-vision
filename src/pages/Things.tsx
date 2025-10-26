import * as React from "react";
import YoutubeBlock from "../components/YoutubeBlock/YoutubeBlock";
import { ROUTES_INTERNAL } from "../constants/router.constants";
import thingsLogo from "../svg/things-logo.svg";
import TextBlockWithImage from "../components/TextBlockWithImage/TextBlockWithImage";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ThingsCarousel from "../components/Carousel/ThingsCarousel";

const Things = () => {
  return (
    <div>
      <YoutubeBlock
        titleImageUrl={thingsLogo}
        paragraphs={[
          `A travelling salesman returns to a dark realm - just to forget a lesson he learned long ago.`,
          `Created in just 48 hours, THINGS blends surrealism, horror, and absurdity into a haunting reflection on greed and consequence.`,
          `The film was selected as a Regional Finalist and received the Incredibly Strange Award at the 2025 48Hours Film Festival.`,
        ]}
        videoId="oWRv-F90oHs"
        heightRatio={9 / 16}
      />
      <TextBlockWithImage
        slowImageUrl="/images/things/james-and-jan.png"
        imageUrl="/images/things/james-and-jan.png"
        bgColour="grey"
        paragraphs={[
          `AURORAVISION has been entering the 48Hour Film Festival as a production company for three years, and this year we decided to shake up our approach.`,
          `Taking inspiration from some of Tim Hamilton’s previous entries; where he built a set or world prior to the shoot weekend and then shaped the story around those ideas and the competition’s required elements, we set out to do something similar.`,
          `This approach manifested through ideas JAMES developed with the core team: operating within a controlled studio environment, building a surreal limbo world, and assembling a “toybox” filled not only with props, set pieces, and costumes, but also with a talented art team to bring this world to life.`,
        ]}
        title="THE IDEA"
        imageClass="james-and-jan-image"
        // imageAnimation="fadeInRight"
      />
      <TextBlockWithImage
        slowImageUrl="/images/things/team-moves-car.png"
        imageUrl="/images/things/team-moves-car.png"
        bgColour="white"
        isReverse
        paragraphs={[
          `There are countless horror stories about things going awry during the 48Hours shoot weekend; and really, that chaos is part of the fun. Fortunately, the shoot weekend for THINGS was anything but a horror story.`,
          `We’re incredibly proud of the team we built this year and the dedication and mahi everyone brought to the project. With a cast and crew of up to 26 people, we have to give massive props to MANNY CORPUZ, our Producer, and TOM PAINE, our 1st AD, who kept the weekend running smoothly from start to finish.`,
          `Having all departments—from pre- to post-production—working out of the MIRAMAR CREATIVE CENTRE was a huge boon, boosting our efficiency and communication as we brought the world of THINGS to life. We couldn’t be more proud!`,
        ]}
        title="THE SHOOT WEEKEND"
        imageClass="team-moves-car-image"
        // imageAnimation="fadeInRight"
      />
      <ThingsCarousel />
    </div>
  );
};

export default Things;
