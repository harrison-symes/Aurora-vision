import * as React from "react";
import AboutUsHero from "../components/Heros/AboutUsHero";
import MemberFrame from "../components/MemberFrame/MemberFrame";
import TextBlockWithImage from "../components/TextBlockWithImage/TextBlockWithImage";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

import spaceship from "../assets/images/spaceship.webp";
import jamesTweddle from "../assets/images/about-us/james-tweddle.webp";
import westonSymes from "../assets/images/about-us/weston-symes.webp";
import charlieJones from "../assets/images/about-us/charlie-jones.webp";
import esther from "../assets/images/about-us/esther.webp";
import manny from "../assets/images/about-us/manny.webp";
import jeremyBrow from "../assets/images/about-us/jeremy-brow.webp";
import harrisonSymes from "../assets/images/about-us/harrison-symes.webp";
import Seo from "../components/Seo/Seo";

const AboutUs = () => {
  const navigate = useNavigate();

  const onClickJerryMe = () => {
    navigate("/jerry-me");
  };

  return (
    <div>
      <Seo
        title="About us"
        path="/about-us"
        description="AuroraVision is a New Zealand filmmaker collective specializing in film production, cinematography, editing, documentaries, music videos, commercial content, and visual storytelling."
      />
      <AboutUsHero />
      <TextBlockWithImage
        imageUrl={spaceship}
        imageClass="space-ship hide-mobile"
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
        role="Co-Founder, Director"
      />
      <MemberFrame
        imageUrl={westonSymes}
        variant="white"
        name="WESTON SYMES"
        role="Co-Founder, VFX Artist"
      />
      <MemberFrame
        imageUrl={charlieJones}
        variant="grey"
        name="CHARLIE JONES"
        role="Actor, Artist"
      />
      <MemberFrame
        imageUrl={esther}
        variant="white"
        name="ESTHER SUSHAMES"
        role="Co-Producer"
      />
      <MemberFrame
        imageUrl={manny}
        variant="grey"
        name="MANNY CABALLERO"
        role="Co-Producer"
      />
      <MemberFrame
        imageUrl={jeremyBrow}
        variant="white"
        name="JEREMY BROW"
        onImageClick={onClickJerryMe}
        role="Actor, Writer"
      />
      <MemberFrame
        imageUrl={harrisonSymes}
        variant="grey"
        name="HARRISON SYMES"
        role="Web Developer, Writer"
      />
    </div>
  );
};

export default AboutUs;
