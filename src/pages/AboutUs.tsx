import * as React from "react";
import AboutUsHero from "../components/Heros/AboutUsHero";
import MemberFrame from "../components/MemberFrame/MemberFrame";
import TextBlockWithImage from "../components/TextBlockWithImage/TextBlockWithImage";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const onClickJerryMe = () => {
    navigate("/jerry-me");
  };

  return (
    <div>
      <AboutUsHero />
      <TextBlockWithImage
        imageUrl="/images/spaceship.png"
        imageClass="space-ship"
        paragraphs={[
          "AURORAVISION is a creative collective crafting tactile, atmosphere-rich media that blends practical craft, visual effects, and speculative storytelling.",
          "With a focus on production design, animation and visual effects. AURORAVISION builds emotionally resonant worlds that feel lived-in, uncanny, and slightly out of time. From lo-fi sci-fi to cosmic dreamscapes, their work explores the edges of genre through meticulous worldbuilding and hybrid visual techniques.",
          "Rooted in Aotearoa and shaped by a love of analog textures, surreal imagery, and collaborative craft, AURORAVISION's films emerge as fragments - inviting audiences into strange, beautiful, and often broken realities.",
        ]}
        imageAnimation="backInLeft"
      />
      <MemberFrame
        imageUrl="/images/about-us/james-tweddle.png"
        variant="grey"
        name="JAMES TWEDDLE"
      />
      <MemberFrame
        imageUrl="/images/about-us/weston-symes.png"
        variant="white"
        name="WESTON SYMES"
      />
      <MemberFrame
        imageUrl="/images/about-us/charlie-jones.png"
        variant="grey"
        name="CHARLIE JONES"
      />
      <MemberFrame
        imageUrl="/images/about-us/jeremy-brow.png"
        variant="white"
        name="JEREMY BROW"
        onImageClick={onClickJerryMe}
      />
      <MemberFrame
        imageUrl="/images/about-us/aidan-falconer.png"
        variant="grey"
        name="AIDAN FALCONER"
      />
      <MemberFrame
        imageUrl="/images/about-us/harrison-symes.png"
        variant="white"
        name="HARRISON SYMES"
      />
    </div>
  );
};

export default AboutUs;
