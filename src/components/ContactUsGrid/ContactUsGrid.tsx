import * as React from "react";
import ContactForm from "../ContactForm/ContactForm";

const ContactUsGrid = () => {
  return (
    <div className="contact-us-grid__container">
      <div className="contact-us-grid__row">
        <div className="contact-us-grid__tile contact-us-grid__text-block">
          <div className="contact-us-grid__title">OUR SERVICES</div>
          <p className="contact-us-grid__paragraph">
            We collaborate with artists, musicians, and storytellers to bring
            bold creative visions to life - whether it's a short film, music
            video, or experimental visual.
          </p>
          <p className="contact-us-grid__paragraph">
            We can lead full projects from concept to delivery, or join forces
            to help elevate your work with our unique skills and visual style.
          </p>
        </div>
        <div className="contact-us-grid__tile contact-us-grid__tile--grey">
          <ContactForm />
        </div>
      </div>
      <div className="contact-us-grid__row contact-us-grid__row--2">
        <div className="contact-us-grid__tile contact-us-grid__tile--grey">
          <img
            src="/images/contact-us/charlie-phone.png"
            className="contact-us-grid__image"
          />
        </div>
        <div className="contact-us-grid__tile">
          <div className="contact-us-grid__text-block">
            <div className="contact-us-grid__offering__main">
              CREATIVE DIRECTION & DEVELOPMENT
            </div>
            <p className="contact-us-grid__offering__subtitle">
              Concepting, storyboarding, and creative ideation to shape the
              vision.
            </p>
            <div className="contact-us-grid__offering__main">
              FILM & VIDEO PRODUCTION
            </div>
            <p className="contact-us-grid__offering__subtitle">
              Music videos, short films, promos - shot and produced with style.
            </p>
            <div className="contact-us-grid__offering__main">
              VISUAL EFFECTS & MOTION DESIGN
            </div>
            <p className="contact-us-grid__offering__subtitle">
              Dreamlike enhancements, clean compositing, and 3D Animation &
              Effects.
            </p>
            <div className="contact-us-grid__offering__main">
              ART DEPARTMENT & PROP FABRICATION
            </div>
            <p className="contact-us-grid__offering__subtitle">
              Custom props, practical elements, and visual textures for
              worldbuilding.
            </p>
            <div className="contact-us-grid__offering__main">
              EDITING & POST-PRODUCTION
            </div>
            <p className="contact-us-grid__offering__subtitle">
              Sharp cuts, colour grading, sound, and delivery across all
              formats.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsGrid;
