import * as React from "react";
import ContactForm from "../ContactForm/ContactForm";
import { useSelector } from "react-redux";
import { getIsJeremyCodeSubmitted } from "../../selectors/jeremy.selectors";

const offerings: Array<[string, string]> = [
  [
    "CREATIVE DIRECTION & DEVELOPMENT",
    "Concepting, storyboarding, and creative ideation to shape the vision.",
  ],
  [
    "FILM & VIDEO PRODUCTION",
    "Music videos, short films, promos - shot and produced with style.",
  ],
  [
    "VISUAL EFFECTS & MOTION DESIGN",
    "Dreamlike enhancements, clean compositing, and 3D Animation & Effects.",
  ],
  [
    "ART DEPARTMENT & PROP FABRICATION",
    "Custom props, practical elements, and visual textures for worldbuilding.",
  ],
  [
    "EDITING & POST-PRODUCTION",
    "Sharp cuts, colour grading, sound, and delivery across all formats.",
  ],
];

const jeremyOfferings: Array<[string, string]> = [
  [
    "JEREMY MODE INITIATION",
    "Conceptual chaos, spontaneous brilliance, and visions forged mid-cartwheel.",
  ],
  [
    "HYPER-STYLIZED NONLINEAR STORY OUTPUT",
    "Unscripted monologues, VHS glitches, and camera moves that defy physics.",
  ],
  [
    "REALITY DISTORTION & VIBRANT WIGGLY FX",
    "Visuals enhanced with dream logic, cosmic static, and at least one mysterious orb.",
  ],
  [
    "PROPULSIVE PROP SUMMONING",
    "Cardboard consoles, glowing goo, and whatever we found behind the studio couch.",
  ],
  [
    "EDITING (IN THE VOID)",
    "Unhinged cuts, nostalgic noise, and post-production that whispers your name.",
  ],
];

const ContactUsGrid = () => {
  const isCodeSubmitted = useSelector(getIsJeremyCodeSubmitted);

  return (
    <div className="contact-us-grid__container">
      <div className="contact-us-grid__row">
        <div className="contact-us-grid__tile contact-us-grid__text-block">
          <div className="contact-us-grid__title">
            {isCodeSubmitted ? "JEREMY'S SKILLS" : "OUR SERVICES"}
          </div>
          {isCodeSubmitted ? (
            <>
              <p className="contact-us-grid__paragraph">
                Jeremy Brow operates on pure instinct and caffeine, teaming up
                with anyone brave enough to chase chaotic brilliance—be it a
                music video, cursed artifact, or unclassifiable moving image.
              </p>
              <p className="contact-us-grid__paragraph">
                Whether he's steering the whole ship or jumping in mid-storm,
                Jeremy brings unmatched energy, unpredictable ideas, and a
                visual style that feels like déjà vu in a dream you haven't had
                yet.
              </p>
            </>
          ) : (
            <>
              <p className="contact-us-grid__paragraph">
                We collaborate with artists, musicians, and storytellers to
                bring bold creative visions to life - whether it's a short film,
                music video, or experimental visual.
              </p>
              <p className="contact-us-grid__paragraph">
                We can lead full projects from concept to delivery, or join
                forces to help elevate your work with our unique skills and
                visual style.
              </p>
            </>
          )}
        </div>
        <div className="contact-us-grid__tile contact-us-grid__tile--grey">
          <ContactForm />
        </div>
      </div>
      <div className="contact-us-grid__row contact-us-grid__row--2">
        <div className="contact-us-grid__tile contact-us-grid__tile--grey">
          <img
            src={
              isCodeSubmitted
                ? "/images/about-us/jeremy-mode.png"
                : "/images/contact-us/charlie-phone.png"
            }
            className="contact-us-grid__image"
          />
        </div>
        <div className="contact-us-grid__tile">
          <div className="contact-us-grid__text-block">
            {(isCodeSubmitted ? jeremyOfferings : offerings).map(
              ([title, subtitle]) => (
                <>
                  <div className="contact-us-grid__offering__main">{title}</div>
                  <p className="contact-us-grid__offering__subtitle">
                    {subtitle}
                  </p>
                </>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsGrid;
