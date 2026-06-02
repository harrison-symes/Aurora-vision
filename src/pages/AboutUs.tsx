import * as React from "react";
import AboutUsHero from "../components/Heros/AboutUsHero";
import MemberFrame from "../components/MemberFrame/MemberFrame";
import TextBlockWithImage from "../components/TextBlockWithImage/TextBlockWithImage";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

import spaceship from "../assets/images/spaceship.png";
import jamesTweddle from "../assets/images/about-us/james-tweddle.png";
import westonSymes from "../assets/images/about-us/weston-symes.png";
import charlieJones from "../assets/images/about-us/charlie-jones.png";
import esther from "../assets/images/about-us/esther.png";
import manny from "../assets/images/about-us/manny.png";
import jeremyBrow from "../assets/images/about-us/jeremy-brow.png";
import aidanFalconer from "../assets/images/about-us/aidan-falconer.png";
import harrisonSymes from "../assets/images/about-us/harrison-symes.png";

const AboutUs = () => {
  const navigate = useNavigate();

  const onClickJerryMe = () => {
    navigate("/jerry-me");
  };

  return (
    <div>
      <AboutUsHero />
      <TextBlockWithImage
        imageUrl={spaceship}
        imageClass="space-ship"
        paragraphs={[
          "AURORAVISION is a creative collective crafting tactile, atmosphere-rich media that blends practical craft, visual effects, and speculative storytelling.",
          "With a focus on production design, animation and visual effects. AURORAVISION builds emotionally resonant worlds that feel lived-in, uncanny, and slightly out of time. From lo-fi sci-fi to cosmic dreamscapes, their work explores the edges of genre through meticulous worldbuilding and hybrid visual techniques.",
          "Rooted in Aotearoa and shaped by a love of analog textures, surreal imagery, and collaborative craft, AURORAVISION's films emerge as fragments - inviting audiences into strange, beautiful, and often broken realities.",
        ]}
        imageAnimation="backInLeft"
      />
      <MemberFrame
        imageUrl={jamesTweddle}
        variant="grey"
        name="JAMES TWEDDLE"
      />
      <MemberFrame
        imageUrl={westonSymes}
        variant="white"
        name="WESTON SYMES"
      />
      <MemberFrame
        imageUrl={charlieJones}
        variant="grey"
        name="CHARLIE JONES"
      />
      <MemberFrame
        imageUrl={esther}
        variant="white"
        name="ESTHER SUSHAMES"
      />
      <MemberFrame
        imageUrl={manny}
        variant="grey"
        name="MANNY CABALLERO"
      />
      <MemberFrame
        imageUrl={jeremyBrow}
        variant="white"
        name="JEREMY BROW"
        onImageClick={onClickJerryMe}
      />
      <MemberFrame
        imageUrl={aidanFalconer}
        variant="grey"
        name="AIDAN FALCONER"
      />
      <MemberFrame
        imageUrl={harrisonSymes}
        variant="white"
        name="HARRISON SYMES"
      />
    </div>
  );
};

export default AboutUs;
