import * as React from "react";
import AboutUsHero from "../components/Heros/AboutUsHero";
import MemberFrame from "../components/MemberFrame/MemberFrame";
import { useDispatch } from "react-redux";
import { allJerrysFound } from "../actions/jeremy.actions";

let secret = [1, 2, 3, 4, 5, 6];

for (let i = secret.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [secret[i], secret[j]] = [secret[j], secret[i]];
}

const JerryMe = () => {
  const dispatch = useDispatch();
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
    dispatch(allJerrysFound());
  };

  React.useEffect(() => {
    const mismatch =
      jeremy.length !== secret.length ||
      jeremy.some((num, idx) => num !== secret[idx]);

    if (!mismatch) {
      missionComplete();
    }
  }, [jeremy]);

  return (
    <div>
      <AboutUsHero />
      {Array(6)
        .fill(0)
        .map((_, num) => (
          <>
            <MemberFrame
              key={`jeremy-${num + 1}`}
              imageUrl={
                jeremy.find((n) => n === num + 1)
                  ? "/images/about-us/jeremy-mode.png"
                  : "/images/about-us/jeremy-brow.png"
              }
              variant={(num + 1) % 2 ? "white" : "grey"}
              name={
                jeremy.find((n) => n === num + 1)
                  ? `JERRY ${secret.findIndex((n) => n === num + 1) + 1}`
                  : "JERRY ME"
              }
              onImageClick={() => onJeremyClick(num + 1)}
              imageClass={
                jeremy.find((n) => n === num + 1)
                  ? "jeremy-selected"
                  : undefined
              }
            />
          </>
        ))}
    </div>
  );
};

export default JerryMe;
