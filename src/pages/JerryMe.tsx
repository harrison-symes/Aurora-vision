import * as React from "react";
import AboutUsHero from "../components/Heros/AboutUsHero";
import MemberFrame from "../components/MemberFrame/MemberFrame";

const secret = [2, 6, 7, 4, 1];

const JerryMe = () => {
  const [jeremy, setJeremy] = React.useState<number[]>([]);

  const onJeremyClick = (num: number) => {
    let newJeremy = [...jeremy, num];

    newJeremy.forEach((number, idx) => {
      if (number !== secret[idx]) {
        newJeremy = [];
      }
    });

    setJeremy(newJeremy);
  };

  const missionComplete = () => {
    const body = document.getElementsByTagName("body");

    if (body.length > 0) {
      body[0].classList.add("jeremy-mode");
    }
  };

  React.useEffect(() => {
    const mismatch =
      jeremy.length !== secret.length ||
      jeremy.some((num, idx) => num !== secret[idx]);

    if (!mismatch) {
      missionComplete();
    }
  });

  return (
    <div>
      <AboutUsHero />
      {Array(8)
        .fill(0)
        .map((_, num) => (
          <>
            <MemberFrame
              key={`jeremy-${num}`}
              imageUrl={
                jeremy.find((n) => n === num)
                  ? "/images/about-us/jeremy-mode.png"
                  : "/images/about-us/jeremy-brow.png"
              }
              variant={num % 2 ? "grey" : "white"}
              name={
                jeremy.find((n) => n === num)
                  ? `JERRY ${secret.findIndex((n) => n === num) + 1}`
                  : "JERRY ME"
              }
              onImageClick={() => onJeremyClick(num)}
              imageClass={
                jeremy.find((n) => n === num) ? "jeremy-selected" : undefined
              }
            />
          </>
        ))}
    </div>
  );
};

export default JerryMe;
