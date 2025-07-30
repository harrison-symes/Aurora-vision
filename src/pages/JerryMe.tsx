import * as React from "react";
import AboutUsHero from "../components/Heros/AboutUsHero";
import MemberFrame from "../components/MemberFrame/MemberFrame";
import Footer from "../components/Footer";

const JerryMe = () => {
  return (
    <div>
      <AboutUsHero />
      {Array(5000)
        .fill(0)
        .map(() => (
          <>
            <MemberFrame
              imageUrl="/images/jeremy_brow.png"
              variant="white"
              name="JERRY ME"
            />
            <MemberFrame
              imageUrl="/images/jeremy_brow.png"
              variant="grey"
              name="JERRY ME"
            />
          </>
        ))}
      <Footer />
    </div>
  );
};

export default JerryMe;
