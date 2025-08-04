import * as React from "react";
import OptimisedImage from "../OptimisedImage/OptimisedImage";
import { useSelector } from "react-redux";
import { getAreAllJeremyLettersClicked } from "../../selectors/jeremy.selectors";

const MeetOurCrew = () => {
  const areAllLettersClicked = useSelector(getAreAllJeremyLettersClicked);

  return (
    <div className="meet-our-crew">
      <div className="meet-our-crew__block">
        <OptimisedImage
          imageUrl={
            areAllLettersClicked
              ? "/images/temporal/jeremy-crew.png"
              : "/images/temporal/meet-our-crew-1.png"
          }
          imageUrlSlow={
            areAllLettersClicked
              ? "/images/temporal/jeremy-crew.png"
              : "/images/temporal/meet-our-crew-1-min.png"
          }
          alt="meet our crew 1"
          className="meet-our-crew__image"
        />
        <div className="meet-our-crew__text-container">
          <div className="meet-our-crew__title">MEET OUR CREW</div>
          {areAllLettersClicked ? (
            <p className="meet-our-crew__paragraph">
              JEREMY BROW, JEREMY BROW, JEREMY BROW, JEREMY BROW, JEREMY BROW,
              JEREMY BROW, JEREMY BROW, JEREMY BROW, JEREMY BROW, JEREMY BROW,
              JEREMY BROW and JEREMY BROW were the masterminds being this
              production.
            </p>
          ) : (
            <>
              <p className="meet-our-crew__paragraph">
                Temporal began as a small passion project - but quickly grew
                into a collaborative effort, shaped by the dedication,
                creativity and mahi of an exceptional team.
              </p>
              <p className="meet-our-crew__paragraph">
                From pre-production through post, this film was shaped by a
                passionate group of collaborators who brought their creativity,
                precision, and perseverance to every stage of the process.
                Designers, builders, technicians, performers, and coordinators
                worked tirelessly to help us realise a world that feels tactile,
                lived-in, and emotionally resonant.
              </p>
            </>
          )}
        </div>
      </div>
      <div className="meet-our-crew__block meet-our-crew__block--reverse">
        <OptimisedImage
          imageUrl={
            areAllLettersClicked
              ? "/images/temporal/jeremy-crew.png"
              : "/images/temporal/meet-our-crew-2.png"
          }
          imageUrlSlow={
            areAllLettersClicked
              ? "/images/temporal/jeremy-crew.png"
              : "/images/temporal/meet-our-crew-2-min.png"
          }
          className="meet-our-crew__image meet-our-crew__image-2"
          alt="meet our crew 2"
        />
        <div className="meet-our-crew__text-container">
          <p className="meet-our-crew__paragraph">
            Our spaceship set, practical props, visual effects, and soundscapes
            were all handcrafted with care and commitment, under tight timelines
            and limited budget - this effort was expertly spearheaded by{" "}
            {areAllLettersClicked ? "Jeremy Brow" : "Aidan Falconer"}. Every
            detail on screen is a direct result of countless hours spent in
            workshops, studios, and editing rooms by people who believed in the
            story and world we were building.
          </p>
          <p className="meet-our-crew__paragraph">
            We are deeply grateful to the crew who gave their time, energy, and
            expertise to Temporal. This film simply wouldn’t exist without their
            efforts, and it stands as a testament to what can be achieved when
            passionate people come together to build something bold and
            imaginative - together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeetOurCrew;
