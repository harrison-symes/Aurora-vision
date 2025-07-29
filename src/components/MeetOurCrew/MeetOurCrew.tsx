import * as React from "react";

const MeetOurCrew = () => {
  return (
    <div className="meet-our-crew">
      <div className="meet-our-crew__block">
        <img
          src="/images/meet_our_crew_1.png"
          className="meet-our-crew__image"
        />
        <div className="meet-our-crew__text-container">
          <div className="meet-our-crew__title">MEET OUR CREW</div>
          <div className="meet-our-crew__paragraph">
            Temporal began as a small passion project—but quickly grew into a
            collaborative effort, shaped by the dedication, creativity and mahi
            of an exceptional team.
          </div>
          <div className="meet-our-crew__paragraph">
            From pre-production through post, this film was shaped by a
            passionate group of collaborators who brought their creativity,
            precision, and perseverance to every stage of the process.
            Designers, builders, technicians, performers, and coordinators
            worked tirelessly to help us realise a world that feels tactile,
            lived-in, and emotionally resonant.
          </div>
        </div>
      </div>
      <div className="meet-our-crew__block meet-our-crew__block--reverse">
        <img
          src="/images/meet_our_crew_2.png"
          className="meet-our-crew__image meet-our-crew__image-2"
        />
        <div className="meet-our-crew__text-container">
          <div className="meet-our-crew__paragraph">
            Our spaceship set, practical props, visual effects, and soundscapes
            were all handcrafted with care and commitment, under tight timelines
            and challenging conditions. Every detail on screen is a direct
            result of countless hours spent in workshops, studios, and editing
            rooms by people who believed in the story and world we were
            building.
          </div>
          <div className="meet-our-crew__paragraph">
            We are deeply grateful to the crew who gave their time, energy, and
            expertise to Temporal. This film simply wouldn’t exist without their
            efforts, and it stands as a testament to what can be achieved when
            passionate people come together to build something bold and
            imaginative - together.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurCrew;
