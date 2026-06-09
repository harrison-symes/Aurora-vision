import * as React from "react";
import ContactUsHero from "../components/Heros/ContactUsHero";
import ContactUsGrid from "../components/ContactUsGrid/ContactUsGrid";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div>
      <Helmet>
          <title>Contact | Auroravision</title>
          <meta
              name="description"
              content="Contact Aurora Vision to discuss film production, cinematography, editing, music videos, commercial content, and creative collaborations. We'd love to hear about your next project."
          />
          <link rel="canonical" href="https://www.auroravision.nz/contact" />
      </Helmet>
      <ContactUsHero />
      <ContactUsGrid />
    </div>
  );
};

export default Contact;
