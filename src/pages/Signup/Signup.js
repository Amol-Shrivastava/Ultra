import React from "react";
import InfoSection from "../../Components/InfoSection/InfoSection";
import { homeObjThree, homeObjFour } from "./data";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Home;
