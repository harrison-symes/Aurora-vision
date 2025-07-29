import * as React from "react";
import AboutUsHero from "../components/Heros/AboutUsHero";
import MemberFrame from "../components/MemberFrame/MemberFrame";
import TextBlockWithImage from "../components/TextBlockWithImage/TextBlockWithImage";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div>
      <AboutUsHero />
      <TextBlockWithImage
        imageUrl="/images/spaceship.png"
        imageClass="space-ship"
        paragraphs={[
          "AURORAVISION is a creative collective crafting tactile, atmosphere-rich media that blends practical craft, visual effects, and speculative storytelling.",
          "With a focus on production design, animation and visual effects. AURORAVISION builds emotionally resonant world that feel lived-in, uncanny, and slightly out of time. From lo-fi sci-fi to cosmic dreamscapes, their work explores the edges of genre through meticulous worldbuilding and hybrid visual techniques.",
          "Rooted in Aotearoa and shaped by a love of analog textures, surreal imagery, and collaborative craft, AURORAVISION's films emerge as fragments - inviting audiences into strange, beautiful, and often broken realities.",
        ]}
      />
      <MemberFrame
        imageUrl="/images/james_tweddle.png"
        variant="grey"
        name="JAMES TWEDDLE"
      />
      <MemberFrame
        imageUrl="/images/weston_symes.png"
        variant="white"
        name="WESTON SYMES"
      />
      <MemberFrame
        imageUrl="/images/charlie_jones.png"
        variant="grey"
        name="CHARLIE JONES"
      />
      <MemberFrame
        imageUrl="/images/jeremy_brow.png"
        variant="white"
        name="JEREMY BROW"
      />
      <MemberFrame
        imageUrl="/images/aidan_falconer.png"
        variant="grey"
        name="AIDAN FALCONER"
      />
      <MemberFrame
        imageUrl="/images/harrison_symes.png"
        variant="white"
        name="HARRISON SYMES"
      />
      <Footer />
    </div>
  );
};

export default AboutUs;
