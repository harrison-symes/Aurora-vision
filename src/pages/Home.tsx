import * as React from "react";
import LatestProject from "../components/HomeHero/LatestProject";
import HomeHero from "../components/HomeHero/HomeHero";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <LatestProject />
    </div>
  );
};

export default Home;
