import * as React from "react";
import ContactUsHero from "../components/Heros/ContactUsHero";
import ContactUsGrid from "../components/ContactUsGrid/ContactUsGrid";
import InstagramPrompt from "../components/ContactUsGrid/InstagramPrompt";
import Seo from "../components/Seo/Seo";

const Contact = () => {
  return (
    <div>
      <Seo
        title="Contact"
        path="/contact"
        description="Contact AuroraVision to discuss film production, cinematography, editing, music videos, commercial content, and creative collaborations. We'd love to hear about your next project."
      />
      <ContactUsHero />
      <ContactUsGrid />
      <InstagramPrompt />
    </div>
  );
};

export default Contact;
